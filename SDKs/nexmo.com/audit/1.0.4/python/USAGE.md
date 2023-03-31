<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetEventRequest(
    id="corrupti",
)
    
res = s.get_event(req, operations.GetEventSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.audit_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->