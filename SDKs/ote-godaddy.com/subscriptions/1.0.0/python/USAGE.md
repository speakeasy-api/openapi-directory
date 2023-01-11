<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CancelRequest(
    path_params=operations.CancelPathParams(
        subscription_id="tenetur",
    ),
    headers=operations.CancelHeaders(
        x_shopper_id="corrupti",
    ),
)
    
res = s.v1.cancel(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->