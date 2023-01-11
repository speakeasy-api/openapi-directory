<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRequest(
    path_params=operations.GetPathParams(
        address="sed",
        baudrate=4461333086959994164,
        device="tenetur",
    ),
)
    
res = s.get(req)

if res.mbus_data is not None:
    # handle response
```
<!-- End SDK Example Usage -->