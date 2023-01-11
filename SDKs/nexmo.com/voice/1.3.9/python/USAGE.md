<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCallRequest(
    security=operations.CreateCallSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    request="qui",
)
    
res = s.calls.create_call(req)

if res.create_call_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->