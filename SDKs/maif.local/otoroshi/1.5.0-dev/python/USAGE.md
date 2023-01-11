<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AllAPIKeysRequest(
    security=operations.AllAPIKeysSecurity(
        otoroshi_auth=shared.SchemeOtoroshiAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)
    
res = s.apikeys.all_api_keys(req)

if res.api_keys is not None:
    # handle response
```
<!-- End SDK Example Usage -->