<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        access_token=shared.SchemeAccessToken(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
res = s.account.get_account()

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->