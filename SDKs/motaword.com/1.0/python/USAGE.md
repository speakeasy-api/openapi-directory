<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        mwo_auth=shared.SchemeMwoAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteCacheRequest(
    path_params=operations.DeleteCachePathParams(
        key="quia",
    ),
)
    
res = s.delete_cache(req)

if res.operation_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->