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
    
req = operations.AreGamesInProgressRequest(
    path_params=operations.AreGamesInProgressPathParams(
        format="XML",
    ),
)
    
res = s.are_games_in_progress(req)

if res.are_games_in_progress_200_application_json_boolean is not None:
    # handle response
```
<!-- End SDK Example Usage -->