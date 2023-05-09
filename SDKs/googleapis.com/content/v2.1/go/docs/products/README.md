# Products

### Available Operations

* [ContentProductsCustombatch](#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [ContentProductsDelete](#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [ContentProductsGet](#contentproductsget) - Retrieves a product from your Merchant Center account.
* [ContentProductsInsert](#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [ContentProductsList](#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* [ContentProductsUpdate](#contentproductsupdate) - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

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
                    BatchID: sdk.Int64(480741),
                    FeedID: sdk.String("inventore"),
                    MerchantID: sdk.String("voluptate"),
                    Method: sdk.String("sed"),
                    Product: &shared.Product{
                        AdditionalImageLinks: []string{
                            "eaque",
                        },
                        AdditionalSizeType: sdk.String("exercitationem"),
                        AdsGrouping: sdk.String("amet"),
                        AdsLabels: []string{
                            "voluptate",
                            "pariatur",
                        },
                        AdsRedirect: sdk.String("minus"),
                        Adult: sdk.Bool(false),
                        AgeGroup: sdk.String("a"),
                        Availability: sdk.String("fuga"),
                        AvailabilityDate: sdk.String("totam"),
                        Brand: sdk.String("cupiditate"),
                        CanonicalLink: sdk.String("at"),
                        Channel: sdk.String("doloribus"),
                        Color: sdk.String("omnis"),
                        Condition: sdk.String("quam"),
                        ContentLanguage: sdk.String("exercitationem"),
                        CostOfGoodsSold: &shared.Price{
                            Currency: sdk.String("voluptates"),
                            Value: sdk.String("sequi"),
                        },
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Ms. Patsy Hyatt"),
                                Value: sdk.String("itaque"),
                            },
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Norman Skiles"),
                                Value: sdk.String("minima"),
                            },
                        },
                        CustomLabel0: sdk.String("a"),
                        CustomLabel1: sdk.String("beatae"),
                        CustomLabel2: sdk.String("vitae"),
                        CustomLabel3: sdk.String("veritatis"),
                        CustomLabel4: sdk.String("facere"),
                        Description: sdk.String("earum"),
                        DisclosureDate: sdk.String("laborum"),
                        DisplayAdsID: sdk.String("dicta"),
                        DisplayAdsLink: sdk.String("voluptatem"),
                        DisplayAdsSimilarIds: []string{
                            "aliquid",
                        },
                        DisplayAdsTitle: sdk.String("pariatur"),
                        DisplayAdsValue: sdk.Float64(3184.5),
                        EnergyEfficiencyClass: sdk.String("numquam"),
                        ExcludedDestinations: []string{
                            "est",
                        },
                        ExpirationDate: sdk.String("quaerat"),
                        ExternalSellerID: sdk.String("facere"),
                        FeedLabel: sdk.String("vitae"),
                        Gender: sdk.String("male"),
                        GoogleProductCategory: sdk.String("alias"),
                        Gtin: sdk.String("sapiente"),
                        ID: sdk.String("eb21780b-ccc0-4dbb-9db4-84708fb4e391"),
                        IdentifierExists: sdk.Bool(false),
                        ImageLink: sdk.String("officiis"),
                        IncludedDestinations: []string{
                            "rerum",
                            "placeat",
                        },
                        Installment: &shared.Installment{
                            Amount: &shared.Price{
                                Currency: sdk.String("ab"),
                                Value: sdk.String("ad"),
                            },
                            Months: sdk.String("blanditiis"),
                        },
                        IsBundle: sdk.Bool(false),
                        ItemGroupID: sdk.String("porro"),
                        Kind: sdk.String("labore"),
                        LifestyleImageLinks: []string{
                            "ut",
                            "earum",
                            "ullam",
                            "numquam",
                        },
                        Link: sdk.String("enim"),
                        LinkTemplate: sdk.String("cupiditate"),
                        LoyaltyPoints: &shared.LoyaltyPoints{
                            Name: sdk.String("Percy Paucek"),
                            PointsValue: sdk.String("aspernatur"),
                            Ratio: sdk.Float64(1297.62),
                        },
                        Material: sdk.String("suscipit"),
                        MaxEnergyEfficiencyClass: sdk.String("ipsa"),
                        MaxHandlingTime: sdk.String("eveniet"),
                        MinEnergyEfficiencyClass: sdk.String("sint"),
                        MinHandlingTime: sdk.String("nobis"),
                        MobileLink: sdk.String("qui"),
                        MobileLinkTemplate: sdk.String("accusantium"),
                        Mpn: sdk.String("consequatur"),
                        Multipack: sdk.String("impedit"),
                        OfferID: sdk.String("recusandae"),
                        Pattern: sdk.String("voluptate"),
                        Pause: sdk.String("deleniti"),
                        PickupMethod: sdk.String("est"),
                        PickupSLA: sdk.String("et"),
                        Price: &shared.Price{
                            Currency: sdk.String("expedita"),
                            Value: sdk.String("quibusdam"),
                        },
                        ProductDetails: []shared.ProductProductDetail{
                            shared.ProductProductDetail{
                                AttributeName: sdk.String("maiores"),
                                AttributeValue: sdk.String("quidem"),
                                SectionName: sdk.String("in"),
                            },
                            shared.ProductProductDetail{
                                AttributeName: sdk.String("culpa"),
                                AttributeValue: sdk.String("doloremque"),
                                SectionName: sdk.String("fuga"),
                            },
                            shared.ProductProductDetail{
                                AttributeName: sdk.String("dicta"),
                                AttributeValue: sdk.String("architecto"),
                                SectionName: sdk.String("suscipit"),
                            },
                        },
                        ProductHeight: &shared.ProductDimension{
                            Unit: sdk.String("eligendi"),
                            Value: sdk.Float64(8855.23),
                        },
                        ProductHighlights: []string{
                            "fugit",
                            "ratione",
                        },
                        ProductLength: &shared.ProductDimension{
                            Unit: sdk.String("possimus"),
                            Value: sdk.Float64(3115.48),
                        },
                        ProductTypes: []string{
                            "natus",
                        },
                        ProductWeight: &shared.ProductWeight{
                            Unit: sdk.String("esse"),
                            Value: sdk.Float64(9639.08),
                        },
                        ProductWidth: &shared.ProductDimension{
                            Unit: sdk.String("deserunt"),
                            Value: sdk.Float64(1880.81),
                        },
                        PromotionIds: []string{
                            "debitis",
                        },
                        SalePrice: &shared.Price{
                            Currency: sdk.String("iste"),
                            Value: sdk.String("deserunt"),
                        },
                        SalePriceEffectiveDate: sdk.String("hic"),
                        SellOnGoogleQuantity: sdk.String("ducimus"),
                        Shipping: []shared.ProductShipping{
                            shared.ProductShipping{
                                Country: sdk.String("Guyana"),
                                LocationGroupName: sdk.String("libero"),
                                LocationID: sdk.String("quia"),
                                MaxHandlingTime: sdk.String("omnis"),
                                MaxTransitTime: sdk.String("dicta"),
                                MinHandlingTime: sdk.String("qui"),
                                MinTransitTime: sdk.String("explicabo"),
                                PostalCode: sdk.String("20852"),
                                Price: &shared.Price{
                                    Currency: sdk.String("hic"),
                                    Value: sdk.String("ullam"),
                                },
                                Region: sdk.String("deserunt"),
                                Service: sdk.String("itaque"),
                            },
                        },
                        ShippingHeight: &shared.ProductShippingDimension{
                            Unit: sdk.String("distinctio"),
                            Value: sdk.Float64(4802.95),
                        },
                        ShippingLabel: sdk.String("dignissimos"),
                        ShippingLength: &shared.ProductShippingDimension{
                            Unit: sdk.String("provident"),
                            Value: sdk.Float64(5818.89),
                        },
                        ShippingWeight: &shared.ProductShippingWeight{
                            Unit: sdk.String("assumenda"),
                            Value: sdk.Float64(1263.67),
                        },
                        ShippingWidth: &shared.ProductShippingDimension{
                            Unit: sdk.String("odit"),
                            Value: sdk.Float64(8768.21),
                        },
                        ShoppingAdsExcludedCountries: []string{
                            "optio",
                            "quasi",
                            "repellat",
                        },
                        SizeSystem: sdk.String("atque"),
                        SizeType: sdk.String("magnam"),
                        Sizes: []string{
                            "amet",
                            "corrupti",
                            "sunt",
                        },
                        Source: sdk.String("nemo"),
                        SubscriptionCost: &shared.ProductSubscriptionCost{
                            Amount: &shared.Price{
                                Currency: sdk.String("delectus"),
                                Value: sdk.String("illum"),
                            },
                            Period: sdk.String("porro"),
                            PeriodLength: sdk.String("quaerat"),
                        },
                        TargetCountry: sdk.String("magni"),
                        TaxCategory: sdk.String("cumque"),
                        Taxes: []shared.ProductTax{
                            shared.ProductTax{
                                Country: sdk.String("Jordan"),
                                LocationID: sdk.String("commodi"),
                                PostalCode: sdk.String("17189-6379"),
                                Rate: sdk.Float64(7797.48),
                                Region: sdk.String("illo"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Saint Kitts and Nevis"),
                                LocationID: sdk.String("esse"),
                                PostalCode: sdk.String("11095"),
                                Rate: sdk.Float64(2563.1),
                                Region: sdk.String("vitae"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Wallis and Futuna"),
                                LocationID: sdk.String("nam"),
                                PostalCode: sdk.String("68129"),
                                Rate: sdk.Float64(8309.48),
                                Region: sdk.String("nam"),
                                TaxShip: sdk.Bool(false),
                            },
                        },
                        Title: sdk.String("Mr."),
                        TransitTimeLabel: sdk.String("magnam"),
                        UnitPricingBaseMeasure: &shared.ProductUnitPricingBaseMeasure{
                            Unit: sdk.String("pariatur"),
                            Value: sdk.String("expedita"),
                        },
                        UnitPricingMeasure: &shared.ProductUnitPricingMeasure{
                            Unit: sdk.String("autem"),
                            Value: sdk.Float64(7319.31),
                        },
                    },
                    ProductID: sdk.String("recusandae"),
                    UpdateMask: sdk.String("nostrum"),
                },
                shared.ProductsCustomBatchRequestEntry{
                    BatchID: sdk.Int64(642279),
                    FeedID: sdk.String("voluptas"),
                    MerchantID: sdk.String("laudantium"),
                    Method: sdk.String("corporis"),
                    Product: &shared.Product{
                        AdditionalImageLinks: []string{
                            "natus",
                            "deleniti",
                            "necessitatibus",
                        },
                        AdditionalSizeType: sdk.String("aspernatur"),
                        AdsGrouping: sdk.String("dolores"),
                        AdsLabels: []string{
                            "vero",
                            "eos",
                            "voluptatem",
                        },
                        AdsRedirect: sdk.String("temporibus"),
                        Adult: sdk.Bool(false),
                        AgeGroup: sdk.String("id"),
                        Availability: sdk.String("quae"),
                        AvailabilityDate: sdk.String("commodi"),
                        Brand: sdk.String("a"),
                        CanonicalLink: sdk.String("minus"),
                        Channel: sdk.String("sed"),
                        Color: sdk.String("nam"),
                        Condition: sdk.String("quia"),
                        ContentLanguage: sdk.String("iusto"),
                        CostOfGoodsSold: &shared.Price{
                            Currency: sdk.String("ab"),
                            Value: sdk.String("deserunt"),
                        },
                        CustomAttributes: []shared.CustomAttribute{
                            shared.CustomAttribute{
                                GroupValues: []shared.CustomAttribute{
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                    shared.CustomAttribute{},
                                },
                                Name: sdk.String("Clark Hermiston"),
                                Value: sdk.String("rem"),
                            },
                        },
                        CustomLabel0: sdk.String("nemo"),
                        CustomLabel1: sdk.String("non"),
                        CustomLabel2: sdk.String("recusandae"),
                        CustomLabel3: sdk.String("omnis"),
                        CustomLabel4: sdk.String("ipsa"),
                        Description: sdk.String("aliquam"),
                        DisclosureDate: sdk.String("dolor"),
                        DisplayAdsID: sdk.String("occaecati"),
                        DisplayAdsLink: sdk.String("quibusdam"),
                        DisplayAdsSimilarIds: []string{
                            "consequuntur",
                        },
                        DisplayAdsTitle: sdk.String("consequuntur"),
                        DisplayAdsValue: sdk.Float64(2602.52),
                        EnergyEfficiencyClass: sdk.String("commodi"),
                        ExcludedDestinations: []string{
                            "vel",
                            "cupiditate",
                        },
                        ExpirationDate: sdk.String("modi"),
                        ExternalSellerID: sdk.String("nisi"),
                        FeedLabel: sdk.String("explicabo"),
                        Gender: sdk.String("female"),
                        GoogleProductCategory: sdk.String("doloremque"),
                        Gtin: sdk.String("odio"),
                        ID: sdk.String("084f7ab3-7cef-4022-a519-4db55410adc6"),
                        IdentifierExists: sdk.Bool(false),
                        ImageLink: sdk.String("ex"),
                        IncludedDestinations: []string{
                            "est",
                            "doloribus",
                            "provident",
                        },
                        Installment: &shared.Installment{
                            Amount: &shared.Price{
                                Currency: sdk.String("alias"),
                                Value: sdk.String("deserunt"),
                            },
                            Months: sdk.String("fugit"),
                        },
                        IsBundle: sdk.Bool(false),
                        ItemGroupID: sdk.String("autem"),
                        Kind: sdk.String("quo"),
                        LifestyleImageLinks: []string{
                            "maxime",
                            "facere",
                        },
                        Link: sdk.String("impedit"),
                        LinkTemplate: sdk.String("cupiditate"),
                        LoyaltyPoints: &shared.LoyaltyPoints{
                            Name: sdk.String("Mrs. Arthur Wolff"),
                            PointsValue: sdk.String("unde"),
                            Ratio: sdk.Float64(5446.6),
                        },
                        Material: sdk.String("quae"),
                        MaxEnergyEfficiencyClass: sdk.String("facere"),
                        MaxHandlingTime: sdk.String("ea"),
                        MinEnergyEfficiencyClass: sdk.String("libero"),
                        MinHandlingTime: sdk.String("nam"),
                        MobileLink: sdk.String("amet"),
                        MobileLinkTemplate: sdk.String("adipisci"),
                        Mpn: sdk.String("minus"),
                        Multipack: sdk.String("hic"),
                        OfferID: sdk.String("similique"),
                        Pattern: sdk.String("fuga"),
                        Pause: sdk.String("consectetur"),
                        PickupMethod: sdk.String("labore"),
                        PickupSLA: sdk.String("laudantium"),
                        Price: &shared.Price{
                            Currency: sdk.String("cumque"),
                            Value: sdk.String("adipisci"),
                        },
                        ProductDetails: []shared.ProductProductDetail{
                            shared.ProductProductDetail{
                                AttributeName: sdk.String("nam"),
                                AttributeValue: sdk.String("voluptatibus"),
                                SectionName: sdk.String("magnam"),
                            },
                        },
                        ProductHeight: &shared.ProductDimension{
                            Unit: sdk.String("aperiam"),
                            Value: sdk.Float64(4967.44),
                        },
                        ProductHighlights: []string{
                            "necessitatibus",
                            "numquam",
                            "doloribus",
                            "eligendi",
                        },
                        ProductLength: &shared.ProductDimension{
                            Unit: sdk.String("sapiente"),
                            Value: sdk.Float64(0.73),
                        },
                        ProductTypes: []string{
                            "numquam",
                            "aspernatur",
                            "nobis",
                            "nihil",
                        },
                        ProductWeight: &shared.ProductWeight{
                            Unit: sdk.String("voluptatum"),
                            Value: sdk.Float64(9682.86),
                        },
                        ProductWidth: &shared.ProductDimension{
                            Unit: sdk.String("vitae"),
                            Value: sdk.Float64(3530.09),
                        },
                        PromotionIds: []string{
                            "consequuntur",
                            "voluptas",
                        },
                        SalePrice: &shared.Price{
                            Currency: sdk.String("ratione"),
                            Value: sdk.String("excepturi"),
                        },
                        SalePriceEffectiveDate: sdk.String("corrupti"),
                        SellOnGoogleQuantity: sdk.String("est"),
                        Shipping: []shared.ProductShipping{
                            shared.ProductShipping{
                                Country: sdk.String("Sudan"),
                                LocationGroupName: sdk.String("impedit"),
                                LocationID: sdk.String("ducimus"),
                                MaxHandlingTime: sdk.String("nisi"),
                                MaxTransitTime: sdk.String("nisi"),
                                MinHandlingTime: sdk.String("dolor"),
                                MinTransitTime: sdk.String("fugit"),
                                PostalCode: sdk.String("88704"),
                                Price: &shared.Price{
                                    Currency: sdk.String("impedit"),
                                    Value: sdk.String("totam"),
                                },
                                Region: sdk.String("optio"),
                                Service: sdk.String("est"),
                            },
                        },
                        ShippingHeight: &shared.ProductShippingDimension{
                            Unit: sdk.String("inventore"),
                            Value: sdk.Float64(1648.05),
                        },
                        ShippingLabel: sdk.String("repellendus"),
                        ShippingLength: &shared.ProductShippingDimension{
                            Unit: sdk.String("sit"),
                            Value: sdk.Float64(1720.42),
                        },
                        ShippingWeight: &shared.ProductShippingWeight{
                            Unit: sdk.String("enim"),
                            Value: sdk.Float64(1364.32),
                        },
                        ShippingWidth: &shared.ProductShippingDimension{
                            Unit: sdk.String("perspiciatis"),
                            Value: sdk.Float64(1664.01),
                        },
                        ShoppingAdsExcludedCountries: []string{
                            "alias",
                            "quidem",
                        },
                        SizeSystem: sdk.String("deleniti"),
                        SizeType: sdk.String("possimus"),
                        Sizes: []string{
                            "odio",
                            "fugit",
                        },
                        Source: sdk.String("aspernatur"),
                        SubscriptionCost: &shared.ProductSubscriptionCost{
                            Amount: &shared.Price{
                                Currency: sdk.String("at"),
                                Value: sdk.String("illum"),
                            },
                            Period: sdk.String("praesentium"),
                            PeriodLength: sdk.String("sint"),
                        },
                        TargetCountry: sdk.String("exercitationem"),
                        TaxCategory: sdk.String("cum"),
                        Taxes: []shared.ProductTax{
                            shared.ProductTax{
                                Country: sdk.String("Philippines"),
                                LocationID: sdk.String("placeat"),
                                PostalCode: sdk.String("12875-3635"),
                                Rate: sdk.Float64(2305.94),
                                Region: sdk.String("dolor"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Grenada"),
                                LocationID: sdk.String("qui"),
                                PostalCode: sdk.String("42322-5528"),
                                Rate: sdk.Float64(4733.86),
                                Region: sdk.String("quas"),
                                TaxShip: sdk.Bool(false),
                            },
                            shared.ProductTax{
                                Country: sdk.String("Spain"),
                                LocationID: sdk.String("saepe"),
                                PostalCode: sdk.String("74962"),
                                Rate: sdk.Float64(5456.29),
                                Region: sdk.String("cupiditate"),
                                TaxShip: sdk.Bool(false),
                            },
                        },
                        Title: sdk.String("Dr."),
                        TransitTimeLabel: sdk.String("ullam"),
                        UnitPricingBaseMeasure: &shared.ProductUnitPricingBaseMeasure{
                            Unit: sdk.String("dolorum"),
                            Value: sdk.String("soluta"),
                        },
                        UnitPricingMeasure: &shared.ProductUnitPricingMeasure{
                            Unit: sdk.String("cum"),
                            Value: sdk.Float64(4498.8),
                        },
                    },
                    ProductID: sdk.String("delectus"),
                    UpdateMask: sdk.String("commodi"),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("adipisci"),
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
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eligendi"),
        FeedID: sdk.String("incidunt"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("dolor"),
        MerchantID: "est",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "possimus",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("inventore"),
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
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("ipsam"),
        MerchantID: "voluptatem",
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "iure",
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("quae"),
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
                "veniam",
                "quidem",
                "asperiores",
                "eum",
            },
            AdditionalSizeType: sdk.String("deserunt"),
            AdsGrouping: sdk.String("repudiandae"),
            AdsLabels: []string{
                "molestias",
                "architecto",
            },
            AdsRedirect: sdk.String("expedita"),
            Adult: sdk.Bool(false),
            AgeGroup: sdk.String("quisquam"),
            Availability: sdk.String("praesentium"),
            AvailabilityDate: sdk.String("facilis"),
            Brand: sdk.String("assumenda"),
            CanonicalLink: sdk.String("repudiandae"),
            Channel: sdk.String("maiores"),
            Color: sdk.String("ipsum"),
            Condition: sdk.String("commodi"),
            ContentLanguage: sdk.String("vitae"),
            CostOfGoodsSold: &shared.Price{
                Currency: sdk.String("fugit"),
                Value: sdk.String("nam"),
            },
            CustomAttributes: []shared.CustomAttribute{
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Jesse Abbott"),
                    Value: sdk.String("facere"),
                },
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Alex Bayer"),
                    Value: sdk.String("modi"),
                },
            },
            CustomLabel0: sdk.String("fuga"),
            CustomLabel1: sdk.String("iure"),
            CustomLabel2: sdk.String("deleniti"),
            CustomLabel3: sdk.String("officia"),
            CustomLabel4: sdk.String("sint"),
            Description: sdk.String("laborum"),
            DisclosureDate: sdk.String("dolor"),
            DisplayAdsID: sdk.String("ad"),
            DisplayAdsLink: sdk.String("illum"),
            DisplayAdsSimilarIds: []string{
                "molestias",
            },
            DisplayAdsTitle: sdk.String("voluptas"),
            DisplayAdsValue: sdk.Float64(7132.46),
            EnergyEfficiencyClass: sdk.String("voluptas"),
            ExcludedDestinations: []string{
                "ea",
                "vel",
                "delectus",
                "accusamus",
            },
            ExpirationDate: sdk.String("reiciendis"),
            ExternalSellerID: sdk.String("consequatur"),
            FeedLabel: sdk.String("sed"),
            Gender: sdk.String("female"),
            GoogleProductCategory: sdk.String("voluptates"),
            Gtin: sdk.String("provident"),
            ID: sdk.String("f443b425-7b99-42c8-9bda-6a61efa21982"),
            IdentifierExists: sdk.Bool(false),
            ImageLink: sdk.String("ullam"),
            IncludedDestinations: []string{
                "doloribus",
                "pariatur",
                "aut",
            },
            Installment: &shared.Installment{
                Amount: &shared.Price{
                    Currency: sdk.String("similique"),
                    Value: sdk.String("iste"),
                },
                Months: sdk.String("eveniet"),
            },
            IsBundle: sdk.Bool(false),
            ItemGroupID: sdk.String("nam"),
            Kind: sdk.String("animi"),
            LifestyleImageLinks: []string{
                "voluptate",
                "voluptatibus",
            },
            Link: sdk.String("quam"),
            LinkTemplate: sdk.String("nulla"),
            LoyaltyPoints: &shared.LoyaltyPoints{
                Name: sdk.String("Mrs. Tasha Wilkinson"),
                PointsValue: sdk.String("aliquid"),
                Ratio: sdk.Float64(2946.5),
            },
            Material: sdk.String("voluptatem"),
            MaxEnergyEfficiencyClass: sdk.String("illum"),
            MaxHandlingTime: sdk.String("laboriosam"),
            MinEnergyEfficiencyClass: sdk.String("culpa"),
            MinHandlingTime: sdk.String("dicta"),
            MobileLink: sdk.String("atque"),
            MobileLinkTemplate: sdk.String("ratione"),
            Mpn: sdk.String("vitae"),
            Multipack: sdk.String("quisquam"),
            OfferID: sdk.String("atque"),
            Pattern: sdk.String("nihil"),
            Pause: sdk.String("culpa"),
            PickupMethod: sdk.String("temporibus"),
            PickupSLA: sdk.String("a"),
            Price: &shared.Price{
                Currency: sdk.String("ad"),
                Value: sdk.String("cupiditate"),
            },
            ProductDetails: []shared.ProductProductDetail{
                shared.ProductProductDetail{
                    AttributeName: sdk.String("reiciendis"),
                    AttributeValue: sdk.String("repellendus"),
                    SectionName: sdk.String("delectus"),
                },
                shared.ProductProductDetail{
                    AttributeName: sdk.String("ab"),
                    AttributeValue: sdk.String("mollitia"),
                    SectionName: sdk.String("possimus"),
                },
            },
            ProductHeight: &shared.ProductDimension{
                Unit: sdk.String("praesentium"),
                Value: sdk.Float64(2053.9),
            },
            ProductHighlights: []string{
                "animi",
                "debitis",
            },
            ProductLength: &shared.ProductDimension{
                Unit: sdk.String("voluptatum"),
                Value: sdk.Float64(282.56),
            },
            ProductTypes: []string{
                "vitae",
                "cumque",
                "architecto",
                "sint",
            },
            ProductWeight: &shared.ProductWeight{
                Unit: sdk.String("eligendi"),
                Value: sdk.Float64(5806.89),
            },
            ProductWidth: &shared.ProductDimension{
                Unit: sdk.String("quis"),
                Value: sdk.Float64(7343.61),
            },
            PromotionIds: []string{
                "iste",
                "unde",
                "quas",
            },
            SalePrice: &shared.Price{
                Currency: sdk.String("laboriosam"),
                Value: sdk.String("ducimus"),
            },
            SalePriceEffectiveDate: sdk.String("voluptatum"),
            SellOnGoogleQuantity: sdk.String("sapiente"),
            Shipping: []shared.ProductShipping{
                shared.ProductShipping{
                    Country: sdk.String("Cuba"),
                    LocationGroupName: sdk.String("hic"),
                    LocationID: sdk.String("iure"),
                    MaxHandlingTime: sdk.String("sint"),
                    MaxTransitTime: sdk.String("autem"),
                    MinHandlingTime: sdk.String("iste"),
                    MinTransitTime: sdk.String("cupiditate"),
                    PostalCode: sdk.String("69255"),
                    Price: &shared.Price{
                        Currency: sdk.String("quod"),
                        Value: sdk.String("repudiandae"),
                    },
                    Region: sdk.String("eaque"),
                    Service: sdk.String("consectetur"),
                },
                shared.ProductShipping{
                    Country: sdk.String("Ireland"),
                    LocationGroupName: sdk.String("vitae"),
                    LocationID: sdk.String("numquam"),
                    MaxHandlingTime: sdk.String("incidunt"),
                    MaxTransitTime: sdk.String("modi"),
                    MinHandlingTime: sdk.String("quos"),
                    MinTransitTime: sdk.String("minus"),
                    PostalCode: sdk.String("64460"),
                    Price: &shared.Price{
                        Currency: sdk.String("voluptates"),
                        Value: sdk.String("delectus"),
                    },
                    Region: sdk.String("qui"),
                    Service: sdk.String("delectus"),
                },
                shared.ProductShipping{
                    Country: sdk.String("Guam"),
                    LocationGroupName: sdk.String("ipsum"),
                    LocationID: sdk.String("laboriosam"),
                    MaxHandlingTime: sdk.String("doloremque"),
                    MaxTransitTime: sdk.String("sed"),
                    MinHandlingTime: sdk.String("voluptatum"),
                    MinTransitTime: sdk.String("debitis"),
                    PostalCode: sdk.String("99952-3031"),
                    Price: &shared.Price{
                        Currency: sdk.String("necessitatibus"),
                        Value: sdk.String("possimus"),
                    },
                    Region: sdk.String("dignissimos"),
                    Service: sdk.String("itaque"),
                },
            },
            ShippingHeight: &shared.ProductShippingDimension{
                Unit: sdk.String("explicabo"),
                Value: sdk.Float64(3558.98),
            },
            ShippingLabel: sdk.String("non"),
            ShippingLength: &shared.ProductShippingDimension{
                Unit: sdk.String("delectus"),
                Value: sdk.Float64(2767.95),
            },
            ShippingWeight: &shared.ProductShippingWeight{
                Unit: sdk.String("quod"),
                Value: sdk.Float64(1235.46),
            },
            ShippingWidth: &shared.ProductShippingDimension{
                Unit: sdk.String("ullam"),
                Value: sdk.Float64(4630.44),
            },
            ShoppingAdsExcludedCountries: []string{
                "voluptates",
                "officia",
                "est",
                "in",
            },
            SizeSystem: sdk.String("illo"),
            SizeType: sdk.String("voluptate"),
            Sizes: []string{
                "delectus",
            },
            Source: sdk.String("incidunt"),
            SubscriptionCost: &shared.ProductSubscriptionCost{
                Amount: &shared.Price{
                    Currency: sdk.String("dolore"),
                    Value: sdk.String("nemo"),
                },
                Period: sdk.String("est"),
                PeriodLength: sdk.String("quo"),
            },
            TargetCountry: sdk.String("maxime"),
            TaxCategory: sdk.String("delectus"),
            Taxes: []shared.ProductTax{
                shared.ProductTax{
                    Country: sdk.String("Honduras"),
                    LocationID: sdk.String("quam"),
                    PostalCode: sdk.String("69577-6805"),
                    Rate: sdk.Float64(3232.15),
                    Region: sdk.String("sapiente"),
                    TaxShip: sdk.Bool(false),
                },
                shared.ProductTax{
                    Country: sdk.String("Turkey"),
                    LocationID: sdk.String("ut"),
                    PostalCode: sdk.String("08369"),
                    Rate: sdk.Float64(3663.24),
                    Region: sdk.String("cumque"),
                    TaxShip: sdk.Bool(false),
                },
            },
            Title: sdk.String("Ms."),
            TransitTimeLabel: sdk.String("sequi"),
            UnitPricingBaseMeasure: &shared.ProductUnitPricingBaseMeasure{
                Unit: sdk.String("atque"),
                Value: sdk.String("maiores"),
            },
            UnitPricingMeasure: &shared.ProductUnitPricingMeasure{
                Unit: sdk.String("expedita"),
                Value: sdk.Float64(7024.18),
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        FeedID: sdk.String("eaque"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("nam"),
        MerchantID: "ex",
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("ut"),
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
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        MaxResults: sdk.Int64(577707),
        MerchantID: "debitis",
        OauthToken: sdk.String("laboriosam"),
        PageToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("porro"),
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

## ContentProductsUpdate

Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

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
    res, err := s.Products.ContentProductsUpdate(ctx, operations.ContentProductsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Product: &shared.Product{
            AdditionalImageLinks: []string{
                "voluptate",
                "tempore",
                "in",
                "omnis",
            },
            AdditionalSizeType: sdk.String("possimus"),
            AdsGrouping: sdk.String("tenetur"),
            AdsLabels: []string{
                "expedita",
                "iusto",
                "esse",
                "harum",
            },
            AdsRedirect: sdk.String("ad"),
            Adult: sdk.Bool(false),
            AgeGroup: sdk.String("quod"),
            Availability: sdk.String("ratione"),
            AvailabilityDate: sdk.String("totam"),
            Brand: sdk.String("vero"),
            CanonicalLink: sdk.String("dolore"),
            Channel: sdk.String("nam"),
            Color: sdk.String("officia"),
            Condition: sdk.String("maiores"),
            ContentLanguage: sdk.String("cupiditate"),
            CostOfGoodsSold: &shared.Price{
                Currency: sdk.String("illo"),
                Value: sdk.String("saepe"),
            },
            CustomAttributes: []shared.CustomAttribute{
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Olive Windler"),
                    Value: sdk.String("aut"),
                },
                shared.CustomAttribute{
                    GroupValues: []shared.CustomAttribute{
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                        shared.CustomAttribute{},
                    },
                    Name: sdk.String("Anita Reilly"),
                    Value: sdk.String("nostrum"),
                },
            },
            CustomLabel0: sdk.String("maiores"),
            CustomLabel1: sdk.String("veritatis"),
            CustomLabel2: sdk.String("autem"),
            CustomLabel3: sdk.String("earum"),
            CustomLabel4: sdk.String("minima"),
            Description: sdk.String("ex"),
            DisclosureDate: sdk.String("possimus"),
            DisplayAdsID: sdk.String("nesciunt"),
            DisplayAdsLink: sdk.String("corrupti"),
            DisplayAdsSimilarIds: []string{
                "fuga",
                "sequi",
            },
            DisplayAdsTitle: sdk.String("maxime"),
            DisplayAdsValue: sdk.Float64(2558.39),
            EnergyEfficiencyClass: sdk.String("laborum"),
            ExcludedDestinations: []string{
                "autem",
                "adipisci",
                "sunt",
                "rerum",
            },
            ExpirationDate: sdk.String("occaecati"),
            ExternalSellerID: sdk.String("provident"),
            FeedLabel: sdk.String("necessitatibus"),
            Gender: sdk.String("female"),
            GoogleProductCategory: sdk.String("autem"),
            Gtin: sdk.String("optio"),
            ID: sdk.String("ed8f9fdb-9410-4f63-bbf8-17837b01afdd"),
            IdentifierExists: sdk.Bool(false),
            ImageLink: sdk.String("quam"),
            IncludedDestinations: []string{
                "rem",
                "vel",
                "eos",
            },
            Installment: &shared.Installment{
                Amount: &shared.Price{
                    Currency: sdk.String("labore"),
                    Value: sdk.String("sunt"),
                },
                Months: sdk.String("blanditiis"),
            },
            IsBundle: sdk.Bool(false),
            ItemGroupID: sdk.String("iste"),
            Kind: sdk.String("accusamus"),
            LifestyleImageLinks: []string{
                "incidunt",
                "labore",
                "blanditiis",
            },
            Link: sdk.String("ducimus"),
            LinkTemplate: sdk.String("consectetur"),
            LoyaltyPoints: &shared.LoyaltyPoints{
                Name: sdk.String("Alvin Bartoletti"),
                PointsValue: sdk.String("asperiores"),
                Ratio: sdk.Float64(1030.53),
            },
            Material: sdk.String("sint"),
            MaxEnergyEfficiencyClass: sdk.String("possimus"),
            MaxHandlingTime: sdk.String("tempore"),
            MinEnergyEfficiencyClass: sdk.String("asperiores"),
            MinHandlingTime: sdk.String("quasi"),
            MobileLink: sdk.String("consequuntur"),
            MobileLinkTemplate: sdk.String("nemo"),
            Mpn: sdk.String("nobis"),
            Multipack: sdk.String("debitis"),
            OfferID: sdk.String("labore"),
            Pattern: sdk.String("veritatis"),
            Pause: sdk.String("minima"),
            PickupMethod: sdk.String("magni"),
            PickupSLA: sdk.String("itaque"),
            Price: &shared.Price{
                Currency: sdk.String("error"),
                Value: sdk.String("expedita"),
            },
            ProductDetails: []shared.ProductProductDetail{
                shared.ProductProductDetail{
                    AttributeName: sdk.String("placeat"),
                    AttributeValue: sdk.String("temporibus"),
                    SectionName: sdk.String("voluptate"),
                },
                shared.ProductProductDetail{
                    AttributeName: sdk.String("earum"),
                    AttributeValue: sdk.String("minima"),
                    SectionName: sdk.String("odit"),
                },
                shared.ProductProductDetail{
                    AttributeName: sdk.String("odit"),
                    AttributeValue: sdk.String("eius"),
                    SectionName: sdk.String("error"),
                },
            },
            ProductHeight: &shared.ProductDimension{
                Unit: sdk.String("vel"),
                Value: sdk.Float64(6798.35),
            },
            ProductHighlights: []string{
                "itaque",
            },
            ProductLength: &shared.ProductDimension{
                Unit: sdk.String("ab"),
                Value: sdk.Float64(1251.54),
            },
            ProductTypes: []string{
                "cum",
            },
            ProductWeight: &shared.ProductWeight{
                Unit: sdk.String("iusto"),
                Value: sdk.Float64(5465.4),
            },
            ProductWidth: &shared.ProductDimension{
                Unit: sdk.String("non"),
                Value: sdk.Float64(4573.3),
            },
            PromotionIds: []string{
                "eligendi",
                "minima",
                "omnis",
                "recusandae",
            },
            SalePrice: &shared.Price{
                Currency: sdk.String("architecto"),
                Value: sdk.String("voluptatibus"),
            },
            SalePriceEffectiveDate: sdk.String("autem"),
            SellOnGoogleQuantity: sdk.String("in"),
            Shipping: []shared.ProductShipping{
                shared.ProductShipping{
                    Country: sdk.String("Czech Republic"),
                    LocationGroupName: sdk.String("cumque"),
                    LocationID: sdk.String("dolore"),
                    MaxHandlingTime: sdk.String("optio"),
                    MaxTransitTime: sdk.String("quo"),
                    MinHandlingTime: sdk.String("repudiandae"),
                    MinTransitTime: sdk.String("tempora"),
                    PostalCode: sdk.String("38445-4992"),
                    Price: &shared.Price{
                        Currency: sdk.String("eligendi"),
                        Value: sdk.String("ullam"),
                    },
                    Region: sdk.String("nihil"),
                    Service: sdk.String("eius"),
                },
                shared.ProductShipping{
                    Country: sdk.String("Lebanon"),
                    LocationGroupName: sdk.String("corporis"),
                    LocationID: sdk.String("perferendis"),
                    MaxHandlingTime: sdk.String("architecto"),
                    MaxTransitTime: sdk.String("amet"),
                    MinHandlingTime: sdk.String("corporis"),
                    MinTransitTime: sdk.String("nihil"),
                    PostalCode: sdk.String("22931-9570"),
                    Price: &shared.Price{
                        Currency: sdk.String("totam"),
                        Value: sdk.String("tempora"),
                    },
                    Region: sdk.String("quo"),
                    Service: sdk.String("dolor"),
                },
                shared.ProductShipping{
                    Country: sdk.String("British Indian Ocean Territory (Chagos Archipelago)"),
                    LocationGroupName: sdk.String("omnis"),
                    LocationID: sdk.String("quam"),
                    MaxHandlingTime: sdk.String("officiis"),
                    MaxTransitTime: sdk.String("dicta"),
                    MinHandlingTime: sdk.String("excepturi"),
                    MinTransitTime: sdk.String("consectetur"),
                    PostalCode: sdk.String("12333-4952"),
                    Price: &shared.Price{
                        Currency: sdk.String("corrupti"),
                        Value: sdk.String("nihil"),
                    },
                    Region: sdk.String("eius"),
                    Service: sdk.String("placeat"),
                },
                shared.ProductShipping{
                    Country: sdk.String("Cambodia"),
                    LocationGroupName: sdk.String("facere"),
                    LocationID: sdk.String("ipsam"),
                    MaxHandlingTime: sdk.String("nobis"),
                    MaxTransitTime: sdk.String("porro"),
                    MinHandlingTime: sdk.String("labore"),
                    MinTransitTime: sdk.String("perspiciatis"),
                    PostalCode: sdk.String("11219"),
                    Price: &shared.Price{
                        Currency: sdk.String("iure"),
                        Value: sdk.String("aliquid"),
                    },
                    Region: sdk.String("cum"),
                    Service: sdk.String("fugiat"),
                },
            },
            ShippingHeight: &shared.ProductShippingDimension{
                Unit: sdk.String("rem"),
                Value: sdk.Float64(9774.72),
            },
            ShippingLabel: sdk.String("officiis"),
            ShippingLength: &shared.ProductShippingDimension{
                Unit: sdk.String("corporis"),
                Value: sdk.Float64(8309.09),
            },
            ShippingWeight: &shared.ProductShippingWeight{
                Unit: sdk.String("aut"),
                Value: sdk.Float64(316.05),
            },
            ShippingWidth: &shared.ProductShippingDimension{
                Unit: sdk.String("libero"),
                Value: sdk.Float64(5684.19),
            },
            ShoppingAdsExcludedCountries: []string{
                "omnis",
                "officiis",
            },
            SizeSystem: sdk.String("delectus"),
            SizeType: sdk.String("magni"),
            Sizes: []string{
                "velit",
            },
            Source: sdk.String("voluptatum"),
            SubscriptionCost: &shared.ProductSubscriptionCost{
                Amount: &shared.Price{
                    Currency: sdk.String("nihil"),
                    Value: sdk.String("neque"),
                },
                Period: sdk.String("aspernatur"),
                PeriodLength: sdk.String("eaque"),
            },
            TargetCountry: sdk.String("corporis"),
            TaxCategory: sdk.String("cupiditate"),
            Taxes: []shared.ProductTax{
                shared.ProductTax{
                    Country: sdk.String("Samoa"),
                    LocationID: sdk.String("quod"),
                    PostalCode: sdk.String("10542-0021"),
                    Rate: sdk.Float64(1928.8),
                    Region: sdk.String("rerum"),
                    TaxShip: sdk.Bool(false),
                },
            },
            Title: sdk.String("Mrs."),
            TransitTimeLabel: sdk.String("debitis"),
            UnitPricingBaseMeasure: &shared.ProductUnitPricingBaseMeasure{
                Unit: sdk.String("quis"),
                Value: sdk.String("eaque"),
            },
            UnitPricingMeasure: &shared.ProductUnitPricingMeasure{
                Unit: sdk.String("incidunt"),
                Value: sdk.Float64(2814.36),
            },
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("debitis"),
        MerchantID: "reprehenderit",
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "assumenda",
        QuotaUser: sdk.String("cumque"),
        UpdateMask: sdk.String("ut"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.ContentProductsUpdateSecurity{
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
