<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAreasRequest(
    query_params=operations.GetAreasQueryParams(
        format="xml",
    ),
)
    
res = s.resources.get_areas(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->