# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/androidpublisher/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AndroidpublisherPurchasesCancelRequest(
    alt="json",
    fields_="corrupti",
    key="provident",
    oauth_token="distinctio",
    package_name="quibusdam",
    pretty_print=False,
    quota_user="unde",
    subscription_id="nulla",
    token="corrupti",
    user_ip="illum",
)
    
res = s.purchases.androidpublisher_purchases_cancel(req, operations.AndroidpublisherPurchasesCancelSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### purchases

* `androidpublisher_purchases_cancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisher_purchases_get` - Checks whether a user's subscription purchase is valid and returns its expiry time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
