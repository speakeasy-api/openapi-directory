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