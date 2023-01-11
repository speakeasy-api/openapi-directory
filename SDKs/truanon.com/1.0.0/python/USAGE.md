<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetProfileRequest(
    query_params=operations.GetProfileQueryParams(
        id="inventore",
        service="quia",
    ),
)
    
res = s.get_profile(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->