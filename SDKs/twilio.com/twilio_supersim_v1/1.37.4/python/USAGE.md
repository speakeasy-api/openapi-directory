<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateEsimProfileRequest(
    security=operations.CreateEsimProfileSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateEsimProfileCreateEsimProfileRequest(
        callback_method="GET",
        callback_url="quas",
        eid="natus",
    ),
)
    
res = s.create_esim_profile(req)

if res.supersim_v1_esim_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->