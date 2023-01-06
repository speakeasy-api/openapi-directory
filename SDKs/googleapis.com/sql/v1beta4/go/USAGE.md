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
    
    req := operations.SQLBackupRunsDeleteRequest{
        Security: operations.SQLBackupRunsDeleteSecurity{
            Option1: &operations.SQLBackupRunsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.SQLBackupRunsDeletePathParams{
            ID: "omnis",
            Instance: "cum",
            Project: "ullam",
        },
        QueryParams: operations.SQLBackupRunsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "minus",
            Alt: "proto",
            Callback: "nemo",
            Fields: "velit",
            Key: "laboriosam",
            OauthToken: "natus",
            PrettyPrint: false,
            QuotaUser: "sint",
            UploadType: "ullam",
            UploadProtocol: "quo",
        },
    }
    
    res, err := s.BackupRuns.SQLBackupRunsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->