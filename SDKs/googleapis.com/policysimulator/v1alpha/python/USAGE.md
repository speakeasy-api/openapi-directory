<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest(
    security=operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PolicysimulatorProjectsLocationsReplaysOperationsListPathParams(
        name="sed",
    ),
    query_params=operations.PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams(
        dollar_xgafv="2",
        access_token="voluptatum",
        alt="proto",
        callback="est",
        fields="nulla",
        filter="nisi",
        key="numquam",
        oauth_token="consequatur",
        page_size=6140224945249400582,
        page_token="consequatur",
        pretty_print=False,
        quota_user="et",
        upload_type="in",
        upload_protocol="aut",
    ),
)
    
res = s.projects.policysimulator_projects_locations_replays_operations_list(req)

if res.google_longrunning_list_operations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->