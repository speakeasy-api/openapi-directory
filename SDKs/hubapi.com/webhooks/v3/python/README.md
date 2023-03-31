# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hubapi.com/webhooks/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteWebhooksV3AppIDSettingsClearRequest(
    app_id=548814,
)
    
res = s.settings.delete_webhooks_v3_app_id_settings_clear(req, operations.DeleteWebhooksV3AppIDSettingsClearSecurity(
    developer_hapikey="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### settings

* `delete_webhooks_v3_app_id_settings_clear`
* `get_webhooks_v3_app_id_settings_get_all`
* `put_webhooks_v3_app_id_settings_configure`

### subscriptions

* `delete_webhooks_v3_app_id_subscriptions_subscription_id_archive`
* `get_webhooks_v3_app_id_subscriptions_subscription_id_get_by_id`
* `get_webhooks_v3_app_id_subscriptions_get_all`
* `patch_webhooks_v3_app_id_subscriptions_subscription_id_update`
* `post_webhooks_v3_app_id_subscriptions_batch_update_update_batch`
* `post_webhooks_v3_app_id_subscriptions_create`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
