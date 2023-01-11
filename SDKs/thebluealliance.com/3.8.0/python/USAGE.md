<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetStatusRequest(
    security=operations.GetStatusSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.GetStatusHeaders(
        if_modified_since="et",
    ),
)
    
res = s.tba.get_status(req)

if res.api_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->