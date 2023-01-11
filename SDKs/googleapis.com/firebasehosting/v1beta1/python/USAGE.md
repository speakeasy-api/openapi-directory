<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasehostingProjectsSitesCreateRequest(
    security=operations.FirebasehostingProjectsSitesCreateSecurity(
        option1=operations.FirebasehostingProjectsSitesCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FirebasehostingProjectsSitesCreatePathParams(
        parent="quia",
    ),
    query_params=operations.FirebasehostingProjectsSitesCreateQueryParams(
        dollar_xgafv="2",
        access_token="sit",
        alt="json",
        callback="nesciunt",
        fields="vero",
        key="quae",
        oauth_token="modi",
        pretty_print=False,
        quota_user="ad",
        site_id="animi",
        upload_type="iusto",
        upload_protocol="laudantium",
    ),
    request=shared.SiteInput(
        app_id="repellendus",
        labels={
            "facilis": "vitae",
        },
    ),
)
    
res = s.projects.firebasehosting_projects_sites_create(req)

if res.site is not None:
    # handle response
```
<!-- End SDK Example Usage -->