<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CancelAuthorizationRequest(
    authorization_token="corrupti",
)
    
res = s.orders.cancel_authorization(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->