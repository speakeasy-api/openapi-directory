<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCustomerProfileRequest(
    security=operations.CreateCustomerProfileSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCustomerProfileCreateCustomerProfileRequest(
        email="at",
        friendly_name="itaque",
        policy_sid="neque",
        status_callback="nam",
    ),
)
    
res = s.create_customer_profile(req)

if res.trusthub_v1_customer_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->