<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        usertoken=shared.SchemeUsertoken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
res = s.auth.get_auth_validate()

if res.get_auth_validate_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->