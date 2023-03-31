<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAccountCreateAccountRequest(
    friendly_name="corrupti",
)
    
res = s.create_account(req, operations.CreateAccountSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.api_v2010_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->