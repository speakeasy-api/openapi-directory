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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CorrelationRequest{
        Limit: "1000",
        Tokens: "3375, 3306",
    }

    ctx := context.Background()
    res, err := s.Correlation(ctx, req)
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

### SDK SDK

* `Correlation` - Correlation
* `Indices` - Indices
* `InvestorGrades` - Investor Grades
* `MarketIndicator` - Market Indicator
* `Price` - Price
* `PricePrediction` - Price Prediction
* `QuantmetricsTier1` - Quantmetrics Tier 1
* `QuantmetricsTier2` - Quantmetrics Tier 2
* `ResistanceSupport` - Resistance & Support
* `ScenarioAnalysis` - Scenario Analysis
* `Sentiments` - Sentiments
* `Tokens` - Tokens
* `TraderGrades` - Trader Grades
* `TradingIndicator` - Trading Indicator
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
