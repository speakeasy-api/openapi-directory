<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudtasksProjectsLocationsListRequest(
    security=operations.CloudtasksProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudtasksProjectsLocationsListPathParams(
        name="culpa",
    ),
    query_params=operations.CloudtasksProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="magnam",
        alt="media",
        callback="mollitia",
        fields="commodi",
        filter="cum",
        key="error",
        oauth_token="ut",
        page_size=2260814708668604765,
        page_token="officiis",
        pretty_print=False,
        quota_user="aut",
        upload_type="quo",
        upload_protocol="nihil",
    ),
)
    
res = s.projects.cloudtasks_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->