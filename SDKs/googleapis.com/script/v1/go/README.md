# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/script/v1/go
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
    res, err := s.Processes.ScriptProcessesList(ctx, operations.ScriptProcessesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
        UserProcessFilterDeploymentID: sdk.String("iure"),
        UserProcessFilterEndTime: sdk.String("magnam"),
        UserProcessFilterFunctionName: sdk.String("debitis"),
        UserProcessFilterProjectName: sdk.String("ipsa"),
        UserProcessFilterScriptID: sdk.String("delectus"),
        UserProcessFilterStartTime: sdk.String("tempora"),
        UserProcessFilterStatuses: []ScriptProcessesListUserProcessFilterStatusesEnum{
            operations.ScriptProcessesListUserProcessFilterStatusesEnumCanceled,
            operations.ScriptProcessesListUserProcessFilterStatusesEnumUnknown,
        },
        UserProcessFilterTypes: []ScriptProcessesListUserProcessFilterTypesEnum{
            operations.ScriptProcessesListUserProcessFilterTypesEnumWebapp,
            operations.ScriptProcessesListUserProcessFilterTypesEnumTrigger,
            operations.ScriptProcessesListUserProcessFilterTypesEnumWebapp,
            operations.ScriptProcessesListUserProcessFilterTypesEnumTimeDriven,
        },
        UserProcessFilterUserAccessLevels: []ScriptProcessesListUserProcessFilterUserAccessLevelsEnum{
            operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnumOwner,
            operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnumUserAccessLevelUnspecified,
            operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnumNone,
            operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnumUserAccessLevelUnspecified,
        },
    }, operations.ScriptProcessesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserProcessesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Processes](docs/processes/README.md)

* [ScriptProcessesList](docs/processes/README.md#scriptprocesseslist) - List information about processes made by or on behalf of a user, such as process type and current status.
* [ScriptProcessesListScriptProcesses](docs/processes/README.md#scriptprocesseslistscriptprocesses) - List information about a script's executed processes, such as process type and current status.

### [Projects](docs/projects/README.md)

* [ScriptProjectsCreate](docs/projects/README.md#scriptprojectscreate) - Creates a new, empty script project with no script files and a base manifest file.
* [ScriptProjectsDeploymentsCreate](docs/projects/README.md#scriptprojectsdeploymentscreate) - Creates a deployment of an Apps Script project.
* [ScriptProjectsDeploymentsDelete](docs/projects/README.md#scriptprojectsdeploymentsdelete) - Deletes a deployment of an Apps Script project.
* [ScriptProjectsDeploymentsGet](docs/projects/README.md#scriptprojectsdeploymentsget) - Gets a deployment of an Apps Script project.
* [ScriptProjectsDeploymentsList](docs/projects/README.md#scriptprojectsdeploymentslist) - Lists the deployments of an Apps Script project.
* [ScriptProjectsDeploymentsUpdate](docs/projects/README.md#scriptprojectsdeploymentsupdate) - Updates a deployment of an Apps Script project.
* [ScriptProjectsGet](docs/projects/README.md#scriptprojectsget) - Gets a script project's metadata.
* [ScriptProjectsGetContent](docs/projects/README.md#scriptprojectsgetcontent) - Gets the content of the script project, including the code source and metadata for each script file.
* [ScriptProjectsGetMetrics](docs/projects/README.md#scriptprojectsgetmetrics) - Get metrics data for scripts, such as number of executions and active users.
* [ScriptProjectsUpdateContent](docs/projects/README.md#scriptprojectsupdatecontent) - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* [ScriptProjectsVersionsCreate](docs/projects/README.md#scriptprojectsversionscreate) - Creates a new immutable version using the current code, with a unique version number.
* [ScriptProjectsVersionsGet](docs/projects/README.md#scriptprojectsversionsget) - Gets a version of a script project.
* [ScriptProjectsVersionsList](docs/projects/README.md#scriptprojectsversionslist) - List the versions of a script project.

### [Scripts](docs/scripts/README.md)

* [ScriptScriptsRun](docs/scripts/README.md#scriptscriptsrun) - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
