<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ActionHelpRequest(
    action_id="corrupti",
    service_id="provident",
)
    
res = s.osdb.action_help(req)

if res.action_help_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->