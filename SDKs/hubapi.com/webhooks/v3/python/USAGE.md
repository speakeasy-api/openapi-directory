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