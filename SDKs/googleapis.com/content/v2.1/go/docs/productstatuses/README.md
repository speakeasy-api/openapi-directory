# Productstatuses

### Available Operations

* [ContentProductstatusesCustombatch](#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [ContentProductstatusesGet](#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [ContentProductstatusesList](#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.
* [ContentProductstatusesRepricingreportsList](#contentproductstatusesrepricingreportslist) - Lists the metrics report for a given Repricing product.

## ContentProductstatusesCustombatch

Gets the statuses of multiple products in a single request.

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
    res, err := s.Productstatuses.ContentProductstatusesCustombatch(ctx, operations.ContentProductstatusesCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProductstatusesCustomBatchRequest: &shared.ProductstatusesCustomBatchRequest{
            Entries: []shared.ProductstatusesCustomBatchRequestEntry{
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(5510),
                    Destinations: []string{
                        "placeat",
                        "adipisci",
                        "tenetur",
                        "non",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("accusantium"),
                    Method: sdk.String("corrupti"),
                    ProductID: sdk.String("itaque"),
                },
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(938015),
                    Destinations: []string{
                        "dicta",
                        "corporis",
                        "impedit",
                        "eveniet",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("cum"),
                    Method: sdk.String("dolore"),
                    ProductID: sdk.String("illum"),
                },
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(409295),
                    Destinations: []string{
                        "quasi",
                        "accusamus",
                        "animi",
                        "necessitatibus",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("voluptatem"),
                    Method: sdk.String("maiores"),
                    ProductID: sdk.String("odio"),
                },
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(332429),
                    Destinations: []string{
                        "itaque",
                        "possimus",
                        "tenetur",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("sed"),
                    Method: sdk.String("deserunt"),
                    ProductID: sdk.String("eligendi"),
                },
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("quas"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.ContentProductstatusesCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductstatusesCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentProductstatusesGet

Gets the status of a product from your Merchant Center account.

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
    res, err := s.Productstatuses.ContentProductstatusesGet(ctx, operations.ContentProductstatusesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facere"),
        Destinations: []string{
            "nam",
            "quaerat",
            "corrupti",
            "sint",
        },
        Fields: sdk.String("eius"),
        Key: sdk.String("vel"),
        MerchantID: "quasi",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "odio",
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.ContentProductstatusesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductStatus != nil {
        // handle response
    }
}
```

## ContentProductstatusesList

Lists the statuses of the products in your Merchant Center account.

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
    res, err := s.Productstatuses.ContentProductstatusesList(ctx, operations.ContentProductstatusesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Destinations: []string{
            "provident",
            "veniam",
            "sit",
            "fugit",
        },
        Fields: sdk.String("a"),
        Key: sdk.String("consequatur"),
        MaxResults: sdk.Int64(877619),
        MerchantID: "id",
        OauthToken: sdk.String("error"),
        PageToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.ContentProductstatusesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductstatusesListResponse != nil {
        // handle response
    }
}
```

## ContentProductstatusesRepricingreportsList

Lists the metrics report for a given Repricing product.

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
    res, err := s.Productstatuses.ContentProductstatusesRepricingreportsList(ctx, operations.ContentProductstatusesRepricingreportsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fuga"),
        EndDate: sdk.String("cumque"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("maiores"),
        MerchantID: "esse",
        OauthToken: sdk.String("explicabo"),
        PageSize: sdk.Int64(966738),
        PageToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "deleniti",
        QuotaUser: sdk.String("enim"),
        RuleID: sdk.String("sit"),
        StartDate: sdk.String("voluptatem"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.ContentProductstatusesRepricingreportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepricingProductReportsResponse != nil {
        // handle response
    }
}
```
