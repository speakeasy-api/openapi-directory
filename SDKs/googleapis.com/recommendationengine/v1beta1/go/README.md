# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/recommendationengine/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                        "quibusdam",
                        "unde",
                        "nulla",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "illum",
                        "vel",
                        "error",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                },
            },
            Description: sdk.String("debitis"),
            ID: sdk.String("0f467cc8-796e-4d15-9a05-dfc2ddf7cc78"),
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "dolorum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "nam",
                        },
                    },
                    "officia": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "fugit",
                            "deleniti",
                            "hic",
                        },
                    },
                    "optio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "beatae",
                            "commodi",
                            "molestiae",
                        },
                    },
                    "modi": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "impedit",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "esse": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            5684.34,
                        },
                    },
                    "aspernatur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            3241.41,
                        },
                    },
                    "natus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            6120.96,
                        },
                    },
                },
            },
            ItemGroupID: sdk.String("dolor"),
            LanguageCode: sdk.String("natus"),
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: sdk.String("laboriosam"),
                CanonicalProductURI: sdk.String("hic"),
                Costs: map[string]float32{
                    "fuga": 4499.5,
                    "corporis": 6130.64,
                    "iure": 9023.49,
                    "quidem": 992.8,
                },
                CurrencyCode: sdk.String("ipsa"),
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: sdk.Float32(9698.1),
                    OriginalPrice: sdk.Float32(6667.67),
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(670638),
                        URI: sdk.String("http://doting-footage.com"),
                        Width: sdk.Int(750686),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(315428),
                        URI: sdk.String("https://gummy-expedition.name"),
                        Width: sdk.Int(38425),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(438601),
                        URI: sdk.String("https://wrathful-violet.com"),
                        Width: sdk.Int(652790),
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: sdk.Float32(2088.76),
                    Min: sdk.Float32(6350.59),
                },
                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumStockStateUnspecified.ToPointer(),
            },
            Tags: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
            Title: sdk.String("Ms."),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemscreate) - Creates a catalog item.
* [RecommendationengineProjectsLocationsCatalogsCatalogItemsImport](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemsimport) - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* [RecommendationengineProjectsLocationsCatalogsCatalogItemsList](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemslist) - Gets a list of catalog items.
* [RecommendationengineProjectsLocationsCatalogsCatalogItemsPatch](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemspatch) - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* [RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresplacementspredict) - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* [RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreate](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate) - Register an API key for use with predict method.
* [RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDelete](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete) - Unregister an apiKey from using for predict method.
* [RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsList](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist) - List the registered apiKeys for use with predict method.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsList](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventslist) - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventsrejoin) - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* [RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventswrite) - Writes a single user event.
* [RecommendationengineProjectsLocationsCatalogsList](docs/projects/README.md#recommendationengineprojectslocationscatalogslist) - Lists all the catalog configurations associated with the project.
* [RecommendationengineProjectsLocationsCatalogsOperationsGet](docs/projects/README.md#recommendationengineprojectslocationscatalogsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [RecommendationengineProjectsLocationsCatalogsOperationsList](docs/projects/README.md#recommendationengineprojectslocationscatalogsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
