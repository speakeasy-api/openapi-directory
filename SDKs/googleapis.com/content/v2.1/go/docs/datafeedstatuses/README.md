# Datafeedstatuses

### Available Operations

* [ContentDatafeedstatusesCustombatch](#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [ContentDatafeedstatusesGet](#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [ContentDatafeedstatusesList](#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

## ContentDatafeedstatusesCustombatch

Gets multiple Merchant Center datafeed statuses in a single request.

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
    res, err := s.Datafeedstatuses.ContentDatafeedstatusesCustombatch(ctx, operations.ContentDatafeedstatusesCustombatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DatafeedstatusesCustomBatchRequest: &shared.DatafeedstatusesCustomBatchRequest{
            Entries: []shared.DatafeedstatusesCustomBatchRequestEntry{
                shared.DatafeedstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(836364),
                    Country: sdk.String("Marshall Islands"),
                    DatafeedID: sdk.String("commodi"),
                    FeedLabel: sdk.String("itaque"),
                    Language: sdk.String("commodi"),
                    MerchantID: sdk.String("totam"),
                    Method: sdk.String("earum"),
                },
                shared.DatafeedstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(267207),
                    Country: sdk.String("Qatar"),
                    DatafeedID: sdk.String("vero"),
                    FeedLabel: sdk.String("voluptatem"),
                    Language: sdk.String("ipsam"),
                    MerchantID: sdk.String("vel"),
                    Method: sdk.String("alias"),
                },
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("enim"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.ContentDatafeedstatusesCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatafeedstatusesCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentDatafeedstatusesGet

Retrieves the status of a datafeed from your Merchant Center account.

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
    res, err := s.Datafeedstatuses.ContentDatafeedstatusesGet(ctx, operations.ContentDatafeedstatusesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Country: sdk.String("Tanzania"),
        DatafeedID: "impedit",
        FeedLabel: sdk.String("hic"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("asperiores"),
        Language: sdk.String("ex"),
        MerchantID: "voluptas",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("minus"),
    }, operations.ContentDatafeedstatusesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatafeedStatus != nil {
        // handle response
    }
}
```

## ContentDatafeedstatusesList

Lists the statuses of the datafeeds in your Merchant Center account.

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
    res, err := s.Datafeedstatuses.ContentDatafeedstatusesList(ctx, operations.ContentDatafeedstatusesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("atque"),
        Key: sdk.String("ipsum"),
        MaxResults: sdk.Int64(773035),
        MerchantID: "magni",
        OauthToken: sdk.String("soluta"),
        PageToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.ContentDatafeedstatusesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatafeedstatusesListResponse != nil {
        // handle response
    }
}
```
