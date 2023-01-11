<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetOrdersRequest(
    query_params=operations.GetOrdersQueryParams(
        limit="odit",
        offset="a",
        order_status="Cancelled",
    ),
)
    
res = s.get_orders(req)

if res.list_of_orders is not None:
    # handle response
```
<!-- End SDK Example Usage -->