<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ChangePasswordRequest(
    path_params=operations.ChangePasswordPathParams(
        shopper_id="vitae",
    ),
    request="ex",
)
    
res = s.v1.change_password(req)

if res.shopper_id is not None:
    # handle response
```
<!-- End SDK Example Usage -->