<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRequest(
    path_params=operations.GetPathParams(
        order_id="eius",
    ),
    headers=operations.GetHeaders(
        x_market_id="aut",
        x_shopper_id="nam",
    ),
)
    
res = s.v1.get(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->