# Reports

### Available Operations

* [AdsensehostReportsGenerate](#adsensehostreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

## AdsensehostReportsGenerate

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
    res, err := s.Reports.AdsensehostReportsGenerate(ctx, operations.AdsensehostReportsGenerateRequest{
        Alt: shared.AltEnumCsv.ToPointer(),
        Dimension: []string{
            "sunt",
            "ullam",
        },
        EndDate: "nam",
        Fields: sdk.String("hic"),
        Filter: []string{
            "cumque",
        },
        Key: sdk.String("soluta"),
        Locale: sdk.String("nobis"),
        MaxResults: sdk.Int64(92596),
        Metric: []string{
            "ipsum",
            "veritatis",
            "nobis",
            "quos",
        },
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Sort: []string{
            "delectus",
        },
        StartDate: "dolorem",
        StartIndex: sdk.Int64(292147),
        UserIP: sdk.String("labore"),
    }, operations.AdsensehostReportsGenerateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```
