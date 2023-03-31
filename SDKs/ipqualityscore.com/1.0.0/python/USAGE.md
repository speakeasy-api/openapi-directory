<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.EmailValidationRequest(
    user_email_here="example@example.com",
    your_api_key_here="asd24#sdfs322#",
)
    
res = s.email_validation.email_validation(req)

if res.email_validation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->