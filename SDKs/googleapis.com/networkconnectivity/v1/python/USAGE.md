<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest(
    security=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams(
        parent="non",
    ),
    query_params=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams(
        dollar_xgafv="2",
        access_token="in",
        alt="media",
        callback="magni",
        fields="est",
        hub_id="doloremque",
        key="libero",
        oauth_token="dolor",
        pretty_print=False,
        quota_user="minus",
        request_id="numquam",
        upload_type="neque",
        upload_protocol="sint",
    ),
    request=shared.HubInput(
        description="et",
        labels={
            "pariatur": "perspiciatis",
        },
        name="laboriosam",
        routing_vpcs=[
            shared.RoutingVpcInput(
                uri="est",
            ),
        ],
    ),
)
    
res = s.projects.networkconnectivity_projects_locations_global_hubs_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->