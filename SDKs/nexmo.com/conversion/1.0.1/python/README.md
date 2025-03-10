# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/conversion/1.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        option1=shared.SecurityOption1(
            api_key="YOUR_API_KEY_HERE",
            api_secret="YOUR_API_KEY_HERE",
        ),
    ),
)


req = operations.SmsConversionRequest(
    delivered="0",
    message_id="provident",
    timestamp="distinctio",
)
    
res = s.sms_conversion.sms_conversion(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### sms_conversion

* `sms_conversion` - Tell Nexmo if your SMS message was successful

### voice_conversion

* `voice_conversion` - Tell Nexmo if your voice call was successful
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
