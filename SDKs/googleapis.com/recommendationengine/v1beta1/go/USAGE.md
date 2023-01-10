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
            Parent: "enim",
        },
        QueryParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "json",
            Callback: "et",
            Fields: "id",
            Key: "dolorem",
            OauthToken: "sit",
            PrettyPrint: true,
            QuotaUser: "a",
            UploadType: "nulla",
            UploadProtocol: "blanditiis",
        },
        Request: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "corporis",
                        "recusandae",
                    },
                },
            },
            Description: "delectus",
            ID: "eos",
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "culpa": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "aut",
                            "consequatur",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "odio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            34.200001,
                            40.200001,
                        },
                    },
                },
            },
            ItemGroupID: "iste",
            LanguageCode: "et",
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: "et",
                CanonicalProductURI: "laudantium",
                Costs: map[string]float32{
                    "similique": 77.199997,
                },
                CurrencyCode: "incidunt",
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: 27.200001,
                    OriginalPrice: 64.099998,
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 8942292800023669852,
                        URI: "autem",
                        Width: 5883357621257773236,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 478099075473941033,
                        URI: "dolore",
                        Width: 7587515172654034190,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 8043303013086071262,
                        URI: "ipsa",
                        Width: 1654514952870731982,
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: 75.199997,
                    Min: 32.099998,
                },
                StockState: "IN_STOCK",
            },
            Tags: []string{
                "aut",
                "reprehenderit",
                "ea",
            },
            Title: "dolorem",
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