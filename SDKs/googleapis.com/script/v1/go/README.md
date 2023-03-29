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
        Security: operations.ScriptProcessesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.ScriptProcessesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PageSize: 847252,
            PageToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
            UserProcessFilterDeploymentID: "iusto",
            UserProcessFilterEndTime: "ullam",
            UserProcessFilterFunctionName: "saepe",
            UserProcessFilterProjectName: "inventore",
            UserProcessFilterScriptID: "sapiente",
            UserProcessFilterStartTime: "enim",
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
        },
    }

    ctx := context.Background()
    res, err := s.Processes.ScriptProcessesList(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
