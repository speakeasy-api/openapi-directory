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
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMap;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest req = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommendationengineV1beta1CatalogItem = new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("unde"),
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("error"),
                                add("deserunt"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                        }}),
                    }};
                    description = "debitis";
                    id = "0f467cc8-796e-4d15-9a05-dfc2ddf7cc78";
                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                            put("dolorum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("nam"),
                                }};
                            }});
                            put("officia", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                            }});
                            put("optio", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                            }});
                            put("modi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("impedit"),
                                }};
                            }});
                        }};
                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                            put("esse", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(5684.34),
                                }};
                            }});
                            put("aspernatur", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(3241.41),
                                }};
                            }});
                            put("natus", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(6120.96),
                                }};
                            }});
                        }};
                    }};;
                    itemGroupId = "dolor";
                    languageCode = "natus";
                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                        availableQuantity = "laboriosam";
                        canonicalProductUri = "hic";
                        costs = new java.util.HashMap<String, Float>() {{
                            put("fuga", 4499.5);
                            put("corporis", 6130.64);
                            put("iure", 9023.49);
                            put("quidem", 992.8);
                        }};
                        currencyCode = "ipsa";
                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                            displayPrice = 9698.1;
                            originalPrice = 6667.67;
                        }};;
                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 670638;
                                uri = "http://doting-footage.com";
                                width = 750686;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 315428;
                                uri = "https://gummy-expedition.name";
                                width = 38425;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 438601;
                                uri = "https://wrathful-violet.com";
                                width = 652790;
                            }}),
                        }};
                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                            max = 2088.76;
                            min = 6350.59;
                        }};;
                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.STOCK_STATE_UNSPECIFIED;
                    }};;
                    tags = new String[]{{
                        add("mollitia"),
                        add("occaecati"),
                        add("numquam"),
                        add("commodi"),
                    }};
                    title = "Ms.";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "animi";
                uploadProtocol = "enim";
            }};            

            RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req, new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1CatalogItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [recommendationengineProjectsLocationsCatalogsCatalogItemsCreate](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemscreate) - Creates a catalog item.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsImport](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemsimport) - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsList](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemslist) - Gets a list of catalog items.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsPatch](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemspatch) - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* [recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresplacementspredict) - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate) - Register an API key for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete) - Unregister an apiKey from using for predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist) - List the registered apiKeys for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventslist) - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventsrejoin) - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventswrite) - Writes a single user event.
* [recommendationengineProjectsLocationsCatalogsList](docs/projects/README.md#recommendationengineprojectslocationscatalogslist) - Lists all the catalog configurations associated with the project.
* [recommendationengineProjectsLocationsCatalogsOperationsGet](docs/projects/README.md#recommendationengineprojectslocationscatalogsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [recommendationengineProjectsLocationsCatalogsOperationsList](docs/projects/README.md#recommendationengineprojectslocationscatalogsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
