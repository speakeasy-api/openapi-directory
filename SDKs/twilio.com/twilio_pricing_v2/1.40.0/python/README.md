# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_pricing_v2/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchTrunkingCountryRequest(
    iso_country="corrupti",
)
    
res = s.fetch_trunking_country(req, operations.FetchTrunkingCountrySecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.pricing_v2_trunking_country_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `fetch_trunking_country` - Fetch a specific Country.
* `fetch_trunking_number` - Fetch pricing information for a specific destination and, optionally, origination phone number.
* `fetch_voice_country` - Fetch a specific Country.
* `fetch_voice_number` - Fetch pricing information for a specific destination and, optionally, origination phone number.
* `list_trunking_country`
* `list_voice_country`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
