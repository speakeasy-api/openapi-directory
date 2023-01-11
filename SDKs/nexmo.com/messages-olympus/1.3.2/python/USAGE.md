<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SendMessageRequest(
    security=operations.SendMessageSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    request="cum",
)
    
res = s.send_message(req)

if res.send_message_202_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->