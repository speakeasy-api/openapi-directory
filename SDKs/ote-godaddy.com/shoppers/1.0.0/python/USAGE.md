<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChangePasswordRequest(
    secret=shared.Secret(
        secret="P@55w0rd+",
    ),
    shopper_id="corrupti",
)
    
res = s.v1.change_password(req)

if res.shopper_id is not None:
    # handle response
```
<!-- End SDK Example Usage -->