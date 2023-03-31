# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/workflows/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WorkflowsProjectsLocationsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    name="illum",
    oauth_token="vel",
    page_size=623564,
    page_token="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.projects.workflows_projects_locations_list(req, operations.WorkflowsProjectsLocationsListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `workflows_projects_locations_list` - Lists information about the supported locations for this service.
* `workflows_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `workflows_projects_locations_workflows_create` - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.
* `workflows_projects_locations_workflows_delete` - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* `workflows_projects_locations_workflows_get` - Gets details of a single workflow.
* `workflows_projects_locations_workflows_list` - Lists workflows in a given project and location. The default order is not specified.
* `workflows_projects_locations_workflows_patch` - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
