<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DevicesRequest(
    security=operations.DevicesSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    query_params=operations.DevicesQueryParams(
        os="omnis",
    ),
)
    
res = s.get_devices.devices(req)

if res.os_devices is not None:
    # handle response
```
<!-- End SDK Example Usage -->