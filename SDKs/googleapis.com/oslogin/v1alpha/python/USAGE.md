<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OsloginUsersGetLoginProfileRequest(
    security=operations.OsloginUsersGetLoginProfileSecurity(
        option1=operations.OsloginUsersGetLoginProfileSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.OsloginUsersGetLoginProfilePathParams(
        name="voluptate",
    ),
    query_params=operations.OsloginUsersGetLoginProfileQueryParams(
        dollar_xgafv="2",
        access_token="nesciunt",
        alt="proto",
        callback="et",
        fields="ut",
        key="et",
        oauth_token="illum",
        operating_system_type="LINUX",
        pretty_print=False,
        project_id="quia",
        quota_user="error",
        system_id="et",
        upload_type="molestias",
        upload_protocol="sequi",
        view="SECURITY_KEY",
    ),
)
    
res = s.users.oslogin_users_get_login_profile(req)

if res.login_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->