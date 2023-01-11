<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        user_security=shared.SchemeUserSecurity(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
res = s.get_documentation()

if res.get_documentation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->