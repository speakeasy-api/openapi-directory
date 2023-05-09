# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openuv.io/v1/go
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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetForecast(ctx, operations.GetForecastRequest{
        Alt: sdk.Float64(1050),
        Dt: types.MustTimeFromString("2018-02-04T04:39:06.467Z"),
        Lat: 78.67,
        Lng: 115.67,
        Ozone: sdk.Float64(304.5),
        XAccessToken: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ForecastResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetForecast](docs/sdk/README.md#getforecast) - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
* [GetProtection](docs/sdk/README.md#getprotection) - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
* [GetUv](docs/sdk/README.md#getuv) - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
