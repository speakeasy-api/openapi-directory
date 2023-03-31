<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCustomerProfileCreateCustomerProfileRequest(
    email="Larue_Rau85@yahoo.com",
    friendly_name="corrupti",
    policy_sid="illum",
    status_callback="http://physical-pegboard.info",
)
    
res = s.create_customer_profile(req, operations.CreateCustomerProfileSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.trusthub_v1_customer_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->