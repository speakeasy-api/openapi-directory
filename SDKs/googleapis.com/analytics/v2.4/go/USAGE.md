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
    
    req := operations.AnalyticsDataGetRequest{
        Security: operations.AnalyticsDataGetSecurity{
            Option1: &operations.AnalyticsDataGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.AnalyticsDataGetQueryParams{
            Alt: "atom",
            Dimensions: "voluptas",
            EndDate: "culpa",
            Fields: "expedita",
            Filters: "consequuntur",
            Ids: "dolor",
            Key: "expedita",
            MaxResults: 6044372234677422456,
            Metrics: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            Segment: "dicta",
            Sort: "debitis",
            StartDate: "voluptatum",
            StartIndex: 2339563716805116249,
            UserIP: "ut",
        },
    }
    
    res, err := s.Data.AnalyticsDataGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->