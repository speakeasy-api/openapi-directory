<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchAccountSettingsRequest(
    subaccount_sid="corrupti",
)
    
res = s.fetch_account_settings(req, operations.FetchAccountSettingsSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.insights_v1_account_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->