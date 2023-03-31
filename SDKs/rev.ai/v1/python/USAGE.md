<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        access_token="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)

    
res = s.account.get_account()

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->