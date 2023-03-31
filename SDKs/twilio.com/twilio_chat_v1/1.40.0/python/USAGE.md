<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateChannelRequest(
    request_body=operations.CreateChannelCreateChannelRequest(
        attributes="corrupti",
        friendly_name="provident",
        type="private",
        unique_name="quibusdam",
    ),
    service_sid="unde",
)
    
res = s.create_channel(req, operations.CreateChannelSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.chat_v1_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->