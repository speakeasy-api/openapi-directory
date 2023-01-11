<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateBindingRequest(
    security=operations.CreateBindingSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateBindingPathParams(
        service_sid="nihil",
    ),
    request=operations.CreateBindingCreateBindingRequest(
        address="dolor",
        binding_type="apn",
        credential_sid="qui",
        endpoint="eveniet",
        identity="et",
        notification_protocol_version="laborum",
        tag=[
            "accusantium",
        ],
    ),
)
    
res = s.create_binding(req)

if res.notify_v1_service_binding is not None:
    # handle response
```
<!-- End SDK Example Usage -->