<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.DfsSlatesByDateRequest(
    date_="corrupti",
    format="JSON",
)
    
res = s.dfs_slates_by_date(req)

if res.dfs_slates is not None:
    # handle response
```
<!-- End SDK Example Usage -->