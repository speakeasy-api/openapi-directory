# Inventory

### Available Operations

* [BatchChangeInventory](#batchchangeinventory) - BatchChangeInventory
* [BatchRetrieveInventoryChanges](#batchretrieveinventorychanges) - BatchRetrieveInventoryChanges
* [BatchRetrieveInventoryCounts](#batchretrieveinventorycounts) - BatchRetrieveInventoryCounts
* [DeprecatedBatchChangeInventory](#deprecatedbatchchangeinventory) - DeprecatedBatchChangeInventory
* [DeprecatedBatchRetrieveInventoryChanges](#deprecatedbatchretrieveinventorychanges) - DeprecatedBatchRetrieveInventoryChanges
* [DeprecatedBatchRetrieveInventoryCounts](#deprecatedbatchretrieveinventorycounts) - DeprecatedBatchRetrieveInventoryCounts
* [DeprecatedRetrieveInventoryAdjustment](#deprecatedretrieveinventoryadjustment) - DeprecatedRetrieveInventoryAdjustment
* [DeprecatedRetrieveInventoryPhysicalCount](#deprecatedretrieveinventoryphysicalcount) - DeprecatedRetrieveInventoryPhysicalCount
* [RetrieveInventoryAdjustment](#retrieveinventoryadjustment) - RetrieveInventoryAdjustment
* [RetrieveInventoryChanges](#retrieveinventorychanges) - RetrieveInventoryChanges
* [RetrieveInventoryCount](#retrieveinventorycount) - RetrieveInventoryCount
* [RetrieveInventoryPhysicalCount](#retrieveinventoryphysicalcount) - RetrieveInventoryPhysicalCount
* [RetrieveInventoryTransfer](#retrieveinventorytransfer) - RetrieveInventoryTransfer

## BatchChangeInventory

Applies adjustments and counts to the provided item quantities.

On success: returns the current calculated counts for all objects
referenced in the request.
On failure: returns a list of related errors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.BatchChangeInventory(ctx, shared.BatchChangeInventoryRequest{
        Changes: []shared.InventoryChange{
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("sapiente"),
                        ID: sdk.String("a2e761f0-ca4d-4456-af10-31e6899f0c20"),
                        RootAdjustmentID: sdk.String("ipsa"),
                        ToState: sdk.String("quasi"),
                    },
                    CatalogObjectID: sdk.String("saepe"),
                    CatalogObjectType: sdk.String("quia"),
                    CreatedAt: sdk.String("aspernatur"),
                    EmployeeID: sdk.String("minus"),
                    FromState: sdk.String("illum"),
                    GoodsReceiptID: sdk.String("veniam"),
                    ID: sdk.String("5cc0584a-184d-476d-971f-c820c65b037b"),
                    LocationID: sdk.String("distinctio"),
                    OccurredAt: sdk.String("blanditiis"),
                    PurchaseOrderID: sdk.String("saepe"),
                    Quantity: sdk.String("sit"),
                    ReferenceID: sdk.String("optio"),
                    RefundID: sdk.String("impedit"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("corrupti"),
                        Name: sdk.String("Dan Boehm"),
                        Product: sdk.String("officiis"),
                    },
                    ToState: sdk.String("labore"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(862379),
                        Currency: sdk.String("accusamus"),
                    },
                    TransactionID: sdk.String("consequatur"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("ut"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "laborum",
                            Name: "Aaron Lockman",
                        },
                        GenericUnit: sdk.String("quibusdam"),
                        LengthUnit: sdk.String("facere"),
                        TimeUnit: sdk.String("pariatur"),
                        Type: sdk.String("quidem"),
                        VolumeUnit: sdk.String("labore"),
                        WeightUnit: sdk.String("commodi"),
                    },
                    Precision: sdk.Int64(649511),
                },
                MeasurementUnitID: sdk.String("similique"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("quasi"),
                    CatalogObjectType: sdk.String("quo"),
                    CreatedAt: sdk.String("voluptatibus"),
                    EmployeeID: sdk.String("illum"),
                    ID: sdk.String("6d828da0-1319-4112-9646-645c1d81f290"),
                    LocationID: sdk.String("magnam"),
                    OccurredAt: sdk.String("aspernatur"),
                    Quantity: sdk.String("sapiente"),
                    ReferenceID: sdk.String("nemo"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("laboriosam"),
                        Name: sdk.String("Rickey Kris"),
                        Product: sdk.String("a"),
                    },
                    State: sdk.String("consequatur"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("voluptates"),
                    CatalogObjectType: sdk.String("dolorum"),
                    CreatedAt: sdk.String("fugit"),
                    EmployeeID: sdk.String("eos"),
                    FromLocationID: sdk.String("veritatis"),
                    ID: sdk.String("6cbe071b-c163-4e27-9a3b-084da99257d0"),
                    OccurredAt: sdk.String("incidunt"),
                    Quantity: sdk.String("asperiores"),
                    ReferenceID: sdk.String("eius"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("ipsa"),
                        Name: sdk.String("Troy Kris"),
                        Product: sdk.String("numquam"),
                    },
                    State: sdk.String("quia"),
                    ToLocationID: sdk.String("repellendus"),
                },
                Type: sdk.String("blanditiis"),
            },
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("ut"),
                        ID: sdk.String("496cbdee-cf6b-499b-8635-62ebfdf55c29"),
                        RootAdjustmentID: sdk.String("labore"),
                        ToState: sdk.String("porro"),
                    },
                    CatalogObjectID: sdk.String("eaque"),
                    CatalogObjectType: sdk.String("ea"),
                    CreatedAt: sdk.String("consequatur"),
                    EmployeeID: sdk.String("nobis"),
                    FromState: sdk.String("accusantium"),
                    GoodsReceiptID: sdk.String("ea"),
                    ID: sdk.String("a1287764-eef6-4d0c-ad6e-d9c73dd63457"),
                    LocationID: sdk.String("illo"),
                    OccurredAt: sdk.String("corporis"),
                    PurchaseOrderID: sdk.String("ipsa"),
                    Quantity: sdk.String("occaecati"),
                    ReferenceID: sdk.String("dolorum"),
                    RefundID: sdk.String("blanditiis"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("recusandae"),
                        Name: sdk.String("Julio Bauch"),
                        Product: sdk.String("minus"),
                    },
                    ToState: sdk.String("veniam"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(664679),
                        Currency: sdk.String("architecto"),
                    },
                    TransactionID: sdk.String("maiores"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("perspiciatis"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "quod",
                            Name: "Hazel Considine",
                        },
                        GenericUnit: sdk.String("quidem"),
                        LengthUnit: sdk.String("iure"),
                        TimeUnit: sdk.String("aliquid"),
                        Type: sdk.String("culpa"),
                        VolumeUnit: sdk.String("illo"),
                        WeightUnit: sdk.String("reiciendis"),
                    },
                    Precision: sdk.Int64(214359),
                },
                MeasurementUnitID: sdk.String("doloremque"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("quod"),
                    CatalogObjectType: sdk.String("dignissimos"),
                    CreatedAt: sdk.String("non"),
                    EmployeeID: sdk.String("facere"),
                    ID: sdk.String("f5b67198-90f4-42a4-bb43-8d85b260591d"),
                    LocationID: sdk.String("reprehenderit"),
                    OccurredAt: sdk.String("tempora"),
                    Quantity: sdk.String("ad"),
                    ReferenceID: sdk.String("voluptates"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("sequi"),
                        Name: sdk.String("Russell Beier"),
                        Product: sdk.String("minus"),
                    },
                    State: sdk.String("excepturi"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("porro"),
                    CatalogObjectType: sdk.String("nesciunt"),
                    CreatedAt: sdk.String("maiores"),
                    EmployeeID: sdk.String("veniam"),
                    FromLocationID: sdk.String("autem"),
                    ID: sdk.String("7e0e2527-65b1-4d62-bcda-ce1f01216ce2"),
                    OccurredAt: sdk.String("aspernatur"),
                    Quantity: sdk.String("sequi"),
                    ReferenceID: sdk.String("sint"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("accusamus"),
                        Name: sdk.String("Amos Crooks"),
                        Product: sdk.String("quibusdam"),
                    },
                    State: sdk.String("accusantium"),
                    ToLocationID: sdk.String("nulla"),
                },
                Type: sdk.String("inventore"),
            },
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("omnis"),
                        ID: sdk.String("d959f439-e392-466c-bd95-f7aa2b241136"),
                        RootAdjustmentID: sdk.String("perspiciatis"),
                        ToState: sdk.String("nostrum"),
                    },
                    CatalogObjectID: sdk.String("temporibus"),
                    CatalogObjectType: sdk.String("et"),
                    CreatedAt: sdk.String("debitis"),
                    EmployeeID: sdk.String("nisi"),
                    FromState: sdk.String("aliquid"),
                    GoodsReceiptID: sdk.String("excepturi"),
                    ID: sdk.String("8fcc4596-217c-4297-b676-334254038bfb"),
                    LocationID: sdk.String("minima"),
                    OccurredAt: sdk.String("cupiditate"),
                    PurchaseOrderID: sdk.String("molestiae"),
                    Quantity: sdk.String("et"),
                    ReferenceID: sdk.String("accusamus"),
                    RefundID: sdk.String("excepturi"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("deleniti"),
                        Name: sdk.String("Erika Auer"),
                        Product: sdk.String("molestiae"),
                    },
                    ToState: sdk.String("adipisci"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(518700),
                        Currency: sdk.String("perspiciatis"),
                    },
                    TransactionID: sdk.String("optio"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("itaque"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "at",
                            Name: "Orlando Runolfsson",
                        },
                        GenericUnit: sdk.String("quibusdam"),
                        LengthUnit: sdk.String("culpa"),
                        TimeUnit: sdk.String("dolor"),
                        Type: sdk.String("occaecati"),
                        VolumeUnit: sdk.String("exercitationem"),
                        WeightUnit: sdk.String("unde"),
                    },
                    Precision: sdk.Int64(288331),
                },
                MeasurementUnitID: sdk.String("pariatur"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("vel"),
                    CatalogObjectType: sdk.String("laboriosam"),
                    CreatedAt: sdk.String("soluta"),
                    EmployeeID: sdk.String("minus"),
                    ID: sdk.String("2ae48063-2b99-454b-afa2-206369828553"),
                    LocationID: sdk.String("optio"),
                    OccurredAt: sdk.String("libero"),
                    Quantity: sdk.String("ab"),
                    ReferenceID: sdk.String("alias"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("accusantium"),
                        Name: sdk.String("Stacey Reynolds"),
                        Product: sdk.String("incidunt"),
                    },
                    State: sdk.String("provident"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("dolores"),
                    CatalogObjectType: sdk.String("illo"),
                    CreatedAt: sdk.String("recusandae"),
                    EmployeeID: sdk.String("quod"),
                    FromLocationID: sdk.String("magni"),
                    ID: sdk.String("053b7493-66ac-48ee-8f2b-f19588d40d03"),
                    OccurredAt: sdk.String("reiciendis"),
                    Quantity: sdk.String("neque"),
                    ReferenceID: sdk.String("assumenda"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("saepe"),
                        Name: sdk.String("Ernesto Crist"),
                        Product: sdk.String("facilis"),
                    },
                    State: sdk.String("earum"),
                    ToLocationID: sdk.String("ipsum"),
                },
                Type: sdk.String("itaque"),
            },
        },
        IdempotencyKey: "cupiditate",
        IgnoreUnchangedCounts: sdk.Bool(false),
    }, operations.BatchChangeInventorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchChangeInventoryResponse != nil {
        // handle response
    }
}
```

## BatchRetrieveInventoryChanges

Returns historical physical counts and adjustments based on the
provided filter criteria.

Results are paginated and sorted in ascending order according their
`occurred_at` timestamp (oldest first).

BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
that cannot be handled by other, simpler endpoints.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.BatchRetrieveInventoryChanges(ctx, shared.BatchRetrieveInventoryChangesRequest{
        CatalogObjectIds: []string{
            "harum",
        },
        Cursor: sdk.String("nobis"),
        LocationIds: []string{
            "consequatur",
            "temporibus",
        },
        States: []string{
            "quos",
            "commodi",
            "blanditiis",
            "voluptatibus",
        },
        Types: []string{
            "nemo",
            "ratione",
            "dolore",
            "perferendis",
        },
        UpdatedAfter: sdk.String("enim"),
        UpdatedBefore: sdk.String("impedit"),
    }, operations.BatchRetrieveInventoryChangesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRetrieveInventoryChangesResponse != nil {
        // handle response
    }
}
```

## BatchRetrieveInventoryCounts

Returns current counts for the provided
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s at the requested
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.

Results are paginated and sorted in descending order according to their
`calculated_at` timestamp (newest first).

When `updated_after` is specified, only counts that have changed since that
time (based on the server timestamp for the most recent change) are
returned. This allows clients to perform a "sync" operation, for example
in response to receiving a Webhook notification.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.BatchRetrieveInventoryCounts(ctx, shared.BatchRetrieveInventoryCountsRequest{
        CatalogObjectIds: []string{
            "dolor",
            "nesciunt",
            "vitae",
        },
        Cursor: sdk.String("pariatur"),
        LocationIds: []string{
            "provident",
            "quia",
        },
        States: []string{
            "modi",
            "doloribus",
            "et",
            "qui",
        },
        UpdatedAfter: sdk.String("iusto"),
    }, operations.BatchRetrieveInventoryCountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRetrieveInventoryCountsResponse != nil {
        // handle response
    }
}
```

## DeprecatedBatchChangeInventory

Deprecated version of [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-change-inventory) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.DeprecatedBatchChangeInventory(ctx, shared.BatchChangeInventoryRequest{
        Changes: []shared.InventoryChange{
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("quidem"),
                        ID: sdk.String("0e0bf1f8-2179-478d-8acc-a77aeb7b7021"),
                        RootAdjustmentID: sdk.String("est"),
                        ToState: sdk.String("nemo"),
                    },
                    CatalogObjectID: sdk.String("magni"),
                    CatalogObjectType: sdk.String("quae"),
                    CreatedAt: sdk.String("quaerat"),
                    EmployeeID: sdk.String("suscipit"),
                    FromState: sdk.String("rerum"),
                    GoodsReceiptID: sdk.String("laboriosam"),
                    ID: sdk.String("4e99fb0e-67e0-494f-9fed-5540ef53a34a"),
                    LocationID: sdk.String("quasi"),
                    OccurredAt: sdk.String("rerum"),
                    PurchaseOrderID: sdk.String("blanditiis"),
                    Quantity: sdk.String("sapiente"),
                    ReferenceID: sdk.String("recusandae"),
                    RefundID: sdk.String("perspiciatis"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("natus"),
                        Name: sdk.String("Dawn Casper"),
                        Product: sdk.String("cumque"),
                    },
                    ToState: sdk.String("aperiam"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(320760),
                        Currency: sdk.String("fugiat"),
                    },
                    TransactionID: sdk.String("quas"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("quis"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "fuga",
                            Name: "Carlos Stark",
                        },
                        GenericUnit: sdk.String("voluptate"),
                        LengthUnit: sdk.String("perferendis"),
                        TimeUnit: sdk.String("maiores"),
                        Type: sdk.String("harum"),
                        VolumeUnit: sdk.String("ratione"),
                        WeightUnit: sdk.String("molestias"),
                    },
                    Precision: sdk.Int64(483774),
                },
                MeasurementUnitID: sdk.String("non"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("magni"),
                    CatalogObjectType: sdk.String("sint"),
                    CreatedAt: sdk.String("consequatur"),
                    EmployeeID: sdk.String("illum"),
                    ID: sdk.String("336561ec-a16e-4f89-851b-d76eeeb518c4"),
                    LocationID: sdk.String("possimus"),
                    OccurredAt: sdk.String("similique"),
                    Quantity: sdk.String("architecto"),
                    ReferenceID: sdk.String("asperiores"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("est"),
                        Name: sdk.String("Rodney Hilll Sr."),
                        Product: sdk.String("delectus"),
                    },
                    State: sdk.String("doloremque"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("laboriosam"),
                    CatalogObjectType: sdk.String("nulla"),
                    CreatedAt: sdk.String("dolore"),
                    EmployeeID: sdk.String("itaque"),
                    FromLocationID: sdk.String("enim"),
                    ID: sdk.String("b72f0f54-8568-4a04-a4e0-0a1d6eb94346"),
                    OccurredAt: sdk.String("aliquam"),
                    Quantity: sdk.String("corporis"),
                    ReferenceID: sdk.String("at"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("ipsa"),
                        Name: sdk.String("Susan Maggio"),
                        Product: sdk.String("expedita"),
                    },
                    State: sdk.String("libero"),
                    ToLocationID: sdk.String("mollitia"),
                },
                Type: sdk.String("quis"),
            },
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("cumque"),
                        ID: sdk.String("ceff5cb0-1fe5-41e5-a8a4-5ac82b85f8bc"),
                        RootAdjustmentID: sdk.String("explicabo"),
                        ToState: sdk.String("placeat"),
                    },
                    CatalogObjectID: sdk.String("animi"),
                    CatalogObjectType: sdk.String("expedita"),
                    CreatedAt: sdk.String("laborum"),
                    EmployeeID: sdk.String("atque"),
                    FromState: sdk.String("assumenda"),
                    GoodsReceiptID: sdk.String("laborum"),
                    ID: sdk.String("4127dd59-7ff4-4711-aa1b-c74b86cecc74"),
                    LocationID: sdk.String("voluptatibus"),
                    OccurredAt: sdk.String("nihil"),
                    PurchaseOrderID: sdk.String("ducimus"),
                    Quantity: sdk.String("nam"),
                    ReferenceID: sdk.String("incidunt"),
                    RefundID: sdk.String("deleniti"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("aliquam"),
                        Name: sdk.String("Gerardo Spinka"),
                        Product: sdk.String("autem"),
                    },
                    ToState: sdk.String("hic"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(20486),
                        Currency: sdk.String("tempora"),
                    },
                    TransactionID: sdk.String("aliquam"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("architecto"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "nulla",
                            Name: "Jody Dickens",
                        },
                        GenericUnit: sdk.String("sit"),
                        LengthUnit: sdk.String("laudantium"),
                        TimeUnit: sdk.String("sit"),
                        Type: sdk.String("perspiciatis"),
                        VolumeUnit: sdk.String("quaerat"),
                        WeightUnit: sdk.String("nesciunt"),
                    },
                    Precision: sdk.Int64(474453),
                },
                MeasurementUnitID: sdk.String("adipisci"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("eveniet"),
                    CatalogObjectType: sdk.String("ipsa"),
                    CreatedAt: sdk.String("laboriosam"),
                    EmployeeID: sdk.String("sit"),
                    ID: sdk.String("459bebba-d02f-4258-abcf-152558daa95b"),
                    LocationID: sdk.String("itaque"),
                    OccurredAt: sdk.String("suscipit"),
                    Quantity: sdk.String("porro"),
                    ReferenceID: sdk.String("nulla"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("consequatur"),
                        Name: sdk.String("Maureen Halvorson"),
                        Product: sdk.String("consectetur"),
                    },
                    State: sdk.String("quis"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("ut"),
                    CatalogObjectType: sdk.String("est"),
                    CreatedAt: sdk.String("fuga"),
                    EmployeeID: sdk.String("labore"),
                    FromLocationID: sdk.String("adipisci"),
                    ID: sdk.String("2b47e176-3c52-408c-a3e9-802d82f0d45e"),
                    OccurredAt: sdk.String("soluta"),
                    Quantity: sdk.String("eius"),
                    ReferenceID: sdk.String("fuga"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("blanditiis"),
                        Name: sdk.String("Brett Kub"),
                        Product: sdk.String("recusandae"),
                    },
                    State: sdk.String("ipsam"),
                    ToLocationID: sdk.String("quisquam"),
                },
                Type: sdk.String("delectus"),
            },
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("optio"),
                        ID: sdk.String("18edc7f7-87e3-42e0-8b3d-3ed0c5670ef4"),
                        RootAdjustmentID: sdk.String("aspernatur"),
                        ToState: sdk.String("harum"),
                    },
                    CatalogObjectID: sdk.String("illum"),
                    CatalogObjectType: sdk.String("dolor"),
                    CreatedAt: sdk.String("porro"),
                    EmployeeID: sdk.String("iste"),
                    FromState: sdk.String("earum"),
                    GoodsReceiptID: sdk.String("vitae"),
                    ID: sdk.String("cc503f6c-39bc-4d0a-a290-f957f385189a"),
                    LocationID: sdk.String("possimus"),
                    OccurredAt: sdk.String("molestiae"),
                    PurchaseOrderID: sdk.String("officiis"),
                    Quantity: sdk.String("reiciendis"),
                    ReferenceID: sdk.String("voluptatum"),
                    RefundID: sdk.String("aperiam"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("reprehenderit"),
                        Name: sdk.String("Mrs. Luke Vandervort"),
                        Product: sdk.String("dolorem"),
                    },
                    ToState: sdk.String("adipisci"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(762233),
                        Currency: sdk.String("similique"),
                    },
                    TransactionID: sdk.String("odio"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("unde"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "asperiores",
                            Name: "Rene Stehr",
                        },
                        GenericUnit: sdk.String("aut"),
                        LengthUnit: sdk.String("neque"),
                        TimeUnit: sdk.String("quia"),
                        Type: sdk.String("soluta"),
                        VolumeUnit: sdk.String("fuga"),
                        WeightUnit: sdk.String("qui"),
                    },
                    Precision: sdk.Int64(416466),
                },
                MeasurementUnitID: sdk.String("a"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("temporibus"),
                    CatalogObjectType: sdk.String("sequi"),
                    CreatedAt: sdk.String("eum"),
                    EmployeeID: sdk.String("rem"),
                    ID: sdk.String("ba9216bc-b415-4835-8736-41723133edc0"),
                    LocationID: sdk.String("modi"),
                    OccurredAt: sdk.String("eum"),
                    Quantity: sdk.String("rerum"),
                    ReferenceID: sdk.String("quod"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("nemo"),
                        Name: sdk.String("Gina Farrell"),
                        Product: sdk.String("maxime"),
                    },
                    State: sdk.String("deserunt"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("eius"),
                    CatalogObjectType: sdk.String("molestias"),
                    CreatedAt: sdk.String("dolores"),
                    EmployeeID: sdk.String("dolores"),
                    FromLocationID: sdk.String("reprehenderit"),
                    ID: sdk.String("c42c22c5-5350-4495-85db-b3c57c1e4981"),
                    OccurredAt: sdk.String("itaque"),
                    Quantity: sdk.String("atque"),
                    ReferenceID: sdk.String("dolorum"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("similique"),
                        Name: sdk.String("Veronica Kohler"),
                        Product: sdk.String("porro"),
                    },
                    State: sdk.String("quasi"),
                    ToLocationID: sdk.String("sint"),
                },
                Type: sdk.String("inventore"),
            },
            shared.InventoryChange{
                Adjustment: &shared.InventoryAdjustment{
                    AdjustmentGroup: &shared.InventoryAdjustmentGroup{
                        FromState: sdk.String("fugit"),
                        ID: sdk.String("ebde64bf-cc54-469d-8015-dfa796206bef"),
                        RootAdjustmentID: sdk.String("consequuntur"),
                        ToState: sdk.String("quidem"),
                    },
                    CatalogObjectID: sdk.String("aperiam"),
                    CatalogObjectType: sdk.String("animi"),
                    CreatedAt: sdk.String("ratione"),
                    EmployeeID: sdk.String("itaque"),
                    FromState: sdk.String("non"),
                    GoodsReceiptID: sdk.String("quia"),
                    ID: sdk.String("c1aa010e-9aac-42e9-9355-86d18f9f97a4"),
                    LocationID: sdk.String("nam"),
                    OccurredAt: sdk.String("sapiente"),
                    PurchaseOrderID: sdk.String("fuga"),
                    Quantity: sdk.String("facere"),
                    ReferenceID: sdk.String("odit"),
                    RefundID: sdk.String("nam"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("asperiores"),
                        Name: sdk.String("Hope Jenkins"),
                        Product: sdk.String("deserunt"),
                    },
                    ToState: sdk.String("totam"),
                    TotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(267292),
                        Currency: sdk.String("id"),
                    },
                    TransactionID: sdk.String("repellendus"),
                },
                MeasurementUnit: &shared.CatalogMeasurementUnit{
                    MeasurementUnit: &shared.MeasurementUnit{
                        AreaUnit: sdk.String("excepturi"),
                        CustomUnit: &shared.MeasurementUnitCustom{
                            Abbreviation: "unde",
                            Name: "Ray Botsford",
                        },
                        GenericUnit: sdk.String("quasi"),
                        LengthUnit: sdk.String("magni"),
                        TimeUnit: sdk.String("numquam"),
                        Type: sdk.String("velit"),
                        VolumeUnit: sdk.String("quis"),
                        WeightUnit: sdk.String("nesciunt"),
                    },
                    Precision: sdk.Int64(124198),
                },
                MeasurementUnitID: sdk.String("blanditiis"),
                PhysicalCount: &shared.InventoryPhysicalCount{
                    CatalogObjectID: sdk.String("quam"),
                    CatalogObjectType: sdk.String("perferendis"),
                    CreatedAt: sdk.String("cumque"),
                    EmployeeID: sdk.String("delectus"),
                    ID: sdk.String("68b03ad4-21bd-443d-9f0c-b0a0003eb22d"),
                    LocationID: sdk.String("sint"),
                    OccurredAt: sdk.String("tempore"),
                    Quantity: sdk.String("dolorem"),
                    ReferenceID: sdk.String("dolorum"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("in"),
                        Name: sdk.String("Meredith Marks"),
                        Product: sdk.String("fuga"),
                    },
                    State: sdk.String("deserunt"),
                },
                Transfer: &shared.InventoryTransfer{
                    CatalogObjectID: sdk.String("iure"),
                    CatalogObjectType: sdk.String("labore"),
                    CreatedAt: sdk.String("quasi"),
                    EmployeeID: sdk.String("cumque"),
                    FromLocationID: sdk.String("corporis"),
                    ID: sdk.String("7d1fedc2-050d-438d-83ce-185472f9ee69"),
                    OccurredAt: sdk.String("quasi"),
                    Quantity: sdk.String("iure"),
                    ReferenceID: sdk.String("ex"),
                    Source: &shared.SourceApplication{
                        ApplicationID: sdk.String("error"),
                        Name: sdk.String("Geoffrey Turner"),
                        Product: sdk.String("tempora"),
                    },
                    State: sdk.String("quaerat"),
                    ToLocationID: sdk.String("debitis"),
                },
                Type: sdk.String("similique"),
            },
        },
        IdempotencyKey: "porro",
        IgnoreUnchangedCounts: sdk.Bool(false),
    }, operations.DeprecatedBatchChangeInventorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchChangeInventoryResponse != nil {
        // handle response
    }
}
```

## DeprecatedBatchRetrieveInventoryChanges

Deprecated version of [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.DeprecatedBatchRetrieveInventoryChanges(ctx, shared.BatchRetrieveInventoryChangesRequest{
        CatalogObjectIds: []string{
            "libero",
            "sequi",
            "laborum",
        },
        Cursor: sdk.String("fugit"),
        LocationIds: []string{
            "dignissimos",
            "corporis",
            "quo",
        },
        States: []string{
            "quo",
            "inventore",
        },
        Types: []string{
            "officiis",
            "suscipit",
            "perferendis",
            "nisi",
        },
        UpdatedAfter: sdk.String("quibusdam"),
        UpdatedBefore: sdk.String("alias"),
    }, operations.DeprecatedBatchRetrieveInventoryChangesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRetrieveInventoryChangesResponse != nil {
        // handle response
    }
}
```

## DeprecatedBatchRetrieveInventoryCounts

Deprecated version of [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-counts) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.DeprecatedBatchRetrieveInventoryCounts(ctx, shared.BatchRetrieveInventoryCountsRequest{
        CatalogObjectIds: []string{
            "repellendus",
            "qui",
        },
        Cursor: sdk.String("deserunt"),
        LocationIds: []string{
            "impedit",
            "laudantium",
            "nihil",
        },
        States: []string{
            "repudiandae",
            "nemo",
            "voluptatem",
        },
        UpdatedAfter: sdk.String("quod"),
    }, operations.DeprecatedBatchRetrieveInventoryCountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRetrieveInventoryCountsResponse != nil {
        // handle response
    }
}
```

## DeprecatedRetrieveInventoryAdjustment

Deprecated version of [RetrieveInventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-adjustment) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.DeprecatedRetrieveInventoryAdjustment(ctx, operations.DeprecatedRetrieveInventoryAdjustmentRequest{
        AdjustmentID: "vitae",
    }, operations.DeprecatedRetrieveInventoryAdjustmentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryAdjustmentResponse != nil {
        // handle response
    }
}
```

## DeprecatedRetrieveInventoryPhysicalCount

Deprecated version of [RetrieveInventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-physical-count) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.DeprecatedRetrieveInventoryPhysicalCount(ctx, operations.DeprecatedRetrieveInventoryPhysicalCountRequest{
        PhysicalCountID: "vel",
    }, operations.DeprecatedRetrieveInventoryPhysicalCountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryPhysicalCountResponse != nil {
        // handle response
    }
}
```

## RetrieveInventoryAdjustment

Returns the [InventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryAdjustment) object
with the provided `adjustment_id`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.RetrieveInventoryAdjustment(ctx, operations.RetrieveInventoryAdjustmentRequest{
        AdjustmentID: "voluptas",
    }, operations.RetrieveInventoryAdjustmentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryAdjustmentResponse != nil {
        // handle response
    }
}
```

## RetrieveInventoryChanges

Returns a set of physical counts and inventory adjustments for the
provided [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at the requested
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. 

You can achieve the same result by calling [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) 
and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.

Results are paginated and sorted in descending order according to their
`occurred_at` timestamp (newest first).

There are no limits on how far back the caller can page. This endpoint can be 
used to display recent changes for a specific item. For more
sophisticated queries, use a batch endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.RetrieveInventoryChanges(ctx, operations.RetrieveInventoryChangesRequest{
        CatalogObjectID: "laboriosam",
        Cursor: sdk.String("veritatis"),
        LocationIds: sdk.String("similique"),
    }, operations.RetrieveInventoryChangesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryChangesResponse != nil {
        // handle response
    }
}
```

## RetrieveInventoryCount

Retrieves the current calculated stock count for a given
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at a given set of
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. Responses are paginated and unsorted.
For more sophisticated queries, use a batch endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.RetrieveInventoryCount(ctx, operations.RetrieveInventoryCountRequest{
        CatalogObjectID: "veritatis",
        Cursor: sdk.String("temporibus"),
        LocationIds: sdk.String("excepturi"),
    }, operations.RetrieveInventoryCountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryCountResponse != nil {
        // handle response
    }
}
```

## RetrieveInventoryPhysicalCount

Returns the [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount)
object with the provided `physical_count_id`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.RetrieveInventoryPhysicalCount(ctx, operations.RetrieveInventoryPhysicalCountRequest{
        PhysicalCountID: "veritatis",
    }, operations.RetrieveInventoryPhysicalCountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryPhysicalCountResponse != nil {
        // handle response
    }
}
```

## RetrieveInventoryTransfer

Returns the [InventoryTransfer](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryTransfer) object
with the provided `transfer_id`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.RetrieveInventoryTransfer(ctx, operations.RetrieveInventoryTransferRequest{
        TransferID: "ipsum",
    }, operations.RetrieveInventoryTransferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveInventoryTransferResponse != nil {
        // handle response
    }
}
```
