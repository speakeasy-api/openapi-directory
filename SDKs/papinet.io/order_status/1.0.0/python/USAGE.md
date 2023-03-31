<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetOrdersRequest(
    limit="corrupti",
    offset="provident",
    order_status="Completed",
)
    
res = s.get_orders(req)

if res.list_of_orders is not None:
    # handle response
```
<!-- End SDK Example Usage -->