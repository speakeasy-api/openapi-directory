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
        Security: operations.ReportsActivitiesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ReportsActivitiesListPathParams{
            ApplicationName: "meet",
            UserKey: "provident",
        },
        QueryParams: operations.ReportsActivitiesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            ActorIPAddress: "unde",
            Alt: "proto",
            Callback: "corrupti",
            CustomerID: "illum",
            EndTime: "vel",
            EventName: "error",
            Fields: "deserunt",
            Filters: "suscipit",
            GroupIDFilter: "iure",
            Key: "magnam",
            MaxResults: 891773,
            OauthToken: "ipsa",
            OrgUnitID: "delectus",
            PageToken: "tempora",
            PrettyPrint: false,
            QuotaUser: "suscipit",
            StartTime: "molestiae",
            UploadType: "minus",
            UploadProtocol: "placeat",
        },
    }

    ctx := context.Background()
    res, err := s.Activities.ReportsActivitiesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->