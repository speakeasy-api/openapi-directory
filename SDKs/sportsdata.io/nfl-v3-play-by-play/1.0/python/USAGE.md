<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.PlayByPlayRequest(
    format="JSON",
    hometeam="provident",
    season="distinctio",
    week="quibusdam",
)
    
res = s.play_by_play(req)

if res.play_by_play is not None:
    # handle response
```
<!-- End SDK Example Usage -->