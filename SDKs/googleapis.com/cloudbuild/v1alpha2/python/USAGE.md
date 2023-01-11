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
        name="et",
    ),
    query_params=operations.CloudbuildProjectsLocationsOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="harum",
        alt="json",
        callback="accusantium",
        fields="harum",
        key="soluta",
        oauth_token="perspiciatis",
        pretty_print=True,
        quota_user="perspiciatis",
        upload_type="ratione",
        upload_protocol="molestias",
    ),
    request={
        "quia": "praesentium",
        "rerum": "repudiandae",
        "sit": "deserunt",
    },
)
    
res = s.projects.cloudbuild_projects_locations_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->