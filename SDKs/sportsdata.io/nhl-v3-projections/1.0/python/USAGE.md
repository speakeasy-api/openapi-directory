<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DfsSlatesByDateRequest(
    path_params=operations.DfsSlatesByDatePathParams(
        date_="quia",
        format="JSON",
    ),
)
    
res = s.dfs_slates_by_date(req)

if res.dfs_slates is not None:
    # handle response
```
<!-- End SDK Example Usage -->