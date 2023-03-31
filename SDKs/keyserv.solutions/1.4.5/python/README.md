# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/keyserv.solutions/1.4.5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KeysAPICurrentRequest(
    serial="corrupti",
)
    
res = s.keys_api.keys_api_current(req)

if res.keys_api_current_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### keys_api

* `keys_api_current`
* `keys_api_custom`
* `keys_api_expiry`
* `keys_api_find`

### products_api

* `products_api_count`
* `products_api_delete_product`
* `products_api_delete_product2`
* `products_api_find`
* `products_api_list`
* `products_api_patch_product`
* `products_api_patch_product2`
* `products_api_save`

### subscriptions_api

* `subscriptions_api_count`
* `subscriptions_api_delete_subscription`
* `subscriptions_api_delete_subscription2`
* `subscriptions_api_disable`
* `subscriptions_api_disable2`
* `subscriptions_api_enable`
* `subscriptions_api_enable2`
* `subscriptions_api_find`
* `subscriptions_api_list`
* `subscriptions_api_put_subscription`
* `subscriptions_api_put_subscription2`
* `subscriptions_api_save`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
