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
            UserKey: "deserunt",
        },
        QueryParams: operations.ReportsActivitiesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "nulla",
            ActorIPAddress: "id",
            Alt: "proto",
            Callback: "perspiciatis",
            CustomerID: "nulla",
            EndTime: "nihil",
            EventName: "fuga",
            Fields: "facilis",
            Filters: "eum",
            GroupIDFilter: "iusto",
            Key: "ullam",
            MaxResults: 891773,
            OauthToken: "inventore",
            OrgUnitID: "sapiente",
            PageToken: "enim",
            PrettyPrint: false,
            QuotaUser: "eum",
            StartTime: "voluptatum",
            UploadType: "autem",
            UploadProtocol: "vel",
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