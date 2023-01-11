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