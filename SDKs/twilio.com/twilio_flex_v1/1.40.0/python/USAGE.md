<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateChannelCreateChannelRequest(
    chat_friendly_name="corrupti",
    chat_unique_name="provident",
    chat_user_friendly_name="distinctio",
    flex_flow_sid="quibusdam",
    identity="unde",
    long_lived=False,
    pre_engagement_data="nulla",
    target="corrupti",
    task_attributes="illum",
    task_sid="vel",
)
    
res = s.create_channel(req, operations.CreateChannelSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.flex_v1_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->