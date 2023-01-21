<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PageSize: 6044372234677422456,
            PageToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
            UserProcessFilterDeploymentID: "debitis",
            UserProcessFilterEndTime: "voluptatum",
            UserProcessFilterFunctionName: "et",
            UserProcessFilterProjectName: "ut",
            UserProcessFilterScriptID: "dolorem",
            UserProcessFilterStartTime: "et",
            UserProcessFilterStatuses: []ScriptProcessesListUserProcessFilterStatusesEnum{
                "FAILED",
            },
            UserProcessFilterTypes: []ScriptProcessesListUserProcessFilterTypesEnum{
                "EDITOR",
            },
            UserProcessFilterUserAccessLevels: []ScriptProcessesListUserProcessFilterUserAccessLevelsEnum{
                "NONE",
            },
        },
    }
    
    res, err := s.Processes.ScriptProcessesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserProcessesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->