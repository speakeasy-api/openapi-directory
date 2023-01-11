# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest req = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest() {{
                security = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams() {{
                    parent = "porro";
                }};
                queryParams = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "tempora";
                    alt = "proto";
                    callback = "consectetur";
                    fields = "ipsam";
                    key = "deserunt";
                    oauthToken = "temporibus";
                    prettyPrint = false;
                    quotaUser = "deleniti";
                    uploadType = "sit";
                    uploadProtocol = "corporis";
                }};
                request = new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                    categoryHierarchies = new openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]() {{
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]() {{
                                add("vel"),
                                add("eligendi"),
                                add("blanditiis"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]() {{
                                add("incidunt"),
                                add("voluptatem"),
                                add("eos"),
                            }};
                        }}),
                    }};
                    description = "ratione";
                    id = "qui";
                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                        categoricalFeatures = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                            put("ad", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]() {{
                                    add("deleniti"),
                                    add("ex"),
                                    add("molestiae"),
                                }};
                            }});
                            put("excepturi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]() {{
                                    add("nam"),
                                    add("possimus"),
                                }};
                            }});
                            put("nam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]() {{
                                    add("eos"),
                                    add("voluptas"),
                                    add("magnam"),
                                }};
                            }});
                        }};
                        numericalFeatures = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                            put("tempora", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]() {{
                                    add(88.099998),
                                }};
                            }});
                            put("culpa", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]() {{
                                    add(30.100000),
                                }};
                            }});
                        }};
                    }};
                    itemGroupId = "enim";
                    languageCode = "sint";
                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                        availableQuantity = "et";
                        canonicalProductUri = "totam";
                        costs = new java.util.HashMap<String, Float>() {{
                            put("sunt", 90.099998);
                            put("et", 36.099998);
                        }};
                        currencyCode = "possimus";
                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                            displayPrice = 40.099998;
                            originalPrice = 39.099998;
                        }};
                        images = new openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1Image[]() {{
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 8972749919255705783;
                                uri = "vel";
                                width = 5664740894451141437;
                            }}),
                        }};
                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                            max = 92.099998;
                            min = 51.099998;
                        }};
                        stockState = "OUT_OF_STOCK";
                    }};
                    tags = new String[]() {{
                        add("a"),
                        add("distinctio"),
                        add("cum"),
                    }};
                    title = "exercitationem";
                }};
            }};

            RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req);

            if (res.googleCloudRecommendationengineV1beta1CatalogItem.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `recommendationengineProjectsLocationsCatalogsCatalogItemsCreate` - Creates a catalog item.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsImport` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsList` - Gets a list of catalog items.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsPatch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate` - Register an API key for use with predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete` - Unregister an apiKey from using for predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList` - List the registered apiKeys for use with predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite` - Writes a single user event.
* `recommendationengineProjectsLocationsCatalogsList` - Lists all the catalog configurations associated with the project.
* `recommendationengineProjectsLocationsCatalogsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `recommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
