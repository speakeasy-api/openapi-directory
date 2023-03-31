# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nfusionsolutions.biz/1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        token="YOUR_API_KEY_HERE",
    ),
)


req = operations.CurrenciesHistoryGETRequest(
    end="2021-10-25T05:21:43.948Z",
    format="xml",
    interval="quibusdam",
    pairs="unde",
    start="2021-05-14T08:28:11.899Z",
)
    
res = s.currencies.currencies_history_get(req)

if res.interval_collection_responses is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### currencies

* `currencies_history_get` - Get historical prices for requested currency pairs
* `currencies_rate_get` - Get latest mid rate for requested currency pairs
* `currencies_summary_get` - Get latest Summary for requested currency pairs
* `currencies_supported_currencies_history_get` - Get list of currency pairs supported by the history endpoint
* `currencies_supported_currencies_rate_get` - Get list of currencies supported by the rate endpoint
* `currencies_supported_currencies_summary_get` - Get list of currency pairs supported by the Summary endpoint

### metals

* `metals_benchmark_history_get` - Get historical benchmark prices for requested metals
* `metals_benchmark_summary_get` - Get latest Benchmark prices for requested metals
* `metals_benchmark_supported_metals_get` - Get list of symbols supported by the benchmark endpoints
* `metals_spot_annual_historical_performance_get` - Get Historical Annual Performance for requested metals
* `metals_spot_historical_performance_get` - Get Historical Performance for requested metals
* `metals_spot_history_get` - Get historical Spot prices for requested metals
* `metals_spot_ratio_history_get` - Get historical Spot Ratio prices for requested metals
* `metals_spot_ratio_summary_get` - Get latest Spot Summary for requested metal ratios
* `metals_spot_summary_get` - Get latest Spot Summary for requested metals
* `metals_spot_supported_metals_get` - Get list of symbols supported by the spot endpoints
* `metals_supported_currencies_metals_get` - Get list of currencies supported by metals endpoints for currency conversion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
