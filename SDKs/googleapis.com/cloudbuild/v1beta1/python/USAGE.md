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
        name="velit",
    ),
    query_params=operations.CloudbuildProjectsLocationsOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="officia",
        alt="proto",
        callback="est",
        fields="cum",
        key="et",
        oauth_token="ea",
        pretty_print=True,
        quota_user="molestias",
        upload_type="repellendus",
        upload_protocol="in",
    ),
    request={
        "quidem": "nihil",
        "corporis": "odio",
    },
)
    
res = s.projects.cloudbuild_projects_locations_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->