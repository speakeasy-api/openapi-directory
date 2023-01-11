<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAccountRequest(
    security=operations.CreateAccountSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateAccountCreateAccountRequest(
        friendly_name="iste",
    ),
)
    
res = s.create_account(req)

if res.api_v2010_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->