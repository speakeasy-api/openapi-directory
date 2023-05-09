# Records

### Available Operations

* [ChromeuxreportRecordsQueryHistoryRecord](#chromeuxreportrecordsqueryhistoryrecord) - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* [ChromeuxreportRecordsQueryRecord](#chromeuxreportrecordsqueryrecord) - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

## ChromeuxreportRecordsQueryHistoryRecord

Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.

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
    res, err := s.Records.ChromeuxreportRecordsQueryHistoryRecord(ctx, operations.ChromeuxreportRecordsQueryHistoryRecordRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueryHistoryRequest: &shared.QueryHistoryRequest{
            FormFactor: shared.QueryHistoryRequestFormFactorEnumPhone.ToPointer(),
            Metrics: []string{
                "minus",
                "placeat",
            },
            Origin: sdk.String("voluptatum"),
            URL: sdk.String("iusto"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryHistoryResponse != nil {
        // handle response
    }
}
```

## ChromeuxreportRecordsQueryRecord

Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

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
    res, err := s.Records.ChromeuxreportRecordsQueryRecord(ctx, operations.ChromeuxreportRecordsQueryRecordRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueryRequest: &shared.QueryRequest{
            EffectiveConnectionType: sdk.String("repellendus"),
            FormFactor: shared.QueryRequestFormFactorEnumTablet.ToPointer(),
            Metrics: []string{
                "odit",
                "at",
                "at",
                "maiores",
            },
            Origin: sdk.String("molestiae"),
            URL: sdk.String("quod"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```
