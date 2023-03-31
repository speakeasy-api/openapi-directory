<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateActivityRequest(
    request_body=operations.CreateActivityCreateActivityRequest(
        available=False,
        friendly_name="corrupti",
    ),
    workspace_sid="provident",
)
    
res = s.create_activity(req, operations.CreateActivitySecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.taskrouter_v1_workspace_activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->