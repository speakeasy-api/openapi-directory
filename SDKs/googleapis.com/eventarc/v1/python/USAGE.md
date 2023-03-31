<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.EventarcProjectsLocationsChannelConnectionsCreateRequest(
    dollar_xgafv="2",
    channel_connection_input=shared.ChannelConnectionInput(
        activation_token="provident",
        channel="distinctio",
        name="quibusdam",
    ),
    access_token="unde",
    alt="proto",
    callback="corrupti",
    channel_connection_id="illum",
    fields_="vel",
    key="error",
    oauth_token="deserunt",
    parent="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.projects.eventarc_projects_locations_channel_connections_create(req, operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->