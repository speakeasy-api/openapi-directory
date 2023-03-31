# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sms77.io/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.AnalyticsRequest(
    end="corrupti",
    group_by="subaccount",
    label="distinctio",
    start="quibusdam",
    subaccounts="unde",
)
    
res = s.analytics.analytics(req)

if res.analytics_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analytics

* `analytics`

### balance

* `balance`

### contacts

* `contacts_get`
* `contacts_post`

### hooks

* `hooks_get`
* `hooks_post`

### lookup

* `lookup`
* `lookup_cnam`
* `lookup_format`
* `lookup_hlr`
* `lookup_mnp`

### pricing

* `pricing`

### sms

* `sms`

### status

* `status`

### validate_for_voice

* `validate_for_voice`

### voice

* `voice`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
