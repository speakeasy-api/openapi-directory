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