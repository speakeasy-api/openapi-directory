<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRequest(
    x_market_id="corrupti",
    x_shopper_id="provident",
    order_id="distinctio",
)
    
res = s.v1.get(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->