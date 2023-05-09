# Data

### Available Operations

* [AnalyticsDataGaGet](#analyticsdatagaget) - Returns Analytics data for a view (profile).
* [AnalyticsDataMcfGet](#analyticsdatamcfget) - Returns Analytics Multi-Channel Funnels data for a view (profile).
* [AnalyticsDataRealtimeGet](#analyticsdatarealtimeget) - Returns real time data for a view (profile).

## AnalyticsDataGaGet

Returns Analytics data for a view (profile).

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
    res, err := s.Data.AnalyticsDataGaGet(ctx, operations.AnalyticsDataGaGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Dimensions: sdk.String("tempora"),
        EndDate: "suscipit",
        Fields: sdk.String("molestiae"),
        Filters: sdk.String("minus"),
        Ids: "placeat",
        IncludeEmptyRows: sdk.Bool(false),
        Key: sdk.String("voluptatum"),
        MaxResults: sdk.Int64(479977),
        Metrics: "excepturi",
        OauthToken: sdk.String("nisi"),
        Output: operations.AnalyticsDataGaGetOutputEnumJSON.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        SamplingLevel: operations.AnalyticsDataGaGetSamplingLevelEnumDefault.ToPointer(),
        Segment: sdk.String("quis"),
        Sort: sdk.String("veritatis"),
        StartDate: "deserunt",
        StartIndex: sdk.Int64(20218),
        UserIP: sdk.String("ipsam"),
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

## AnalyticsDataMcfGet

Returns Analytics Multi-Channel Funnels data for a view (profile).

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
    res, err := s.Data.AnalyticsDataMcfGet(ctx, operations.AnalyticsDataMcfGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Dimensions: sdk.String("repellendus"),
        EndDate: "sapiente",
        Fields: sdk.String("quo"),
        Filters: sdk.String("odit"),
        Ids: "at",
        Key: sdk.String("at"),
        MaxResults: sdk.Int64(978619),
        Metrics: "molestiae",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        SamplingLevel: operations.AnalyticsDataMcfGetSamplingLevelEnumFaster.ToPointer(),
        Sort: sdk.String("totam"),
        StartDate: "porro",
        StartIndex: sdk.Int64(678880),
        UserIP: sdk.String("dicta"),
    }, operations.AnalyticsDataMcfGetSecurity{
        Option1: &operations.AnalyticsDataMcfGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.McfData != nil {
        // handle response
    }
}
```

## AnalyticsDataRealtimeGet

Returns real time data for a view (profile).

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
    res, err := s.Data.AnalyticsDataRealtimeGet(ctx, operations.AnalyticsDataRealtimeGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Dimensions: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Filters: sdk.String("occaecati"),
        Ids: "fugit",
        Key: sdk.String("deleniti"),
        MaxResults: sdk.Int64(944669),
        Metrics: "optio",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        Sort: sdk.String("commodi"),
        UserIP: sdk.String("molestiae"),
    }, operations.AnalyticsDataRealtimeGetSecurity{
        Option1: &operations.AnalyticsDataRealtimeGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RealtimeData != nil {
        // handle response
    }
}
```
