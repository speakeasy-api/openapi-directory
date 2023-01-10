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
            Dimensions: "expedita",
            EndDate: "necessitatibus",
            Fields: "eveniet",
            Filters: "omnis",
            Ids: "nulla",
            IncludeEmptyRows: false,
            Key: "occaecati",
            MaxResults: 2708896409316756384,
            Metrics: "similique",
            OauthToken: "eum",
            Output: "dataTable",
            PrettyPrint: true,
            QuotaUser: "id",
            SamplingLevel: "DEFAULT",
            Segment: "veniam",
            Sort: "ea",
            StartDate: "omnis",
            StartIndex: 4655524701577144768,
            UserIP: "ipsum",
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