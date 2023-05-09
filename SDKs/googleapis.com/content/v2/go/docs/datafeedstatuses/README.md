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
                    BatchID: sdk.Int64(820767),
                    Country: sdk.String("Cape Verde"),
                    DatafeedID: sdk.String("eveniet"),
                    Language: sdk.String("asperiores"),
                    MerchantID: sdk.String("facere"),
                    Method: sdk.String("veritatis"),
                },
                shared.DatafeedstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(159414),
                    Country: sdk.String("Bermuda"),
                    DatafeedID: sdk.String("similique"),
                    Language: sdk.String("culpa"),
                    MerchantID: sdk.String("aliquid"),
                    Method: sdk.String("tenetur"),
                },
                shared.DatafeedstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(62713),
                    Country: sdk.String("United Arab Emirates"),
                    DatafeedID: sdk.String("vel"),
                    Language: sdk.String("in"),
                    MerchantID: sdk.String("eius"),
                    Method: sdk.String("libero"),
                },
                shared.DatafeedstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(849039),
                    Country: sdk.String("Saint Barthelemy"),
                    DatafeedID: sdk.String("accusantium"),
                    Language: sdk.String("aliquam"),
                    MerchantID: sdk.String("sapiente"),
                    Method: sdk.String("dicta"),
                },
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("ex"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Country: sdk.String("Myanmar"),
        DatafeedID: "tenetur",
        Fields: sdk.String("quasi"),
        Key: sdk.String("at"),
        Language: sdk.String("et"),
        MerchantID: "voluptate",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("consectetur"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("aut"),
        MaxResults: sdk.Int64(513075),
        MerchantID: "eum",
        OauthToken: sdk.String("mollitia"),
        PageToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("voluptatem"),
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
