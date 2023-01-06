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
            ID: "consequatur",
            Instance: "maiores",
            Project: "iste",
        },
        QueryParams: operations.SQLBackupRunsDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "quis",
            Alt: "media",
            Callback: "tempora",
            Fields: "voluptatem",
            Key: "accusamus",
            OauthToken: "consequatur",
            PrettyPrint: true,
            QuotaUser: "minus",
            UploadType: "labore",
            UploadProtocol: "iure",
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