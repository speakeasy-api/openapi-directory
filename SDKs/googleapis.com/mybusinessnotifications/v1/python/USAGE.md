<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinessnotificationsAccountsGetNotificationSettingRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.accounts.mybusinessnotifications_accounts_get_notification_setting(req)

if res.notification_setting is not None:
    # handle response
```
<!-- End SDK Example Usage -->