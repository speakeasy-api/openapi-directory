<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetActionsRequest(
    id=548814,
    sort="progress:asc",
    status="error",
)
    
res = s.actions.get_actions(req)

if res.actions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->