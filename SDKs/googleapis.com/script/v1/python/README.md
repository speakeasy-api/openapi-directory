# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/script/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ScriptProcessesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    page_size=847252,
    page_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
    user_process_filter_deployment_id="iure",
    user_process_filter_end_time="magnam",
    user_process_filter_function_name="debitis",
    user_process_filter_project_name="ipsa",
    user_process_filter_script_id="delectus",
    user_process_filter_start_time="tempora",
    user_process_filter_statuses=[
        "CANCELED",
        "UNKNOWN",
    ],
    user_process_filter_types=[
        "WEBAPP",
        "TRIGGER",
        "WEBAPP",
        "TIME_DRIVEN",
    ],
    user_process_filter_user_access_levels=[
        "OWNER",
        "USER_ACCESS_LEVEL_UNSPECIFIED",
        "NONE",
        "USER_ACCESS_LEVEL_UNSPECIFIED",
    ],
)
    
res = s.processes.script_processes_list(req, operations.ScriptProcessesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_user_processes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### processes

* `script_processes_list` - List information about processes made by or on behalf of a user, such as process type and current status.
* `script_processes_list_script_processes` - List information about a script's executed processes, such as process type and current status.

### projects

* `script_projects_create` - Creates a new, empty script project with no script files and a base manifest file.
* `script_projects_deployments_create` - Creates a deployment of an Apps Script project.
* `script_projects_deployments_delete` - Deletes a deployment of an Apps Script project.
* `script_projects_deployments_get` - Gets a deployment of an Apps Script project.
* `script_projects_deployments_list` - Lists the deployments of an Apps Script project.
* `script_projects_deployments_update` - Updates a deployment of an Apps Script project.
* `script_projects_get` - Gets a script project's metadata.
* `script_projects_get_content` - Gets the content of the script project, including the code source and metadata for each script file.
* `script_projects_get_metrics` - Get metrics data for scripts, such as number of executions and active users.
* `script_projects_update_content` - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* `script_projects_versions_create` - Creates a new immutable version using the current code, with a unique version number.
* `script_projects_versions_get` - Gets a version of a script project.
* `script_projects_versions_list` - List the versions of a script project.

### scripts

* `script_scripts_run` - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
