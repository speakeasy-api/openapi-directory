<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.DfsSlateOwnershipProjectionsBySlateidRequest(
    format="JSON",
    slate_id="provident",
)
    
res = s.dfs_slate_ownership_projections_by_slateid(req)

if res.dfs_slate_with_ownership_projection is not None:
    # handle response
```
<!-- End SDK Example Usage -->