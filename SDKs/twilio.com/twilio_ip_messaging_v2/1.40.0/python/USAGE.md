<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateChannelRequest(
    request_body=operations.CreateChannelCreateChannelRequest(
        attributes="corrupti",
        created_by="provident",
        date_created="2021-04-24T16:27:50.833Z",
        date_updated="2021-04-14T16:47:33.722Z",
        friendly_name="corrupti",
        type="private",
        unique_name="vel",
    ),
    service_sid="error",
    x_twilio_webhook_enabled="false",
)
    
res = s.create_channel(req, operations.CreateChannelSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.ip_messaging_v2_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->