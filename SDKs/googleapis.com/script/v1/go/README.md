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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ScriptProcessesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PageSize: 847252,
        PageToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
        UserProcessFilterDeploymentID: "iure",
        UserProcessFilterEndTime: "magnam",
        UserProcessFilterFunctionName: "debitis",
        UserProcessFilterProjectName: "ipsa",
        UserProcessFilterScriptID: "delectus",
        UserProcessFilterStartTime: "tempora",
        UserProcessFilterStatuses: []ScriptProcessesListUserProcessFilterStatusesEnum{
            "CANCELED",
            "UNKNOWN",
        },
        UserProcessFilterTypes: []ScriptProcessesListUserProcessFilterTypesEnum{
            "WEBAPP",
            "TRIGGER",
            "WEBAPP",
            "TIME_DRIVEN",
        },
        UserProcessFilterUserAccessLevels: []ScriptProcessesListUserProcessFilterUserAccessLevelsEnum{
            "OWNER",
            "USER_ACCESS_LEVEL_UNSPECIFIED",
            "NONE",
            "USER_ACCESS_LEVEL_UNSPECIFIED",
        },
    }

    ctx := context.Background()
    res, err := s.Processes.ScriptProcessesList(ctx, req, operations.ScriptProcessesListSecurity{
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


### Processes

* `ScriptProcessesList` - List information about processes made by or on behalf of a user, such as process type and current status.
* `ScriptProcessesListScriptProcesses` - List information about a script's executed processes, such as process type and current status.

### Projects

* `ScriptProjectsCreate` - Creates a new, empty script project with no script files and a base manifest file.
* `ScriptProjectsDeploymentsCreate` - Creates a deployment of an Apps Script project.
* `ScriptProjectsDeploymentsDelete` - Deletes a deployment of an Apps Script project.
* `ScriptProjectsDeploymentsGet` - Gets a deployment of an Apps Script project.
* `ScriptProjectsDeploymentsList` - Lists the deployments of an Apps Script project.
* `ScriptProjectsDeploymentsUpdate` - Updates a deployment of an Apps Script project.
* `ScriptProjectsGet` - Gets a script project's metadata.
* `ScriptProjectsGetContent` - Gets the content of the script project, including the code source and metadata for each script file.
* `ScriptProjectsGetMetrics` - Get metrics data for scripts, such as number of executions and active users.
* `ScriptProjectsUpdateContent` - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* `ScriptProjectsVersionsCreate` - Creates a new immutable version using the current code, with a unique version number.
* `ScriptProjectsVersionsGet` - Gets a version of a script project.
* `ScriptProjectsVersionsList` - List the versions of a script project.

### Scripts

* `ScriptScriptsRun` - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
