<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EventarcProjectsLocationsChannelConnectionsCreateRequest(
    security=operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.EventarcProjectsLocationsChannelConnectionsCreatePathParams(
        parent="minima",
    ),
    query_params=operations.EventarcProjectsLocationsChannelConnectionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="neque",
        alt="proto",
        callback="dolorem",
        channel_connection_id="nihil",
        fields="delectus",
        key="dolore",
        oauth_token="sequi",
        pretty_print=True,
        quota_user="placeat",
        upload_type="qui",
        upload_protocol="est",
    ),
    request=shared.ChannelConnectionInput(
        activation_token="ut",
        channel="nihil",
        name="odit",
    ),
)
    
res = s.projects.eventarc_projects_locations_channel_connections_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->