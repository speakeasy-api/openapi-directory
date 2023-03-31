<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.UpdateChannelRequest(
    request_body=operations.UpdateChannelUpdateChannelRequest(
        messaging_service_sid="corrupti",
        type="private",
    ),
    service_sid="distinctio",
    sid="quibusdam",
    x_twilio_webhook_enabled="false",
)
    
res = s.update_channel(req, operations.UpdateChannelSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.chat_v3_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->