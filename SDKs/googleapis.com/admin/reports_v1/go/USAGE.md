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

    req := operations.ReportsActivitiesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        ActorIPAddress: "distinctio",
        Alt: "proto",
        ApplicationName: "mobile",
        Callback: "nulla",
        CustomerID: "corrupti",
        EndTime: "illum",
        EventName: "vel",
        Fields: "error",
        Filters: "deserunt",
        GroupIDFilter: "suscipit",
        Key: "iure",
        MaxResults: 297534,
        OauthToken: "debitis",
        OrgUnitID: "ipsa",
        PageToken: "delectus",
        PrettyPrint: false,
        QuotaUser: "tempora",
        StartTime: "suscipit",
        UploadType: "molestiae",
        UploadProtocol: "minus",
        UserKey: "placeat",
    }

    ctx := context.Background()
    res, err := s.Activities.ReportsActivitiesList(ctx, req, operations.ReportsActivitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->