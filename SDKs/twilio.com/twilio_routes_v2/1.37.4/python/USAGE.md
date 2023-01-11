<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchPhoneNumberRequest(
    security=operations.FetchPhoneNumberSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchPhoneNumberPathParams(
        phone_number="repellat",
    ),
)
    
res = s.fetch_phone_number(req)

if res.routes_v2_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->