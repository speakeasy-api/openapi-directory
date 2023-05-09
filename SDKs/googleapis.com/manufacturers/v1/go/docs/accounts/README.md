# Accounts

### Available Operations

* [ManufacturersAccountsLanguagesProductCertificationsDelete](#manufacturersaccountslanguagesproductcertificationsdelete) - Deletes a product certification by its name. This method can only be called by certification bodies.
* [ManufacturersAccountsLanguagesProductCertificationsGet](#manufacturersaccountslanguagesproductcertificationsget) - Gets a product certification by its name. This method can only be called by certification bodies.
* [ManufacturersAccountsLanguagesProductCertificationsList](#manufacturersaccountslanguagesproductcertificationslist) - Lists product certifications from a specified certification body. This method can only be called by certification bodies.
* [ManufacturersAccountsLanguagesProductCertificationsPatch](#manufacturersaccountslanguagesproductcertificationspatch) - Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
* [ManufacturersAccountsProductsDelete](#manufacturersaccountsproductsdelete) - Deletes the product from a Manufacturer Center account.
* [ManufacturersAccountsProductsGet](#manufacturersaccountsproductsget) - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
* [ManufacturersAccountsProductsList](#manufacturersaccountsproductslist) - Lists all the products in a Manufacturer Center account.
* [ManufacturersAccountsProductsUpdate](#manufacturersaccountsproductsupdate) - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

## ManufacturersAccountsLanguagesProductCertificationsDelete

Deletes a product certification by its name. This method can only be called by certification bodies.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsLanguagesProductCertificationsDelete(ctx, operations.ManufacturersAccountsLanguagesProductCertificationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ManufacturersAccountsLanguagesProductCertificationsGet

Gets a product certification by its name. This method can only be called by certification bodies.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsLanguagesProductCertificationsGet(ctx, operations.ManufacturersAccountsLanguagesProductCertificationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        Name: "Fred Strosin",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    }, operations.ManufacturersAccountsLanguagesProductCertificationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCertification != nil {
        // handle response
    }
}
```

## ManufacturersAccountsLanguagesProductCertificationsList

Lists product certifications from a specified certification body. This method can only be called by certification bodies.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsLanguagesProductCertificationsList(ctx, operations.ManufacturersAccountsLanguagesProductCertificationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.ManufacturersAccountsLanguagesProductCertificationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProductCertificationsResponse != nil {
        // handle response
    }
}
```

## ManufacturersAccountsLanguagesProductCertificationsPatch

Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsLanguagesProductCertificationsPatch(ctx, operations.ManufacturersAccountsLanguagesProductCertificationsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProductCertificationInput: &shared.ProductCertificationInput{
            Brand: sdk.String("molestiae"),
            Certification: []shared.Certification{
                shared.Certification{
                    Authority: sdk.String("qui"),
                    Link: sdk.String("impedit"),
                    Logo: sdk.String("cum"),
                    Name: sdk.String("Edna Mante II"),
                    ValidUntil: sdk.String("natus"),
                    Value: sdk.String("sed"),
                },
                shared.Certification{
                    Authority: sdk.String("iste"),
                    Link: sdk.String("dolor"),
                    Logo: sdk.String("natus"),
                    Name: sdk.String("May Turcotte"),
                    ValidUntil: sdk.String("corporis"),
                    Value: sdk.String("iste"),
                },
            },
            CountryCode: []string{
                "saepe",
                "quidem",
            },
            Mpn: []string{
                "ipsa",
            },
            Name: sdk.String("Carlton O'Hara"),
            ProductCode: []string{
                "corporis",
            },
            ProductType: []string{
                "nobis",
            },
            Title: sdk.String("Mrs."),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UpdateMask: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.ManufacturersAccountsLanguagesProductCertificationsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCertification != nil {
        // handle response
    }
}
```

## ManufacturersAccountsProductsDelete

Deletes the product from a Manufacturer Center account.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsProductsDelete(ctx, operations.ManufacturersAccountsProductsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        Name: "Miss Eugene Hauck",
        OauthToken: sdk.String("enim"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.ManufacturersAccountsProductsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ManufacturersAccountsProductsGet

Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsProductsGet(ctx, operations.ManufacturersAccountsProductsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        Include: []ManufacturersAccountsProductsGetIncludeEnum{
            operations.ManufacturersAccountsProductsGetIncludeEnumDestinationStatuses,
            operations.ManufacturersAccountsProductsGetIncludeEnumIssues,
            operations.ManufacturersAccountsProductsGetIncludeEnumUnknown,
        },
        Key: sdk.String("reiciendis"),
        Name: "Caleb Koss",
        OauthToken: sdk.String("ipsa"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ManufacturersAccountsProductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## ManufacturersAccountsProductsList

Lists all the products in a Manufacturer Center account.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsProductsList(ctx, operations.ManufacturersAccountsProductsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        Include: []ManufacturersAccountsProductsListIncludeEnum{
            operations.ManufacturersAccountsProductsListIncludeEnumAttributes,
            operations.ManufacturersAccountsProductsListIncludeEnumAttributes,
        },
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("harum"),
        PageSize: sdk.Int64(317983),
        PageToken: sdk.String("accusamus"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ManufacturersAccountsProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProductsResponse != nil {
        // handle response
    }
}
```

## ManufacturersAccountsProductsUpdate

Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

### Example Usage

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
    res, err := s.Accounts.ManufacturersAccountsProductsUpdate(ctx, operations.ManufacturersAccountsProductsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Attributes: &shared.Attributes{
            AdditionalImageLink: []shared.Image{
                shared.Image{
                    ImageURL: sdk.String("excepturi"),
                    Status: shared.ImageStatusEnumHostloaded.ToPointer(),
                    Type: shared.ImageTypeEnumTypeUnspecified.ToPointer(),
                },
                shared.Image{
                    ImageURL: sdk.String("praesentium"),
                    Status: shared.ImageStatusEnumCrawlError.ToPointer(),
                    Type: shared.ImageTypeEnumUploaded.ToPointer(),
                },
                shared.Image{
                    ImageURL: sdk.String("quasi"),
                    Status: shared.ImageStatusEnumHostloaded.ToPointer(),
                    Type: shared.ImageTypeEnumCrawled.ToPointer(),
                },
            },
            AgeGroup: sdk.String("veritatis"),
            Brand: sdk.String("itaque"),
            Capacity: &shared.Capacity{
                Unit: sdk.String("incidunt"),
                Value: sdk.String("enim"),
            },
            Color: sdk.String("consequatur"),
            Count: &shared.Count{
                Unit: sdk.String("est"),
                Value: sdk.String("quibusdam"),
            },
            Description: sdk.String("explicabo"),
            DisclosureDate: sdk.String("deserunt"),
            ExcludedDestination: []string{
                "quibusdam",
                "labore",
                "modi",
            },
            FeatureDescription: []shared.FeatureDescription{
                shared.FeatureDescription{
                    Headline: sdk.String("aliquid"),
                    Image: &shared.Image{
                        ImageURL: sdk.String("cupiditate"),
                        Status: shared.ImageStatusEnumProcessingError.ToPointer(),
                        Type: shared.ImageTypeEnumTypeUnspecified.ToPointer(),
                    },
                    Text: sdk.String("magni"),
                },
            },
            Flavor: sdk.String("assumenda"),
            Format: sdk.String("ipsam"),
            Gender: sdk.String("female"),
            Grocery: &shared.Grocery{
                ActiveIngredients: sdk.String("fugit"),
                AlcoholByVolume: sdk.Float64(6778.17),
                Allergens: sdk.String("excepturi"),
                DerivedNutritionClaim: []string{
                    "facilis",
                    "tempore",
                },
                Directions: sdk.String("labore"),
                Indications: sdk.String("delectus"),
                Ingredients: sdk.String("eum"),
                NutritionClaim: []string{
                    "eligendi",
                },
                StorageInstructions: sdk.String("sint"),
            },
            Gtin: []string{
                "provident",
                "necessitatibus",
            },
            ImageLink: &shared.Image{
                ImageURL: sdk.String("sint"),
                Status: shared.ImageStatusEnumDecodingError.ToPointer(),
                Type: shared.ImageTypeEnumTypeUnspecified.ToPointer(),
            },
            IncludedDestination: []string{
                "a",
                "dolorum",
                "in",
                "in",
            },
            ItemGroupID: sdk.String("illum"),
            Material: sdk.String("maiores"),
            Mpn: sdk.String("rerum"),
            Nutrition: &shared.Nutrition{
                AddedSugars: &shared.FloatUnit{
                    Amount: sdk.Float64(1162.02),
                    Unit: sdk.String("magnam"),
                },
                AddedSugarsDailyPercentage: sdk.Float64(7670.24),
                Calcium: &shared.FloatUnit{
                    Amount: sdk.Float64(8137.98),
                    Unit: sdk.String("ea"),
                },
                CalciumDailyPercentage: sdk.Float64(3965.06),
                Cholesterol: &shared.FloatUnit{
                    Amount: sdk.Float64(6754.39),
                    Unit: sdk.String("accusamus"),
                },
                CholesterolDailyPercentage: sdk.Float64(2497.96),
                DietaryFiber: &shared.FloatUnit{
                    Amount: sdk.Float64(5812.73),
                    Unit: sdk.String("enim"),
                },
                DietaryFiberDailyPercentage: sdk.Float64(8817.36),
                Energy: &shared.FloatUnit{
                    Amount: sdk.Float64(9654.17),
                    Unit: sdk.String("quidem"),
                },
                EnergyFromFat: &shared.FloatUnit{
                    Amount: sdk.Float64(5884.65),
                    Unit: sdk.String("nam"),
                },
                FolateDailyPercentage: sdk.Float64(6596.69),
                FolateFolicAcid: &shared.FloatUnit{
                    Amount: sdk.Float64(5013.24),
                    Unit: sdk.String("deleniti"),
                },
                FolateMcgDfe: sdk.Float64(9560.84),
                Iron: &shared.FloatUnit{
                    Amount: sdk.Float64(2305.33),
                    Unit: sdk.String("deserunt"),
                },
                IronDailyPercentage: sdk.Float64(3948.69),
                MonounsaturatedFat: &shared.FloatUnit{
                    Amount: sdk.Float64(4238.55),
                    Unit: sdk.String("natus"),
                },
                NutritionFactMeasure: sdk.String("omnis"),
                Polyols: &shared.FloatUnit{
                    Amount: sdk.Float64(4748.67),
                    Unit: sdk.String("perferendis"),
                },
                PolyunsaturatedFat: &shared.FloatUnit{
                    Amount: sdk.Float64(4701.32),
                    Unit: sdk.String("magnam"),
                },
                Potassium: &shared.FloatUnit{
                    Amount: sdk.Float64(7160.75),
                    Unit: sdk.String("id"),
                },
                PotassiumDailyPercentage: sdk.Float64(2879.91),
                PreparedSizeDescription: sdk.String("labore"),
                Protein: &shared.FloatUnit{
                    Amount: sdk.Float64(3834.62),
                    Unit: sdk.String("natus"),
                },
                ProteinDailyPercentage: sdk.Float64(7491.7),
                SaturatedFat: &shared.FloatUnit{
                    Amount: sdk.Float64(4287.69),
                    Unit: sdk.String("vero"),
                },
                SaturatedFatDailyPercentage: sdk.Float64(1354.74),
                ServingSizeDescription: sdk.String("architecto"),
                ServingSizeMeasure: &shared.FloatUnit{
                    Amount: sdk.Float64(2982.82),
                    Unit: sdk.String("et"),
                },
                ServingsPerContainer: sdk.String("excepturi"),
                Sodium: &shared.FloatUnit{
                    Amount: sdk.Float64(3540.47),
                    Unit: sdk.String("provident"),
                },
                SodiumDailyPercentage: sdk.Float64(5518.16),
                Starch: &shared.FloatUnit{
                    Amount: sdk.Float64(5743.25),
                    Unit: sdk.String("accusantium"),
                },
                TotalCarbohydrate: &shared.FloatUnit{
                    Amount: sdk.Float64(6532.01),
                    Unit: sdk.String("reiciendis"),
                },
                TotalCarbohydrateDailyPercentage: sdk.Float64(6521.03),
                TotalFat: &shared.FloatUnit{
                    Amount: sdk.Float64(3209.97),
                    Unit: sdk.String("eum"),
                },
                TotalFatDailyPercentage: sdk.Float64(2212.62),
                TotalSugars: &shared.FloatUnit{
                    Amount: sdk.Float64(8965.47),
                    Unit: sdk.String("odit"),
                },
                TotalSugarsDailyPercentage: sdk.Float64(3675.62),
                TransFat: &shared.FloatUnit{
                    Amount: sdk.Float64(972.6),
                    Unit: sdk.String("iure"),
                },
                TransFatDailyPercentage: sdk.Float64(9840.43),
                VitaminD: &shared.FloatUnit{
                    Amount: sdk.Float64(8919.24),
                    Unit: sdk.String("eius"),
                },
                VitaminDDailyPercentage: sdk.Float64(8061.94),
                VoluntaryNutritionFact: []shared.VoluntaryNutritionFact{
                    shared.VoluntaryNutritionFact{
                        DailyPercentage: sdk.Float64(7038.89),
                        Name: sdk.String("Alice Bradtke"),
                        Value: &shared.FloatUnit{
                            Amount: sdk.Float64(7142.42),
                            Unit: sdk.String("nihil"),
                        },
                    },
                    shared.VoluntaryNutritionFact{
                        DailyPercentage: sdk.Float64(9988.48),
                        Name: sdk.String("Louis Turner Sr."),
                        Value: &shared.FloatUnit{
                            Amount: sdk.Float64(5083.15),
                            Unit: sdk.String("natus"),
                        },
                    },
                    shared.VoluntaryNutritionFact{
                        DailyPercentage: sdk.Float64(1668.47),
                        Name: sdk.String("Angelica Stanton"),
                        Value: &shared.FloatUnit{
                            Amount: sdk.Float64(4113.97),
                            Unit: sdk.String("excepturi"),
                        },
                    },
                },
            },
            Pattern: sdk.String("odit"),
            ProductDetail: []shared.ProductDetail{
                shared.ProductDetail{
                    AttributeName: sdk.String("accusantium"),
                    AttributeValue: sdk.String("ab"),
                    SectionName: sdk.String("maiores"),
                },
                shared.ProductDetail{
                    AttributeName: sdk.String("quidem"),
                    AttributeValue: sdk.String("ipsam"),
                    SectionName: sdk.String("voluptate"),
                },
            },
            ProductHighlight: []string{
                "nam",
                "eaque",
            },
            ProductLine: sdk.String("pariatur"),
            ProductName: sdk.String("nemo"),
            ProductPageURL: sdk.String("voluptatibus"),
            ProductType: []string{
                "fugiat",
            },
            ReleaseDate: sdk.String("amet"),
            RichProductContent: []string{
                "cumque",
            },
            Scent: sdk.String("corporis"),
            Size: sdk.String("hic"),
            SizeSystem: sdk.String("libero"),
            SizeType: []string{
                "dolores",
                "quis",
                "totam",
            },
            SuggestedRetailPrice: &shared.Price{
                Amount: sdk.String("dignissimos"),
                Currency: sdk.String("eaque"),
            },
            TargetClientID: sdk.String("quis"),
            Theme: sdk.String("nesciunt"),
            Title: sdk.String("Mr."),
            VideoLink: []string{
                "dolores",
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nostrum"),
        Name: "Percy Mohr",
        OauthToken: sdk.String("voluptatem"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("error"),
    }, operations.ManufacturersAccountsProductsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
