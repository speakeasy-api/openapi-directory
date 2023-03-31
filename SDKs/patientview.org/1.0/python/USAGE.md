<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBasicUserInformationRequest(
    token="corrupti",
)
    
res = s.auth_controller.get_basic_user_information(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->