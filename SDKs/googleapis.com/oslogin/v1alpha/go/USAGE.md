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

    req := operations.OsloginUsersGetLoginProfileRequest{
        Security: operations.OsloginUsersGetLoginProfileSecurity{
            Option1: &operations.OsloginUsersGetLoginProfileSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.OsloginUsersGetLoginProfilePathParams{
            Name: "corrupti",
        },
        QueryParams: operations.OsloginUsersGetLoginProfileQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            OperatingSystemType: "LINUX",
            PrettyPrint: false,
            ProjectID: "error",
            QuotaUser: "deserunt",
            SystemID: "suscipit",
            UploadType: "iure",
            UploadProtocol: "magnam",
            View: "SECURITY_KEY",
        },
    }

    ctx := context.Background()
    res, err := s.Users.OsloginUsersGetLoginProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->