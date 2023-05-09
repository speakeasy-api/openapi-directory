<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate(ctx, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
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
            Description: sdk.String("debitis"),
            ID: sdk.String("0f467cc8-796e-4d15-9a05-dfc2ddf7cc78"),
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "dolorum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "nam",
                        },
                    },
                    "officia": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "fugit",
                            "deleniti",
                            "hic",
                        },
                    },
                    "optio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "beatae",
                            "commodi",
                            "molestiae",
                        },
                    },
                    "modi": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "impedit",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "esse": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            5684.34,
                        },
                    },
                    "aspernatur": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            3241.41,
                        },
                    },
                    "natus": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            6120.96,
                        },
                    },
                },
            },
            ItemGroupID: sdk.String("dolor"),
            LanguageCode: sdk.String("natus"),
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: sdk.String("laboriosam"),
                CanonicalProductURI: sdk.String("hic"),
                Costs: map[string]float32{
                    "fuga": 4499.5,
                    "corporis": 6130.64,
                    "iure": 9023.49,
                    "quidem": 992.8,
                },
                CurrencyCode: sdk.String("ipsa"),
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: sdk.Float32(9698.1),
                    OriginalPrice: sdk.Float32(6667.67),
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(670638),
                        URI: sdk.String("http://doting-footage.com"),
                        Width: sdk.Int(750686),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(315428),
                        URI: sdk.String("https://gummy-expedition.name"),
                        Width: sdk.Int(38425),
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: sdk.Int(438601),
                        URI: sdk.String("https://wrathful-violet.com"),
                        Width: sdk.Int(652790),
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: sdk.Float32(2088.76),
                    Min: sdk.Float32(6350.59),
                },
                StockState: shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumStockStateUnspecified.ToPointer(),
            },
            Tags: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
            Title: sdk.String("Ms."),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
    }, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity{
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