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
                    parent = "sit";
                }};
                queryParams = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudRecommendationengineV1beta1CatalogItem() {{
                    categoryHierarchies = new openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]() {{
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]() {{
                                add("voluptatum"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]() {{
                                add("ut"),
                            }};
                        }}),
                        add(new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy() {{
                            categories = new String[]() {{
                                add("et"),
                                add("voluptate"),
                                add("iste"),
                            }};
                        }}),
                    }};
                    description = "vitae";
                    id = "totam";
                    itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap() {{
                        categoricalFeatures = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList>() {{
                            put("illum", new GoogleCloudRecommendationengineV1beta1FeatureMapStringList() {{
                                value = new String[]() {{
                                    add("vel"),
                                }};
                            }});
                        }};
                        numericalFeatures = new java.util.HashMap<String, openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>() {{
                            put("dolore", new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList() {{
                                value = new Float[]() {{
                                    add(57.099998),
                                    add(45.099998),
                                }};
                            }});
                        }};
                    }};
                    itemGroupId = "quis";
                    languageCode = "est";
                    productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {{
                        availableQuantity = "aut";
                        canonicalProductUri = "odit";
                        costs = new java.util.HashMap<String, Float>() {{
                            put("voluptas", 87.099998);
                            put("illo", 78.199997);
                            put("autem", 68.099998);
                        }};
                        currencyCode = "odio";
                        exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice() {{
                            displayPrice = 77.099998;
                            originalPrice = 88.099998;
                        }};
                        images = new openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1Image[]() {{
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 303089054982227392;
                                uri = "sint";
                                width = 5392504858645185670;
                            }}),
                            add(new GoogleCloudRecommendationengineV1beta1Image() {{
                                height = 7847956203786849690;
                                uri = "exercitationem";
                                width = 4756106358532488297;
                            }}),
                        }};
                        priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange() {{
                            max = 30.200001;
                            min = 97.099998;
                        }};
                        stockState = "BACKORDER";
                    }};
                    tags = new String[]() {{
                        add("veritatis"),
                        add("in"),
                        add("et"),
                    }};
                    title = "omnis";
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