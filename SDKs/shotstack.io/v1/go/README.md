# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/shotstack.io/v1/go
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
    res, err := s.Edit.GetRender(ctx, operations.GetRenderRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.GetRenderSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Edit](docs/edit/README.md)

* [GetRender](docs/edit/README.md#getrender) - Get Render Status
* [PostRender](docs/edit/README.md#postrender) - Render Asset

### [Serve](docs/serve/README.md)

* [DeleteAsset](docs/serve/README.md#deleteasset) - Delete Asset
* [GetAsset](docs/serve/README.md#getasset) - Get Asset
* [GetAssetByRenderID](docs/serve/README.md#getassetbyrenderid) - Get Asset by Render ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
