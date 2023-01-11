<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCommandRequest(
    security=operations.CreateCommandSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCommandCreateCommandRequest(
        callback_method="PUT",
        callback_url="ut",
        command="eius",
        command_mode="text",
        delivery_receipt_requested=False,
        include_sid="odit",
        sim="fugiat",
    ),
)
    
res = s.create_command(req)

if res.wireless_v1_command is not None:
    # handle response
```
<!-- End SDK Example Usage -->