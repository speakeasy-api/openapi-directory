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