# Projects

### Available Operations

* [RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate](#recommendationengineprojectslocationscatalogscatalogitemscreate) - Creates a catalog item.
* [RecommendationengineProjectsLocationsCatalogsCatalogItemsImport](#recommendationengineprojectslocationscatalogscatalogitemsimport) - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* [RecommendationengineProjectsLocationsCatalogsCatalogItemsList](#recommendationengineprojectslocationscatalogscatalogitemslist) - Gets a list of catalog items.
* [RecommendationengineProjectsLocationsCatalogsCatalogItemsPatch](#recommendationengineprojectslocationscatalogscatalogitemspatch) - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* [RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict](#recommendationengineprojectslocationscatalogseventstoresplacementspredict) - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* [RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreate](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate) - Register an API key for use with predict method.
* [RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDelete](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete) - Unregister an apiKey from using for predict method.
* [RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsList](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist) - List the registered apiKeys for use with predict method.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect](#recommendationengineprojectslocationscatalogseventstoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport](#recommendationengineprojectslocationscatalogseventstoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsList](#recommendationengineprojectslocationscatalogseventstoresusereventslist) - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge](#recommendationengineprojectslocationscatalogseventstoresusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin](#recommendationengineprojectslocationscatalogseventstoresusereventsrejoin) - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite](#recommendationengineprojectslocationscatalogseventstoresusereventswrite) - Writes a single user event.
* [RecommendationengineProjectsLocationsCatalogsList](#recommendationengineprojectslocationscatalogslist) - Lists all the catalog configurations associated with the project.
* [RecommendationengineProjectsLocationsCatalogsOperationsGet](#recommendationengineprojectslocationscatalogsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [RecommendationengineProjectsLocationsCatalogsOperationsList](#recommendationengineprojectslocationscatalogsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate

Creates a catalog item.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate(ctx, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecommendationengineV1beta1CatalogItem: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "ipsam",
                        "id",
                        "possimus",
                        "aut",
                    },
                },
            },
            Description: sdk.String("quasi"),
            ID: sdk.String("9da1ffe7-8f09-47b0-874f-15471b5e6e13"),
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "molestias": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "pariatur",
                            "modi",
                            "praesentium",
                        },
                    },
                    "rem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "quasi",
                            "repudiandae",
                            "sint",
                            "veritatis",
                        },
                    },
                    "itaque": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "enim",
                            "consequatur",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "quibusdam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            6471.74,
                        },
                    },
                    "distinctio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            2894.06,
                            2647.3,
                            1831.91,
                            3978.21,
                        },
                    },
                    "cupiditate": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            201.07,
                            1649.4,
                            8289.4,
                        },
                    },
                },
            },
            ItemGroupID: sdk.String("ipsam"),
            LanguageCode: sdk.String("alias"),
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: sdk.String("fugit"),
                CanonicalProductURI: sdk.String("dolorum"),
                Costs: map[string]float32{
                    "tempora": 7037.37,
                    "tempore": 2884.76,
                    "delectus": 4332.88,
                },
                CurrencyCode: sdk.String("non"),
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: sdk.Float32(7561.07),
                    OriginalPrice: sdk.Float32(5761.57),
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(592042),
                        URI: sdk.String("https://nonstop-pate.biz"),
                        Width: sdk.Int(891555),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(952749),
                        URI: sdk.String("https://intrepid-ikebana.org"),
                        Width: sdk.Int(978571),
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: sdk.Float32(6994.79),
                    Min: sdk.Float32(1162.02),
                },
                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock.ToPointer(),
            },
            Tags: []string{
                "facere",
                "ea",
                "aliquid",
                "laborum",
            },
            Title: sdk.String("Dr."),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quidem"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1CatalogItem != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsCatalogItemsImport

Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsImport(ctx, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest: &shared.GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest{
            ErrorsConfig: &shared.GoogleCloudRecommendationengineV1beta1ImportErrorsConfig{
                GcsPrefix: sdk.String("sapiente"),
            },
            InputConfig: &shared.GoogleCloudRecommendationengineV1beta1InputConfig{
                BigQuerySource: &shared.GoogleCloudRecommendationengineV1beta1BigQuerySource{
                    DataSchema: sdk.String("amet"),
                    DatasetID: sdk.String("deserunt"),
                    GcsStagingDir: sdk.String("nisi"),
                    ProjectID: sdk.String("vel"),
                    TableID: sdk.String("natus"),
                },
                CatalogInlineSource: &shared.GoogleCloudRecommendationengineV1beta1CatalogInlineSource{
                    CatalogItems: []shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "nihil",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "distinctio",
                                        "id",
                                    },
                                },
                            },
                            Description: sdk.String("labore"),
                            ID: sdk.String("469b6e21-4195-4989-8afa-563e2516fe4c"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "facilis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "architecto",
                                            "architecto",
                                        },
                                    },
                                    "repudiandae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "expedita",
                                            "nihil",
                                        },
                                    },
                                    "repellat": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "sed",
                                            "saepe",
                                            "pariatur",
                                            "accusantium",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "praesentium": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            1668.47,
                                            1238.2,
                                            7790.51,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("illum"),
                            LanguageCode: sdk.String("pariatur"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("maxime"),
                                CanonicalProductURI: sdk.String("ea"),
                                Costs: map[string]float32{
                                    "odit": 4071.83,
                                    "accusantium": 691.67,
                                    "maiores": 6974.29,
                                },
                                CurrencyCode: sdk.String("ipsam"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(4535.43),
                                    OriginalPrice: sdk.Float32(4200.75),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(50588),
                                        URI: sdk.String("https://half-wedge.com"),
                                        Width: sdk.Int(855804),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(230742),
                                        URI: sdk.String("http://slushy-ford.org"),
                                        Width: sdk.Int(729991),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(749999),
                                        URI: sdk.String("http://glum-locality.info"),
                                        Width: sdk.Int(54338),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(3389.85),
                                    Min: sdk.Float32(1999.96),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumStockStateUnspecified.ToPointer(),
                            },
                            Tags: []string{
                                "dolores",
                            },
                            Title: sdk.String("Miss"),
                        },
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "vero",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "hic",
                                        "recusandae",
                                    },
                                },
                            },
                            Description: sdk.String("omnis"),
                            ID: sdk.String("b90c2890-9b3f-4e49-a8d9-cbf48633323f"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "cum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "dignissimos",
                                            "reiciendis",
                                        },
                                    },
                                    "amet": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "numquam",
                                            "veritatis",
                                            "ipsa",
                                        },
                                    },
                                    "ipsa": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "odio",
                                            "quaerat",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "quidem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            3777.52,
                                            6176.58,
                                            1796.03,
                                            5424.99,
                                        },
                                    },
                                    "sit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            672.49,
                                            7438.35,
                                            6793.93,
                                            4785.96,
                                        },
                                    },
                                    "voluptate": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            5365.79,
                                            6070.45,
                                            8966.72,
                                        },
                                    },
                                    "distinctio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            4694.97,
                                            2168.97,
                                            4560.15,
                                            6630.78,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("saepe"),
                            LanguageCode: sdk.String("eius"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("aspernatur"),
                                CanonicalProductURI: sdk.String("perferendis"),
                                Costs: map[string]float32{
                                    "optio": 8815.86,
                                },
                                CurrencyCode: sdk.String("ad"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(9044.25),
                                    OriginalPrice: sdk.Float32(3834.64),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(588317),
                                        URI: sdk.String("http://sweltering-load.name"),
                                        Width: sdk.Int(55),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(872651),
                                        URI: sdk.String("http://favorable-hermit.net"),
                                        Width: sdk.Int(885338),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(185636),
                                        URI: sdk.String("https://weepy-increase.net"),
                                        Width: sdk.Int(483409),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(2155.07),
                                    Min: sdk.Float32(7887.4),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumBackorder.ToPointer(),
                            },
                            Tags: []string{
                                "tempore",
                            },
                            Title: sdk.String("Dr."),
                        },
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "dolorem",
                                        "sapiente",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "nihil",
                                        "sit",
                                        "expedita",
                                    },
                                },
                            },
                            Description: sdk.String("neque"),
                            ID: sdk.String("26b5a734-29cd-4b1a-8422-bb679d232271"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "nam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "voluptatem",
                                            "cumque",
                                            "soluta",
                                            "nobis",
                                        },
                                    },
                                    "et": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "ipsum",
                                            "veritatis",
                                            "nobis",
                                            "quos",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "cupiditate": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            9619.37,
                                        },
                                    },
                                    "dolorem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            2869.15,
                                            2408.29,
                                        },
                                    },
                                    "dolorum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            630.38,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("aut"),
                            LanguageCode: sdk.String("quas"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("itaque"),
                                CanonicalProductURI: sdk.String("consequatur"),
                                Costs: map[string]float32{
                                    "repellendus": 7851.53,
                                    "doloribus": 2817.3,
                                    "facilis": 5864.1,
                                },
                                CurrencyCode: sdk.String("qui"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(639.55),
                                    OriginalPrice: sdk.Float32(5123.93),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(580447),
                                        URI: sdk.String("https://spicy-swallow.name"),
                                        Width: sdk.Int(338159),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(218403),
                                        URI: sdk.String("https://joint-curler.org"),
                                        Width: sdk.Int(949319),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(4922.68),
                                    Min: sdk.Float32(9413.78),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumPreorder.ToPointer(),
                            },
                            Tags: []string{
                                "odio",
                                "similique",
                                "facilis",
                                "vero",
                            },
                            Title: sdk.String("Ms."),
                        },
                    },
                },
                GcsSource: &shared.GoogleCloudRecommendationengineV1beta1GcsSource{
                    InputUris: []string{
                        "quibusdam",
                        "illum",
                    },
                    JSONSchema: sdk.String("sequi"),
                },
                UserEventInlineSource: &shared.GoogleCloudRecommendationengineV1beta1UserEventInlineSource{
                    UserEvents: []shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                        shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                            EventDetail: &shared.GoogleCloudRecommendationengineV1beta1EventDetail{
                                EventAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                    CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        "aut": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "exercitationem",
                                                "nulla",
                                                "fugit",
                                                "porro",
                                            },
                                        },
                                        "maiores": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "iusto",
                                                "eligendi",
                                                "ducimus",
                                                "alias",
                                            },
                                        },
                                        "officia": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "ipsam",
                                                "ea",
                                            },
                                        },
                                        "aspernatur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "possimus",
                                                "magnam",
                                            },
                                        },
                                    },
                                    NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        "ex": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                1206.57,
                                                2243.17,
                                                9807,
                                            },
                                        },
                                    },
                                },
                                ExperimentIds: []string{
                                    "ex",
                                },
                                PageViewID: sdk.String("nulla"),
                                RecommendationToken: sdk.String("excepturi"),
                                ReferrerURI: sdk.String("voluptatibus"),
                                URI: sdk.String("http://well-worn-sequence.org"),
                            },
                            EventSource: shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumAutoml.ToPointer(),
                            EventTime: sdk.String("impedit"),
                            EventType: sdk.String("corporis"),
                            ProductEventDetail: &shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail{
                                CartID: sdk.String("veniam"),
                                ListID: sdk.String("aliquid"),
                                PageCategories: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                        Categories: []string{
                                            "ea",
                                            "quo",
                                        },
                                    },
                                },
                                ProductDetails: []shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(926213),
                                        CurrencyCode: sdk.String("aspernatur"),
                                        DisplayPrice: sdk.Float32(3253.1),
                                        ID: sdk.String("0fb008c4-2e14-41aa-8366-c8dd6b144290"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "magnam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "eius",
                                                        "esse",
                                                    },
                                                },
                                                "esse": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "fuga",
                                                        "reprehenderit",
                                                        "quidem",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "ut": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        3799.27,
                                                        8268.71,
                                                    },
                                                },
                                                "eos": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        7885.46,
                                                        863.77,
                                                        568.48,
                                                    },
                                                },
                                                "id": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        2065.94,
                                                        7786.96,
                                                        8472.76,
                                                    },
                                                },
                                                "quo": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        2594.22,
                                                        1783.67,
                                                        3738.13,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(698.59),
                                        Quantity: sdk.Int(587600),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumStockStateUnspecified.ToPointer(),
                                    },
                                },
                                PurchaseTransaction: &shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction{
                                    Costs: map[string]float32{
                                        "debitis": 3708.53,
                                        "aspernatur": 1970.54,
                                    },
                                    CurrencyCode: sdk.String("quo"),
                                    ID: sdk.String("7e0bc717-8e47-496f-aa70-c688282aa482"),
                                    Revenue: sdk.Float32(3256.85),
                                    Taxes: map[string]float32{
                                        "fugit": 9564.06,
                                        "consequuntur": 1871.31,
                                    },
                                },
                                SearchQuery: sdk.String("explicabo"),
                            },
                            UserInfo: &shared.GoogleCloudRecommendationengineV1beta1UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("saepe"),
                                UserAgent: sdk.String("occaecati"),
                                UserID: sdk.String("atque"),
                                VisitorID: sdk.String("et"),
                            },
                        },
                        shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                            EventDetail: &shared.GoogleCloudRecommendationengineV1beta1EventDetail{
                                EventAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                    CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        "eveniet": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "veritatis",
                                                "esse",
                                                "quod",
                                                "nam",
                                            },
                                        },
                                        "vero": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "quasi",
                                                "saepe",
                                            },
                                        },
                                    },
                                    NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        "harum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                6996.22,
                                                5801.97,
                                            },
                                        },
                                        "minima": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                7567.79,
                                                270.69,
                                                6360.61,
                                            },
                                        },
                                    },
                                },
                                ExperimentIds: []string{
                                    "adipisci",
                                    "cumque",
                                    "consequuntur",
                                },
                                PageViewID: sdk.String("consequatur"),
                                RecommendationToken: sdk.String("minus"),
                                ReferrerURI: sdk.String("quaerat"),
                                URI: sdk.String("https://emotional-infancy.name"),
                            },
                            EventSource: shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEcommerce.ToPointer(),
                            EventTime: sdk.String("a"),
                            EventType: sdk.String("nulla"),
                            ProductEventDetail: &shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail{
                                CartID: sdk.String("quas"),
                                ListID: sdk.String("esse"),
                                PageCategories: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                        Categories: []string{
                                            "error",
                                            "sint",
                                            "pariatur",
                                            "possimus",
                                        },
                                    },
                                },
                                ProductDetails: []shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(908844),
                                        CurrencyCode: sdk.String("asperiores"),
                                        DisplayPrice: sdk.Float32(8155.24),
                                        ID: sdk.String("121aa6f1-e674-4bdb-84f1-5756082d68ea"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "omnis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "quasi",
                                                        "at",
                                                        "et",
                                                        "voluptate",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "minima": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        2327.44,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(2371.73),
                                        Quantity: sdk.Int(614465),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumBackorder.ToPointer(),
                                    },
                                },
                                PurchaseTransaction: &shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction{
                                    Costs: map[string]float32{
                                        "rem": 156.06,
                                    },
                                    CurrencyCode: sdk.String("laudantium"),
                                    ID: sdk.String("6a184039-4c26-4071-b93f-5f0642dac7af"),
                                    Revenue: sdk.Float32(3681.02),
                                    Taxes: map[string]float32{
                                        "quaerat": 7832.35,
                                    },
                                },
                                SearchQuery: sdk.String("quod"),
                            },
                            UserInfo: &shared.GoogleCloudRecommendationengineV1beta1UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("labore"),
                                UserAgent: sdk.String("ab"),
                                UserID: sdk.String("adipisci"),
                                VisitorID: sdk.String("fuga"),
                            },
                        },
                        shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                            EventDetail: &shared.GoogleCloudRecommendationengineV1beta1EventDetail{
                                EventAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                    CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        "suscipit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "culpa",
                                            },
                                        },
                                        "est": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "totam",
                                                "fugiat",
                                                "vel",
                                                "ducimus",
                                            },
                                        },
                                        "quos": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "labore",
                                                "possimus",
                                            },
                                        },
                                    },
                                    NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        "cum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                4471.44,
                                                3605.45,
                                            },
                                        },
                                        "reiciendis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                3631.61,
                                                9249.67,
                                                3975.33,
                                                460.07,
                                            },
                                        },
                                        "cum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                4490.83,
                                            },
                                        },
                                    },
                                },
                                ExperimentIds: []string{
                                    "earum",
                                    "facere",
                                },
                                PageViewID: sdk.String("numquam"),
                                RecommendationToken: sdk.String("doloribus"),
                                ReferrerURI: sdk.String("suscipit"),
                                URI: sdk.String("https://rewarding-thumb.org"),
                            },
                            EventSource: shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumAutoml.ToPointer(),
                            EventTime: sdk.String("sunt"),
                            EventType: sdk.String("asperiores"),
                            ProductEventDetail: &shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail{
                                CartID: sdk.String("adipisci"),
                                ListID: sdk.String("non"),
                                PageCategories: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                        Categories: []string{
                                            "dignissimos",
                                        },
                                    },
                                },
                                ProductDetails: []shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(891523),
                                        CurrencyCode: sdk.String("consectetur"),
                                        DisplayPrice: sdk.Float32(3581.07),
                                        ID: sdk.String("b60eb1ea-4265-455b-a3c2-8744ed53b88f"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "culpa": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "pariatur",
                                                        "totam",
                                                        "hic",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "nobis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        6995.75,
                                                    },
                                                },
                                                "sed": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        1318.52,
                                                        9944.01,
                                                        7079.18,
                                                        4518.22,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(7090.72),
                                        Quantity: sdk.Int(70869),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumPreorder.ToPointer(),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(292794),
                                        CurrencyCode: sdk.String("laborum"),
                                        DisplayPrice: sdk.Float32(1523.54),
                                        ID: sdk.String("76b26916-fe1f-408f-8294-e3698f447f60"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "officiis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "facilis",
                                                        "quaerat",
                                                        "incidunt",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "debitis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        265.22,
                                                        7505.95,
                                                        6256.37,
                                                    },
                                                },
                                                "veniam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        9241.59,
                                                        9671.22,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(8623.19),
                                        Quantity: sdk.Int(168576),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumStockStateUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(901483),
                                        CurrencyCode: sdk.String("numquam"),
                                        DisplayPrice: sdk.Float32(3299.35),
                                        ID: sdk.String("7e1858b6-a89f-4be3-a5aa-8e4824d0ab40"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "ipsam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "voluptatum",
                                                    },
                                                },
                                                "quas": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "corporis",
                                                        "et",
                                                        "blanditiis",
                                                        "ex",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "sit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        3426.11,
                                                        9061.72,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(6222.31),
                                        Quantity: sdk.Int(8511),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumInStock.ToPointer(),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(968865),
                                        CurrencyCode: sdk.String("dolorem"),
                                        DisplayPrice: sdk.Float32(6908.94),
                                        ID: sdk.String("1194b8ab-f603-4a79-b9df-e0ab7da8a50c"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "quasi": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "reprehenderit",
                                                        "asperiores",
                                                        "totam",
                                                    },
                                                },
                                                "suscipit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "maxime",
                                                        "et",
                                                        "esse",
                                                    },
                                                },
                                                "amet": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "ea",
                                                        "atque",
                                                        "error",
                                                        "officiis",
                                                    },
                                                },
                                                "officiis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "natus",
                                                        "minima",
                                                        "aspernatur",
                                                        "ex",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "corrupti": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        6216.93,
                                                        5027.21,
                                                        3793.56,
                                                        9223.48,
                                                    },
                                                },
                                                "atque": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        1209.19,
                                                        9233.06,
                                                        6806.97,
                                                    },
                                                },
                                                "repellendus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        9682.87,
                                                        429.76,
                                                    },
                                                },
                                                "repudiandae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        360.33,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(1064.29),
                                        Quantity: sdk.Int(174772),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumInStock.ToPointer(),
                                    },
                                },
                                PurchaseTransaction: &shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction{
                                    Costs: map[string]float32{
                                        "velit": 9521.43,
                                        "molestias": 3000.29,
                                    },
                                    CurrencyCode: sdk.String("saepe"),
                                    ID: sdk.String("29e973e9-22a5-47a1-9be3-e060807e2b6e"),
                                    Revenue: sdk.Float32(1875.52),
                                    Taxes: map[string]float32{
                                        "distinctio": 5289.4,
                                        "rem": 3044.46,
                                        "ad": 9979.63,
                                    },
                                },
                                SearchQuery: sdk.String("alias"),
                            },
                            UserInfo: &shared.GoogleCloudRecommendationengineV1beta1UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("corporis"),
                                UserAgent: sdk.String("perspiciatis"),
                                UserID: sdk.String("nihil"),
                                VisitorID: sdk.String("mollitia"),
                            },
                        },
                    },
                },
            },
            RequestID: sdk.String("voluptas"),
            UpdateMask: sdk.String("alias"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("id"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("dolore"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsCatalogItemsList

Gets a list of catalog items.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsList(ctx, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("ut"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("debitis"),
        PageSize: sdk.Int64(514513),
        PageToken: sdk.String("eum"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("provident"),
    }, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsCatalogItemsPatch

Updates a catalog item. Partial updating is supported. Non-existing items will be created.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatch(ctx, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommendationengineV1beta1CatalogItem: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "provident",
                        "aspernatur",
                        "ullam",
                        "quasi",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "nostrum",
                        "mollitia",
                        "provident",
                    },
                },
            },
            Description: sdk.String("possimus"),
            ID: sdk.String("a660ff57-bfaa-4d4f-9efc-1b4512c10326"),
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "rem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "impedit",
                            "eos",
                            "sapiente",
                            "eum",
                        },
                    },
                    "dicta": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "beatae",
                            "cupiditate",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "earum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            9407.82,
                            8481.51,
                            525.08,
                        },
                    },
                    "earum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            9834.27,
                            8918.01,
                            3998.02,
                        },
                    },
                    "porro": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            2115.34,
                            1478.08,
                        },
                    },
                },
            },
            ItemGroupID: sdk.String("cumque"),
            LanguageCode: sdk.String("fuga"),
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: sdk.String("ratione"),
                CanonicalProductURI: sdk.String("animi"),
                Costs: map[string]float32{
                    "nulla": 89.31,
                    "quasi": 902.33,
                    "ducimus": 6191.83,
                    "occaecati": 3824.4,
                },
                CurrencyCode: sdk.String("adipisci"),
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: sdk.Float32(965.62),
                    OriginalPrice: sdk.Float32(1690.25),
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(859581),
                        URI: sdk.String("https://babyish-dissemination.info"),
                        Width: sdk.Int(473190),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(115834),
                        URI: sdk.String("http://joyful-lentil.org"),
                        Width: sdk.Int(967260),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(423706),
                        URI: sdk.String("http://thunderous-archeology.com"),
                        Width: sdk.Int(483706),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(271252),
                        URI: sdk.String("http://idle-cyclooxygenase.info"),
                        Width: sdk.Int(58870),
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: sdk.Float32(6713.84),
                    Min: sdk.Float32(1238.44),
                },
                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock.ToPointer(),
            },
            Tags: []string{
                "expedita",
                "aliquid",
                "officia",
                "suscipit",
            },
            Title: sdk.String("Mrs."),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("iste"),
        Key: sdk.String("id"),
        Name: "Isabel Schuster",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UpdateMask: sdk.String("ad"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("enim"),
    }, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1CatalogItem != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict

Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommendationengineV1beta1PredictRequest: &shared.GoogleCloudRecommendationengineV1beta1PredictRequest{
            DryRun: sdk.Bool(false),
            Filter: sdk.String("repellendus"),
            Labels: map[string]string{
                "quo": "ex",
                "ut": "ad",
            },
            PageSize: sdk.Int(713927),
            PageToken: sdk.String("voluptatem"),
            Params: map[string]interface{}{
                "cum": "aliquid",
                "beatae": "voluptatum",
                "omnis": "veritatis",
            },
            UserEvent: &shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                EventDetail: &shared.GoogleCloudRecommendationengineV1beta1EventDetail{
                    EventAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                        CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                            "est": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                Value: []string{
                                    "voluptatem",
                                    "sapiente",
                                    "officiis",
                                },
                            },
                            "architecto": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                Value: []string{
                                    "pariatur",
                                    "debitis",
                                    "voluptatem",
                                },
                            },
                            "alias": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                Value: []string{
                                    "earum",
                                    "ex",
                                    "sapiente",
                                },
                            },
                        },
                        NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                            "minus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                Value: []float32{
                                    9920.74,
                                    1905.67,
                                },
                            },
                            "ullam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                Value: []float32{
                                    8483.41,
                                },
                            },
                            "totam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                Value: []float32{
                                    8427.77,
                                    7205.28,
                                    3732.16,
                                    6334.15,
                                },
                            },
                        },
                    },
                    ExperimentIds: []string{
                        "aliquam",
                    },
                    PageViewID: sdk.String("inventore"),
                    RecommendationToken: sdk.String("deleniti"),
                    ReferrerURI: sdk.String("veritatis"),
                    URI: sdk.String("http://easy-going-adapter.com"),
                },
                EventSource: shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEventSourceUnspecified.ToPointer(),
                EventTime: sdk.String("modi"),
                EventType: sdk.String("fugit"),
                ProductEventDetail: &shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail{
                    CartID: sdk.String("ab"),
                    ListID: sdk.String("laudantium"),
                    PageCategories: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                            Categories: []string{
                                "fugiat",
                            },
                        },
                    },
                    ProductDetails: []shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                        shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                            AvailableQuantity: sdk.Int(162120),
                            CurrencyCode: sdk.String("ipsa"),
                            DisplayPrice: sdk.Float32(5596.82),
                            ID: sdk.String("ece7e253-b668-4451-86c6-e205e16deab3"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "repudiandae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "occaecati",
                                            "nemo",
                                            "voluptate",
                                            "blanditiis",
                                        },
                                    },
                                    "officia": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "numquam",
                                            "nemo",
                                        },
                                    },
                                    "quos": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "aspernatur",
                                            "ducimus",
                                        },
                                    },
                                    "nesciunt": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "laudantium",
                                            "incidunt",
                                            "quasi",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "fugiat": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            3955.44,
                                        },
                                    },
                                    "consequuntur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            468.06,
                                        },
                                    },
                                    "cupiditate": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            7468.37,
                                            38.6,
                                            6089.89,
                                            1785.8,
                                        },
                                    },
                                },
                            },
                            OriginalPrice: sdk.Float32(5790.11),
                            Quantity: sdk.Int(612867),
                            StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumStockStateUnspecified.ToPointer(),
                        },
                        shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                            AvailableQuantity: sdk.Int(81369),
                            CurrencyCode: sdk.String("fuga"),
                            DisplayPrice: sdk.Float32(8818.97),
                            ID: sdk.String("fb9f58c4-d86e-468e-8be0-56013f59da75"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "est": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "sint",
                                            "accusamus",
                                        },
                                    },
                                    "impedit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "necessitatibus",
                                            "asperiores",
                                            "ex",
                                            "voluptas",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "delectus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            7918.8,
                                        },
                                    },
                                    "fuga": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            2310.7,
                                            2448.89,
                                            5388.69,
                                        },
                                    },
                                    "ipsum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            1660.47,
                                            7465.85,
                                            9227.57,
                                            7214.3,
                                        },
                                    },
                                    "dolore": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            4530.94,
                                            1940.23,
                                        },
                                    },
                                },
                            },
                            OriginalPrice: sdk.Float32(4939.58),
                            Quantity: sdk.Int(205566),
                            StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumPreorder.ToPointer(),
                        },
                    },
                    PurchaseTransaction: &shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction{
                        Costs: map[string]float32{
                            "quibusdam": 4378.14,
                            "odit": 9749.9,
                            "vel": 3008.24,
                        },
                        CurrencyCode: sdk.String("quibusdam"),
                        ID: sdk.String("1db1f2c4-3106-461e-9634-9e1cf9e06e3a"),
                        Revenue: sdk.Float32(2503.98),
                        Taxes: map[string]float32{
                            "iusto": 247.53,
                        },
                    },
                    SearchQuery: sdk.String("doloremque"),
                },
                UserInfo: &shared.GoogleCloudRecommendationengineV1beta1UserInfo{
                    DirectUserRequest: sdk.Bool(false),
                    IPAddress: sdk.String("consequatur"),
                    UserAgent: sdk.String("officia"),
                    UserID: sdk.String("recusandae"),
                    VisitorID: sdk.String("ea"),
                },
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("perspiciatis"),
        Name: "Alfredo Wilkinson",
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1PredictResponse != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreate

Register an API key for use with predict method.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreate(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest: &shared.GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest{
            PredictionAPIKeyRegistration: &shared.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration{
                APIKey: sdk.String("corporis"),
            },
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("labore"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("vero"),
        Parent: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDelete

Unregister an apiKey from using for predict method.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDelete(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("soluta"),
        Name: "Wallace Pagac",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("quae"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsList

List the registered apiKeys for use with predict method.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsList(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(602229),
        PageToken: sdk.String("nulla"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quia"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Ets: sdk.String("id"),
        Fields: sdk.String("libero"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("officia"),
        Parent: "quos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("iusto"),
        URI: sdk.String("http://usable-bestseller.com"),
        UserEvent: sdk.String("totam"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest: &shared.GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest{
            ErrorsConfig: &shared.GoogleCloudRecommendationengineV1beta1ImportErrorsConfig{
                GcsPrefix: sdk.String("eligendi"),
            },
            InputConfig: &shared.GoogleCloudRecommendationengineV1beta1InputConfig{
                BigQuerySource: &shared.GoogleCloudRecommendationengineV1beta1BigQuerySource{
                    DataSchema: sdk.String("distinctio"),
                    DatasetID: sdk.String("voluptatem"),
                    GcsStagingDir: sdk.String("autem"),
                    ProjectID: sdk.String("esse"),
                    TableID: sdk.String("dolores"),
                },
                CatalogInlineSource: &shared.GoogleCloudRecommendationengineV1beta1CatalogInlineSource{
                    CatalogItems: []shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "facere",
                                        "corrupti",
                                        "molestiae",
                                    },
                                },
                            },
                            Description: sdk.String("provident"),
                            ID: sdk.String("eeb9665b-85ef-4bd0-abae-0be2d782259e"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "recusandae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "ut",
                                            "quidem",
                                            "quis",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "unde": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            9631.98,
                                            5855.93,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("fugit"),
                            LanguageCode: sdk.String("numquam"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("numquam"),
                                CanonicalProductURI: sdk.String("nesciunt"),
                                Costs: map[string]float32{
                                    "officia": 4918.92,
                                    "optio": 8989.61,
                                    "corporis": 1855.18,
                                    "expedita": 5326.69,
                                },
                                CurrencyCode: sdk.String("cupiditate"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(3262.69),
                                    OriginalPrice: sdk.Float32(8095.94),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(204072),
                                        URI: sdk.String("http://staid-honeydew.biz"),
                                        Width: sdk.Int(357347),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(298264),
                                        URI: sdk.String("https://woeful-reflection.com"),
                                        Width: sdk.Int(727547),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(1897.53),
                                    Min: sdk.Float32(2899.13),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumOutOfStock.ToPointer(),
                            },
                            Tags: []string{
                                "voluptas",
                                "quo",
                                "velit",
                            },
                            Title: sdk.String("Miss"),
                        },
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "est",
                                        "impedit",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "tempore",
                                        "vero",
                                        "odit",
                                        "repellat",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "nemo",
                                        "reprehenderit",
                                        "aperiam",
                                        "odio",
                                    },
                                },
                            },
                            Description: sdk.String("minima"),
                            ID: sdk.String("77929177-deac-4646-acb5-73409e3eb1e5"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "dolores": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "dicta",
                                            "consequuntur",
                                            "necessitatibus",
                                        },
                                    },
                                    "nobis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "ducimus",
                                        },
                                    },
                                    "maiores": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "quasi",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "pariatur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            5665.06,
                                            5782.1,
                                            3679.17,
                                        },
                                    },
                                    "aliquam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            9887.49,
                                            7573.64,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("sint"),
                            LanguageCode: sdk.String("enim"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("hic"),
                                CanonicalProductURI: sdk.String("animi"),
                                Costs: map[string]float32{
                                    "totam": 5646.67,
                                    "odio": 511.7,
                                    "saepe": 1040.78,
                                },
                                CurrencyCode: sdk.String("quos"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(6144.38),
                                    OriginalPrice: sdk.Float32(8268.62),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(725574),
                                        URI: sdk.String("http://antique-voyage.net"),
                                        Width: sdk.Int(741238),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(216870),
                                        URI: sdk.String("http://unsung-pear.com"),
                                        Width: sdk.Int(339756),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(333072),
                                        URI: sdk.String("https://burly-mussel.info"),
                                        Width: sdk.Int(756654),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(8200.23),
                                    Min: sdk.Float32(2514.64),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock.ToPointer(),
                            },
                            Tags: []string{
                                "sed",
                                "asperiores",
                                "veniam",
                                "consequuntur",
                            },
                            Title: sdk.String("Dr."),
                        },
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "pariatur",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "exercitationem",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "velit",
                                    },
                                },
                            },
                            Description: sdk.String("facilis"),
                            ID: sdk.String("b6f48b65-6bcd-4b35-bf2e-4b27537a8cd9"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "ducimus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "dicta",
                                        },
                                    },
                                    "error": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "vitae",
                                            "dignissimos",
                                            "esse",
                                            "fugiat",
                                        },
                                    },
                                    "ad": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "enim",
                                        },
                                    },
                                    "delectus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "dignissimos",
                                            "libero",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "ab": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            8791.74,
                                            9025.81,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("tempore"),
                            LanguageCode: sdk.String("veniam"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("eos"),
                                CanonicalProductURI: sdk.String("reiciendis"),
                                Costs: map[string]float32{
                                    "reprehenderit": 5063.12,
                                    "nemo": 9998.09,
                                    "quisquam": 1972.59,
                                    "nihil": 5349.08,
                                },
                                CurrencyCode: sdk.String("illo"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(2902.48),
                                    OriginalPrice: sdk.Float32(8288.41),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(790463),
                                        URI: sdk.String("https://male-trailpatrol.com"),
                                        Width: sdk.Int(805264),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(136357),
                                        URI: sdk.String("https://rural-mid-course.name"),
                                        Width: sdk.Int(922299),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(7000.45),
                                    Min: sdk.Float32(4923.61),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock.ToPointer(),
                            },
                            Tags: []string{
                                "similique",
                                "repellendus",
                                "iure",
                                "dolorem",
                            },
                            Title: sdk.String("Ms."),
                        },
                        shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
                            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "aut",
                                        "voluptatem",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "quae",
                                        "amet",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "praesentium",
                                        "quidem",
                                        "cum",
                                        "amet",
                                    },
                                },
                                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    Categories: []string{
                                        "dicta",
                                    },
                                },
                            },
                            Description: sdk.String("laudantium"),
                            ID: sdk.String("0f739ae9-e057-4eb8-89e2-810331f3981d"),
                            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    "minus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "voluptatem",
                                            "perferendis",
                                        },
                                    },
                                    "rerum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        Value: []string{
                                            "aperiam",
                                            "dignissimos",
                                        },
                                    },
                                },
                                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    "velit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            5886.39,
                                            2313.82,
                                            7532.4,
                                            4901.1,
                                        },
                                    },
                                    "consectetur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            6205,
                                            8398.07,
                                            6396.22,
                                        },
                                    },
                                    "amet": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            1339.49,
                                            7782.76,
                                            9310.77,
                                            8483.46,
                                        },
                                    },
                                    "laborum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        Value: []float32{
                                            8762.85,
                                            1853.48,
                                        },
                                    },
                                },
                            },
                            ItemGroupID: sdk.String("consectetur"),
                            LanguageCode: sdk.String("repellat"),
                            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                                AvailableQuantity: sdk.String("explicabo"),
                                CanonicalProductURI: sdk.String("explicabo"),
                                Costs: map[string]float32{
                                    "nihil": 2527,
                                    "ab": 727.54,
                                },
                                CurrencyCode: sdk.String("hic"),
                                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                                    DisplayPrice: sdk.Float32(6444.79),
                                    OriginalPrice: sdk.Float32(9649.25),
                                },
                                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(719389),
                                        URI: sdk.String("http://greedy-dumbwaiter.biz"),
                                        Width: sdk.Int(921193),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1Image{
                                        Height: sdk.Int(265303),
                                        URI: sdk.String("http://cold-swordfish.name"),
                                        Width: sdk.Int(44016),
                                    },
                                },
                                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                                    Max: sdk.Float32(1418.17),
                                    Min: sdk.Float32(5358.02),
                                },
                                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock.ToPointer(),
                            },
                            Tags: []string{
                                "similique",
                                "minima",
                            },
                            Title: sdk.String("Miss"),
                        },
                    },
                },
                GcsSource: &shared.GoogleCloudRecommendationengineV1beta1GcsSource{
                    InputUris: []string{
                        "sit",
                        "modi",
                    },
                    JSONSchema: sdk.String("eum"),
                },
                UserEventInlineSource: &shared.GoogleCloudRecommendationengineV1beta1UserEventInlineSource{
                    UserEvents: []shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                        shared.GoogleCloudRecommendationengineV1beta1UserEvent{
                            EventDetail: &shared.GoogleCloudRecommendationengineV1beta1EventDetail{
                                EventAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                    CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                        "dignissimos": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "nostrum",
                                                "molestiae",
                                                "veniam",
                                                "reiciendis",
                                            },
                                        },
                                        "ab": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "aut",
                                                "aut",
                                            },
                                        },
                                        "eveniet": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                            Value: []string{
                                                "commodi",
                                                "numquam",
                                            },
                                        },
                                    },
                                    NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                        "possimus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                2327.72,
                                                2006.37,
                                            },
                                        },
                                        "quaerat": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                7912.28,
                                                1226.62,
                                                7151.43,
                                                4813.75,
                                            },
                                        },
                                        "quas": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                            Value: []float32{
                                                7049.48,
                                            },
                                        },
                                    },
                                },
                                ExperimentIds: []string{
                                    "autem",
                                },
                                PageViewID: sdk.String("fuga"),
                                RecommendationToken: sdk.String("alias"),
                                ReferrerURI: sdk.String("rem"),
                                URI: sdk.String("http://multicolored-licensing.net"),
                            },
                            EventSource: shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumEventSourceUnspecified.ToPointer(),
                            EventTime: sdk.String("quae"),
                            EventType: sdk.String("eaque"),
                            ProductEventDetail: &shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail{
                                CartID: sdk.String("saepe"),
                                ListID: sdk.String("delectus"),
                                PageCategories: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                        Categories: []string{
                                            "officia",
                                            "sed",
                                            "voluptatem",
                                            "alias",
                                        },
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                        Categories: []string{
                                            "hic",
                                            "voluptatem",
                                            "incidunt",
                                            "qui",
                                        },
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                                        Categories: []string{
                                            "necessitatibus",
                                        },
                                    },
                                },
                                ProductDetails: []shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(126727),
                                        CurrencyCode: sdk.String("beatae"),
                                        DisplayPrice: sdk.Float32(3979.88),
                                        ID: sdk.String("4cf9ab83-66c7-423f-bda9-e06bee4825c1"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "eligendi": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "officiis",
                                                    },
                                                },
                                                "architecto": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "enim",
                                                    },
                                                },
                                                "optio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "perferendis",
                                                        "facilis",
                                                        "reiciendis",
                                                    },
                                                },
                                                "a": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "dicta",
                                                        "quos",
                                                        "ullam",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "modi": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        8074.19,
                                                        2659.05,
                                                        1635.58,
                                                        8281.47,
                                                    },
                                                },
                                                "vero": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        7737.11,
                                                        7833.97,
                                                        8838.19,
                                                        5189.9,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(9691.68),
                                        Quantity: sdk.Int(66074),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumOutOfStock.ToPointer(),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(472414),
                                        CurrencyCode: sdk.String("esse"),
                                        DisplayPrice: sdk.Float32(4382.56),
                                        ID: sdk.String("73e63562-a7b4-408f-85e3-d48fdaf313a1"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "nemo": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "possimus",
                                                        "unde",
                                                        "incidunt",
                                                        "explicabo",
                                                    },
                                                },
                                                "ipsam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "optio",
                                                        "alias",
                                                        "quidem",
                                                    },
                                                },
                                                "nesciunt": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "sapiente",
                                                        "consequuntur",
                                                    },
                                                },
                                                "veniam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "officia",
                                                        "sint",
                                                        "ut",
                                                        "numquam",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "adipisci": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        4483.86,
                                                        3296.51,
                                                        4031.47,
                                                    },
                                                },
                                                "minus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        1081.65,
                                                    },
                                                },
                                                "hic": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        7869.54,
                                                        2212.18,
                                                    },
                                                },
                                                "ducimus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        3269.03,
                                                        1024.46,
                                                        1814.76,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(3970.26),
                                        Quantity: sdk.Int(166289),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumInStock.ToPointer(),
                                    },
                                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                                        AvailableQuantity: sdk.Int(240490),
                                        CurrencyCode: sdk.String("praesentium"),
                                        DisplayPrice: sdk.Float32(2205.28),
                                        ID: sdk.String("5bbc05a2-3a45-4cef-85fd-e10a0ce2169e"),
                                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                "architecto": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "perferendis",
                                                    },
                                                },
                                                "veritatis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                                    Value: []string{
                                                        "cumque",
                                                        "iure",
                                                        "quibusdam",
                                                    },
                                                },
                                            },
                                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                "nemo": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        2467.72,
                                                        2991.53,
                                                        4935.91,
                                                        3884.04,
                                                    },
                                                },
                                                "sed": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        6169.41,
                                                        5881.52,
                                                    },
                                                },
                                                "cum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        7039.66,
                                                        6973.3,
                                                        9320.8,
                                                        3895.48,
                                                    },
                                                },
                                                "unde": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                                    Value: []float32{
                                                        5951.98,
                                                        9446.26,
                                                    },
                                                },
                                            },
                                        },
                                        OriginalPrice: sdk.Float32(7369.85),
                                        Quantity: sdk.Int(135548),
                                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumPreorder.ToPointer(),
                                    },
                                },
                                PurchaseTransaction: &shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction{
                                    Costs: map[string]float32{
                                        "incidunt": 9253.95,
                                        "quod": 6646.66,
                                        "saepe": 4230.54,
                                    },
                                    CurrencyCode: sdk.String("quo"),
                                    ID: sdk.String("3d5db3ad-ebd5-4dae-a4c5-06a8aa94c026"),
                                    Revenue: sdk.Float32(3013.09),
                                    Taxes: map[string]float32{
                                        "eligendi": 9421.85,
                                        "nostrum": 8882.65,
                                    },
                                },
                                SearchQuery: sdk.String("unde"),
                            },
                            UserInfo: &shared.GoogleCloudRecommendationengineV1beta1UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("nulla"),
                                UserAgent: sdk.String("error"),
                                UserID: sdk.String("mollitia"),
                                VisitorID: sdk.String("magnam"),
                            },
                        },
                    },
                },
            },
            RequestID: sdk.String("nostrum"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("facere"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("quasi"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsList

Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsList(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("consequatur"),
        Filter: sdk.String("eaque"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("similique"),
        PageSize: sdk.Int64(783274),
        PageToken: sdk.String("blanditiis"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("sed"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest: &shared.GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest{
            Filter: sdk.String("impedit"),
            Force: sdk.Bool(false),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("maiores"),
        Parent: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin

Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest: &shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest{
            UserEventRejoinScope: shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnumUnjoinedEvents.ToPointer(),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("esse"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("eligendi"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite

Writes a single user event.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite(ctx, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRecommendationengineV1beta1UserEvent: &shared.GoogleCloudRecommendationengineV1beta1UserEvent{
            EventDetail: &shared.GoogleCloudRecommendationengineV1beta1EventDetail{
                EventAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                    CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        "impedit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                            Value: []string{
                                "incidunt",
                            },
                        },
                    },
                    NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        "odit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                            Value: []float32{
                                7014.41,
                                46.54,
                            },
                        },
                    },
                },
                ExperimentIds: []string{
                    "vel",
                    "accusantium",
                    "id",
                },
                PageViewID: sdk.String("laboriosam"),
                RecommendationToken: sdk.String("ex"),
                ReferrerURI: sdk.String("quas"),
                URI: sdk.String("http://grouchy-ban.name"),
            },
            EventSource: shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnumAutoml.ToPointer(),
            EventTime: sdk.String("quam"),
            EventType: sdk.String("magni"),
            ProductEventDetail: &shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail{
                CartID: sdk.String("deserunt"),
                ListID: sdk.String("delectus"),
                PageCategories: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                        Categories: []string{
                            "nesciunt",
                        },
                    },
                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                        Categories: []string{
                            "quis",
                            "cupiditate",
                            "aliquam",
                            "excepturi",
                        },
                    },
                    shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                        Categories: []string{
                            "laudantium",
                            "velit",
                            "reiciendis",
                            "amet",
                        },
                    },
                },
                ProductDetails: []shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                        AvailableQuantity: sdk.Int(57470),
                        CurrencyCode: sdk.String("quisquam"),
                        DisplayPrice: sdk.Float32(9484.44),
                        ID: sdk.String("876ffb90-1c6e-4cbb-8e24-3cf789ffafed"),
                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                "corporis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    Value: []string{
                                        "officiis",
                                    },
                                },
                                "enim": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    Value: []string{
                                        "saepe",
                                        "eum",
                                        "repudiandae",
                                    },
                                },
                                "accusantium": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    Value: []string{
                                        "impedit",
                                        "quasi",
                                        "blanditiis",
                                    },
                                },
                            },
                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                "quisquam": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    Value: []float32{
                                        7480.23,
                                    },
                                },
                                "natus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    Value: []float32{
                                        1543.89,
                                        3006.51,
                                        4408.47,
                                        8007.99,
                                    },
                                },
                            },
                        },
                        OriginalPrice: sdk.Float32(5524.4),
                        Quantity: sdk.Int(548846),
                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumInStock.ToPointer(),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1ProductDetail{
                        AvailableQuantity: sdk.Int(473326),
                        CurrencyCode: sdk.String("amet"),
                        DisplayPrice: sdk.Float32(6751.26),
                        ID: sdk.String("40e1942f-32e5-4505-9756-f5d56d0bd0af"),
                        ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                            CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                "possimus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                                    Value: []string{
                                        "repudiandae",
                                        "architecto",
                                        "adipisci",
                                        "pariatur",
                                    },
                                },
                            },
                            NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                "dolore": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    Value: []float32{
                                        4353.53,
                                        1270.87,
                                        7954.57,
                                        7466.88,
                                    },
                                },
                                "dolorum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    Value: []float32{
                                        9378.65,
                                    },
                                },
                                "praesentium": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                                    Value: []float32{
                                        2524.73,
                                        978.1,
                                        6490.32,
                                    },
                                },
                            },
                        },
                        OriginalPrice: sdk.Float32(8843.61),
                        Quantity: sdk.Int(687589),
                        StockState: shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumPreorder.ToPointer(),
                    },
                },
                PurchaseTransaction: &shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction{
                    Costs: map[string]float32{
                        "expedita": 5492.37,
                    },
                    CurrencyCode: sdk.String("eaque"),
                    ID: sdk.String("a6924d3b-2ecf-4cc8-b895-010f5dd3d6fa"),
                    Revenue: sdk.Float32(651.21),
                    Taxes: map[string]float32{
                        "aperiam": 2512,
                        "voluptates": 3240.52,
                        "aliquam": 7881.65,
                    },
                },
                SearchQuery: sdk.String("quas"),
            },
            UserInfo: &shared.GoogleCloudRecommendationengineV1beta1UserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("consequuntur"),
                UserAgent: sdk.String("maiores"),
                UserID: sdk.String("inventore"),
                VisitorID: sdk.String("aliquid"),
            },
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("cumque"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1UserEvent != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsList

Lists all the catalog configurations associated with the project.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsList(ctx, operations.RecommendationengineProjectsLocationsCatalogsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("sit"),
        PageSize: sdk.Int64(703189),
        PageToken: sdk.String("veritatis"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("totam"),
    }, operations.RecommendationengineProjectsLocationsCatalogsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsOperationsGet(ctx, operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("animi"),
        Name: "Mrs. Mary Pfannerstill",
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RecommendationengineProjectsLocationsCatalogsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsOperationsList(ctx, operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("illo"),
        Filter: sdk.String("nihil"),
        Key: sdk.String("inventore"),
        Name: "Roberto Boyle MD",
        OauthToken: sdk.String("facere"),
        PageSize: sdk.Int64(707983),
        PageToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("labore"),
    }, operations.RecommendationengineProjectsLocationsCatalogsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
