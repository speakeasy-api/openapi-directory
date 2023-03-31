<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCommandCreateCommandRequest(
    callback_method="PATCH",
    callback_url="https://salty-stag.name",
    command="nulla",
    command_mode="binary",
    delivery_receipt_requested=False,
    include_sid="illum",
    sim="vel",
)
    
res = s.create_command(req, operations.CreateCommandSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.wireless_v1_command is not None:
    # handle response
```
<!-- End SDK Example Usage -->