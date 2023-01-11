<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatatransferApplicationsGetRequest(
    security=operations.DatatransferApplicationsGetSecurity(
        option1=operations.DatatransferApplicationsGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.DatatransferApplicationsGetPathParams(
        application_id="nihil",
    ),
    query_params=operations.DatatransferApplicationsGetQueryParams(
        dollar_xgafv="2",
        access_token="mollitia",
        alt="json",
        callback="non",
        fields="molestias",
        key="aut",
        oauth_token="quo",
        pretty_print=False,
        quota_user="at",
        upload_type="veritatis",
        upload_protocol="sequi",
    ),
)
    
res = s.applications.datatransfer_applications_get(req)

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->