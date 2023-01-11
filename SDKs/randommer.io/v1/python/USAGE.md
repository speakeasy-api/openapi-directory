<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAPICardRequest(
    query_params=operations.GetAPICardQueryParams(
        type="voluptatibus",
    ),
    headers=operations.GetAPICardHeaders(
        x_api_key="esse",
    ),
)
    
res = s.card.get_api_card(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->