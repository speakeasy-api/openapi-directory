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
            Dimensions: "nam",
            EndDate: "et",
            Fields: "molestiae",
            Filters: "qui",
            Ids: "sit",
            Key: "et",
            MaxResults: 1727979121818110814,
            Metrics: "nemo",
            OauthToken: "facere",
            PrettyPrint: false,
            QuotaUser: "repellat",
            Segment: "accusantium",
            Sort: "excepturi",
            StartDate: "consequuntur",
            StartIndex: 6545082317487046118,
            UserIP: "delectus",
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