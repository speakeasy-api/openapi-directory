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
    res, err := s.Data.AnalyticsDataGet(ctx, operations.AnalyticsDataGetRequest{
        Alt: shared.AltEnumAtom.ToPointer(),
        Dimensions: sdk.String("corrupti"),
        EndDate: "provident",
        Fields: sdk.String("distinctio"),
        Filters: sdk.String("quibusdam"),
        Ids: "unde",
        Key: sdk.String("nulla"),
        MaxResults: sdk.Int64(544883),
        Metrics: "illum",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        Segment: sdk.String("deserunt"),
        Sort: sdk.String("suscipit"),
        StartDate: "iure",
        StartIndex: sdk.Int64(297534),
        UserIP: sdk.String("debitis"),
    }, operations.AnalyticsDataGetSecurity{
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