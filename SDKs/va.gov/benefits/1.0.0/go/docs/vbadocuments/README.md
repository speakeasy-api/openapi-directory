# VBADocuments

## Overview

VA Benefits document upload functionality

### Available Operations

* [GetBenefitsDocumentUploadDownload](#getbenefitsdocumentuploaddownload) - Download zip of "what the server sees"
* [GetBenefitsDocumentUploadStatus](#getbenefitsdocumentuploadstatus) - Get status for a previous benefits document upload
* [GetBenefitsDocumentUploadStatusReport](#getbenefitsdocumentuploadstatusreport) - Get a bulk status report for a list of previous uploads
* [PostBenefitsDocumentUpload](#postbenefitsdocumentupload) - Get a location for subsequent document upload PUT request
* [PostBenefitsDocumentUploadValidateDocument](#postbenefitsdocumentuploadvalidatedocument) - Validate an individual document against system file requirements
* [PutBenefitsDocumentUpload](#putbenefitsdocumentupload) - Accepts document upload.

## GetBenefitsDocumentUploadDownload

An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VBADocuments.GetBenefitsDocumentUploadDownload(ctx, operations.GetBenefitsDocumentUploadDownloadRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.GetBenefitsDocumentUploadDownloadSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBenefitsDocumentUploadDownload200ApplicationZipBinaryString != nil {
        // handle response
    }
}
```

## GetBenefitsDocumentUploadStatus

Get status for a previous benefits document upload

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VBADocuments.GetBenefitsDocumentUploadStatus(ctx, operations.GetBenefitsDocumentUploadStatusRequest{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
    }, operations.GetBenefitsDocumentUploadStatusSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBenefitsDocumentUploadStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBenefitsDocumentUploadStatusReport

Get a bulk status report for a list of previous uploads

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VBADocuments.GetBenefitsDocumentUploadStatusReport(ctx, shared.DocumentUploadStatusGUIDList{
        Ids: []string{
            "6d8433c1-cd55-4c24-affd-f592287a7572",
            "6d8433c1-cd55-4c24-affd-f592287a7572",
        },
    }, operations.GetBenefitsDocumentUploadStatusReportSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBenefitsDocumentUploadStatusReport200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostBenefitsDocumentUpload

Get a location for subsequent document upload PUT request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VBADocuments.PostBenefitsDocumentUpload(ctx, operations.PostBenefitsDocumentUploadSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostBenefitsDocumentUpload202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostBenefitsDocumentUploadValidateDocument

Using this endpoint will decrease the likelihood of errors associated with individual documents during
the submission process. Validations performed:
* Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")
* Document does not have a user password (an owner password is acceptable)
* File size does not exceed 100 MB
* Page size does not exceed 21" x 21"

Each PDF document is sent as a direct file upload. The request body should contain nothing other than the document in
binary format. Binary multipart/form-data encoding is not supported. This endpoint does NOT validate metadata in JSON
format.

This endpoint does NOT initiate the claims intake process or submit data to that process. After using this endpoint,
individual PDF documents can be combined and submitted as a payload using PUT `/path`.

A `200` response confirms that the individual document provided passes the system requirements.

A `422` response indicates one or more problems with the document that should be resolved before submitting it in the
full document submission payload.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VBADocuments.PostBenefitsDocumentUploadValidateDocument(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostBenefitsDocumentUploadValidateDocument200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutBenefitsDocumentUpload

Accepts document metadata, document binary, and attachment binaries. Full URL, including
query parameters, provided from POST `/document_uploads`.

## Example Payload

The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
endpoint. Most programming languages should have provisions for assembling a multipart
payload like this without having to do so manually.

```
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="metadata"
Content-Type: application/json

{"veteranFirstName": "Jane",
"veteranLastName": "Doe",
"fileNumber": "012345678",
"zipCode": "97202",
"source": "MyVSO",
"docType": "21-22"
"businessLine": "CMP"}
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="content"
Content-Type: application/pdf

<Binary PDF contents>
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="attachment1"
Content-Type: application/pdf

<Binary PDF attachment contents>
--17de1ed8f01442b2a2d7a93506314b76--
```

This PUT request would have an overall HTTP Content-Type header:

```
Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
```

Note that the Content-Disposition parameter "name" in each part must be the expected values
"metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named 
exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
are invalid.

This is an example curl command:

```
curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VBADocuments.PutBenefitsDocumentUpload(ctx, operations.PutBenefitsDocumentUploadRequest{
        ContentMd5: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
