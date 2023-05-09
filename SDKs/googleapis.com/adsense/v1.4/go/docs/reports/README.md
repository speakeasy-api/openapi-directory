# Reports

### Available Operations

* [AdsenseReportsGenerate](#adsensereportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [AdsenseReportsSavedGenerate](#adsensereportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [AdsenseReportsSavedList](#adsensereportssavedlist) - List all saved reports in this AdSense account.

## AdsenseReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

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
    res, err := s.Reports.AdsenseReportsGenerate(ctx, operations.AdsenseReportsGenerateRequest{
        AccountID: []string{
            "quo",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Currency: sdk.String("pariatur"),
        Dimension: []string{
            "ea",
            "excepturi",
            "odit",
            "ea",
        },
        EndDate: "accusantium",
        Fields: sdk.String("ab"),
        Filter: []string{
            "quidem",
            "ipsam",
            "voluptate",
            "autem",
        },
        Key: sdk.String("nam"),
        Locale: sdk.String("eaque"),
        MaxResults: sdk.Int64(866383),
        Metric: []string{
            "voluptatibus",
            "perferendis",
        },
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        Sort: []string{
            "cumque",
        },
        StartDate: "corporis",
        StartIndex: sdk.Int64(944124),
        UseTimezoneReporting: sdk.Bool(false),
        UserIP: sdk.String("libero"),
    }, operations.AdsenseReportsGenerateSecurity{
        Option1: &operations.AdsenseReportsGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdsenseReportsGenerateResponse != nil {
        // handle response
    }
}
```

## AdsenseReportsSavedGenerate

Generate an AdSense report based on the saved report ID sent in the query parameters.

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
    res, err := s.Reports.AdsenseReportsSavedGenerate(ctx, operations.AdsenseReportsSavedGenerateRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dolores"),
        Key: sdk.String("quis"),
        Locale: sdk.String("totam"),
        MaxResults: sdk.Int64(489549),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        SavedReportID: "nesciunt",
        StartIndex: sdk.Int64(179490),
        UserIP: sdk.String("perferendis"),
    }, operations.AdsenseReportsSavedGenerateSecurity{
        Option1: &operations.AdsenseReportsSavedGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdsenseReportsGenerateResponse != nil {
        // handle response
    }
}
```

## AdsenseReportsSavedList

List all saved reports in this AdSense account.

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
    res, err := s.Reports.AdsenseReportsSavedList(ctx, operations.AdsenseReportsSavedListRequest{
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("minus"),
        Key: sdk.String("quam"),
        MaxResults: sdk.Int64(223924),
        OauthToken: sdk.String("vero"),
        PageToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UserIP: sdk.String("recusandae"),
    }, operations.AdsenseReportsSavedListSecurity{
        Option1: &operations.AdsenseReportsSavedListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedReports != nil {
        // handle response
    }
}
```
