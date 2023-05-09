# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tokenmetrics.com/1.0.0/go
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
    res, err := s.Correlation(ctx, operations.CorrelationRequest{
        Limit: sdk.String("1000"),
        Tokens: sdk.String("3375, 3306"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [Correlation](docs/sdk/README.md#correlation) - Correlation
* [Indices](docs/sdk/README.md#indices) - Indices
* [InvestorGrades](docs/sdk/README.md#investorgrades) - Investor Grades
* [MarketIndicator](docs/sdk/README.md#marketindicator) - Market Indicator
* [Price](docs/sdk/README.md#price) - Price
* [PricePrediction](docs/sdk/README.md#priceprediction) - Price Prediction
* [QuantmetricsTier1](docs/sdk/README.md#quantmetricstier1) - Quantmetrics Tier 1
* [QuantmetricsTier2](docs/sdk/README.md#quantmetricstier2) - Quantmetrics Tier 2
* [ResistanceSupport](docs/sdk/README.md#resistancesupport) - Resistance & Support
* [ScenarioAnalysis](docs/sdk/README.md#scenarioanalysis) - Scenario Analysis
* [Sentiments](docs/sdk/README.md#sentiments) - Sentiments
* [Tokens](docs/sdk/README.md#tokens) - Tokens
* [TraderGrades](docs/sdk/README.md#tradergrades) - Trader Grades
* [TradingIndicator](docs/sdk/README.md#tradingindicator) - Trading Indicator
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
