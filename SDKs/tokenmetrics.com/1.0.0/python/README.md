# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/tokenmetrics.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CorrelationRequest(
    limit="1000",
    tokens="3375, 3306",
)
    
res = s.correlation(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `correlation` - Correlation
* `indices` - Indices
* `investor_grades` - Investor Grades
* `market_indicator` - Market Indicator
* `price` - Price
* `price_prediction` - Price Prediction
* `quantmetrics_tier1` - Quantmetrics Tier 1
* `quantmetrics_tier2` - Quantmetrics Tier 2
* `resistance_support` - Resistance & Support
* `scenario_analysis` - Scenario Analysis
* `sentiments` - Sentiments
* `tokens` - Tokens
* `trader_grades` - Trader Grades
* `trading_indicator` - Trading Indicator
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
