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
            Parent: "sit",
        },
        QueryParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "voluptatum",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "ut",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "et",
                        "voluptate",
                        "iste",
                    },
                },
            },
            Description: "vitae",
            ID: "totam",
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "illum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "vel",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "dolore": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            57.099998,
                            45.099998,
                        },
                    },
                },
            },
            ItemGroupID: "quis",
            LanguageCode: "est",
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: "aut",
                CanonicalProductURI: "odit",
                Costs: map[string]float32{
                    "voluptas": 87.099998,
                    "illo": 78.199997,
                    "autem": 68.099998,
                },
                CurrencyCode: "odio",
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: 77.099998,
                    OriginalPrice: 88.099998,
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 303089054982227392,
                        URI: "sint",
                        Width: 5392504858645185670,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 7847956203786849690,
                        URI: "exercitationem",
                        Width: 4756106358532488297,
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: 30.200001,
                    Min: 97.099998,
                },
                StockState: "BACKORDER",
            },
            Tags: []string{
                "veritatis",
                "in",
                "et",
            },
            Title: "omnis",
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