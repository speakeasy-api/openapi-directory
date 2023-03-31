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

    req := operations.DriveAboutGetRequest{
        Alt: "json",
        Fields: "corrupti",
        IncludeSubscribed: false,
        Key: "provident",
        MaxChangeIDCount: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        StartChangeID: "nulla",
        UserIP: "corrupti",
    }

    ctx := context.Background()
    res, err := s.About.DriveAboutGet(ctx, req, operations.DriveAboutGetSecurity{
        Option1: &operations.DriveAboutGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.About != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->