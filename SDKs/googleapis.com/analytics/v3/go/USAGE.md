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
            Dimensions: "corrupti",
            EndDate: "provident",
            Fields: "distinctio",
            Filters: "quibusdam",
            Ids: "unde",
            IncludeEmptyRows: false,
            Key: "nulla",
            MaxResults: 544883,
            Metrics: "illum",
            OauthToken: "vel",
            Output: "json",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            SamplingLevel: "FASTER",
            Segment: "iure",
            Sort: "magnam",
            StartDate: "debitis",
            StartIndex: 56713,
            UserIP: "delectus",
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