<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CancelRequest(
    x_shopper_id="corrupti",
    subscription_id="provident",
)
    
res = s.v1.cancel(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->