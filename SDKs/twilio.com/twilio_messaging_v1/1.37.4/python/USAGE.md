<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAlphaSenderRequest(
    security=operations.CreateAlphaSenderSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateAlphaSenderPathParams(
        service_sid="rerum",
    ),
    request=operations.CreateAlphaSenderCreateAlphaSenderRequest(
        alpha_sender="tempore",
    ),
)
    
res = s.create_alpha_sender(req)

if res.messaging_v1_service_alpha_sender is not None:
    # handle response
```
<!-- End SDK Example Usage -->