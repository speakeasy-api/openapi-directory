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
        name="ea",
    ),
    query_params=operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams(
        dollar_xgafv="1",
        access_token="sapiente",
        alt="media",
        callback="libero",
        fields="eligendi",
        key="et",
        oauth_token="culpa",
        pretty_print=True,
        quota_user="sint",
        upload_type="quisquam",
        upload_protocol="omnis",
    ),
    request={
        "quo": "hic",
        "qui": "quas",
        "vel": "at",
    },
)
    
res = s.projects.workflowexecutions_projects_locations_workflows_executions_cancel(req)

if res.execution is not None:
    # handle response
```
<!-- End SDK Example Usage -->