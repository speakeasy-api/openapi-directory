<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAccountConfigCreateAccountConfigRequest(
    key="corrupti",
    value="provident",
)
    
res = s.create_account_config(req, operations.CreateAccountConfigSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.microvisor_v1_account_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->