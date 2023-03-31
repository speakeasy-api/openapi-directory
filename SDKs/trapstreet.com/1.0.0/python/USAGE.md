<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAddressRequest(
    address="5786 Little Streets",
)
    
res = s.get_address_(req)

if res.get_address_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->