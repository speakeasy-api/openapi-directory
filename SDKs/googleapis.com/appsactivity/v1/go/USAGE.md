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

    req := operations.AppsactivityActivitiesListRequest{
        Alt: "json",
        DriveAncestorID: "corrupti",
        DriveFileID: "provident",
        Fields: "distinctio",
        GroupingStrategy: "none",
        Key: "unde",
        OauthToken: "nulla",
        PageSize: 544883,
        PageToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        Source: "error",
        UserID: "deserunt",
        UserIP: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Activities.AppsactivityActivitiesList(ctx, req, operations.AppsactivityActivitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActivitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->