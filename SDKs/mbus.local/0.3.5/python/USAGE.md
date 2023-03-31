<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRequest(
    address="48",
    baudrate="2400",
    device="ttyAMA0",
)
    
res = s.get(req)

if res.mbus_data is not None:
    # handle response
```
<!-- End SDK Example Usage -->