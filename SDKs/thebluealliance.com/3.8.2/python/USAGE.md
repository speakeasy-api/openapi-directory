<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetStatusRequest(
    if_none_match="corrupti",
)
    
res = s.tba.get_status(req, operations.GetStatusSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.api_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->