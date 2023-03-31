<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        jwt="YOUR_API_KEY_HERE",
    ),
)

    
res = s.auth.get_auth()

if res.auth_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->