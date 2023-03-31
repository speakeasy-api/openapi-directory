<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAlphaSenderRequest(
    request_body=operations.CreateAlphaSenderCreateAlphaSenderRequest(
        alpha_sender="corrupti",
    ),
    service_sid="provident",
)
    
res = s.create_alpha_sender(req, operations.CreateAlphaSenderSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.messaging_v1_service_alpha_sender is not None:
    # handle response
```
<!-- End SDK Example Usage -->