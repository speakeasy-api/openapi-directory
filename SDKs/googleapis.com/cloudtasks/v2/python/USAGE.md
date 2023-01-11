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
        name="ullam",
    ),
    query_params=operations.CloudtasksProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="reiciendis",
        alt="proto",
        callback="voluptates",
        fields="et",
        filter="fugiat",
        key="at",
        oauth_token="qui",
        page_size=1647388063564067175,
        page_token="officia",
        pretty_print=True,
        quota_user="ratione",
        upload_type="labore",
        upload_protocol="cupiditate",
    ),
)
    
res = s.projects.cloudtasks_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->