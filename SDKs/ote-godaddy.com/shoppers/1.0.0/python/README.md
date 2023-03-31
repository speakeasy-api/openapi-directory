# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ote-godaddy.com/shoppers/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChangePasswordRequest(
    secret=shared.Secret(
        secret="P@55w0rd+",
    ),
    shopper_id="corrupti",
)
    
res = s.v1.change_password(req)

if res.shopper_id is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `change_password` - Set subaccount's password
* `create_subaccount_json` - Create a Subaccount owned by the authenticated Reseller
* `create_subaccount_raw` - Create a Subaccount owned by the authenticated Reseller
* `delete` - Request the deletion of a shopper profile
* `get` - Get details for the specified Shopper
* `get_status` - Get details for the specified Shopper
* `update_json` - Update details for the specified Shopper
* `update_raw` - Update details for the specified Shopper
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
