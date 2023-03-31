<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.DepthChartsRequest(
    format="JSON",
)
    
res = s.depth_charts(req)

if res.team_depth_charts is not None:
    # handle response
```
<!-- End SDK Example Usage -->