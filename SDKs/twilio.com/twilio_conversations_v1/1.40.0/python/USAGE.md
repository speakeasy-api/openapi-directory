<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateConfigurationAddressCreateConfigurationAddressRequest(
    address="5786 Little Streets",
    auto_creation_conversation_service_sid="vel",
    auto_creation_enabled=False,
    auto_creation_studio_flow_sid="error",
    auto_creation_studio_retry_count=645894,
    auto_creation_type="studio",
    auto_creation_webhook_filters=[
        "magnam",
        "debitis",
    ],
    auto_creation_webhook_method="GET",
    auto_creation_webhook_url="delectus",
    friendly_name="tempora",
    type="whatsapp",
)
    
res = s.create_configuration_address(req, operations.CreateConfigurationAddressSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.conversations_v1_configuration_address is not None:
    # handle response
```
<!-- End SDK Example Usage -->