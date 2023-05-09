<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Data.AnalyticsDataGaGet(ctx, operations.AnalyticsDataGaGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Dimensions: sdk.String("corrupti"),
        EndDate: "provident",
        Fields: sdk.String("distinctio"),
        Filters: sdk.String("quibusdam"),
        Ids: "unde",
        IncludeEmptyRows: sdk.Bool(false),
        Key: sdk.String("nulla"),
        MaxResults: sdk.Int64(544883),
        Metrics: "illum",
        OauthToken: sdk.String("vel"),
        Output: operations.AnalyticsDataGaGetOutputEnumJSON.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        SamplingLevel: operations.AnalyticsDataGaGetSamplingLevelEnumFaster.ToPointer(),
        Segment: sdk.String("iure"),
        Sort: sdk.String("magnam"),
        StartDate: "debitis",
        StartIndex: sdk.Int64(56713),
        UserIP: sdk.String("delectus"),
    }, operations.AnalyticsDataGaGetSecurity{
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