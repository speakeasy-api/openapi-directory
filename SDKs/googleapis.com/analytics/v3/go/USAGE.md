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
    }

    ctx := context.Background()
    res, err := s.Data.AnalyticsDataGaGet(ctx, req, operations.AnalyticsDataGaGetSecurity{
        Option1: &operations.AnalyticsDataGaGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GaData != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->