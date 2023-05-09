# vbaDocuments

## Overview

VA Benefits document upload functionality

### Available Operations

* [getBenefitsDocumentUploadDownload](#getbenefitsdocumentuploaddownload) - Download zip of "what the server sees"
* [getBenefitsDocumentUploadStatus](#getbenefitsdocumentuploadstatus) - Get status for a previous benefits document upload
* [getBenefitsDocumentUploadStatusReport](#getbenefitsdocumentuploadstatusreport) - Get a bulk status report for a list of previous uploads
* [postBenefitsDocumentUpload](#postbenefitsdocumentupload) - Get a location for subsequent document upload PUT request
* [postBenefitsDocumentUploadValidateDocument](#postbenefitsdocumentuploadvalidatedocument) - Validate an individual document against system file requirements
* [putBenefitsDocumentUpload](#putbenefitsdocumentupload) - Accepts document upload.

## getBenefitsDocumentUploadDownload

An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadRequest;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadResponse;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBenefitsDocumentUploadDownloadRequest req = new GetBenefitsDocumentUploadDownloadRequest("05dfc2dd-f7cc-478c-a1ba-928fc816742c");            

            GetBenefitsDocumentUploadDownloadResponse res = sdk.vbaDocuments.getBenefitsDocumentUploadDownload(req, new GetBenefitsDocumentUploadDownloadSecurity("cum") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBenefitsDocumentUploadDownload200ApplicationZipBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBenefitsDocumentUploadStatus

Get status for a previous benefits document upload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadStatusRequest;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadStatusResponse;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBenefitsDocumentUploadStatusRequest req = new GetBenefitsDocumentUploadStatusRequest("73920592-9396-4fea-b596-eb10faaa2352");            

            GetBenefitsDocumentUploadStatusResponse res = sdk.vbaDocuments.getBenefitsDocumentUploadStatus(req, new GetBenefitsDocumentUploadStatusSecurity("nobis") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBenefitsDocumentUploadStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBenefitsDocumentUploadStatusReport

Get a bulk status report for a list of previous uploads

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadStatusReportResponse;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadStatusReportSecurity;
import org.openapis.openapi.models.shared.DocumentUploadStatusGuidList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DocumentUploadStatusGuidList req = new DocumentUploadStatusGuidList(                new String[]{{
                                add("6d8433c1-cd55-4c24-affd-f592287a7572"),
                                add("6d8433c1-cd55-4c24-affd-f592287a7572"),
                            }});            

            GetBenefitsDocumentUploadStatusReportResponse res = sdk.vbaDocuments.getBenefitsDocumentUploadStatusReport(req, new GetBenefitsDocumentUploadStatusReportSecurity("omnis") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBenefitsDocumentUploadStatusReport200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBenefitsDocumentUpload

Get a location for subsequent document upload PUT request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBenefitsDocumentUploadResponse;
import org.openapis.openapi.models.operations.PostBenefitsDocumentUploadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBenefitsDocumentUploadResponse res = sdk.vbaDocuments.postBenefitsDocumentUpload(new PostBenefitsDocumentUploadSecurity("nemo") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.postBenefitsDocumentUpload202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBenefitsDocumentUploadValidateDocument

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBenefitsDocumentUploadValidateDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBenefitsDocumentUploadValidateDocumentResponse res = sdk.vbaDocuments.postBenefitsDocumentUploadValidateDocument();

            if (res.postBenefitsDocumentUploadValidateDocument200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBenefitsDocumentUpload

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBenefitsDocumentUploadRequest;
import org.openapis.openapi.models.operations.PutBenefitsDocumentUploadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutBenefitsDocumentUploadRequest req = new PutBenefitsDocumentUploadRequest() {{
                contentMd5 = "minima";
            }};            

            PutBenefitsDocumentUploadResponse res = sdk.vbaDocuments.putBenefitsDocumentUpload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
