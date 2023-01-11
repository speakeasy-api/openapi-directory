<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAddressRequest(
    path_params=operations.GetAddressPathParams(
        address="voluptatibus",
    ),
)
    
res = s.get_address_(req)

if res.get_address_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->