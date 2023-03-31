<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IdsProjectsLocationsEndpointsCreateRequest(
    dollar_xgafv="2",
    endpoint_input=shared.EndpointInput(
        description="provident",
        labels={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
        network="error",
        severity="MEDIUM",
        threat_exceptions=[
            "iure",
            "magnam",
        ],
        traffic_logs=False,
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    endpoint_id="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    parent="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    request_id="iusto",
    upload_type="excepturi",
    upload_protocol="nisi",
)
    
res = s.projects.ids_projects_locations_endpoints_create(req, operations.IdsProjectsLocationsEndpointsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->