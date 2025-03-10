# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/pricing/0.0.3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RetrievePrefixPricingRequest(
    api_key="corrupti",
    api_secret="provident",
    prefix="distinctio",
    type="quibusdam",
)
    
res = s.pricing.retrieve_prefix_pricing(req)

if res.pricing_countries_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pricing

* `retrieve_prefix_pricing` - Retrieve outbound pricing for a specific dialing prefix.
* `retrieve_pricing_all_countries` - Retrieve outbound pricing for all countries.
* `retrieve_pricing_country` - Retrieve outbound pricing for a specific country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
