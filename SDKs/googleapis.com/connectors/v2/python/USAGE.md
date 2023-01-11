<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest(
    security=operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ConnectorsProjectsLocationsConnectionsActionsExecutePathParams(
        name="est",
    ),
    query_params=operations.ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams(
        dollar_xgafv="1",
        access_token="velit",
        alt="media",
        callback="deleniti",
        fields="eligendi",
        key="dolorem",
        oauth_token="corporis",
        pretty_print=False,
        quota_user="voluptas",
        upload_type="qui",
        upload_protocol="aut",
    ),
    request=shared.ExecuteActionRequest(
        parameters={
            "ut": "aspernatur",
            "qui": "praesentium",
        },
    ),
)
    
res = s.projects.connectors_projects_locations_connections_actions_execute(req)

if res.execute_action_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->