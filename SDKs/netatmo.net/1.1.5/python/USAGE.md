<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DevicelistRequest(
    app_type="app_station",
    device_id="provident",
    get_favorites=False,
)
    
res = s.deprecated.devicelist(req, operations.DevicelistSecurity(
    code_oauth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.na_device_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->