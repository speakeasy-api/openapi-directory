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
        name="dignissimos",
    ),
    query_params=operations.WorkflowsProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="totam",
        alt="proto",
        callback="atque",
        fields="autem",
        filter="molestias",
        key="consequatur",
        oauth_token="aliquid",
        page_size=6692385287967966554,
        page_token="reiciendis",
        pretty_print=True,
        quota_user="sit",
        upload_type="facilis",
        upload_protocol="nostrum",
    ),
)
    
res = s.projects.workflows_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->