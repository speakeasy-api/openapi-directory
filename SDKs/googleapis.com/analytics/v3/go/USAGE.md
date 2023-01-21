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
            Dimensions: "voluptas",
            EndDate: "culpa",
            Fields: "expedita",
            Filters: "consequuntur",
            Ids: "dolor",
            IncludeEmptyRows: true,
            Key: "voluptas",
            MaxResults: 8274930044578894929,
            Metrics: "et",
            OauthToken: "nihil",
            Output: "json",
            PrettyPrint: false,
            QuotaUser: "debitis",
            SamplingLevel: "DEFAULT",
            Segment: "et",
            Sort: "ut",
            StartDate: "dolorem",
            StartIndex: 7259475919510918339,
            UserIP: "voluptate",
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