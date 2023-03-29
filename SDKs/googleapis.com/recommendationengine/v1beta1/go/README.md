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
        Security: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "ullam",
                        "saepe",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "sapiente",
                    },
                },
            },
            Description: "enim",
            ID: "eum",
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "autem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "non",
                            "deleniti",
                            "similique",
                            "reprehenderit",
                        },
                    },
                    "molestiae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "quasi",
                            "laboriosam",
                            "dicta",
                            "est",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "consequatur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            9571.56,
                            7781.57,
                            1403.5,
                            8700.13,
                        },
                    },
                },
            },
            ItemGroupID: "accusamus",
            LanguageCode: "reiciendis",
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: "rem",
                CanonicalProductURI: "quibusdam",
                Costs: map[string]float32{
                    "praesentium": 5204.78,
                    "dolor": 6788.8,
                    "sed": 7206.33,
                    "rerum": 5820.2,
                },
                CurrencyCode: "qui",
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: 5373.73,
                    OriginalPrice: 9446.69,
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 521848,
                        URI: "http://harry.info",
                        Width: 264555,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 186332,
                        URI: "https://myles.info",
                        Width: 216550,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 568434,
                        URI: "http://aiden.biz",
                        Width: 617636,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 149675,
                        URI: "https://dameon.name",
                        Width: 386489,
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: 9437.49,
                    Min: 9025.99,
                },
                StockState: "PREORDER",
            },
            Tags: []string{
                "ea",
                "laborum",
            },
            Title: "District Interactions Developer",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate(ctx, req)
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
## SDK Available Operations


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
* `RecommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
