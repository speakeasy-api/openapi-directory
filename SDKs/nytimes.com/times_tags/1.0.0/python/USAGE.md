<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetTimestagsRequest(
    filter="Org",
    max=592845,
    query="distinctio",
)
    
res = s.get_timestags(req)

if res.get_timestags_200_application_json_arrays is not None:
    # handle response
```
<!-- End SDK Example Usage -->