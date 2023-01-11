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
        parent="adipisci",
    ),
    query_params=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams(
        dollar_xgafv="1",
        access_token="sit",
        alt="proto",
        callback="omnis",
        fields="sint",
        hub_id="molestias",
        key="nemo",
        oauth_token="provident",
        pretty_print=False,
        quota_user="vel",
        request_id="quia",
        upload_type="voluptatem",
        upload_protocol="inventore",
    ),
    request=shared.HubInput(
        create_time="at",
        description="et",
        labels={
            "atque": "corrupti",
        },
        name="eligendi",
        update_time="magni",
    ),
)
    
res = s.projects.networkconnectivity_projects_locations_global_hubs_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->