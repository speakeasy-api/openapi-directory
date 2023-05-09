# Catalog

### Available Operations

* [BatchDeleteCatalogObjects](#batchdeletecatalogobjects) - BatchDeleteCatalogObjects
* [BatchRetrieveCatalogObjects](#batchretrievecatalogobjects) - BatchRetrieveCatalogObjects
* [BatchUpsertCatalogObjects](#batchupsertcatalogobjects) - BatchUpsertCatalogObjects
* [CatalogInfo](#cataloginfo) - CatalogInfo
* [DeleteCatalogObject](#deletecatalogobject) - DeleteCatalogObject
* [ListCatalog](#listcatalog) - ListCatalog
* [RetrieveCatalogObject](#retrievecatalogobject) - RetrieveCatalogObject
* [SearchCatalogItems](#searchcatalogitems) - SearchCatalogItems
* [SearchCatalogObjects](#searchcatalogobjects) - SearchCatalogObjects
* [UpdateItemModifierLists](#updateitemmodifierlists) - UpdateItemModifierLists
* [UpdateItemTaxes](#updateitemtaxes) - UpdateItemTaxes
* [UpsertCatalogObject](#upsertcatalogobject) - UpsertCatalogObject

## BatchDeleteCatalogObjects

Deletes a set of [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

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
    res, err := s.Catalog.BatchDeleteCatalogObjects(ctx, shared.BatchDeleteCatalogObjectsRequest{
        ObjectIds: []string{
            "rerum",
            "dicta",
            "magnam",
            "cumque",
        },
    }, operations.BatchDeleteCatalogObjectsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteCatalogObjectsResponse != nil {
        // handle response
    }
}
```

## BatchRetrieveCatalogObjects

Returns a set of objects based on the provided ID.
Each [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) objects, references to
its [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.

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
    res, err := s.Catalog.BatchRetrieveCatalogObjects(ctx, shared.BatchRetrieveCatalogObjectsRequest{
        CatalogVersion: sdk.Int64(813798),
        IncludeRelatedObjects: sdk.Bool(false),
        ObjectIds: []string{
            "aliquid",
            "laborum",
        },
    }, operations.BatchRetrieveCatalogObjectsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRetrieveCatalogObjectsResponse != nil {
        // handle response
    }
}
```

## BatchUpsertCatalogObjects

Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.

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
    res, err := s.Catalog.BatchUpsertCatalogObjects(ctx, shared.BatchUpsertCatalogObjectsRequest{
        Batches: []shared.CatalogObjectBatch{
            shared.CatalogObjectBatch{
                Objects: []shared.CatalogObject{
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "enim",
                            "accusamus",
                            "delectus",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("provident"),
                                LocationID: sdk.String("nam"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("id"),
                                LocationID: sdk.String("blanditiis"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("deleniti"),
                                LocationID: sdk.String("sapiente"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Sandy Huels"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "molestiae",
                                "perferendis",
                                "nihil",
                            },
                            AppVisibility: sdk.String("magnam"),
                            CustomAttributeUsageCount: sdk.Int64(716075),
                            Description: sdk.String("id"),
                            Key: sdk.String("labore"),
                            Name: "Laurie Mosciski",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(878453),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Danielle Bosco",
                                        UID: sdk.String("provident"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(551816),
                            },
                            SellerVisibility: sdk.String("sint"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("accusantium"),
                                Name: sdk.String("Abel O'Hara"),
                                Product: sdk.String("dolor"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "necessitatibus",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "nemo": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("quasi"),
                                Key: sdk.String("iure"),
                                Name: sdk.String("Doyle Gibson"),
                                NumberValue: sdk.String("facilis"),
                                SelectionUIDValues: []string{
                                    "architecto",
                                    "architecto",
                                },
                                StringValue: sdk.String("repudiandae"),
                                Type: sdk.String("ullam"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(714242),
                                Currency: sdk.String("nihil"),
                            },
                            DiscountType: sdk.String("repellat"),
                            LabelColor: sdk.String("quibusdam"),
                            ModifyTaxBasis: sdk.String("sed"),
                            Name: sdk.String("Al Bashirian"),
                            Percentage: sdk.String("natus"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("dolores"),
                            Name: sdk.String("Mrs. Deanna Kuhn"),
                            URL: sdk.String("eos"),
                        },
                        ImageID: sdk.String("perferendis"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("dolores"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("minus"),
                            Description: sdk.String("quam"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("vero"),
                                },
                            },
                            LabelColor: sdk.String("nostrum"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(928082),
                                    MinSelectedModifiers: sdk.Int64(608253),
                                    ModifierListID: "facilis",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "voluptatem",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "porro",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "consequuntur",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(500026),
                                    MinSelectedModifiers: sdk.Int64(621479),
                                    ModifierListID: "eaque",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "rerum",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "adipisci",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "asperiores",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(934214),
                                    MinSelectedModifiers: sdk.Int64(267262),
                                    ModifierListID: "iste",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "deleniti",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "pariatur",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "provident",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(750844),
                                    MinSelectedModifiers: sdk.Int64(730122),
                                    ModifierListID: "delectus",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "quos",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "aliquid",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Dawn Fadel"),
                            ProductType: sdk.String("hic"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("excepturi"),
                            TaxIds: []string{
                                "voluptate",
                                "dignissimos",
                                "reiciendis",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("dolorum"),
                            DisplayName: sdk.String("numquam"),
                            Name: sdk.String("Melissa Bednar"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("accusamus"),
                            Description: sdk.String("quidem"),
                            ItemOptionID: sdk.String("voluptatibus"),
                            Name: sdk.String("Faye Daugherty PhD"),
                            Ordinal: sdk.Int64(67249),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(743835),
                            InventoryAlertType: sdk.String("dolorum"),
                            ItemID: sdk.String("iusto"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("dolorum"),
                                    ItemOptionValueID: sdk.String("deleniti"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("omnis"),
                                    ItemOptionValueID: sdk.String("necessitatibus"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(990339),
                                    InventoryAlertType: sdk.String("nihil"),
                                    LocationID: sdk.String("ipsum"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(456015),
                                        Currency: sdk.String("id"),
                                    },
                                    PricingType: sdk.String("saepe"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(263322),
                                    InventoryAlertType: sdk.String("aspernatur"),
                                    LocationID: sdk.String("perferendis"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(229219),
                                        Currency: sdk.String("optio"),
                                    },
                                    PricingType: sdk.String("accusamus"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(320017),
                                    InventoryAlertType: sdk.String("saepe"),
                                    LocationID: sdk.String("suscipit"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(645785),
                                        Currency: sdk.String("provident"),
                                    },
                                    PricingType: sdk.String("minima"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("repellendus"),
                            Name: sdk.String("Donnie Abbott"),
                            Ordinal: sdk.Int64(273542),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(425451),
                                Currency: sdk.String("quod"),
                            },
                            PricingType: sdk.String("officiis"),
                            ServiceDuration: sdk.Int64(185636),
                            Sku: sdk.String("dolorum"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "a",
                                StockableItemVariationID: "esse",
                                StockableQuantity: "harum",
                            },
                            TeamMemberIds: []string{
                                "ipsum",
                                "quisquam",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("tenetur"),
                            UserData: sdk.String("amet"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("tempore"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "accusamus",
                                    Name: "Darlene Effertz",
                                },
                                GenericUnit: sdk.String("nihil"),
                                LengthUnit: sdk.String("sit"),
                                TimeUnit: sdk.String("expedita"),
                                Type: sdk.String("neque"),
                                VolumeUnit: sdk.String("sed"),
                                WeightUnit: sdk.String("vel"),
                            },
                            Precision: sdk.Int64(730442),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("voluptas"),
                            Name: sdk.String("Darryl Emard"),
                            Ordinal: sdk.Int64(586784),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(807581),
                                Currency: sdk.String("pariatur"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Kayla Larson"),
                            Ordinal: sdk.Int64(174909),
                            SelectionType: sdk.String("distinctio"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "aliquid",
                            "quam",
                            "molestias",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("temporibus"),
                            CustomerGroupIdsAny: []string{
                                "neque",
                            },
                            DiscountID: sdk.String("fugit"),
                            ExcludeProductsID: sdk.String("magni"),
                            ExcludeStrategy: sdk.String("odio"),
                            MatchProductsID: sdk.String("sunt"),
                            Name: sdk.String("Miss Candice Weimann"),
                            TimePeriodIds: []string{
                                "et",
                                "saepe",
                                "ipsum",
                            },
                            ValidFromDate: sdk.String("veritatis"),
                            ValidFromLocalTime: sdk.String("nobis"),
                            ValidUntilDate: sdk.String("quos"),
                            ValidUntilLocalTime: sdk.String("tempore"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Kevin Willms"),
                            ProductIdsAll: []string{
                                "adipisci",
                                "dolorum",
                            },
                            ProductIdsAny: []string{
                                "quae",
                            },
                            QuantityExact: sdk.Int64(16429),
                            QuantityMax: sdk.Int64(555649),
                            QuantityMin: sdk.Int64(929530),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(669917),
                                        Currency: sdk.String("repellendus"),
                                    },
                                    Ordinal: sdk.Int64(785153),
                                    Score: sdk.Int64(984330),
                                    Type: "ut",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "facilis",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Alan Bergnaum",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "voluptatibus",
                                    Ordinal: sdk.Int64(787542),
                                    Periods: sdk.Int64(876506),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(606476),
                                        Currency: sdk.String("quis"),
                                    },
                                    UID: sdk.String("ipsum"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "delectus",
                                    Ordinal: sdk.Int64(455169),
                                    Periods: sdk.Int64(231701),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(878870),
                                        Currency: sdk.String("tenetur"),
                                    },
                                    UID: sdk.String("dignissimos"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "hic",
                                    Ordinal: sdk.Int64(715561),
                                    Periods: sdk.Int64(799203),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(486160),
                                        Currency: sdk.String("similique"),
                                    },
                                    UID: sdk.String("facilis"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("vero"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("ducimus"),
                            Name: sdk.String("Rosemarie Stanton"),
                            Percentage: sdk.String("impedit"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("aut"),
                        },
                        Type: "voluptatibus",
                        UpdatedAt: sdk.String("exercitationem"),
                        Version: sdk.Int64(862310),
                    },
                },
            },
            shared.CatalogObjectBatch{
                Objects: []shared.CatalogObject{
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "maiores",
                            "doloribus",
                            "iusto",
                            "eligendi",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("alias"),
                                LocationID: sdk.String("officia"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("tempora"),
                                LocationID: sdk.String("ipsam"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Judy Keebler"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "ex",
                            },
                            AppVisibility: sdk.String("laudantium"),
                            CustomAttributeUsageCount: sdk.Int64(120657),
                            Description: sdk.String("dolor"),
                            Key: sdk.String("maiores"),
                            Name: "Rosemary Stoltenberg",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(343605),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Elbert Jenkins",
                                        UID: sdk.String("veniam"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Stephanie Gutkowski",
                                        UID: sdk.String("consectetur"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Dr. Bruce Hane",
                                        UID: sdk.String("aut"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Margie Russel",
                                        UID: sdk.String("accusamus"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(79522),
                            },
                            SellerVisibility: sdk.String("non"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("et"),
                                Name: sdk.String("Neal Schroeder"),
                                Product: sdk.String("autem"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "nobis",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "assumenda": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("nulla"),
                                Key: sdk.String("voluptas"),
                                Name: sdk.String("Ryan Glover"),
                                NumberValue: sdk.String("provident"),
                                SelectionUIDValues: []string{
                                    "molestiae",
                                },
                                StringValue: sdk.String("magnam"),
                                Type: sdk.String("odio"),
                            },
                            "eius": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("esse"),
                                Key: sdk.String("esse"),
                                Name: sdk.String("Blake Kihn"),
                                NumberValue: sdk.String("ut"),
                                SelectionUIDValues: []string{
                                    "suscipit",
                                    "assumenda",
                                },
                                StringValue: sdk.String("eos"),
                                Type: sdk.String("praesentium"),
                            },
                            "quisquam": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("veritatis"),
                                Key: sdk.String("ipsa"),
                                Name: sdk.String("Rickey DuBuque"),
                                NumberValue: sdk.String("quo"),
                                SelectionUIDValues: []string{
                                    "eius",
                                    "eos",
                                    "voluptas",
                                },
                                StringValue: sdk.String("ab"),
                                Type: sdk.String("cupiditate"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(9688),
                                Currency: sdk.String("tempora"),
                            },
                            DiscountType: sdk.String("debitis"),
                            LabelColor: sdk.String("ipsam"),
                            ModifyTaxBasis: sdk.String("aspernatur"),
                            Name: sdk.String("Angelica Koelpin MD"),
                            Percentage: sdk.String("quod"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "7178e479-6f2a-470c-a882-82aa482562f2",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("ratione"),
                            Name: sdk.String("Kerry Mayert IV"),
                            URL: sdk.String("eveniet"),
                        },
                        ImageID: sdk.String("accusamus"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("veritatis"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("esse"),
                            Description: sdk.String("quod"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("vero"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("aliquid"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("quasi"),
                                },
                            },
                            LabelColor: sdk.String("saepe"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(690025),
                                    MinSelectedModifiers: sdk.Int64(473221),
                                    ModifierListID: "rerum",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "minima",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "distinctio",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "eligendi",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(27069),
                                    MinSelectedModifiers: sdk.Int64(636061),
                                    ModifierListID: "tempore",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "cumque",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Elizabeth Schinner"),
                            ProductType: sdk.String("consectetur"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("esse"),
                            TaxIds: []string{
                                "provident",
                                "a",
                                "nulla",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("esse"),
                            DisplayName: sdk.String("quasi"),
                            Name: sdk.String("Jeremiah Mayer"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("eveniet"),
                            Description: sdk.String("asperiores"),
                            ItemOptionID: sdk.String("facere"),
                            Name: sdk.String("Marilyn Botsford"),
                            Ordinal: sdk.Int64(398434),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(949298),
                            InventoryAlertType: sdk.String("quae"),
                            ItemID: sdk.String("earum"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("in"),
                                    ItemOptionValueID: sdk.String("eius"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("libero"),
                                    ItemOptionValueID: sdk.String("illum"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(33304),
                                    InventoryAlertType: sdk.String("aliquam"),
                                    LocationID: sdk.String("sapiente"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(119771),
                                        Currency: sdk.String("ullam"),
                                    },
                                    PricingType: sdk.String("reprehenderit"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(356707),
                                    InventoryAlertType: sdk.String("nisi"),
                                    LocationID: sdk.String("aut"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(531849),
                                        Currency: sdk.String("qui"),
                                    },
                                    PricingType: sdk.String("quibusdam"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(401259),
                                    InventoryAlertType: sdk.String("deleniti"),
                                    LocationID: sdk.String("itaque"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(680270),
                                        Currency: sdk.String("architecto"),
                                    },
                                    PricingType: sdk.String("omnis"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("tenetur"),
                            Name: sdk.String("Lynette Bosco II"),
                            Ordinal: sdk.Int64(86532),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(232744),
                                Currency: sdk.String("adipisci"),
                            },
                            PricingType: sdk.String("iste"),
                            ServiceDuration: sdk.Int64(839513),
                            Sku: sdk.String("accusantium"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "rem",
                                StockableItemVariationID: "aut",
                                StockableQuantity: "laudantium",
                            },
                            TeamMemberIds: []string{
                                "mollitia",
                                "ab",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("corrupti"),
                            UserData: sdk.String("non"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("voluptatem"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "dolor",
                                    Name: "Francis Russel",
                                },
                                GenericUnit: sdk.String("aut"),
                                LengthUnit: sdk.String("dignissimos"),
                                TimeUnit: sdk.String("dicta"),
                                Type: sdk.String("maiores"),
                                VolumeUnit: sdk.String("natus"),
                                WeightUnit: sdk.String("velit"),
                            },
                            Precision: sdk.Int64(974257),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("voluptas"),
                            Name: sdk.String("Kevin Jast"),
                            Ordinal: sdk.Int64(831520),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(638762),
                                Currency: sdk.String("maxime"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Mrs. Aubrey Hills"),
                            Ordinal: sdk.Int64(801836),
                            SelectionType: sdk.String("labore"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "adipisci",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("fuga"),
                            CustomerGroupIdsAny: []string{
                                "suscipit",
                                "velit",
                                "culpa",
                            },
                            DiscountID: sdk.String("est"),
                            ExcludeProductsID: sdk.String("recusandae"),
                            ExcludeStrategy: sdk.String("totam"),
                            MatchProductsID: sdk.String("fugiat"),
                            Name: sdk.String("Dora Luettgen"),
                            TimePeriodIds: []string{
                                "facilis",
                                "cum",
                                "commodi",
                                "in",
                            },
                            ValidFromDate: sdk.String("corporis"),
                            ValidFromLocalTime: sdk.String("reiciendis"),
                            ValidUntilDate: sdk.String("assumenda"),
                            ValidUntilLocalTime: sdk.String("nemo"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Gilbert Bayer"),
                            ProductIdsAll: []string{
                                "exercitationem",
                                "earum",
                            },
                            ProductIdsAny: []string{
                                "numquam",
                                "doloribus",
                                "suscipit",
                                "reiciendis",
                            },
                            QuantityExact: sdk.Int64(697142),
                            QuantityMax: sdk.Int64(904949),
                            QuantityMin: sdk.Int64(897071),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(121059),
                                        Currency: sdk.String("asperiores"),
                                    },
                                    Ordinal: sdk.Int64(241545),
                                    Score: sdk.Int64(249420),
                                    Type: "amet",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(105906),
                                        Currency: sdk.String("dignissimos"),
                                    },
                                    Ordinal: sdk.Int64(950953),
                                    Score: sdk.Int64(891523),
                                    Type: "consectetur",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "corporis",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Rick Beer",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "accusamus",
                                    Ordinal: sdk.Int64(631126),
                                    Periods: sdk.Int64(272437),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(132815),
                                        Currency: sdk.String("voluptas"),
                                    },
                                    UID: sdk.String("voluptas"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("voluptas"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("minima"),
                            Name: sdk.String("Wilbur Ferry"),
                            Percentage: sdk.String("blanditiis"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("in"),
                        },
                        Type: "dolore",
                        UpdatedAt: sdk.String("aliquam"),
                        Version: sdk.Int64(885963),
                    },
                },
            },
            shared.CatalogObjectBatch{
                Objects: []shared.CatalogObject{
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "adipisci",
                            "cum",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("quas"),
                                LocationID: sdk.String("hic"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("nesciunt"),
                                LocationID: sdk.String("culpa"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("corrupti"),
                                LocationID: sdk.String("pariatur"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Terrell Heidenreich MD"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "reiciendis",
                            },
                            AppVisibility: sdk.String("explicabo"),
                            CustomAttributeUsageCount: sdk.Int64(994401),
                            Description: sdk.String("facilis"),
                            Key: sdk.String("voluptate"),
                            Name: "Raymond Moore",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(152354),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Melody Cole",
                                        UID: sdk.String("architecto"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Dr. Dixie Tremblay V",
                                        UID: sdk.String("maiores"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(274823),
                            },
                            SellerVisibility: sdk.String("sed"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("provident"),
                                Name: sdk.String("Jana Emard"),
                                Product: sdk.String("quos"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "voluptatibus",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "tempora": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("voluptate"),
                                Key: sdk.String("reiciendis"),
                                Name: sdk.String("Karen Franey"),
                                NumberValue: sdk.String("facilis"),
                                SelectionUIDValues: []string{
                                    "incidunt",
                                    "ipsam",
                                },
                                StringValue: sdk.String("debitis"),
                                Type: sdk.String("rem"),
                            },
                            "sit": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("nobis"),
                                Key: sdk.String("error"),
                                Name: sdk.String("Lorraine Walsh"),
                                NumberValue: sdk.String("magni"),
                                SelectionUIDValues: []string{
                                    "saepe",
                                },
                                StringValue: sdk.String("numquam"),
                                Type: sdk.String("veniam"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(446135),
                                Currency: sdk.String("officiis"),
                            },
                            DiscountType: sdk.String("beatae"),
                            LabelColor: sdk.String("laudantium"),
                            ModifyTaxBasis: sdk.String("exercitationem"),
                            Name: sdk.String("Bennie Howe"),
                            Percentage: sdk.String("error"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "fbe3a5aa-8e48-424d-8ab4-075088e51862",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("sit"),
                            Name: sdk.String("Bernice Ullrich II"),
                            URL: sdk.String("reiciendis"),
                        },
                        ImageID: sdk.String("dolorem"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("harum"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("dicta"),
                            Description: sdk.String("architecto"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("labore"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("quidem"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("atque"),
                                },
                            },
                            LabelColor: sdk.String("laborum"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(948861),
                                    MinSelectedModifiers: sdk.Int64(388867),
                                    ModifierListID: "alias",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "deserunt",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(454860),
                                    MinSelectedModifiers: sdk.Int64(600392),
                                    ModifierListID: "reiciendis",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "repellendus",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "delectus",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "voluptates",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(16871),
                                    MinSelectedModifiers: sdk.Int64(667285),
                                    ModifierListID: "quidem",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "facere",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "fuga",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Miss Hubert Hartmann"),
                            ProductType: sdk.String("quasi"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("atque"),
                            TaxIds: []string{
                                "asperiores",
                                "totam",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("quidem"),
                            DisplayName: sdk.String("maxime"),
                            Name: sdk.String("Georgia Farrell"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("error"),
                            Description: sdk.String("officiis"),
                            ItemOptionID: sdk.String("officiis"),
                            Name: sdk.String("Wendell Harber"),
                            Ordinal: sdk.Int64(980581),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(544647),
                            InventoryAlertType: sdk.String("at"),
                            ItemID: sdk.String("error"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("suscipit"),
                                    ItemOptionValueID: sdk.String("repudiandae"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("atque"),
                                    ItemOptionValueID: sdk.String("atque"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("sunt"),
                                    ItemOptionValueID: sdk.String("recusandae"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(829898),
                                    InventoryAlertType: sdk.String("labore"),
                                    LocationID: sdk.String("reiciendis"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(42976),
                                        Currency: sdk.String("repudiandae"),
                                    },
                                    PricingType: sdk.String("dicta"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(36033),
                                    InventoryAlertType: sdk.String("beatae"),
                                    LocationID: sdk.String("dolores"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(316488),
                                        Currency: sdk.String("laboriosam"),
                                    },
                                    PricingType: sdk.String("velit"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(952143),
                                    InventoryAlertType: sdk.String("molestias"),
                                    LocationID: sdk.String("magnam"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(906355),
                                        Currency: sdk.String("consequuntur"),
                                    },
                                    PricingType: sdk.String("occaecati"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("officiis"),
                            Name: sdk.String("Arnold Ferry"),
                            Ordinal: sdk.Int64(160230),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(145870),
                                Currency: sdk.String("id"),
                            },
                            PricingType: sdk.String("quis"),
                            ServiceDuration: sdk.Int64(440264),
                            Sku: sdk.String("error"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "illo",
                                StockableItemVariationID: "corporis",
                                StockableQuantity: "quidem",
                            },
                            TeamMemberIds: []string{
                                "non",
                                "vero",
                                "doloremque",
                                "iure",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("ipsa"),
                            UserData: sdk.String("totam"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("quae"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "molestiae",
                                    Name: "Clarence Ritchie",
                                },
                                GenericUnit: sdk.String("ratione"),
                                LengthUnit: sdk.String("laborum"),
                                TimeUnit: sdk.String("distinctio"),
                                Type: sdk.String("voluptatum"),
                                VolumeUnit: sdk.String("rem"),
                                WeightUnit: sdk.String("aliquam"),
                            },
                            Precision: sdk.Int64(320565),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("repellat"),
                            Name: sdk.String("Renee Metz"),
                            Ordinal: sdk.Int64(378245),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(5189),
                                Currency: sdk.String("maiores"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Alberta Harber"),
                            Ordinal: sdk.Int64(200364),
                            SelectionType: sdk.String("quae"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "omnis",
                            "quaerat",
                            "molestiae",
                            "ex",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("ut"),
                            CustomerGroupIdsAny: []string{
                                "adipisci",
                                "debitis",
                                "laudantium",
                            },
                            DiscountID: sdk.String("eum"),
                            ExcludeProductsID: sdk.String("nemo"),
                            ExcludeStrategy: sdk.String("recusandae"),
                            MatchProductsID: sdk.String("esse"),
                            Name: sdk.String("Alvin Kemmer"),
                            TimePeriodIds: []string{
                                "ullam",
                            },
                            ValidFromDate: sdk.String("quasi"),
                            ValidFromLocalTime: sdk.String("animi"),
                            ValidUntilDate: sdk.String("nostrum"),
                            ValidUntilLocalTime: sdk.String("mollitia"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Rufus Okuneva"),
                            ProductIdsAll: []string{
                                "repellat",
                            },
                            ProductIdsAny: []string{
                                "ullam",
                                "in",
                                "nam",
                                "earum",
                            },
                            QuantityExact: sdk.Int64(637583),
                            QuantityMax: sdk.Int64(672041),
                            QuantityMin: sdk.Int64(813054),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(976226),
                                        Currency: sdk.String("molestias"),
                                    },
                                    Ordinal: sdk.Int64(889794),
                                    Score: sdk.Int64(956933),
                                    Type: "cumque",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(113486),
                                        Currency: sdk.String("rerum"),
                                    },
                                    Ordinal: sdk.Int64(272229),
                                    Score: sdk.Int64(335498),
                                    Type: "inventore",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "fugit",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Scott Bahringer",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "eius",
                                    Ordinal: sdk.Int64(521996),
                                    Periods: sdk.Int64(871083),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(773084),
                                        Currency: sdk.String("eos"),
                                    },
                                    UID: sdk.String("sapiente"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "eum",
                                    Ordinal: sdk.Int64(117320),
                                    Periods: sdk.Int64(325118),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(107004),
                                        Currency: sdk.String("cupiditate"),
                                    },
                                    UID: sdk.String("provident"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("earum"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("soluta"),
                            Name: sdk.String("Gilberto Bechtelar"),
                            Percentage: sdk.String("maiores"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("debitis"),
                        },
                        Type: "aliquid",
                        UpdatedAt: sdk.String("porro"),
                        Version: sdk.Int64(380335),
                    },
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "fugit",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("fuga"),
                                LocationID: sdk.String("ratione"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("animi"),
                                LocationID: sdk.String("necessitatibus"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("nulla"),
                                LocationID: sdk.String("consequatur"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("quasi"),
                                LocationID: sdk.String("et"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Ada McClure"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "magni",
                            },
                            AppVisibility: sdk.String("doloribus"),
                            CustomAttributeUsageCount: sdk.Int64(859581),
                            Description: sdk.String("necessitatibus"),
                            Key: sdk.String("ipsa"),
                            Name: "Ms. Marcia Kozey",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(508390),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Ben Bradtke Sr.",
                                        UID: sdk.String("odio"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Joy Jacobson",
                                        UID: sdk.String("ipsa"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Ralph Hegmann",
                                        UID: sdk.String("aliquid"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Ms. Ricardo Jacobi",
                                        UID: sdk.String("iste"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(661607),
                            },
                            SellerVisibility: sdk.String("ab"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("error"),
                                Name: sdk.String("Pat O'Keefe"),
                                Product: sdk.String("ad"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "deleniti",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "vitae": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("repellendus"),
                                Key: sdk.String("ex"),
                                Name: sdk.String("Ruben Goyette"),
                                NumberValue: sdk.String("voluptatem"),
                                SelectionUIDValues: []string{
                                    "cum",
                                    "aliquid",
                                    "beatae",
                                },
                                StringValue: sdk.String("voluptatum"),
                                Type: sdk.String("omnis"),
                            },
                            "veritatis": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("rerum"),
                                Key: sdk.String("est"),
                                Name: sdk.String("Donald Williamson MD"),
                                NumberValue: sdk.String("pariatur"),
                                SelectionUIDValues: []string{
                                    "voluptatem",
                                    "alias",
                                    "deleniti",
                                    "earum",
                                },
                                StringValue: sdk.String("ex"),
                                Type: sdk.String("sapiente"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(524184),
                                Currency: sdk.String("minus"),
                            },
                            DiscountType: sdk.String("nemo"),
                            LabelColor: sdk.String("asperiores"),
                            ModifyTaxBasis: sdk.String("ratione"),
                            Name: sdk.String("Dorothy Stanton"),
                            Percentage: sdk.String("quibusdam"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "b5a34181-4301-4042-9813-d5208ece7e25",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("nesciunt"),
                            Name: sdk.String("Andre Kautzer"),
                            URL: sdk.String("exercitationem"),
                        },
                        ImageID: sdk.String("ab"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("porro"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("autem"),
                            Description: sdk.String("nobis"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("recusandae"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("consequuntur"),
                                },
                            },
                            LabelColor: sdk.String("voluptatem"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(895692),
                                    MinSelectedModifiers: sdk.Int64(95619),
                                    ModifierListID: "nisi",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "vero",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "est",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "harum",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "sequi",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(987349),
                                    MinSelectedModifiers: sdk.Int64(918092),
                                    ModifierListID: "optio",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "nemo",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "voluptate",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "blanditiis",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Hector Funk"),
                            ProductType: sdk.String("eius"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("aspernatur"),
                            TaxIds: []string{
                                "nesciunt",
                                "fuga",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("incidunt"),
                            DisplayName: sdk.String("quasi"),
                            Name: sdk.String("Clint Carroll"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("aperiam"),
                            Description: sdk.String("cupiditate"),
                            ItemOptionID: sdk.String("reiciendis"),
                            Name: sdk.String("John Monahan"),
                            Ordinal: sdk.Int64(612867),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(170099),
                            InventoryAlertType: sdk.String("inventore"),
                            ItemID: sdk.String("fuga"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("voluptatibus"),
                                    ItemOptionValueID: sdk.String("distinctio"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("omnis"),
                                    ItemOptionValueID: sdk.String("delectus"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("minima"),
                                    ItemOptionValueID: sdk.String("praesentium"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("maxime"),
                                    ItemOptionValueID: sdk.String("magnam"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(549501),
                                    InventoryAlertType: sdk.String("commodi"),
                                    LocationID: sdk.String("itaque"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(415608),
                                        Currency: sdk.String("totam"),
                                    },
                                    PricingType: sdk.String("earum"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(267207),
                                    InventoryAlertType: sdk.String("nam"),
                                    LocationID: sdk.String("vero"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(32901),
                                        Currency: sdk.String("ipsam"),
                                    },
                                    PricingType: sdk.String("vel"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(1383),
                                    InventoryAlertType: sdk.String("quasi"),
                                    LocationID: sdk.String("non"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(978548),
                                        Currency: sdk.String("enim"),
                                    },
                                    PricingType: sdk.String("sint"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(858778),
                                    InventoryAlertType: sdk.String("deserunt"),
                                    LocationID: sdk.String("esse"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(364463),
                                        Currency: sdk.String("reprehenderit"),
                                    },
                                    PricingType: sdk.String("est"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("quis"),
                            Name: sdk.String("Tomas Ryan"),
                            Ordinal: sdk.Int64(991891),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(404306),
                                Currency: sdk.String("voluptas"),
                            },
                            PricingType: sdk.String("debitis"),
                            ServiceDuration: sdk.Int64(966148),
                            Sku: sdk.String("quae"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "minus",
                                StockableItemVariationID: "fuga",
                                StockableQuantity: "laborum",
                            },
                            TeamMemberIds: []string{
                                "velit",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("atque"),
                            UserData: sdk.String("ipsum"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("impedit"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "magni",
                                    Name: "Lamar Reichert",
                                },
                                GenericUnit: sdk.String("voluptate"),
                                LengthUnit: sdk.String("sequi"),
                                TimeUnit: sdk.String("dignissimos"),
                                Type: sdk.String("neque"),
                                VolumeUnit: sdk.String("quo"),
                                WeightUnit: sdk.String("deleniti"),
                            },
                            Precision: sdk.Int64(844235),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("iure"),
                            Name: sdk.String("Camille Kautzer"),
                            Ordinal: sdk.Int64(78969),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(818034),
                                Currency: sdk.String("libero"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Howard Sauer"),
                            Ordinal: sdk.Int64(75359),
                            SelectionType: sdk.String("accusantium"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "ea",
                            "beatae",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("vero"),
                            CustomerGroupIdsAny: []string{
                                "eum",
                                "velit",
                                "ut",
                            },
                            DiscountID: sdk.String("perspiciatis"),
                            ExcludeProductsID: sdk.String("earum"),
                            ExcludeStrategy: sdk.String("dicta"),
                            MatchProductsID: sdk.String("impedit"),
                            Name: sdk.String("Mrs. Jackie Watsica"),
                            TimePeriodIds: []string{
                                "laborum",
                            },
                            ValidFromDate: sdk.String("non"),
                            ValidFromLocalTime: sdk.String("dolor"),
                            ValidUntilDate: sdk.String("iusto"),
                            ValidUntilLocalTime: sdk.String("sit"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Barbara Nikolaus"),
                            ProductIdsAll: []string{
                                "voluptas",
                                "facilis",
                                "placeat",
                            },
                            ProductIdsAny: []string{
                                "expedita",
                                "deleniti",
                                "a",
                            },
                            QuantityExact: sdk.Int64(455579),
                            QuantityMax: sdk.Int64(351936),
                            QuantityMin: sdk.Int64(600193),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(654082),
                                        Currency: sdk.String("impedit"),
                                    },
                                    Ordinal: sdk.Int64(373040),
                                    Score: sdk.Int64(357425),
                                    Type: "est",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(621666),
                                        Currency: sdk.String("esse"),
                                    },
                                    Ordinal: sdk.Int64(288570),
                                    Score: sdk.Int64(85066),
                                    Type: "vero",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(233173),
                                        Currency: sdk.String("vitae"),
                                    },
                                    Ordinal: sdk.Int64(81371),
                                    Score: sdk.Int64(212434),
                                    Type: "ad",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(183033),
                                        Currency: sdk.String("iste"),
                                    },
                                    Ordinal: sdk.Int64(403026),
                                    Score: sdk.Int64(367626),
                                    Type: "soluta",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "libero",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Omar Kuhlman Sr.",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "quae",
                                    Ordinal: sdk.Int64(63553),
                                    Periods: sdk.Int64(264333),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(208253),
                                        Currency: sdk.String("exercitationem"),
                                    },
                                    UID: sdk.String("itaque"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "et",
                                    Ordinal: sdk.Int64(215398),
                                    Periods: sdk.Int64(602229),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(858338),
                                        Currency: sdk.String("distinctio"),
                                    },
                                    UID: sdk.String("maxime"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("quia"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("quia"),
                            Name: sdk.String("Miss Geneva Reinger"),
                            Percentage: sdk.String("fugiat"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("officia"),
                        },
                        Type: "quos",
                        UpdatedAt: sdk.String("placeat"),
                        Version: sdk.Int64(25756),
                    },
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "ipsa",
                            "voluptates",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("aperiam"),
                                LocationID: sdk.String("totam"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Ms. Lynne Rau"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "assumenda",
                            },
                            AppVisibility: sdk.String("beatae"),
                            CustomAttributeUsageCount: sdk.Int64(668606),
                            Description: sdk.String("facere"),
                            Key: sdk.String("corrupti"),
                            Name: "Daisy Tillman",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(575078),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Brittany Prosacco",
                                        UID: sdk.String("officiis"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Mr. Jonathon Swaniawski",
                                        UID: sdk.String("fuga"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(919508),
                            },
                            SellerVisibility: sdk.String("accusantium"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("expedita"),
                                Name: sdk.String("Jesse Sporer"),
                                Product: sdk.String("odit"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "explicabo",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "error": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("earum"),
                                Key: sdk.String("adipisci"),
                                Name: sdk.String("Otis Grady"),
                                NumberValue: sdk.String("beatae"),
                                SelectionUIDValues: []string{
                                    "molestiae",
                                    "delectus",
                                    "cupiditate",
                                },
                                StringValue: sdk.String("fugit"),
                                Type: sdk.String("numquam"),
                            },
                            "numquam": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("nesciunt"),
                                Key: sdk.String("at"),
                                Name: sdk.String("Cody Rowe"),
                                NumberValue: sdk.String("qui"),
                                SelectionUIDValues: []string{
                                    "voluptatum",
                                    "cupiditate",
                                    "minima",
                                },
                                StringValue: sdk.String("placeat"),
                                Type: sdk.String("enim"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(204072),
                                Currency: sdk.String("in"),
                            },
                            DiscountType: sdk.String("minus"),
                            LabelColor: sdk.String("eum"),
                            ModifyTaxBasis: sdk.String("modi"),
                            Name: sdk.String("Danielle Volkman"),
                            Percentage: sdk.String("aperiam"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "b34896c3-ca5a-4cfb-a2fd-570757792917",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("voluptate"),
                            Name: sdk.String("Bradford Murazik"),
                            URL: sdk.String("quaerat"),
                        },
                        ImageID: sdk.String("commodi"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("officiis"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("placeat"),
                            Description: sdk.String("quidem"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("quam"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("dolorem"),
                                },
                            },
                            LabelColor: sdk.String("modi"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(575534),
                                    MinSelectedModifiers: sdk.Int64(876027),
                                    ModifierListID: "sequi",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "cum",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "dicta",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "earum",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "veniam",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Mr. Todd Reilly"),
                            ProductType: sdk.String("nobis"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("ipsa"),
                            TaxIds: []string{
                                "maiores",
                                "veritatis",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("laboriosam"),
                            DisplayName: sdk.String("pariatur"),
                            Name: sdk.String("Andy Mayert"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("doloribus"),
                            Description: sdk.String("eligendi"),
                            ItemOptionID: sdk.String("sint"),
                            Name: sdk.String("Mindy O'Kon"),
                            Ordinal: sdk.Int64(564667),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(484966),
                            InventoryAlertType: sdk.String("eaque"),
                            ItemID: sdk.String("saepe"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("quos"),
                                    ItemOptionValueID: sdk.String("iste"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(731634),
                                    InventoryAlertType: sdk.String("libero"),
                                    LocationID: sdk.String("velit"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(38557),
                                        Currency: sdk.String("delectus"),
                                    },
                                    PricingType: sdk.String("impedit"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(741238),
                                    InventoryAlertType: sdk.String("ipsum"),
                                    LocationID: sdk.String("adipisci"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(903150),
                                        Currency: sdk.String("deserunt"),
                                    },
                                    PricingType: sdk.String("doloremque"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(339756),
                                    InventoryAlertType: sdk.String("veniam"),
                                    LocationID: sdk.String("libero"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(99733),
                                        Currency: sdk.String("cupiditate"),
                                    },
                                    PricingType: sdk.String("molestiae"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(756654),
                                    InventoryAlertType: sdk.String("possimus"),
                                    LocationID: sdk.String("non"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(298187),
                                        Currency: sdk.String("itaque"),
                                    },
                                    PricingType: sdk.String("sed"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("asperiores"),
                            Name: sdk.String("Louise Schulist"),
                            Ordinal: sdk.Int64(863477),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(227362),
                                Currency: sdk.String("exercitationem"),
                            },
                            PricingType: sdk.String("ab"),
                            ServiceDuration: sdk.Int64(242637),
                            Sku: sdk.String("facilis"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "tempore",
                                StockableItemVariationID: "nisi",
                                StockableQuantity: "voluptatibus",
                            },
                            TeamMemberIds: []string{
                                "blanditiis",
                                "distinctio",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("nisi"),
                            UserData: sdk.String("quis"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("nisi"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "libero",
                                    Name: "Carroll Purdy",
                                },
                                GenericUnit: sdk.String("voluptatibus"),
                                LengthUnit: sdk.String("voluptatibus"),
                                TimeUnit: sdk.String("consequuntur"),
                                Type: sdk.String("debitis"),
                                VolumeUnit: sdk.String("labore"),
                                WeightUnit: sdk.String("rerum"),
                            },
                            Precision: sdk.Int64(179795),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("reprehenderit"),
                            Name: sdk.String("Rita Kshlerin"),
                            Ordinal: sdk.Int64(753890),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(853606),
                                Currency: sdk.String("unde"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Carmen Carroll"),
                            Ordinal: sdk.Int64(111496),
                            SelectionType: sdk.String("dignissimos"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "fugiat",
                            "ad",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("aspernatur"),
                            CustomerGroupIdsAny: []string{
                                "delectus",
                                "iusto",
                            },
                            DiscountID: sdk.String("dignissimos"),
                            ExcludeProductsID: sdk.String("libero"),
                            ExcludeStrategy: sdk.String("illo"),
                            MatchProductsID: sdk.String("ab"),
                            Name: sdk.String("Meghan Turcotte"),
                            TimePeriodIds: []string{
                                "reiciendis",
                            },
                            ValidFromDate: sdk.String("earum"),
                            ValidFromLocalTime: sdk.String("reprehenderit"),
                            ValidUntilDate: sdk.String("praesentium"),
                            ValidUntilLocalTime: sdk.String("nemo"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Devin Donnelly"),
                            ProductIdsAll: []string{
                                "labore",
                            },
                            ProductIdsAny: []string{
                                "aliquam",
                                "quisquam",
                                "provident",
                                "laudantium",
                            },
                            QuantityExact: sdk.Int64(921719),
                            QuantityMax: sdk.Int64(9683),
                            QuantityMin: sdk.Int64(805264),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(723942),
                                        Currency: sdk.String("expedita"),
                                    },
                                    Ordinal: sdk.Int64(559174),
                                    Score: sdk.Int64(590858),
                                    Type: "repudiandae",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "rerum",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Ana Swift",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "dolorem",
                                    Ordinal: sdk.Int64(413801),
                                    Periods: sdk.Int64(771226),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(415033),
                                        Currency: sdk.String("aut"),
                                    },
                                    UID: sdk.String("voluptatem"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "ad",
                                    Ordinal: sdk.Int64(60995),
                                    Periods: sdk.Int64(229567),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(849320),
                                        Currency: sdk.String("praesentium"),
                                    },
                                    UID: sdk.String("quidem"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("cum"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("amet"),
                            Name: sdk.String("Dr. Mildred Larkin"),
                            Percentage: sdk.String("amet"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("provident"),
                        },
                        Type: "dolorum",
                        UpdatedAt: sdk.String("necessitatibus"),
                        Version: sdk.Int64(592880),
                    },
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "consequatur",
                            "nemo",
                            "molestiae",
                            "itaque",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("corrupti"),
                                LocationID: sdk.String("aperiam"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("sint"),
                                LocationID: sdk.String("accusamus"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("eos"),
                                LocationID: sdk.String("totam"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Sandra Frami DVM"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "occaecati",
                            },
                            AppVisibility: sdk.String("atque"),
                            CustomAttributeUsageCount: sdk.Int64(107472),
                            Description: sdk.String("at"),
                            Key: sdk.String("labore"),
                            Name: "Miss Cory Bartoletti",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(46791),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Jacob Sawayn",
                                        UID: sdk.String("eligendi"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Kim Roberts",
                                        UID: sdk.String("officia"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(228857),
                            },
                            SellerVisibility: sdk.String("tenetur"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("aspernatur"),
                                Name: sdk.String("Dexter Stanton"),
                                Product: sdk.String("vero"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "qui",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "repellat": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("explicabo"),
                                Key: sdk.String("explicabo"),
                                Name: sdk.String("Mr. Marcia Fritsch"),
                                NumberValue: sdk.String("deserunt"),
                                SelectionUIDValues: []string{
                                    "non",
                                    "distinctio",
                                    "in",
                                    "exercitationem",
                                },
                                StringValue: sdk.String("labore"),
                                Type: sdk.String("numquam"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(921193),
                                Currency: sdk.String("modi"),
                            },
                            DiscountType: sdk.String("in"),
                            LabelColor: sdk.String("explicabo"),
                            ModifyTaxBasis: sdk.String("accusamus"),
                            Name: sdk.String("Kevin Conroy"),
                            Percentage: sdk.String("voluptate"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "a5b40463-a7d5-475f-9400-e764ad7334ec",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("sunt"),
                            Name: sdk.String("Miss Mathew Lynch"),
                            URL: sdk.String("autem"),
                        },
                        ImageID: sdk.String("fuga"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("alias"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("rem"),
                            Description: sdk.String("aut"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("laudantium"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("repellendus"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("veritatis"),
                                },
                            },
                            LabelColor: sdk.String("quae"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(904827),
                                    MinSelectedModifiers: sdk.Int64(965517),
                                    ModifierListID: "mollitia",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "officia",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "sed",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "voluptatem",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "alias",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Terrell Barrows"),
                            ProductType: sdk.String("qui"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("necessitatibus"),
                            TaxIds: []string{
                                "explicabo",
                                "beatae",
                                "aliquid",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("optio"),
                            DisplayName: sdk.String("voluptatibus"),
                            Name: sdk.String("Luke Renner"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("ea"),
                            Description: sdk.String("impedit"),
                            ItemOptionID: sdk.String("ducimus"),
                            Name: sdk.String("Thelma Wisoky"),
                            Ordinal: sdk.Int64(671116),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(617657),
                            InventoryAlertType: sdk.String("accusamus"),
                            ItemID: sdk.String("doloremque"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("rerum"),
                                    ItemOptionValueID: sdk.String("recusandae"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("voluptates"),
                                    ItemOptionValueID: sdk.String("non"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(157884),
                                    InventoryAlertType: sdk.String("ullam"),
                                    LocationID: sdk.String("quisquam"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(120277),
                                        Currency: sdk.String("voluptatibus"),
                                    },
                                    PricingType: sdk.String("eligendi"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(62035),
                                    InventoryAlertType: sdk.String("officiis"),
                                    LocationID: sdk.String("architecto"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(100251),
                                        Currency: sdk.String("enim"),
                                    },
                                    PricingType: sdk.String("optio"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(525951),
                                    InventoryAlertType: sdk.String("perferendis"),
                                    LocationID: sdk.String("facilis"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(967055),
                                        Currency: sdk.String("a"),
                                    },
                                    PricingType: sdk.String("iste"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("dicta"),
                            Name: sdk.String("Dan Grimes"),
                            Ordinal: sdk.Int64(807419),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(265905),
                                Currency: sdk.String("consequuntur"),
                            },
                            PricingType: sdk.String("assumenda"),
                            ServiceDuration: sdk.Int64(876840),
                            Sku: sdk.String("doloribus"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "impedit",
                                StockableItemVariationID: "porro",
                                StockableQuantity: "accusamus",
                            },
                            TeamMemberIds: []string{
                                "reiciendis",
                                "ab",
                                "sint",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("nihil"),
                            UserData: sdk.String("esse"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("iure"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "odio",
                                    Name: "Alyssa Kassulke",
                                },
                                GenericUnit: sdk.String("voluptas"),
                                LengthUnit: sdk.String("consequuntur"),
                                TimeUnit: sdk.String("officia"),
                                Type: sdk.String("reprehenderit"),
                                VolumeUnit: sdk.String("distinctio"),
                                WeightUnit: sdk.String("eius"),
                            },
                            Precision: sdk.Int64(56372),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("rem"),
                            Name: sdk.String("Steven Harris"),
                            Ordinal: sdk.Int64(816365),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(307173),
                                Currency: sdk.String("quos"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Ernesto Windler I"),
                            Ordinal: sdk.Int64(630832),
                            SelectionType: sdk.String("illo"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "nemo",
                            "doloribus",
                            "possimus",
                            "unde",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("incidunt"),
                            CustomerGroupIdsAny: []string{
                                "ipsam",
                            },
                            DiscountID: sdk.String("cupiditate"),
                            ExcludeProductsID: sdk.String("optio"),
                            ExcludeStrategy: sdk.String("alias"),
                            MatchProductsID: sdk.String("quidem"),
                            Name: sdk.String("Gertrude Will"),
                            TimePeriodIds: []string{
                                "officia",
                                "sint",
                                "ut",
                                "numquam",
                            },
                            ValidFromDate: sdk.String("tenetur"),
                            ValidFromLocalTime: sdk.String("adipisci"),
                            ValidUntilDate: sdk.String("libero"),
                            ValidUntilLocalTime: sdk.String("in"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Mr. Carla Schiller"),
                            ProductIdsAll: []string{
                                "quisquam",
                                "dolor",
                            },
                            ProductIdsAny: []string{
                                "fuga",
                                "minima",
                            },
                            QuantityExact: sdk.Int64(102446),
                            QuantityMax: sdk.Int64(181476),
                            QuantityMin: sdk.Int64(397026),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(276650),
                                        Currency: sdk.String("adipisci"),
                                    },
                                    Ordinal: sdk.Int64(506343),
                                    Score: sdk.Int64(220528),
                                    Type: "exercitationem",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "expedita",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Rodolfo Bailey",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "amet",
                                    Ordinal: sdk.Int64(644734),
                                    Periods: sdk.Int64(268709),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(332831),
                                        Currency: sdk.String("quod"),
                                    },
                                    UID: sdk.String("itaque"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("a"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("quisquam"),
                            Name: sdk.String("Ora Shields Jr."),
                            Percentage: sdk.String("culpa"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("ipsa"),
                        },
                        Type: "nobis",
                        UpdatedAt: sdk.String("necessitatibus"),
                        Version: sdk.Int64(155978),
                    },
                },
            },
            shared.CatalogObjectBatch{
                Objects: []shared.CatalogObject{
                    shared.CatalogObject{
                        AbsentAtLocationIds: []string{
                            "perspiciatis",
                            "debitis",
                        },
                        CatalogV1Ids: []shared.CatalogV1ID{
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("architecto"),
                                LocationID: sdk.String("accusantium"),
                            },
                            shared.CatalogV1ID{
                                CatalogV1ID: sdk.String("perferendis"),
                                LocationID: sdk.String("veritatis"),
                            },
                        },
                        CategoryData: &shared.CatalogCategory{
                            Name: sdk.String("Noel Kertzmann"),
                        },
                        CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                            AllowedObjectTypes: []string{
                                "recusandae",
                                "velit",
                            },
                            AppVisibility: sdk.String("magnam"),
                            CustomAttributeUsageCount: sdk.Int64(493591),
                            Description: sdk.String("laboriosam"),
                            Key: sdk.String("sed"),
                            Name: "Faye McKenzie",
                            NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                                Precision: sdk.Int64(703966),
                            },
                            SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                                AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Brent Mills",
                                        UID: sdk.String("hic"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Brandon Reinger",
                                        UID: sdk.String("recusandae"),
                                    },
                                    shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                                        Name: "Rex Turner",
                                        UID: sdk.String("nesciunt"),
                                    },
                                },
                                MaxAllowedSelections: sdk.Int64(849383),
                            },
                            SellerVisibility: sdk.String("nemo"),
                            SourceApplication: &shared.SourceApplication{
                                ApplicationID: sdk.String("illum"),
                                Name: sdk.String("Melvin O'Conner"),
                                Product: sdk.String("distinctio"),
                            },
                            StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                                EnforceUniqueness: sdk.Bool(false),
                            },
                            Type: "pariatur",
                        },
                        CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                            "facere": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("laborum"),
                                Key: sdk.String("eveniet"),
                                Name: sdk.String("Randall Schmitt III"),
                                NumberValue: sdk.String("deserunt"),
                                SelectionUIDValues: []string{
                                    "laborum",
                                    "est",
                                    "occaecati",
                                },
                                StringValue: sdk.String("labore"),
                                Type: sdk.String("quo"),
                            },
                            "perferendis": shared.CatalogCustomAttributeValue{
                                BooleanValue: sdk.Bool(false),
                                CustomAttributeDefinitionID: sdk.String("fugit"),
                                Key: sdk.String("aliquid"),
                                Name: sdk.String("Gail Roob"),
                                NumberValue: sdk.String("officiis"),
                                SelectionUIDValues: []string{
                                    "nulla",
                                    "error",
                                    "mollitia",
                                },
                                StringValue: sdk.String("magnam"),
                                Type: sdk.String("nostrum"),
                            },
                        },
                        DiscountData: &shared.CatalogDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(460909),
                                Currency: sdk.String("corrupti"),
                            },
                            DiscountType: sdk.String("fuga"),
                            LabelColor: sdk.String("facere"),
                            ModifyTaxBasis: sdk.String("impedit"),
                            Name: sdk.String("Joanna Schmidt Jr."),
                            Percentage: sdk.String("facere"),
                            PinRequired: sdk.Bool(false),
                        },
                        ID: "ec001ac8-02e2-4ec0-9ff8-f0f816ff3477",
                        ImageData: &shared.CatalogImage{
                            Caption: sdk.String("eligendi"),
                            Name: sdk.String("Crystal Terry I"),
                            URL: sdk.String("impedit"),
                        },
                        ImageID: sdk.String("beatae"),
                        IsDeleted: sdk.Bool(false),
                        ItemData: &shared.CatalogItem{
                            Abbreviation: sdk.String("incidunt"),
                            AvailableElectronically: sdk.Bool(false),
                            AvailableForPickup: sdk.Bool(false),
                            AvailableOnline: sdk.Bool(false),
                            CategoryID: sdk.String("dicta"),
                            Description: sdk.String("odit"),
                            ItemOptions: []shared.CatalogItemOptionForItem{
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("rerum"),
                                },
                                shared.CatalogItemOptionForItem{
                                    ItemOptionID: sdk.String("alias"),
                                },
                            },
                            LabelColor: sdk.String("error"),
                            ModifierListInfo: []shared.CatalogItemModifierListInfo{
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(35581),
                                    MinSelectedModifiers: sdk.Int64(664197),
                                    ModifierListID: "laboriosam",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "quas",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "veritatis",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                                shared.CatalogItemModifierListInfo{
                                    Enabled: sdk.Bool(false),
                                    MaxSelectedModifiers: sdk.Int64(356440),
                                    MinSelectedModifiers: sdk.Int64(62688),
                                    ModifierListID: "similique",
                                    ModifierOverrides: []shared.CatalogModifierOverride{
                                        shared.CatalogModifierOverride{
                                            ModifierID: "quam",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                        shared.CatalogModifierOverride{
                                            ModifierID: "magni",
                                            OnByDefault: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Toby Monahan"),
                            ProductType: sdk.String("maxime"),
                            SkipModifierScreen: sdk.Bool(false),
                            SortName: sdk.String("quis"),
                            TaxIds: []string{
                                "aliquam",
                                "excepturi",
                                "maiores",
                            },
                            Variations: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionData: &shared.CatalogItemOption{
                            Description: sdk.String("velit"),
                            DisplayName: sdk.String("reiciendis"),
                            Name: sdk.String("Renee Beer"),
                            ShowColors: sdk.Bool(false),
                            Values: []shared.CatalogObject{
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                                shared.CatalogObject{},
                            },
                        },
                        ItemOptionValueData: &shared.CatalogItemOptionValue{
                            Color: sdk.String("molestiae"),
                            Description: sdk.String("aliquid"),
                            ItemOptionID: sdk.String("asperiores"),
                            Name: sdk.String("Mr. Robin Miller"),
                            Ordinal: sdk.Int64(417539),
                        },
                        ItemVariationData: &shared.CatalogItemVariation{
                            AvailableForBooking: sdk.Bool(false),
                            InventoryAlertThreshold: sdk.Int64(908734),
                            InventoryAlertType: sdk.String("porro"),
                            ItemID: sdk.String("tempore"),
                            ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("modi"),
                                    ItemOptionValueID: sdk.String("voluptates"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("fugit"),
                                    ItemOptionValueID: sdk.String("eius"),
                                },
                                shared.CatalogItemOptionValueForItemVariation{
                                    ItemOptionID: sdk.String("sequi"),
                                    ItemOptionValueID: sdk.String("eligendi"),
                                },
                            },
                            LocationOverrides: []shared.ItemVariationLocationOverrides{
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(459875),
                                    InventoryAlertType: sdk.String("blanditiis"),
                                    LocationID: sdk.String("sint"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(996541),
                                        Currency: sdk.String("a"),
                                    },
                                    PricingType: sdk.String("animi"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(979287),
                                    InventoryAlertType: sdk.String("itaque"),
                                    LocationID: sdk.String("nulla"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(643419),
                                        Currency: sdk.String("corporis"),
                                    },
                                    PricingType: sdk.String("velit"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(887701),
                                    InventoryAlertType: sdk.String("enim"),
                                    LocationID: sdk.String("officia"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(902979),
                                        Currency: sdk.String("eum"),
                                    },
                                    PricingType: sdk.String("repudiandae"),
                                    TrackInventory: sdk.Bool(false),
                                },
                                shared.ItemVariationLocationOverrides{
                                    InventoryAlertThreshold: sdk.Int64(35742),
                                    InventoryAlertType: sdk.String("officia"),
                                    LocationID: sdk.String("impedit"),
                                    PriceMoney: &shared.Money{
                                        Amount: sdk.Int64(97896),
                                        Currency: sdk.String("blanditiis"),
                                    },
                                    PricingType: sdk.String("eius"),
                                    TrackInventory: sdk.Bool(false),
                                },
                            },
                            MeasurementUnitID: sdk.String("quisquam"),
                            Name: sdk.String("Gayle Mraz"),
                            Ordinal: sdk.Int64(300651),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(440847),
                                Currency: sdk.String("quod"),
                            },
                            PricingType: sdk.String("quos"),
                            ServiceDuration: sdk.Int64(548846),
                            Sku: sdk.String("amet"),
                            Stockable: sdk.Bool(false),
                            StockableConversion: &shared.CatalogStockConversion{
                                NonstockableQuantity: "molestiae",
                                StockableItemVariationID: "amet",
                                StockableQuantity: "laborum",
                            },
                            TeamMemberIds: []string{
                                "perferendis",
                                "necessitatibus",
                            },
                            TrackInventory: sdk.Bool(false),
                            Upc: sdk.String("architecto"),
                            UserData: sdk.String("molestias"),
                        },
                        MeasurementUnitData: &shared.CatalogMeasurementUnit{
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("dolore"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "sunt",
                                    Name: "Tony Connelly",
                                },
                                GenericUnit: sdk.String("ipsam"),
                                LengthUnit: sdk.String("eaque"),
                                TimeUnit: sdk.String("exercitationem"),
                                Type: sdk.String("veniam"),
                                VolumeUnit: sdk.String("nihil"),
                                WeightUnit: sdk.String("ad"),
                            },
                            Precision: sdk.Int64(394161),
                        },
                        ModifierData: &shared.CatalogModifier{
                            ModifierListID: sdk.String("tenetur"),
                            Name: sdk.String("Rosemarie Hilll"),
                            Ordinal: sdk.Int64(24769),
                            PriceMoney: &shared.Money{
                                Amount: sdk.Int64(694728),
                                Currency: sdk.String("repellendus"),
                            },
                        },
                        ModifierListData: &shared.CatalogModifierList{
                            Modifiers: []shared.CatalogObject{
                                shared.CatalogObject{},
                            },
                            Name: sdk.String("Darrin Cremin"),
                            Ordinal: sdk.Int64(921060),
                            SelectionType: sdk.String("architecto"),
                        },
                        PresentAtAllLocations: sdk.Bool(false),
                        PresentAtLocationIds: []string{
                            "pariatur",
                        },
                        PricingRuleData: &shared.CatalogPricingRule{
                            ApplyProductsID: sdk.String("harum"),
                            CustomerGroupIdsAny: []string{
                                "voluptatibus",
                                "iure",
                            },
                            DiscountID: sdk.String("explicabo"),
                            ExcludeProductsID: sdk.String("minus"),
                            ExcludeStrategy: sdk.String("soluta"),
                            MatchProductsID: sdk.String("dolorum"),
                            Name: sdk.String("Lila Langosh"),
                            TimePeriodIds: []string{
                                "mollitia",
                            },
                            ValidFromDate: sdk.String("accusamus"),
                            ValidFromLocalTime: sdk.String("harum"),
                            ValidUntilDate: sdk.String("cumque"),
                            ValidUntilLocalTime: sdk.String("doloremque"),
                        },
                        ProductSetData: &shared.CatalogProductSet{
                            AllProducts: sdk.Bool(false),
                            Name: sdk.String("Byron Becker"),
                            ProductIdsAll: []string{
                                "magni",
                                "tempora",
                                "possimus",
                            },
                            ProductIdsAny: []string{
                                "rerum",
                            },
                            QuantityExact: sdk.Int64(153582),
                            QuantityMax: sdk.Int64(883078),
                            QuantityMin: sdk.Int64(759874),
                        },
                        QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                            Amounts: []shared.CatalogQuickAmount{
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(792719),
                                        Currency: sdk.String("quo"),
                                    },
                                    Ordinal: sdk.Int64(550338),
                                    Score: sdk.Int64(994234),
                                    Type: "voluptatum",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(614770),
                                        Currency: sdk.String("corporis"),
                                    },
                                    Ordinal: sdk.Int64(37129),
                                    Score: sdk.Int64(75850),
                                    Type: "aut",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(984031),
                                        Currency: sdk.String("nostrum"),
                                    },
                                    Ordinal: sdk.Int64(869848),
                                    Score: sdk.Int64(823472),
                                    Type: "neque",
                                },
                                shared.CatalogQuickAmount{
                                    Amount: shared.Money{
                                        Amount: sdk.Int64(866135),
                                        Currency: sdk.String("vel"),
                                    },
                                    Ordinal: sdk.Int64(960813),
                                    Score: sdk.Int64(652515),
                                    Type: "quae",
                                },
                            },
                            EligibleForAutoAmounts: sdk.Bool(false),
                            Option: "quos",
                        },
                        SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                            Name: "Ellen Veum",
                            Phases: []shared.SubscriptionPhase{
                                shared.SubscriptionPhase{
                                    Cadence: "quas",
                                    Ordinal: sdk.Int64(162450),
                                    Periods: sdk.Int64(982445),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(81581),
                                        Currency: sdk.String("aliquid"),
                                    },
                                    UID: sdk.String("laudantium"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "est",
                                    Ordinal: sdk.Int64(221329),
                                    Periods: sdk.Int64(400879),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(232316),
                                        Currency: sdk.String("cumque"),
                                    },
                                    UID: sdk.String("rem"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "voluptatum",
                                    Ordinal: sdk.Int64(498534),
                                    Periods: sdk.Int64(237523),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(927959),
                                        Currency: sdk.String("tempora"),
                                    },
                                    UID: sdk.String("blanditiis"),
                                },
                                shared.SubscriptionPhase{
                                    Cadence: "numquam",
                                    Ordinal: sdk.Int64(196374),
                                    Periods: sdk.Int64(532320),
                                    RecurringPriceMoney: shared.Money{
                                        Amount: sdk.Int64(27078),
                                        Currency: sdk.String("rerum"),
                                    },
                                    UID: sdk.String("veritatis"),
                                },
                            },
                        },
                        TaxData: &shared.CatalogTax{
                            AppliesToCustomAmounts: sdk.Bool(false),
                            CalculationPhase: sdk.String("tenetur"),
                            Enabled: sdk.Bool(false),
                            InclusionType: sdk.String("autem"),
                            Name: sdk.String("Felix Sauer"),
                            Percentage: sdk.String("nihil"),
                        },
                        TimePeriodData: &shared.CatalogTimePeriod{
                            Event: sdk.String("voluptas"),
                        },
                        Type: "animi",
                        UpdatedAt: sdk.String("commodi"),
                        Version: sdk.Int64(716),
                    },
                },
            },
        },
        IdempotencyKey: "fuga",
    }, operations.BatchUpsertCatalogObjectsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpsertCatalogObjectsResponse != nil {
        // handle response
    }
}
```

## CatalogInfo

Retrieves information about the Square Catalog API, such as batch size
limits that can be used by the `BatchUpsertCatalogObjects` endpoint.

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
    res, err := s.Catalog.CatalogInfo(ctx, operations.CatalogInfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogInfoResponse != nil {
        // handle response
    }
}
```

## DeleteCatalogObject

Deletes a single [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
will also delete all of its
[CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) children.

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
    res, err := s.Catalog.DeleteCatalogObject(ctx, operations.DeleteCatalogObjectRequest{
        ObjectID: "aut",
    }, operations.DeleteCatalogObjectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCatalogObjectResponse != nil {
        // handle response
    }
}
```

## ListCatalog

Returns a list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s that includes
all objects of a set of desired types (for example, all [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
and [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects) in the catalog. The `types` parameter
is specified as a comma-separated list of valid [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) types:
`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.

__Important:__ ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
and set the `include_deleted_objects` attribute value to `true`.

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
    res, err := s.Catalog.ListCatalog(ctx, operations.ListCatalogRequest{
        CatalogVersion: sdk.Int64(295892),
        Cursor: sdk.String("maxime"),
        Types: sdk.String("aliquam"),
    }, operations.ListCatalogSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCatalogResponse != nil {
        // handle response
    }
}
```

## RetrieveCatalogObject

Returns a single [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) as a
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
information including: [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
children, references to its
[CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.

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
    res, err := s.Catalog.RetrieveCatalogObject(ctx, operations.RetrieveCatalogObjectRequest{
        CatalogVersion: sdk.Int64(613702),
        IncludeRelatedObjects: sdk.Bool(false),
        ObjectID: "ullam",
    }, operations.RetrieveCatalogObjectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveCatalogObjectResponse != nil {
        // handle response
    }
}
```

## SearchCatalogItems

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query expressions.

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints use different call conventions, including the query filter formats.

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
    res, err := s.Catalog.SearchCatalogItems(ctx, shared.SearchCatalogItemsRequest{
        CategoryIds: []string{
            "placeat",
            "voluptas",
            "occaecati",
            "unde",
        },
        Cursor: sdk.String("illo"),
        CustomAttributeFilters: []shared.CustomAttributeFilter{
            shared.CustomAttributeFilter{
                BoolFilter: sdk.Bool(false),
                CustomAttributeDefinitionID: sdk.String("inventore"),
                Key: sdk.String("libero"),
                NumberFilter: &shared.Range{
                    Max: sdk.String("ipsam"),
                    Min: sdk.String("quasi"),
                },
                SelectionUidsFilter: []string{
                    "dicta",
                    "harum",
                    "facere",
                    "facilis",
                },
                StringFilter: sdk.String("beatae"),
            },
            shared.CustomAttributeFilter{
                BoolFilter: sdk.Bool(false),
                CustomAttributeDefinitionID: sdk.String("cumque"),
                Key: sdk.String("delectus"),
                NumberFilter: &shared.Range{
                    Max: sdk.String("labore"),
                    Min: sdk.String("expedita"),
                },
                SelectionUidsFilter: []string{
                    "rem",
                    "atque",
                    "officiis",
                },
                StringFilter: sdk.String("cum"),
            },
        },
        EnabledLocationIds: []string{
            "sapiente",
            "quo",
            "incidunt",
            "quod",
        },
        Limit: sdk.Int64(793282),
        ProductTypes: []string{
            "id",
            "excepturi",
            "occaecati",
            "libero",
        },
        SortOrder: sdk.String("quo"),
        StockLevels: []string{
            "hic",
            "maxime",
        },
        TextFilter: sdk.String("accusantium"),
    }, operations.SearchCatalogItemsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCatalogItemsResponse != nil {
        // handle response
    }
}
```

## SearchCatalogObjects

Searches for [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) of any type by matching supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query expressions.

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints have different call conventions, including the query filter formats.

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
    res, err := s.Catalog.SearchCatalogObjects(ctx, shared.SearchCatalogObjectsRequest{
        BeginTime: sdk.String("soluta"),
        Cursor: sdk.String("fugit"),
        IncludeDeletedObjects: sdk.Bool(false),
        IncludeRelatedObjects: sdk.Bool(false),
        Limit: sdk.Int64(866292),
        ObjectTypes: []string{
            "recusandae",
            "veritatis",
            "aut",
            "laudantium",
        },
        Query: &shared.CatalogQuery{
            ExactQuery: &shared.CatalogQueryExact{
                AttributeName: "iusto",
                AttributeValue: "dolor",
            },
            ItemVariationsForItemOptionValuesQuery: &shared.CatalogQueryItemVariationsForItemOptionValues{
                ItemOptionValueIds: []string{
                    "tempora",
                    "magni",
                    "rerum",
                    "doloremque",
                },
            },
            ItemsForItemOptionsQuery: &shared.CatalogQueryItemsForItemOptions{
                ItemOptionIds: []string{
                    "eum",
                },
            },
            ItemsForModifierListQuery: &shared.CatalogQueryItemsForModifierList{
                ModifierListIds: []string{
                    "eum",
                    "reprehenderit",
                    "voluptatum",
                    "blanditiis",
                },
            },
            ItemsForTaxQuery: &shared.CatalogQueryItemsForTax{
                TaxIds: []string{
                    "atque",
                    "rerum",
                },
            },
            PrefixQuery: &shared.CatalogQueryPrefix{
                AttributeName: "deserunt",
                AttributePrefix: "atque",
            },
            RangeQuery: &shared.CatalogQueryRange{
                AttributeMaxValue: sdk.Int64(344856),
                AttributeMinValue: sdk.Int64(542340),
                AttributeName: "architecto",
            },
            SetQuery: &shared.CatalogQuerySet{
                AttributeName: "est",
                AttributeValues: []string{
                    "rem",
                    "magni",
                },
            },
            SortedAttributeQuery: &shared.CatalogQuerySortedAttribute{
                AttributeName: "quae",
                InitialAttributeValue: sdk.String("quas"),
                SortOrder: sdk.String("placeat"),
            },
            TextQuery: &shared.CatalogQueryText{
                Keywords: []string{
                    "labore",
                    "sapiente",
                },
            },
        },
    }, operations.SearchCatalogObjectsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCatalogObjectsResponse != nil {
        // handle response
    }
}
```

## UpdateItemModifierLists

Updates the [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects
that apply to the targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having
to perform an upsert on the entire item.

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
    res, err := s.Catalog.UpdateItemModifierLists(ctx, shared.UpdateItemModifierListsRequest{
        ItemIds: []string{
            "delectus",
            "officia",
            "natus",
            "cumque",
        },
        ModifierListsToDisable: []string{
            "quaerat",
            "doloribus",
            "quia",
        },
        ModifierListsToEnable: []string{
            "mollitia",
            "cumque",
            "quis",
            "enim",
        },
    }, operations.UpdateItemModifierListsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateItemModifierListsResponse != nil {
        // handle response
    }
}
```

## UpdateItemTaxes

Updates the [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to the
targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having to perform an
upsert on the entire item.

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
    res, err := s.Catalog.UpdateItemTaxes(ctx, shared.UpdateItemTaxesRequest{
        ItemIds: []string{
            "nemo",
            "illum",
        },
        TaxesToDisable: []string{
            "sit",
        },
        TaxesToEnable: []string{
            "minus",
            "asperiores",
        },
    }, operations.UpdateItemTaxesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateItemTaxesResponse != nil {
        // handle response
    }
}
```

## UpsertCatalogObject

Creates or updates the target [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject).

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
    res, err := s.Catalog.UpsertCatalogObject(ctx, shared.UpsertCatalogObjectRequest{
        IdempotencyKey: "recusandae",
        Object: shared.CatalogObject{
            AbsentAtLocationIds: []string{
                "praesentium",
                "dicta",
                "fugit",
                "sit",
            },
            CatalogV1Ids: []shared.CatalogV1ID{
                shared.CatalogV1ID{
                    CatalogV1ID: sdk.String("necessitatibus"),
                    LocationID: sdk.String("sed"),
                },
                shared.CatalogV1ID{
                    CatalogV1ID: sdk.String("deleniti"),
                    LocationID: sdk.String("sunt"),
                },
            },
            CategoryData: &shared.CatalogCategory{
                Name: sdk.String("Lucia Pacocha"),
            },
            CustomAttributeDefinitionData: &shared.CatalogCustomAttributeDefinition{
                AllowedObjectTypes: []string{
                    "sunt",
                    "impedit",
                },
                AppVisibility: sdk.String("eius"),
                CustomAttributeUsageCount: sdk.Int64(528320),
                Description: sdk.String("ipsa"),
                Key: sdk.String("at"),
                Name: "Mr. Kristie Cole",
                NumberConfig: &shared.CatalogCustomAttributeDefinitionNumberConfig{
                    Precision: sdk.Int64(685467),
                },
                SelectionConfig: &shared.CatalogCustomAttributeDefinitionSelectionConfig{
                    AllowedSelections: []shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                        shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                            Name: "Mr. Connie Brakus",
                            UID: sdk.String("enim"),
                        },
                        shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                            Name: "Danielle Willms",
                            UID: sdk.String("nobis"),
                        },
                        shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                            Name: "Kristie Bergnaum",
                            UID: sdk.String("hic"),
                        },
                        shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection{
                            Name: "Miss Gilbert Corwin",
                            UID: sdk.String("animi"),
                        },
                    },
                    MaxAllowedSelections: sdk.Int64(296128),
                },
                SellerVisibility: sdk.String("tenetur"),
                SourceApplication: &shared.SourceApplication{
                    ApplicationID: sdk.String("dignissimos"),
                    Name: sdk.String("Lynda Langworth"),
                    Product: sdk.String("earum"),
                },
                StringConfig: &shared.CatalogCustomAttributeDefinitionStringConfig{
                    EnforceUniqueness: sdk.Bool(false),
                },
                Type: "velit",
            },
            CustomAttributeValues: map[string]shared.CatalogCustomAttributeValue{
                "eius": shared.CatalogCustomAttributeValue{
                    BooleanValue: sdk.Bool(false),
                    CustomAttributeDefinitionID: sdk.String("rerum"),
                    Key: sdk.String("itaque"),
                    Name: sdk.String("Brittany Cole"),
                    NumberValue: sdk.String("quis"),
                    SelectionUIDValues: []string{
                        "ipsum",
                        "ut",
                        "quaerat",
                    },
                    StringValue: sdk.String("architecto"),
                    Type: sdk.String("praesentium"),
                },
                "eveniet": shared.CatalogCustomAttributeValue{
                    BooleanValue: sdk.Bool(false),
                    CustomAttributeDefinitionID: sdk.String("dolor"),
                    Key: sdk.String("expedita"),
                    Name: sdk.String("Nick Blanda"),
                    NumberValue: sdk.String("temporibus"),
                    SelectionUIDValues: []string{
                        "iusto",
                        "enim",
                        "accusamus",
                    },
                    StringValue: sdk.String("aperiam"),
                    Type: sdk.String("voluptates"),
                },
                "laudantium": shared.CatalogCustomAttributeValue{
                    BooleanValue: sdk.Bool(false),
                    CustomAttributeDefinitionID: sdk.String("tempora"),
                    Key: sdk.String("quae"),
                    Name: sdk.String("Gilberto Legros"),
                    NumberValue: sdk.String("modi"),
                    SelectionUIDValues: []string{
                        "architecto",
                        "aliquam",
                        "labore",
                        "maiores",
                    },
                    StringValue: sdk.String("sequi"),
                    Type: sdk.String("saepe"),
                },
                "consequatur": shared.CatalogCustomAttributeValue{
                    BooleanValue: sdk.Bool(false),
                    CustomAttributeDefinitionID: sdk.String("esse"),
                    Key: sdk.String("debitis"),
                    Name: sdk.String("Devin Runte"),
                    NumberValue: sdk.String("deserunt"),
                    SelectionUIDValues: []string{
                        "reiciendis",
                        "sequi",
                    },
                    StringValue: sdk.String("porro"),
                    Type: sdk.String("laborum"),
                },
            },
            DiscountData: &shared.CatalogDiscount{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(748973),
                    Currency: sdk.String("quibusdam"),
                },
                DiscountType: sdk.String("omnis"),
                LabelColor: sdk.String("aut"),
                ModifyTaxBasis: sdk.String("ipsam"),
                Name: sdk.String("Kent Kihn"),
                Percentage: sdk.String("accusantium"),
                PinRequired: sdk.Bool(false),
            },
            ID: "56728227-b2d3-4094-b0bf-7a4fa87cf535",
            ImageData: &shared.CatalogImage{
                Caption: sdk.String("laborum"),
                Name: sdk.String("Ora Okuneva"),
                URL: sdk.String("non"),
            },
            ImageID: sdk.String("necessitatibus"),
            IsDeleted: sdk.Bool(false),
            ItemData: &shared.CatalogItem{
                Abbreviation: sdk.String("distinctio"),
                AvailableElectronically: sdk.Bool(false),
                AvailableForPickup: sdk.Bool(false),
                AvailableOnline: sdk.Bool(false),
                CategoryID: sdk.String("maiores"),
                Description: sdk.String("laboriosam"),
                ItemOptions: []shared.CatalogItemOptionForItem{
                    shared.CatalogItemOptionForItem{
                        ItemOptionID: sdk.String("optio"),
                    },
                },
                LabelColor: sdk.String("sequi"),
                ModifierListInfo: []shared.CatalogItemModifierListInfo{
                    shared.CatalogItemModifierListInfo{
                        Enabled: sdk.Bool(false),
                        MaxSelectedModifiers: sdk.Int64(112250),
                        MinSelectedModifiers: sdk.Int64(973096),
                        ModifierListID: "doloremque",
                        ModifierOverrides: []shared.CatalogModifierOverride{
                            shared.CatalogModifierOverride{
                                ModifierID: "amet",
                                OnByDefault: sdk.Bool(false),
                            },
                        },
                    },
                },
                Name: sdk.String("Arnold Hegmann"),
                ProductType: sdk.String("dolor"),
                SkipModifierScreen: sdk.Bool(false),
                SortName: sdk.String("nisi"),
                TaxIds: []string{
                    "reiciendis",
                    "itaque",
                },
                Variations: []shared.CatalogObject{
                    shared.CatalogObject{},
                },
            },
            ItemOptionData: &shared.CatalogItemOption{
                Description: sdk.String("est"),
                DisplayName: sdk.String("accusantium"),
                Name: sdk.String("Israel Lubowitz"),
                ShowColors: sdk.Bool(false),
                Values: []shared.CatalogObject{
                    shared.CatalogObject{},
                    shared.CatalogObject{},
                },
            },
            ItemOptionValueData: &shared.CatalogItemOptionValue{
                Color: sdk.String("provident"),
                Description: sdk.String("sapiente"),
                ItemOptionID: sdk.String("aperiam"),
                Name: sdk.String("Jimmy McLaughlin"),
                Ordinal: sdk.Int64(601277),
            },
            ItemVariationData: &shared.CatalogItemVariation{
                AvailableForBooking: sdk.Bool(false),
                InventoryAlertThreshold: sdk.Int64(1116),
                InventoryAlertType: sdk.String("impedit"),
                ItemID: sdk.String("sequi"),
                ItemOptionValues: []shared.CatalogItemOptionValueForItemVariation{
                    shared.CatalogItemOptionValueForItemVariation{
                        ItemOptionID: sdk.String("labore"),
                        ItemOptionValueID: sdk.String("expedita"),
                    },
                    shared.CatalogItemOptionValueForItemVariation{
                        ItemOptionID: sdk.String("in"),
                        ItemOptionValueID: sdk.String("quisquam"),
                    },
                },
                LocationOverrides: []shared.ItemVariationLocationOverrides{
                    shared.ItemVariationLocationOverrides{
                        InventoryAlertThreshold: sdk.Int64(317260),
                        InventoryAlertType: sdk.String("nulla"),
                        LocationID: sdk.String("maiores"),
                        PriceMoney: &shared.Money{
                            Amount: sdk.Int64(715622),
                            Currency: sdk.String("mollitia"),
                        },
                        PricingType: sdk.String("impedit"),
                        TrackInventory: sdk.Bool(false),
                    },
                },
                MeasurementUnitID: sdk.String("accusamus"),
                Name: sdk.String("Billie Kuvalis DDS"),
                Ordinal: sdk.Int64(274040),
                PriceMoney: &shared.Money{
                    Amount: sdk.Int64(908249),
                    Currency: sdk.String("repudiandae"),
                },
                PricingType: sdk.String("sed"),
                ServiceDuration: sdk.Int64(772628),
                Sku: sdk.String("quas"),
                Stockable: sdk.Bool(false),
                StockableConversion: &shared.CatalogStockConversion{
                    NonstockableQuantity: "impedit",
                    StockableItemVariationID: "vel",
                    StockableQuantity: "eligendi",
                },
                TeamMemberIds: []string{
                    "ex",
                    "beatae",
                    "veritatis",
                    "maiores",
                },
                TrackInventory: sdk.Bool(false),
                Upc: sdk.String("itaque"),
                UserData: sdk.String("vero"),
            },
            MeasurementUnitData: &shared.CatalogMeasurementUnit{
                MeasurementUnit: &shared.MeasurementUnit{
                    AreaUnit: sdk.String("quidem"),
                    CustomUnit: &shared.MeasurementUnitCustom{
                        Abbreviation: "illo",
                        Name: "Cody Schiller",
                    },
                    GenericUnit: sdk.String("cum"),
                    LengthUnit: sdk.String("suscipit"),
                    TimeUnit: sdk.String("saepe"),
                    Type: sdk.String("earum"),
                    VolumeUnit: sdk.String("quod"),
                    WeightUnit: sdk.String("nihil"),
                },
                Precision: sdk.Int64(310930),
            },
            ModifierData: &shared.CatalogModifier{
                ModifierListID: sdk.String("ipsum"),
                Name: sdk.String("Myrtle Prohaska"),
                Ordinal: sdk.Int64(319419),
                PriceMoney: &shared.Money{
                    Amount: sdk.Int64(193990),
                    Currency: sdk.String("beatae"),
                },
            },
            ModifierListData: &shared.CatalogModifierList{
                Modifiers: []shared.CatalogObject{
                    shared.CatalogObject{},
                    shared.CatalogObject{},
                },
                Name: sdk.String("Danielle Kuhlman"),
                Ordinal: sdk.Int64(586277),
                SelectionType: sdk.String("illo"),
            },
            PresentAtAllLocations: sdk.Bool(false),
            PresentAtLocationIds: []string{
                "laborum",
                "illum",
            },
            PricingRuleData: &shared.CatalogPricingRule{
                ApplyProductsID: sdk.String("fugit"),
                CustomerGroupIdsAny: []string{
                    "dolorum",
                    "repellat",
                    "nostrum",
                    "illum",
                },
                DiscountID: sdk.String("quibusdam"),
                ExcludeProductsID: sdk.String("commodi"),
                ExcludeStrategy: sdk.String("esse"),
                MatchProductsID: sdk.String("explicabo"),
                Name: sdk.String("Dr. Mona Ruecker"),
                TimePeriodIds: []string{
                    "repudiandae",
                    "aspernatur",
                    "sapiente",
                },
                ValidFromDate: sdk.String("neque"),
                ValidFromLocalTime: sdk.String("officia"),
                ValidUntilDate: sdk.String("suscipit"),
                ValidUntilLocalTime: sdk.String("harum"),
            },
            ProductSetData: &shared.CatalogProductSet{
                AllProducts: sdk.Bool(false),
                Name: sdk.String("Laura Aufderhar"),
                ProductIdsAll: []string{
                    "molestiae",
                    "quis",
                    "iure",
                },
                ProductIdsAny: []string{
                    "quaerat",
                },
                QuantityExact: sdk.Int64(228907),
                QuantityMax: sdk.Int64(956942),
                QuantityMin: sdk.Int64(357984),
            },
            QuickAmountsSettingsData: &shared.CatalogQuickAmountsSettings{
                Amounts: []shared.CatalogQuickAmount{
                    shared.CatalogQuickAmount{
                        Amount: shared.Money{
                            Amount: sdk.Int64(435142),
                            Currency: sdk.String("quisquam"),
                        },
                        Ordinal: sdk.Int64(590927),
                        Score: sdk.Int64(515595),
                        Type: "nam",
                    },
                    shared.CatalogQuickAmount{
                        Amount: shared.Money{
                            Amount: sdk.Int64(366147),
                            Currency: sdk.String("enim"),
                        },
                        Ordinal: sdk.Int64(371213),
                        Score: sdk.Int64(328954),
                        Type: "tempora",
                    },
                    shared.CatalogQuickAmount{
                        Amount: shared.Money{
                            Amount: sdk.Int64(19691),
                            Currency: sdk.String("corrupti"),
                        },
                        Ordinal: sdk.Int64(40874),
                        Score: sdk.Int64(854137),
                        Type: "numquam",
                    },
                },
                EligibleForAutoAmounts: sdk.Bool(false),
                Option: "doloremque",
            },
            SubscriptionPlanData: &shared.CatalogSubscriptionPlan{
                Name: "Loren Murphy",
                Phases: []shared.SubscriptionPhase{
                    shared.SubscriptionPhase{
                        Cadence: "cumque",
                        Ordinal: sdk.Int64(743795),
                        Periods: sdk.Int64(856568),
                        RecurringPriceMoney: shared.Money{
                            Amount: sdk.Int64(389287),
                            Currency: sdk.String("nam"),
                        },
                        UID: sdk.String("enim"),
                    },
                    shared.SubscriptionPhase{
                        Cadence: "maiores",
                        Ordinal: sdk.Int64(235482),
                        Periods: sdk.Int64(898826),
                        RecurringPriceMoney: shared.Money{
                            Amount: sdk.Int64(803792),
                            Currency: sdk.String("cupiditate"),
                        },
                        UID: sdk.String("voluptatem"),
                    },
                },
            },
            TaxData: &shared.CatalogTax{
                AppliesToCustomAmounts: sdk.Bool(false),
                CalculationPhase: sdk.String("provident"),
                Enabled: sdk.Bool(false),
                InclusionType: sdk.String("adipisci"),
                Name: sdk.String("Megan Zulauf"),
                Percentage: sdk.String("vel"),
            },
            TimePeriodData: &shared.CatalogTimePeriod{
                Event: sdk.String("cum"),
            },
            Type: "id",
            UpdatedAt: sdk.String("possimus"),
            Version: sdk.Int64(143061),
        },
    }, operations.UpsertCatalogObjectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpsertCatalogObjectResponse != nil {
        // handle response
    }
}
```
