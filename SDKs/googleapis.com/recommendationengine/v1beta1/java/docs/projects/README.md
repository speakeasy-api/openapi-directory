# projects

### Available Operations

* [recommendationengineProjectsLocationsCatalogsCatalogItemsCreate](#recommendationengineprojectslocationscatalogscatalogitemscreate) - Creates a catalog item.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsImport](#recommendationengineprojectslocationscatalogscatalogitemsimport) - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsList](#recommendationengineprojectslocationscatalogscatalogitemslist) - Gets a list of catalog items.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsPatch](#recommendationengineprojectslocationscatalogscatalogitemspatch) - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* [recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict](#recommendationengineprojectslocationscatalogseventstoresplacementspredict) - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate) - Register an API key for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete) - Unregister an apiKey from using for predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist) - List the registered apiKeys for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect](#recommendationengineprojectslocationscatalogseventstoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport](#recommendationengineprojectslocationscatalogseventstoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList](#recommendationengineprojectslocationscatalogseventstoresusereventslist) - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge](#recommendationengineprojectslocationscatalogseventstoresusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin](#recommendationengineprojectslocationscatalogseventstoresusereventsrejoin) - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite](#recommendationengineprojectslocationscatalogseventstoresusereventswrite) - Writes a single user event.
* [recommendationengineProjectsLocationsCatalogsList](#recommendationengineprojectslocationscatalogslist) - Lists all the catalog configurations associated with the project.
* [recommendationengineProjectsLocationsCatalogsOperationsGet](#recommendationengineprojectslocationscatalogsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [recommendationengineProjectsLocationsCatalogsOperationsList](#recommendationengineprojectslocationscatalogsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## recommendationengineProjectsLocationsCatalogsCatalogItemsCreate

Creates a catalog item.

### Example Usage

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

            RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest req = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommendationengineV1beta1CatalogItem = new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("possimus"),
                                add("aut"),
                                add("quasi"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("temporibus"),
                                add("laborum"),
                                add("quasi"),
                            }};
                        }}),
                    }};
                    description = "reiciendis";
                    id = "fe78f097-b007-44f1-9471-b5e6e13b99d4";
                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                            put("rem", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("quasi"),
                                    add("repudiandae"),
                                    add("sint"),
                                    add("veritatis"),
                                }};
                            }});
                            put("itaque", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("enim"),
                                    add("consequatur"),
                                }};
                            }});
                            put("est", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("explicabo"),
                                    add("deserunt"),
                                    add("distinctio"),
                                    add("quibusdam"),
                                }};
                            }});
                        }};
                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                            put("modi", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(3978.21),
                                }};
                            }});
                            put("cupiditate", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(201.07),
                                    add(1649.4),
                                    add(8289.4),
                                }};
                            }});
                        }};
                    }};;
                    itemGroupId = "ipsam";
                    languageCode = "alias";
                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                        availableQuantity = "fugit";
                        canonicalProductUri = "dolorum";
                        costs = new java.util.HashMap<String, Float>() {{
                            put("tempora", 7037.37);
                            put("tempore", 2884.76);
                            put("delectus", 4332.88);
                        }};
                        currencyCode = "non";
                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                            displayPrice = 7561.07;
                            originalPrice = 5761.57;
                        }};;
                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 592042;
                                uri = "https://nonstop-pate.biz";
                                width = 891555;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 952749;
                                uri = "https://intrepid-ikebana.org";
                                width = 978571;
                            }}),
                        }};
                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                            max = 6994.79;
                            min = 1162.02;
                        }};;
                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.IN_STOCK;
                    }};;
                    tags = new String[]{{
                        add("facere"),
                        add("ea"),
                        add("aliquid"),
                        add("laborum"),
                    }};
                    title = "Dr.";
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "delectus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req, new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity("blanditiis", "deleniti") {{
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

## recommendationengineProjectsLocationsCatalogsCatalogItemsImport

Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1EventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMap;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest req = new RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest = new GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest() {{
                    errorsConfig = new GoogleCloudRecommendationengineV1beta1ImportErrorsConfig() {{
                        gcsPrefix = "deserunt";
                    }};;
                    inputConfig = new GoogleCloudRecommendationengineV1beta1InputConfig() {{
                        bigQuerySource = new GoogleCloudRecommendationengineV1beta1BigQuerySource() {{
                            dataSchema = "nisi";
                            datasetId = "vel";
                            gcsStagingDir = "natus";
                            projectId = "omnis";
                            tableId = "molestiae";
                        }};;
                        catalogInlineSource = new GoogleCloudRecommendationengineV1beta1CatalogInlineSource() {{
                            catalogItems = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem[]{{
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("distinctio"),
                                                add("id"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("labore"),
                                                add("suscipit"),
                                            }};
                                        }}),
                                    }};
                                    description = "natus";
                                    id = "b6e21419-5989-40af-a563-e2516fe4c8b7";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("architecto", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("ullam"),
                                                    add("expedita"),
                                                    add("nihil"),
                                                    add("repellat"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("sed", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(8681.26),
                                                    add(375.59),
                                                    add(1624.93),
                                                    add(5083.15),
                                                }};
                                            }});
                                            put("natus", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(1238.2),
                                                }};
                                            }});
                                            put("quo", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(8649.34),
                                                    add(8073.19),
                                                    add(4113.97),
                                                    add(5691.01),
                                                }};
                                            }});
                                            put("odit", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(332.22),
                                                    add(691.67),
                                                }};
                                            }});
                                        }};
                                    }};
                                    itemGroupId = "maiores";
                                    languageCode = "quidem";
                                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                                        availableQuantity = "ipsam";
                                        canonicalProductUri = "voluptate";
                                        costs = new java.util.HashMap<String, Float>() {{
                                            put("nam", 505.88);
                                            put("pariatur", 3654.96);
                                        }};
                                        currencyCode = "voluptatibus";
                                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                                            displayPrice = 166.27;
                                            originalPrice = 8558.04;
                                        }};
                                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 11714;
                                                uri = "https://grubby-urge.net";
                                                width = 749999;
                                            }}),
                                        }};
                                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                                            max = 1716.29;
                                            min = 3394.04;
                                        }};
                                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.OUT_OF_STOCK;
                                    }};
                                    tags = new String[]{{
                                        add("eaque"),
                                        add("quis"),
                                    }};
                                    title = "Mr.";
                                }}),
                            }};
                        }};;
                        gcsSource = new GoogleCloudRecommendationengineV1beta1GcsSource() {{
                            inputUris = new String[]{{
                                add("perferendis"),
                            }};
                            jsonSchema = "dolores";
                        }};;
                        userEventInlineSource = new GoogleCloudRecommendationengineV1beta1UserEventInlineSource() {{
                            userEvents = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent[]{{
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("dolor", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("nostrum"),
                                                        add("hic"),
                                                        add("recusandae"),
                                                        add("omnis"),
                                                    }};
                                                }});
                                                put("facilis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("voluptatem"),
                                                        add("porro"),
                                                        add("consequuntur"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("error", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(5772.29),
                                                    }};
                                                }});
                                                put("rerum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(9923.97),
                                                    }};
                                                }});
                                                put("earum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(6139.66),
                                                        add(6790.91),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("pariatur"),
                                            add("provident"),
                                            add("nobis"),
                                        }};
                                        pageViewId = "libero";
                                        recommendationToken = "delectus";
                                        referrerUri = "quaerat";
                                        uri = "https://hurtful-counsel.biz";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.EVENT_SOURCE_UNSPECIFIED;
                                    eventTime = "qui";
                                    eventType = "ipsum";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "hic";
                                        listId = "excepturi";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("dignissimos"),
                                                    add("reiciendis"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("dolorum"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("veritatis"),
                                                    add("ipsa"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 434417;
                                                currencyCode = "odio";
                                                displayPrice = 3117.96;
                                                id = "ebf69280-d1ba-477a-89eb-f737ae4203ce";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("saepe", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("deserunt"),
                                                                add("provident"),
                                                            }};
                                                        }});
                                                        put("minima", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("totam"),
                                                                add("similique"),
                                                                add("alias"),
                                                                add("at"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("tempora", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(7980.47),
                                                                add(8853.38),
                                                            }};
                                                        }});
                                                        put("qui", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9527.92),
                                                                add(4561.3),
                                                                add(6874.88),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 4834.09;
                                                quantity = 215507;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("amet", 7308.56);
                                                put("accusamus", 2539.41);
                                                put("enim", 2133.12);
                                                put("sapiente", 5182.01);
                                            }};
                                            currencyCode = "nihil";
                                            id = "0b326b5a-7342-49cd-b1a8-422bb679d232";
                                            revenue = 1649.59;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("sunt", 3556.13);
                                                put("nam", 9404.32);
                                            }};
                                        }};
                                        searchQuery = "voluptatem";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "cumque";
                                        userAgent = "soluta";
                                        userId = "nobis";
                                        visitorId = "et";
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("ipsum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("nobis"),
                                                    }};
                                                }});
                                                put("quos", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("cupiditate"),
                                                        add("aperiam"),
                                                        add("delectus"),
                                                    }};
                                                }});
                                                put("dolorem", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("labore"),
                                                        add("adipisci"),
                                                    }};
                                                }});
                                                put("dolorum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("quae"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("quas", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(92.4),
                                                        add(6699.17),
                                                        add(8330.38),
                                                        add(7851.53),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("ut"),
                                            add("facilis"),
                                            add("cupiditate"),
                                            add("qui"),
                                        }};
                                        pageViewId = "quae";
                                        recommendationToken = "laudantium";
                                        referrerUri = "odio";
                                        uri = "https://wobbly-sensitivity.org";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.ECOMMERCE;
                                    eventTime = "quis";
                                    eventType = "ipsum";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "delectus";
                                        listId = "voluptate";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("tenetur"),
                                                    add("dignissimos"),
                                                    add("hic"),
                                                    add("distinctio"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 486160;
                                                currencyCode = "similique";
                                                displayPrice = 7085.48;
                                                id = "d74dd39c-0f5d-42cf-b7c7-0a45626d4368";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("dolor", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("quasi"),
                                                                add("ex"),
                                                                add("nulla"),
                                                                add("excepturi"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("nostrum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(7888.73),
                                                                add(9065.56),
                                                                add(4113.72),
                                                                add(7740.48),
                                                            }};
                                                        }});
                                                        put("corporis", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(3994.99),
                                                                add(811.01),
                                                            }};
                                                        }});
                                                        put("magnam", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(7752.2),
                                                                add(2322.34),
                                                            }};
                                                        }});
                                                        put("recusandae", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(3253.1),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 534.27;
                                                quantity = 952871;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 13948;
                                                currencyCode = "aut";
                                                displayPrice = 5334.66;
                                                id = "c42e141a-ac36-46c8-9d6b-144290747477";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("fuga", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("quidem"),
                                                                add("fugiat"),
                                                            }};
                                                        }});
                                                        put("ut", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("suscipit"),
                                                                add("assumenda"),
                                                            }};
                                                        }});
                                                        put("eos", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("quisquam"),
                                                                add("veritatis"),
                                                                add("ipsa"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("quidem", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(7786.96),
                                                            }};
                                                        }});
                                                        put("illum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(6813.59),
                                                                add(2594.22),
                                                                add(1783.67),
                                                                add(3738.13),
                                                            }};
                                                        }});
                                                        put("ab", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(96.88),
                                                                add(2728.22),
                                                                add(8920.5),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 3708.53;
                                                quantity = 133465;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.STOCK_STATE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 779192;
                                                currencyCode = "esse";
                                                displayPrice = 9251.64;
                                                id = "0bc7178e-4796-4f2a-b0c6-88282aa48256";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("sapiente", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("ratione"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("saepe", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(5438.06),
                                                                add(922.6),
                                                                add(4569.11),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 9105.45;
                                                quantity = 882042;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.STOCK_STATE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 458604;
                                                currencyCode = "quod";
                                                displayPrice = 7241.68;
                                                id = "e61e6b7b-95bc-40ab-bc20-c4f3789fd871";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("error", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("pariatur"),
                                                                add("possimus"),
                                                                add("quia"),
                                                            }};
                                                        }});
                                                        put("eveniet", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("facere"),
                                                                add("veritatis"),
                                                                add("consequuntur"),
                                                                add("quasi"),
                                                            }};
                                                        }});
                                                        put("similique", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("aliquid"),
                                                                add("tenetur"),
                                                                add("quae"),
                                                            }};
                                                        }});
                                                        put("earum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("in"),
                                                                add("eius"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("illum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(333.04),
                                                                add(3069.86),
                                                                add(9589.83),
                                                            }};
                                                        }});
                                                        put("dicta", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(4438.79),
                                                                add(3567.07),
                                                            }};
                                                        }});
                                                        put("nisi", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(5318.49),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 1852.32;
                                                quantity = 845358;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.OUT_OF_STOCK;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("itaque", 6802.7);
                                                put("architecto", 6091.78);
                                                put("tenetur", 984.78);
                                            }};
                                            currencyCode = "at";
                                            id = "17051339-d080-486a-9840-394c26071f93";
                                            revenue = 9742.57;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("asperiores", 456.59);
                                                put("ea", 3100.67);
                                            }};
                                        }};
                                        searchQuery = "consequuntur";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "repellendus";
                                        userAgent = "officia";
                                        userId = "maxime";
                                        visitorId = "dignissimos";
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("asperiores", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("quae"),
                                                        add("quaerat"),
                                                    }};
                                                }});
                                                put("porro", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("labore"),
                                                        add("ab"),
                                                        add("adipisci"),
                                                        add("fuga"),
                                                    }};
                                                }});
                                                put("id", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("velit"),
                                                        add("culpa"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("recusandae", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(8539.4),
                                                        add(4240.89),
                                                        add(4976.78),
                                                    }};
                                                }});
                                                put("quos", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(2870.51),
                                                        add(8225.6),
                                                    }};
                                                }});
                                                put("facilis", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(4148.57),
                                                        add(4471.44),
                                                        add(3605.45),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("assumenda"),
                                            add("nemo"),
                                            add("recusandae"),
                                            add("aliquid"),
                                        }};
                                        pageViewId = "aperiam";
                                        recommendationToken = "cum";
                                        referrerUri = "consectetur";
                                        uri = "http://gray-twig.net";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.AUTOML;
                                    eventTime = "doloribus";
                                    eventType = "suscipit";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "reiciendis";
                                        listId = "quidem";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("dolore"),
                                                    add("sunt"),
                                                    add("asperiores"),
                                                    add("adipisci"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("amet"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("dignissimos"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("debitis"),
                                                    add("consectetur"),
                                                    add("corporis"),
                                                    add("harum"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 58356;
                                                currencyCode = "voluptates";
                                                displayPrice = 7307.09;
                                                id = "1ea42655-5ba3-4c28-b44e-d53b88f3a8d8";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("exercitationem", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("sit"),
                                                                add("rerum"),
                                                                add("sed"),
                                                                add("reiciendis"),
                                                            }};
                                                        }});
                                                        put("explicabo", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("facilis"),
                                                                add("voluptate"),
                                                                add("expedita"),
                                                                add("ab"),
                                                            }};
                                                        }});
                                                        put("iste", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("laborum"),
                                                                add("sed"),
                                                            }};
                                                        }});
                                                        put("in", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("quidem"),
                                                                add("explicabo"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("unde", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(3828.08),
                                                            }};
                                                        }});
                                                        put("sapiente", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(724.34),
                                                                add(9677.95),
                                                                add(193),
                                                                add(5468.85),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 9795.74;
                                                quantity = 274823;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.STOCK_STATE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 592231;
                                                currencyCode = "eius";
                                                displayPrice = 8967.62;
                                                id = "3698f447-f603-4e8b-845e-80ca55efd20e";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("veniam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("officiis"),
                                                                add("beatae"),
                                                            }};
                                                        }});
                                                        put("laudantium", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("praesentium"),
                                                                add("cum"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("dolorum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(6223.85),
                                                                add(9447.08),
                                                                add(7105.29),
                                                            }};
                                                        }});
                                                        put("debitis", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(6771.15),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 3416.98;
                                                quantity = 639028;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("accusamus", 2726.83);
                                                put("atque", 1482.68);
                                                put("ut", 8563.03);
                                            }};
                                            currencyCode = "voluptatem";
                                            id = "ab407508-8e51-4862-865e-904f3b1194b8";
                                            revenue = 6719.57;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("tenetur", 3888.67);
                                                put("alias", 2270.84);
                                                put("deserunt", 4548.6);
                                            }};
                                        }};
                                        searchQuery = "unde";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "reiciendis";
                                        userAgent = "provident";
                                        userId = "repellendus";
                                        visitorId = "delectus";
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("perferendis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("quidem"),
                                                        add("reprehenderit"),
                                                        add("facere"),
                                                    }};
                                                }});
                                                put("fuga", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("mollitia"),
                                                        add("veniam"),
                                                        add("voluptatem"),
                                                    }};
                                                }});
                                                put("quisquam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("quasi"),
                                                        add("atque"),
                                                        add("reprehenderit"),
                                                        add("asperiores"),
                                                    }};
                                                }});
                                                put("totam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("quidem"),
                                                        add("maxime"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("esse", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(8268.25),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("atque"),
                                            add("error"),
                                        }};
                                        pageViewId = "officiis";
                                        recommendationToken = "officiis";
                                        referrerUri = "accusamus";
                                        uri = "https://giant-carrot.info";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.BATCH_UPLOAD;
                                    eventTime = "corrupti";
                                    eventType = "at";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "error";
                                        listId = "blanditiis";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("atque"),
                                                    add("atque"),
                                                    add("sunt"),
                                                    add("recusandae"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("repellendus"),
                                                    add("labore"),
                                                    add("reiciendis"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 919783;
                                                currencyCode = "dicta";
                                                displayPrice = 360.33;
                                                id = "12563f94-e29e-4973-a922-a57a15be3e06";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("totam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("molestiae"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("qui", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(4347.61),
                                                                add(8980.63),
                                                                add(1875.52),
                                                            }};
                                                        }});
                                                        put("laborum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(5289.4),
                                                                add(5230.06),
                                                                add(3044.46),
                                                            }};
                                                        }});
                                                        put("ad", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(30.99),
                                                                add(3621.89),
                                                                add(5973.03),
                                                                add(4706.49),
                                                            }};
                                                        }});
                                                        put("mollitia", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(51.89),
                                                                add(9795.27),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 9702.22;
                                                quantity = 174658;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("dolore", 6803.49);
                                                put("nesciunt", 632.07);
                                            }};
                                            currencyCode = "recusandae";
                                            id = "94764a3e-865e-4795-af92-51a5a9da660f";
                                            revenue = 9846.32;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("in", 7214.07);
                                                put("earum", 6375.83);
                                            }};
                                        }};
                                        searchQuery = "laborum";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "placeat";
                                        userAgent = "modi";
                                        userId = "voluptatibus";
                                        visitorId = "molestias";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    requestId = "officiis";
                    updateMask = "sapiente";
                }};;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "tempora";
                key = "quis";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "cumque";
                uploadProtocol = "quae";
            }};            

            RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsImport(req, new RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity("perferendis", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsCatalogItemsList

Gets a list of catalog items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest req = new RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "impedit";
                filter = "eos";
                key = "sapiente";
                oauthToken = "eum";
                pageSize = 117320L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "cupiditate";
                uploadProtocol = "provident";
            }};            

            RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsList(req, new RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity("earum", "soluta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1ListCatalogItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsCatalogItemsPatch

Updates a catalog item. Partial updating is supported. Non-existing items will be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity;
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

            RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest req = new RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommendationengineV1beta1CatalogItem = new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]{{
                                add("perspiciatis"),
                                add("maiores"),
                                add("debitis"),
                                add("aliquid"),
                            }};
                        }}),
                    }};
                    description = "porro";
                    id = "632ca3ae-d011-4799-a312-fde04771778f";
                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                            put("vel", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("fugiat"),
                                }};
                            }});
                            put("doloremque", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("odio"),
                                }};
                            }});
                            put("tempora", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("ex"),
                                    add("consectetur"),
                                }};
                            }});
                            put("aliquid", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]{{
                                    add("laborum"),
                                }};
                            }});
                        }};
                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                            put("nostrum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]{{
                                    add(7137.67),
                                    add(3996.67),
                                    add(6391.87),
                                    add(3813.97),
                                }};
                            }});
                        }};
                    }};;
                    itemGroupId = "aliquid";
                    languageCode = "perferendis";
                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                        availableQuantity = "eum";
                        canonicalProductUri = "voluptas";
                        costs = new java.util.HashMap<String, Float>() {{
                            put("id", 700.42);
                            put("error", 8224.07);
                            put("voluptates", 6534.21);
                        }};
                        currencyCode = "laborum";
                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                            displayPrice = 7263.43;
                            originalPrice = 3240.83;
                        }};;
                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 316220;
                                uri = "http://tall-guilt.net";
                                width = 405373;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 281153;
                                uri = "http://sad-animal.name";
                                width = 737254;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 399660;
                                uri = "http://messy-occupation.com";
                                width = 703218;
                            }}),
                        }};
                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                            max = 6656.78;
                            min = 6347.86;
                        }};;
                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.STOCK_STATE_UNSPECIFIED;
                    }};;
                    tags = new String[]{{
                        add("officiis"),
                        add("architecto"),
                        add("fuga"),
                        add("pariatur"),
                    }};
                    title = "Dr.";
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "earum";
                key = "ex";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "rem";
                updateMask = "minus";
                uploadType = "nemo";
                uploadProtocol = "asperiores";
            }};            

            RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsPatch(req, new RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity("ratione", "ullam") {{
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

## recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict

Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1EventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMap;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PredictRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommendationengineV1beta1PredictRequest = new GoogleCloudRecommendationengineV1beta1PredictRequest() {{
                    dryRun = false;
                    filter = "totam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "nam");
                        put("ipsam", "culpa");
                        put("dolor", "aliquam");
                        put("inventore", "deleniti");
                    }};
                    pageSize = 85311;
                    pageToken = "tempora";
                    params = new java.util.HashMap<String, Object>() {{
                        put("consequatur", "architecto");
                    }};
                    userEvent = new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                        eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                            eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                    put("modi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                        value = new String[]{{
                                            add("ab"),
                                        }};
                                    }});
                                }};
                                numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                    put("quae", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                        value = new Float[]{{
                                            add(8562.77),
                                        }};
                                    }});
                                    put("ipsam", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                        value = new Float[]{{
                                            add(551.07),
                                        }};
                                    }});
                                    put("quas", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                        value = new Float[]{{
                                            add(7734.56),
                                            add(8849.52),
                                            add(4564.1),
                                            add(8972.77),
                                        }};
                                    }});
                                }};
                            }};;
                            experimentIds = new String[]{{
                                add("veniam"),
                            }};
                            pageViewId = "nesciunt";
                            recommendationToken = "expedita";
                            referrerUri = "eum";
                            uri = "http://memorable-elimination.info";
                        }};;
                        eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.EVENT_SOURCE_UNSPECIFIED;
                        eventTime = "porro";
                        eventType = "autem";
                        productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                            cartId = "nobis";
                            listId = "laboriosam";
                            pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                    categories = new String[]{{
                                        add("voluptatem"),
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                    categories = new String[]{{
                                        add("necessitatibus"),
                                        add("quasi"),
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                    categories = new String[]{{
                                        add("at"),
                                        add("vero"),
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                    categories = new String[]{{
                                        add("harum"),
                                        add("sequi"),
                                        add("doloribus"),
                                    }};
                                }}),
                            }};
                            productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                    availableQuantity = 759283;
                                    currencyCode = "occaecati";
                                    displayPrice = 3645.44;
                                    id = "78a64584-273a-4841-8d16-2309fb092992";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("fuga", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("voluptatibus"),
                                                    add("distinctio"),
                                                    add("omnis"),
                                                    add("delectus"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("praesentium", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(3004.03),
                                                    add(8363.64),
                                                    add(5495.01),
                                                    add(4152.8),
                                                }};
                                            }});
                                            put("itaque", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(5207.61),
                                                    add(9366.18),
                                                }};
                                            }});
                                        }};
                                    }};
                                    originalPrice = 2672.07;
                                    quantity = 722184;
                                    stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.BACKORDER;
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                    availableQuantity = 32901;
                                    currencyCode = "ipsam";
                                    displayPrice = 4259.46;
                                    id = "013f59da-757a-459e-8fef-66ef1caa3383";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("magni", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("repudiandae"),
                                                    add("nam"),
                                                    add("dolore"),
                                                }};
                                            }});
                                            put("iusto", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("sequi"),
                                                    add("dignissimos"),
                                                }};
                                            }});
                                            put("neque", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("deleniti"),
                                                    add("quibusdam"),
                                                    add("iure"),
                                                    add("odit"),
                                                }};
                                            }});
                                            put("voluptatibus", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("magnam"),
                                                    add("quibusdam"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("facere", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(1024.13),
                                                    add(9754.25),
                                                    add(1563.83),
                                                }};
                                            }});
                                        }};
                                    }};
                                    originalPrice = 7820.9;
                                    quantity = 304198;
                                    stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.IN_STOCK;
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                    availableQuantity = 75359;
                                    currencyCode = "accusantium";
                                    displayPrice = 4246.63;
                                    id = "61e96349-e1cf-49e0-ae3a-437000ae6b6b";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("perspiciatis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("deleniti"),
                                                    add("a"),
                                                    add("voluptate"),
                                                }};
                                            }});
                                            put("ullam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("necessitatibus"),
                                                    add("animi"),
                                                    add("impedit"),
                                                }};
                                            }});
                                            put("ipsam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("est"),
                                                    add("error"),
                                                }};
                                            }});
                                            put("esse", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("veritatis"),
                                                    add("vero"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("vitae", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(2124.34),
                                                }};
                                            }});
                                        }};
                                    }};
                                    originalPrice = 3220.17;
                                    quantity = 183033;
                                    stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                    availableQuantity = 403026;
                                    currencyCode = "nemo";
                                    displayPrice = 7452.33;
                                    id = "b8a72026-1143-45e1-b9db-c2259b1abda8";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("sit", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("ipsa"),
                                                    add("voluptates"),
                                                }};
                                            }});
                                            put("inventore", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("totam"),
                                                }};
                                            }});
                                            put("dolore", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("distinctio"),
                                                    add("voluptatem"),
                                                    add("autem"),
                                                    add("esse"),
                                                }};
                                            }});
                                            put("dolores", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("beatae"),
                                                    add("est"),
                                                    add("facere"),
                                                    add("corrupti"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("provident", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(8964.8),
                                                    add(7332.89),
                                                    add(5750.78),
                                                    add(4097.26),
                                                }};
                                            }});
                                            put("autem", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(7029.52),
                                                    add(5156.38),
                                                }};
                                            }});
                                        }};
                                    }};
                                    originalPrice = 3572.07;
                                    quantity = 889060;
                                    stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.BACKORDER;
                                }}),
                            }};
                            purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                costs = new java.util.HashMap<String, Float>() {{
                                    put("at", 51.52);
                                    put("quia", 6941.58);
                                    put("fuga", 9195.08);
                                }};
                                currencyCode = "accusantium";
                                id = "be2d7822-59e3-4ea4-b519-7f92443da7ce";
                                revenue = 3591.11;
                                taxes = new java.util.HashMap<String, Float>() {{
                                    put("expedita", 5326.69);
                                }};
                            }};;
                            searchQuery = "cupiditate";
                        }};;
                        userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                            directUserRequest = false;
                            ipAddress = "minima";
                            userAgent = "placeat";
                            userId = "enim";
                            visitorId = "neque";
                        }};;
                    }};;
                }};;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "modi";
                key = "corporis";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "maiores";
                uploadProtocol = "tempore";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict(req, new RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity("aperiam", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1PredictResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate

Register an API key for use with predict method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest = new GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest() {{
                    predictionApiKeyRegistration = new GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration() {{
                        apiKey = "totam";
                    }};;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "quo";
                fields = "velit";
                key = "minus";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "est";
                uploadProtocol = "impedit";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate(req, new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity("delectus", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete

Unregister an apiKey from using for predict method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "reprehenderit";
                key = "aperiam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "in";
                uploadProtocol = "ducimus";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete(req, new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity("excepturi", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList

List the registered apiKeys for use with predict method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "itaque";
                key = "similique";
                oauthToken = "optio";
                pageSize = 401428L;
                pageToken = "quaerat";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "officiis";
                uploadProtocol = "placeat";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList(req, new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity("quidem", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "sint";
                ets = "vero";
                fields = "sequi";
                key = "repudiandae";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "earum";
                uploadProtocol = "veniam";
                uri = "https://decisive-real.com";
                userEvent = "consequuntur";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect(req, new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity("necessitatibus", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1EventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMap;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommendationengineV1beta1ImportUserEventsRequest = new GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest() {{
                    errorsConfig = new GoogleCloudRecommendationengineV1beta1ImportErrorsConfig() {{
                        gcsPrefix = "maiores";
                    }};;
                    inputConfig = new GoogleCloudRecommendationengineV1beta1InputConfig() {{
                        bigQuerySource = new GoogleCloudRecommendationengineV1beta1BigQuerySource() {{
                            dataSchema = "veritatis";
                            datasetId = "quasi";
                            gcsStagingDir = "laboriosam";
                            projectId = "pariatur";
                            tableId = "libero";
                        }};;
                        catalogInlineSource = new GoogleCloudRecommendationengineV1beta1CatalogInlineSource() {{
                            catalogItems = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem[]{{
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("aliquam"),
                                                add("nostrum"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("eligendi"),
                                                add("sint"),
                                                add("enim"),
                                                add("hic"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("quas"),
                                                add("totam"),
                                                add("molestias"),
                                            }};
                                        }}),
                                    }};
                                    description = "odio";
                                    id = "0e189dbb-30fc-4b33-aa05-5b197cd44e2f";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("consequuntur", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("laudantium"),
                                                    add("odit"),
                                                    add("pariatur"),
                                                    add("amet"),
                                                }};
                                            }});
                                            put("exercitationem", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("velit"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("tempore", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(9775.18),
                                                    add(3108.4),
                                                }};
                                            }});
                                            put("blanditiis", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(3924.3),
                                                    add(3359.77),
                                                    add(3919.33),
                                                }};
                                            }});
                                            put("libero", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(8152),
                                                    add(7060.61),
                                                    add(2176.63),
                                                    add(3189.17),
                                                }};
                                            }});
                                        }};
                                    }};
                                    itemGroupId = "voluptatibus";
                                    languageCode = "voluptatibus";
                                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                                        availableQuantity = "consequuntur";
                                        canonicalProductUri = "debitis";
                                        costs = new java.util.HashMap<String, Float>() {{
                                            put("rerum", 1797.95);
                                            put("reprehenderit", 3455.06);
                                        }};
                                        currencyCode = "neque";
                                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                                            displayPrice = 4800.61;
                                            originalPrice = 6649.65;
                                        }};
                                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 753890;
                                                uri = "https://oval-taxi.info";
                                                width = 220104;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 118041;
                                                uri = "https://sparse-bucket.info";
                                                width = 458970;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 854115;
                                                uri = "http://complicated-estate.org";
                                                width = 482584;
                                            }}),
                                        }};
                                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                                            max = 4912.01;
                                            min = 7298.28;
                                        }};
                                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.STOCK_STATE_UNSPECIFIED;
                                    }};
                                    tags = new String[]{{
                                        add("incidunt"),
                                    }};
                                    title = "Dr.";
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("veniam"),
                                                add("eos"),
                                                add("reiciendis"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("reprehenderit"),
                                                add("praesentium"),
                                                add("nemo"),
                                                add("repellat"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("sequi"),
                                                add("nihil"),
                                                add("deleniti"),
                                                add("illo"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("assumenda"),
                                                add("aliquam"),
                                            }};
                                        }}),
                                    }};
                                    description = "quisquam";
                                    id = "98e0c2bb-89eb-475d-ad63-6c600503d8bb";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("quasi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("laudantium"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("earum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(2286.46),
                                                    add(5879.67),
                                                }};
                                            }});
                                        }};
                                    }};
                                    itemGroupId = "dolorum";
                                    languageCode = "necessitatibus";
                                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                                        availableQuantity = "provident";
                                        canonicalProductUri = "repudiandae";
                                        costs = new java.util.HashMap<String, Float>() {{
                                            put("nemo", 4758.26);
                                        }};
                                        currencyCode = "itaque";
                                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                                            displayPrice = 7087.71;
                                            originalPrice = 5457.79;
                                        }};
                                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 574092;
                                                uri = "https://deficient-loafer.com";
                                                width = 30661;
                                            }}),
                                        }};
                                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                                            max = 2443.76;
                                            min = 2244.13;
                                        }};
                                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.STOCK_STATE_UNSPECIFIED;
                                    }};
                                    tags = new String[]{{
                                        add("dolor"),
                                        add("occaecati"),
                                        add("atque"),
                                        add("beatae"),
                                    }};
                                    title = "Dr.";
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                                    categoryHierarchies = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("esse"),
                                                add("voluptatem"),
                                                add("perferendis"),
                                                add("rerum"),
                                            }};
                                        }}),
                                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                            categories = new String[]{{
                                                add("aperiam"),
                                                add("dignissimos"),
                                            }};
                                        }}),
                                    }};
                                    description = "repellat";
                                    id = "3c93c73b-9da3-4f2c-ada7-e23f2257411f";
                                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                        categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                            put("delectus", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("distinctio"),
                                                    add("in"),
                                                }};
                                            }});
                                            put("exercitationem", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("numquam"),
                                                    add("repudiandae"),
                                                }};
                                            }});
                                            put("modi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                value = new String[]{{
                                                    add("explicabo"),
                                                    add("accusamus"),
                                                }};
                                            }});
                                        }};
                                        numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                            put("aperiam", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(5358.02),
                                                }};
                                            }});
                                            put("enim", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(6267.07),
                                                    add(3261.18),
                                                }};
                                            }});
                                            put("libero", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                value = new Float[]{{
                                                    add(242.72),
                                                    add(2667.88),
                                                }};
                                            }});
                                        }};
                                    }};
                                    itemGroupId = "eum";
                                    languageCode = "nesciunt";
                                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                                        availableQuantity = "mollitia";
                                        canonicalProductUri = "dignissimos";
                                        costs = new java.util.HashMap<String, Float>() {{
                                            put("nostrum", 4753.25);
                                            put("veniam", 9692.06);
                                            put("ab", 2656.32);
                                            put("aut", 135.08);
                                        }};
                                        currencyCode = "eveniet";
                                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                                            displayPrice = 4837.53;
                                            originalPrice = 4137.58;
                                        }};
                                        images = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1Image[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 677045;
                                                uri = "https://jam-packed-cursor.biz";
                                                width = 310629;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                                height = 929476;
                                                uri = "https://closed-rabbit.info";
                                                width = 558051;
                                            }}),
                                        }};
                                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                                            max = 917.28;
                                            min = 7049.48;
                                        }};
                                        stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.IN_STOCK;
                                    }};
                                    tags = new String[]{{
                                        add("fuga"),
                                        add("alias"),
                                    }};
                                    title = "Ms.";
                                }}),
                            }};
                        }};;
                        gcsSource = new GoogleCloudRecommendationengineV1beta1GcsSource() {{
                            inputUris = new String[]{{
                                add("quos"),
                            }};
                            jsonSchema = "laudantium";
                        }};;
                        userEventInlineSource = new GoogleCloudRecommendationengineV1beta1UserEventInlineSource() {{
                            userEvents = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent[]{{
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("quae", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("saepe"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("mollitia", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(6409.07),
                                                        add(1520.27),
                                                        add(302.08),
                                                        add(6.64),
                                                    }};
                                                }});
                                                put("eveniet", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(279.82),
                                                        add(2783.25),
                                                        add(1854.48),
                                                        add(1858.97),
                                                    }};
                                                }});
                                                put("necessitatibus", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(1267.27),
                                                        add(1089.03),
                                                        add(3979.88),
                                                    }};
                                                }});
                                                put("modi", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(9750.95),
                                                        add(5629.48),
                                                        add(6394.63),
                                                        add(7304.78),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("sequi"),
                                            add("aliquid"),
                                            add("ea"),
                                        }};
                                        pageViewId = "impedit";
                                        recommendationToken = "ducimus";
                                        referrerUri = "odit";
                                        uri = "http://wicked-zebrafish.org";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.ECOMMERCE;
                                    eventTime = "natus";
                                    eventType = "accusamus";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "doloremque";
                                        listId = "nisi";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("voluptates"),
                                                    add("non"),
                                                    add("rem"),
                                                    add("quia"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("quisquam"),
                                                    add("dicta"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("eligendi"),
                                                    add("quae"),
                                                    add("officiis"),
                                                    add("architecto"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 317898;
                                                currencyCode = "optio";
                                                displayPrice = 5259.51;
                                                id = "0bff9185-44ec-442d-afcc-e8f1977773e6";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("corporis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("consequuntur"),
                                                                add("officia"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("distinctio", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(563.72),
                                                                add(5220.62),
                                                            }};
                                                        }});
                                                        put("maiores", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(3314.52),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 9062.32;
                                                quantity = 206063;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.BACKORDER;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("quos", 9847.73);
                                                put("fugiat", 6685.77);
                                            }};
                                            currencyCode = "delectus";
                                            id = "313a1f5f-d942-459c-8b36-f25ea944f3b7";
                                            revenue = 3296.51;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("minus", 688.8);
                                                put("beatae", 9431.43);
                                            }};
                                        }};
                                        searchQuery = "nisi";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "quisquam";
                                        userAgent = "dolor";
                                        userId = "ducimus";
                                        visitorId = "fuga";
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("architecto", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                }});
                                                put("magni", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("adipisci"),
                                                        add("praesentium"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("exercitationem", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(7064.11),
                                                        add(7696.34),
                                                        add(245.77),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("culpa"),
                                            add("consequuntur"),
                                        }};
                                        pageViewId = "amet";
                                        recommendationToken = "deserunt";
                                        referrerUri = "modi";
                                        uri = "http://stark-try.org";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.BATCH_UPLOAD;
                                    eventTime = "enim";
                                    eventType = "doloribus";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "assumenda";
                                        listId = "officiis";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("culpa"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 751033;
                                                currencyCode = "necessitatibus";
                                                displayPrice = 1559.78;
                                                id = "169e5100-19c6-4dc5-a347-62799bfbbe69";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("perspiciatis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("cum"),
                                                                add("aspernatur"),
                                                                add("libero"),
                                                                add("nam"),
                                                            }};
                                                        }});
                                                        put("incidunt", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("quod"),
                                                                add("id"),
                                                                add("saepe"),
                                                                add("autem"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("nesciunt", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(3674.75),
                                                                add(8487.22),
                                                                add(7068.72),
                                                                add(2476.18),
                                                            }};
                                                        }});
                                                        put("mollitia", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9279.77),
                                                                add(7189.81),
                                                                add(8668.61),
                                                                add(3233.65),
                                                            }};
                                                        }});
                                                        put("facere", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9114.51),
                                                                add(6731.91),
                                                                add(2763.37),
                                                            }};
                                                        }});
                                                        put("maxime", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(0.6),
                                                                add(3798.94),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 6472.1;
                                                quantity = 560451;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("occaecati", 2867.16);
                                                put("quo", 194.62);
                                                put("fugit", 3992.22);
                                            }};
                                            currencyCode = "magnam";
                                            id = "4cf5e9d9-a457-48ad-81ac-600dec001ac8";
                                            revenue = 608.92;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("officiis", 1483.79);
                                            }};
                                        }};
                                        searchQuery = "necessitatibus";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "impedit";
                                        userAgent = "ipsa";
                                        userId = "excepturi";
                                        visitorId = "a";
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("laudantium", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("alias"),
                                                        add("asperiores"),
                                                        add("rem"),
                                                        add("dicta"),
                                                    }};
                                                }});
                                                put("suscipit", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("doloribus"),
                                                        add("velit"),
                                                        add("eius"),
                                                        add("esse"),
                                                    }};
                                                }});
                                                put("in", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("quasi"),
                                                        add("neque"),
                                                        add("vero"),
                                                        add("excepturi"),
                                                    }};
                                                }});
                                                put("accusantium", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("impedit"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("incidunt", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(1391.33),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("rerum"),
                                            add("alias"),
                                        }};
                                        pageViewId = "error";
                                        recommendationToken = "vel";
                                        referrerUri = "accusantium";
                                        uri = "https://homely-grip.name";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.EVENT_SOURCE_UNSPECIFIED;
                                    eventTime = "ullam";
                                    eventType = "quae";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "similique";
                                        listId = "incidunt";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("deserunt"),
                                                }};
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("omnis"),
                                                    add("sed"),
                                                    add("nesciunt"),
                                                    add("maxime"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 586108;
                                                currencyCode = "aliquam";
                                                displayPrice = 5692.87;
                                                id = "f83f350c-f876-4ffb-901c-6ecbb4e243cf";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("blanditiis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("repellat"),
                                                                add("a"),
                                                                add("animi"),
                                                            }};
                                                        }});
                                                        put("maiores", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("nulla"),
                                                                add("deserunt"),
                                                                add("corporis"),
                                                                add("velit"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("enim", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9029.79),
                                                                add(4299.97),
                                                                add(9220.94),
                                                            }};
                                                        }});
                                                        put("accusantium", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(7701.28),
                                                                add(978.96),
                                                                add(5021.06),
                                                            }};
                                                        }});
                                                        put("eius", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(1779.29),
                                                                add(7480.23),
                                                                add(6200.54),
                                                                add(7935.68),
                                                            }};
                                                        }});
                                                        put("quia", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(4408.47),
                                                                add(8007.99),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 5524.4;
                                                quantity = 548846;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.IN_STOCK;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 473326;
                                                currencyCode = "amet";
                                                displayPrice = 6751.26;
                                                id = "40e1942f-32e5-4505-9756-f5d56d0bd0af";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("possimus", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("repudiandae"),
                                                                add("architecto"),
                                                                add("adipisci"),
                                                                add("pariatur"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("dolore", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(4353.53),
                                                                add(1270.87),
                                                                add(7954.57),
                                                                add(7466.88),
                                                            }};
                                                        }});
                                                        put("dolorum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9378.65),
                                                            }};
                                                        }});
                                                        put("praesentium", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(2524.73),
                                                                add(978.1),
                                                                add(6490.32),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 8843.61;
                                                quantity = 687589;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("expedita", 5492.37);
                                            }};
                                            currencyCode = "eaque";
                                            id = "a6924d3b-2ecf-4cc8-b895-010f5dd3d6fa";
                                            revenue = 651.21;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("aperiam", 2512);
                                                put("voluptates", 3240.52);
                                                put("aliquam", 7881.65);
                                            }};
                                        }};
                                        searchQuery = "quas";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "consequuntur";
                                        userAgent = "maiores";
                                        userId = "inventore";
                                        visitorId = "aliquid";
                                    }};
                                }}),
                                add(new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                put("est", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                }});
                                                put("consectetur", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("rem"),
                                                        add("voluptatum"),
                                                        add("ducimus"),
                                                        add("adipisci"),
                                                    }};
                                                }});
                                                put("recusandae", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                    value = new String[]{{
                                                        add("blanditiis"),
                                                        add("numquam"),
                                                    }};
                                                }});
                                            }};
                                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                put("voluptatum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                    value = new Float[]{{
                                                        add(7031.89),
                                                    }};
                                                }});
                                            }};
                                        }};
                                        experimentIds = new String[]{{
                                            add("tenetur"),
                                        }};
                                        pageViewId = "autem";
                                        recommendationToken = "quidem";
                                        referrerUri = "totam";
                                        uri = "https://prestigious-clerk.info";
                                    }};
                                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.AUTOML;
                                    eventTime = "animi";
                                    eventType = "commodi";
                                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                                        cartId = "alias";
                                        listId = "fuga";
                                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                                categories = new String[]{{
                                                    add("maxime"),
                                                    add("aliquam"),
                                                }};
                                            }}),
                                        }};
                                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 355889;
                                                currencyCode = "eligendi";
                                                displayPrice = 8103.02;
                                                id = "699171b5-1c1b-4db1-8f4b-888ebdfc4ccc";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("excepturi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("libero"),
                                                                add("quo"),
                                                                add("esse"),
                                                            }};
                                                        }});
                                                        put("hic", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("accusantium"),
                                                                add("soluta"),
                                                                add("fugit"),
                                                                add("pariatur"),
                                                            }};
                                                        }});
                                                        put("eligendi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("veritatis"),
                                                                add("aut"),
                                                                add("laudantium"),
                                                                add("iusto"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("voluptates", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(1699.35),
                                                                add(7018.41),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 392.22;
                                                quantity = 30192;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.OUT_OF_STOCK;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 873320;
                                                currencyCode = "eum";
                                                displayPrice = 4444.79;
                                                id = "8878ba85-81a5-4820-8c54-fefa9c95f2ea";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("quis", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("eum"),
                                                                add("nemo"),
                                                            }};
                                                        }});
                                                        put("illum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("sit"),
                                                            }};
                                                        }});
                                                        put("odio", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("asperiores"),
                                                                add("recusandae"),
                                                                add("voluptates"),
                                                                add("praesentium"),
                                                            }};
                                                        }});
                                                        put("dicta", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("sit"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("necessitatibus", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(5371.7),
                                                            }};
                                                        }});
                                                        put("sunt", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9639.13),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 6736.53;
                                                quantity = 303421;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.PREORDER;
                                            }}),
                                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                                availableQuantity = 266680;
                                                currencyCode = "sunt";
                                                displayPrice = 7710.92;
                                                id = "480d3f21-32af-4031-82d5-14f4cc6f18bf";
                                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                                        put("aliquid", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("beatae"),
                                                            }};
                                                        }});
                                                        put("similique", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("animi"),
                                                                add("dolore"),
                                                            }};
                                                        }});
                                                        put("tenetur", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                                            value = new String[]{{
                                                                add("esse"),
                                                                add("animi"),
                                                            }};
                                                        }});
                                                    }};
                                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                                        put("esse", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(9351.61),
                                                                add(2464.02),
                                                                add(8847.65),
                                                                add(2633.46),
                                                            }};
                                                        }});
                                                        put("rerum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(4896.85),
                                                                add(3734.49),
                                                                add(1316.87),
                                                                add(7716.32),
                                                            }};
                                                        }});
                                                        put("aliquid", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                                            value = new Float[]{{
                                                                add(7044.02),
                                                                add(2181.28),
                                                            }};
                                                        }});
                                                    }};
                                                }};
                                                originalPrice = 2848.85;
                                                quantity = 308819;
                                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.STOCK_STATE_UNSPECIFIED;
                                            }}),
                                        }};
                                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                                            costs = new java.util.HashMap<String, Float>() {{
                                                put("eveniet", 2217.81);
                                                put("expedita", 7300.03);
                                                put("iste", 749.21);
                                            }};
                                            currencyCode = "minus";
                                            id = "8d975e0e-8419-4d8f-84f1-44f3e07edcc4";
                                            revenue = 6778.95;
                                            taxes = new java.util.HashMap<String, Float>() {{
                                                put("ad", 9704.11);
                                                put("sequi", 7855.55);
                                                put("laborum", 7489.73);
                                            }};
                                        }};
                                        searchQuery = "quibusdam";
                                    }};
                                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "omnis";
                                        userAgent = "aut";
                                        userId = "ipsam";
                                        visitorId = "officia";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    requestId = "cupiditate";
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "accusantium";
                key = "ad";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quia";
                uploadProtocol = "laudantium";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport(req, new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity("sed", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList

Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "ipsa";
                filter = "sint";
                key = "dolore";
                oauthToken = "esse";
                pageSize = 38044L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quam";
                uploadProtocol = "est";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList(req, new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity("aliquam", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1ListUserEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommendationengineV1beta1PurgeUserEventsRequest = new GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest() {{
                    filter = "iusto";
                    force = false;
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "non";
                key = "ullam";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "doloribus";
                uploadProtocol = "animi";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge(req, new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity("recusandae", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin

Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecommendationengineV1beta1RejoinUserEventsRequest = new GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest() {{
                    userEventRejoinScope = GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum.UNJOINED_EVENTS;
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "optio";
                key = "sequi";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "voluptatibus";
                uploadProtocol = "doloremque";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin(req, new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity("sed", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite

Writes a single user event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1EventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMap;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductEventDetail;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest req = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRecommendationengineV1beta1UserEvent = new GoogleCloudRecommendationengineV1beta1UserEvent() {{
                    eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail() {{
                        eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                            categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                put("temporibus", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                    value = new String[]{{
                                        add("dolor"),
                                    }};
                                }});
                                put("nisi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                    value = new String[]{{
                                        add("reiciendis"),
                                        add("itaque"),
                                    }};
                                }});
                            }};
                            numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                put("est", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                    value = new Float[]{{
                                        add(7980.79),
                                    }};
                                }});
                            }};
                        }};;
                        experimentIds = new String[]{{
                            add("quos"),
                            add("possimus"),
                            add("maiores"),
                            add("odio"),
                        }};
                        pageViewId = "provident";
                        recommendationToken = "sapiente";
                        referrerUri = "aperiam";
                        uri = "https://disastrous-nestling.info";
                    }};;
                    eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum.BATCH_UPLOAD;
                    eventTime = "unde";
                    eventType = "alias";
                    productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail() {{
                        cartId = "impedit";
                        listId = "sequi";
                        pageCategories = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]{{
                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                categories = new String[]{{
                                    add("expedita"),
                                    add("in"),
                                }};
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                                categories = new String[]{{
                                    add("sunt"),
                                    add("enim"),
                                    add("nulla"),
                                    add("maiores"),
                                }};
                            }}),
                        }};
                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1ProductDetail[]{{
                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                availableQuantity = 649657;
                                currencyCode = "impedit";
                                displayPrice = 8809.98;
                                id = "188b1c4e-e2c8-4c6c-a611-feeb1c7cbdb6";
                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                        put("earum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("nihil"),
                                                add("quaerat"),
                                                add("ipsum"),
                                                add("ducimus"),
                                            }};
                                        }});
                                        put("laudantium", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("deserunt"),
                                                add("odit"),
                                                add("ad"),
                                            }};
                                        }});
                                        put("sequi", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("iusto"),
                                            }};
                                        }});
                                        put("esse", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("odio"),
                                                add("nulla"),
                                            }};
                                        }});
                                    }};
                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                        put("cupiditate", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(3486.65),
                                            }};
                                        }});
                                        put("laborum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(1479.89),
                                                add(8048.79),
                                                add(6811.15),
                                                add(9983.55),
                                            }};
                                        }});
                                        put("nostrum", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(8450.86),
                                                add(4144.56),
                                                add(4563.71),
                                                add(1274.99),
                                            }};
                                        }});
                                        put("consectetur", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(7625.25),
                                                add(597.57),
                                                add(9786.55),
                                                add(3502.71),
                                            }};
                                        }});
                                    }};
                                }};
                                originalPrice = 6336.43;
                                quantity = 919738;
                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.STOCK_STATE_UNSPECIFIED;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                availableQuantity = 960767;
                                currencyCode = "neque";
                                displayPrice = 6405.65;
                                id = "6b700878-7561-443f-9a6c-98b55554080d";
                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                        put("doloremque", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("nobis"),
                                                add("similique"),
                                                add("porro"),
                                            }};
                                        }});
                                        put("impedit", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("cumque"),
                                                add("soluta"),
                                            }};
                                        }});
                                    }};
                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                        put("laboriosam", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(3153.87),
                                                add(9790.11),
                                                add(2354.82),
                                            }};
                                        }});
                                        put("necessitatibus", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(5867.17),
                                                add(290.8),
                                                add(5881.58),
                                                add(2390.97),
                                            }};
                                        }});
                                        put("accusantium", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(9985.27),
                                                add(6076.31),
                                            }};
                                        }});
                                        put("explicabo", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(7403.47),
                                                add(6630.62),
                                            }};
                                        }});
                                    }};
                                }};
                                originalPrice = 8210.16;
                                quantity = 143061;
                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.IN_STOCK;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1ProductDetail() {{
                                availableQuantity = 343454;
                                currencyCode = "sequi";
                                displayPrice = 5293.1;
                                id = "19b474b0-ed20-4e56-a48f-ff639a910abd";
                                itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                                    categoricalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                                        put("fuga", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("commodi"),
                                                add("fugit"),
                                                add("suscipit"),
                                            }};
                                        }});
                                        put("voluptate", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("aliquid"),
                                                add("provident"),
                                            }};
                                        }});
                                        put("laboriosam", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("ab"),
                                                add("itaque"),
                                                add("quisquam"),
                                                add("eaque"),
                                            }};
                                        }});
                                        put("alias", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                            value = new String[]{{
                                                add("consequuntur"),
                                            }};
                                        }});
                                    }};
                                    numericalFeatures = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                                        put("quidem", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                            value = new Float[]{{
                                                add(2274.31),
                                            }};
                                        }});
                                    }};
                                }};
                                originalPrice = 3466.08;
                                quantity = 847018;
                                stockState = GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum.OUT_OF_STOCK;
                            }}),
                        }};
                        purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction() {{
                            costs = new java.util.HashMap<String, Float>() {{
                                put("similique", 7532.61);
                                put("tempore", 2258.09);
                                put("debitis", 7513.81);
                            }};
                            currencyCode = "asperiores";
                            id = "da8d0c54-9ef0-4300-8978-a61fa1cf2068";
                            revenue = 5199.85;
                            taxes = new java.util.HashMap<String, Float>() {{
                                put("voluptate", 4617.54);
                                put("quod", 1102.47);
                                put("sapiente", 9686.89);
                                put("quod", 4515.89);
                            }};
                        }};;
                        searchQuery = "inventore";
                    }};;
                    userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo() {{
                        directUserRequest = false;
                        ipAddress = "facere";
                        userAgent = "maxime";
                        userId = "fuga";
                        visitorId = "ab";
                    }};;
                }};;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "sed";
                key = "animi";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "voluptatum";
                uploadProtocol = "perferendis";
            }};            

            RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite(req, new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity("laborum", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1UserEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsList

Lists all the catalog configurations associated with the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsListRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsListResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsListRequest req = new RecommendationengineProjectsLocationsCatalogsListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "non";
                key = "optio";
                oauthToken = "illum";
                pageSize = 870183L;
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "ipsam";
                uploadProtocol = "esse";
            }};            

            RecommendationengineProjectsLocationsCatalogsListResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsList(req, new RecommendationengineProjectsLocationsCatalogsListSecurity("laborum", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommendationengineV1beta1ListCatalogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsOperationsGetRequest req = new RecommendationengineProjectsLocationsCatalogsOperationsGetRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "commodi";
                key = "porro";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "quidem";
                uploadProtocol = "explicabo";
            }};            

            RecommendationengineProjectsLocationsCatalogsOperationsGetResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsOperationsGet(req, new RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity("et", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recommendationengineProjectsLocationsCatalogsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse;
import org.openapis.openapi.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommendationengineProjectsLocationsCatalogsOperationsListRequest req = new RecommendationengineProjectsLocationsCatalogsOperationsListRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "unde";
                filter = "ut";
                key = "facere";
                oauthToken = "voluptas";
                pageSize = 987384L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "facere";
                uploadProtocol = "dignissimos";
            }};            

            RecommendationengineProjectsLocationsCatalogsOperationsListResponse res = sdk.projects.recommendationengineProjectsLocationsCatalogsOperationsList(req, new RecommendationengineProjectsLocationsCatalogsOperationsListSecurity("iste", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
