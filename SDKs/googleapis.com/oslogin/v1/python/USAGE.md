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
        name="nihil",
    ),
    query_params=operations.OsloginUsersGetLoginProfileQueryParams(
        dollar_xgafv="2",
        access_token="quae",
        alt="proto",
        callback="iusto",
        fields="voluptatibus",
        key="laboriosam",
        oauth_token="eveniet",
        pretty_print=False,
        project_id="quidem",
        quota_user="autem",
        system_id="consequatur",
        upload_type="officiis",
        upload_protocol="tenetur",
    ),
)
    
res = s.users.oslogin_users_get_login_profile(req)

if res.login_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->