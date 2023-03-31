<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.CurrentSeasonRequest(
    format="JSON",
)
    
res = s.current_season(req)

if res.season is not None:
    # handle response
```
<!-- End SDK Example Usage -->