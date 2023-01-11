<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WorkflowsProjectsLocationsListRequest(
    security=operations.WorkflowsProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.WorkflowsProjectsLocationsListPathParams(
        name="velit",
    ),
    query_params=operations.WorkflowsProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="earum",
        alt="media",
        callback="magni",
        fields="a",
        filter="possimus",
        key="autem",
        oauth_token="et",
        page_size=595808688407247426,
        page_token="laborum",
        pretty_print=True,
        quota_user="modi",
        upload_type="illo",
        upload_protocol="maiores",
    ),
)
    
res = s.projects.workflows_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->