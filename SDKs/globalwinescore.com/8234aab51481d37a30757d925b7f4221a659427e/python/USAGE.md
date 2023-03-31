<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        token_authentication="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetGlobalwinescoresLatestRequest(
    authorization="corrupti",
    color="white",
    is_primeurs=False,
    limit=715190,
    lwin="quibusdam",
    lwin_11="unde",
    offset=857946,
    ordering="score",
    vintage="illum",
    wine_id=[
        623564,
        645894,
    ],
)
    
res = s.global_wine_score.get_globalwinescores_latest_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->