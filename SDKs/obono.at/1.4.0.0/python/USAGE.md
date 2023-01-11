<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        jwt=shared.SchemeJwt(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetAuthRequest(
    security=operations.GetAuthSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)
    
res = s.auth.get_auth(req)

if res.auth_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->