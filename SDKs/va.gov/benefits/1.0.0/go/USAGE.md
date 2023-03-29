<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetBenefitsDocumentUploadDownloadRequest{
        Security: operations.GetBenefitsDocumentUploadDownloadSecurity{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetBenefitsDocumentUploadDownloadPathParams{
            ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
    }

    ctx := context.Background()
    res, err := s.VBADocuments.GetBenefitsDocumentUploadDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBenefitsDocumentUploadDownload200ApplicationZipBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->