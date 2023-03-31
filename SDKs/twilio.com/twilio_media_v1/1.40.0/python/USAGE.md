<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateMediaProcessorCreateMediaProcessorRequest(
    extension="corrupti",
    extension_context="provident",
    extension_environment="distinctio",
    max_duration=844266,
    status_callback="https://tidy-mascara.org",
    status_callback_method="POST",
)
    
res = s.create_media_processor(req, operations.CreateMediaProcessorSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.media_v1_media_processor is not None:
    # handle response
```
<!-- End SDK Example Usage -->