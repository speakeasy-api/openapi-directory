<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.DriverDetailsRequest(
    driverid="corrupti",
    format="json",
)
    
res = s.driver_details(req)

if res.driver is not None:
    # handle response
```
<!-- End SDK Example Usage -->