# Products

### Available Operations

* [CountAllProducts](#countallproducts) - Retrieve the count of existing products
* [CreateProduct](#createproduct) - Create a new product
* [DeleteProduct](#deleteproduct) - Delete a single product
* [DeleteProducts](#deleteproducts) - Delete a list of products
* [GetAllOptions](#getalloptions) - Retrieve an aggregate of active Options in the library
* [GetAllProductsInPos](#getallproductsinpos) - Retrieve all products visible in POS
* [GetAllProductsV2](#getallproductsv2) - Retrieve all products visible in POS – v2
* [GetProduct](#getproduct) - Retrieve a single product
* [UpdateProduct](#updateproduct) - Update a single product

## CountAllProducts

Retrieve the count of existing products

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.CountAllProducts(ctx, operations.CountAllProductsRequest{
        OrganizationUUID: "11faf4b7-544e-4472-a802-857a5b40463a",
    }, operations.CountAllProductsSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCountResponses != nil {
        // handle response
    }
}
```

## CreateProduct

Create a new product

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
    res, err := s.Products.CreateProduct(ctx, operations.CreateProductRequest{
        ProductCreateRequest: shared.ProductCreateRequest{
            Categories: []string{
                "fugiat",
                "nostrum",
            },
            Category: &shared.CategoryDTO{
                Name: "Mrs. Lynn Wisozk Jr.",
                UUID: "e764ad73-34ec-41b7-81b3-6a08088d100e",
            },
            CreateWithDefaultTax: sdk.Bool(false),
            Description: sdk.String("delectus"),
            ExternalReference: sdk.String("mollitia"),
            ImageLookupKeys: []string{
                "officia",
                "sed",
                "voluptatem",
                "alias",
            },
            Metadata: &shared.MetadataDTO{
                InPos: false,
                Source: &shared.SourceDTO{
                    External: sdk.Bool(false),
                    Name: sdk.String("Terrell Barrows"),
                },
            },
            Name: "Mr. Alyssa Pouros",
            Online: &shared.OnlineProperties{
                Description: sdk.String("modi"),
                Presentation: &shared.Presentation{
                    AdditionalImageUrls: []string{
                        "voluptatibus",
                        "molestias",
                        "officia",
                        "libero",
                    },
                    DisplayImageURL: sdk.String("totam"),
                    MediaUrls: []string{
                        "aliquid",
                    },
                },
                Seo: &shared.SearchEngineOptimization{
                    MetaDescription: sdk.String("ea"),
                    Slug: sdk.String("impedit"),
                    Title: sdk.String("Ms."),
                },
                Shipping: &shared.Shipping{
                    ShippingPricingModel: shared.ShippingShippingPricingModelEnumFree.ToPointer(),
                    Weight: &shared.Weight{
                        Unit: shared.WeightUnitEnumKg,
                        Weight: 9673.38,
                    },
                    WeightInGrams: sdk.Int64(997918),
                },
                Status: shared.OnlinePropertiesStatusEnumHidden,
                Title: sdk.String("Miss"),
            },
            Presentation: &shared.PresentationDTO{
                BackgroundColor: sdk.String("natus"),
                ImageURL: sdk.String("accusamus"),
                TextColor: sdk.String("doloremque"),
            },
            TaxCode: sdk.String("nisi"),
            TaxExempt: sdk.Bool(false),
            TaxRates: []string{
                "ee4825c1-fc0e-4115-880b-ff918544ec42",
                "defcce8f-1977-4773-a635-62a7b408f05e",
                "3d48fdaf-313a-41f5-bd94-259c0b36f25e",
            },
            UnitName: sdk.String("officia"),
            UUID: "944f3b75-6c11-4f6c-b7a5-126243835bbc",
            VariantOptionDefinitions: &shared.VariantOptionDefinitions{
                Definitions: []shared.VariantOptionDefinition{
                    shared.VariantOptionDefinition{
                        Name: "Molly Cronin",
                        Properties: []shared.VariantOptionProperties{
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("veniam"),
                                Value: "quod",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("itaque"),
                                Value: "a",
                            },
                        },
                    },
                },
            },
            Variants: []shared.VariantDTO{
                shared.VariantDTO{
                    Barcode: sdk.String("enim"),
                    CostPrice: &shared.Price{
                        Amount: 987759,
                        CurrencyID: shared.PriceCurrencyIDEnumTnd,
                    },
                    Description: sdk.String("officiis"),
                    Name: sdk.String("Miss Linda Nader"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Kristin Mertz",
                            Value: "architecto",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("accusantium"),
                        ImageURL: sdk.String("perferendis"),
                        TextColor: sdk.String("veritatis"),
                    },
                    Price: &shared.Price{
                        Amount: 590585,
                        CurrencyID: shared.PriceCurrencyIDEnumSpl,
                    },
                    Sku: sdk.String("iure"),
                    UUID: "dc5e3476-2799-4bfb-be69-49fb2bb4ecae",
                    VatPercentage: sdk.Float64(4230.54),
                },
                shared.VariantDTO{
                    Barcode: sdk.String("quo"),
                    CostPrice: &shared.Price{
                        Amount: 198991,
                        CurrencyID: shared.PriceCurrencyIDEnumTvd,
                    },
                    Description: sdk.String("nemo"),
                    Name: sdk.String("Johnathan Franey"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Dewey Hand",
                            Value: "eveniet",
                        },
                        shared.VariantOption{
                            Name: "Randall Schmitt III",
                            Value: "deserunt",
                        },
                        shared.VariantOption{
                            Name: "Neal Ortiz",
                            Value: "quo",
                        },
                        shared.VariantOption{
                            Name: "Theresa Jacobi",
                            Value: "eligendi",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("hic"),
                        ImageURL: sdk.String("nostrum"),
                        TextColor: sdk.String("officiis"),
                    },
                    Price: &shared.Price{
                        Amount: 603650,
                        CurrencyID: shared.PriceCurrencyIDEnumTzs,
                    },
                    Sku: sdk.String("error"),
                    UUID: "a4578adc-1ac6-400d-ac00-1ac802e2ec09",
                    VatPercentage: sdk.Float64(9509.56),
                },
                shared.VariantDTO{
                    Barcode: sdk.String("maiores"),
                    CostPrice: &shared.Price{
                        Amount: 514462,
                        CurrencyID: shared.PriceCurrencyIDEnumZmk,
                    },
                    Description: sdk.String("alias"),
                    Name: sdk.String("Jordan Carter"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Monica Koch",
                            Value: "quasi",
                        },
                        shared.VariantOption{
                            Name: "Mr. Leigh Mann",
                            Value: "beatae",
                        },
                        shared.VariantOption{
                            Name: "Cheryl Conn",
                            Value: "alias",
                        },
                        shared.VariantOption{
                            Name: "Chester Barton",
                            Value: "ex",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("quas"),
                        ImageURL: sdk.String("veritatis"),
                        TextColor: sdk.String("ullam"),
                    },
                    Price: &shared.Price{
                        Amount: 62688,
                        CurrencyID: shared.PriceCurrencyIDEnumOmr,
                    },
                    Sku: sdk.String("incidunt"),
                    UUID: "72af923c-5949-4f83-b350-cf876ffb901c",
                    VatPercentage: sdk.Float64(4175.39),
                },
                shared.VariantDTO{
                    Barcode: sdk.String("eveniet"),
                    CostPrice: &shared.Price{
                        Amount: 781582,
                        CurrencyID: shared.PriceCurrencyIDEnumShp,
                    },
                    Description: sdk.String("quidem"),
                    Name: sdk.String("Silvia Considine"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Claude Kutch",
                            Value: "a",
                        },
                        shared.VariantOption{
                            Name: "Emilio Waters",
                            Value: "corporis",
                        },
                        shared.VariantOption{
                            Name: "Gretchen Halvorson",
                            Value: "eum",
                        },
                        shared.VariantOption{
                            Name: "Steven Nienow IV",
                            Value: "eius",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("quisquam"),
                        ImageURL: sdk.String("eos"),
                        TextColor: sdk.String("nobis"),
                    },
                    Price: &shared.Price{
                        Amount: 620054,
                        CurrencyID: shared.PriceCurrencyIDEnumSyp,
                    },
                    Sku: sdk.String("quia"),
                    UUID: "47c88373-a40e-4194-af32-e55055756f5d",
                    VatPercentage: sdk.Float64(3664.8),
                },
            },
            VatPercentage: sdk.Float64(3827.64),
        },
        OrganizationUUID: "d0bd0af2-dfe1-43db-8f62-cba3f8941aeb",
        ReturnEntity: sdk.Bool(false),
    }, operations.CreateProductSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductResponse != nil {
        // handle response
    }
}
```

## DeleteProduct

Delete a single product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.DeleteProduct(ctx, operations.DeleteProductRequest{
        OrganizationUUID: "c0b80a69-24d3-4b2e-8fcc-8f895010f5dd",
        ProductUUID: "3d6fa180-4e54-4c82-b168-a363c8873e48",
    }, operations.DeleteProductSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProducts

Delete a list of products

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.DeleteProducts(ctx, operations.DeleteProductsRequest{
        OrganizationUUID: "4380b1f6-b8ca-4275-a60a-04c495cc6991",
        UUID: []string{
            "1b51c1bd-b1cf-44b8-88eb-dfc4ccca99bc",
            "7fc0b2dc-e108-473e-82b0-06d678878ba8",
        },
    }, operations.DeleteProductsSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllOptions

Retrieve an aggregate of active Options in the library

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.GetAllOptions(ctx, operations.GetAllOptionsRequest{
        OrganizationUUID: "581a5820-8c54-4fef-a9c9-5f2eac5565d3",
    }, operations.GetAllOptionsSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VariantOptionsResponses != nil {
        // handle response
    }
}
```

## GetAllProductsInPos

Retrieve all products visible in POS

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.GetAllProductsInPos(ctx, operations.GetAllProductsInPosRequest{
        OrganizationUUID: "07cfee81-206e-4281-bfa4-a41c480d3f21",
    }, operations.GetAllProductsInPosSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductResponses != nil {
        // handle response
    }
}
```

## GetAllProductsV2

Retrieve all products visible in POS – v2

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.GetAllProductsV2(ctx, operations.GetAllProductsV2Request{
        OrganizationUUID: "32af0310-2d51-44f4-8c6f-18bf9621a6a4",
        Sort: sdk.Bool(false),
    }, operations.GetAllProductsV2Security{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductResponses != nil {
        // handle response
    }
}
```

## GetProduct

Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.GetProduct(ctx, operations.GetProductRequest{
        IfNoneMatch: sdk.String("tenetur"),
        OrganizationUUID: "77a87ee3-e4be-4752-865b-34418e3bb91c",
        ProductUUID: "8d975e0e-8419-4d8f-84f1-44f3e07edcc4",
    }, operations.GetProductSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductResponse != nil {
        // handle response
    }
}
```

## UpdateProduct

Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.

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
    res, err := s.Products.UpdateProduct(ctx, operations.UpdateProductRequest{
        FullProductUpdateRequest: shared.FullProductUpdateRequest{
            Categories: []string{
                "deserunt",
                "ad",
                "reiciendis",
            },
            Category: &shared.CategoryDTO{
                Name: "Francis Osinski",
                UUID: "905a972e-0567-4282-a7b2-d309470bf7a4",
            },
            Description: sdk.String("delectus"),
            ExternalReference: sdk.String("culpa"),
            ImageLookupKeys: []string{
                "iusto",
                "quod",
                "voluptatibus",
            },
            Metadata: &shared.MetadataDTO{
                InPos: false,
                Source: &shared.SourceDTO{
                    External: sdk.Bool(false),
                    Name: sdk.String("Sheila Hermann"),
                },
            },
            Name: "Matt Walsh",
            Online: &shared.OnlineProperties{
                Description: sdk.String("necessitatibus"),
                Presentation: &shared.Presentation{
                    AdditionalImageUrls: []string{
                        "maiores",
                        "laboriosam",
                        "voluptatem",
                    },
                    DisplayImageURL: sdk.String("optio"),
                    MediaUrls: []string{
                        "sunt",
                    },
                },
                Seo: &shared.SearchEngineOptimization{
                    MetaDescription: sdk.String("vitae"),
                    Slug: sdk.String("voluptatibus"),
                    Title: sdk.String("Mr."),
                },
                Shipping: &shared.Shipping{
                    ShippingPricingModel: shared.ShippingShippingPricingModelEnumFree.ToPointer(),
                    Weight: &shared.Weight{
                        Unit: shared.WeightUnitEnumKg,
                        Weight: 6995.36,
                    },
                    WeightInGrams: sdk.Int64(446793),
                },
                Status: shared.OnlinePropertiesStatusEnumActive,
                Title: sdk.String("Dr."),
            },
            Presentation: &shared.PresentationDTO{
                BackgroundColor: sdk.String("ratione"),
                ImageURL: sdk.String("dolor"),
                TextColor: sdk.String("nisi"),
            },
            TaxCode: sdk.String("dignissimos"),
            TaxExempt: sdk.Bool(false),
            TaxRates: []string{
                "e1a0cc8d-f79f-40a3-96d9-0c364b7c15df",
                "bace188b-1c4e-4e2c-8c6c-e611feeb1c7c",
                "bdb6eec7-4378-4ba2-9317-747dc915ad2c",
                "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
            },
            UnitName: sdk.String("ab"),
            UUID: "43f5a6c9-8b55-4554-880d-40bcacc6cbd6",
            VariantOptionDefinitions: &shared.VariantOptionDefinitions{
                Definitions: []shared.VariantOptionDefinition{
                    shared.VariantOptionDefinition{
                        Name: "Shawna Feil",
                        Properties: []shared.VariantOptionProperties{
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("voluptatem"),
                                Value: "provident",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("adipisci"),
                                Value: "accusantium",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("magnam"),
                                Value: "repellat",
                            },
                        },
                    },
                    shared.VariantOptionDefinition{
                        Name: "Benjamin Kautzer",
                        Properties: []shared.VariantOptionProperties{
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("fugit"),
                                Value: "ipsam",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("nostrum"),
                                Value: "sequi",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("voluptatum"),
                                Value: "quasi",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("error"),
                                Value: "nobis",
                            },
                        },
                    },
                    shared.VariantOptionDefinition{
                        Name: "Colleen Gibson DVM",
                        Properties: []shared.VariantOptionProperties{
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("fugit"),
                                Value: "voluptatem",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("repudiandae"),
                                Value: "corporis",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("ea"),
                                Value: "eos",
                            },
                            shared.VariantOptionProperties{
                                ImageURL: sdk.String("aliquam"),
                                Value: "blanditiis",
                            },
                        },
                    },
                },
            },
            Variants: []shared.VariantDTO{
                shared.VariantDTO{
                    Barcode: sdk.String("maiores"),
                    CostPrice: &shared.Price{
                        Amount: 990652,
                        CurrencyID: shared.PriceCurrencyIDEnumKes,
                    },
                    Description: sdk.String("nesciunt"),
                    Name: sdk.String("Mr. Matt McLaughlin"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Salvatore Paucek",
                            Value: "fugit",
                        },
                        shared.VariantOption{
                            Name: "Colleen Huel",
                            Value: "laboriosam",
                        },
                        shared.VariantOption{
                            Name: "Andrew Ward Jr.",
                            Value: "qui",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("consequuntur"),
                        ImageURL: sdk.String("vitae"),
                        TextColor: sdk.String("quidem"),
                    },
                    Price: &shared.Price{
                        Amount: 193334,
                        CurrencyID: shared.PriceCurrencyIDEnumDop,
                    },
                    Sku: sdk.String("exercitationem"),
                    UUID: "d89acb3e-cfda-48d0-8549-ef03004978a6",
                    VatPercentage: sdk.Float64(1017.7),
                },
                shared.VariantDTO{
                    Barcode: sdk.String("a"),
                    CostPrice: &shared.Price{
                        Amount: 673010,
                        CurrencyID: shared.PriceCurrencyIDEnumBgn,
                    },
                    Description: sdk.String("quod"),
                    Name: sdk.String("Clarence Barton"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Jared Koepp DVM",
                            Value: "reiciendis",
                        },
                        shared.VariantOption{
                            Name: "Jared Blick",
                            Value: "fuga",
                        },
                        shared.VariantOption{
                            Name: "Tara Feil",
                            Value: "animi",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("sequi"),
                        ImageURL: sdk.String("eligendi"),
                        TextColor: sdk.String("voluptatum"),
                    },
                    Price: &shared.Price{
                        Amount: 21668,
                        CurrencyID: shared.PriceCurrencyIDEnumQar,
                    },
                    Sku: sdk.String("omnis"),
                    UUID: "7ff334cd-df85-47a9-a618-76c6ab21d29d",
                    VatPercentage: sdk.Float64(9506.61),
                },
                shared.VariantDTO{
                    Barcode: sdk.String("impedit"),
                    CostPrice: &shared.Price{
                        Amount: 601803,
                        CurrencyID: shared.PriceCurrencyIDEnumGel,
                    },
                    Description: sdk.String("facere"),
                    Name: sdk.String("Ora Walter"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Rene Ernser Jr.",
                            Value: "eum",
                        },
                        shared.VariantOption{
                            Name: "Maggie Jones",
                            Value: "fugiat",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("doloremque"),
                        ImageURL: sdk.String("voluptatem"),
                        TextColor: sdk.String("alias"),
                    },
                    Price: &shared.Price{
                        Amount: 244157,
                        CurrencyID: shared.PriceCurrencyIDEnumIdr,
                    },
                    Sku: sdk.String("quis"),
                    UUID: "338cec08-6fa2-41e9-952c-b3119167b8e3",
                    VatPercentage: sdk.Float64(7698.72),
                },
                shared.VariantDTO{
                    Barcode: sdk.String("quos"),
                    CostPrice: &shared.Price{
                        Amount: 849690,
                        CurrencyID: shared.PriceCurrencyIDEnumSdd,
                    },
                    Description: sdk.String("voluptatem"),
                    Name: sdk.String("Bertha Altenwerth"),
                    Options: []shared.VariantOption{
                        shared.VariantOption{
                            Name: "Vincent Hodkiewicz",
                            Value: "tenetur",
                        },
                        shared.VariantOption{
                            Name: "Theodore Hamill",
                            Value: "alias",
                        },
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("ex"),
                        ImageURL: sdk.String("quibusdam"),
                        TextColor: sdk.String("dicta"),
                    },
                    Price: &shared.Price{
                        Amount: 154840,
                        CurrencyID: shared.PriceCurrencyIDEnumJpy,
                    },
                    Sku: sdk.String("neque"),
                    UUID: "d48e935c-2c9e-481f-b0be-3e43202d7216",
                    VatPercentage: sdk.Float64(3216.97),
                },
            },
            VatPercentage: sdk.Float64(4531.98),
        },
        IfMatch: sdk.String("vel"),
        OrganizationUUID: "50664187-0d9d-421f-9ad0-30c4ecc11a08",
        ProductUUID: "36429068-b850-42a5-9e7f-73bc845e320a",
    }, operations.UpdateProductSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
