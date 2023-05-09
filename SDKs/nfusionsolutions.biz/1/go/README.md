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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesHistoryGET(ctx, operations.CurrenciesHistoryGETRequest{
        End: types.MustTimeFromString("2021-10-25T05:21:43.948Z"),
        Format: operations.CurrenciesHistoryGETFormatEnumXML.ToPointer(),
        Interval: sdk.String("quibusdam"),
        Pairs: "unde",
        Start: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
    })
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


### [Currencies](docs/currencies/README.md)

* [CurrenciesHistoryGET](docs/currencies/README.md#currencieshistoryget) - Get historical prices for requested currency pairs
* [CurrenciesRateGET](docs/currencies/README.md#currenciesrateget) - Get latest mid rate for requested currency pairs
* [CurrenciesSummaryGET](docs/currencies/README.md#currenciessummaryget) - Get latest Summary for requested currency pairs
* [CurrenciesSupportedCurrenciesHistoryGET](docs/currencies/README.md#currenciessupportedcurrencieshistoryget) - Get list of currency pairs supported by the history endpoint
* [CurrenciesSupportedCurrenciesRateGET](docs/currencies/README.md#currenciessupportedcurrenciesrateget) - Get list of currencies supported by the rate endpoint
* [CurrenciesSupportedCurrenciesSummaryGET](docs/currencies/README.md#currenciessupportedcurrenciessummaryget) - Get list of currency pairs supported by the Summary endpoint

### [Metals](docs/metals/README.md)

* [MetalsBenchmarkHistoryGET](docs/metals/README.md#metalsbenchmarkhistoryget) - Get historical benchmark prices for requested metals
* [MetalsBenchmarkSummaryGET](docs/metals/README.md#metalsbenchmarksummaryget) - Get latest Benchmark prices for requested metals
* [MetalsBenchmarkSupportedMetalsGET](docs/metals/README.md#metalsbenchmarksupportedmetalsget) - Get list of symbols supported by the benchmark endpoints
* [MetalsSpotAnnualHistoricalPerformanceGET](docs/metals/README.md#metalsspotannualhistoricalperformanceget) - Get Historical Annual Performance for requested metals
* [MetalsSpotHistoricalPerformanceGET](docs/metals/README.md#metalsspothistoricalperformanceget) - Get Historical Performance for requested metals
* [MetalsSpotHistoryGET](docs/metals/README.md#metalsspothistoryget) - Get historical Spot prices for requested metals
* [MetalsSpotRatioHistoryGET](docs/metals/README.md#metalsspotratiohistoryget) - Get historical Spot Ratio prices for requested metals
* [MetalsSpotRatioSummaryGET](docs/metals/README.md#metalsspotratiosummaryget) - Get latest Spot Summary for requested metal ratios
* [MetalsSpotSummaryGET](docs/metals/README.md#metalsspotsummaryget) - Get latest Spot Summary for requested metals
* [MetalsSpotSupportedMetalsGET](docs/metals/README.md#metalsspotsupportedmetalsget) - Get list of symbols supported by the spot endpoints
* [MetalsSupportedCurrenciesMetalsGET](docs/metals/README.md#metalssupportedcurrenciesmetalsget) - Get list of currencies supported by metals endpoints for currency conversion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
