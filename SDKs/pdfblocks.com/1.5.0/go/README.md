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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddImageWatermarkV1(ctx, operations.AddImageWatermarkV1RequestBody{
        File: operations.AddImageWatermarkV1RequestBodyFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
        Image: operations.AddImageWatermarkV1RequestBodyImage{
            Content: []byte("distinctio"),
            Image: "quibusdam",
        },
        Margin: sdk.Float32(1),
        Transparency: sdk.Int(50),
    })
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

### [SDK](docs/sdk/README.md)

* [AddImageWatermarkV1](docs/sdk/README.md#addimagewatermarkv1) - Add an image watermark to a PDF
* [AddPasswordV1](docs/sdk/README.md#addpasswordv1) - Add a password to a PDF
* [AddRestrictionsV1](docs/sdk/README.md#addrestrictionsv1) - Add restrictions to a PDF
* [AddTextWatermarkV1](docs/sdk/README.md#addtextwatermarkv1) - Add a text watermark to a PDF
* [ExtractPagesV1](docs/sdk/README.md#extractpagesv1) - Extract pages from a PDF
* [MergeDocumentsV1](docs/sdk/README.md#mergedocumentsv1) - Merge PDF documents
* [RemovePagesV1](docs/sdk/README.md#removepagesv1) - Remove pages from a PDF
* [RemovePasswordV1](docs/sdk/README.md#removepasswordv1) - Remove the password from a PDF
* [RemoveRestrictionsV1](docs/sdk/README.md#removerestrictionsv1) - Remove the restrictions from a PDF
* [RemoveSignaturesV1](docs/sdk/README.md#removesignaturesv1) - Remove the signatures from a PDF
* [ReversePagesV1](docs/sdk/README.md#reversepagesv1) - Reverse the pages of a PDF
* [RotatePagesV1](docs/sdk/README.md#rotatepagesv1) - Rotate pages in a PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
