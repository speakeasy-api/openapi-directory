<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest(
    dollar_xgafv="2",
    hub_input=shared.HubInput(
        create_time="provident",
        description="distinctio",
        labels={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        name="iure",
        update_time="magnam",
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    fields_="tempora",
    hub_id="suscipit",
    key="molestiae",
    oauth_token="minus",
    parent="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    request_id="iusto",
    upload_type="excepturi",
    upload_protocol="nisi",
)
    
res = s.projects.networkconnectivity_projects_locations_global_hubs_create(req, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->