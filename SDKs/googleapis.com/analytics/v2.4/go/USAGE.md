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
            Dimensions: "officiis",
            EndDate: "laborum",
            Fields: "et",
            Filters: "quia",
            Ids: "voluptatem",
            Key: "vel",
            MaxResults: 2195685693223152917,
            Metrics: "incidunt",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "quam",
            Segment: "harum",
            Sort: "debitis",
            StartDate: "et",
            StartIndex: 6730165001314166952,
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