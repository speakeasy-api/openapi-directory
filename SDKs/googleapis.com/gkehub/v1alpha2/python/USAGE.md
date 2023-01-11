<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest(
    security=operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams(
        project="consequatur",
    ),
    query_params=operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="media",
        callback="qui",
        fields="neque",
        key="sit",
        oauth_token="accusamus",
        pretty_print=True,
        quota_user="similique",
        upload_type="quibusdam",
        upload_protocol="et",
    ),
    request={
        "consectetur": "earum",
        "quos": "illo",
        "eligendi": "quam",
    },
)
    
res = s.projects.gkehub_projects_locations_global_memberships_initialize_hub(req)

if res.initialize_hub_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->