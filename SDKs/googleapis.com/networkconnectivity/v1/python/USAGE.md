<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest(
    dollar_xgafv="2",
    hub_input=shared.HubInput(
        description="provident",
        labels={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
        name="error",
        routing_vpcs=[
            shared.RoutingVPCInput(
                uri="http://innocent-effect.org",
            ),
            shared.RoutingVPCInput(
                uri="http://whirlwind-diver.info",
            ),
            shared.RoutingVPCInput(
                uri="http://spotted-skyline.name",
            ),
        ],
    ),
    access_token="iusto",
    alt="media",
    callback="nisi",
    fields_="recusandae",
    hub_id="temporibus",
    key="ab",
    oauth_token="quis",
    parent="veritatis",
    pretty_print=False,
    quota_user="deserunt",
    request_id="perferendis",
    upload_type="ipsam",
    upload_protocol="repellendus",
)
    
res = s.projects.networkconnectivity_projects_locations_global_hubs_create(req, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->