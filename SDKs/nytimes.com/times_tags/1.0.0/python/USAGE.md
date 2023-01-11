<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetTimestagsRequest(
    query_params=operations.GetTimestagsQueryParams(
        filter="Des",
        max=629466435034479331,
        query="reprehenderit",
    ),
)
    
res = s.get_timestags(req)

if res.get_timestags_200_application_json_arrays is not None:
    # handle response
```
<!-- End SDK Example Usage -->