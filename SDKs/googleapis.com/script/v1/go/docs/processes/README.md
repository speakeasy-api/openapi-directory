# Processes

### Available Operations

* [ScriptProcessesList](#scriptprocesseslist) - List information about processes made by or on behalf of a user, such as process type and current status.
* [ScriptProcessesListScriptProcesses](#scriptprocesseslistscriptprocesses) - List information about a script's executed processes, such as process type and current status.

## ScriptProcessesList

List information about processes made by or on behalf of a user, such as process type and current status.

### Example Usage

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
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(870013),
        PageToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
        UserProcessFilterDeploymentID: sdk.String("quod"),
        UserProcessFilterEndTime: sdk.String("esse"),
        UserProcessFilterFunctionName: sdk.String("totam"),
        UserProcessFilterProjectName: sdk.String("porro"),
        UserProcessFilterScriptID: sdk.String("dolorum"),
        UserProcessFilterStartTime: sdk.String("dicta"),
        UserProcessFilterStatuses: []ScriptProcessesListUserProcessFilterStatusesEnum{
            operations.ScriptProcessesListUserProcessFilterStatusesEnumFailed,
            operations.ScriptProcessesListUserProcessFilterStatusesEnumFailed,
            operations.ScriptProcessesListUserProcessFilterStatusesEnumRunning,
        },
        UserProcessFilterTypes: []ScriptProcessesListUserProcessFilterTypesEnum{
            operations.ScriptProcessesListUserProcessFilterTypesEnumBatchTask,
            operations.ScriptProcessesListUserProcessFilterTypesEnumSimpleTrigger,
            operations.ScriptProcessesListUserProcessFilterTypesEnumWebapp,
        },
        UserProcessFilterUserAccessLevels: []ScriptProcessesListUserProcessFilterUserAccessLevelsEnum{
            operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnumRead,
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

## ScriptProcessesListScriptProcesses

List information about a script's executed processes, such as process type and current status.

### Example Usage

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
    res, err := s.Processes.ScriptProcessesListScriptProcesses(ctx, operations.ScriptProcessesListScriptProcessesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(568434),
        PageToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        ScriptID: sdk.String("ad"),
        ScriptProcessFilterDeploymentID: sdk.String("natus"),
        ScriptProcessFilterEndTime: sdk.String("sed"),
        ScriptProcessFilterFunctionName: sdk.String("iste"),
        ScriptProcessFilterStartTime: sdk.String("dolor"),
        ScriptProcessFilterStatuses: []ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum{
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumCompleted,
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumDelayed,
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumDelayed,
        },
        ScriptProcessFilterTypes: []ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum{
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumTrigger,
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumTimeDriven,
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumEditor,
        },
        ScriptProcessFilterUserAccessLevels: []ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum{
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumOwner,
            operations.ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumWrite,
        },
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.ScriptProcessesListScriptProcessesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScriptProcessesResponse != nil {
        // handle response
    }
}
```
