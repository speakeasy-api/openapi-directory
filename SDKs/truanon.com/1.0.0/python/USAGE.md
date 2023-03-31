<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetProfileRequest(
    id="{{your-member-id}}",
    service="{{service-identifier}}",
)
    
res = s.get_profile(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->