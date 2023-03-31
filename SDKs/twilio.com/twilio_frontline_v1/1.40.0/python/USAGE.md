<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchUserRequest(
    sid="corrupti",
)
    
res = s.fetch_user(req, operations.FetchUserSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.frontline_v1_user is not None:
    # handle response
```
<!-- End SDK Example Usage -->