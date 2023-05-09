# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/va.gov/benefits/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [VBADocuments](docs/vbadocuments/README.md)

* [GetBenefitsDocumentUploadDownload](docs/vbadocuments/README.md#getbenefitsdocumentuploaddownload) - Download zip of "what the server sees"
* [GetBenefitsDocumentUploadStatus](docs/vbadocuments/README.md#getbenefitsdocumentuploadstatus) - Get status for a previous benefits document upload
* [GetBenefitsDocumentUploadStatusReport](docs/vbadocuments/README.md#getbenefitsdocumentuploadstatusreport) - Get a bulk status report for a list of previous uploads
* [PostBenefitsDocumentUpload](docs/vbadocuments/README.md#postbenefitsdocumentupload) - Get a location for subsequent document upload PUT request
* [PostBenefitsDocumentUploadValidateDocument](docs/vbadocuments/README.md#postbenefitsdocumentuploadvalidatedocument) - Validate an individual document against system file requirements
* [PutBenefitsDocumentUpload](docs/vbadocuments/README.md#putbenefitsdocumentupload) - Accepts document upload.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
