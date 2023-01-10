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
            ApplicationName: "keep",
            UserKey: "molestiae",
        },
        QueryParams: operations.ReportsActivitiesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "sit",
            ActorIPAddress: "aut",
            Alt: "json",
            Callback: "expedita",
            CustomerID: "nihil",
            EndTime: "incidunt",
            EventName: "est",
            Fields: "nostrum",
            Filters: "esse",
            GroupIDFilter: "dolores",
            Key: "ut",
            MaxResults: 2825598413902487513,
            OauthToken: "id",
            OrgUnitID: "consequuntur",
            PageToken: "magni",
            PrettyPrint: true,
            QuotaUser: "doloremque",
            StartTime: "iure",
            UploadType: "maiores",
            UploadProtocol: "dolor",
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