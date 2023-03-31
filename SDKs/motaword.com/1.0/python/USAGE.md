<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        mwo_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.DeleteCacheRequest(
    key="corrupti",
)
    
res = s.delete_cache(req)

if res.operation_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->