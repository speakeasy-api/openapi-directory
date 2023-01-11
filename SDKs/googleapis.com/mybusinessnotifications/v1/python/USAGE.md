<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessnotificationsAccountsGetNotificationSettingRequest(
    path_params=operations.MybusinessnotificationsAccountsGetNotificationSettingPathParams(
        name="repellat",
    ),
    query_params=operations.MybusinessnotificationsAccountsGetNotificationSettingQueryParams(
        dollar_xgafv="2",
        access_token="ut",
        alt="json",
        callback="eum",
        fields="repellendus",
        key="totam",
        oauth_token="facilis",
        pretty_print=False,
        quota_user="ut",
        upload_type="dicta",
        upload_protocol="enim",
    ),
)
    
res = s.accounts.mybusinessnotifications_accounts_get_notification_setting(req)

if res.notification_setting is not None:
    # handle response
```
<!-- End SDK Example Usage -->