<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.OsloginUsersGetLoginProfileRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    operating_system_type="LINUX",
    pretty_print=False,
    project_id="error",
    quota_user="deserunt",
    system_id="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
    view="SECURITY_KEY",
)
    
res = s.users.oslogin_users_get_login_profile(req, operations.OsloginUsersGetLoginProfileSecurity(
    option1=operations.OsloginUsersGetLoginProfileSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.login_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->