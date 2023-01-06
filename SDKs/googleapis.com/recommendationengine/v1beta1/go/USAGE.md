<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "quia",
        },
        QueryParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nisi",
            Alt: "json",
            Callback: "doloremque",
            Fields: "possimus",
            Key: "officia",
            OauthToken: "maxime",
            PrettyPrint: false,
            QuotaUser: "adipisci",
            UploadType: "cumque",
            UploadProtocol: "quo",
        },
        Request: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "et",
                        "facere",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "aut",
                        "sit",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "officia",
                    },
                },
            },
            Description: "est",
            ID: "omnis",
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "sit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "sed",
                            "magnam",
                            "dolor",
                        },
                    },
                    "blanditiis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "autem",
                        },
                    },
                    "et": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "reprehenderit",
                            "vel",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "placeat": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            58.200001,
                            66.199997,
                        },
                    },
                },
            },
            ItemGroupID: "repellendus",
            LanguageCode: "magnam",
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: "soluta",
                CanonicalProductURI: "aperiam",
                Costs: map[string]float32{
                    "voluptas": 52.099998,
                    "ipsam": 14.200000,
                },
                CurrencyCode: "tempora",
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: 81.099998,
                    OriginalPrice: 4.200000,
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 1423209342964650157,
                        URI: "sit",
                        Width: 2729455759893167140,
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: 30.200001,
                    Min: 46.200001,
                },
                StockState: "PREORDER",
            },
            Tags: []string{
                "pariatur",
                "quas",
                "autem",
            },
            Title: "officia",
        },
    }
    
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1CatalogItem != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->