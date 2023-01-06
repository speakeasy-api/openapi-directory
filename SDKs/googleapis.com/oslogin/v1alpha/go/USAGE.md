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
            Name: "quia",
        },
        QueryParams: operations.OsloginUsersGetLoginProfileQueryParams{
            DollarXgafv: "2",
            AccessToken: "fuga",
            Alt: "json",
            Callback: "voluptas",
            Fields: "voluptatem",
            Key: "consectetur",
            OauthToken: "distinctio",
            OperatingSystemType: "LINUX",
            PrettyPrint: true,
            ProjectID: "qui",
            QuotaUser: "at",
            SystemID: "expedita",
            UploadType: "velit",
            UploadProtocol: "illo",
            View: "LOGIN_PROFILE_VIEW_UNSPECIFIED",
        },
    }
    
    res, err := s.Users.OsloginUsersGetLoginProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginProfile != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->