# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/runtimeconfig/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RuntimeconfigProjectsConfigsCreate(ctx, operations.RuntimeconfigProjectsConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RuntimeConfig: &shared.RuntimeConfig{
            Description: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        RequestID: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.RuntimeconfigProjectsConfigsCreateSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [RuntimeconfigProjectsConfigsCreate](docs/projects/README.md#runtimeconfigprojectsconfigscreate) - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* [RuntimeconfigProjectsConfigsGetIamPolicy](docs/projects/README.md#runtimeconfigprojectsconfigsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [RuntimeconfigProjectsConfigsList](docs/projects/README.md#runtimeconfigprojectsconfigslist) - Lists all the RuntimeConfig resources within project.
* [RuntimeconfigProjectsConfigsSetIamPolicy](docs/projects/README.md#runtimeconfigprojectsconfigssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [RuntimeconfigProjectsConfigsVariablesCreate](docs/projects/README.md#runtimeconfigprojectsconfigsvariablescreate) - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* [RuntimeconfigProjectsConfigsVariablesList](docs/projects/README.md#runtimeconfigprojectsconfigsvariableslist) - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* [RuntimeconfigProjectsConfigsVariablesUpdate](docs/projects/README.md#runtimeconfigprojectsconfigsvariablesupdate) - Updates an existing variable with a new value.
* [RuntimeconfigProjectsConfigsVariablesWatch](docs/projects/README.md#runtimeconfigprojectsconfigsvariableswatch) - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* [RuntimeconfigProjectsConfigsWaitersCreate](docs/projects/README.md#runtimeconfigprojectsconfigswaiterscreate) - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* [RuntimeconfigProjectsConfigsWaitersDelete](docs/projects/README.md#runtimeconfigprojectsconfigswaitersdelete) - Deletes the waiter with the specified name.
* [RuntimeconfigProjectsConfigsWaitersGet](docs/projects/README.md#runtimeconfigprojectsconfigswaitersget) - Gets information about a single waiter.
* [RuntimeconfigProjectsConfigsWaitersList](docs/projects/README.md#runtimeconfigprojectsconfigswaiterslist) - List waiters within the given configuration.
* [RuntimeconfigProjectsConfigsWaitersTestIamPermissions](docs/projects/README.md#runtimeconfigprojectsconfigswaiterstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
