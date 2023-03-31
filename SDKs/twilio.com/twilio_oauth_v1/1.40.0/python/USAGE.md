<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateDeviceCodeCreateDeviceCodeRequest(
    audiences=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    client_sid="unde",
    scopes=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
)
    
res = s.create_device_code(req, operations.CreateDeviceCodeSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.oauth_v1_device_code is not None:
    # handle response
```
<!-- End SDK Example Usage -->