<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateWorkflowRequest(
    security=operations.CreateWorkflowSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    request=shared.CreateWorkflow(
        template="failover",
        workflow=[
            "illo",
            "deleniti",
        ],
    ),
)
    
res = s.create_workflow(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->