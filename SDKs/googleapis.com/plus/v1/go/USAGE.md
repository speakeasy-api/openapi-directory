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

    req := operations.PlusActivitiesGetRequest{
        ActivityID: "corrupti",
        Alt: "json",
        Fields: "provident",
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        UserIP: "nulla",
    }

    ctx := context.Background()
    res, err := s.Activities.PlusActivitiesGet(ctx, req, operations.PlusActivitiesGetSecurity{
        Option1: &operations.PlusActivitiesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->