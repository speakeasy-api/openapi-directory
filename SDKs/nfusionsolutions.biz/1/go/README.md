# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nfusionsolutions.biz/1/go
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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CurrenciesHistoryGETRequest{
        End: "2021-10-25T05:21:43.948Z",
        Format: "xml",
        Interval: "quibusdam",
        Pairs: "unde",
        Start: "2021-05-14T08:28:11.899Z",
    }

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesHistoryGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Currencies

* `CurrenciesHistoryGET` - Get historical prices for requested currency pairs
* `CurrenciesRateGET` - Get latest mid rate for requested currency pairs
* `CurrenciesSummaryGET` - Get latest Summary for requested currency pairs
* `CurrenciesSupportedCurrenciesHistoryGET` - Get list of currency pairs supported by the history endpoint
* `CurrenciesSupportedCurrenciesRateGET` - Get list of currencies supported by the rate endpoint
* `CurrenciesSupportedCurrenciesSummaryGET` - Get list of currency pairs supported by the Summary endpoint

### Metals

* `MetalsBenchmarkHistoryGET` - Get historical benchmark prices for requested metals
* `MetalsBenchmarkSummaryGET` - Get latest Benchmark prices for requested metals
* `MetalsBenchmarkSupportedMetalsGET` - Get list of symbols supported by the benchmark endpoints
* `MetalsSpotAnnualHistoricalPerformanceGET` - Get Historical Annual Performance for requested metals
* `MetalsSpotHistoricalPerformanceGET` - Get Historical Performance for requested metals
* `MetalsSpotHistoryGET` - Get historical Spot prices for requested metals
* `MetalsSpotRatioHistoryGET` - Get historical Spot Ratio prices for requested metals
* `MetalsSpotRatioSummaryGET` - Get latest Spot Summary for requested metal ratios
* `MetalsSpotSummaryGET` - Get latest Spot Summary for requested metals
* `MetalsSpotSupportedMetalsGET` - Get list of symbols supported by the spot endpoints
* `MetalsSupportedCurrenciesMetalsGET` - Get list of currencies supported by metals endpoints for currency conversion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
