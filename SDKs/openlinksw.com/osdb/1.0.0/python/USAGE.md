<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ActionHelpRequest(
    path_params=operations.ActionHelpPathParams(
        action_id="molestias",
        service_id="praesentium",
    ),
)
    
res = s.osdb.action_help(req)

if res.action_help_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->