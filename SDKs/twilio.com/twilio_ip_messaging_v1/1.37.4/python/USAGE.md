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
        service_sid="nobis",
    ),
    request=operations.CreateChannelCreateChannelRequest(
        attributes="sint",
        friendly_name="maxime",
        type="public",
        unique_name="optio",
    ),
)
    
res = s.create_channel(req)

if res.ip_messaging_v1_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->