# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_oauth_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateDeviceCodeCreateDeviceCodeRequest(
    audiences=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    client_sid="unde",
    scopes=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
)
    
res = s.create_device_code(req, operations.CreateDeviceCodeSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.oauth_v1_device_code is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_device_code` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `create_token` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `fetch_certs` - Fetches public JWKs
* `fetch_openid_discovery` - Fetch configuration details about the OpenID Connect Authorization Server
* `fetch_user_info` - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
