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
            UserKey: "ut",
        },
        QueryParams: operations.ReportsActivitiesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "doloribus",
            ActorIPAddress: "illo",
            Alt: "proto",
            Callback: "et",
            CustomerID: "asperiores",
            EndTime: "officia",
            EventName: "aut",
            Fields: "fugiat",
            Filters: "voluptatum",
            GroupIDFilter: "odio",
            Key: "qui",
            MaxResults: 1773872765660661886,
            OauthToken: "et",
            OrgUnitID: "assumenda",
            PageToken: "dolore",
            PrettyPrint: false,
            QuotaUser: "explicabo",
            StartTime: "repudiandae",
            UploadType: "sapiente",
            UploadProtocol: "nesciunt",
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