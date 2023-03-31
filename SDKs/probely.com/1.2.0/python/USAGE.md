<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        jwt_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.DeleteKeysIDRequest(
    id="jMXUw-BE_2vd",
)
    
res = s.api_keys.delete_keys_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->