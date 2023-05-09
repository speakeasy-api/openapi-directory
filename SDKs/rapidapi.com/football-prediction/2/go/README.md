# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/rapidapi.com/football-prediction/2/go
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
    res, err := s.GetAPIV2ListFederations(ctx, operations.GetAPIV2ListFederationsRequest{
        XRapidAPIKey: sdk.String("89bd9d8d-69a6-474e-8f46-7cc8796ed151"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2ListFederations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetAPIV2ListFederations](docs/sdk/README.md#getapiv2listfederations) - Returns an array of all the available federations.
* [GetAPIV2ListMarkets](docs/sdk/README.md#getapiv2listmarkets) - Returns an array of all the supported prediction markets
* [GetAPIV2PerformanceStats](docs/sdk/README.md#getapiv2performancestats) - Returns predictions accuracy in the last 1, 7, 14, 30 days.
* [GetAPIV2Predictions](docs/sdk/README.md#getapiv2predictions) - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
* [GetAPIV2PredictionsID](docs/sdk/README.md#getapiv2predictionsid) - Returns all predictions available for a match id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
