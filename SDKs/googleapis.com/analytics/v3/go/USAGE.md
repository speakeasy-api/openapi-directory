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

    req := operations.AnalyticsDataGaGetRequest{
        Security: operations.AnalyticsDataGaGetSecurity{
            Option1: &operations.AnalyticsDataGaGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.AnalyticsDataGaGetQueryParams{
            Alt: "json",
            Dimensions: "deserunt",
            EndDate: "porro",
            Fields: "nulla",
            Filters: "id",
            Ids: "vero",
            IncludeEmptyRows: false,
            Key: "perspiciatis",
            MaxResults: 847252,
            Metrics: "nihil",
            OauthToken: "fuga",
            Output: "json",
            PrettyPrint: false,
            QuotaUser: "eum",
            SamplingLevel: "FASTER",
            Segment: "ullam",
            Sort: "saepe",
            StartDate: "inventore",
            StartIndex: 963663,
            UserIP: "enim",
        },
    }

    ctx := context.Background()
    res, err := s.Data.AnalyticsDataGaGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GaData != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->