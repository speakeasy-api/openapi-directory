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
    
req = operations.PlayByPlayRequest(
    path_params=operations.PlayByPlayPathParams(
        format="XML",
        hometeam="est",
        season="magni",
        week="et",
    ),
)
    
res = s.play_by_play(req)

if res.play_by_play is not None:
    # handle response
```
<!-- End SDK Example Usage -->