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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest{
        DollarXgafv: "2",
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
            Description: "debitis",
            ID: "ipsa",
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "tempora": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "molestiae",
                            "minus",
                        },
                    },
                    "placeat": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                    },
                    "recusandae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "ab",
                            "quis",
                            "veritatis",
                            "deserunt",
                        },
                    },
                    "perferendis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "repellendus",
                            "sapiente",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "odit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            8700.88,
                            9786.19,
                            4736.08,
                            7991.59,
                        },
                    },
                    "quod": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            5204.78,
                            7805.29,
                        },
                    },
                    "dolorum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            7206.33,
                        },
                    },
                    "officia": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            1433.53,
                            5373.73,
                            9446.69,
                        },
                    },
                },
            },
            ItemGroupID: "optio",
            LanguageCode: "totam",
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: "beatae",
                CanonicalProductURI: "commodi",
                Costs: map[string]float32{
                    "modi": 1863.32,
                    "impedit": 7369.18,
                },
                CurrencyCode: "esse",
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: 2165.5,
                    OriginalPrice: 5684.34,
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 18789,
                        URI: "http://perky-charset.name",
                        Width: 222321,
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: 6169.34,
                    Min: 3864.89,
                },
                StockState: "BACKORDER",
            },
            Tags: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
            Title: "Ms.",
        },
        AccessToken: "saepe",
        Alt: "proto",
        Callback: "architecto",
        Fields: "ipsa",
        Key: "reiciendis",
        OauthToken: "est",
        Parent: "mollitia",
        PrettyPrint: false,
        QuotaUser: "laborum",
        UploadType: "dolores",
        UploadProtocol: "dolorem",
    }

    ctx := context.Background()
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate(ctx, req, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity{
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


### Projects

* `RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate` - Creates a catalog item.
* `RecommendationengineProjectsLocationsCatalogsCatalogItemsImport` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `RecommendationengineProjectsLocationsCatalogsCatalogItemsList` - Gets a list of catalog items.
* `RecommendationengineProjectsLocationsCatalogsCatalogItemsPatch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreate` - Register an API key for use with predict method.
* `RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDelete` - Unregister an apiKey from using for predict method.
* `RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsList` - List the registered apiKeys for use with predict method.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsList` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite` - Writes a single user event.
* `RecommendationengineProjectsLocationsCatalogsList` - Lists all the catalog configurations associated with the project.
* `RecommendationengineProjectsLocationsCatalogsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `RecommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
