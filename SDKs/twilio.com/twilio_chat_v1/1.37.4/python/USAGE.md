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
        service_sid="labore",
    ),
    request=operations.CreateChannelCreateChannelRequest(
        attributes="molestiae",
        friendly_name="voluptatem",
        type="private",
        unique_name="autem",
    ),
)
    
res = s.create_channel(req)

if res.chat_v1_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->