<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateMediaProcessorRequest(
    security=operations.CreateMediaProcessorSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateMediaProcessorCreateMediaProcessorRequest(
        extension="id",
        extension_context="maiores",
        extension_environment="asperiores",
        max_duration=2339540048191491872,
        status_callback="unde",
        status_callback_method="GET",
    ),
)
    
res = s.create_media_processor(req)

if res.media_v1_media_processor is not None:
    # handle response
```
<!-- End SDK Example Usage -->