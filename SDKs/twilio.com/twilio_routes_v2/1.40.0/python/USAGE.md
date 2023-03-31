<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchPhoneNumberRequest(
    phone_number="corrupti",
)
    
res = s.fetch_phone_number(req, operations.FetchPhoneNumberSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.routes_v2_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->