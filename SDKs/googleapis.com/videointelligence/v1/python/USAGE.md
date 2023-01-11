<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest(
    security=operations.VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams(
        name="aperiam",
    ),
    query_params=operations.VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="explicabo",
        alt="proto",
        callback="voluptatem",
        fields="dicta",
        key="velit",
        oauth_token="id",
        pretty_print=True,
        quota_user="ducimus",
        upload_type="atque",
        upload_protocol="tenetur",
    ),
)
    
res = s.operations.videointelligence_operations_projects_locations_operations_cancel(req)

if res.google_protobuf_empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->