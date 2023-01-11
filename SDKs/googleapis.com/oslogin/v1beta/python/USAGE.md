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
        name="id",
    ),
    query_params=operations.OsloginUsersGetLoginProfileQueryParams(
        dollar_xgafv="2",
        access_token="nulla",
        alt="proto",
        callback="molestias",
        fields="nemo",
        key="provident",
        oauth_token="in",
        pretty_print=False,
        project_id="et",
        quota_user="eaque",
        system_id="a",
        upload_type="odit",
        upload_protocol="velit",
        view="SECURITY_KEY",
    ),
)
    
res = s.users.oslogin_users_get_login_profile(req)

if res.login_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->