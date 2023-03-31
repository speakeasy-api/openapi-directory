<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAddressRequest(
    address="5786 Little Streets",
)
    
res = s.insight.get_address(req)

if res.get_address_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->