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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PosCustomBatchRequest: &shared.PosCustomBatchRequest{
            Entries: []shared.PosCustomBatchRequestEntry{
                shared.PosCustomBatchRequestEntry{
                    BatchID: sdk.Int64(231255),
                    Inventory: &shared.PosInventory{
                        ContentLanguage: sdk.String("voluptas"),
                        Gtin: sdk.String("quaerat"),
                        ItemID: sdk.String("earum"),
                        Kind: sdk.String("tenetur"),
                        Price: &shared.Price{
                            Currency: sdk.String("assumenda"),
                            Value: sdk.String("dolore"),
                        },
                        Quantity: sdk.String("enim"),
                        StoreCode: sdk.String("ullam"),
                        TargetCountry: sdk.String("perspiciatis"),
                        Timestamp: sdk.String("alias"),
                    },
                    MerchantID: sdk.String("ex"),
                    Method: sdk.String("quibusdam"),
                    Sale: &shared.PosSale{
                        ContentLanguage: sdk.String("dicta"),
                        Gtin: sdk.String("quia"),
                        ItemID: sdk.String("commodi"),
                        Kind: sdk.String("neque"),
                        Price: &shared.Price{
                            Currency: sdk.String("quibusdam"),
                            Value: sdk.String("numquam"),
                        },
                        Quantity: sdk.String("rem"),
                        SaleID: sdk.String("officiis"),
                        StoreCode: sdk.String("omnis"),
                        TargetCountry: sdk.String("neque"),
                        Timestamp: sdk.String("corporis"),
                    },
                    Store: &shared.PosStore{
                        GcidCategory: []string{
                            "dolores",
                            "placeat",
                            "excepturi",
                            "recusandae",
                        },
                        Kind: sdk.String("quos"),
                        PhoneNumber: sdk.String("dicta"),
                        PlaceID: sdk.String("sapiente"),
                        StoreAddress: sdk.String("ipsum"),
                        StoreCode: sdk.String("consequatur"),
                        StoreName: sdk.String("soluta"),
                        WebsiteURL: sdk.String("necessitatibus"),
                    },
                    StoreCode: sdk.String("sequi"),
                    TargetMerchantID: sdk.String("recusandae"),
                },
                shared.PosCustomBatchRequestEntry{
                    BatchID: sdk.Int64(286329),
                    Inventory: &shared.PosInventory{
                        ContentLanguage: sdk.String("adipisci"),
                        Gtin: sdk.String("magni"),
                        ItemID: sdk.String("aperiam"),
                        Kind: sdk.String("dolores"),
                        Price: &shared.Price{
                            Currency: sdk.String("illum"),
                            Value: sdk.String("iusto"),
                        },
                        Quantity: sdk.String("magni"),
                        StoreCode: sdk.String("beatae"),
                        TargetCountry: sdk.String("aliquid"),
                        Timestamp: sdk.String("ad"),
                    },
                    MerchantID: sdk.String("voluptate"),
                    Method: sdk.String("vel"),
                    Sale: &shared.PosSale{
                        ContentLanguage: sdk.String("minima"),
                        Gtin: sdk.String("sit"),
                        ItemID: sdk.String("vel"),
                        Kind: sdk.String("laboriosam"),
                        Price: &shared.Price{
                            Currency: sdk.String("quaerat"),
                            Value: sdk.String("quasi"),
                        },
                        Quantity: sdk.String("rem"),
                        SaleID: sdk.String("dignissimos"),
                        StoreCode: sdk.String("doloremque"),
                        TargetCountry: sdk.String("assumenda"),
                        Timestamp: sdk.String("provident"),
                    },
                    Store: &shared.PosStore{
                        GcidCategory: []string{
                            "sed",
                            "inventore",
                            "voluptatibus",
                            "unde",
                        },
                        Kind: sdk.String("deserunt"),
                        PhoneNumber: sdk.String("repellendus"),
                        PlaceID: sdk.String("consequatur"),
                        StoreAddress: sdk.String("adipisci"),
                        StoreCode: sdk.String("doloremque"),
                        StoreName: sdk.String("optio"),
                        WebsiteURL: sdk.String("tempora"),
                    },
                    StoreCode: sdk.String("debitis"),
                    TargetMerchantID: sdk.String("cumque"),
                },
                shared.PosCustomBatchRequestEntry{
                    BatchID: sdk.Int64(806124),
                    Inventory: &shared.PosInventory{
                        ContentLanguage: sdk.String("et"),
                        Gtin: sdk.String("beatae"),
                        ItemID: sdk.String("id"),
                        Kind: sdk.String("consequatur"),
                        Price: &shared.Price{
                            Currency: sdk.String("quos"),
                            Value: sdk.String("ratione"),
                        },
                        Quantity: sdk.String("iure"),
                        StoreCode: sdk.String("tempora"),
                        TargetCountry: sdk.String("eos"),
                        Timestamp: sdk.String("natus"),
                    },
                    MerchantID: sdk.String("voluptatem"),
                    Method: sdk.String("suscipit"),
                    Sale: &shared.PosSale{
                        ContentLanguage: sdk.String("laudantium"),
                        Gtin: sdk.String("facilis"),
                        ItemID: sdk.String("laudantium"),
                        Kind: sdk.String("ullam"),
                        Price: &shared.Price{
                            Currency: sdk.String("aut"),
                            Value: sdk.String("quia"),
                        },
                        Quantity: sdk.String("officia"),
                        SaleID: sdk.String("quaerat"),
                        StoreCode: sdk.String("corporis"),
                        TargetCountry: sdk.String("accusamus"),
                        Timestamp: sdk.String("iusto"),
                    },
                    Store: &shared.PosStore{
                        GcidCategory: []string{
                            "esse",
                            "neque",
                            "quidem",
                            "quisquam",
                        },
                        Kind: sdk.String("praesentium"),
                        PhoneNumber: sdk.String("tempora"),
                        PlaceID: sdk.String("ipsam"),
                        StoreAddress: sdk.String("officiis"),
                        StoreCode: sdk.String("sequi"),
                        StoreName: sdk.String("magni"),
                        WebsiteURL: sdk.String("voluptatem"),
                    },
                    StoreCode: sdk.String("est"),
                    TargetMerchantID: sdk.String("amet"),
                },
                shared.PosCustomBatchRequestEntry{
                    BatchID: sdk.Int64(84211),
                    Inventory: &shared.PosInventory{
                        ContentLanguage: sdk.String("error"),
                        Gtin: sdk.String("voluptatibus"),
                        ItemID: sdk.String("numquam"),
                        Kind: sdk.String("rerum"),
                        Price: &shared.Price{
                            Currency: sdk.String("dolorum"),
                            Value: sdk.String("quibusdam"),
                        },
                        Quantity: sdk.String("earum"),
                        StoreCode: sdk.String("excepturi"),
                        TargetCountry: sdk.String("numquam"),
                        Timestamp: sdk.String("molestiae"),
                    },
                    MerchantID: sdk.String("impedit"),
                    Method: sdk.String("error"),
                    Sale: &shared.PosSale{
                        ContentLanguage: sdk.String("animi"),
                        Gtin: sdk.String("voluptatum"),
                        ItemID: sdk.String("aliquid"),
                        Kind: sdk.String("nihil"),
                        Price: &shared.Price{
                            Currency: sdk.String("facilis"),
                            Value: sdk.String("optio"),
                        },
                        Quantity: sdk.String("incidunt"),
                        SaleID: sdk.String("eos"),
                        StoreCode: sdk.String("magnam"),
                        TargetCountry: sdk.String("dolores"),
                        Timestamp: sdk.String("aliquid"),
                    },
                    Store: &shared.PosStore{
                        GcidCategory: []string{
                            "vel",
                            "ad",
                        },
                        Kind: sdk.String("quos"),
                        PhoneNumber: sdk.String("illo"),
                        PlaceID: sdk.String("suscipit"),
                        StoreAddress: sdk.String("quibusdam"),
                        StoreCode: sdk.String("fugiat"),
                        StoreName: sdk.String("impedit"),
                        WebsiteURL: sdk.String("culpa"),
                    },
                    StoreCode: sdk.String("atque"),
                    TargetMerchantID: sdk.String("voluptates"),
                },
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("ipsam"),
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
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("fugit"),
        MerchantID: "quo",
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        StoreCode: "id",
        TargetMerchantID: "quibusdam",
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("accusamus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("facere"),
        MerchantID: "nobis",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        StoreCode: "aut",
        TargetMerchantID: "temporibus",
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("incidunt"),
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
                "similique",
                "dolore",
                "esse",
            },
            Kind: sdk.String("reiciendis"),
            PhoneNumber: sdk.String("iste"),
            PlaceID: sdk.String("amet"),
            StoreAddress: sdk.String("occaecati"),
            StoreCode: sdk.String("aut"),
            StoreName: sdk.String("impedit"),
            WebsiteURL: sdk.String("minima"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("provident"),
        MerchantID: "quas",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        TargetMerchantID: "fuga",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("maiores"),
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
            ContentLanguage: sdk.String("recusandae"),
            Gtin: sdk.String("a"),
            ItemID: sdk.String("consectetur"),
            Price: &shared.Price{
                Currency: sdk.String("sapiente"),
                Value: sdk.String("voluptatibus"),
            },
            Quantity: sdk.String("assumenda"),
            StoreCode: sdk.String("repellendus"),
            TargetCountry: sdk.String("omnis"),
            Timestamp: sdk.String("delectus"),
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quam"),
        Key: sdk.String("omnis"),
        MerchantID: "similique",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        TargetMerchantID: "facere",
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("quis"),
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
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("soluta"),
        MerchantID: "ipsa",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        TargetMerchantID: "vero",
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("quas"),
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
            ContentLanguage: sdk.String("architecto"),
            Gtin: sdk.String("praesentium"),
            ItemID: sdk.String("iusto"),
            Price: &shared.Price{
                Currency: sdk.String("fugiat"),
                Value: sdk.String("enim"),
            },
            Quantity: sdk.String("iure"),
            SaleID: sdk.String("laudantium"),
            StoreCode: sdk.String("modi"),
            TargetCountry: sdk.String("magnam"),
            Timestamp: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("enim"),
        MerchantID: "animi",
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        TargetMerchantID: "eum",
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("eveniet"),
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
