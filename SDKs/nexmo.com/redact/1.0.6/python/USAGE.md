<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RedactMessageRequest(
    security=operations.RedactMessageSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=shared.RedactTransaction(
        id="eos",
        product="sms",
        type="outbound",
    ),
)
    
res = s.redact_message(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->