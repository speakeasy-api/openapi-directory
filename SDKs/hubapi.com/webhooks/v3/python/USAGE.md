<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteWebhooksV3AppIDSettingsClearRequest(
    security=operations.DeleteWebhooksV3AppIDSettingsClearSecurity(
        developer_hapikey=shared.SchemeDeveloperHapikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteWebhooksV3AppIDSettingsClearPathParams(
        app_id=7370411566566390215,
    ),
)
    
res = s.settings.delete_webhooks_v3_app_id_settings_clear(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->