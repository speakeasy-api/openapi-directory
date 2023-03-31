# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMap;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("magnam"),
                                add("debitis"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("delectus"),
                            }};
                        }}),
                    }};
                    description = "tempora";
                    id = "suscipit";
                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                            put("minus", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                            }});
                            put("recusandae", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                            }});
                        }};
                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                            put("ipsam", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(9571.56),
                                    add(7781.57),
                                    add(1403.5),
                                    add(8700.13),
                                }};
                            }});
                        }};
                    }};
                    itemGroupId = "at";
                    languageCode = "maiores";
                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                        availableQuantity = "molestiae";
                        canonicalProductUri = "quod";
                        costs = new java.util.HashMap<String, Float>() {{
                            put("esse", 5204.78);
                            put("porro", 6788.8);
                            put("dicta", 7206.33);
                            put("officia", 5820.2);
                        }};
                        currencyCode = "fugit";
                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                            displayPrice = 5373.73;
                            originalPrice = 9446.69;
                        }};
                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 521848;
                                uri = "http://immense-investor.biz";
                                width = 186332;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 774234;
                                uri = "https://jolly-cowboy.name";
                                width = 135218;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 18789;
                                uri = "http://perky-charset.name";
                                width = 222321;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 616934;
                                uri = "http://wary-thistle.net";
                                width = 449950;
                            }}),
                        }};
                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                            max = 3595.08;
                            min = 6130.64;
                        }};
                        stockState = "OUT_OF_STOCK";
                    }};
                    tags = new String[]{{
                        add("quidem"),
                        add("architecto"),
                        add("ipsa"),
                        add("reiciendis"),
                    }};
                    title = "Miss";
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
* `recommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
