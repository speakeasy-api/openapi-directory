<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest(
    security=operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams(
        name="vel",
    ),
    query_params=operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams(
        dollar_xgafv="2",
        access_token="illum",
        alt="json",
        callback="ea",
        fields="animi",
        key="enim",
        oauth_token="nostrum",
        pretty_print=True,
        quota_user="sunt",
        upload_type="officia",
        upload_protocol="voluptate",
    ),
    request={
        "quibusdam": "ratione",
    },
)
    
res = s.projects.workflowexecutions_projects_locations_workflows_executions_cancel(req)

if res.execution is not None:
    # handle response
```
<!-- End SDK Example Usage -->