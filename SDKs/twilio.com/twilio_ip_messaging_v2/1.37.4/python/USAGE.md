<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateChannelRequest(
    security=operations.CreateChannelSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateChannelPathParams(
        service_sid="ullam",
    ),
    headers=operations.CreateChannelHeaders(
        x_twilio_webhook_enabled="false",
    ),
    request=operations.CreateChannelCreateChannelRequest(
        attributes="architecto",
        created_by="tempore",
        date_created="2007-09-17T07:29:05Z",
        date_updated="1979-10-21T03:34:57Z",
        friendly_name="recusandae",
        type="private",
        unique_name="in",
    ),
)
    
res = s.create_channel(req)

if res.ip_messaging_v2_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->