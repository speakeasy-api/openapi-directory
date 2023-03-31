<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetApplicationsStatusRequest(
    key="corrupti",
)
    
res = s.application.get_applications_status_(req)

if res.application_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->