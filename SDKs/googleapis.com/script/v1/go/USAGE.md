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