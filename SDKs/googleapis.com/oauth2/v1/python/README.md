# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/oauth2/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.Oauth2TokeninfoRequest(
    access_token="corrupti",
    alt="json",
    fields_="provident",
    id_token="distinctio",
    key="quibusdam",
    oauth_token="unde",
    pretty_print=False,
    quota_user="nulla",
    user_ip="corrupti",
)
    
res = s.oauth2_tokeninfo(req)

if res.tokeninfo is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `oauth2_tokeninfo` - Get token info

### userinfo

* `oauth2_userinfo_get` - Get user info
* `oauth2_userinfo_v2_me_get` - Get user info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
