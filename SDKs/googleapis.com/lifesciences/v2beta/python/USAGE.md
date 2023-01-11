<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LifesciencesProjectsLocationsListRequest(
    security=operations.LifesciencesProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.LifesciencesProjectsLocationsListPathParams(
        name="error",
    ),
    query_params=operations.LifesciencesProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="qui",
        alt="json",
        callback="praesentium",
        fields="hic",
        filter="magni",
        key="aut",
        oauth_token="at",
        page_size=7752918628891821845,
        page_token="aliquam",
        pretty_print=False,
        quota_user="exercitationem",
        upload_type="ut",
        upload_protocol="sunt",
    ),
)
    
res = s.projects.lifesciences_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->