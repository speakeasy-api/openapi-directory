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