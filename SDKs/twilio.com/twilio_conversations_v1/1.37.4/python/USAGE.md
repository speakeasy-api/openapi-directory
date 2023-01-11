<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateConfigurationAddressRequest(
    security=operations.CreateConfigurationAddressSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateConfigurationAddressCreateConfigurationAddressRequest(
        address="aliquid",
        auto_creation_conversation_service_sid="omnis",
        auto_creation_enabled=False,
        auto_creation_studio_flow_sid="eum",
        auto_creation_studio_retry_count=5401517066373650501,
        auto_creation_type="default",
        auto_creation_webhook_filters=[
            "occaecati",
            "consequatur",
        ],
        auto_creation_webhook_method="POST",
        auto_creation_webhook_url="non",
        friendly_name="fuga",
        type="sms",
    ),
)
    
res = s.create_configuration_address(req)

if res.conversations_v1_configuration_address is not None:
    # handle response
```
<!-- End SDK Example Usage -->