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
            Dimensions: "omnis",
            EndDate: "quam",
            Fields: "tempora",
            Filters: "sed",
            Ids: "recusandae",
            IncludeEmptyRows: false,
            Key: "et",
            MaxResults: 3531634285688427985,
            Metrics: "labore",
            OauthToken: "consectetur",
            Output: "dataTable",
            PrettyPrint: false,
            QuotaUser: "saepe",
            SamplingLevel: "FASTER",
            Segment: "sunt",
            Sort: "quia",
            StartDate: "nulla",
            StartIndex: 6560194854368822570,
            UserIP: "officia",
        },
    }
    
    res, err := s.Data.AnalyticsDataGaGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GaData != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->