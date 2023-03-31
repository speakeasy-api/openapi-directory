<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DriveAboutGetRequest(
    alt="json",
    fields_="corrupti",
    include_subscribed=False,
    key="provident",
    max_change_id_count="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    start_change_id="nulla",
    user_ip="corrupti",
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