# Data

### Available Operations

* [AnalyticsDataGet](#analyticsdataget) - Returns Analytics report data for a view (profile).

## AnalyticsDataGet

Returns Analytics report data for a view (profile).

### Example Usage

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
        Dimensions: sdk.String("ipsa"),
        EndDate: "delectus",
        Fields: sdk.String("tempora"),
        Filters: sdk.String("suscipit"),
        Ids: "molestiae",
        Key: sdk.String("minus"),
        MaxResults: sdk.Int64(812169),
        Metrics: "voluptatum",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        Segment: sdk.String("nisi"),
        Sort: sdk.String("recusandae"),
        StartDate: "temporibus",
        StartIndex: sdk.Int64(71036),
        UserIP: sdk.String("quis"),
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
