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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Name: "corrupti",
        OauthToken: "illum",
        OperatingSystemType: "LINUX",
        PrettyPrint: false,
        ProjectID: "error",
        QuotaUser: "deserunt",
        SystemID: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
        View: "SECURITY_KEY",
    }

    ctx := context.Background()
    res, err := s.Users.OsloginUsersGetLoginProfile(ctx, req, operations.OsloginUsersGetLoginProfileSecurity{
        Option1: &operations.OsloginUsersGetLoginProfileSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->