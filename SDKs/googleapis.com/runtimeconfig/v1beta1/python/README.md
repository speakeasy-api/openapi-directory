# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/runtimeconfig/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RuntimeconfigProjectsConfigsCreateRequest(
    dollar_xgafv="2",
    runtime_config=shared.RuntimeConfig(
        description="provident",
        name="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    request_id="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.projects.runtimeconfig_projects_configs_create(req, operations.RuntimeconfigProjectsConfigsCreateSecurity(
    option1=operations.RuntimeconfigProjectsConfigsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.runtime_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `runtimeconfig_projects_configs_create` - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* `runtimeconfig_projects_configs_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `runtimeconfig_projects_configs_list` - Lists all the RuntimeConfig resources within project.
* `runtimeconfig_projects_configs_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `runtimeconfig_projects_configs_variables_create` - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* `runtimeconfig_projects_configs_variables_list` - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* `runtimeconfig_projects_configs_variables_update` - Updates an existing variable with a new value.
* `runtimeconfig_projects_configs_variables_watch` - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* `runtimeconfig_projects_configs_waiters_create` - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* `runtimeconfig_projects_configs_waiters_delete` - Deletes the waiter with the specified name.
* `runtimeconfig_projects_configs_waiters_get` - Gets information about a single waiter.
* `runtimeconfig_projects_configs_waiters_list` - List waiters within the given configuration.
* `runtimeconfig_projects_configs_waiters_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
