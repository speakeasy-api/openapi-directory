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
            Dimensions: "deserunt",
            EndDate: "porro",
            Fields: "nulla",
            Filters: "id",
            Ids: "vero",
            Key: "perspiciatis",
            MaxResults: 847252,
            Metrics: "nihil",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            Segment: "eum",
            Sort: "iusto",
            StartDate: "ullam",
            StartIndex: 891773,
            UserIP: "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Data.AnalyticsDataGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->