# Pos

### Available Operations

* [ContentPosCustombatch](#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [ContentPosDelete](#contentposdelete) - Deletes a store for the given merchant.
* [ContentPosGet](#contentposget) - Retrieves information about the given store.
* [ContentPosInsert](#contentposinsert) - Creates a store for the given merchant.
* [ContentPosInventory](#contentposinventory) - Submit inventory for the given merchant.
* [ContentPosList](#contentposlist) - Lists the stores of the target merchant.
* [ContentPosSale](#contentpossale) - Submit a sale event for the given merchant.

## ContentPosCustombatch

Batches multiple POS-related calls in a single request.

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
    res, err := s.Pos.ContentPosCustombatch(ctx, operations.ContentPosCustombatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PosCustomBatchRequest: &shared.PosCustomBatchRequest{
            Entries: []shared.PosCustomBatchRequestEntry{
                shared.PosCustomBatchRequestEntry{
                    BatchID: sdk.Int64(671690),
                    Inventory: &shared.PosInventory{
                        ContentLanguage: sdk.String("omnis"),
                        Gtin: sdk.String("nihil"),
                        ItemID: sdk.String("tenetur"),
                        Kind: sdk.String("sapiente"),
                        Price: &shared.Price{
                            Currency: sdk.String("velit"),
                            Value: sdk.String("adipisci"),
                        },
                        Quantity: sdk.String("non"),
                        StoreCode: sdk.String("optio"),
                        TargetCountry: sdk.String("illum"),
                        Timestamp: sdk.String("at"),
                    },
                    MerchantID: sdk.String("tenetur"),
                    Method: sdk.String("molestias"),
                    Sale: &shared.PosSale{
                        ContentLanguage: sdk.String("ipsam"),
                        Gtin: sdk.String("esse"),
                        ItemID: sdk.String("laborum"),
                        Kind: sdk.String("perspiciatis"),
                        Price: &shared.Price{
                            Currency: sdk.String("voluptates"),
                            Value: sdk.String("eum"),
                        },
                        Quantity: sdk.String("quasi"),
                        SaleID: sdk.String("quas"),
                        StoreCode: sdk.String("odio"),
                        TargetCountry: sdk.String("commodi"),
                        Timestamp: sdk.String("porro"),
                    },
                    Store: &shared.PosStore{
                        GcidCategory: []string{
                            "mollitia",
                            "quidem",
                        },
                        Kind: sdk.String("explicabo"),
                        PhoneNumber: sdk.String("et"),
                        PlaceID: sdk.String("nulla"),
                        StoreAddress: sdk.String("magni"),
                        StoreCode: sdk.String("natus"),
                        StoreName: sdk.String("illum"),
                        WebsiteURL: sdk.String("a"),
                    },
                    StoreCode: sdk.String("impedit"),
                    TargetMerchantID: sdk.String("unde"),
                },
            },
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("iste"),
    }, operations.ContentPosCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PosCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentPosDelete

Deletes a store for the given merchant.

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
    res, err := s.Pos.ContentPosDelete(ctx, operations.ContentPosDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("eaque"),
        Key: sdk.String("eum"),
        MerchantID: "laboriosam",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        StoreCode: "assumenda",
        TargetMerchantID: "explicabo",
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ContentPosDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ContentPosGet

Retrieves information about the given store.

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
    res, err := s.Pos.ContentPosGet(ctx, operations.ContentPosGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("quis"),
        Key: sdk.String("velit"),
        MerchantID: "ratione",
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        StoreCode: "recusandae",
        TargetMerchantID: "cumque",
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("totam"),
    }, operations.ContentPosGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PosStore != nil {
        // handle response
    }
}
```

## ContentPosInsert

Creates a store for the given merchant.

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
    res, err := s.Pos.ContentPosInsert(ctx, operations.ContentPosInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PosStore: &shared.PosStore{
            GcidCategory: []string{
                "est",
                "fugit",
                "veritatis",
                "necessitatibus",
            },
            Kind: sdk.String("iste"),
            PhoneNumber: sdk.String("dicta"),
            PlaceID: sdk.String("ipsam"),
            StoreAddress: sdk.String("consequuntur"),
            StoreCode: sdk.String("cumque"),
            StoreName: sdk.String("quidem"),
            WebsiteURL: sdk.String("non"),
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestias"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("beatae"),
        Key: sdk.String("autem"),
        MerchantID: "ducimus",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        TargetMerchantID: "necessitatibus",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.ContentPosInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PosStore != nil {
        // handle response
    }
}
```

## ContentPosInventory

Submit inventory for the given merchant.

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
    res, err := s.Pos.ContentPosInventory(ctx, operations.ContentPosInventoryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PosInventoryRequest: &shared.PosInventoryRequest{
            ContentLanguage: sdk.String("illum"),
            Gtin: sdk.String("distinctio"),
            ItemID: sdk.String("voluptatem"),
            Price: &shared.Price{
                Currency: sdk.String("non"),
                Value: sdk.String("quaerat"),
            },
            Quantity: sdk.String("consequatur"),
            StoreCode: sdk.String("laudantium"),
            TargetCountry: sdk.String("repellendus"),
            Timestamp: sdk.String("commodi"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("earum"),
        MerchantID: "tenetur",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        TargetMerchantID: "enim",
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.ContentPosInventorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PosInventoryResponse != nil {
        // handle response
    }
}
```

## ContentPosList

Lists the stores of the target merchant.

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
    res, err := s.Pos.ContentPosList(ctx, operations.ContentPosListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("quia"),
        Key: sdk.String("commodi"),
        MerchantID: "neque",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        TargetMerchantID: "rem",
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.ContentPosListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PosListResponse != nil {
        // handle response
    }
}
```

## ContentPosSale

Submit a sale event for the given merchant.

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
    res, err := s.Pos.ContentPosSale(ctx, operations.ContentPosSaleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PosSaleRequest: &shared.PosSaleRequest{
            ContentLanguage: sdk.String("corporis"),
            Gtin: sdk.String("quod"),
            ItemID: sdk.String("dolores"),
            Price: &shared.Price{
                Currency: sdk.String("placeat"),
                Value: sdk.String("excepturi"),
            },
            Quantity: sdk.String("recusandae"),
            SaleID: sdk.String("quos"),
            StoreCode: sdk.String("dicta"),
            TargetCountry: sdk.String("sapiente"),
            Timestamp: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("sequi"),
        Key: sdk.String("recusandae"),
        MerchantID: "labore",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        TargetMerchantID: "aperiam",
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("illum"),
    }, operations.ContentPosSaleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PosSaleResponse != nil {
        // handle response
    }
}
```
