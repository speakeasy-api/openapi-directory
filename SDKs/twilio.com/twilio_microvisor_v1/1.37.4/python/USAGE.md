<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAppRequest(
    security=operations.DeleteAppSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.DeleteAppPathParams(
        sid="repellat",
    ),
)
    
res = s.delete_app(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->