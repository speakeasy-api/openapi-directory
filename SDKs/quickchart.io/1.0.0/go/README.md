# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/quickchart.io/1.0.0/go
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
    res, err := s.GetChart(ctx, operations.GetChartRequest{
        BackgroundColor: sdk.String("corrupti"),
        Chart: sdk.String("provident"),
        Format: sdk.String("distinctio"),
        Height: sdk.Int64(844266),
        Width: sdk.Int64(602763),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChart200ImageJpegBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetChart](docs/sdk/README.md#getchart) - Generate a chart (GET)
* [GetQr](docs/sdk/README.md#getqr) - Generate a QR code (GET)
* [PostChart](docs/sdk/README.md#postchart) - Generate a chart (POST)
* [PostQr](docs/sdk/README.md#postqr) - Generate a QR code (POST)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
