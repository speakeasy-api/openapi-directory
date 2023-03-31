<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest(
    dollar_xgafv="2",
    execute_action_request=shared.ExecuteActionRequest(
        parameters={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.connectors_projects_locations_connections_actions_execute(req, operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.execute_action_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->