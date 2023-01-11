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
        service_sid="dolorem",
    ),
    headers=operations.CreateChannelHeaders(
        x_twilio_webhook_enabled="false",
    ),
    request=operations.CreateChannelCreateChannelRequest(
        attributes="error",
        created_by="quia",
        date_created="2015-07-14T10:59:59Z",
        date_updated="1999-03-26T12:37:24Z",
        friendly_name="occaecati",
        type="public",
        unique_name="quos",
    ),
)
    
res = s.create_channel(req)

if res.chat_v2_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->