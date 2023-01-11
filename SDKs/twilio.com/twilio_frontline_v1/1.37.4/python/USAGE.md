<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchUserRequest(
    security=operations.FetchUserSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchUserPathParams(
        sid="doloribus",
    ),
)
    
res = s.fetch_user(req)

if res.frontline_v1_user is not None:
    # handle response
```
<!-- End SDK Example Usage -->