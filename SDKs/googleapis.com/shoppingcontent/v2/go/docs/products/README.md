# Products

### Available Operations

* [ContentProductsCustombatch](#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [ContentProductsDelete](#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [ContentProductsGet](#contentproductsget) - Retrieves a product from your Merchant Center account.
* [ContentProductsInsert](#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [ContentProductsList](#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

## ContentProductsCustombatch

Retrieves, inserts, and deletes multiple products in a single request.

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
    res, err := s.Products.ContentProductsCustombatch(ctx, operations.ContentProductsCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProductsCustomBatchRequest: &shared.ProductsCustomBatchRequest{
            Entries: []shared.ProductsCustomBatchRequestEntry{
                shared.ProductsCustomBatchRequestEntry{
                    BatchID: sdk.Int64(109683),
                    MerchantID: sdk.String("aliquid"),
                    Method: sdk.String("ad"),
                    Product: &shared.Product{
                        AdditionalImageLinks: []string{
                            "vel",
                            "minima",
                        },
                        AdditionalProductTypes: []string{
                            "vel",
                        },
                        Adult: sdk.Bool(false),
                        AdwordsGrouping: sdk.String("laboriosam"),
                        AdwordsLabels: []string{
                            "quasi",
                            "rem",
                        },
                        AdwordsRedirect: sdk.String("dignissimos"),
                        AgeGroup: sdk.String("doloremque"),
                        Aspects: []shared.ProductAspect{
                            shared.ProductAspect{
                                AspectName: sdk.String("provident"),
                                DestinationName: sdk.String("facere"),
                                Intention: sdk.String("sed"),
                            },
                            shared.ProductAspect{
                                AspectName: sdk.String("inventore"),
                                DestinationName: sdk.String("voluptatibus"),
                                Intention: sdk.String("unde"),
                            },
                            shared.ProductAspect{
                                AspectName: sdk.String("deserunt"),
                                DestinationName: sdk.String("repellendus"),
                                Intention: sdk.String("consequatur"),
                            },
                            shared.ProductAspect{
                                AspectName: sdk.String("adipisci"),
                                DestinationName: sdk.String("doloremque"),
                                Intention: sdk.String("optio"),
                            },
                        },
                        Availability: sdk.String("tempora"),
                        AvailabilityDate: sdk.String("debitis"),
                        Brand: sdk.String("cumque"),
                        CanonicalLink: sdk.String("maxime"),
                        Channel: sdk.String("et"),
                        Color: sdk.String("beatae"),
                        Condition: sdk.String("id"),
                        ContentLanguage: sdk.String("consequatur"),
                        CostOfGoodsSold: &shared.Price{
                            Currency: sdk.String("quos"),
                            Value: sdk.String("ratione"),
                        },
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                Name: sdk.String("Mrs. Julia Morissette"),
                                Type: sdk.String("facilis"),
                                Unit: sdk.String("laudantium"),
                                Value: sdk.String("ullam"),
                            },
                            shared.CustomAttribute{
                                Name: sdk.String("Lori Nitzsche"),
                                Type: sdk.String("accusamus"),
                                Unit: sdk.String("iusto"),
                                Value: sdk.String("sapiente"),
                            },
                        },
                        CustomGroups: []shared.CustomGroup{
                            shared.CustomGroup{
                                Attributes: []shared.CustomAttribute{
                                    shared.CustomAttribute{
                                        Name: sdk.String("Devin Lakin"),
                                        Type: sdk.String("officiis"),
                                        Unit: sdk.String("sequi"),
                                        Value: sdk.String("magni"),
                                    },
                                },
                                Name: sdk.String("Miss Genevieve Fahey"),
                            },
                            shared.CustomGroup{
                                Attributes: []shared.CustomAttribute{
                                    shared.CustomAttribute{
                                        Name: sdk.String("Omar Spinka"),
                                        Type: sdk.String("numquam"),
                                        Unit: sdk.String("molestiae"),
                                        Value: sdk.String("impedit"),
                                    },
                                    shared.CustomAttribute{
                                        Name: sdk.String("Matt Lehner"),
                                        Type: sdk.String("facilis"),
                                        Unit: sdk.String("optio"),
                                        Value: sdk.String("incidunt"),
                                    },
                                },
                                Name: sdk.String("Danielle Dach"),
                            },
                        },
                        CustomLabel0: sdk.String("vel"),
                        CustomLabel1: sdk.String("ad"),
                        CustomLabel2: sdk.String("quos"),
                        CustomLabel3: sdk.String("illo"),
                        CustomLabel4: sdk.String("suscipit"),
                        Description: sdk.String("quibusdam"),
                        Destinations: []shared.ProductDestination{
                            shared.ProductDestination{
                                DestinationName: sdk.String("impedit"),
                                Intention: sdk.String("culpa"),
                            },
                            shared.ProductDestination{
                                DestinationName: sdk.String("atque"),
                                Intention: sdk.String("voluptates"),
                            },
                            shared.ProductDestination{
                                DestinationName: sdk.String("maiores"),
                                Intention: sdk.String("nemo"),
                            },
                            shared.ProductDestination{
                                DestinationName: sdk.String("illo"),
                                Intention: sdk.String("doloribus"),
                            },
                        },
                        DisplayAdsID: sdk.String("cumque"),
                        DisplayAdsLink: sdk.String("expedita"),
                        DisplayAdsSimilarIds: []string{
                            "cumque",
                            "ipsam",
                        },
                        DisplayAdsTitle: sdk.String("occaecati"),
                        DisplayAdsValue: sdk.Float64(2192.79),
                        EnergyEfficiencyClass: sdk.String("accusamus"),
                        ExpirationDate: sdk.String("quisquam"),
                        Gender: sdk.String("female"),
                        GoogleProductCategory: sdk.String("fugit"),
                        Gtin: sdk.String("quo"),
                        ID: sdk.String("daad0ec7-afed-4bd8-8df4-48a47f9390c5"),
                        IdentifierExists: sdk.Bool(false),
                        ImageLink: sdk.String("quos"),
                        Installment: &shared.Installment{
                            Amount: &shared.Price{
                                Currency: sdk.String("blanditiis"),
                                Value: sdk.String("quas"),
                            },
                            Months: sdk.String("voluptatem"),
                        },
                        IsBundle: sdk.Bool(false),
                        ItemGroupID: sdk.String("provident"),
                        Kind: sdk.String("quas"),
                        Link: sdk.String("ipsum"),
                        LoyaltyPoints: &shared.LoyaltyPoints{
                            Name: sdk.String("Blake Purdy"),
                            PointsValue: sdk.String("recusandae"),
                            Ratio: sdk.Float64(9559.62),
                        },
                        Material: sdk.String("consectetur"),
                        MaxEnergyEfficiencyClass: sdk.String("sapiente"),
                        MaxHandlingTime: sdk.String("voluptatibus"),
                        MinEnergyEfficiencyClass: sdk.String("assumenda"),
                        MinHandlingTime: sdk.String("repellendus"),
                        MobileLink: sdk.String("omnis"),
                        Mpn: sdk.String("delectus"),
                        Multipack: sdk.String("odio"),
                        OfferID: sdk.String("voluptatibus"),
                        OnlineOnly: sdk.Bool(false),
                        Pattern: sdk.String("aut"),
                        Price: &shared.Price{
                            Currency: sdk.String("quam"),
                            Value: sdk.String("omnis"),
                        },
                        ProductType: sdk.String("similique"),
                        PromotionIds: []string{
                            "modi",
                            "facere",
                            "neque",
                            "quis",
                        },
                        SalePrice: &shared.Price{
                            Currency: sdk.String("in"),
                            Value: sdk.String("sed"),
                        },
                        SalePriceEffectiveDate: sdk.String("non"),
                        SellOnGoogleQuantity: sdk.String("porro"),
                        Shipping: []shared.ProductShipping{
                            shared.ProductShipping{
                                Country: sdk.String("Saint Barthelemy"),
                                LocationGroupName: sdk.String("ipsa"),
                                LocationID: sdk.String("reiciendis"),
                                PostalCode: sdk.String("81501"),
                                Price: &shared.Price{
                                    Currency: sdk.String("praesentium"),
                                    Value: sdk.String("iusto"),
                                },
                                Region: sdk.String("fugiat"),
                                Service: sdk.String("enim"),
                            },
                            shared.ProductShipping{
                                Country: sdk.String("Jamaica"),
                                LocationGroupName: sdk.String("laudantium"),
                                LocationID: sdk.String("modi"),
                                PostalCode: sdk.String("88985"),
                                Price: &shared.Price{
                                    Currency: sdk.String("enim"),
                                    Value: sdk.String("animi"),
                                },
                                Region: sdk.String("unde"),
                                Service: sdk.String("quae"),
                            },
                            shared.ProductShipping{
                                Country: sdk.String("Israel"),
                                LocationGroupName: sdk.String("nostrum"),
                                LocationID: sdk.String("eveniet"),
                                PostalCode: sdk.String("15689"),
                                Price: &shared.Price{
                                    Currency: sdk.String("placeat"),
                                    Value: sdk.String("dolores"),
                                },
                                Region: sdk.String("consequatur"),
                                Service: sdk.String("nesciunt"),
                            },
                            shared.ProductShipping{
                                Country: sdk.String("Canada"),
                                LocationGroupName: sdk.String("quidem"),
                                LocationID: sdk.String("voluptas"),
                                PostalCode: sdk.String("54661-2648"),
                                Price: &shared.Price{
                                    Currency: sdk.String("vitae"),
                                    Value: sdk.String("dolor"),
                                },
                                Region: sdk.String("ad"),
                                Service: sdk.String("atque"),
                            },
                        },
                        ShippingHeight: &shared.ProductShippingDimension{
                            Unit: sdk.String("ut"),
                            Value: sdk.Float64(9897.65),
                        },
                        ShippingLabel: sdk.String("reprehenderit"),
                        ShippingLength: &shared.ProductShippingDimension{
                            Unit: sdk.String("deserunt"),
                            Value: sdk.Float64(9301.27),
                        },
                        ShippingWeight: &shared.ProductShippingWeight{
                            Unit: sdk.String("et"),
                            Value: sdk.Float64(1812.67),
                        },
                        ShippingWidth: &shared.ProductShippingDimension{
                            Unit: sdk.String("impedit"),
                            Value: sdk.Float64(4013.88),
                        },
                        SizeSystem: sdk.String("praesentium"),
                        SizeType: sdk.String("natus"),
                        Sizes: []string{
                            "tenetur",
                        },
                        Source: sdk.String("laudantium"),
                        TargetCountry: sdk.String("aspernatur"),
                        Taxes: []shared.ProductTax{
                            shared.ProductTax{
                                Country: sdk.String("Turkmenistan"),
                                LocationID: sdk.String("dicta"),
                                PostalCode: sdk.String("34041"),
                                Rate: sdk.Float64(2096.02),
                                Region: sdk.String("eaque"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Guadeloupe"),
                                LocationID: sdk.String("amet"),
                                PostalCode: sdk.String("48796"),
                                Rate: sdk.Float64(5189.26),
                                Region: sdk.String("cupiditate"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Taiwan"),
                                LocationID: sdk.String("doloribus"),
                                PostalCode: sdk.String("43913-4453"),
                                Rate: sdk.Float64(444.43),
                                Region: sdk.String("perspiciatis"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Cambodia"),
                                LocationID: sdk.String("itaque"),
                                PostalCode: sdk.String("72887-3911"),
                                Rate: sdk.Float64(835.3),
                                Region: sdk.String("facere"),
                                TaxShip: sdk.Bool(false),
                            },
                        },
                        Title: sdk.String("Dr."),
                        UnitPricingBaseMeasure: &shared.ProductUnitPricingBaseMeasure{
                            Unit: sdk.String("laborum"),
                            Value: sdk.String("dicta"),
                        },
                        UnitPricingMeasure: &shared.ProductUnitPricingMeasure{
                            Unit: sdk.String("voluptatem"),
                            Value: sdk.Float64(1409.09),
                        },
                        ValidatedDestinations: []string{
                            "pariatur",
                            "enim",
                        },
                        Warnings: []shared.Error{
                            shared.Error{
                                Domain: sdk.String("architecto"),
                                Message: sdk.String("est"),
                                Reason: sdk.String("quaerat"),
                            },
                            shared.Error{
                                Domain: sdk.String("facere"),
                                Message: sdk.String("vitae"),
                                Reason: sdk.String("omnis"),
                            },
                        },
                    },
                    ProductID: sdk.String("alias"),
                },
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("expedita"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("quia"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ContentProductsCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentProductsDelete

Deletes a product from your Merchant Center account.

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
    res, err := s.Products.ContentProductsDelete(ctx, operations.ContentProductsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sit"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("possimus"),
        Key: sdk.String("distinctio"),
        MerchantID: "distinctio",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "illum",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.ContentProductsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ContentProductsGet

Retrieves a product from your Merchant Center account.

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
    res, err := s.Products.ContentProductsGet(ctx, operations.ContentProductsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("facilis"),
        MerchantID: "aliquam",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "amet",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.ContentProductsGetSecurity{
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

## ContentProductsInsert

Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.

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
    res, err := s.Products.ContentProductsInsert(ctx, operations.ContentProductsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Product: &shared.Product{
            AdditionalImageLinks: []string{
                "placeat",
                "ab",
                "ad",
            },
            AdditionalProductTypes: []string{
                "porro",
                "labore",
                "impedit",
            },
            Adult: sdk.Bool(false),
            AdwordsGrouping: sdk.String("ut"),
            AdwordsLabels: []string{
                "ullam",
                "numquam",
                "enim",
                "cupiditate",
            },
            AdwordsRedirect: sdk.String("occaecati"),
            AgeGroup: sdk.String("itaque"),
            Aspects: []shared.ProductAspect{
                shared.ProductAspect{
                    AspectName: sdk.String("consectetur"),
                    DestinationName: sdk.String("modi"),
                    Intention: sdk.String("aspernatur"),
                },
                shared.ProductAspect{
                    AspectName: sdk.String("explicabo"),
                    DestinationName: sdk.String("suscipit"),
                    Intention: sdk.String("ipsa"),
                },
                shared.ProductAspect{
                    AspectName: sdk.String("eveniet"),
                    DestinationName: sdk.String("sint"),
                    Intention: sdk.String("nobis"),
                },
            },
            Availability: sdk.String("qui"),
            AvailabilityDate: sdk.String("accusantium"),
            Brand: sdk.String("consequatur"),
            CanonicalLink: sdk.String("impedit"),
            Channel: sdk.String("recusandae"),
            Color: sdk.String("voluptate"),
            Condition: sdk.String("deleniti"),
            ContentLanguage: sdk.String("est"),
            CostOfGoodsSold: &shared.Price{
                Currency: sdk.String("et"),
                Value: sdk.String("expedita"),
            },
            CustomAttributes: []shared.CustomAttribute{
                shared.CustomAttribute{
                    Name: sdk.String("Cary Predovic"),
                    Type: sdk.String("doloremque"),
                    Unit: sdk.String("fuga"),
                    Value: sdk.String("dicta"),
                },
                shared.CustomAttribute{
                    Name: sdk.String("Jeanette Rosenbaum"),
                    Type: sdk.String("fugit"),
                    Unit: sdk.String("ratione"),
                    Value: sdk.String("possimus"),
                },
                shared.CustomAttribute{
                    Name: sdk.String("Susan Mraz"),
                    Type: sdk.String("deserunt"),
                    Unit: sdk.String("ratione"),
                    Value: sdk.String("ipsa"),
                },
                shared.CustomAttribute{
                    Name: sdk.String("Nick Oberbrunner"),
                    Type: sdk.String("consequuntur"),
                    Unit: sdk.String("ipsam"),
                    Value: sdk.String("libero"),
                },
            },
            CustomGroups: []shared.CustomGroup{
                shared.CustomGroup{
                    Attributes: []shared.CustomAttribute{
                        shared.CustomAttribute{
                            Name: sdk.String("Mrs. Phyllis Christiansen PhD"),
                            Type: sdk.String("voluptatum"),
                            Unit: sdk.String("velit"),
                            Value: sdk.String("hic"),
                        },
                        shared.CustomAttribute{
                            Name: sdk.String("Rosie Waters"),
                            Type: sdk.String("dignissimos"),
                            Unit: sdk.String("provident"),
                            Value: sdk.String("occaecati"),
                        },
                        shared.CustomAttribute{
                            Name: sdk.String("Nicholas Conroy"),
                            Type: sdk.String("optio"),
                            Unit: sdk.String("quasi"),
                            Value: sdk.String("repellat"),
                        },
                    },
                    Name: sdk.String("Clifford Mertz"),
                },
            },
            CustomLabel0: sdk.String("sunt"),
            CustomLabel1: sdk.String("nemo"),
            CustomLabel2: sdk.String("delectus"),
            CustomLabel3: sdk.String("illum"),
            CustomLabel4: sdk.String("porro"),
            Description: sdk.String("quaerat"),
            Destinations: []shared.ProductDestination{
                shared.ProductDestination{
                    DestinationName: sdk.String("cumque"),
                    Intention: sdk.String("quos"),
                },
            },
            DisplayAdsID: sdk.String("in"),
            DisplayAdsLink: sdk.String("commodi"),
            DisplayAdsSimilarIds: []string{
                "sed",
                "minus",
                "consequuntur",
                "possimus",
            },
            DisplayAdsTitle: sdk.String("delectus"),
            DisplayAdsValue: sdk.Float64(6908.71),
            EnergyEfficiencyClass: sdk.String("aliquam"),
            ExpirationDate: sdk.String("eligendi"),
            Gender: sdk.String("male"),
            GoogleProductCategory: sdk.String("quo"),
            Gtin: sdk.String("illo"),
            ID: sdk.String("c76230f8-41fb-41bd-a3fd-b14db6be5a68"),
            IdentifierExists: sdk.Bool(false),
            ImageLink: sdk.String("corporis"),
            Installment: &shared.Installment{
                Amount: &shared.Price{
                    Currency: sdk.String("excepturi"),
                    Value: sdk.String("natus"),
                },
                Months: sdk.String("deleniti"),
            },
            IsBundle: sdk.Bool(false),
            ItemGroupID: sdk.String("necessitatibus"),
            Kind: sdk.String("aspernatur"),
            Link: sdk.String("dolores"),
            LoyaltyPoints: &shared.LoyaltyPoints{
                Name: sdk.String("Dr. Hugo Daugherty"),
                PointsValue: sdk.String("quae"),
                Ratio: sdk.Float64(4144.39),
            },
            Material: sdk.String("a"),
            MaxEnergyEfficiencyClass: sdk.String("minus"),
            MaxHandlingTime: sdk.String("sed"),
            MinEnergyEfficiencyClass: sdk.String("nam"),
            MinHandlingTime: sdk.String("quia"),
            MobileLink: sdk.String("iusto"),
            Mpn: sdk.String("ab"),
            Multipack: sdk.String("deserunt"),
            OfferID: sdk.String("sed"),
            OnlineOnly: sdk.Bool(false),
            Pattern: sdk.String("blanditiis"),
            Price: &shared.Price{
                Currency: sdk.String("sint"),
                Value: sdk.String("placeat"),
            },
            ProductType: sdk.String("ullam"),
            PromotionIds: []string{
                "itaque",
                "rem",
            },
            SalePrice: &shared.Price{
                Currency: sdk.String("nemo"),
                Value: sdk.String("non"),
            },
            SalePriceEffectiveDate: sdk.String("recusandae"),
            SellOnGoogleQuantity: sdk.String("omnis"),
            Shipping: []shared.ProductShipping{
                shared.ProductShipping{
                    Country: sdk.String("French Polynesia"),
                    LocationGroupName: sdk.String("dolor"),
                    LocationID: sdk.String("occaecati"),
                    PostalCode: sdk.String("11124-3452"),
                    Price: &shared.Price{
                        Currency: sdk.String("nisi"),
                        Value: sdk.String("explicabo"),
                    },
                    Region: sdk.String("modi"),
                    Service: sdk.String("doloremque"),
                },
            },
            ShippingHeight: &shared.ProductShippingDimension{
                Unit: sdk.String("odio"),
                Value: sdk.Float64(252.31),
            },
            ShippingLabel: sdk.String("voluptatum"),
            ShippingLength: &shared.ProductShippingDimension{
                Unit: sdk.String("tempora"),
                Value: sdk.Float64(9624.11),
            },
            ShippingWeight: &shared.ProductShippingWeight{
                Unit: sdk.String("quam"),
                Value: sdk.Float64(6759.55),
            },
            ShippingWidth: &shared.ProductShippingDimension{
                Unit: sdk.String("libero"),
                Value: sdk.Float64(1921.73),
            },
            SizeSystem: sdk.String("molestiae"),
            SizeType: sdk.String("optio"),
            Sizes: []string{
                "maiores",
                "accusantium",
                "sed",
                "eos",
            },
            Source: sdk.String("consequuntur"),
            TargetCountry: sdk.String("quis"),
            Taxes: []shared.ProductTax{
                shared.ProductTax{
                    Country: sdk.String("Micronesia"),
                    LocationID: sdk.String("labore"),
                    PostalCode: sdk.String("63320-0687"),
                    Rate: sdk.Float64(3796.66),
                    Region: sdk.String("ex"),
                    TaxShip: sdk.Bool(false),
                },
            },
            Title: sdk.String("Ms."),
            UnitPricingBaseMeasure: &shared.ProductUnitPricingBaseMeasure{
                Unit: sdk.String("est"),
                Value: sdk.String("doloribus"),
            },
            UnitPricingMeasure: &shared.ProductUnitPricingMeasure{
                Unit: sdk.String("provident"),
                Value: sdk.Float64(15.94),
            },
            ValidatedDestinations: []string{
                "fugit",
                "autem",
                "quo",
            },
            Warnings: []shared.Error{
                shared.Error{
                    Domain: sdk.String("maxime"),
                    Message: sdk.String("facere"),
                    Reason: sdk.String("impedit"),
                },
                shared.Error{
                    Domain: sdk.String("cupiditate"),
                    Message: sdk.String("deleniti"),
                    Reason: sdk.String("quasi"),
                },
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("unde"),
        MerchantID: "corrupti",
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("libero"),
    }, operations.ContentProductsInsertSecurity{
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

## ContentProductsList

Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

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
    res, err := s.Products.ContentProductsList(ctx, operations.ContentProductsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("hic"),
        IncludeInvalidInsertedItems: sdk.Bool(false),
        Key: sdk.String("similique"),
        MaxResults: sdk.Int64(686784),
        MerchantID: "consectetur",
        OauthToken: sdk.String("labore"),
        PageToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.ContentProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsListResponse != nil {
        // handle response
    }
}
```
