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