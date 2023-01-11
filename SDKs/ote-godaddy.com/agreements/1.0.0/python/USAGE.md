<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRequest(
    query_params=operations.GetQueryParams(
        keys=[
            "repellat",
            "ut",
            "autem",
        ],
    ),
    headers=operations.GetHeaders(
        x_market_id="repudiandae",
        x_private_label_id=2378040459682270966,
    ),
)
    
res = s.v1.get(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->