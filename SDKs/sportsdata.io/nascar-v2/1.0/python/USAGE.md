<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DriverDetailsRequest(
    path_params=operations.DriverDetailsPathParams(
        driverid="dolorem",
        format="json",
    ),
)
    
res = s.driver_details(req)

if res.driver is not None:
    # handle response
```
<!-- End SDK Example Usage -->