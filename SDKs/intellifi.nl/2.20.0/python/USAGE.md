<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        cookie_sid=shared.SchemeCookieSid(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
res = s.authinfo.get_authinfo()

if res.get_authinfo_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->