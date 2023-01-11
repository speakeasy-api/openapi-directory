<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebaseAvailableProjectsListRequest(
    security=operations.FirebaseAvailableProjectsListSecurity(
        option1=operations.FirebaseAvailableProjectsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.FirebaseAvailableProjectsListQueryParams(
        dollar_xgafv="2",
        access_token="ut",
        alt="proto",
        callback="nesciunt",
        fields="qui",
        key="nesciunt",
        oauth_token="quis",
        page_size=413522258613888617,
        page_token="dignissimos",
        pretty_print=False,
        quota_user="et",
        upload_type="repellendus",
        upload_protocol="et",
    ),
)
    
res = s.available_projects.firebase_available_projects_list(req)

if res.list_available_projects_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->