<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DevicesRequest(
    os="corrupti",
)
    
res = s.get_devices.devices(req, operations.DevicesSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.os_devices is not None:
    # handle response
```
<!-- End SDK Example Usage -->