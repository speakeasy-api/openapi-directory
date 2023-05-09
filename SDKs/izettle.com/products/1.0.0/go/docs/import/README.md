# Import

### Available Operations

* [GetLatestImportStatus](#getlatestimportstatus) - Get status for latest import
* [GetStatusByUUID](#getstatusbyuuid) - Get status for an import
* [ImportLibraryV2](#importlibraryv2) - Import library items

## GetLatestImportStatus

Get status for latest import

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
    res, err := s.Import.GetLatestImportStatus(ctx, operations.GetLatestImportStatusRequest{
        OrganizationUUID: "2dac7af5-15cc-4413-aa63-aae8d67864db",
    }, operations.GetLatestImportStatusSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportResponse != nil {
        // handle response
    }
}
```

## GetStatusByUUID

Get status for an import

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
    res, err := s.Import.GetStatusByUUID(ctx, operations.GetStatusByUUIDRequest{
        ImportUUID: "b675fd5e-60b3-475e-94f6-fbee41f33317",
        OrganizationUUID: "fe35b60e-b1ea-4426-955b-a3c28744ed53",
    }, operations.GetStatusByUUIDSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportResponse != nil {
        // handle response
    }
}
```

## ImportLibraryV2

Import library items

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
    res, err := s.Import.ImportLibraryV2(ctx, operations.ImportLibraryV2Request{
        BulkImportRequest: shared.BulkImportRequest{
            Products: []shared.FullProductUpdateRequest{
                shared.FullProductUpdateRequest{
                    Categories: []string{
                        "quas",
                        "hic",
                        "nesciunt",
                    },
                    Category: &shared.CategoryDTO{
                        Name: "Byron Stroman",
                        UUID: "5c0b2f2f-b7b1-494a-a76b-26916fe1f08f",
                    },
                    Description: sdk.String("incidunt"),
                    ExternalReference: sdk.String("sed"),
                    ImageLookupKeys: []string{
                        "eius",
                        "necessitatibus",
                        "ipsum",
                    },
                    Metadata: &shared.MetadataDTO{
                        InPos: false,
                        Source: &shared.SourceDTO{
                            External: sdk.Bool(false),
                            Name: sdk.String("Kristina Lueilwitz"),
                        },
                    },
                    Name: "Allison Wisozk I",
                    Online: &shared.OnlineProperties{
                        Description: sdk.String("officiis"),
                        Presentation: &shared.Presentation{
                            AdditionalImageUrls: []string{
                                "facilis",
                                "quaerat",
                                "incidunt",
                            },
                            DisplayImageURL: sdk.String("ipsam"),
                            MediaUrls: []string{
                                "rem",
                                "sit",
                                "nobis",
                                "error",
                            },
                        },
                        Seo: &shared.SearchEngineOptimization{
                            MetaDescription: sdk.String("veniam"),
                            Slug: sdk.String("minima"),
                            Title: sdk.String("Dr."),
                        },
                        Shipping: &shared.Shipping{
                            ShippingPricingModel: shared.ShippingShippingPricingModelEnumStandard.ToPointer(),
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumLb,
                                Weight: 1685.76,
                            },
                            WeightInGrams: sdk.Int64(48690),
                        },
                        Status: shared.OnlinePropertiesStatusEnumHidden,
                        Title: sdk.String("Mrs."),
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("veniam"),
                        ImageURL: sdk.String("in"),
                        TextColor: sdk.String("officiis"),
                    },
                    TaxCode: sdk.String("beatae"),
                    TaxExempt: sdk.Bool(false),
                    TaxRates: []string{
                        "58b6a89f-be3a-45aa-8e48-24d0ab407508",
                        "8e518620-65e9-404f-bb11-94b8abf603a7",
                        "9f9dfe0a-b7da-48a5-8ce1-87f86bc173d6",
                    },
                    UnitName: sdk.String("atque"),
                    UUID: "9eee9526-f8d9-486e-881e-ad4f0e101256",
                    VariantOptionDefinitions: &shared.VariantOptionDefinitions{
                        Definitions: []shared.VariantOptionDefinition{
                            shared.VariantOptionDefinition{
                                Name: "Ross Gusikowski",
                                Properties: []shared.VariantOptionProperties{
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("officiis"),
                                        Value: "perspiciatis",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("in"),
                                        Value: "adipisci",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("eveniet"),
                                        Value: "occaecati",
                                    },
                                },
                            },
                        },
                    },
                    Variants: []shared.VariantDTO{
                        shared.VariantDTO{
                            Barcode: sdk.String("fugit"),
                            CostPrice: &shared.Price{
                                Amount: 661118,
                                CurrencyID: shared.PriceCurrencyIDEnumHnl,
                            },
                            Description: sdk.String("reprehenderit"),
                            Name: sdk.String("Jerry Hessel"),
                            Options: []shared.VariantOption{
                                shared.VariantOption{
                                    Name: "Ms. Brian Kerluke IV",
                                    Value: "eveniet",
                                },
                            },
                            Presentation: &shared.PresentationDTO{
                                BackgroundColor: sdk.String("qui"),
                                ImageURL: sdk.String("cum"),
                                TextColor: sdk.String("iure"),
                            },
                            Price: &shared.Price{
                                Amount: 898063,
                                CurrencyID: shared.PriceCurrencyIDEnumCsd,
                            },
                            Sku: sdk.String("laborum"),
                            UUID: "b8845f05-97a6-40ff-aa54-a31e94764a3e",
                            VatPercentage: sdk.Float64(5145.13),
                        },
                    },
                    VatPercentage: sdk.Float64(4326.06),
                },
                shared.FullProductUpdateRequest{
                    Categories: []string{
                        "recusandae",
                        "esse",
                    },
                    Category: &shared.CategoryDTO{
                        Name: "Alvin Kemmer",
                        UUID: "251a5a9d-a660-4ff5-bbfa-ad4f9efc1b45",
                    },
                    Description: sdk.String("inventore"),
                    ExternalReference: sdk.String("fugit"),
                    ImageLookupKeys: []string{
                        "quae",
                        "perferendis",
                        "velit",
                        "aspernatur",
                    },
                    Metadata: &shared.MetadataDTO{
                        InPos: false,
                        Source: &shared.SourceDTO{
                            External: sdk.Bool(false),
                            Name: sdk.String("Monica Lebsack"),
                        },
                    },
                    Name: "Mrs. Miranda Kemmer V",
                    Online: &shared.OnlineProperties{
                        Description: sdk.String("provident"),
                        Presentation: &shared.Presentation{
                            AdditionalImageUrls: []string{
                                "soluta",
                                "hic",
                                "illum",
                                "eaque",
                            },
                            DisplayImageURL: sdk.String("earum"),
                            MediaUrls: []string{
                                "maiores",
                                "debitis",
                                "aliquid",
                            },
                        },
                        Seo: &shared.SearchEngineOptimization{
                            MetaDescription: sdk.String("porro"),
                            Slug: sdk.String("suscipit"),
                            Title: sdk.String("Mrs."),
                        },
                        Shipping: &shared.Shipping{
                            ShippingPricingModel: shared.ShippingShippingPricingModelEnumFree.ToPointer(),
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumLb,
                                Weight: 6849.35,
                            },
                            WeightInGrams: sdk.Int64(189062),
                        },
                        Status: shared.OnlinePropertiesStatusEnumHidden,
                        Title: sdk.String("Dr."),
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("nulla"),
                        ImageURL: sdk.String("consequatur"),
                        TextColor: sdk.String("quasi"),
                    },
                    TaxCode: sdk.String("et"),
                    TaxExempt: sdk.Bool(false),
                    TaxRates: []string{
                        "996312fd-e047-4717-b8ff-61d017476360",
                        "a15db6a6-6065-49a1-adea-ab5851d6c645",
                    },
                    UnitName: sdk.String("expedita"),
                    UUID: "08b61891-baa0-4fe1-ade0-08e6f8c5f350",
                    VariantOptionDefinitions: &shared.VariantOptionDefinitions{
                        Definitions: []shared.VariantOptionDefinition{
                            shared.VariantOptionDefinition{
                                Name: "Myron Spinka",
                                Properties: []shared.VariantOptionProperties{
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("dolor"),
                                        Value: "aliquam",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("inventore"),
                                        Value: "deleniti",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("veritatis"),
                                        Value: "tempora",
                                    },
                                },
                            },
                            shared.VariantOptionDefinition{
                                Name: "Mrs. Elizabeth Bradtke",
                                Properties: []shared.VariantOptionProperties{
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("laudantium"),
                                        Value: "quae",
                                    },
                                },
                            },
                            shared.VariantOptionDefinition{
                                Name: "Janis Hills V",
                                Properties: []shared.VariantOptionProperties{
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("impedit"),
                                        Value: "officiis",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("esse"),
                                        Value: "necessitatibus",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("sed"),
                                        Value: "veniam",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("nesciunt"),
                                        Value: "expedita",
                                    },
                                },
                            },
                            shared.VariantOptionDefinition{
                                Name: "Kristin Legros",
                                Properties: []shared.VariantOptionProperties{
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("porro"),
                                        Value: "autem",
                                    },
                                },
                            },
                        },
                    },
                    Variants: []shared.VariantDTO{
                        shared.VariantDTO{
                            Barcode: sdk.String("laboriosam"),
                            CostPrice: &shared.Price{
                                Amount: 927212,
                                CurrencyID: shared.PriceCurrencyIDEnumChf,
                            },
                            Description: sdk.String("voluptatem"),
                            Name: sdk.String("Alyssa Boyer"),
                            Options: []shared.VariantOption{
                                shared.VariantOption{
                                    Name: "Kerry Dickinson",
                                    Value: "optio",
                                },
                                shared.VariantOption{
                                    Name: "Herman Klocko",
                                    Value: "voluptas",
                                },
                                shared.VariantOption{
                                    Name: "Ida Lubowitz",
                                    Value: "ducimus",
                                },
                                shared.VariantOption{
                                    Name: "Lee Larkin IV",
                                    Value: "fugiat",
                                },
                            },
                            Presentation: &shared.PresentationDTO{
                                BackgroundColor: sdk.String("dicta"),
                                ImageURL: sdk.String("nisi"),
                                TextColor: sdk.String("consequuntur"),
                            },
                            Price: &shared.Price{
                                Amount: 233078,
                                CurrencyID: shared.PriceCurrencyIDEnumAud,
                            },
                            Sku: sdk.String("cupiditate"),
                            UUID: "fb092992-1aef-4b9f-98c4-d86e68e4be05",
                            VatPercentage: sdk.Float64(4259.46),
                        },
                        shared.VariantDTO{
                            Barcode: sdk.String("alias"),
                            CostPrice: &shared.Price{
                                Amount: 93894,
                                CurrencyID: shared.PriceCurrencyIDEnumEgp,
                            },
                            Description: sdk.String("maiores"),
                            Name: sdk.String("Bobbie Stokes"),
                            Options: []shared.VariantOption{
                                shared.VariantOption{
                                    Name: "Monique Harvey",
                                    Value: "impedit",
                                },
                                shared.VariantOption{
                                    Name: "Alonzo Zemlak",
                                    Value: "debitis",
                                },
                            },
                            Presentation: &shared.PresentationDTO{
                                BackgroundColor: sdk.String("delectus"),
                                ImageURL: sdk.String("quae"),
                                TextColor: sdk.String("minus"),
                            },
                            Price: &shared.Price{
                                Amount: 685478,
                                CurrencyID: shared.PriceCurrencyIDEnumRon,
                            },
                            Sku: sdk.String("consectetur"),
                            UUID: "383c2beb-4773-473c-8d72-f64d1db1f2c4",
                            VatPercentage: sdk.Float64(2470.45),
                        },
                        shared.VariantDTO{
                            Barcode: sdk.String("illo"),
                            CostPrice: &shared.Price{
                                Amount: 36561,
                                CurrencyID: shared.PriceCurrencyIDEnumKgs,
                            },
                            Description: sdk.String("ea"),
                            Name: sdk.String("Leigh Mante"),
                            Options: []shared.VariantOption{
                                shared.VariantOption{
                                    Name: "Merle Carroll",
                                    Value: "iste",
                                },
                                shared.VariantOption{
                                    Name: "John Huel",
                                    Value: "laborum",
                                },
                            },
                            Presentation: &shared.PresentationDTO{
                                BackgroundColor: sdk.String("non"),
                                ImageURL: sdk.String("dolor"),
                                TextColor: sdk.String("iusto"),
                            },
                            Price: &shared.Price{
                                Amount: 24753,
                                CurrencyID: shared.PriceCurrencyIDEnumArs,
                            },
                            Sku: sdk.String("consequatur"),
                            UUID: "ae6b6bc9-b8f7-459e-ac55-a9741d311352",
                            VatPercentage: sdk.Float64(6113.28),
                        },
                        shared.VariantDTO{
                            Barcode: sdk.String("ex"),
                            CostPrice: &shared.Price{
                                Amount: 367626,
                                CurrencyID: shared.PriceCurrencyIDEnumSit,
                            },
                            Description: sdk.String("libero"),
                            Name: sdk.String("Omar Kuhlman Sr."),
                            Options: []shared.VariantOption{
                                shared.VariantOption{
                                    Name: "Amy Gleason",
                                    Value: "itaque",
                                },
                                shared.VariantOption{
                                    Name: "Tracy Mills",
                                    Value: "maxime",
                                },
                            },
                            Presentation: &shared.PresentationDTO{
                                BackgroundColor: sdk.String("quia"),
                                ImageURL: sdk.String("quia"),
                                TextColor: sdk.String("nostrum"),
                            },
                            Price: &shared.Price{
                                Amount: 605712,
                                CurrencyID: shared.PriceCurrencyIDEnumSek,
                            },
                            Sku: sdk.String("dicta"),
                            UUID: "abda8c07-0e10-484c-b067-2d1ad879eeb9",
                            VatPercentage: sdk.Float64(4097.26),
                        },
                    },
                    VatPercentage: sdk.Float64(4218.19),
                },
                shared.FullProductUpdateRequest{
                    Categories: []string{
                        "rerum",
                        "laudantium",
                    },
                    Category: &shared.CategoryDTO{
                        Name: "Cecelia Wiza",
                        UUID: "02bae0be-2d78-4225-9e3e-a4b5197f9244",
                    },
                    Description: sdk.String("nesciunt"),
                    ExternalReference: sdk.String("at"),
                    ImageLookupKeys: []string{
                        "dignissimos",
                        "optio",
                        "necessitatibus",
                    },
                    Metadata: &shared.MetadataDTO{
                        InPos: false,
                        Source: &shared.SourceDTO{
                            External: sdk.Bool(false),
                            Name: sdk.String("Phyllis Quitzon"),
                        },
                    },
                    Name: "Nichole Halvorson",
                    Online: &shared.OnlineProperties{
                        Description: sdk.String("minus"),
                        Presentation: &shared.Presentation{
                            AdditionalImageUrls: []string{
                                "modi",
                                "corporis",
                            },
                            DisplayImageURL: sdk.String("magnam"),
                            MediaUrls: []string{
                                "maiores",
                                "tempore",
                                "aperiam",
                                "libero",
                            },
                        },
                        Seo: &shared.SearchEngineOptimization{
                            MetaDescription: sdk.String("ratione"),
                            Slug: sdk.String("labore"),
                            Title: sdk.String("Ms."),
                        },
                        Shipping: &shared.Shipping{
                            ShippingPricingModel: shared.ShippingShippingPricingModelEnumStandard.ToPointer(),
                            Weight: &shared.Weight{
                                Unit: shared.WeightUnitEnumG,
                                Weight: 7791.8,
                            },
                            WeightInGrams: sdk.Int64(242099),
                        },
                        Status: shared.OnlinePropertiesStatusEnumHidden,
                        Title: sdk.String("Miss"),
                    },
                    Presentation: &shared.PresentationDTO{
                        BackgroundColor: sdk.String("nostrum"),
                        ImageURL: sdk.String("est"),
                        TextColor: sdk.String("impedit"),
                    },
                    TaxCode: sdk.String("delectus"),
                    TaxExempt: sdk.Bool(false),
                    TaxRates: []string{
                        "e2fd5707-5779-4291-b7de-ac646ecb5734",
                        "09e3eb1e-5a2b-412e-b07f-116db99545fc",
                        "95fa8897-0e18-49db-b30f-cb33ea055b19",
                    },
                    UnitName: sdk.String("molestiae"),
                    UUID: "cd44e2f5-2d82-4d35-93bb-6f48b656bcdb",
                    VariantOptionDefinitions: &shared.VariantOptionDefinitions{
                        Definitions: []shared.VariantOptionDefinition{
                            shared.VariantOptionDefinition{
                                Name: "Shari Wiza",
                                Properties: []shared.VariantOptionProperties{
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("rerum"),
                                        Value: "eos",
                                    },
                                    shared.VariantOptionProperties{
                                        ImageURL: sdk.String("reprehenderit"),
                                        Value: "nostrum",
                                    },
                                },
                            },
                        },
                    },
                    Variants: []shared.VariantDTO{
                        shared.VariantDTO{
                            Barcode: sdk.String("iusto"),
                            CostPrice: &shared.Price{
                                Amount: 664965,
                                CurrencyID: shared.PriceCurrencyIDEnumMga,
                            },
                            Description: sdk.String("eligendi"),
                            Name: sdk.String("Fredrick Towne"),
                            Options: []shared.VariantOption{
                                shared.VariantOption{
                                    Name: "Sherman Brown",
                                    Value: "fugiat",
                                },
                            },
                            Presentation: &shared.PresentationDTO{
                                BackgroundColor: sdk.String("ad"),
                                ImageURL: sdk.String("aspernatur"),
                                TextColor: sdk.String("enim"),
                            },
                            Price: &shared.Price{
                                Amount: 965090,
                                CurrencyID: shared.PriceCurrencyIDEnumLrd,
                            },
                            Sku: sdk.String("dignissimos"),
                            UUID: "b114eeb5-2ff7-485f-8378-14d4c98e0c2b",
                            VatPercentage: sdk.Float64(7119.91),
                        },
                    },
                    VatPercentage: sdk.Float64(5591.74),
                },
            },
        },
        OrganizationUUID: "9eb75dad-636c-4600-903d-8bb31180f739",
    }, operations.ImportLibraryV2Security{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportResponse != nil {
        // handle response
    }
}
```
