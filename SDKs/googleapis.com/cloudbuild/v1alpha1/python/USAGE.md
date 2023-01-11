<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudbuildProjectsLocationsOperationsCancelRequest(
    security=operations.CloudbuildProjectsLocationsOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudbuildProjectsLocationsOperationsCancelPathParams(
        name="qui",
    ),
    query_params=operations.CloudbuildProjectsLocationsOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="minus",
        alt="proto",
        callback="similique",
        fields="consequatur",
        key="sapiente",
        oauth_token="consequatur",
        pretty_print=False,
        quota_user="alias",
        upload_type="molestias",
        upload_protocol="reprehenderit",
    ),
    request={
        "unde": "in",
    },
)
    
res = s.projects.cloudbuild_projects_locations_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->