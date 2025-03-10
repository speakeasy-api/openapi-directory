# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/verify/1.2.4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VerifyCheckRequest(
    check_request=shared.CheckRequest(
        api_key="abcd1234",
        api_secret="Sup3rS3cr3t!!",
        code="1234",
        ip_address="123.0.0.255",
        request_id="abcdef0123456789abcdef0123456789",
    ),
    format="xml",
)
    
res = s.verify_check(req)

if res.verify_check_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `verify_check` - Verify Check
* `verify_control` - Verify Control
* `verify_request_with_psd2` - PSD2 (Payment Services Directive 2) Request
* `verify_search` - Verify Search

### fraud_management

* `network_unblock` - Request a network unblock

### requests

* `verify_request` - Request a Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
