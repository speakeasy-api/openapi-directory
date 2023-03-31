<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateWebChannelCreateWebChannelRequest(
    address_sid="corrupti",
    chat_friendly_name="provident",
    customer_friendly_name="distinctio",
    pre_engagement_data="quibusdam",
)
    
res = s.create_web_channel(req, operations.CreateWebChannelSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.flex_v2_web_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->