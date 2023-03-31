<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.RedactTransaction(
    id="209ab3c7536542b91e8b5aef032f6861",
    product="sms",
    type="outbound",
)
    
res = s.redact_message(req, operations.RedactMessageSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->