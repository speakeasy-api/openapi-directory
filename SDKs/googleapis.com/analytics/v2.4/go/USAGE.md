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
        Alt: "atom",
        Dimensions: "corrupti",
        EndDate: "provident",
        Fields: "distinctio",
        Filters: "quibusdam",
        Ids: "unde",
        Key: "nulla",
        MaxResults: 544883,
        Metrics: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        Segment: "deserunt",
        Sort: "suscipit",
        StartDate: "iure",
        StartIndex: 297534,
        UserIP: "debitis",
    }

    ctx := context.Background()
    res, err := s.Data.AnalyticsDataGet(ctx, req, operations.AnalyticsDataGetSecurity{
        Option1: &operations.AnalyticsDataGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->