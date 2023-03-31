<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.AllStarsRequest(
    format="JSON",
    season="provident",
)
    
res = s.all_stars(req)

if res.player_infos is not None:
    # handle response
```
<!-- End SDK Example Usage -->