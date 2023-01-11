<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchAccountSettingsRequest(
    security=operations.FetchAccountSettingsSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    query_params=operations.FetchAccountSettingsQueryParams(
        subaccount_sid="dolor",
    ),
)
    
res = s.fetch_account_settings(req)

if res.insights_v1_account_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->