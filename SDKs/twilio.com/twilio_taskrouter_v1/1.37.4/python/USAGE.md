<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateActivityRequest(
    security=operations.CreateActivitySecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateActivityPathParams(
        workspace_sid="quo",
    ),
    request=operations.CreateActivityCreateActivityRequest(
        available=True,
        friendly_name="vel",
    ),
)
    
res = s.create_activity(req)

if res.taskrouter_v1_workspace_activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->