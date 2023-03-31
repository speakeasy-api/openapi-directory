# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/pdfblocks.com/1.5.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddImageWatermarkV1RequestBody{
        File: operations.AddImageWatermarkV1RequestBodyFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
        Image: operations.AddImageWatermarkV1RequestBodyImage{
            Content: []byte("distinctio"),
            Image: "quibusdam",
        },
        Margin: 1,
        Transparency: 50,
    }

    ctx := context.Background()
    res, err := s.AddImageWatermarkV1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddImageWatermarkV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `AddImageWatermarkV1` - Add an image watermark to a PDF
* `AddPasswordV1` - Add a password to a PDF
* `AddRestrictionsV1` - Add restrictions to a PDF
* `AddTextWatermarkV1` - Add a text watermark to a PDF
* `ExtractPagesV1` - Extract pages from a PDF
* `MergeDocumentsV1` - Merge PDF documents
* `RemovePagesV1` - Remove pages from a PDF
* `RemovePasswordV1` - Remove the password from a PDF
* `RemoveRestrictionsV1` - Remove the restrictions from a PDF
* `RemoveSignaturesV1` - Remove the signatures from a PDF
* `ReversePagesV1` - Reverse the pages of a PDF
* `RotatePagesV1` - Rotate pages in a PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
