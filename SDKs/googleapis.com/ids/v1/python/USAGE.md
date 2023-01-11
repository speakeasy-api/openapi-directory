<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IdsProjectsLocationsEndpointsCreateRequest(
    security=operations.IdsProjectsLocationsEndpointsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.IdsProjectsLocationsEndpointsCreatePathParams(
        parent="pariatur",
    ),
    query_params=operations.IdsProjectsLocationsEndpointsCreateQueryParams(
        dollar_xgafv="1",
        access_token="itaque",
        alt="json",
        callback="assumenda",
        endpoint_id="architecto",
        fields="id",
        key="et",
        oauth_token="voluptate",
        pretty_print=False,
        quota_user="quo",
        request_id="sint",
        upload_type="magnam",
        upload_protocol="quis",
    ),
    request=shared.EndpointInput(
        description="doloremque",
        labels={
            "ratione": "sequi",
        },
        network="distinctio",
        severity="HIGH",
        traffic_logs=False,
    ),
)
    
res = s.projects.ids_projects_locations_endpoints_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->