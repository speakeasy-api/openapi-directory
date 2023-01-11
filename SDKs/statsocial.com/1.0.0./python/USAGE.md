<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetApplicationsStatusRequest(
    query_params=operations.GetApplicationsStatusQueryParams(
        key="vitae",
    ),
)
    
res = s.application.get_applications_status_(req)

if res.application_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->