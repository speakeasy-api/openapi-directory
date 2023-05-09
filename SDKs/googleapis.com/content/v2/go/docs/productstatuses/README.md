# Productstatuses

### Available Operations

* [ContentProductstatusesCustombatch](#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [ContentProductstatusesGet](#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [ContentProductstatusesList](#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ProductstatusesCustomBatchRequest: &shared.ProductstatusesCustomBatchRequest{
            Entries: []shared.ProductstatusesCustomBatchRequestEntry{
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(301865),
                    Destinations: []string{
                        "ducimus",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("itaque"),
                    Method: sdk.String("necessitatibus"),
                    ProductID: sdk.String("numquam"),
                },
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(987362),
                    Destinations: []string{
                        "sapiente",
                        "alias",
                        "impedit",
                        "numquam",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("aspernatur"),
                    Method: sdk.String("nobis"),
                    ProductID: sdk.String("nihil"),
                },
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(532336),
                    Destinations: []string{
                        "vitae",
                        "ullam",
                        "nisi",
                        "consequuntur",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("voluptas"),
                    Method: sdk.String("ratione"),
                    ProductID: sdk.String("excepturi"),
                },
                shared.ProductstatusesCustomBatchRequestEntry{
                    BatchID: sdk.Int64(549348),
                    Destinations: []string{
                        "perferendis",
                        "quibusdam",
                        "impedit",
                    },
                    IncludeAttributes: sdk.Bool(false),
                    MerchantID: sdk.String("ducimus"),
                    Method: sdk.String("nisi"),
                    ProductID: sdk.String("nisi"),
                },
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("maxime"),
        IncludeAttributes: sdk.Bool(false),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("impedit"),
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
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("inventore"),
        Destinations: []string{
            "repellendus",
        },
        Fields: sdk.String("sit"),
        IncludeAttributes: sdk.Bool(false),
        Key: sdk.String("dolores"),
        MerchantID: "enim",
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "perspiciatis",
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("alias"),
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
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Destinations: []string{
            "fugit",
            "aspernatur",
        },
        Fields: sdk.String("at"),
        IncludeAttributes: sdk.Bool(false),
        IncludeInvalidInsertedItems: sdk.Bool(false),
        Key: sdk.String("illum"),
        MaxResults: sdk.Int64(506202),
        MerchantID: "sint",
        OauthToken: sdk.String("exercitationem"),
        PageToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("placeat"),
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
