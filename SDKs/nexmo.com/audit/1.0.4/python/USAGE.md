<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetEventRequest(
    security=operations.GetEventSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.GetEventPathParams(
        id="fuga",
    ),
)
    
res = s.get_event(req)

if res.audit_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->