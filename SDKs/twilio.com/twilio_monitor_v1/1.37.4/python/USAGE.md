<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchAlertRequest(
    security=operations.FetchAlertSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchAlertPathParams(
        sid="dicta",
    ),
)
    
res = s.fetch_alert(req)

if res.monitor_v1_alert_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->