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
            Name: "quo",
        },
        QueryParams: operations.OsloginUsersGetLoginProfileQueryParams{
            DollarXgafv: "1",
            AccessToken: "at",
            Alt: "proto",
            Callback: "id",
            Fields: "inventore",
            Key: "perferendis",
            OauthToken: "eum",
            PrettyPrint: false,
            ProjectID: "dolorem",
            QuotaUser: "cumque",
            SystemID: "magnam",
            UploadType: "voluptates",
            UploadProtocol: "eum",
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