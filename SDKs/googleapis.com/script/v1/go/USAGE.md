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