<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostRequest(
    security=operations.PostSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.Request(
        ip="nobis",
    ),
)
    
res = s.main.post_(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->