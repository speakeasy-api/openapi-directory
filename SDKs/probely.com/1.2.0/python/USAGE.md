<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        jwt_auth=shared.SchemeJwtAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteKeysIDRequest(
    path_params=operations.DeleteKeysIDPathParams(
        id="culpa",
    ),
)
    
res = s.api_keys.delete_keys_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->