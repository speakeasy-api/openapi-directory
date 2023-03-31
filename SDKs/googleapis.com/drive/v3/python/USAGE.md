<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DriveAboutGetRequest(
    alt="json",
    fields_="corrupti",
    key="provident",
    oauth_token="distinctio",
    pretty_print=False,
    quota_user="quibusdam",
    user_ip="unde",
)
    
res = s.about.drive_about_get(req, operations.DriveAboutGetSecurity(
    option1=operations.DriveAboutGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.about is not None:
    # handle response
```
<!-- End SDK Example Usage -->