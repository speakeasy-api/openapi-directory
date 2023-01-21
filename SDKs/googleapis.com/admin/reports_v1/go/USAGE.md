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
            ApplicationName: "mobile",
            UserKey: "voluptas",
        },
        QueryParams: operations.ReportsActivitiesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            ActorIPAddress: "consequuntur",
            Alt: "media",
            Callback: "expedita",
            CustomerID: "voluptas",
            EndTime: "fugit",
            EventName: "et",
            Fields: "nihil",
            Filters: "rerum",
            GroupIDFilter: "dicta",
            Key: "debitis",
            MaxResults: 5617773211005988520,
            OauthToken: "et",
            OrgUnitID: "ut",
            PageToken: "dolorem",
            PrettyPrint: false,
            QuotaUser: "voluptate",
            StartTime: "iste",
            UploadType: "vitae",
            UploadProtocol: "totam",
        },
    }
    
    res, err := s.Activities.ReportsActivitiesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->