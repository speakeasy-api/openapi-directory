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
            Name: "unde",
        },
        QueryParams: operations.OsloginUsersGetLoginProfileQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            OperatingSystemType: "LINUX",
            PrettyPrint: false,
            ProjectID: "fuga",
            QuotaUser: "facilis",
            SystemID: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
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