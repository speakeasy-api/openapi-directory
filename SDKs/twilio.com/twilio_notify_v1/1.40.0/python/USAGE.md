<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateBindingRequest(
    request_body=operations.CreateBindingCreateBindingRequest(
        address="5786 Little Streets",
        binding_type="sms",
        credential_sid="error",
        endpoint="deserunt",
        identity="suscipit",
        notification_protocol_version="iure",
        tag=[
            "debitis",
            "ipsa",
        ],
    ),
    service_sid="delectus",
)
    
res = s.create_binding(req, operations.CreateBindingSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.notify_v1_service_binding is not None:
    # handle response
```
<!-- End SDK Example Usage -->