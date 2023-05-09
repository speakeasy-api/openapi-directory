# Reports

### Available Operations

* [YoutubeAnalyticsReportsQuery](#youtubeanalyticsreportsquery) - Retrieve your YouTube Analytics reports.

## YoutubeAnalyticsReportsQuery

Retrieve your YouTube Analytics reports.

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
    res, err := s.Reports.YoutubeAnalyticsReportsQuery(ctx, operations.YoutubeAnalyticsReportsQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Currency: sdk.String("dolorum"),
        Dimensions: sdk.String("deleniti"),
        EndDate: sdk.String("omnis"),
        Fields: sdk.String("necessitatibus"),
        Filters: sdk.String("distinctio"),
        Ids: sdk.String("asperiores"),
        IncludeHistoricalChannelData: sdk.Bool(false),
        Key: sdk.String("nihil"),
        MaxResults: sdk.Int64(216897),
        Metrics: sdk.String("voluptate"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        Sort: sdk.String("eius"),
        StartDate: sdk.String("aspernatur"),
        StartIndex: sdk.Int64(20651),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.YoutubeAnalyticsReportsQuerySecurity{
        Option1: &operations.YoutubeAnalyticsReportsQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```
