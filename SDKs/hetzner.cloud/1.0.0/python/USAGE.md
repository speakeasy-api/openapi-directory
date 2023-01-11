<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetActionsRequest(
    query_params=operations.GetActionsQueryParams(
        id=7105271836128858469,
        sort="status:asc",
        status="running",
    ),
)
    
res = s.actions.get_actions(req)

if res.actions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->