<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAddressRequest(
    path_params=operations.GetAddressPathParams(
        address="cupiditate",
    ),
)
    
res = s.insight.get_address(req)

if res.get_address_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->