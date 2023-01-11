<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OndemandscanningProjectsLocationsOperationsCancelRequest(
    security=operations.OndemandscanningProjectsLocationsOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.OndemandscanningProjectsLocationsOperationsCancelPathParams(
        name="animi",
    ),
    query_params=operations.OndemandscanningProjectsLocationsOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="architecto",
        alt="proto",
        callback="perspiciatis",
        fields="deserunt",
        key="dolorem",
        oauth_token="sint",
        pretty_print=False,
        quota_user="iure",
        upload_type="vel",
        upload_protocol="quia",
    ),
)
    
res = s.projects.ondemandscanning_projects_locations_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->