<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAMapRequest(
    query_params=operations.CreateAMapQueryParams(
        app_token="voluptatum",
        constraint="unde",
        entity_id="unde",
        variable="error",
    ),
    headers=operations.CreateAMapHeaders(
        x_app_token="ut",
    ),
)
    
res = s.create_a_map(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->