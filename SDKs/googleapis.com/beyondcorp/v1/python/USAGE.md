<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest(
    dollar_xgafv="2",
    google_cloud_beyondcorp_appconnections_v1_app_connection_input=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput(
        application_endpoint=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint(
            host="provident",
            port=715190,
        ),
        connectors=[
            "unde",
            "nulla",
            "corrupti",
            "illum",
        ],
        display_name="vel",
        gateway=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput(
            app_gateway="error",
            type="GCP_REGIONAL_MIG",
        ),
        labels={
            "iure": "magnam",
            "debitis": "ipsa",
        },
        name="delectus",
        type="TYPE_UNSPECIFIED",
    ),
    access_token="suscipit",
    alt="media",
    app_connection_id="minus",
    callback="placeat",
    fields_="voluptatum",
    key="iusto",
    oauth_token="excepturi",
    parent="nisi",
    pretty_print=False,
    quota_user="recusandae",
    request_id="temporibus",
    upload_type="ab",
    upload_protocol="quis",
    validate_only=False,
)
    
res = s.projects.beyondcorp_projects_locations_app_connections_create(req, operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->