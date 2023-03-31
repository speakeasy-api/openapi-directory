<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateExecutionRequest(
    flow_sid="corrupti",
    request_body=operations.CreateExecutionCreateExecutionRequest(
        from_="provident",
        parameters="distinctio",
        to="quibusdam",
    ),
)
    
res = s.create_execution(req, operations.CreateExecutionSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.studio_v2_flow_execution is not None:
    # handle response
```
<!-- End SDK Example Usage -->