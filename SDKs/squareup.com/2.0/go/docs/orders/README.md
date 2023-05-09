# Orders

### Available Operations

* [BatchRetrieveOrders](#batchretrieveorders) - BatchRetrieveOrders
* [CalculateOrder](#calculateorder) - CalculateOrder
* [CreateOrder](#createorder) - CreateOrder
* [PayOrder](#payorder) - PayOrder
* [SearchOrders](#searchorders) - SearchOrders
* [GetV2OrdersOrderID](#getv2ordersorderid) - RetrieveOrder
* [PutV2OrdersOrderID](#putv2ordersorderid) - UpdateOrder

## BatchRetrieveOrders

Retrieves a set of [orders](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by their IDs.

If a given order ID does not exist, the ID is ignored instead of generating an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.BatchRetrieveOrders(ctx, shared.BatchRetrieveOrdersRequest{
        LocationID: sdk.String("porro"),
        OrderIds: []string{
            "autem",
            "eius",
            "unde",
        },
    }, operations.BatchRetrieveOrdersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRetrieveOrdersResponse != nil {
        // handle response
    }
}
```

## CalculateOrder

Enables applications to preview order pricing without creating an order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.CalculateOrder(ctx, shared.CalculateOrderRequest{
        Order: shared.Order{
            ClosedAt: sdk.String("sunt"),
            CreatedAt: sdk.String("amet"),
            CustomerID: sdk.String("laudantium"),
            Discounts: []shared.OrderLineItemDiscount{
                shared.OrderLineItemDiscount{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(954344),
                        Currency: sdk.String("aliquid"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(181836),
                        Currency: sdk.String("eligendi"),
                    },
                    CatalogObjectID: sdk.String("perspiciatis"),
                    CatalogVersion: sdk.Int64(431723),
                    Metadata: map[string]string{
                        "eligendi": "incidunt",
                        "quisquam": "quod",
                        "laboriosam": "quidem",
                    },
                    Name: sdk.String("Mabel Lebsack MD"),
                    Percentage: sdk.String("sequi"),
                    PricingRuleID: sdk.String("sapiente"),
                    RewardIds: []string{
                        "nesciunt",
                        "optio",
                        "corrupti",
                        "inventore",
                    },
                    Scope: sdk.String("quibusdam"),
                    Type: sdk.String("culpa"),
                    UID: sdk.String("dicta"),
                },
                shared.OrderLineItemDiscount{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(20735),
                        Currency: sdk.String("asperiores"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(534204),
                        Currency: sdk.String("optio"),
                    },
                    CatalogObjectID: sdk.String("consequuntur"),
                    CatalogVersion: sdk.Int64(248530),
                    Metadata: map[string]string{
                        "voluptatibus": "iste",
                        "amet": "quae",
                        "pariatur": "officia",
                        "velit": "debitis",
                    },
                    Name: sdk.String("Dr. Garry Hansen"),
                    Percentage: sdk.String("facere"),
                    PricingRuleID: sdk.String("iste"),
                    RewardIds: []string{
                        "similique",
                        "optio",
                    },
                    Scope: sdk.String("minus"),
                    Type: sdk.String("sint"),
                    UID: sdk.String("aliquam"),
                },
            },
            Fulfillments: []shared.OrderFulfillment{
                shared.OrderFulfillment{
                    Metadata: map[string]string{
                        "dicta": "nesciunt",
                        "reprehenderit": "esse",
                    },
                    PickupDetails: &shared.OrderFulfillmentPickupDetails{
                        AcceptedAt: sdk.String("magni"),
                        AutoCompleteDuration: sdk.String("ea"),
                        CancelReason: sdk.String("quibusdam"),
                        CanceledAt: sdk.String("veritatis"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: sdk.String("ad"),
                            CurbsideDetails: sdk.String("velit"),
                        },
                        ExpiredAt: sdk.String("quia"),
                        ExpiresAt: sdk.String("dicta"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("nam"),
                        PickedUpAt: sdk.String("quos"),
                        PickupAt: sdk.String("velit"),
                        PickupWindowDuration: sdk.String("ratione"),
                        PlacedAt: sdk.String("fuga"),
                        PrepTimeDuration: sdk.String("minima"),
                        ReadyAt: sdk.String("aliquid"),
                        Recipient: &shared.OrderFulfillmentRecipient{
                            Address: &shared.Address{
                                AddressLine1: sdk.String("facere"),
                                AddressLine2: sdk.String("laboriosam"),
                                AddressLine3: sdk.String("sint"),
                                AdministrativeDistrictLevel1: sdk.String("architecto"),
                                AdministrativeDistrictLevel2: sdk.String("totam"),
                                AdministrativeDistrictLevel3: sdk.String("alias"),
                                Country: sdk.String("United States of America"),
                                FirstName: sdk.String("Tyson"),
                                LastName: sdk.String("Kertzmann"),
                                Locality: sdk.String("consequatur"),
                                Organization: sdk.String("accusamus"),
                                PostalCode: sdk.String("56443-5945"),
                                Sublocality: sdk.String("fuga"),
                                Sublocality2: sdk.String("non"),
                                Sublocality3: sdk.String("nam"),
                            },
                            CustomerID: sdk.String("totam"),
                            DisplayName: sdk.String("ut"),
                            EmailAddress: sdk.String("non"),
                            PhoneNumber: sdk.String("illum"),
                        },
                        RejectedAt: sdk.String("adipisci"),
                        ScheduleType: sdk.String("totam"),
                    },
                    ShipmentDetails: &shared.OrderFulfillmentShipmentDetails{
                        CancelReason: sdk.String("explicabo"),
                        CanceledAt: sdk.String("quibusdam"),
                        Carrier: sdk.String("harum"),
                        ExpectedShippedAt: sdk.String("itaque"),
                        FailedAt: sdk.String("porro"),
                        FailureReason: sdk.String("ducimus"),
                        InProgressAt: sdk.String("ad"),
                        PackagedAt: sdk.String("optio"),
                        PlacedAt: sdk.String("ea"),
                        Recipient: &shared.OrderFulfillmentRecipient{
                            Address: &shared.Address{
                                AddressLine1: sdk.String("corrupti"),
                                AddressLine2: sdk.String("minus"),
                                AddressLine3: sdk.String("autem"),
                                AdministrativeDistrictLevel1: sdk.String("aut"),
                                AdministrativeDistrictLevel2: sdk.String("nisi"),
                                AdministrativeDistrictLevel3: sdk.String("veniam"),
                                Country: sdk.String("Monaco"),
                                FirstName: sdk.String("Eloisa"),
                                LastName: sdk.String("Homenick"),
                                Locality: sdk.String("atque"),
                                Organization: sdk.String("minus"),
                                PostalCode: sdk.String("20285-5357"),
                                Sublocality: sdk.String("sapiente"),
                                Sublocality2: sdk.String("deleniti"),
                                Sublocality3: sdk.String("explicabo"),
                            },
                            CustomerID: sdk.String("veritatis"),
                            DisplayName: sdk.String("incidunt"),
                            EmailAddress: sdk.String("eligendi"),
                            PhoneNumber: sdk.String("amet"),
                        },
                        ShippedAt: sdk.String("ipsum"),
                        ShippingNote: sdk.String("nihil"),
                        ShippingType: sdk.String("hic"),
                        TrackingNumber: sdk.String("occaecati"),
                        TrackingURL: sdk.String("iure"),
                    },
                    State: sdk.String("libero"),
                    Type: sdk.String("cum"),
                    UID: sdk.String("eaque"),
                },
            },
            ID: sdk.String("c69e372d-b134-44ba-9f78-a5c0ed7aab62"),
            LineItems: []shared.OrderLineItem{
                shared.OrderLineItem{
                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(480684),
                                Currency: sdk.String("aspernatur"),
                            },
                            DiscountUID: "ea",
                            UID: sdk.String("architecto"),
                        },
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(939472),
                                Currency: sdk.String("cum"),
                            },
                            DiscountUID: "alias",
                            UID: sdk.String("quod"),
                        },
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(331971),
                                Currency: sdk.String("corrupti"),
                            },
                            DiscountUID: "temporibus",
                            UID: sdk.String("odit"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(749343),
                                Currency: sdk.String("exercitationem"),
                            },
                            TaxUID: "beatae",
                            UID: sdk.String("cupiditate"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(583913),
                                Currency: sdk.String("ex"),
                            },
                            TaxUID: "tempore",
                            UID: sdk.String("minima"),
                        },
                    },
                    BasePriceMoney: &shared.Money{
                        Amount: sdk.Int64(713538),
                        Currency: sdk.String("modi"),
                    },
                    CatalogObjectID: sdk.String("expedita"),
                    CatalogVersion: sdk.Int64(313045),
                    GrossSalesMoney: &shared.Money{
                        Amount: sdk.Int64(37560),
                        Currency: sdk.String("recusandae"),
                    },
                    ItemType: sdk.String("saepe"),
                    Metadata: map[string]string{
                        "iusto": "quasi",
                        "odit": "tempore",
                        "ducimus": "animi",
                        "ducimus": "similique",
                    },
                    Modifiers: []shared.OrderLineItemModifier{
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(32843),
                                Currency: sdk.String("adipisci"),
                            },
                            CatalogObjectID: sdk.String("tempora"),
                            CatalogVersion: sdk.Int64(266911),
                            Name: sdk.String("Mr. Dennis Kunze"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(526516),
                                Currency: sdk.String("deleniti"),
                            },
                            UID: sdk.String("illum"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(899786),
                                Currency: sdk.String("vero"),
                            },
                            CatalogObjectID: sdk.String("facilis"),
                            CatalogVersion: sdk.Int64(898626),
                            Name: sdk.String("Wallace Medhurst"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(244344),
                                Currency: sdk.String("fugiat"),
                            },
                            UID: sdk.String("pariatur"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(27676),
                                Currency: sdk.String("quod"),
                            },
                            CatalogObjectID: sdk.String("minus"),
                            CatalogVersion: sdk.Int64(863575),
                            Name: sdk.String("Mr. Cindy White"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(205473),
                                Currency: sdk.String("voluptates"),
                            },
                            UID: sdk.String("aliquam"),
                        },
                    },
                    Name: sdk.String("Miss John Lehner"),
                    Note: sdk.String("vitae"),
                    PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                        BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("incidunt"),
                                DiscountUID: sdk.String("architecto"),
                                UID: sdk.String("deleniti"),
                            },
                        },
                        BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("accusamus"),
                                TaxUID: sdk.String("optio"),
                                UID: sdk.String("odio"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("ullam"),
                                TaxUID: sdk.String("provident"),
                                UID: sdk.String("officiis"),
                            },
                        },
                    },
                    Quantity: "ipsa",
                    QuantityUnit: &shared.OrderQuantityUnit{
                        CatalogVersion: sdk.Int64(177341),
                        MeasurementUnit: &shared.MeasurementUnit{
                            AreaUnit: sdk.String("delectus"),
                            CustomUnit: &shared.MeasurementUnitCustom{
                                Abbreviation: "dolor",
                                Name: "Laura Cronin",
                            },
                            GenericUnit: sdk.String("cumque"),
                            LengthUnit: sdk.String("laudantium"),
                            TimeUnit: sdk.String("recusandae"),
                            Type: sdk.String("odit"),
                            VolumeUnit: sdk.String("fugiat"),
                            WeightUnit: sdk.String("sequi"),
                        },
                        Precision: sdk.Int64(6100),
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(915897),
                        Currency: sdk.String("culpa"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(872553),
                        Currency: sdk.String("dolorem"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(122302),
                        Currency: sdk.String("ipsa"),
                    },
                    UID: sdk.String("incidunt"),
                    VariationName: sdk.String("maiores"),
                    VariationTotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(635584),
                        Currency: sdk.String("dolore"),
                    },
                },
                shared.OrderLineItem{
                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(438216),
                                Currency: sdk.String("alias"),
                            },
                            DiscountUID: "molestiae",
                            UID: sdk.String("rerum"),
                        },
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(972620),
                                Currency: sdk.String("sequi"),
                            },
                            DiscountUID: "ducimus",
                            UID: sdk.String("minima"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(283936),
                                Currency: sdk.String("tempora"),
                            },
                            TaxUID: "sed",
                            UID: sdk.String("quas"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(135685),
                                Currency: sdk.String("laudantium"),
                            },
                            TaxUID: "fugit",
                            UID: sdk.String("et"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(967492),
                                Currency: sdk.String("nulla"),
                            },
                            TaxUID: "libero",
                            UID: sdk.String("sed"),
                        },
                    },
                    BasePriceMoney: &shared.Money{
                        Amount: sdk.Int64(940076),
                        Currency: sdk.String("eum"),
                    },
                    CatalogObjectID: sdk.String("sint"),
                    CatalogVersion: sdk.Int64(909351),
                    GrossSalesMoney: &shared.Money{
                        Amount: sdk.Int64(331009),
                        Currency: sdk.String("unde"),
                    },
                    ItemType: sdk.String("consequuntur"),
                    Metadata: map[string]string{
                        "iusto": "quisquam",
                        "dignissimos": "ab",
                    },
                    Modifiers: []shared.OrderLineItemModifier{
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(760450),
                                Currency: sdk.String("voluptatum"),
                            },
                            CatalogObjectID: sdk.String("pariatur"),
                            CatalogVersion: sdk.Int64(194850),
                            Name: sdk.String("Carroll Grant"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(528914),
                                Currency: sdk.String("temporibus"),
                            },
                            UID: sdk.String("doloremque"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(226143),
                                Currency: sdk.String("ipsam"),
                            },
                            CatalogObjectID: sdk.String("deleniti"),
                            CatalogVersion: sdk.Int64(671873),
                            Name: sdk.String("Harry Schulist IV"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(999898),
                                Currency: sdk.String("eveniet"),
                            },
                            UID: sdk.String("odit"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(466629),
                                Currency: sdk.String("ullam"),
                            },
                            CatalogObjectID: sdk.String("inventore"),
                            CatalogVersion: sdk.Int64(670734),
                            Name: sdk.String("Dorothy Gorczany"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(13223),
                                Currency: sdk.String("numquam"),
                            },
                            UID: sdk.String("numquam"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(609429),
                                Currency: sdk.String("repudiandae"),
                            },
                            CatalogObjectID: sdk.String("inventore"),
                            CatalogVersion: sdk.Int64(308595),
                            Name: sdk.String("May Mosciski V"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(715543),
                                Currency: sdk.String("cum"),
                            },
                            UID: sdk.String("in"),
                        },
                    },
                    Name: sdk.String("Barry Bayer"),
                    Note: sdk.String("laborum"),
                    PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                        BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("quae"),
                                DiscountUID: sdk.String("voluptatibus"),
                                UID: sdk.String("est"),
                            },
                        },
                        BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("nesciunt"),
                                TaxUID: sdk.String("autem"),
                                UID: sdk.String("repudiandae"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("commodi"),
                                TaxUID: sdk.String("sed"),
                                UID: sdk.String("exercitationem"),
                            },
                        },
                    },
                    Quantity: "natus",
                    QuantityUnit: &shared.OrderQuantityUnit{
                        CatalogVersion: sdk.Int64(128471),
                        MeasurementUnit: &shared.MeasurementUnit{
                            AreaUnit: sdk.String("velit"),
                            CustomUnit: &shared.MeasurementUnitCustom{
                                Abbreviation: "adipisci",
                                Name: "Luther Hane",
                            },
                            GenericUnit: sdk.String("quibusdam"),
                            LengthUnit: sdk.String("explicabo"),
                            TimeUnit: sdk.String("adipisci"),
                            Type: sdk.String("iusto"),
                            VolumeUnit: sdk.String("ratione"),
                            WeightUnit: sdk.String("omnis"),
                        },
                        Precision: sdk.Int64(461863),
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(770696),
                        Currency: sdk.String("iusto"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(557068),
                        Currency: sdk.String("nemo"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(703599),
                        Currency: sdk.String("exercitationem"),
                    },
                    UID: sdk.String("nulla"),
                    VariationName: sdk.String("tempore"),
                    VariationTotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(298557),
                        Currency: sdk.String("maiores"),
                    },
                },
                shared.OrderLineItem{
                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(12881),
                                Currency: sdk.String("voluptatem"),
                            },
                            DiscountUID: "vitae",
                            UID: sdk.String("quos"),
                        },
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(239958),
                                Currency: sdk.String("reiciendis"),
                            },
                            DiscountUID: "accusamus",
                            UID: sdk.String("tempore"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(992586),
                                Currency: sdk.String("ea"),
                            },
                            TaxUID: "voluptate",
                            UID: sdk.String("aliquid"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(747474),
                                Currency: sdk.String("reprehenderit"),
                            },
                            TaxUID: "consequuntur",
                            UID: sdk.String("accusantium"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(422006),
                                Currency: sdk.String("pariatur"),
                            },
                            TaxUID: "deserunt",
                            UID: sdk.String("facilis"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(450312),
                                Currency: sdk.String("ad"),
                            },
                            TaxUID: "voluptatem",
                            UID: sdk.String("sit"),
                        },
                    },
                    BasePriceMoney: &shared.Money{
                        Amount: sdk.Int64(316842),
                        Currency: sdk.String("qui"),
                    },
                    CatalogObjectID: sdk.String("dolorum"),
                    CatalogVersion: sdk.Int64(322703),
                    GrossSalesMoney: &shared.Money{
                        Amount: sdk.Int64(395194),
                        Currency: sdk.String("dolore"),
                    },
                    ItemType: sdk.String("in"),
                    Metadata: map[string]string{
                        "fugiat": "minus",
                        "tempora": "sequi",
                        "natus": "saepe",
                        "quibusdam": "corrupti",
                    },
                    Modifiers: []shared.OrderLineItemModifier{
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(303267),
                                Currency: sdk.String("adipisci"),
                            },
                            CatalogObjectID: sdk.String("explicabo"),
                            CatalogVersion: sdk.Int64(51089),
                            Name: sdk.String("Randall Bergstrom"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(27710),
                                Currency: sdk.String("temporibus"),
                            },
                            UID: sdk.String("aliquam"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(279004),
                                Currency: sdk.String("totam"),
                            },
                            CatalogObjectID: sdk.String("iusto"),
                            CatalogVersion: sdk.Int64(650319),
                            Name: sdk.String("Hector McLaughlin"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(569306),
                                Currency: sdk.String("quaerat"),
                            },
                            UID: sdk.String("nobis"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(198485),
                                Currency: sdk.String("quidem"),
                            },
                            CatalogObjectID: sdk.String("unde"),
                            CatalogVersion: sdk.Int64(856985),
                            Name: sdk.String("Esther Lind"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(488437),
                                Currency: sdk.String("unde"),
                            },
                            UID: sdk.String("ad"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(638323),
                                Currency: sdk.String("fuga"),
                            },
                            CatalogObjectID: sdk.String("incidunt"),
                            CatalogVersion: sdk.Int64(134234),
                            Name: sdk.String("Mrs. Leland Grimes"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(385846),
                                Currency: sdk.String("omnis"),
                            },
                            UID: sdk.String("tenetur"),
                        },
                    },
                    Name: sdk.String("Mr. Margarita O'Kon"),
                    Note: sdk.String("pariatur"),
                    PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                        BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("inventore"),
                                DiscountUID: sdk.String("odit"),
                                UID: sdk.String("labore"),
                            },
                        },
                        BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("dolore"),
                                TaxUID: sdk.String("ullam"),
                                UID: sdk.String("aut"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("atque"),
                                TaxUID: sdk.String("quasi"),
                                UID: sdk.String("natus"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("fugiat"),
                                TaxUID: sdk.String("odio"),
                                UID: sdk.String("quo"),
                            },
                        },
                    },
                    Quantity: "ipsum",
                    QuantityUnit: &shared.OrderQuantityUnit{
                        CatalogVersion: sdk.Int64(737994),
                        MeasurementUnit: &shared.MeasurementUnit{
                            AreaUnit: sdk.String("et"),
                            CustomUnit: &shared.MeasurementUnitCustom{
                                Abbreviation: "harum",
                                Name: "Martha Lind",
                            },
                            GenericUnit: sdk.String("consequatur"),
                            LengthUnit: sdk.String("nisi"),
                            TimeUnit: sdk.String("quae"),
                            Type: sdk.String("saepe"),
                            VolumeUnit: sdk.String("accusantium"),
                            WeightUnit: sdk.String("sit"),
                        },
                        Precision: sdk.Int64(198934),
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(82723),
                        Currency: sdk.String("ipsa"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(820063),
                        Currency: sdk.String("perferendis"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(186103),
                        Currency: sdk.String("velit"),
                    },
                    UID: sdk.String("repellendus"),
                    VariationName: sdk.String("quod"),
                    VariationTotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(624852),
                        Currency: sdk.String("ipsa"),
                    },
                },
                shared.OrderLineItem{
                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(984550),
                                Currency: sdk.String("veniam"),
                            },
                            DiscountUID: "animi",
                            UID: sdk.String("delectus"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(176631),
                                Currency: sdk.String("id"),
                            },
                            TaxUID: "commodi",
                            UID: sdk.String("quo"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(307309),
                                Currency: sdk.String("magnam"),
                            },
                            TaxUID: "praesentium",
                            UID: sdk.String("numquam"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(434388),
                                Currency: sdk.String("id"),
                            },
                            TaxUID: "itaque",
                            UID: sdk.String("molestias"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(826117),
                                Currency: sdk.String("praesentium"),
                            },
                            TaxUID: "occaecati",
                            UID: sdk.String("eos"),
                        },
                    },
                    BasePriceMoney: &shared.Money{
                        Amount: sdk.Int64(333845),
                        Currency: sdk.String("amet"),
                    },
                    CatalogObjectID: sdk.String("nobis"),
                    CatalogVersion: sdk.Int64(549725),
                    GrossSalesMoney: &shared.Money{
                        Amount: sdk.Int64(589589),
                        Currency: sdk.String("ea"),
                    },
                    ItemType: sdk.String("consequuntur"),
                    Metadata: map[string]string{
                        "quaerat": "quos",
                        "excepturi": "eum",
                        "rerum": "a",
                        "ad": "et",
                    },
                    Modifiers: []shared.OrderLineItemModifier{
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(271782),
                                Currency: sdk.String("ea"),
                            },
                            CatalogObjectID: sdk.String("exercitationem"),
                            CatalogVersion: sdk.Int64(149172),
                            Name: sdk.String("Leonard Runolfsson"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(233804),
                                Currency: sdk.String("at"),
                            },
                            UID: sdk.String("suscipit"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(62556),
                                Currency: sdk.String("quam"),
                            },
                            CatalogObjectID: sdk.String("dignissimos"),
                            CatalogVersion: sdk.Int64(542276),
                            Name: sdk.String("Amos Hahn Sr."),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(257160),
                                Currency: sdk.String("voluptate"),
                            },
                            UID: sdk.String("odio"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(168809),
                                Currency: sdk.String("enim"),
                            },
                            CatalogObjectID: sdk.String("eveniet"),
                            CatalogVersion: sdk.Int64(415672),
                            Name: sdk.String("Ms. Frances Monahan"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(623150),
                                Currency: sdk.String("inventore"),
                            },
                            UID: sdk.String("ipsa"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(292824),
                                Currency: sdk.String("labore"),
                            },
                            CatalogObjectID: sdk.String("id"),
                            CatalogVersion: sdk.Int64(353671),
                            Name: sdk.String("Lamar Hammes"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(807822),
                                Currency: sdk.String("nihil"),
                            },
                            UID: sdk.String("ducimus"),
                        },
                    },
                    Name: sdk.String("Beth Jast DDS"),
                    Note: sdk.String("delectus"),
                    PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                        BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("optio"),
                                DiscountUID: sdk.String("a"),
                                UID: sdk.String("quis"),
                            },
                        },
                        BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("consectetur"),
                                TaxUID: sdk.String("qui"),
                                UID: sdk.String("aliquid"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("doloremque"),
                                TaxUID: sdk.String("enim"),
                                UID: sdk.String("explicabo"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("ipsam"),
                                TaxUID: sdk.String("beatae"),
                                UID: sdk.String("repudiandae"),
                            },
                        },
                    },
                    Quantity: "ex",
                    QuantityUnit: &shared.OrderQuantityUnit{
                        CatalogVersion: sdk.Int64(404525),
                        MeasurementUnit: &shared.MeasurementUnit{
                            AreaUnit: sdk.String("harum"),
                            CustomUnit: &shared.MeasurementUnitCustom{
                                Abbreviation: "cum",
                                Name: "Rachel Howe",
                            },
                            GenericUnit: sdk.String("dignissimos"),
                            LengthUnit: sdk.String("facere"),
                            TimeUnit: sdk.String("provident"),
                            Type: sdk.String("omnis"),
                            VolumeUnit: sdk.String("dolorum"),
                            WeightUnit: sdk.String("qui"),
                        },
                        Precision: sdk.Int64(861020),
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(244183),
                        Currency: sdk.String("amet"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(371409),
                        Currency: sdk.String("suscipit"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(487052),
                        Currency: sdk.String("ipsa"),
                    },
                    UID: sdk.String("accusamus"),
                    VariationName: sdk.String("error"),
                    VariationTotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(246664),
                        Currency: sdk.String("earum"),
                    },
                },
            },
            LocationID: "recusandae",
            Metadata: map[string]string{
                "impedit": "reiciendis",
                "ad": "perspiciatis",
            },
            NetAmounts: &shared.OrderMoneyAmounts{
                DiscountMoney: &shared.Money{
                    Amount: sdk.Int64(966801),
                    Currency: sdk.String("dolorem"),
                },
                ServiceChargeMoney: &shared.Money{
                    Amount: sdk.Int64(368785),
                    Currency: sdk.String("voluptatum"),
                },
                TaxMoney: &shared.Money{
                    Amount: sdk.Int64(679433),
                    Currency: sdk.String("officia"),
                },
                TipMoney: &shared.Money{
                    Amount: sdk.Int64(936554),
                    Currency: sdk.String("est"),
                },
                TotalMoney: &shared.Money{
                    Amount: sdk.Int64(789214),
                    Currency: sdk.String("officia"),
                },
            },
            PricingOptions: &shared.OrderPricingOptions{
                AutoApplyDiscounts: sdk.Bool(false),
                AutoApplyTaxes: sdk.Bool(false),
            },
            ReferenceID: sdk.String("officiis"),
            Refunds: []shared.Refund{
                shared.Refund{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(208310),
                                Currency: sdk.String("deserunt"),
                            },
                            Description: sdk.String("adipisci"),
                            LocationID: "inventore",
                            ReceivableID: sdk.String("tempore"),
                        },
                    },
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(979954),
                        Currency: sdk.String("ducimus"),
                    },
                    CreatedAt: sdk.String("rerum"),
                    ID: "a1cc9771-6c80-42cc-9e0c-7d9d323f1aa6",
                    LocationID: "sequi",
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(888024),
                        Currency: sdk.String("nulla"),
                    },
                    Reason: "occaecati",
                    Status: "optio",
                    TenderID: "asperiores",
                    TransactionID: "et",
                },
            },
            ReturnAmounts: &shared.OrderMoneyAmounts{
                DiscountMoney: &shared.Money{
                    Amount: sdk.Int64(752074),
                    Currency: sdk.String("quas"),
                },
                ServiceChargeMoney: &shared.Money{
                    Amount: sdk.Int64(367511),
                    Currency: sdk.String("commodi"),
                },
                TaxMoney: &shared.Money{
                    Amount: sdk.Int64(742562),
                    Currency: sdk.String("quo"),
                },
                TipMoney: &shared.Money{
                    Amount: sdk.Int64(730110),
                    Currency: sdk.String("id"),
                },
                TotalMoney: &shared.Money{
                    Amount: sdk.Int64(312991),
                    Currency: sdk.String("inventore"),
                },
            },
            Returns: []shared.OrderReturn{
                shared.OrderReturn{
                    ReturnAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(981656),
                            Currency: sdk.String("odit"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(256928),
                            Currency: sdk.String("nemo"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(255559),
                            Currency: sdk.String("culpa"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(304790),
                            Currency: sdk.String("iusto"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(976056),
                            Currency: sdk.String("dolorum"),
                        },
                    },
                    ReturnDiscounts: []shared.OrderReturnDiscount{
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(997354),
                                Currency: sdk.String("veritatis"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(77996),
                                Currency: sdk.String("autem"),
                            },
                            CatalogObjectID: sdk.String("optio"),
                            CatalogVersion: sdk.Int64(855286),
                            Name: sdk.String("Jorge Grady"),
                            Percentage: sdk.String("officia"),
                            Scope: sdk.String("reprehenderit"),
                            SourceDiscountUID: sdk.String("nemo"),
                            Type: sdk.String("nisi"),
                            UID: sdk.String("consequuntur"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(507819),
                                Currency: sdk.String("iusto"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(211584),
                                Currency: sdk.String("placeat"),
                            },
                            CatalogObjectID: sdk.String("dignissimos"),
                            CatalogVersion: sdk.Int64(844524),
                            Name: sdk.String("Nick Tillman"),
                            Percentage: sdk.String("doloribus"),
                            Scope: sdk.String("labore"),
                            SourceDiscountUID: sdk.String("adipisci"),
                            Type: sdk.String("at"),
                            UID: sdk.String("impedit"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(421228),
                                Currency: sdk.String("qui"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(231807),
                                Currency: sdk.String("ea"),
                            },
                            CatalogObjectID: sdk.String("aspernatur"),
                            CatalogVersion: sdk.Int64(9963),
                            Name: sdk.String("Danny Bogisich"),
                            Percentage: sdk.String("doloribus"),
                            Scope: sdk.String("nesciunt"),
                            SourceDiscountUID: sdk.String("doloremque"),
                            Type: sdk.String("at"),
                            UID: sdk.String("tenetur"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(194526),
                                Currency: sdk.String("temporibus"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(736480),
                                Currency: sdk.String("sit"),
                            },
                            CatalogObjectID: sdk.String("magni"),
                            CatalogVersion: sdk.Int64(136732),
                            Name: sdk.String("Donnie Ondricka"),
                            Percentage: sdk.String("nostrum"),
                            Scope: sdk.String("delectus"),
                            SourceDiscountUID: sdk.String("quidem"),
                            Type: sdk.String("rem"),
                            UID: sdk.String("repellat"),
                        },
                    },
                    ReturnLineItems: []shared.OrderReturnLineItem{
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(162475),
                                        Currency: sdk.String("repudiandae"),
                                    },
                                    DiscountUID: "nam",
                                    UID: sdk.String("libero"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(596333),
                                        Currency: sdk.String("illum"),
                                    },
                                    DiscountUID: "dolor",
                                    UID: sdk.String("praesentium"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(533290),
                                        Currency: sdk.String("dolor"),
                                    },
                                    TaxUID: "corrupti",
                                    UID: sdk.String("ducimus"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(565139),
                                Currency: sdk.String("aperiam"),
                            },
                            CatalogObjectID: sdk.String("fugit"),
                            CatalogVersion: sdk.Int64(289247),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(207045),
                                Currency: sdk.String("cum"),
                            },
                            ItemType: sdk.String("sed"),
                            Name: sdk.String("Chris Schuppe"),
                            Note: sdk.String("neque"),
                            Quantity: "perferendis",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(878395),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("excepturi"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "dicta",
                                        Name: "Dr. Nettie Hessel",
                                    },
                                    GenericUnit: sdk.String("animi"),
                                    LengthUnit: sdk.String("alias"),
                                    TimeUnit: sdk.String("non"),
                                    Type: sdk.String("porro"),
                                    VolumeUnit: sdk.String("voluptatum"),
                                    WeightUnit: sdk.String("libero"),
                                },
                                Precision: sdk.Int64(95232),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(745274),
                                        Currency: sdk.String("exercitationem"),
                                    },
                                    CatalogObjectID: sdk.String("exercitationem"),
                                    CatalogVersion: sdk.Int64(627088),
                                    Name: sdk.String("Claire Crooks MD"),
                                    SourceModifierUID: sdk.String("quo"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(248232),
                                        Currency: sdk.String("libero"),
                                    },
                                    UID: sdk.String("expedita"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(485026),
                                        Currency: sdk.String("quaerat"),
                                    },
                                    CatalogObjectID: sdk.String("aliquam"),
                                    CatalogVersion: sdk.Int64(385501),
                                    Name: sdk.String("Clara Torp PhD"),
                                    SourceModifierUID: sdk.String("voluptatem"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(248650),
                                        Currency: sdk.String("ipsum"),
                                    },
                                    UID: sdk.String("laudantium"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(520686),
                                        Currency: sdk.String("facilis"),
                                    },
                                    CatalogObjectID: sdk.String("consequatur"),
                                    CatalogVersion: sdk.Int64(824536),
                                    Name: sdk.String("Ms. Jeannette Price"),
                                    SourceModifierUID: sdk.String("tenetur"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(905401),
                                        Currency: sdk.String("eveniet"),
                                    },
                                    UID: sdk.String("reprehenderit"),
                                },
                            },
                            SourceLineItemUID: sdk.String("incidunt"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(742608),
                                Currency: sdk.String("voluptas"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(961926),
                                Currency: sdk.String("repudiandae"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(693965),
                                Currency: sdk.String("occaecati"),
                            },
                            UID: sdk.String("labore"),
                            VariationName: sdk.String("ipsam"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(452075),
                                Currency: sdk.String("quod"),
                            },
                        },
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(924505),
                                        Currency: sdk.String("illum"),
                                    },
                                    DiscountUID: "laborum",
                                    UID: sdk.String("reiciendis"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(230903),
                                        Currency: sdk.String("provident"),
                                    },
                                    DiscountUID: "possimus",
                                    UID: sdk.String("illo"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(949551),
                                        Currency: sdk.String("rerum"),
                                    },
                                    TaxUID: "asperiores",
                                    UID: sdk.String("odio"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(395577),
                                        Currency: sdk.String("hic"),
                                    },
                                    TaxUID: "assumenda",
                                    UID: sdk.String("ab"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(433879),
                                Currency: sdk.String("quia"),
                            },
                            CatalogObjectID: sdk.String("quidem"),
                            CatalogVersion: sdk.Int64(194568),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(41871),
                                Currency: sdk.String("dolor"),
                            },
                            ItemType: sdk.String("debitis"),
                            Name: sdk.String("Sarah Cremin"),
                            Note: sdk.String("excepturi"),
                            Quantity: "ipsum",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(882646),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("consectetur"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "tempora",
                                        Name: "Janet Jacobi",
                                    },
                                    GenericUnit: sdk.String("corporis"),
                                    LengthUnit: sdk.String("nemo"),
                                    TimeUnit: sdk.String("soluta"),
                                    Type: sdk.String("magnam"),
                                    VolumeUnit: sdk.String("sequi"),
                                    WeightUnit: sdk.String("ab"),
                                },
                                Precision: sdk.Int64(232864),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(354066),
                                        Currency: sdk.String("consectetur"),
                                    },
                                    CatalogObjectID: sdk.String("porro"),
                                    CatalogVersion: sdk.Int64(762928),
                                    Name: sdk.String("Justin Schaefer II"),
                                    SourceModifierUID: sdk.String("placeat"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(288027),
                                        Currency: sdk.String("culpa"),
                                    },
                                    UID: sdk.String("illum"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(798536),
                                        Currency: sdk.String("minus"),
                                    },
                                    CatalogObjectID: sdk.String("sint"),
                                    CatalogVersion: sdk.Int64(578636),
                                    Name: sdk.String("Lucille Schmitt V"),
                                    SourceModifierUID: sdk.String("exercitationem"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(739867),
                                        Currency: sdk.String("atque"),
                                    },
                                    UID: sdk.String("suscipit"),
                                },
                            },
                            SourceLineItemUID: sdk.String("labore"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(509562),
                                Currency: sdk.String("optio"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(888034),
                                Currency: sdk.String("voluptatibus"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(649791),
                                Currency: sdk.String("quam"),
                            },
                            UID: sdk.String("deleniti"),
                            VariationName: sdk.String("a"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(71222),
                                Currency: sdk.String("voluptates"),
                            },
                        },
                    },
                    ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(818270),
                                Currency: sdk.String("nesciunt"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(726855),
                                Currency: sdk.String("error"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(108112),
                                        Currency: sdk.String("saepe"),
                                    },
                                    TaxUID: "voluptatem",
                                    UID: sdk.String("sint"),
                                },
                            },
                            CalculationPhase: sdk.String("corporis"),
                            CatalogObjectID: sdk.String("explicabo"),
                            CatalogVersion: sdk.Int64(718859),
                            Name: sdk.String("Abraham Goldner"),
                            Percentage: sdk.String("quidem"),
                            SourceServiceChargeUID: sdk.String("inventore"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(613286),
                                Currency: sdk.String("voluptatibus"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(486162),
                                Currency: sdk.String("ab"),
                            },
                            UID: sdk.String("neque"),
                        },
                    },
                    ReturnTaxes: []shared.OrderReturnTax{
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(568548),
                                Currency: sdk.String("enim"),
                            },
                            CatalogObjectID: sdk.String("culpa"),
                            CatalogVersion: sdk.Int64(293095),
                            Name: sdk.String("Elsie Mann I"),
                            Percentage: sdk.String("corrupti"),
                            Scope: sdk.String("in"),
                            SourceTaxUID: sdk.String("quia"),
                            Type: sdk.String("odio"),
                            UID: sdk.String("dicta"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(907524),
                                Currency: sdk.String("vitae"),
                            },
                            CatalogObjectID: sdk.String("quos"),
                            CatalogVersion: sdk.Int64(911026),
                            Name: sdk.String("Wade Trantow"),
                            Percentage: sdk.String("illo"),
                            Scope: sdk.String("illo"),
                            SourceTaxUID: sdk.String("deleniti"),
                            Type: sdk.String("quisquam"),
                            UID: sdk.String("fugit"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(758736),
                                Currency: sdk.String("quo"),
                            },
                            CatalogObjectID: sdk.String("minima"),
                            CatalogVersion: sdk.Int64(496110),
                            Name: sdk.String("Wm Skiles MD"),
                            Percentage: sdk.String("beatae"),
                            Scope: sdk.String("fuga"),
                            SourceTaxUID: sdk.String("quam"),
                            Type: sdk.String("molestias"),
                            UID: sdk.String("eveniet"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(845740),
                                Currency: sdk.String("eos"),
                            },
                            CatalogObjectID: sdk.String("cupiditate"),
                            CatalogVersion: sdk.Int64(668952),
                            Name: sdk.String("Al Hackett"),
                            Percentage: sdk.String("animi"),
                            Scope: sdk.String("totam"),
                            SourceTaxUID: sdk.String("ullam"),
                            Type: sdk.String("nisi"),
                            UID: sdk.String("nemo"),
                        },
                    },
                    RoundingAdjustment: &shared.OrderRoundingAdjustment{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(541642),
                            Currency: sdk.String("optio"),
                        },
                        Name: sdk.String("Teri Gleason"),
                        UID: sdk.String("optio"),
                    },
                    SourceOrderID: sdk.String("laudantium"),
                    UID: sdk.String("quas"),
                },
                shared.OrderReturn{
                    ReturnAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(695511),
                            Currency: sdk.String("voluptates"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(287202),
                            Currency: sdk.String("hic"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(135766),
                            Currency: sdk.String("nihil"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(559218),
                            Currency: sdk.String("tenetur"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(854650),
                            Currency: sdk.String("unde"),
                        },
                    },
                    ReturnDiscounts: []shared.OrderReturnDiscount{
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(409023),
                                Currency: sdk.String("molestiae"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(882826),
                                Currency: sdk.String("labore"),
                            },
                            CatalogObjectID: sdk.String("autem"),
                            CatalogVersion: sdk.Int64(808834),
                            Name: sdk.String("Katherine Schuppe"),
                            Percentage: sdk.String("repellat"),
                            Scope: sdk.String("id"),
                            SourceDiscountUID: sdk.String("fuga"),
                            Type: sdk.String("ad"),
                            UID: sdk.String("corrupti"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(835659),
                                Currency: sdk.String("minus"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(913898),
                                Currency: sdk.String("repellat"),
                            },
                            CatalogObjectID: sdk.String("sed"),
                            CatalogVersion: sdk.Int64(190874),
                            Name: sdk.String("Alexandra Morissette"),
                            Percentage: sdk.String("tempore"),
                            Scope: sdk.String("natus"),
                            SourceDiscountUID: sdk.String("facilis"),
                            Type: sdk.String("assumenda"),
                            UID: sdk.String("repellat"),
                        },
                    },
                    ReturnLineItems: []shared.OrderReturnLineItem{
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(624189),
                                        Currency: sdk.String("alias"),
                                    },
                                    DiscountUID: "id",
                                    UID: sdk.String("nobis"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(568777),
                                        Currency: sdk.String("expedita"),
                                    },
                                    TaxUID: "harum",
                                    UID: sdk.String("quisquam"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(753525),
                                        Currency: sdk.String("magni"),
                                    },
                                    TaxUID: "dignissimos",
                                    UID: sdk.String("aspernatur"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(356534),
                                        Currency: sdk.String("saepe"),
                                    },
                                    TaxUID: "impedit",
                                    UID: sdk.String("magni"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(380130),
                                        Currency: sdk.String("ipsam"),
                                    },
                                    TaxUID: "error",
                                    UID: sdk.String("quisquam"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(893406),
                                Currency: sdk.String("ipsa"),
                            },
                            CatalogObjectID: sdk.String("quia"),
                            CatalogVersion: sdk.Int64(520024),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(8906),
                                Currency: sdk.String("corrupti"),
                            },
                            ItemType: sdk.String("numquam"),
                            Name: sdk.String("Sadie Huel"),
                            Note: sdk.String("tenetur"),
                            Quantity: "vel",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(547874),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("voluptates"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "modi",
                                        Name: "Erma Lakin",
                                    },
                                    GenericUnit: sdk.String("possimus"),
                                    LengthUnit: sdk.String("maiores"),
                                    TimeUnit: sdk.String("est"),
                                    Type: sdk.String("optio"),
                                    VolumeUnit: sdk.String("voluptate"),
                                    WeightUnit: sdk.String("nostrum"),
                                },
                                Precision: sdk.Int64(277082),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(55600),
                                        Currency: sdk.String("ipsa"),
                                    },
                                    CatalogObjectID: sdk.String("quaerat"),
                                    CatalogVersion: sdk.Int64(202921),
                                    Name: sdk.String("Marianne Keeling"),
                                    SourceModifierUID: sdk.String("quia"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(703648),
                                        Currency: sdk.String("magnam"),
                                    },
                                    UID: sdk.String("dolor"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(588801),
                                        Currency: sdk.String("inventore"),
                                    },
                                    CatalogObjectID: sdk.String("sapiente"),
                                    CatalogVersion: sdk.Int64(838798),
                                    Name: sdk.String("Frank Bruen"),
                                    SourceModifierUID: sdk.String("itaque"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(598914),
                                        Currency: sdk.String("beatae"),
                                    },
                                    UID: sdk.String("eveniet"),
                                },
                            },
                            SourceLineItemUID: sdk.String("quas"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(981494),
                                Currency: sdk.String("voluptate"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(727122),
                                Currency: sdk.String("quod"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(411638),
                                Currency: sdk.String("error"),
                            },
                            UID: sdk.String("at"),
                            VariationName: sdk.String("incidunt"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(419332),
                                Currency: sdk.String("alias"),
                            },
                        },
                    },
                    ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(482868),
                                Currency: sdk.String("dignissimos"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(894109),
                                Currency: sdk.String("quo"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(735586),
                                        Currency: sdk.String("sunt"),
                                    },
                                    TaxUID: "nisi",
                                    UID: sdk.String("nulla"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(100813),
                                        Currency: sdk.String("accusantium"),
                                    },
                                    TaxUID: "a",
                                    UID: sdk.String("et"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(918610),
                                        Currency: sdk.String("delectus"),
                                    },
                                    TaxUID: "qui",
                                    UID: sdk.String("laboriosam"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(203301),
                                        Currency: sdk.String("ab"),
                                    },
                                    TaxUID: "quisquam",
                                    UID: sdk.String("nihil"),
                                },
                            },
                            CalculationPhase: sdk.String("quisquam"),
                            CatalogObjectID: sdk.String("aperiam"),
                            CatalogVersion: sdk.Int64(965491),
                            Name: sdk.String("Winifred MacGyver"),
                            Percentage: sdk.String("sapiente"),
                            SourceServiceChargeUID: sdk.String("error"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(815977),
                                Currency: sdk.String("veniam"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(756372),
                                Currency: sdk.String("aspernatur"),
                            },
                            UID: sdk.String("nemo"),
                        },
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(984402),
                                Currency: sdk.String("illum"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(249941),
                                Currency: sdk.String("repudiandae"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(734003),
                                        Currency: sdk.String("incidunt"),
                                    },
                                    TaxUID: "deserunt",
                                    UID: sdk.String("non"),
                                },
                            },
                            CalculationPhase: sdk.String("officia"),
                            CatalogObjectID: sdk.String("magnam"),
                            CatalogVersion: sdk.Int64(155680),
                            Name: sdk.String("Tiffany Schneider Sr."),
                            Percentage: sdk.String("ullam"),
                            SourceServiceChargeUID: sdk.String("molestiae"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(103745),
                                Currency: sdk.String("ab"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(982197),
                                Currency: sdk.String("labore"),
                            },
                            UID: sdk.String("fugit"),
                        },
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(807430),
                                Currency: sdk.String("iusto"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(924842),
                                Currency: sdk.String("iusto"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(781178),
                                        Currency: sdk.String("enim"),
                                    },
                                    TaxUID: "tempora",
                                    UID: sdk.String("voluptatum"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(737774),
                                        Currency: sdk.String("itaque"),
                                    },
                                    TaxUID: "sit",
                                    UID: sdk.String("excepturi"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(927151),
                                        Currency: sdk.String("numquam"),
                                    },
                                    TaxUID: "architecto",
                                    UID: sdk.String("fuga"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(480829),
                                        Currency: sdk.String("culpa"),
                                    },
                                    TaxUID: "dolores",
                                    UID: sdk.String("inventore"),
                                },
                            },
                            CalculationPhase: sdk.String("ipsam"),
                            CatalogObjectID: sdk.String("impedit"),
                            CatalogVersion: sdk.Int64(642021),
                            Name: sdk.String("Theresa Murphy"),
                            Percentage: sdk.String("dolorum"),
                            SourceServiceChargeUID: sdk.String("provident"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(844545),
                                Currency: sdk.String("ipsam"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(592898),
                                Currency: sdk.String("omnis"),
                            },
                            UID: sdk.String("rem"),
                        },
                    },
                    ReturnTaxes: []shared.OrderReturnTax{
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(109609),
                                Currency: sdk.String("perspiciatis"),
                            },
                            CatalogObjectID: sdk.String("fugit"),
                            CatalogVersion: sdk.Int64(809751),
                            Name: sdk.String("Sammy Abernathy"),
                            Percentage: sdk.String("iusto"),
                            Scope: sdk.String("eligendi"),
                            SourceTaxUID: sdk.String("ullam"),
                            Type: sdk.String("dolorem"),
                            UID: sdk.String("vero"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(459564),
                                Currency: sdk.String("vero"),
                            },
                            CatalogObjectID: sdk.String("dignissimos"),
                            CatalogVersion: sdk.Int64(813642),
                            Name: sdk.String("Rochelle Thiel"),
                            Percentage: sdk.String("deleniti"),
                            Scope: sdk.String("nobis"),
                            SourceTaxUID: sdk.String("excepturi"),
                            Type: sdk.String("consequatur"),
                            UID: sdk.String("distinctio"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(628926),
                                Currency: sdk.String("porro"),
                            },
                            CatalogObjectID: sdk.String("consectetur"),
                            CatalogVersion: sdk.Int64(562192),
                            Name: sdk.String("Kerry Deckow"),
                            Percentage: sdk.String("ea"),
                            Scope: sdk.String("in"),
                            SourceTaxUID: sdk.String("ipsa"),
                            Type: sdk.String("sequi"),
                            UID: sdk.String("maiores"),
                        },
                    },
                    RoundingAdjustment: &shared.OrderRoundingAdjustment{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(932641),
                            Currency: sdk.String("quod"),
                        },
                        Name: sdk.String("Joan Satterfield IV"),
                        UID: sdk.String("qui"),
                    },
                    SourceOrderID: sdk.String("dolore"),
                    UID: sdk.String("possimus"),
                },
                shared.OrderReturn{
                    ReturnAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(117902),
                            Currency: sdk.String("deleniti"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(598720),
                            Currency: sdk.String("deserunt"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(223636),
                            Currency: sdk.String("eum"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(632913),
                            Currency: sdk.String("iure"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(690865),
                            Currency: sdk.String("sunt"),
                        },
                    },
                    ReturnDiscounts: []shared.OrderReturnDiscount{
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(170992),
                                Currency: sdk.String("in"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(918997),
                                Currency: sdk.String("rerum"),
                            },
                            CatalogObjectID: sdk.String("esse"),
                            CatalogVersion: sdk.Int64(35152),
                            Name: sdk.String("Harriet Orn DDS"),
                            Percentage: sdk.String("voluptatum"),
                            Scope: sdk.String("doloribus"),
                            SourceDiscountUID: sdk.String("officiis"),
                            Type: sdk.String("dolore"),
                            UID: sdk.String("commodi"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(894444),
                                Currency: sdk.String("commodi"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(105990),
                                Currency: sdk.String("voluptate"),
                            },
                            CatalogObjectID: sdk.String("voluptate"),
                            CatalogVersion: sdk.Int64(855102),
                            Name: sdk.String("Jackie Stracke"),
                            Percentage: sdk.String("distinctio"),
                            Scope: sdk.String("dignissimos"),
                            SourceDiscountUID: sdk.String("eaque"),
                            Type: sdk.String("voluptatibus"),
                            UID: sdk.String("voluptatibus"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(737275),
                                Currency: sdk.String("facilis"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(394007),
                                Currency: sdk.String("occaecati"),
                            },
                            CatalogObjectID: sdk.String("ducimus"),
                            CatalogVersion: sdk.Int64(45176),
                            Name: sdk.String("Phil Kuhlman DVM"),
                            Percentage: sdk.String("neque"),
                            Scope: sdk.String("autem"),
                            SourceDiscountUID: sdk.String("alias"),
                            Type: sdk.String("occaecati"),
                            UID: sdk.String("iusto"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(893718),
                                Currency: sdk.String("voluptatibus"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(460831),
                                Currency: sdk.String("maxime"),
                            },
                            CatalogObjectID: sdk.String("eos"),
                            CatalogVersion: sdk.Int64(41289),
                            Name: sdk.String("Miss Lorena Homenick PhD"),
                            Percentage: sdk.String("dolorem"),
                            Scope: sdk.String("aut"),
                            SourceDiscountUID: sdk.String("blanditiis"),
                            Type: sdk.String("ducimus"),
                            UID: sdk.String("inventore"),
                        },
                    },
                    ReturnLineItems: []shared.OrderReturnLineItem{
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(164432),
                                        Currency: sdk.String("perferendis"),
                                    },
                                    DiscountUID: "est",
                                    UID: sdk.String("ipsum"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(835546),
                                        Currency: sdk.String("perspiciatis"),
                                    },
                                    DiscountUID: "corrupti",
                                    UID: sdk.String("ea"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(193794),
                                        Currency: sdk.String("esse"),
                                    },
                                    DiscountUID: "nobis",
                                    UID: sdk.String("est"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(521333),
                                        Currency: sdk.String("corporis"),
                                    },
                                    DiscountUID: "maxime",
                                    UID: sdk.String("adipisci"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(918224),
                                        Currency: sdk.String("autem"),
                                    },
                                    TaxUID: "nostrum",
                                    UID: sdk.String("ad"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(478021),
                                        Currency: sdk.String("ut"),
                                    },
                                    TaxUID: "possimus",
                                    UID: sdk.String("harum"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(632802),
                                        Currency: sdk.String("reiciendis"),
                                    },
                                    TaxUID: "natus",
                                    UID: sdk.String("labore"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(638818),
                                        Currency: sdk.String("quam"),
                                    },
                                    TaxUID: "placeat",
                                    UID: sdk.String("sint"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(525860),
                                Currency: sdk.String("a"),
                            },
                            CatalogObjectID: sdk.String("illo"),
                            CatalogVersion: sdk.Int64(247145),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(665513),
                                Currency: sdk.String("delectus"),
                            },
                            ItemType: sdk.String("magni"),
                            Name: sdk.String("Mack Rempel"),
                            Note: sdk.String("sapiente"),
                            Quantity: "consequuntur",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(710352),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("voluptatibus"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "eius",
                                        Name: "Luis Streich",
                                    },
                                    GenericUnit: sdk.String("amet"),
                                    LengthUnit: sdk.String("minima"),
                                    TimeUnit: sdk.String("ea"),
                                    Type: sdk.String("fugiat"),
                                    VolumeUnit: sdk.String("esse"),
                                    WeightUnit: sdk.String("officiis"),
                                },
                                Precision: sdk.Int64(124368),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(735462),
                                        Currency: sdk.String("dolores"),
                                    },
                                    CatalogObjectID: sdk.String("beatae"),
                                    CatalogVersion: sdk.Int64(756979),
                                    Name: sdk.String("Miss Sergio Lemke"),
                                    SourceModifierUID: sdk.String("assumenda"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(332000),
                                        Currency: sdk.String("quis"),
                                    },
                                    UID: sdk.String("id"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(965145),
                                        Currency: sdk.String("autem"),
                                    },
                                    CatalogObjectID: sdk.String("iste"),
                                    CatalogVersion: sdk.Int64(648676),
                                    Name: sdk.String("Bernadette Green"),
                                    SourceModifierUID: sdk.String("natus"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(684746),
                                        Currency: sdk.String("saepe"),
                                    },
                                    UID: sdk.String("nesciunt"),
                                },
                            },
                            SourceLineItemUID: sdk.String("non"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(426964),
                                Currency: sdk.String("praesentium"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(107679),
                                Currency: sdk.String("eligendi"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(180544),
                                Currency: sdk.String("dolor"),
                            },
                            UID: sdk.String("eligendi"),
                            VariationName: sdk.String("dolorem"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(609362),
                                Currency: sdk.String("fuga"),
                            },
                        },
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(780639),
                                        Currency: sdk.String("consequatur"),
                                    },
                                    DiscountUID: "officiis",
                                    UID: sdk.String("ab"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(448314),
                                        Currency: sdk.String("optio"),
                                    },
                                    DiscountUID: "distinctio",
                                    UID: sdk.String("quasi"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(771042),
                                        Currency: sdk.String("enim"),
                                    },
                                    TaxUID: "nam",
                                    UID: sdk.String("culpa"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(513734),
                                Currency: sdk.String("fugit"),
                            },
                            CatalogObjectID: sdk.String("corporis"),
                            CatalogVersion: sdk.Int64(955683),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(900232),
                                Currency: sdk.String("explicabo"),
                            },
                            ItemType: sdk.String("eos"),
                            Name: sdk.String("Laurence Hamill"),
                            Note: sdk.String("est"),
                            Quantity: "ex",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(942371),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("nobis"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "repellat",
                                        Name: "Devin Mertz",
                                    },
                                    GenericUnit: sdk.String("fuga"),
                                    LengthUnit: sdk.String("a"),
                                    TimeUnit: sdk.String("aliquid"),
                                    Type: sdk.String("voluptatum"),
                                    VolumeUnit: sdk.String("sunt"),
                                    WeightUnit: sdk.String("adipisci"),
                                },
                                Precision: sdk.Int64(848785),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(334736),
                                        Currency: sdk.String("nam"),
                                    },
                                    CatalogObjectID: sdk.String("delectus"),
                                    CatalogVersion: sdk.Int64(935301),
                                    Name: sdk.String("Elbert Schmidt"),
                                    SourceModifierUID: sdk.String("at"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(408130),
                                        Currency: sdk.String("provident"),
                                    },
                                    UID: sdk.String("inventore"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(409679),
                                        Currency: sdk.String("repellat"),
                                    },
                                    CatalogObjectID: sdk.String("quam"),
                                    CatalogVersion: sdk.Int64(964151),
                                    Name: sdk.String("Neil Sporer"),
                                    SourceModifierUID: sdk.String("molestiae"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(58461),
                                        Currency: sdk.String("recusandae"),
                                    },
                                    UID: sdk.String("placeat"),
                                },
                            },
                            SourceLineItemUID: sdk.String("aliquid"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(25744),
                                Currency: sdk.String("vero"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(387768),
                                Currency: sdk.String("aut"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(444167),
                                Currency: sdk.String("nostrum"),
                            },
                            UID: sdk.String("praesentium"),
                            VariationName: sdk.String("natus"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(255953),
                                Currency: sdk.String("fugiat"),
                            },
                        },
                    },
                    ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(88684),
                                Currency: sdk.String("quisquam"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(74669),
                                Currency: sdk.String("tempora"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(813251),
                                        Currency: sdk.String("excepturi"),
                                    },
                                    TaxUID: "aut",
                                    UID: sdk.String("aspernatur"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(142799),
                                        Currency: sdk.String("molestiae"),
                                    },
                                    TaxUID: "recusandae",
                                    UID: sdk.String("neque"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(470400),
                                        Currency: sdk.String("nobis"),
                                    },
                                    TaxUID: "eaque",
                                    UID: sdk.String("facere"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(610443),
                                        Currency: sdk.String("reprehenderit"),
                                    },
                                    TaxUID: "voluptate",
                                    UID: sdk.String("reiciendis"),
                                },
                            },
                            CalculationPhase: sdk.String("et"),
                            CatalogObjectID: sdk.String("culpa"),
                            CatalogVersion: sdk.Int64(347962),
                            Name: sdk.String("Cora Bergstrom"),
                            Percentage: sdk.String("officiis"),
                            SourceServiceChargeUID: sdk.String("provident"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(492506),
                                Currency: sdk.String("nostrum"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(104737),
                                Currency: sdk.String("cum"),
                            },
                            UID: sdk.String("vitae"),
                        },
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(38735),
                                Currency: sdk.String("commodi"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(852285),
                                Currency: sdk.String("qui"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(920954),
                                        Currency: sdk.String("accusantium"),
                                    },
                                    TaxUID: "dolorem",
                                    UID: sdk.String("debitis"),
                                },
                            },
                            CalculationPhase: sdk.String("voluptas"),
                            CatalogObjectID: sdk.String("natus"),
                            CatalogVersion: sdk.Int64(512382),
                            Name: sdk.String("Lynn Murazik"),
                            Percentage: sdk.String("omnis"),
                            SourceServiceChargeUID: sdk.String("cupiditate"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(939368),
                                Currency: sdk.String("nobis"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(831959),
                                Currency: sdk.String("necessitatibus"),
                            },
                            UID: sdk.String("unde"),
                        },
                    },
                    ReturnTaxes: []shared.OrderReturnTax{
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(446712),
                                Currency: sdk.String("odit"),
                            },
                            CatalogObjectID: sdk.String("iste"),
                            CatalogVersion: sdk.Int64(754701),
                            Name: sdk.String("Orville Glover"),
                            Percentage: sdk.String("pariatur"),
                            Scope: sdk.String("totam"),
                            SourceTaxUID: sdk.String("fuga"),
                            Type: sdk.String("aliquam"),
                            UID: sdk.String("tempora"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(385230),
                                Currency: sdk.String("quaerat"),
                            },
                            CatalogObjectID: sdk.String("alias"),
                            CatalogVersion: sdk.Int64(790176),
                            Name: sdk.String("Leslie Beer"),
                            Percentage: sdk.String("nihil"),
                            Scope: sdk.String("neque"),
                            SourceTaxUID: sdk.String("est"),
                            Type: sdk.String("consequuntur"),
                            UID: sdk.String("a"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(600556),
                                Currency: sdk.String("dolorem"),
                            },
                            CatalogObjectID: sdk.String("maiores"),
                            CatalogVersion: sdk.Int64(288494),
                            Name: sdk.String("Arlene Strosin PhD"),
                            Percentage: sdk.String("praesentium"),
                            Scope: sdk.String("facere"),
                            SourceTaxUID: sdk.String("fuga"),
                            Type: sdk.String("minima"),
                            UID: sdk.String("voluptas"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(88563),
                                Currency: sdk.String("explicabo"),
                            },
                            CatalogObjectID: sdk.String("sed"),
                            CatalogVersion: sdk.Int64(15406),
                            Name: sdk.String("Kristen Osinski"),
                            Percentage: sdk.String("asperiores"),
                            Scope: sdk.String("eos"),
                            SourceTaxUID: sdk.String("quam"),
                            Type: sdk.String("voluptate"),
                            UID: sdk.String("dolore"),
                        },
                    },
                    RoundingAdjustment: &shared.OrderRoundingAdjustment{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(508424),
                            Currency: sdk.String("exercitationem"),
                        },
                        Name: sdk.String("Henry McCullough"),
                        UID: sdk.String("similique"),
                    },
                    SourceOrderID: sdk.String("tenetur"),
                    UID: sdk.String("error"),
                },
                shared.OrderReturn{
                    ReturnAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(502580),
                            Currency: sdk.String("aut"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(861552),
                            Currency: sdk.String("culpa"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(441672),
                            Currency: sdk.String("est"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(14962),
                            Currency: sdk.String("blanditiis"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(602133),
                            Currency: sdk.String("hic"),
                        },
                    },
                    ReturnDiscounts: []shared.OrderReturnDiscount{
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(258045),
                                Currency: sdk.String("ut"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(851916),
                                Currency: sdk.String("facilis"),
                            },
                            CatalogObjectID: sdk.String("dolores"),
                            CatalogVersion: sdk.Int64(463461),
                            Name: sdk.String("Dr. Marion Doyle"),
                            Percentage: sdk.String("minus"),
                            Scope: sdk.String("placeat"),
                            SourceDiscountUID: sdk.String("in"),
                            Type: sdk.String("minus"),
                            UID: sdk.String("voluptas"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(842299),
                                Currency: sdk.String("aut"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(798905),
                                Currency: sdk.String("rerum"),
                            },
                            CatalogObjectID: sdk.String("cumque"),
                            CatalogVersion: sdk.Int64(964939),
                            Name: sdk.String("Cedric Schuppe"),
                            Percentage: sdk.String("modi"),
                            Scope: sdk.String("facilis"),
                            SourceDiscountUID: sdk.String("autem"),
                            Type: sdk.String("repellat"),
                            UID: sdk.String("ea"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(145105),
                                Currency: sdk.String("consectetur"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(735433),
                                Currency: sdk.String("minus"),
                            },
                            CatalogObjectID: sdk.String("repudiandae"),
                            CatalogVersion: sdk.Int64(786086),
                            Name: sdk.String("Miss Johnathan Heaney"),
                            Percentage: sdk.String("recusandae"),
                            Scope: sdk.String("quis"),
                            SourceDiscountUID: sdk.String("earum"),
                            Type: sdk.String("voluptatem"),
                            UID: sdk.String("pariatur"),
                        },
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(637419),
                                Currency: sdk.String("quas"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(737600),
                                Currency: sdk.String("sint"),
                            },
                            CatalogObjectID: sdk.String("laborum"),
                            CatalogVersion: sdk.Int64(959477),
                            Name: sdk.String("Mrs. Alberta Stoltenberg"),
                            Percentage: sdk.String("deleniti"),
                            Scope: sdk.String("nisi"),
                            SourceDiscountUID: sdk.String("repudiandae"),
                            Type: sdk.String("odio"),
                            UID: sdk.String("libero"),
                        },
                    },
                    ReturnLineItems: []shared.OrderReturnLineItem{
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(214425),
                                        Currency: sdk.String("quo"),
                                    },
                                    DiscountUID: "expedita",
                                    UID: sdk.String("saepe"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(825389),
                                        Currency: sdk.String("et"),
                                    },
                                    TaxUID: "molestiae",
                                    UID: sdk.String("ea"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(825148),
                                Currency: sdk.String("placeat"),
                            },
                            CatalogObjectID: sdk.String("illo"),
                            CatalogVersion: sdk.Int64(760272),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(254226),
                                Currency: sdk.String("adipisci"),
                            },
                            ItemType: sdk.String("pariatur"),
                            Name: sdk.String("Michelle Yost PhD"),
                            Note: sdk.String("inventore"),
                            Quantity: "in",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(90659),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("veritatis"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "ad",
                                        Name: "Jacquelyn Reynolds",
                                    },
                                    GenericUnit: sdk.String("itaque"),
                                    LengthUnit: sdk.String("saepe"),
                                    TimeUnit: sdk.String("non"),
                                    Type: sdk.String("hic"),
                                    VolumeUnit: sdk.String("esse"),
                                    WeightUnit: sdk.String("magni"),
                                },
                                Precision: sdk.Int64(93508),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(556233),
                                        Currency: sdk.String("magnam"),
                                    },
                                    CatalogObjectID: sdk.String("consequatur"),
                                    CatalogVersion: sdk.Int64(469043),
                                    Name: sdk.String("Rachel Wuckert"),
                                    SourceModifierUID: sdk.String("itaque"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(210756),
                                        Currency: sdk.String("distinctio"),
                                    },
                                    UID: sdk.String("incidunt"),
                                },
                            },
                            SourceLineItemUID: sdk.String("perspiciatis"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(866789),
                                Currency: sdk.String("facilis"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(889994),
                                Currency: sdk.String("alias"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(945281),
                                Currency: sdk.String("fugit"),
                            },
                            UID: sdk.String("non"),
                            VariationName: sdk.String("harum"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(453494),
                                Currency: sdk.String("distinctio"),
                            },
                        },
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(852973),
                                        Currency: sdk.String("perspiciatis"),
                                    },
                                    DiscountUID: "cupiditate",
                                    UID: sdk.String("dolore"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(557250),
                                        Currency: sdk.String("assumenda"),
                                    },
                                    DiscountUID: "aliquid",
                                    UID: sdk.String("saepe"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(899970),
                                        Currency: sdk.String("fugiat"),
                                    },
                                    TaxUID: "eius",
                                    UID: sdk.String("voluptate"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(484489),
                                        Currency: sdk.String("voluptas"),
                                    },
                                    TaxUID: "deleniti",
                                    UID: sdk.String("eaque"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(969926),
                                        Currency: sdk.String("minus"),
                                    },
                                    TaxUID: "iure",
                                    UID: sdk.String("laborum"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(69825),
                                        Currency: sdk.String("iure"),
                                    },
                                    TaxUID: "deserunt",
                                    UID: sdk.String("blanditiis"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(174464),
                                Currency: sdk.String("necessitatibus"),
                            },
                            CatalogObjectID: sdk.String("nemo"),
                            CatalogVersion: sdk.Int64(877674),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(518075),
                                Currency: sdk.String("eos"),
                            },
                            ItemType: sdk.String("delectus"),
                            Name: sdk.String("Eugene Langosh Jr."),
                            Note: sdk.String("quaerat"),
                            Quantity: "aperiam",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(686946),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("iusto"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "debitis",
                                        Name: "Jonathan Dickens",
                                    },
                                    GenericUnit: sdk.String("dolorum"),
                                    LengthUnit: sdk.String("distinctio"),
                                    TimeUnit: sdk.String("incidunt"),
                                    Type: sdk.String("quaerat"),
                                    VolumeUnit: sdk.String("eligendi"),
                                    WeightUnit: sdk.String("expedita"),
                                },
                                Precision: sdk.Int64(103328),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(239677),
                                        Currency: sdk.String("nemo"),
                                    },
                                    CatalogObjectID: sdk.String("alias"),
                                    CatalogVersion: sdk.Int64(45772),
                                    Name: sdk.String("Boyd Gislason DDS"),
                                    SourceModifierUID: sdk.String("accusamus"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(336692),
                                        Currency: sdk.String("nesciunt"),
                                    },
                                    UID: sdk.String("necessitatibus"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(567320),
                                        Currency: sdk.String("illo"),
                                    },
                                    CatalogObjectID: sdk.String("tempora"),
                                    CatalogVersion: sdk.Int64(281381),
                                    Name: sdk.String("Wallace O'Keefe"),
                                    SourceModifierUID: sdk.String("deserunt"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(295726),
                                        Currency: sdk.String("nisi"),
                                    },
                                    UID: sdk.String("aperiam"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(627678),
                                        Currency: sdk.String("nulla"),
                                    },
                                    CatalogObjectID: sdk.String("pariatur"),
                                    CatalogVersion: sdk.Int64(969294),
                                    Name: sdk.String("Mr. Frankie Fritsch"),
                                    SourceModifierUID: sdk.String("adipisci"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(486003),
                                        Currency: sdk.String("possimus"),
                                    },
                                    UID: sdk.String("culpa"),
                                },
                            },
                            SourceLineItemUID: sdk.String("animi"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(611715),
                                Currency: sdk.String("sunt"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(535031),
                                Currency: sdk.String("consequuntur"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(675078),
                                Currency: sdk.String("modi"),
                            },
                            UID: sdk.String("natus"),
                            VariationName: sdk.String("fugiat"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(576841),
                                Currency: sdk.String("aliquid"),
                            },
                        },
                    },
                    ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(339654),
                                Currency: sdk.String("pariatur"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(225653),
                                Currency: sdk.String("eligendi"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(964370),
                                        Currency: sdk.String("reiciendis"),
                                    },
                                    TaxUID: "minus",
                                    UID: sdk.String("inventore"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(582521),
                                        Currency: sdk.String("blanditiis"),
                                    },
                                    TaxUID: "voluptates",
                                    UID: sdk.String("saepe"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(654263),
                                        Currency: sdk.String("modi"),
                                    },
                                    TaxUID: "quaerat",
                                    UID: sdk.String("quis"),
                                },
                            },
                            CalculationPhase: sdk.String("dolores"),
                            CatalogObjectID: sdk.String("dignissimos"),
                            CatalogVersion: sdk.Int64(604308),
                            Name: sdk.String("Bridget Schneider"),
                            Percentage: sdk.String("ut"),
                            SourceServiceChargeUID: sdk.String("ipsa"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(902001),
                                Currency: sdk.String("id"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(577971),
                                Currency: sdk.String("corrupti"),
                            },
                            UID: sdk.String("nam"),
                        },
                    },
                    ReturnTaxes: []shared.OrderReturnTax{
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(808133),
                                Currency: sdk.String("porro"),
                            },
                            CatalogObjectID: sdk.String("itaque"),
                            CatalogVersion: sdk.Int64(36019),
                            Name: sdk.String("Jennie Huel"),
                            Percentage: sdk.String("perferendis"),
                            Scope: sdk.String("repellendus"),
                            SourceTaxUID: sdk.String("ipsam"),
                            Type: sdk.String("aliquid"),
                            UID: sdk.String("repellendus"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(467338),
                                Currency: sdk.String("non"),
                            },
                            CatalogObjectID: sdk.String("distinctio"),
                            CatalogVersion: sdk.Int64(12181),
                            Name: sdk.String("Mrs. Dolores Hilll"),
                            Percentage: sdk.String("totam"),
                            Scope: sdk.String("fugiat"),
                            SourceTaxUID: sdk.String("impedit"),
                            Type: sdk.String("autem"),
                            UID: sdk.String("explicabo"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(407819),
                                Currency: sdk.String("doloribus"),
                            },
                            CatalogObjectID: sdk.String("maiores"),
                            CatalogVersion: sdk.Int64(467112),
                            Name: sdk.String("Pat Kertzmann"),
                            Percentage: sdk.String("odio"),
                            Scope: sdk.String("enim"),
                            SourceTaxUID: sdk.String("delectus"),
                            Type: sdk.String("nostrum"),
                            UID: sdk.String("harum"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(444384),
                                Currency: sdk.String("sit"),
                            },
                            CatalogObjectID: sdk.String("recusandae"),
                            CatalogVersion: sdk.Int64(231982),
                            Name: sdk.String("Herbert Ruecker"),
                            Percentage: sdk.String("impedit"),
                            Scope: sdk.String("vel"),
                            SourceTaxUID: sdk.String("dolorum"),
                            Type: sdk.String("cupiditate"),
                            UID: sdk.String("ab"),
                        },
                    },
                    RoundingAdjustment: &shared.OrderRoundingAdjustment{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(896921),
                            Currency: sdk.String("maxime"),
                        },
                        Name: sdk.String("Lois Hyatt"),
                        UID: sdk.String("at"),
                    },
                    SourceOrderID: sdk.String("aperiam"),
                    UID: sdk.String("alias"),
                },
            },
            Rewards: []shared.OrderReward{
                shared.OrderReward{
                    ID: "14ef45ce-a11a-4c53-abb6-587f340414c5",
                    RewardTierID: "cum",
                },
            },
            RoundingAdjustment: &shared.OrderRoundingAdjustment{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(576624),
                    Currency: sdk.String("est"),
                },
                Name: sdk.String("Pat Trantow Jr."),
                UID: sdk.String("mollitia"),
            },
            ServiceCharges: []shared.OrderServiceCharge{
                shared.OrderServiceCharge{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(592405),
                        Currency: sdk.String("doloribus"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(600939),
                        Currency: sdk.String("magni"),
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(661861),
                                Currency: sdk.String("earum"),
                            },
                            TaxUID: "architecto",
                            UID: sdk.String("nobis"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(55297),
                                Currency: sdk.String("dolores"),
                            },
                            TaxUID: "nemo",
                            UID: sdk.String("a"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(100596),
                                Currency: sdk.String("pariatur"),
                            },
                            TaxUID: "vitae",
                            UID: sdk.String("magnam"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(493974),
                                Currency: sdk.String("sunt"),
                            },
                            TaxUID: "voluptatum",
                            UID: sdk.String("maxime"),
                        },
                    },
                    CalculationPhase: sdk.String("nisi"),
                    CatalogObjectID: sdk.String("voluptatibus"),
                    CatalogVersion: sdk.Int64(665052),
                    Metadata: map[string]string{
                        "doloribus": "mollitia",
                    },
                    Name: sdk.String("Ms. William Runolfsdottir"),
                    Percentage: sdk.String("veniam"),
                    Taxable: sdk.Bool(false),
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(815584),
                        Currency: sdk.String("excepturi"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(349346),
                        Currency: sdk.String("quaerat"),
                    },
                    Type: sdk.String("in"),
                    UID: sdk.String("magni"),
                },
                shared.OrderServiceCharge{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(779477),
                        Currency: sdk.String("at"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(857705),
                        Currency: sdk.String("dicta"),
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(984344),
                                Currency: sdk.String("porro"),
                            },
                            TaxUID: "eius",
                            UID: sdk.String("nesciunt"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(737253),
                                Currency: sdk.String("in"),
                            },
                            TaxUID: "quae",
                            UID: sdk.String("distinctio"),
                        },
                    },
                    CalculationPhase: sdk.String("maxime"),
                    CatalogObjectID: sdk.String("fuga"),
                    CatalogVersion: sdk.Int64(515768),
                    Metadata: map[string]string{
                        "reiciendis": "est",
                        "dignissimos": "eaque",
                        "quo": "labore",
                    },
                    Name: sdk.String("Miss Edna Heidenreich"),
                    Percentage: sdk.String("at"),
                    Taxable: sdk.Bool(false),
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(860031),
                        Currency: sdk.String("beatae"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(896280),
                        Currency: sdk.String("harum"),
                    },
                    Type: sdk.String("deleniti"),
                    UID: sdk.String("maiores"),
                },
                shared.OrderServiceCharge{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(484395),
                        Currency: sdk.String("tenetur"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(463168),
                        Currency: sdk.String("nemo"),
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(298816),
                                Currency: sdk.String("hic"),
                            },
                            TaxUID: "aspernatur",
                            UID: sdk.String("ipsum"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(987445),
                                Currency: sdk.String("quasi"),
                            },
                            TaxUID: "cumque",
                            UID: sdk.String("eaque"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(625806),
                                Currency: sdk.String("corporis"),
                            },
                            TaxUID: "totam",
                            UID: sdk.String("commodi"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(806393),
                                Currency: sdk.String("non"),
                            },
                            TaxUID: "mollitia",
                            UID: sdk.String("repudiandae"),
                        },
                    },
                    CalculationPhase: sdk.String("odio"),
                    CatalogObjectID: sdk.String("temporibus"),
                    CatalogVersion: sdk.Int64(441654),
                    Metadata: map[string]string{
                        "voluptas": "odio",
                        "reiciendis": "officiis",
                        "voluptates": "tenetur",
                    },
                    Name: sdk.String("Gretchen Bergnaum"),
                    Percentage: sdk.String("pariatur"),
                    Taxable: sdk.Bool(false),
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(596189),
                        Currency: sdk.String("exercitationem"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(724140),
                        Currency: sdk.String("sunt"),
                    },
                    Type: sdk.String("pariatur"),
                    UID: sdk.String("soluta"),
                },
                shared.OrderServiceCharge{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(909717),
                        Currency: sdk.String("placeat"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(934820),
                        Currency: sdk.String("doloribus"),
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(480957),
                                Currency: sdk.String("quo"),
                            },
                            TaxUID: "non",
                            UID: sdk.String("tempore"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(65391),
                                Currency: sdk.String("quis"),
                            },
                            TaxUID: "commodi",
                            UID: sdk.String("itaque"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(577429),
                                Currency: sdk.String("odit"),
                            },
                            TaxUID: "ducimus",
                            UID: sdk.String("corrupti"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(162787),
                                Currency: sdk.String("voluptate"),
                            },
                            TaxUID: "ipsam",
                            UID: sdk.String("debitis"),
                        },
                    },
                    CalculationPhase: sdk.String("repudiandae"),
                    CatalogObjectID: sdk.String("officia"),
                    CatalogVersion: sdk.Int64(459294),
                    Metadata: map[string]string{
                        "laudantium": "quasi",
                        "nihil": "labore",
                    },
                    Name: sdk.String("Irma Beier"),
                    Percentage: sdk.String("tenetur"),
                    Taxable: sdk.Bool(false),
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(499998),
                        Currency: sdk.String("perspiciatis"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(584433),
                        Currency: sdk.String("facilis"),
                    },
                    Type: sdk.String("iusto"),
                    UID: sdk.String("perspiciatis"),
                },
            },
            Source: &shared.OrderSource{
                Name: sdk.String("Miss Tara Schneider DVM"),
            },
            State: sdk.String("mollitia"),
            Taxes: []shared.OrderLineItemTax{
                shared.OrderLineItemTax{
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(694844),
                        Currency: sdk.String("soluta"),
                    },
                    AutoApplied: sdk.Bool(false),
                    CatalogObjectID: sdk.String("eos"),
                    CatalogVersion: sdk.Int64(61375),
                    Metadata: map[string]string{
                        "labore": "consequatur",
                        "voluptates": "reprehenderit",
                        "quo": "incidunt",
                    },
                    Name: sdk.String("Sheldon Jacobs III"),
                    Percentage: sdk.String("eius"),
                    Scope: sdk.String("consequuntur"),
                    Type: sdk.String("iusto"),
                    UID: sdk.String("explicabo"),
                },
            },
            Tenders: []shared.Tender{
                shared.Tender{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(458132),
                                Currency: sdk.String("nobis"),
                            },
                            Description: sdk.String("voluptatem"),
                            LocationID: "ab",
                            ReceivableID: sdk.String("culpa"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(59507),
                                Currency: sdk.String("voluptate"),
                            },
                            Description: sdk.String("placeat"),
                            LocationID: "perferendis",
                            ReceivableID: sdk.String("rem"),
                        },
                    },
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(939214),
                        Currency: sdk.String("nulla"),
                    },
                    CardDetails: &shared.TenderCardDetails{
                        Card: &shared.Card{
                            BillingAddress: &shared.Address{
                                AddressLine1: sdk.String("sequi"),
                                AddressLine2: sdk.String("iste"),
                                AddressLine3: sdk.String("magni"),
                                AdministrativeDistrictLevel1: sdk.String("inventore"),
                                AdministrativeDistrictLevel2: sdk.String("eligendi"),
                                AdministrativeDistrictLevel3: sdk.String("dolores"),
                                Country: sdk.String("Guam"),
                                FirstName: sdk.String("Ima"),
                                LastName: sdk.String("Moore"),
                                Locality: sdk.String("ratione"),
                                Organization: sdk.String("consequatur"),
                                PostalCode: sdk.String("49062-6189"),
                                Sublocality: sdk.String("dolorum"),
                                Sublocality2: sdk.String("aliquam"),
                                Sublocality3: sdk.String("laboriosam"),
                            },
                            Bin: sdk.String("temporibus"),
                            CardBrand: sdk.String("adipisci"),
                            CardType: sdk.String("autem"),
                            CardholderName: sdk.String("ea"),
                            CustomerID: sdk.String("nulla"),
                            Enabled: sdk.Bool(false),
                            ExpMonth: sdk.Int64(966807),
                            ExpYear: sdk.Int64(662787),
                            Fingerprint: sdk.String("inventore"),
                            ID: sdk.String("011a091b-3ec8-4b53-862d-e1a9d14fe72e"),
                            Last4: sdk.String("ipsam"),
                            PrepaidType: sdk.String("sed"),
                            ReferenceID: sdk.String("illo"),
                            Version: sdk.Int64(990307),
                        },
                        EntryMethod: sdk.String("iste"),
                        Status: sdk.String("ipsa"),
                    },
                    CashDetails: &shared.TenderCashDetails{
                        BuyerTenderedMoney: &shared.Money{
                            Amount: sdk.Int64(242378),
                            Currency: sdk.String("ipsa"),
                        },
                        ChangeBackMoney: &shared.Money{
                            Amount: sdk.Int64(234262),
                            Currency: sdk.String("possimus"),
                        },
                    },
                    CreatedAt: sdk.String("asperiores"),
                    CustomerID: sdk.String("quo"),
                    ID: sdk.String("338397ff-fa6d-41d3-a090-fc157ac9fe19"),
                    LocationID: sdk.String("ex"),
                    Note: sdk.String("vitae"),
                    PaymentID: sdk.String("eligendi"),
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(879440),
                        Currency: sdk.String("perspiciatis"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(722768),
                        Currency: sdk.String("vero"),
                    },
                    TransactionID: sdk.String("aliquam"),
                    Type: "architecto",
                },
                shared.Tender{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(542513),
                                Currency: sdk.String("nisi"),
                            },
                            Description: sdk.String("omnis"),
                            LocationID: "nulla",
                            ReceivableID: sdk.String("facere"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(495597),
                                Currency: sdk.String("quibusdam"),
                            },
                            Description: sdk.String("omnis"),
                            LocationID: "molestiae",
                            ReceivableID: sdk.String("illo"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(604325),
                                Currency: sdk.String("repellendus"),
                            },
                            Description: sdk.String("consequatur"),
                            LocationID: "dignissimos",
                            ReceivableID: sdk.String("harum"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(138261),
                                Currency: sdk.String("aut"),
                            },
                            Description: sdk.String("eaque"),
                            LocationID: "deserunt",
                            ReceivableID: sdk.String("corporis"),
                        },
                    },
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(505896),
                        Currency: sdk.String("delectus"),
                    },
                    CardDetails: &shared.TenderCardDetails{
                        Card: &shared.Card{
                            BillingAddress: &shared.Address{
                                AddressLine1: sdk.String("a"),
                                AddressLine2: sdk.String("temporibus"),
                                AddressLine3: sdk.String("consequuntur"),
                                AdministrativeDistrictLevel1: sdk.String("iste"),
                                AdministrativeDistrictLevel2: sdk.String("suscipit"),
                                AdministrativeDistrictLevel3: sdk.String("iusto"),
                                Country: sdk.String("Sweden"),
                                FirstName: sdk.String("Vidal"),
                                LastName: sdk.String("Larkin"),
                                Locality: sdk.String("sapiente"),
                                Organization: sdk.String("facere"),
                                PostalCode: sdk.String("51658-3078"),
                                Sublocality: sdk.String("commodi"),
                                Sublocality2: sdk.String("eos"),
                                Sublocality3: sdk.String("perferendis"),
                            },
                            Bin: sdk.String("eligendi"),
                            CardBrand: sdk.String("facere"),
                            CardType: sdk.String("molestias"),
                            CardholderName: sdk.String("quisquam"),
                            CustomerID: sdk.String("veniam"),
                            Enabled: sdk.Bool(false),
                            ExpMonth: sdk.Int64(638064),
                            ExpYear: sdk.Int64(958510),
                            Fingerprint: sdk.String("possimus"),
                            ID: sdk.String("d04c3752-512b-4eae-9d87-ecc5fdcea8e7"),
                            Last4: sdk.String("laborum"),
                            PrepaidType: sdk.String("voluptatum"),
                            ReferenceID: sdk.String("blanditiis"),
                            Version: sdk.Int64(238122),
                        },
                        EntryMethod: sdk.String("et"),
                        Status: sdk.String("et"),
                    },
                    CashDetails: &shared.TenderCashDetails{
                        BuyerTenderedMoney: &shared.Money{
                            Amount: sdk.Int64(415030),
                            Currency: sdk.String("laboriosam"),
                        },
                        ChangeBackMoney: &shared.Money{
                            Amount: sdk.Int64(187267),
                            Currency: sdk.String("porro"),
                        },
                    },
                    CreatedAt: sdk.String("at"),
                    CustomerID: sdk.String("fuga"),
                    ID: sdk.String("6d77c1d8-6066-4237-9422-7866db8a749e"),
                    LocationID: sdk.String("consectetur"),
                    Note: sdk.String("provident"),
                    PaymentID: sdk.String("totam"),
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(277677),
                        Currency: sdk.String("exercitationem"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(98825),
                        Currency: sdk.String("beatae"),
                    },
                    TransactionID: sdk.String("impedit"),
                    Type: "minus",
                },
            },
            TotalDiscountMoney: &shared.Money{
                Amount: sdk.Int64(446611),
                Currency: sdk.String("corporis"),
            },
            TotalMoney: &shared.Money{
                Amount: sdk.Int64(929212),
                Currency: sdk.String("incidunt"),
            },
            TotalServiceChargeMoney: &shared.Money{
                Amount: sdk.Int64(991181),
                Currency: sdk.String("alias"),
            },
            TotalTaxMoney: &shared.Money{
                Amount: sdk.Int64(755508),
                Currency: sdk.String("accusantium"),
            },
            TotalTipMoney: &shared.Money{
                Amount: sdk.Int64(30675),
                Currency: sdk.String("non"),
            },
            UpdatedAt: sdk.String("soluta"),
            Version: sdk.Int64(329530),
        },
        ProposedRewards: []shared.OrderReward{
            shared.OrderReward{
                ID: "b758cc94-562f-4006-9685-fcd1a173d84b",
                RewardTierID: "cum",
            },
            shared.OrderReward{
                ID: "e24f2983-4afb-4073-9cb6-285d4a29aaa1",
                RewardTierID: "debitis",
            },
            shared.OrderReward{
                ID: "169156f7-d2ee-4209-905b-f03a93e94480",
                RewardTierID: "cumque",
            },
        },
    }, operations.CalculateOrderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateOrderResponse != nil {
        // handle response
    }
}
```

## CreateOrder

Creates a new [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that can include information about products for
purchase and settings to apply to the purchase.

To pay for a created order, see 
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

You can modify open orders using the [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.CreateOrder(ctx, shared.CreateOrderRequest{
        IdempotencyKey: sdk.String("fuga"),
        Order: &shared.Order{
            ClosedAt: sdk.String("ratione"),
            CreatedAt: sdk.String("in"),
            CustomerID: sdk.String("voluptatibus"),
            Discounts: []shared.OrderLineItemDiscount{
                shared.OrderLineItemDiscount{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(69569),
                        Currency: sdk.String("ipsa"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(495789),
                        Currency: sdk.String("voluptatum"),
                    },
                    CatalogObjectID: sdk.String("natus"),
                    CatalogVersion: sdk.Int64(54266),
                    Metadata: map[string]string{
                        "fugit": "deserunt",
                    },
                    Name: sdk.String("Allen Fay IV"),
                    Percentage: sdk.String("odit"),
                    PricingRuleID: sdk.String("saepe"),
                    RewardIds: []string{
                        "assumenda",
                    },
                    Scope: sdk.String("quibusdam"),
                    Type: sdk.String("nihil"),
                    UID: sdk.String("provident"),
                },
                shared.OrderLineItemDiscount{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(926785),
                        Currency: sdk.String("minus"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(446967),
                        Currency: sdk.String("numquam"),
                    },
                    CatalogObjectID: sdk.String("distinctio"),
                    CatalogVersion: sdk.Int64(626341),
                    Metadata: map[string]string{
                        "necessitatibus": "corrupti",
                        "deleniti": "possimus",
                    },
                    Name: sdk.String("Rudolph Erdman"),
                    Percentage: sdk.String("facere"),
                    PricingRuleID: sdk.String("inventore"),
                    RewardIds: []string{
                        "optio",
                        "maxime",
                        "nesciunt",
                        "labore",
                    },
                    Scope: sdk.String("dicta"),
                    Type: sdk.String("quisquam"),
                    UID: sdk.String("quas"),
                },
                shared.OrderLineItemDiscount{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(420355),
                        Currency: sdk.String("enim"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(495843),
                        Currency: sdk.String("dolor"),
                    },
                    CatalogObjectID: sdk.String("magnam"),
                    CatalogVersion: sdk.Int64(439123),
                    Metadata: map[string]string{
                        "doloribus": "doloremque",
                        "culpa": "voluptate",
                    },
                    Name: sdk.String("Shirley Yost"),
                    Percentage: sdk.String("deserunt"),
                    PricingRuleID: sdk.String("distinctio"),
                    RewardIds: []string{
                        "eius",
                        "illo",
                    },
                    Scope: sdk.String("impedit"),
                    Type: sdk.String("ipsum"),
                    UID: sdk.String("deserunt"),
                },
            },
            Fulfillments: []shared.OrderFulfillment{
                shared.OrderFulfillment{
                    Metadata: map[string]string{
                        "saepe": "esse",
                        "commodi": "velit",
                        "perspiciatis": "omnis",
                    },
                    PickupDetails: &shared.OrderFulfillmentPickupDetails{
                        AcceptedAt: sdk.String("minima"),
                        AutoCompleteDuration: sdk.String("vero"),
                        CancelReason: sdk.String("rem"),
                        CanceledAt: sdk.String("voluptatem"),
                        CurbsidePickupDetails: &shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails{
                            BuyerArrivedAt: sdk.String("corrupti"),
                            CurbsideDetails: sdk.String("tempore"),
                        },
                        ExpiredAt: sdk.String("nam"),
                        ExpiresAt: sdk.String("accusamus"),
                        IsCurbsidePickup: sdk.Bool(false),
                        Note: sdk.String("odio"),
                        PickedUpAt: sdk.String("natus"),
                        PickupAt: sdk.String("dolore"),
                        PickupWindowDuration: sdk.String("eius"),
                        PlacedAt: sdk.String("minima"),
                        PrepTimeDuration: sdk.String("exercitationem"),
                        ReadyAt: sdk.String("recusandae"),
                        Recipient: &shared.OrderFulfillmentRecipient{
                            Address: &shared.Address{
                                AddressLine1: sdk.String("nobis"),
                                AddressLine2: sdk.String("quo"),
                                AddressLine3: sdk.String("nemo"),
                                AdministrativeDistrictLevel1: sdk.String("minima"),
                                AdministrativeDistrictLevel2: sdk.String("consequatur"),
                                AdministrativeDistrictLevel3: sdk.String("est"),
                                Country: sdk.String("Bolivia"),
                                FirstName: sdk.String("Odie"),
                                LastName: sdk.String("Graham"),
                                Locality: sdk.String("qui"),
                                Organization: sdk.String("nisi"),
                                PostalCode: sdk.String("35852-4498"),
                                Sublocality: sdk.String("maxime"),
                                Sublocality2: sdk.String("minus"),
                                Sublocality3: sdk.String("architecto"),
                            },
                            CustomerID: sdk.String("neque"),
                            DisplayName: sdk.String("veniam"),
                            EmailAddress: sdk.String("nemo"),
                            PhoneNumber: sdk.String("voluptatum"),
                        },
                        RejectedAt: sdk.String("quia"),
                        ScheduleType: sdk.String("quisquam"),
                    },
                    ShipmentDetails: &shared.OrderFulfillmentShipmentDetails{
                        CancelReason: sdk.String("et"),
                        CanceledAt: sdk.String("expedita"),
                        Carrier: sdk.String("quos"),
                        ExpectedShippedAt: sdk.String("veniam"),
                        FailedAt: sdk.String("ad"),
                        FailureReason: sdk.String("accusamus"),
                        InProgressAt: sdk.String("laudantium"),
                        PackagedAt: sdk.String("atque"),
                        PlacedAt: sdk.String("cupiditate"),
                        Recipient: &shared.OrderFulfillmentRecipient{
                            Address: &shared.Address{
                                AddressLine1: sdk.String("fugiat"),
                                AddressLine2: sdk.String("omnis"),
                                AddressLine3: sdk.String("officiis"),
                                AdministrativeDistrictLevel1: sdk.String("hic"),
                                AdministrativeDistrictLevel2: sdk.String("error"),
                                AdministrativeDistrictLevel3: sdk.String("consectetur"),
                                Country: sdk.String("Cambodia"),
                                FirstName: sdk.String("Stan"),
                                LastName: sdk.String("Mohr"),
                                Locality: sdk.String("eaque"),
                                Organization: sdk.String("perferendis"),
                                PostalCode: sdk.String("61268"),
                                Sublocality: sdk.String("voluptatum"),
                                Sublocality2: sdk.String("veritatis"),
                                Sublocality3: sdk.String("consequuntur"),
                            },
                            CustomerID: sdk.String("dolore"),
                            DisplayName: sdk.String("fugit"),
                            EmailAddress: sdk.String("alias"),
                            PhoneNumber: sdk.String("voluptatum"),
                        },
                        ShippedAt: sdk.String("voluptates"),
                        ShippingNote: sdk.String("sapiente"),
                        ShippingType: sdk.String("at"),
                        TrackingNumber: sdk.String("qui"),
                        TrackingURL: sdk.String("consectetur"),
                    },
                    State: sdk.String("eius"),
                    Type: sdk.String("dicta"),
                    UID: sdk.String("dicta"),
                },
            },
            ID: sdk.String("898e7387-9efb-4e8b-aeba-bb794536e903"),
            LineItems: []shared.OrderLineItem{
                shared.OrderLineItem{
                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(690050),
                                Currency: sdk.String("quidem"),
                            },
                            DiscountUID: "unde",
                            UID: sdk.String("odio"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(238600),
                                Currency: sdk.String("architecto"),
                            },
                            TaxUID: "iure",
                            UID: sdk.String("odit"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(32260),
                                Currency: sdk.String("quidem"),
                            },
                            TaxUID: "molestiae",
                            UID: sdk.String("odio"),
                        },
                    },
                    BasePriceMoney: &shared.Money{
                        Amount: sdk.Int64(635370),
                        Currency: sdk.String("quis"),
                    },
                    CatalogObjectID: sdk.String("mollitia"),
                    CatalogVersion: sdk.Int64(374793),
                    GrossSalesMoney: &shared.Money{
                        Amount: sdk.Int64(211009),
                        Currency: sdk.String("eum"),
                    },
                    ItemType: sdk.String("ipsam"),
                    Metadata: map[string]string{
                        "odio": "unde",
                        "sapiente": "ab",
                        "ipsam": "quia",
                    },
                    Modifiers: []shared.OrderLineItemModifier{
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(70555),
                                Currency: sdk.String("repellat"),
                            },
                            CatalogObjectID: sdk.String("accusantium"),
                            CatalogVersion: sdk.Int64(89972),
                            Name: sdk.String("John Stark"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(85354),
                                Currency: sdk.String("reiciendis"),
                            },
                            UID: sdk.String("debitis"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(863598),
                                Currency: sdk.String("blanditiis"),
                            },
                            CatalogObjectID: sdk.String("nulla"),
                            CatalogVersion: sdk.Int64(794094),
                            Name: sdk.String("Silvia Wilkinson"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(312368),
                                Currency: sdk.String("ullam"),
                            },
                            UID: sdk.String("velit"),
                        },
                    },
                    Name: sdk.String("Freddie Abernathy"),
                    Note: sdk.String("necessitatibus"),
                    PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                        BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("reprehenderit"),
                                DiscountUID: sdk.String("inventore"),
                                UID: sdk.String("asperiores"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("nulla"),
                                DiscountUID: sdk.String("soluta"),
                                UID: sdk.String("ut"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("at"),
                                DiscountUID: sdk.String("voluptas"),
                                UID: sdk.String("perspiciatis"),
                            },
                        },
                        BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("tempore"),
                                TaxUID: sdk.String("facere"),
                                UID: sdk.String("at"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("perspiciatis"),
                                TaxUID: sdk.String("quisquam"),
                                UID: sdk.String("molestias"),
                            },
                        },
                    },
                    Quantity: "corrupti",
                    QuantityUnit: &shared.OrderQuantityUnit{
                        CatalogVersion: sdk.Int64(362377),
                        MeasurementUnit: &shared.MeasurementUnit{
                            AreaUnit: sdk.String("repudiandae"),
                            CustomUnit: &shared.MeasurementUnitCustom{
                                Abbreviation: "incidunt",
                                Name: "Marlene Flatley",
                            },
                            GenericUnit: sdk.String("quis"),
                            LengthUnit: sdk.String("pariatur"),
                            TimeUnit: sdk.String("reprehenderit"),
                            Type: sdk.String("odit"),
                            VolumeUnit: sdk.String("quibusdam"),
                            WeightUnit: sdk.String("cupiditate"),
                        },
                        Precision: sdk.Int64(930511),
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(859600),
                        Currency: sdk.String("repellendus"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(449413),
                        Currency: sdk.String("rem"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(343200),
                        Currency: sdk.String("expedita"),
                    },
                    UID: sdk.String("vero"),
                    VariationName: sdk.String("quis"),
                    VariationTotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(934299),
                        Currency: sdk.String("esse"),
                    },
                },
                shared.OrderLineItem{
                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(940490),
                                Currency: sdk.String("accusamus"),
                            },
                            DiscountUID: "ullam",
                            UID: sdk.String("minima"),
                        },
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(172985),
                                Currency: sdk.String("occaecati"),
                            },
                            DiscountUID: "nihil",
                            UID: sdk.String("tempore"),
                        },
                        shared.OrderLineItemAppliedDiscount{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(652592),
                                Currency: sdk.String("laboriosam"),
                            },
                            DiscountUID: "explicabo",
                            UID: sdk.String("laudantium"),
                        },
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(999815),
                                Currency: sdk.String("aliquam"),
                            },
                            TaxUID: "modi",
                            UID: sdk.String("eveniet"),
                        },
                    },
                    BasePriceMoney: &shared.Money{
                        Amount: sdk.Int64(210926),
                        Currency: sdk.String("laborum"),
                    },
                    CatalogObjectID: sdk.String("eos"),
                    CatalogVersion: sdk.Int64(221934),
                    GrossSalesMoney: &shared.Money{
                        Amount: sdk.Int64(234935),
                        Currency: sdk.String("unde"),
                    },
                    ItemType: sdk.String("eius"),
                    Metadata: map[string]string{
                        "eum": "rem",
                        "eligendi": "optio",
                        "deleniti": "sit",
                    },
                    Modifiers: []shared.OrderLineItemModifier{
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(191117),
                                Currency: sdk.String("alias"),
                            },
                            CatalogObjectID: sdk.String("delectus"),
                            CatalogVersion: sdk.Int64(940137),
                            Name: sdk.String("Jacqueline Blick"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(836803),
                                Currency: sdk.String("alias"),
                            },
                            UID: sdk.String("deserunt"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(579414),
                                Currency: sdk.String("dicta"),
                            },
                            CatalogObjectID: sdk.String("repellat"),
                            CatalogVersion: sdk.Int64(913780),
                            Name: sdk.String("Clint Monahan"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(365498),
                                Currency: sdk.String("adipisci"),
                            },
                            UID: sdk.String("tempore"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(508157),
                                Currency: sdk.String("excepturi"),
                            },
                            CatalogObjectID: sdk.String("necessitatibus"),
                            CatalogVersion: sdk.Int64(17533),
                            Name: sdk.String("Sharon Marks"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(408748),
                                Currency: sdk.String("error"),
                            },
                            UID: sdk.String("explicabo"),
                        },
                        shared.OrderLineItemModifier{
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(839958),
                                Currency: sdk.String("debitis"),
                            },
                            CatalogObjectID: sdk.String("in"),
                            CatalogVersion: sdk.Int64(724975),
                            Name: sdk.String("Brittany Hodkiewicz"),
                            TotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(50259),
                                Currency: sdk.String("veritatis"),
                            },
                            UID: sdk.String("officia"),
                        },
                    },
                    Name: sdk.String("Isabel Muller"),
                    Note: sdk.String("deserunt"),
                    PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                        BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("in"),
                                DiscountUID: sdk.String("harum"),
                                UID: sdk.String("vitae"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("fuga"),
                                DiscountUID: sdk.String("ipsam"),
                                UID: sdk.String("harum"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("omnis"),
                                DiscountUID: sdk.String("alias"),
                                UID: sdk.String("rem"),
                            },
                            shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                DiscountCatalogObjectID: sdk.String("placeat"),
                                DiscountUID: sdk.String("dolore"),
                                UID: sdk.String("repudiandae"),
                            },
                        },
                        BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                            shared.OrderLineItemPricingBlocklistsBlockedTax{
                                TaxCatalogObjectID: sdk.String("perferendis"),
                                TaxUID: sdk.String("aliquam"),
                                UID: sdk.String("perspiciatis"),
                            },
                        },
                    },
                    Quantity: "quae",
                    QuantityUnit: &shared.OrderQuantityUnit{
                        CatalogVersion: sdk.Int64(676576),
                        MeasurementUnit: &shared.MeasurementUnit{
                            AreaUnit: sdk.String("fuga"),
                            CustomUnit: &shared.MeasurementUnitCustom{
                                Abbreviation: "sequi",
                                Name: "Lora Gutmann",
                            },
                            GenericUnit: sdk.String("dolor"),
                            LengthUnit: sdk.String("natus"),
                            TimeUnit: sdk.String("reiciendis"),
                            Type: sdk.String("consequatur"),
                            VolumeUnit: sdk.String("ipsum"),
                            WeightUnit: sdk.String("quidem"),
                        },
                        Precision: sdk.Int64(678588),
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(695076),
                        Currency: sdk.String("molestiae"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(441001),
                        Currency: sdk.String("nam"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(580771),
                        Currency: sdk.String("quasi"),
                    },
                    UID: sdk.String("blanditiis"),
                    VariationName: sdk.String("a"),
                    VariationTotalPriceMoney: &shared.Money{
                        Amount: sdk.Int64(14866),
                        Currency: sdk.String("neque"),
                    },
                },
            },
            LocationID: "dicta",
            Metadata: map[string]string{
                "iste": "quos",
            },
            NetAmounts: &shared.OrderMoneyAmounts{
                DiscountMoney: &shared.Money{
                    Amount: sdk.Int64(280935),
                    Currency: sdk.String("exercitationem"),
                },
                ServiceChargeMoney: &shared.Money{
                    Amount: sdk.Int64(22374),
                    Currency: sdk.String("reprehenderit"),
                },
                TaxMoney: &shared.Money{
                    Amount: sdk.Int64(889461),
                    Currency: sdk.String("accusantium"),
                },
                TipMoney: &shared.Money{
                    Amount: sdk.Int64(915968),
                    Currency: sdk.String("consectetur"),
                },
                TotalMoney: &shared.Money{
                    Amount: sdk.Int64(577369),
                    Currency: sdk.String("impedit"),
                },
            },
            PricingOptions: &shared.OrderPricingOptions{
                AutoApplyDiscounts: sdk.Bool(false),
                AutoApplyTaxes: sdk.Bool(false),
            },
            ReferenceID: sdk.String("quam"),
            Refunds: []shared.Refund{
                shared.Refund{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(233477),
                                Currency: sdk.String("itaque"),
                            },
                            Description: sdk.String("impedit"),
                            LocationID: "quidem",
                            ReceivableID: sdk.String("voluptatem"),
                        },
                    },
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(378232),
                        Currency: sdk.String("aperiam"),
                    },
                    CreatedAt: sdk.String("numquam"),
                    ID: "652e23a3-d6c6-457e-9de8-f7f002d1986a",
                    LocationID: "officia",
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(618782),
                        Currency: sdk.String("excepturi"),
                    },
                    Reason: "at",
                    Status: "neque",
                    TenderID: "animi",
                    TransactionID: "veritatis",
                },
                shared.Refund{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(192236),
                                Currency: sdk.String("odit"),
                            },
                            Description: sdk.String("amet"),
                            LocationID: "dolores",
                            ReceivableID: sdk.String("provident"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(918413),
                                Currency: sdk.String("ut"),
                            },
                            Description: sdk.String("ullam"),
                            LocationID: "rem",
                            ReceivableID: sdk.String("ipsum"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(451416),
                                Currency: sdk.String("eveniet"),
                            },
                            Description: sdk.String("atque"),
                            LocationID: "reiciendis",
                            ReceivableID: sdk.String("qui"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(637770),
                                Currency: sdk.String("fugiat"),
                            },
                            Description: sdk.String("laboriosam"),
                            LocationID: "tempore",
                            ReceivableID: sdk.String("harum"),
                        },
                    },
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(77166),
                        Currency: sdk.String("aut"),
                    },
                    CreatedAt: sdk.String("debitis"),
                    ID: "255fdc48-0d6e-4330-8675-cbf186856a7e",
                    LocationID: "deleniti",
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(142989),
                        Currency: sdk.String("eligendi"),
                    },
                    Reason: "facere",
                    Status: "doloribus",
                    TenderID: "omnis",
                    TransactionID: "assumenda",
                },
                shared.Refund{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(951156),
                                Currency: sdk.String("cumque"),
                            },
                            Description: sdk.String("fugit"),
                            LocationID: "deleniti",
                            ReceivableID: sdk.String("magni"),
                        },
                    },
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(799929),
                        Currency: sdk.String("aliquid"),
                    },
                    CreatedAt: sdk.String("ea"),
                    ID: "6af3c3f5-589b-4ea5-9264-e41e2ca84822",
                    LocationID: "officiis",
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(331099),
                        Currency: sdk.String("ab"),
                    },
                    Reason: "neque",
                    Status: "asperiores",
                    TenderID: "autem",
                    TransactionID: "nulla",
                },
                shared.Refund{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(868258),
                                Currency: sdk.String("magni"),
                            },
                            Description: sdk.String("similique"),
                            LocationID: "possimus",
                            ReceivableID: sdk.String("dolor"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(475342),
                                Currency: sdk.String("quod"),
                            },
                            Description: sdk.String("dolorem"),
                            LocationID: "eaque",
                            ReceivableID: sdk.String("error"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(582115),
                                Currency: sdk.String("voluptatem"),
                            },
                            Description: sdk.String("iure"),
                            LocationID: "esse",
                            ReceivableID: sdk.String("nobis"),
                        },
                    },
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(64001),
                        Currency: sdk.String("sit"),
                    },
                    CreatedAt: sdk.String("rerum"),
                    ID: "68792163-e67d-4488-a054-3c0a3049c3cf",
                    LocationID: "voluptas",
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(783687),
                        Currency: sdk.String("sit"),
                    },
                    Reason: "explicabo",
                    Status: "nihil",
                    TenderID: "laboriosam",
                    TransactionID: "necessitatibus",
                },
            },
            ReturnAmounts: &shared.OrderMoneyAmounts{
                DiscountMoney: &shared.Money{
                    Amount: sdk.Int64(489970),
                    Currency: sdk.String("libero"),
                },
                ServiceChargeMoney: &shared.Money{
                    Amount: sdk.Int64(182371),
                    Currency: sdk.String("illo"),
                },
                TaxMoney: &shared.Money{
                    Amount: sdk.Int64(704284),
                    Currency: sdk.String("dolorum"),
                },
                TipMoney: &shared.Money{
                    Amount: sdk.Int64(841379),
                    Currency: sdk.String("provident"),
                },
                TotalMoney: &shared.Money{
                    Amount: sdk.Int64(4464),
                    Currency: sdk.String("illum"),
                },
            },
            Returns: []shared.OrderReturn{
                shared.OrderReturn{
                    ReturnAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(471925),
                            Currency: sdk.String("ut"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(243727),
                            Currency: sdk.String("doloribus"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(857388),
                            Currency: sdk.String("ex"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(764953),
                            Currency: sdk.String("magni"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(658213),
                            Currency: sdk.String("sunt"),
                        },
                    },
                    ReturnDiscounts: []shared.OrderReturnDiscount{
                        shared.OrderReturnDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(901357),
                                Currency: sdk.String("ea"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(810244),
                                Currency: sdk.String("odit"),
                            },
                            CatalogObjectID: sdk.String("natus"),
                            CatalogVersion: sdk.Int64(461676),
                            Name: sdk.String("Elias Sanford"),
                            Percentage: sdk.String("commodi"),
                            Scope: sdk.String("officia"),
                            SourceDiscountUID: sdk.String("veniam"),
                            Type: sdk.String("cum"),
                            UID: sdk.String("voluptatem"),
                        },
                    },
                    ReturnLineItems: []shared.OrderReturnLineItem{
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(168732),
                                        Currency: sdk.String("iure"),
                                    },
                                    DiscountUID: "doloribus",
                                    UID: sdk.String("quod"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(257142),
                                        Currency: sdk.String("dignissimos"),
                                    },
                                    TaxUID: "natus",
                                    UID: sdk.String("natus"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(394321),
                                        Currency: sdk.String("optio"),
                                    },
                                    TaxUID: "sint",
                                    UID: sdk.String("esse"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(445255),
                                        Currency: sdk.String("cum"),
                                    },
                                    TaxUID: "soluta",
                                    UID: sdk.String("impedit"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(355021),
                                        Currency: sdk.String("esse"),
                                    },
                                    TaxUID: "sapiente",
                                    UID: sdk.String("ratione"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(507062),
                                Currency: sdk.String("perspiciatis"),
                            },
                            CatalogObjectID: sdk.String("eos"),
                            CatalogVersion: sdk.Int64(554289),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(665056),
                                Currency: sdk.String("blanditiis"),
                            },
                            ItemType: sdk.String("laboriosam"),
                            Name: sdk.String("Shirley Sanford"),
                            Note: sdk.String("illum"),
                            Quantity: "eum",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(483363),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("facere"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "ea",
                                        Name: "Alexis Goldner",
                                    },
                                    GenericUnit: sdk.String("exercitationem"),
                                    LengthUnit: sdk.String("laboriosam"),
                                    TimeUnit: sdk.String("quos"),
                                    Type: sdk.String("aliquam"),
                                    VolumeUnit: sdk.String("vel"),
                                    WeightUnit: sdk.String("numquam"),
                                },
                                Precision: sdk.Int64(321921),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(605544),
                                        Currency: sdk.String("quo"),
                                    },
                                    CatalogObjectID: sdk.String("maiores"),
                                    CatalogVersion: sdk.Int64(805326),
                                    Name: sdk.String("Alexandra Bechtelar"),
                                    SourceModifierUID: sdk.String("eaque"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(222984),
                                        Currency: sdk.String("maiores"),
                                    },
                                    UID: sdk.String("quis"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(426461),
                                        Currency: sdk.String("praesentium"),
                                    },
                                    CatalogObjectID: sdk.String("sequi"),
                                    CatalogVersion: sdk.Int64(73133),
                                    Name: sdk.String("Henry Shanahan"),
                                    SourceModifierUID: sdk.String("at"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(523154),
                                        Currency: sdk.String("quam"),
                                    },
                                    UID: sdk.String("nobis"),
                                },
                            },
                            SourceLineItemUID: sdk.String("qui"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(519464),
                                Currency: sdk.String("recusandae"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(539450),
                                Currency: sdk.String("deserunt"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(951501),
                                Currency: sdk.String("culpa"),
                            },
                            UID: sdk.String("cum"),
                            VariationName: sdk.String("quod"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(566778),
                                Currency: sdk.String("laudantium"),
                            },
                        },
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(897561),
                                        Currency: sdk.String("consequuntur"),
                                    },
                                    DiscountUID: "aliquam",
                                    UID: sdk.String("dicta"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(936102),
                                        Currency: sdk.String("magnam"),
                                    },
                                    DiscountUID: "dolorem",
                                    UID: sdk.String("quidem"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(191552),
                                        Currency: sdk.String("ut"),
                                    },
                                    TaxUID: "explicabo",
                                    UID: sdk.String("dolore"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(77757),
                                Currency: sdk.String("molestiae"),
                            },
                            CatalogObjectID: sdk.String("illum"),
                            CatalogVersion: sdk.Int64(110398),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(241190),
                                Currency: sdk.String("debitis"),
                            },
                            ItemType: sdk.String("nesciunt"),
                            Name: sdk.String("Ramon Champlin"),
                            Note: sdk.String("cupiditate"),
                            Quantity: "culpa",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(923658),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("labore"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "fuga",
                                        Name: "Daryl O'Keefe",
                                    },
                                    GenericUnit: sdk.String("id"),
                                    LengthUnit: sdk.String("provident"),
                                    TimeUnit: sdk.String("cumque"),
                                    Type: sdk.String("dolore"),
                                    VolumeUnit: sdk.String("sint"),
                                    WeightUnit: sdk.String("quia"),
                                },
                                Precision: sdk.Int64(807291),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(900058),
                                        Currency: sdk.String("deleniti"),
                                    },
                                    CatalogObjectID: sdk.String("quidem"),
                                    CatalogVersion: sdk.Int64(648667),
                                    Name: sdk.String("Dianna Goyette"),
                                    SourceModifierUID: sdk.String("magnam"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(631429),
                                        Currency: sdk.String("veniam"),
                                    },
                                    UID: sdk.String("sit"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(555365),
                                        Currency: sdk.String("soluta"),
                                    },
                                    CatalogObjectID: sdk.String("quibusdam"),
                                    CatalogVersion: sdk.Int64(221874),
                                    Name: sdk.String("Jose Rowe"),
                                    SourceModifierUID: sdk.String("animi"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(644765),
                                        Currency: sdk.String("rem"),
                                    },
                                    UID: sdk.String("fugiat"),
                                },
                            },
                            SourceLineItemUID: sdk.String("illum"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(439014),
                                Currency: sdk.String("beatae"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(697543),
                                Currency: sdk.String("assumenda"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(833947),
                                Currency: sdk.String("mollitia"),
                            },
                            UID: sdk.String("mollitia"),
                            VariationName: sdk.String("ipsum"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(62349),
                                Currency: sdk.String("cum"),
                            },
                        },
                        shared.OrderReturnLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(741334),
                                        Currency: sdk.String("perspiciatis"),
                                    },
                                    DiscountUID: "beatae",
                                    UID: sdk.String("labore"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(266447),
                                        Currency: sdk.String("omnis"),
                                    },
                                    DiscountUID: "officia",
                                    UID: sdk.String("saepe"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(604351),
                                        Currency: sdk.String("cumque"),
                                    },
                                    TaxUID: "perferendis",
                                    UID: sdk.String("deleniti"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(516774),
                                        Currency: sdk.String("fugiat"),
                                    },
                                    TaxUID: "labore",
                                    UID: sdk.String("vitae"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(536943),
                                Currency: sdk.String("tempore"),
                            },
                            CatalogObjectID: sdk.String("libero"),
                            CatalogVersion: sdk.Int64(464640),
                            GrossReturnMoney: &shared.Money{
                                Amount: sdk.Int64(120644),
                                Currency: sdk.String("totam"),
                            },
                            ItemType: sdk.String("accusantium"),
                            Name: sdk.String("Winifred Glover"),
                            Note: sdk.String("pariatur"),
                            Quantity: "ipsam",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(271648),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("adipisci"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "sint",
                                        Name: "Beatrice Willms",
                                    },
                                    GenericUnit: sdk.String("nihil"),
                                    LengthUnit: sdk.String("dolorum"),
                                    TimeUnit: sdk.String("quisquam"),
                                    Type: sdk.String("voluptas"),
                                    VolumeUnit: sdk.String("impedit"),
                                    WeightUnit: sdk.String("excepturi"),
                                },
                                Precision: sdk.Int64(722308),
                            },
                            ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(887303),
                                        Currency: sdk.String("iste"),
                                    },
                                    CatalogObjectID: sdk.String("velit"),
                                    CatalogVersion: sdk.Int64(722729),
                                    Name: sdk.String("Alberta Dickinson"),
                                    SourceModifierUID: sdk.String("fugit"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(226368),
                                        Currency: sdk.String("quasi"),
                                    },
                                    UID: sdk.String("doloremque"),
                                },
                                shared.OrderReturnLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(338899),
                                        Currency: sdk.String("recusandae"),
                                    },
                                    CatalogObjectID: sdk.String("iusto"),
                                    CatalogVersion: sdk.Int64(773755),
                                    Name: sdk.String("Michele Rutherford"),
                                    SourceModifierUID: sdk.String("alias"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(913579),
                                        Currency: sdk.String("optio"),
                                    },
                                    UID: sdk.String("libero"),
                                },
                            },
                            SourceLineItemUID: sdk.String("voluptatum"),
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(107145),
                                Currency: sdk.String("explicabo"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(664995),
                                Currency: sdk.String("laboriosam"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(412059),
                                Currency: sdk.String("beatae"),
                            },
                            UID: sdk.String("eius"),
                            VariationName: sdk.String("atque"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(601952),
                                Currency: sdk.String("ut"),
                            },
                        },
                    },
                    ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(684224),
                                Currency: sdk.String("voluptatum"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(927316),
                                Currency: sdk.String("sint"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(529067),
                                        Currency: sdk.String("veniam"),
                                    },
                                    TaxUID: "consequatur",
                                    UID: sdk.String("nihil"),
                                },
                            },
                            CalculationPhase: sdk.String("exercitationem"),
                            CatalogObjectID: sdk.String("nam"),
                            CatalogVersion: sdk.Int64(790463),
                            Name: sdk.String("Yvonne Ebert"),
                            Percentage: sdk.String("exercitationem"),
                            SourceServiceChargeUID: sdk.String("ratione"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(199238),
                                Currency: sdk.String("tempora"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(199753),
                                Currency: sdk.String("asperiores"),
                            },
                            UID: sdk.String("nobis"),
                        },
                        shared.OrderReturnServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(41458),
                                Currency: sdk.String("similique"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(268013),
                                Currency: sdk.String("itaque"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(421005),
                                        Currency: sdk.String("earum"),
                                    },
                                    TaxUID: "culpa",
                                    UID: sdk.String("tempora"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(468540),
                                        Currency: sdk.String("exercitationem"),
                                    },
                                    TaxUID: "molestiae",
                                    UID: sdk.String("praesentium"),
                                },
                            },
                            CalculationPhase: sdk.String("fugiat"),
                            CatalogObjectID: sdk.String("ab"),
                            CatalogVersion: sdk.Int64(454303),
                            Name: sdk.String("Patti Denesik"),
                            Percentage: sdk.String("veritatis"),
                            SourceServiceChargeUID: sdk.String("totam"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(67982),
                                Currency: sdk.String("deleniti"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(982315),
                                Currency: sdk.String("optio"),
                            },
                            UID: sdk.String("aliquid"),
                        },
                    },
                    ReturnTaxes: []shared.OrderReturnTax{
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(587459),
                                Currency: sdk.String("facilis"),
                            },
                            CatalogObjectID: sdk.String("eum"),
                            CatalogVersion: sdk.Int64(707583),
                            Name: sdk.String("Lucia Cassin"),
                            Percentage: sdk.String("corporis"),
                            Scope: sdk.String("omnis"),
                            SourceTaxUID: sdk.String("quidem"),
                            Type: sdk.String("corrupti"),
                            UID: sdk.String("ipsam"),
                        },
                        shared.OrderReturnTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(328588),
                                Currency: sdk.String("assumenda"),
                            },
                            CatalogObjectID: sdk.String("aperiam"),
                            CatalogVersion: sdk.Int64(89757),
                            Name: sdk.String("Yvette Jacobi"),
                            Percentage: sdk.String("quos"),
                            Scope: sdk.String("cum"),
                            SourceTaxUID: sdk.String("praesentium"),
                            Type: sdk.String("dolor"),
                            UID: sdk.String("dolorum"),
                        },
                    },
                    RoundingAdjustment: &shared.OrderRoundingAdjustment{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(227674),
                            Currency: sdk.String("molestias"),
                        },
                        Name: sdk.String("Ivan O'Hara"),
                        UID: sdk.String("quo"),
                    },
                    SourceOrderID: sdk.String("vitae"),
                    UID: sdk.String("modi"),
                },
            },
            Rewards: []shared.OrderReward{
                shared.OrderReward{
                    ID: "200c2cae-b1ae-41ec-b8c3-4946bba7a05a",
                    RewardTierID: "totam",
                },
                shared.OrderReward{
                    ID: "b4a9ec5b-3688-4cca-b632-72760e966e97",
                    RewardTierID: "voluptates",
                },
            },
            RoundingAdjustment: &shared.OrderRoundingAdjustment{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(36715),
                    Currency: sdk.String("veniam"),
                },
                Name: sdk.String("Teresa Anderson"),
                UID: sdk.String("aliquam"),
            },
            ServiceCharges: []shared.OrderServiceCharge{
                shared.OrderServiceCharge{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(863470),
                        Currency: sdk.String("molestiae"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(549074),
                        Currency: sdk.String("asperiores"),
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(139332),
                                Currency: sdk.String("ut"),
                            },
                            TaxUID: "cupiditate",
                            UID: sdk.String("ab"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(112148),
                                Currency: sdk.String("magnam"),
                            },
                            TaxUID: "ullam",
                            UID: sdk.String("asperiores"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(657481),
                                Currency: sdk.String("soluta"),
                            },
                            TaxUID: "excepturi",
                            UID: sdk.String("voluptates"),
                        },
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(330608),
                                Currency: sdk.String("perspiciatis"),
                            },
                            TaxUID: "laborum",
                            UID: sdk.String("incidunt"),
                        },
                    },
                    CalculationPhase: sdk.String("fuga"),
                    CatalogObjectID: sdk.String("a"),
                    CatalogVersion: sdk.Int64(215566),
                    Metadata: map[string]string{
                        "nisi": "aliquid",
                    },
                    Name: sdk.String("Joanne Thompson"),
                    Percentage: sdk.String("autem"),
                    Taxable: sdk.Bool(false),
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(699942),
                        Currency: sdk.String("sapiente"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(174152),
                        Currency: sdk.String("reiciendis"),
                    },
                    Type: sdk.String("doloribus"),
                    UID: sdk.String("quasi"),
                },
                shared.OrderServiceCharge{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(309239),
                        Currency: sdk.String("recusandae"),
                    },
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(507757),
                        Currency: sdk.String("quod"),
                    },
                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                        shared.OrderLineItemAppliedTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(712338),
                                Currency: sdk.String("velit"),
                            },
                            TaxUID: "nemo",
                            UID: sdk.String("magni"),
                        },
                    },
                    CalculationPhase: sdk.String("dolorum"),
                    CatalogObjectID: sdk.String("porro"),
                    CatalogVersion: sdk.Int64(810667),
                    Metadata: map[string]string{
                        "repellendus": "dolorum",
                        "maxime": "minus",
                        "ad": "consequuntur",
                        "qui": "reprehenderit",
                    },
                    Name: sdk.String("Juan Funk"),
                    Percentage: sdk.String("fuga"),
                    Taxable: sdk.Bool(false),
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(44670),
                        Currency: sdk.String("architecto"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(425408),
                        Currency: sdk.String("cum"),
                    },
                    Type: sdk.String("quo"),
                    UID: sdk.String("aliquam"),
                },
            },
            Source: &shared.OrderSource{
                Name: sdk.String("Mrs. Casey Pfannerstill"),
            },
            State: sdk.String("explicabo"),
            Taxes: []shared.OrderLineItemTax{
                shared.OrderLineItemTax{
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(307887),
                        Currency: sdk.String("architecto"),
                    },
                    AutoApplied: sdk.Bool(false),
                    CatalogObjectID: sdk.String("perferendis"),
                    CatalogVersion: sdk.Int64(273823),
                    Metadata: map[string]string{
                        "dolores": "veniam",
                        "debitis": "asperiores",
                        "iusto": "quasi",
                    },
                    Name: sdk.String("Rogelio Hansen"),
                    Percentage: sdk.String("dicta"),
                    Scope: sdk.String("architecto"),
                    Type: sdk.String("fugiat"),
                    UID: sdk.String("eum"),
                },
                shared.OrderLineItemTax{
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(111045),
                        Currency: sdk.String("numquam"),
                    },
                    AutoApplied: sdk.Bool(false),
                    CatalogObjectID: sdk.String("deserunt"),
                    CatalogVersion: sdk.Int64(271720),
                    Metadata: map[string]string{
                        "dicta": "in",
                    },
                    Name: sdk.String("Becky D'Amore"),
                    Percentage: sdk.String("ut"),
                    Scope: sdk.String("totam"),
                    Type: sdk.String("laboriosam"),
                    UID: sdk.String("esse"),
                },
                shared.OrderLineItemTax{
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(199595),
                        Currency: sdk.String("vero"),
                    },
                    AutoApplied: sdk.Bool(false),
                    CatalogObjectID: sdk.String("nostrum"),
                    CatalogVersion: sdk.Int64(185302),
                    Metadata: map[string]string{
                        "rerum": "corrupti",
                    },
                    Name: sdk.String("Tracey Murphy I"),
                    Percentage: sdk.String("accusantium"),
                    Scope: sdk.String("eum"),
                    Type: sdk.String("commodi"),
                    UID: sdk.String("doloremque"),
                },
                shared.OrderLineItemTax{
                    AppliedMoney: &shared.Money{
                        Amount: sdk.Int64(993197),
                        Currency: sdk.String("doloremque"),
                    },
                    AutoApplied: sdk.Bool(false),
                    CatalogObjectID: sdk.String("fugit"),
                    CatalogVersion: sdk.Int64(309463),
                    Metadata: map[string]string{
                        "dignissimos": "sint",
                        "quidem": "ut",
                        "optio": "cumque",
                        "ex": "dolore",
                    },
                    Name: sdk.String("Martin Rempel"),
                    Percentage: sdk.String("ratione"),
                    Scope: sdk.String("odit"),
                    Type: sdk.String("optio"),
                    UID: sdk.String("labore"),
                },
            },
            Tenders: []shared.Tender{
                shared.Tender{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(653565),
                                Currency: sdk.String("facere"),
                            },
                            Description: sdk.String("debitis"),
                            LocationID: "ex",
                            ReceivableID: sdk.String("magni"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(967067),
                                Currency: sdk.String("autem"),
                            },
                            Description: sdk.String("est"),
                            LocationID: "dolorum",
                            ReceivableID: sdk.String("quaerat"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(349784),
                                Currency: sdk.String("molestias"),
                            },
                            Description: sdk.String("id"),
                            LocationID: "voluptas",
                            ReceivableID: sdk.String("corporis"),
                        },
                    },
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(911982),
                        Currency: sdk.String("eos"),
                    },
                    CardDetails: &shared.TenderCardDetails{
                        Card: &shared.Card{
                            BillingAddress: &shared.Address{
                                AddressLine1: sdk.String("aperiam"),
                                AddressLine2: sdk.String("deleniti"),
                                AddressLine3: sdk.String("amet"),
                                AdministrativeDistrictLevel1: sdk.String("aut"),
                                AdministrativeDistrictLevel2: sdk.String("quasi"),
                                AdministrativeDistrictLevel3: sdk.String("laboriosam"),
                                Country: sdk.String("Singapore"),
                                FirstName: sdk.String("Marley"),
                                LastName: sdk.String("Dicki"),
                                Locality: sdk.String("modi"),
                                Organization: sdk.String("soluta"),
                                PostalCode: sdk.String("54829-4101"),
                                Sublocality: sdk.String("iusto"),
                                Sublocality2: sdk.String("culpa"),
                                Sublocality3: sdk.String("ea"),
                            },
                            Bin: sdk.String("accusantium"),
                            CardBrand: sdk.String("esse"),
                            CardType: sdk.String("facere"),
                            CardholderName: sdk.String("architecto"),
                            CustomerID: sdk.String("voluptas"),
                            Enabled: sdk.Bool(false),
                            ExpMonth: sdk.Int64(27585),
                            ExpYear: sdk.Int64(398935),
                            Fingerprint: sdk.String("explicabo"),
                            ID: sdk.String("94514c3d-b9ca-49f3-8bd2-be878703493f"),
                            Last4: sdk.String("dolore"),
                            PrepaidType: sdk.String("provident"),
                            ReferenceID: sdk.String("est"),
                            Version: sdk.Int64(652345),
                        },
                        EntryMethod: sdk.String("laudantium"),
                        Status: sdk.String("labore"),
                    },
                    CashDetails: &shared.TenderCashDetails{
                        BuyerTenderedMoney: &shared.Money{
                            Amount: sdk.Int64(404484),
                            Currency: sdk.String("minima"),
                        },
                        ChangeBackMoney: &shared.Money{
                            Amount: sdk.Int64(653043),
                            Currency: sdk.String("sequi"),
                        },
                    },
                    CreatedAt: sdk.String("eos"),
                    CustomerID: sdk.String("laudantium"),
                    ID: sdk.String("3279b719-d1ce-4a67-bd86-e3b35e49a313"),
                    LocationID: sdk.String("nemo"),
                    Note: sdk.String("iusto"),
                    PaymentID: sdk.String("iusto"),
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(559970),
                        Currency: sdk.String("optio"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(896616),
                        Currency: sdk.String("minima"),
                    },
                    TransactionID: sdk.String("numquam"),
                    Type: "minus",
                },
                shared.Tender{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(782688),
                                Currency: sdk.String("libero"),
                            },
                            Description: sdk.String("perferendis"),
                            LocationID: "accusamus",
                            ReceivableID: sdk.String("ratione"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(875305),
                                Currency: sdk.String("mollitia"),
                            },
                            Description: sdk.String("sint"),
                            LocationID: "ducimus",
                            ReceivableID: sdk.String("minima"),
                        },
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(27636),
                                Currency: sdk.String("labore"),
                            },
                            Description: sdk.String("corporis"),
                            LocationID: "harum",
                            ReceivableID: sdk.String("error"),
                        },
                    },
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(797788),
                        Currency: sdk.String("asperiores"),
                    },
                    CardDetails: &shared.TenderCardDetails{
                        Card: &shared.Card{
                            BillingAddress: &shared.Address{
                                AddressLine1: sdk.String("ea"),
                                AddressLine2: sdk.String("neque"),
                                AddressLine3: sdk.String("nam"),
                                AdministrativeDistrictLevel1: sdk.String("sed"),
                                AdministrativeDistrictLevel2: sdk.String("quasi"),
                                AdministrativeDistrictLevel3: sdk.String("nemo"),
                                Country: sdk.String("Brazil"),
                                FirstName: sdk.String("Kathryne"),
                                LastName: sdk.String("Johns"),
                                Locality: sdk.String("id"),
                                Organization: sdk.String("nam"),
                                PostalCode: sdk.String("92601"),
                                Sublocality: sdk.String("qui"),
                                Sublocality2: sdk.String("autem"),
                                Sublocality3: sdk.String("architecto"),
                            },
                            Bin: sdk.String("tempora"),
                            CardBrand: sdk.String("velit"),
                            CardType: sdk.String("ab"),
                            CardholderName: sdk.String("ad"),
                            CustomerID: sdk.String("assumenda"),
                            Enabled: sdk.Bool(false),
                            ExpMonth: sdk.Int64(78738),
                            ExpYear: sdk.Int64(343530),
                            Fingerprint: sdk.String("ex"),
                            ID: sdk.String("8299e61a-fc71-486f-b20b-7a73df40ca0d"),
                            Last4: sdk.String("dignissimos"),
                            PrepaidType: sdk.String("aliquid"),
                            ReferenceID: sdk.String("ad"),
                            Version: sdk.Int64(443244),
                        },
                        EntryMethod: sdk.String("placeat"),
                        Status: sdk.String("quae"),
                    },
                    CashDetails: &shared.TenderCashDetails{
                        BuyerTenderedMoney: &shared.Money{
                            Amount: sdk.Int64(402947),
                            Currency: sdk.String("eius"),
                        },
                        ChangeBackMoney: &shared.Money{
                            Amount: sdk.Int64(69878),
                            Currency: sdk.String("distinctio"),
                        },
                    },
                    CreatedAt: sdk.String("facilis"),
                    CustomerID: sdk.String("maiores"),
                    ID: sdk.String("055271b2-511d-4d60-add1-b28272bc9c32"),
                    LocationID: sdk.String("sunt"),
                    Note: sdk.String("vitae"),
                    PaymentID: sdk.String("ex"),
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(572481),
                        Currency: sdk.String("dignissimos"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(699707),
                        Currency: sdk.String("inventore"),
                    },
                    TransactionID: sdk.String("quas"),
                    Type: "deleniti",
                },
                shared.Tender{
                    AdditionalRecipients: []shared.AdditionalRecipient{
                        shared.AdditionalRecipient{
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(967713),
                                Currency: sdk.String("cumque"),
                            },
                            Description: sdk.String("rerum"),
                            LocationID: "expedita",
                            ReceivableID: sdk.String("odit"),
                        },
                    },
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(717260),
                        Currency: sdk.String("excepturi"),
                    },
                    CardDetails: &shared.TenderCardDetails{
                        Card: &shared.Card{
                            BillingAddress: &shared.Address{
                                AddressLine1: sdk.String("neque"),
                                AddressLine2: sdk.String("maxime"),
                                AddressLine3: sdk.String("ab"),
                                AdministrativeDistrictLevel1: sdk.String("nostrum"),
                                AdministrativeDistrictLevel2: sdk.String("repellat"),
                                AdministrativeDistrictLevel3: sdk.String("eum"),
                                Country: sdk.String("Kyrgyz Republic"),
                                FirstName: sdk.String("Abby"),
                                LastName: sdk.String("Reinger"),
                                Locality: sdk.String("at"),
                                Organization: sdk.String("quasi"),
                                PostalCode: sdk.String("52511"),
                                Sublocality: sdk.String("vel"),
                                Sublocality2: sdk.String("exercitationem"),
                                Sublocality3: sdk.String("dolor"),
                            },
                            Bin: sdk.String("debitis"),
                            CardBrand: sdk.String("necessitatibus"),
                            CardType: sdk.String("harum"),
                            CardholderName: sdk.String("amet"),
                            CustomerID: sdk.String("tempore"),
                            Enabled: sdk.Bool(false),
                            ExpMonth: sdk.Int64(402434),
                            ExpYear: sdk.Int64(878289),
                            Fingerprint: sdk.String("odit"),
                            ID: sdk.String("41c31099-8366-43c6-adcb-b7df6cb09c8b"),
                            Last4: sdk.String("modi"),
                            PrepaidType: sdk.String("aperiam"),
                            ReferenceID: sdk.String("praesentium"),
                            Version: sdk.Int64(926558),
                        },
                        EntryMethod: sdk.String("eaque"),
                        Status: sdk.String("nihil"),
                    },
                    CashDetails: &shared.TenderCashDetails{
                        BuyerTenderedMoney: &shared.Money{
                            Amount: sdk.Int64(115455),
                            Currency: sdk.String("adipisci"),
                        },
                        ChangeBackMoney: &shared.Money{
                            Amount: sdk.Int64(477518),
                            Currency: sdk.String("in"),
                        },
                    },
                    CreatedAt: sdk.String("magnam"),
                    CustomerID: sdk.String("repellendus"),
                    ID: sdk.String("e4fee101-d978-40a1-8c47-b95040d6c8b2"),
                    LocationID: sdk.String("similique"),
                    Note: sdk.String("ipsam"),
                    PaymentID: sdk.String("a"),
                    ProcessingFeeMoney: &shared.Money{
                        Amount: sdk.Int64(3612),
                        Currency: sdk.String("perferendis"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(133346),
                        Currency: sdk.String("sed"),
                    },
                    TransactionID: sdk.String("sit"),
                    Type: "esse",
                },
            },
            TotalDiscountMoney: &shared.Money{
                Amount: sdk.Int64(880284),
                Currency: sdk.String("ut"),
            },
            TotalMoney: &shared.Money{
                Amount: sdk.Int64(61379),
                Currency: sdk.String("dolore"),
            },
            TotalServiceChargeMoney: &shared.Money{
                Amount: sdk.Int64(560567),
                Currency: sdk.String("maiores"),
            },
            TotalTaxMoney: &shared.Money{
                Amount: sdk.Int64(585199),
                Currency: sdk.String("aperiam"),
            },
            TotalTipMoney: &shared.Money{
                Amount: sdk.Int64(4409),
                Currency: sdk.String("sit"),
            },
            UpdatedAt: sdk.String("iste"),
            Version: sdk.Int64(935145),
        },
    }, operations.CreateOrderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrderResponse != nil {
        // handle response
    }
}
```

## PayOrder

Pay for an [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) using one or more approved [payments](https://developer.squareup.com/reference/square_2021-08-18/objects/Payment)
or settle an order with a total of `0`.

The total of the `payment_ids` listed in the request must be equal to the order
total. Orders with a total amount of `0` can be marked as paid by specifying an empty
array of `payment_ids` in the request.

To be used with `PayOrder`, a payment must:

- Reference the order by specifying the `order_id` when [creating the payment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
Any approved payments that reference the same `order_id` not specified in the
`payment_ids` is canceled.
- Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-capture).
Using a delayed capture payment with `PayOrder` completes the approved payment.

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
    res, err := s.Orders.PayOrder(ctx, operations.PayOrderRequest{
        PayOrderRequest: shared.PayOrderRequest{
            IdempotencyKey: "illum",
            OrderVersion: sdk.Int64(160090),
            PaymentIds: []string{
                "doloremque",
                "qui",
                "esse",
            },
        },
        OrderID: "quos",
    }, operations.PayOrderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayOrderResponse != nil {
        // handle response
    }
}
```

## SearchOrders

Search all orders for one or more locations. Orders include all sales,
returns, and exchanges regardless of how or when they entered the Square
ecosystem (such as Point of Sale, Invoices, and Connect APIs).

`SearchOrders` requests need to specify which locations to search and define a
[SearchOrdersQuery](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersQuery) object that controls
how to sort or filter the results. Your `SearchOrdersQuery` can:

  Set filter criteria.
  Set the sort order.
  Determine whether to return results as complete `Order` objects or as
[OrderEntry](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderEntry) objects.

Note that details for orders processed with Square Point of Sale while in
offline mode might not be transmitted to Square for up to 72 hours. Offline
orders have a `created_at` value that reflects the time the order was created,
not the time it was subsequently transmitted to Square.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.SearchOrders(ctx, shared.SearchOrdersRequest{
        Cursor: sdk.String("accusamus"),
        Limit: sdk.Int64(697783),
        LocationIds: []string{
            "fuga",
            "itaque",
        },
        Query: &shared.SearchOrdersQuery{
            Filter: &shared.SearchOrdersFilter{
                CustomerFilter: &shared.SearchOrdersCustomerFilter{
                    CustomerIds: []string{
                        "pariatur",
                        "suscipit",
                        "ut",
                    },
                },
                DateTimeFilter: &shared.SearchOrdersDateTimeFilter{
                    ClosedAt: &shared.TimeRange{
                        EndAt: sdk.String("sunt"),
                        StartAt: sdk.String("iure"),
                    },
                    CreatedAt: &shared.TimeRange{
                        EndAt: sdk.String("ab"),
                        StartAt: sdk.String("recusandae"),
                    },
                    UpdatedAt: &shared.TimeRange{
                        EndAt: sdk.String("iste"),
                        StartAt: sdk.String("sunt"),
                    },
                },
                FulfillmentFilter: &shared.SearchOrdersFulfillmentFilter{
                    FulfillmentStates: []string{
                        "quae",
                        "alias",
                    },
                    FulfillmentTypes: []string{
                        "sed",
                    },
                },
                SourceFilter: &shared.SearchOrdersSourceFilter{
                    SourceNames: []string{
                        "rerum",
                    },
                },
                StateFilter: &shared.SearchOrdersStateFilter{
                    States: []string{
                        "eligendi",
                    },
                },
            },
            Sort: &shared.SearchOrdersSort{
                SortField: "voluptatem",
                SortOrder: sdk.String("cupiditate"),
            },
        },
        ReturnEntries: sdk.Bool(false),
    }, operations.SearchOrdersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchOrdersResponse != nil {
        // handle response
    }
}
```

## GetV2OrdersOrderID

Retrieves an [Order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by ID.

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
    res, err := s.Orders.GetV2OrdersOrderID(ctx, operations.GetV2OrdersOrderIDRequest{
        OrderID: "distinctio",
    }, operations.GetV2OrdersOrderIDSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveOrderResponse != nil {
        // handle response
    }
}
```

## PutV2OrdersOrderID

Updates an open [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by adding, replacing, or deleting
fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.

An `UpdateOrder` request requires the following:

- The `order_id` in the endpoint path, identifying the order to update.
- The latest `version` of the order to update.
- The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects)
containing only the fields to update and the version to which the update is
being applied.
- If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
identifying the fields to clear.

To pay for an order, see 
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

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
    res, err := s.Orders.PutV2OrdersOrderID(ctx, operations.PutV2OrdersOrderIDRequest{
        UpdateOrderRequest: shared.UpdateOrderRequest{
            FieldsToClear: []string{
                "consequuntur",
                "tempora",
                "voluptate",
            },
            IdempotencyKey: sdk.String("odio"),
            Order: &shared.Order{
                ClosedAt: sdk.String("dicta"),
                CreatedAt: sdk.String("earum"),
                CustomerID: sdk.String("nemo"),
                Discounts: []shared.OrderLineItemDiscount{
                    shared.OrderLineItemDiscount{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(397468),
                            Currency: sdk.String("iste"),
                        },
                        AppliedMoney: &shared.Money{
                            Amount: sdk.Int64(912986),
                            Currency: sdk.String("nemo"),
                        },
                        CatalogObjectID: sdk.String("facilis"),
                        CatalogVersion: sdk.Int64(449847),
                        Metadata: map[string]string{
                            "porro": "dignissimos",
                            "nisi": "magni",
                            "iure": "ea",
                            "labore": "perspiciatis",
                        },
                        Name: sdk.String("Dave Gutmann"),
                        Percentage: sdk.String("provident"),
                        PricingRuleID: sdk.String("recusandae"),
                        RewardIds: []string{
                            "cumque",
                            "a",
                        },
                        Scope: sdk.String("at"),
                        Type: sdk.String("dolores"),
                        UID: sdk.String("odit"),
                    },
                    shared.OrderLineItemDiscount{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(476438),
                            Currency: sdk.String("ex"),
                        },
                        AppliedMoney: &shared.Money{
                            Amount: sdk.Int64(887651),
                            Currency: sdk.String("sit"),
                        },
                        CatalogObjectID: sdk.String("expedita"),
                        CatalogVersion: sdk.Int64(522617),
                        Metadata: map[string]string{
                            "repellat": "harum",
                            "atque": "iure",
                            "nulla": "aliquid",
                        },
                        Name: sdk.String("Dana Harris"),
                        Percentage: sdk.String("earum"),
                        PricingRuleID: sdk.String("corrupti"),
                        RewardIds: []string{
                            "libero",
                            "sapiente",
                            "praesentium",
                            "dicta",
                        },
                        Scope: sdk.String("qui"),
                        Type: sdk.String("asperiores"),
                        UID: sdk.String("blanditiis"),
                    },
                },
                Fulfillments: []shared.OrderFulfillment{
                    shared.OrderFulfillment{
                        Metadata: map[string]string{
                            "inventore": "eligendi",
                            "animi": "autem",
                            "laborum": "omnis",
                        },
                        PickupDetails: &shared.OrderFulfillmentPickupDetails{
                            AcceptedAt: sdk.String("voluptatibus"),
                            AutoCompleteDuration: sdk.String("asperiores"),
                            CancelReason: sdk.String("impedit"),
                            CanceledAt: sdk.String("quis"),
                            CurbsidePickupDetails: &shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails{
                                BuyerArrivedAt: sdk.String("nisi"),
                                CurbsideDetails: sdk.String("vitae"),
                            },
                            ExpiredAt: sdk.String("unde"),
                            ExpiresAt: sdk.String("odit"),
                            IsCurbsidePickup: sdk.Bool(false),
                            Note: sdk.String("omnis"),
                            PickedUpAt: sdk.String("placeat"),
                            PickupAt: sdk.String("cumque"),
                            PickupWindowDuration: sdk.String("officia"),
                            PlacedAt: sdk.String("occaecati"),
                            PrepTimeDuration: sdk.String("nemo"),
                            ReadyAt: sdk.String("laboriosam"),
                            Recipient: &shared.OrderFulfillmentRecipient{
                                Address: &shared.Address{
                                    AddressLine1: sdk.String("eaque"),
                                    AddressLine2: sdk.String("fuga"),
                                    AddressLine3: sdk.String("quasi"),
                                    AdministrativeDistrictLevel1: sdk.String("adipisci"),
                                    AdministrativeDistrictLevel2: sdk.String("occaecati"),
                                    AdministrativeDistrictLevel3: sdk.String("exercitationem"),
                                    Country: sdk.String("Mexico"),
                                    FirstName: sdk.String("Antonia"),
                                    LastName: sdk.String("Macejkovic"),
                                    Locality: sdk.String("facere"),
                                    Organization: sdk.String("fuga"),
                                    PostalCode: sdk.String("82594"),
                                    Sublocality: sdk.String("quas"),
                                    Sublocality2: sdk.String("officiis"),
                                    Sublocality3: sdk.String("ipsum"),
                                },
                                CustomerID: sdk.String("quisquam"),
                                DisplayName: sdk.String("asperiores"),
                                EmailAddress: sdk.String("praesentium"),
                                PhoneNumber: sdk.String("accusamus"),
                            },
                            RejectedAt: sdk.String("inventore"),
                            ScheduleType: sdk.String("ab"),
                        },
                        ShipmentDetails: &shared.OrderFulfillmentShipmentDetails{
                            CancelReason: sdk.String("dolore"),
                            CanceledAt: sdk.String("amet"),
                            Carrier: sdk.String("nulla"),
                            ExpectedShippedAt: sdk.String("officia"),
                            FailedAt: sdk.String("natus"),
                            FailureReason: sdk.String("nesciunt"),
                            InProgressAt: sdk.String("eaque"),
                            PackagedAt: sdk.String("deleniti"),
                            PlacedAt: sdk.String("nobis"),
                            Recipient: &shared.OrderFulfillmentRecipient{
                                Address: &shared.Address{
                                    AddressLine1: sdk.String("magni"),
                                    AddressLine2: sdk.String("nihil"),
                                    AddressLine3: sdk.String("laborum"),
                                    AdministrativeDistrictLevel1: sdk.String("aut"),
                                    AdministrativeDistrictLevel2: sdk.String("voluptatum"),
                                    AdministrativeDistrictLevel3: sdk.String("animi"),
                                    Country: sdk.String("Vietnam"),
                                    FirstName: sdk.String("Christopher"),
                                    LastName: sdk.String("Collier"),
                                    Locality: sdk.String("et"),
                                    Organization: sdk.String("voluptatum"),
                                    PostalCode: sdk.String("32672"),
                                    Sublocality: sdk.String("illum"),
                                    Sublocality2: sdk.String("recusandae"),
                                    Sublocality3: sdk.String("deleniti"),
                                },
                                CustomerID: sdk.String("iure"),
                                DisplayName: sdk.String("quis"),
                                EmailAddress: sdk.String("eum"),
                                PhoneNumber: sdk.String("eligendi"),
                            },
                            ShippedAt: sdk.String("quisquam"),
                            ShippingNote: sdk.String("optio"),
                            ShippingType: sdk.String("eveniet"),
                            TrackingNumber: sdk.String("incidunt"),
                            TrackingURL: sdk.String("dignissimos"),
                        },
                        State: sdk.String("accusantium"),
                        Type: sdk.String("impedit"),
                        UID: sdk.String("fugiat"),
                    },
                },
                ID: sdk.String("2147b6e6-152c-4f01-90d8-c3a4b9a5bf93"),
                LineItems: []shared.OrderLineItem{
                    shared.OrderLineItem{
                        AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(974294),
                                    Currency: sdk.String("vero"),
                                },
                                DiscountUID: "provident",
                                UID: sdk.String("iure"),
                            },
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(280009),
                                    Currency: sdk.String("repellat"),
                                },
                                DiscountUID: "similique",
                                UID: sdk.String("ut"),
                            },
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(731307),
                                    Currency: sdk.String("et"),
                                },
                                DiscountUID: "voluptates",
                                UID: sdk.String("excepturi"),
                            },
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(811561),
                                    Currency: sdk.String("consequatur"),
                                },
                                DiscountUID: "natus",
                                UID: sdk.String("molestiae"),
                            },
                        },
                        AppliedTaxes: []shared.OrderLineItemAppliedTax{
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(836804),
                                    Currency: sdk.String("animi"),
                                },
                                TaxUID: "autem",
                                UID: sdk.String("fugit"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(203992),
                                    Currency: sdk.String("magnam"),
                                },
                                TaxUID: "numquam",
                                UID: sdk.String("fugit"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(913809),
                                    Currency: sdk.String("beatae"),
                                },
                                TaxUID: "id",
                                UID: sdk.String("unde"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(161312),
                                    Currency: sdk.String("ratione"),
                                },
                                TaxUID: "quam",
                                UID: sdk.String("recusandae"),
                            },
                        },
                        BasePriceMoney: &shared.Money{
                            Amount: sdk.Int64(614594),
                            Currency: sdk.String("cupiditate"),
                        },
                        CatalogObjectID: sdk.String("blanditiis"),
                        CatalogVersion: sdk.Int64(253929),
                        GrossSalesMoney: &shared.Money{
                            Amount: sdk.Int64(785089),
                            Currency: sdk.String("quas"),
                        },
                        ItemType: sdk.String("consequatur"),
                        Metadata: map[string]string{
                            "ut": "nihil",
                            "sint": "saepe",
                            "atque": "excepturi",
                        },
                        Modifiers: []shared.OrderLineItemModifier{
                            shared.OrderLineItemModifier{
                                BasePriceMoney: &shared.Money{
                                    Amount: sdk.Int64(563623),
                                    Currency: sdk.String("dolores"),
                                },
                                CatalogObjectID: sdk.String("dolorem"),
                                CatalogVersion: sdk.Int64(752959),
                                Name: sdk.String("Nina Runolfsson"),
                                TotalPriceMoney: &shared.Money{
                                    Amount: sdk.Int64(816753),
                                    Currency: sdk.String("vel"),
                                },
                                UID: sdk.String("cupiditate"),
                            },
                        },
                        Name: sdk.String("Jon Jacobs"),
                        Note: sdk.String("explicabo"),
                        PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                            BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                    DiscountCatalogObjectID: sdk.String("tempora"),
                                    DiscountUID: sdk.String("doloribus"),
                                    UID: sdk.String("animi"),
                                },
                            },
                            BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                                shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    TaxCatalogObjectID: sdk.String("doloremque"),
                                    TaxUID: sdk.String("magni"),
                                    UID: sdk.String("alias"),
                                },
                            },
                        },
                        Quantity: "reprehenderit",
                        QuantityUnit: &shared.OrderQuantityUnit{
                            CatalogVersion: sdk.Int64(887073),
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("eius"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "delectus",
                                    Name: "Bert Ankunding",
                                },
                                GenericUnit: sdk.String("eligendi"),
                                LengthUnit: sdk.String("facere"),
                                TimeUnit: sdk.String("esse"),
                                Type: sdk.String("tenetur"),
                                VolumeUnit: sdk.String("ab"),
                                WeightUnit: sdk.String("cum"),
                            },
                            Precision: sdk.Int64(794986),
                        },
                        TotalDiscountMoney: &shared.Money{
                            Amount: sdk.Int64(187238),
                            Currency: sdk.String("placeat"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(668865),
                            Currency: sdk.String("nam"),
                        },
                        TotalTaxMoney: &shared.Money{
                            Amount: sdk.Int64(678865),
                            Currency: sdk.String("repellat"),
                        },
                        UID: sdk.String("dignissimos"),
                        VariationName: sdk.String("asperiores"),
                        VariationTotalPriceMoney: &shared.Money{
                            Amount: sdk.Int64(763215),
                            Currency: sdk.String("eos"),
                        },
                    },
                    shared.OrderLineItem{
                        AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(795413),
                                    Currency: sdk.String("facilis"),
                                },
                                DiscountUID: "id",
                                UID: sdk.String("numquam"),
                            },
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(726468),
                                    Currency: sdk.String("recusandae"),
                                },
                                DiscountUID: "asperiores",
                                UID: sdk.String("aperiam"),
                            },
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(836620),
                                    Currency: sdk.String("reiciendis"),
                                },
                                DiscountUID: "nisi",
                                UID: sdk.String("voluptatum"),
                            },
                            shared.OrderLineItemAppliedDiscount{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(937466),
                                    Currency: sdk.String("mollitia"),
                                },
                                DiscountUID: "vero",
                                UID: sdk.String("repellendus"),
                            },
                        },
                        AppliedTaxes: []shared.OrderLineItemAppliedTax{
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(162548),
                                    Currency: sdk.String("earum"),
                                },
                                TaxUID: "necessitatibus",
                                UID: sdk.String("quam"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(9476),
                                    Currency: sdk.String("expedita"),
                                },
                                TaxUID: "itaque",
                                UID: sdk.String("alias"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(411407),
                                    Currency: sdk.String("excepturi"),
                                },
                                TaxUID: "repellat",
                                UID: sdk.String("nam"),
                            },
                        },
                        BasePriceMoney: &shared.Money{
                            Amount: sdk.Int64(230776),
                            Currency: sdk.String("suscipit"),
                        },
                        CatalogObjectID: sdk.String("est"),
                        CatalogVersion: sdk.Int64(867919),
                        GrossSalesMoney: &shared.Money{
                            Amount: sdk.Int64(849181),
                            Currency: sdk.String("odio"),
                        },
                        ItemType: sdk.String("sit"),
                        Metadata: map[string]string{
                            "sit": "corrupti",
                            "accusantium": "saepe",
                        },
                        Modifiers: []shared.OrderLineItemModifier{
                            shared.OrderLineItemModifier{
                                BasePriceMoney: &shared.Money{
                                    Amount: sdk.Int64(682449),
                                    Currency: sdk.String("dolorem"),
                                },
                                CatalogObjectID: sdk.String("tenetur"),
                                CatalogVersion: sdk.Int64(804296),
                                Name: sdk.String("Carmen Okuneva"),
                                TotalPriceMoney: &shared.Money{
                                    Amount: sdk.Int64(46574),
                                    Currency: sdk.String("adipisci"),
                                },
                                UID: sdk.String("aliquam"),
                            },
                        },
                        Name: sdk.String("Dennis Bernhard"),
                        Note: sdk.String("sint"),
                        PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                            BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                    DiscountCatalogObjectID: sdk.String("eius"),
                                    DiscountUID: sdk.String("ratione"),
                                    UID: sdk.String("error"),
                                },
                            },
                            BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                                shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    TaxCatalogObjectID: sdk.String("mollitia"),
                                    TaxUID: sdk.String("suscipit"),
                                    UID: sdk.String("occaecati"),
                                },
                                shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    TaxCatalogObjectID: sdk.String("totam"),
                                    TaxUID: sdk.String("in"),
                                    UID: sdk.String("est"),
                                },
                                shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    TaxCatalogObjectID: sdk.String("eius"),
                                    TaxUID: sdk.String("ducimus"),
                                    UID: sdk.String("fugit"),
                                },
                                shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    TaxCatalogObjectID: sdk.String("libero"),
                                    TaxUID: sdk.String("esse"),
                                    UID: sdk.String("sit"),
                                },
                            },
                        },
                        Quantity: "iste",
                        QuantityUnit: &shared.OrderQuantityUnit{
                            CatalogVersion: sdk.Int64(676702),
                            MeasurementUnit: &shared.MeasurementUnit{
                                AreaUnit: sdk.String("vitae"),
                                CustomUnit: &shared.MeasurementUnitCustom{
                                    Abbreviation: "minima",
                                    Name: "Meghan Daugherty",
                                },
                                GenericUnit: sdk.String("voluptatem"),
                                LengthUnit: sdk.String("dicta"),
                                TimeUnit: sdk.String("quae"),
                                Type: sdk.String("autem"),
                                VolumeUnit: sdk.String("rem"),
                                WeightUnit: sdk.String("ad"),
                            },
                            Precision: sdk.Int64(215248),
                        },
                        TotalDiscountMoney: &shared.Money{
                            Amount: sdk.Int64(608988),
                            Currency: sdk.String("eligendi"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(903793),
                            Currency: sdk.String("ipsa"),
                        },
                        TotalTaxMoney: &shared.Money{
                            Amount: sdk.Int64(598239),
                            Currency: sdk.String("consectetur"),
                        },
                        UID: sdk.String("eos"),
                        VariationName: sdk.String("repellendus"),
                        VariationTotalPriceMoney: &shared.Money{
                            Amount: sdk.Int64(111385),
                            Currency: sdk.String("aperiam"),
                        },
                    },
                },
                LocationID: "animi",
                Metadata: map[string]string{
                    "possimus": "vitae",
                    "ad": "quibusdam",
                    "praesentium": "porro",
                    "quisquam": "ipsum",
                },
                NetAmounts: &shared.OrderMoneyAmounts{
                    DiscountMoney: &shared.Money{
                        Amount: sdk.Int64(16891),
                        Currency: sdk.String("ex"),
                    },
                    ServiceChargeMoney: &shared.Money{
                        Amount: sdk.Int64(696597),
                        Currency: sdk.String("esse"),
                    },
                    TaxMoney: &shared.Money{
                        Amount: sdk.Int64(508931),
                        Currency: sdk.String("nisi"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(726413),
                        Currency: sdk.String("dolorem"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(872371),
                        Currency: sdk.String("amet"),
                    },
                },
                PricingOptions: &shared.OrderPricingOptions{
                    AutoApplyDiscounts: sdk.Bool(false),
                    AutoApplyTaxes: sdk.Bool(false),
                },
                ReferenceID: sdk.String("ducimus"),
                Refunds: []shared.Refund{
                    shared.Refund{
                        AdditionalRecipients: []shared.AdditionalRecipient{
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(151557),
                                    Currency: sdk.String("aut"),
                                },
                                Description: sdk.String("ut"),
                                LocationID: "similique",
                                ReceivableID: sdk.String("quae"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(986910),
                                    Currency: sdk.String("ipsum"),
                                },
                                Description: sdk.String("dolore"),
                                LocationID: "accusantium",
                                ReceivableID: sdk.String("nam"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(698339),
                                    Currency: sdk.String("dolor"),
                                },
                                Description: sdk.String("ex"),
                                LocationID: "voluptatibus",
                                ReceivableID: sdk.String("voluptas"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(444102),
                                    Currency: sdk.String("odio"),
                                },
                                Description: sdk.String("dolorum"),
                                LocationID: "eius",
                                ReceivableID: sdk.String("praesentium"),
                            },
                        },
                        AmountMoney: shared.Money{
                            Amount: sdk.Int64(360333),
                            Currency: sdk.String("inventore"),
                        },
                        CreatedAt: sdk.String("provident"),
                        ID: "c3374902-8488-426b-b03c-7fd225e47871",
                        LocationID: "culpa",
                        ProcessingFeeMoney: &shared.Money{
                            Amount: sdk.Int64(501045),
                            Currency: sdk.String("atque"),
                        },
                        Reason: "necessitatibus",
                        Status: "possimus",
                        TenderID: "in",
                        TransactionID: "qui",
                    },
                    shared.Refund{
                        AdditionalRecipients: []shared.AdditionalRecipient{
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(129904),
                                    Currency: sdk.String("repellendus"),
                                },
                                Description: sdk.String("eius"),
                                LocationID: "est",
                                ReceivableID: sdk.String("repellat"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(310991),
                                    Currency: sdk.String("quasi"),
                                },
                                Description: sdk.String("minima"),
                                LocationID: "voluptatum",
                                ReceivableID: sdk.String("id"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(773381),
                                    Currency: sdk.String("magni"),
                                },
                                Description: sdk.String("repellendus"),
                                LocationID: "doloremque",
                                ReceivableID: sdk.String("sapiente"),
                            },
                        },
                        AmountMoney: shared.Money{
                            Amount: sdk.Int64(24987),
                            Currency: sdk.String("repellat"),
                        },
                        CreatedAt: sdk.String("nemo"),
                        ID: "8c3b87b4-7040-4d0d-98e9-d82c5e306f55",
                        LocationID: "molestiae",
                        ProcessingFeeMoney: &shared.Money{
                            Amount: sdk.Int64(399127),
                            Currency: sdk.String("maiores"),
                        },
                        Reason: "nemo",
                        Status: "quisquam",
                        TenderID: "quibusdam",
                        TransactionID: "voluptates",
                    },
                    shared.Refund{
                        AdditionalRecipients: []shared.AdditionalRecipient{
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(5718),
                                    Currency: sdk.String("eos"),
                                },
                                Description: sdk.String("totam"),
                                LocationID: "ea",
                                ReceivableID: sdk.String("pariatur"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(2726),
                                    Currency: sdk.String("distinctio"),
                                },
                                Description: sdk.String("maxime"),
                                LocationID: "aliquam",
                                ReceivableID: sdk.String("adipisci"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(688930),
                                    Currency: sdk.String("veritatis"),
                                },
                                Description: sdk.String("quas"),
                                LocationID: "id",
                                ReceivableID: sdk.String("expedita"),
                            },
                        },
                        AmountMoney: shared.Money{
                            Amount: sdk.Int64(219095),
                            Currency: sdk.String("molestiae"),
                        },
                        CreatedAt: sdk.String("corrupti"),
                        ID: "f2fcff81-ddf7-4e08-8f74-ef54c9216e89",
                        LocationID: "qui",
                        ProcessingFeeMoney: &shared.Money{
                            Amount: sdk.Int64(397973),
                            Currency: sdk.String("sequi"),
                        },
                        Reason: "quae",
                        Status: "velit",
                        TenderID: "libero",
                        TransactionID: "soluta",
                    },
                },
                ReturnAmounts: &shared.OrderMoneyAmounts{
                    DiscountMoney: &shared.Money{
                        Amount: sdk.Int64(432075),
                        Currency: sdk.String("hic"),
                    },
                    ServiceChargeMoney: &shared.Money{
                        Amount: sdk.Int64(780092),
                        Currency: sdk.String("explicabo"),
                    },
                    TaxMoney: &shared.Money{
                        Amount: sdk.Int64(778716),
                        Currency: sdk.String("corrupti"),
                    },
                    TipMoney: &shared.Money{
                        Amount: sdk.Int64(851127),
                        Currency: sdk.String("fugit"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(444617),
                        Currency: sdk.String("eaque"),
                    },
                },
                Returns: []shared.OrderReturn{
                    shared.OrderReturn{
                        ReturnAmounts: &shared.OrderMoneyAmounts{
                            DiscountMoney: &shared.Money{
                                Amount: sdk.Int64(39457),
                                Currency: sdk.String("unde"),
                            },
                            ServiceChargeMoney: &shared.Money{
                                Amount: sdk.Int64(428906),
                                Currency: sdk.String("quidem"),
                            },
                            TaxMoney: &shared.Money{
                                Amount: sdk.Int64(425323),
                                Currency: sdk.String("autem"),
                            },
                            TipMoney: &shared.Money{
                                Amount: sdk.Int64(664193),
                                Currency: sdk.String("fugiat"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(389932),
                                Currency: sdk.String("necessitatibus"),
                            },
                        },
                        ReturnDiscounts: []shared.OrderReturnDiscount{
                            shared.OrderReturnDiscount{
                                AmountMoney: &shared.Money{
                                    Amount: sdk.Int64(926074),
                                    Currency: sdk.String("quasi"),
                                },
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(863130),
                                    Currency: sdk.String("excepturi"),
                                },
                                CatalogObjectID: sdk.String("fugiat"),
                                CatalogVersion: sdk.Int64(217338),
                                Name: sdk.String("Mr. Hector Hyatt"),
                                Percentage: sdk.String("quaerat"),
                                Scope: sdk.String("mollitia"),
                                SourceDiscountUID: sdk.String("dicta"),
                                Type: sdk.String("sunt"),
                                UID: sdk.String("id"),
                            },
                        },
                        ReturnLineItems: []shared.OrderReturnLineItem{
                            shared.OrderReturnLineItem{
                                AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                    shared.OrderLineItemAppliedDiscount{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(860421),
                                            Currency: sdk.String("ipsam"),
                                        },
                                        DiscountUID: "at",
                                        UID: sdk.String("magni"),
                                    },
                                },
                                AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(265887),
                                            Currency: sdk.String("nihil"),
                                        },
                                        TaxUID: "assumenda",
                                        UID: sdk.String("debitis"),
                                    },
                                },
                                BasePriceMoney: &shared.Money{
                                    Amount: sdk.Int64(597419),
                                    Currency: sdk.String("libero"),
                                },
                                CatalogObjectID: sdk.String("dolorem"),
                                CatalogVersion: sdk.Int64(866387),
                                GrossReturnMoney: &shared.Money{
                                    Amount: sdk.Int64(289778),
                                    Currency: sdk.String("laboriosam"),
                                },
                                ItemType: sdk.String("quasi"),
                                Name: sdk.String("Jessica Tremblay"),
                                Note: sdk.String("quos"),
                                Quantity: "est",
                                QuantityUnit: &shared.OrderQuantityUnit{
                                    CatalogVersion: sdk.Int64(596846),
                                    MeasurementUnit: &shared.MeasurementUnit{
                                        AreaUnit: sdk.String("vel"),
                                        CustomUnit: &shared.MeasurementUnitCustom{
                                            Abbreviation: "nobis",
                                            Name: "Earl Morar",
                                        },
                                        GenericUnit: sdk.String("voluptatum"),
                                        LengthUnit: sdk.String("corrupti"),
                                        TimeUnit: sdk.String("sequi"),
                                        Type: sdk.String("perspiciatis"),
                                        VolumeUnit: sdk.String("rem"),
                                        WeightUnit: sdk.String("vero"),
                                    },
                                    Precision: sdk.Int64(733379),
                                },
                                ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(102133),
                                            Currency: sdk.String("expedita"),
                                        },
                                        CatalogObjectID: sdk.String("cum"),
                                        CatalogVersion: sdk.Int64(969927),
                                        Name: sdk.String("Rebecca Greenholt"),
                                        SourceModifierUID: sdk.String("enim"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(403754),
                                            Currency: sdk.String("tenetur"),
                                        },
                                        UID: sdk.String("aliquid"),
                                    },
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(228555),
                                            Currency: sdk.String("ut"),
                                        },
                                        CatalogObjectID: sdk.String("molestias"),
                                        CatalogVersion: sdk.Int64(663447),
                                        Name: sdk.String("Yolanda Goldner"),
                                        SourceModifierUID: sdk.String("cupiditate"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(708466),
                                            Currency: sdk.String("dolores"),
                                        },
                                        UID: sdk.String("beatae"),
                                    },
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(117870),
                                            Currency: sdk.String("eligendi"),
                                        },
                                        CatalogObjectID: sdk.String("recusandae"),
                                        CatalogVersion: sdk.Int64(303546),
                                        Name: sdk.String("Hannah Morar III"),
                                        SourceModifierUID: sdk.String("enim"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(125830),
                                            Currency: sdk.String("facilis"),
                                        },
                                        UID: sdk.String("beatae"),
                                    },
                                },
                                SourceLineItemUID: sdk.String("corporis"),
                                TotalDiscountMoney: &shared.Money{
                                    Amount: sdk.Int64(541842),
                                    Currency: sdk.String("optio"),
                                },
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(637070),
                                    Currency: sdk.String("excepturi"),
                                },
                                TotalTaxMoney: &shared.Money{
                                    Amount: sdk.Int64(92130),
                                    Currency: sdk.String("non"),
                                },
                                UID: sdk.String("odit"),
                                VariationName: sdk.String("reiciendis"),
                                VariationTotalPriceMoney: &shared.Money{
                                    Amount: sdk.Int64(32442),
                                    Currency: sdk.String("veniam"),
                                },
                            },
                            shared.OrderReturnLineItem{
                                AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                    shared.OrderLineItemAppliedDiscount{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(434456),
                                            Currency: sdk.String("dolor"),
                                        },
                                        DiscountUID: "quia",
                                        UID: sdk.String("harum"),
                                    },
                                },
                                AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(65214),
                                            Currency: sdk.String("porro"),
                                        },
                                        TaxUID: "harum",
                                        UID: sdk.String("at"),
                                    },
                                },
                                BasePriceMoney: &shared.Money{
                                    Amount: sdk.Int64(405428),
                                    Currency: sdk.String("unde"),
                                },
                                CatalogObjectID: sdk.String("fugit"),
                                CatalogVersion: sdk.Int64(953663),
                                GrossReturnMoney: &shared.Money{
                                    Amount: sdk.Int64(982330),
                                    Currency: sdk.String("quisquam"),
                                },
                                ItemType: sdk.String("blanditiis"),
                                Name: sdk.String("Mr. Eleanor Heathcote"),
                                Note: sdk.String("itaque"),
                                Quantity: "iste",
                                QuantityUnit: &shared.OrderQuantityUnit{
                                    CatalogVersion: sdk.Int64(863466),
                                    MeasurementUnit: &shared.MeasurementUnit{
                                        AreaUnit: sdk.String("velit"),
                                        CustomUnit: &shared.MeasurementUnitCustom{
                                            Abbreviation: "temporibus",
                                            Name: "Vincent Gottlieb I",
                                        },
                                        GenericUnit: sdk.String("commodi"),
                                        LengthUnit: sdk.String("sapiente"),
                                        TimeUnit: sdk.String("ullam"),
                                        Type: sdk.String("quo"),
                                        VolumeUnit: sdk.String("velit"),
                                        WeightUnit: sdk.String("quas"),
                                    },
                                    Precision: sdk.Int64(528972),
                                },
                                ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(389623),
                                            Currency: sdk.String("numquam"),
                                        },
                                        CatalogObjectID: sdk.String("tenetur"),
                                        CatalogVersion: sdk.Int64(411747),
                                        Name: sdk.String("Dwight Herzog"),
                                        SourceModifierUID: sdk.String("perferendis"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(665124),
                                            Currency: sdk.String("fugit"),
                                        },
                                        UID: sdk.String("repudiandae"),
                                    },
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(151641),
                                            Currency: sdk.String("similique"),
                                        },
                                        CatalogObjectID: sdk.String("repudiandae"),
                                        CatalogVersion: sdk.Int64(829393),
                                        Name: sdk.String("Candace Orn"),
                                        SourceModifierUID: sdk.String("ea"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(199180),
                                            Currency: sdk.String("impedit"),
                                        },
                                        UID: sdk.String("eos"),
                                    },
                                },
                                SourceLineItemUID: sdk.String("praesentium"),
                                TotalDiscountMoney: &shared.Money{
                                    Amount: sdk.Int64(851315),
                                    Currency: sdk.String("eaque"),
                                },
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(277015),
                                    Currency: sdk.String("aut"),
                                },
                                TotalTaxMoney: &shared.Money{
                                    Amount: sdk.Int64(755026),
                                    Currency: sdk.String("vel"),
                                },
                                UID: sdk.String("perspiciatis"),
                                VariationName: sdk.String("id"),
                                VariationTotalPriceMoney: &shared.Money{
                                    Amount: sdk.Int64(229656),
                                    Currency: sdk.String("pariatur"),
                                },
                            },
                            shared.OrderReturnLineItem{
                                AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                    shared.OrderLineItemAppliedDiscount{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(32623),
                                            Currency: sdk.String("voluptas"),
                                        },
                                        DiscountUID: "hic",
                                        UID: sdk.String("ea"),
                                    },
                                    shared.OrderLineItemAppliedDiscount{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(884761),
                                            Currency: sdk.String("soluta"),
                                        },
                                        DiscountUID: "at",
                                        UID: sdk.String("nostrum"),
                                    },
                                    shared.OrderLineItemAppliedDiscount{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(642670),
                                            Currency: sdk.String("fugiat"),
                                        },
                                        DiscountUID: "quam",
                                        UID: sdk.String("vero"),
                                    },
                                },
                                AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(494158),
                                            Currency: sdk.String("neque"),
                                        },
                                        TaxUID: "provident",
                                        UID: sdk.String("dolore"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(967531),
                                            Currency: sdk.String("dolores"),
                                        },
                                        TaxUID: "corporis",
                                        UID: sdk.String("repellat"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(404661),
                                            Currency: sdk.String("ratione"),
                                        },
                                        TaxUID: "tempora",
                                        UID: sdk.String("rerum"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(191655),
                                            Currency: sdk.String("quam"),
                                        },
                                        TaxUID: "dolorem",
                                        UID: sdk.String("accusantium"),
                                    },
                                },
                                BasePriceMoney: &shared.Money{
                                    Amount: sdk.Int64(496078),
                                    Currency: sdk.String("inventore"),
                                },
                                CatalogObjectID: sdk.String("numquam"),
                                CatalogVersion: sdk.Int64(929429),
                                GrossReturnMoney: &shared.Money{
                                    Amount: sdk.Int64(416171),
                                    Currency: sdk.String("soluta"),
                                },
                                ItemType: sdk.String("recusandae"),
                                Name: sdk.String("Roosevelt Ebert V"),
                                Note: sdk.String("impedit"),
                                Quantity: "vel",
                                QuantityUnit: &shared.OrderQuantityUnit{
                                    CatalogVersion: sdk.Int64(312298),
                                    MeasurementUnit: &shared.MeasurementUnit{
                                        AreaUnit: sdk.String("quibusdam"),
                                        CustomUnit: &shared.MeasurementUnitCustom{
                                            Abbreviation: "dolorem",
                                            Name: "Wanda Pagac",
                                        },
                                        GenericUnit: sdk.String("natus"),
                                        LengthUnit: sdk.String("provident"),
                                        TimeUnit: sdk.String("officia"),
                                        Type: sdk.String("aliquid"),
                                        VolumeUnit: sdk.String("recusandae"),
                                        WeightUnit: sdk.String("voluptas"),
                                    },
                                    Precision: sdk.Int64(891799),
                                },
                                ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(680461),
                                            Currency: sdk.String("earum"),
                                        },
                                        CatalogObjectID: sdk.String("sapiente"),
                                        CatalogVersion: sdk.Int64(79187),
                                        Name: sdk.String("Gail Aufderhar"),
                                        SourceModifierUID: sdk.String("natus"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(264328),
                                            Currency: sdk.String("ullam"),
                                        },
                                        UID: sdk.String("voluptatibus"),
                                    },
                                    shared.OrderReturnLineItemModifier{
                                        BasePriceMoney: &shared.Money{
                                            Amount: sdk.Int64(363944),
                                            Currency: sdk.String("dolor"),
                                        },
                                        CatalogObjectID: sdk.String("quam"),
                                        CatalogVersion: sdk.Int64(278459),
                                        Name: sdk.String("Laverne Weissnat"),
                                        SourceModifierUID: sdk.String("quasi"),
                                        TotalPriceMoney: &shared.Money{
                                            Amount: sdk.Int64(62862),
                                            Currency: sdk.String("sint"),
                                        },
                                        UID: sdk.String("praesentium"),
                                    },
                                },
                                SourceLineItemUID: sdk.String("quia"),
                                TotalDiscountMoney: &shared.Money{
                                    Amount: sdk.Int64(175668),
                                    Currency: sdk.String("illo"),
                                },
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(995538),
                                    Currency: sdk.String("iste"),
                                },
                                TotalTaxMoney: &shared.Money{
                                    Amount: sdk.Int64(730646),
                                    Currency: sdk.String("inventore"),
                                },
                                UID: sdk.String("tenetur"),
                                VariationName: sdk.String("nihil"),
                                VariationTotalPriceMoney: &shared.Money{
                                    Amount: sdk.Int64(856190),
                                    Currency: sdk.String("iste"),
                                },
                            },
                        },
                        ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                            shared.OrderReturnServiceCharge{
                                AmountMoney: &shared.Money{
                                    Amount: sdk.Int64(939103),
                                    Currency: sdk.String("a"),
                                },
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(921273),
                                    Currency: sdk.String("eum"),
                                },
                                AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(398098),
                                            Currency: sdk.String("blanditiis"),
                                        },
                                        TaxUID: "sed",
                                        UID: sdk.String("mollitia"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(793257),
                                            Currency: sdk.String("recusandae"),
                                        },
                                        TaxUID: "recusandae",
                                        UID: sdk.String("asperiores"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(740206),
                                            Currency: sdk.String("accusantium"),
                                        },
                                        TaxUID: "magnam",
                                        UID: sdk.String("reiciendis"),
                                    },
                                },
                                CalculationPhase: sdk.String("voluptatum"),
                                CatalogObjectID: sdk.String("maxime"),
                                CatalogVersion: sdk.Int64(321948),
                                Name: sdk.String("Norma Schmidt"),
                                Percentage: sdk.String("nam"),
                                SourceServiceChargeUID: sdk.String("saepe"),
                                Taxable: sdk.Bool(false),
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(652412),
                                    Currency: sdk.String("esse"),
                                },
                                TotalTaxMoney: &shared.Money{
                                    Amount: sdk.Int64(30679),
                                    Currency: sdk.String("blanditiis"),
                                },
                                UID: sdk.String("voluptates"),
                            },
                            shared.OrderReturnServiceCharge{
                                AmountMoney: &shared.Money{
                                    Amount: sdk.Int64(837314),
                                    Currency: sdk.String("corporis"),
                                },
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(483788),
                                    Currency: sdk.String("iste"),
                                },
                                AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(815395),
                                            Currency: sdk.String("velit"),
                                        },
                                        TaxUID: "quas",
                                        UID: sdk.String("veniam"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(849301),
                                            Currency: sdk.String("labore"),
                                        },
                                        TaxUID: "ea",
                                        UID: sdk.String("aperiam"),
                                    },
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(355233),
                                            Currency: sdk.String("cupiditate"),
                                        },
                                        TaxUID: "omnis",
                                        UID: sdk.String("quibusdam"),
                                    },
                                },
                                CalculationPhase: sdk.String("nostrum"),
                                CatalogObjectID: sdk.String("impedit"),
                                CatalogVersion: sdk.Int64(202175),
                                Name: sdk.String("Danielle McGlynn"),
                                Percentage: sdk.String("eum"),
                                SourceServiceChargeUID: sdk.String("facere"),
                                Taxable: sdk.Bool(false),
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(326707),
                                    Currency: sdk.String("ullam"),
                                },
                                TotalTaxMoney: &shared.Money{
                                    Amount: sdk.Int64(172691),
                                    Currency: sdk.String("accusantium"),
                                },
                                UID: sdk.String("error"),
                            },
                            shared.OrderReturnServiceCharge{
                                AmountMoney: &shared.Money{
                                    Amount: sdk.Int64(887276),
                                    Currency: sdk.String("perspiciatis"),
                                },
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(670281),
                                    Currency: sdk.String("eos"),
                                },
                                AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                    shared.OrderLineItemAppliedTax{
                                        AppliedMoney: &shared.Money{
                                            Amount: sdk.Int64(357941),
                                            Currency: sdk.String("neque"),
                                        },
                                        TaxUID: "facilis",
                                        UID: sdk.String("aliquid"),
                                    },
                                },
                                CalculationPhase: sdk.String("possimus"),
                                CatalogObjectID: sdk.String("molestiae"),
                                CatalogVersion: sdk.Int64(391682),
                                Name: sdk.String("Irma Larkin"),
                                Percentage: sdk.String("earum"),
                                SourceServiceChargeUID: sdk.String("similique"),
                                Taxable: sdk.Bool(false),
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(887188),
                                    Currency: sdk.String("ipsam"),
                                },
                                TotalTaxMoney: &shared.Money{
                                    Amount: sdk.Int64(956469),
                                    Currency: sdk.String("nulla"),
                                },
                                UID: sdk.String("dolore"),
                            },
                        },
                        ReturnTaxes: []shared.OrderReturnTax{
                            shared.OrderReturnTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(219117),
                                    Currency: sdk.String("perspiciatis"),
                                },
                                CatalogObjectID: sdk.String("voluptatibus"),
                                CatalogVersion: sdk.Int64(516518),
                                Name: sdk.String("Harold Gibson III"),
                                Percentage: sdk.String("in"),
                                Scope: sdk.String("quos"),
                                SourceTaxUID: sdk.String("reiciendis"),
                                Type: sdk.String("sunt"),
                                UID: sdk.String("dolor"),
                            },
                            shared.OrderReturnTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(786178),
                                    Currency: sdk.String("commodi"),
                                },
                                CatalogObjectID: sdk.String("laudantium"),
                                CatalogVersion: sdk.Int64(388033),
                                Name: sdk.String("Julian DuBuque"),
                                Percentage: sdk.String("eligendi"),
                                Scope: sdk.String("occaecati"),
                                SourceTaxUID: sdk.String("saepe"),
                                Type: sdk.String("illo"),
                                UID: sdk.String("esse"),
                            },
                            shared.OrderReturnTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(313717),
                                    Currency: sdk.String("reiciendis"),
                                },
                                CatalogObjectID: sdk.String("maiores"),
                                CatalogVersion: sdk.Int64(629421),
                                Name: sdk.String("William Johnston"),
                                Percentage: sdk.String("enim"),
                                Scope: sdk.String("corporis"),
                                SourceTaxUID: sdk.String("error"),
                                Type: sdk.String("soluta"),
                                UID: sdk.String("nihil"),
                            },
                        },
                        RoundingAdjustment: &shared.OrderRoundingAdjustment{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(146265),
                                Currency: sdk.String("debitis"),
                            },
                            Name: sdk.String("Cecil Kulas"),
                            UID: sdk.String("accusantium"),
                        },
                        SourceOrderID: sdk.String("consectetur"),
                        UID: sdk.String("sit"),
                    },
                },
                Rewards: []shared.OrderReward{
                    shared.OrderReward{
                        ID: "e18376c2-bede-4e76-b90e-d0c16a7ba478",
                        RewardTierID: "tempora",
                    },
                    shared.OrderReward{
                        ID: "04489f67-70ef-4048-891a-2ba25ee6c75a",
                        RewardTierID: "doloribus",
                    },
                    shared.OrderReward{
                        ID: "8a60a7ae-346e-4097-9e5a-fe60acaca645",
                        RewardTierID: "pariatur",
                    },
                    shared.OrderReward{
                        ID: "e9867551-a9cc-4e61-ac2c-79a39ae5a4d5",
                        RewardTierID: "id",
                    },
                },
                RoundingAdjustment: &shared.OrderRoundingAdjustment{
                    AmountMoney: &shared.Money{
                        Amount: sdk.Int64(387084),
                        Currency: sdk.String("nostrum"),
                    },
                    Name: sdk.String("Ricky Stehr"),
                    UID: sdk.String("ea"),
                },
                ServiceCharges: []shared.OrderServiceCharge{
                    shared.OrderServiceCharge{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(826808),
                            Currency: sdk.String("cupiditate"),
                        },
                        AppliedMoney: &shared.Money{
                            Amount: sdk.Int64(710936),
                            Currency: sdk.String("odio"),
                        },
                        AppliedTaxes: []shared.OrderLineItemAppliedTax{
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(569291),
                                    Currency: sdk.String("recusandae"),
                                },
                                TaxUID: "eos",
                                UID: sdk.String("facere"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(434940),
                                    Currency: sdk.String("delectus"),
                                },
                                TaxUID: "quod",
                                UID: sdk.String("tenetur"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(331814),
                                    Currency: sdk.String("ad"),
                                },
                                TaxUID: "esse",
                                UID: sdk.String("nisi"),
                            },
                            shared.OrderLineItemAppliedTax{
                                AppliedMoney: &shared.Money{
                                    Amount: sdk.Int64(175103),
                                    Currency: sdk.String("sint"),
                                },
                                TaxUID: "nulla",
                                UID: sdk.String("harum"),
                            },
                        },
                        CalculationPhase: sdk.String("corrupti"),
                        CatalogObjectID: sdk.String("quam"),
                        CatalogVersion: sdk.Int64(323318),
                        Metadata: map[string]string{
                            "sequi": "culpa",
                            "blanditiis": "perspiciatis",
                            "sit": "fugit",
                            "deleniti": "dolores",
                        },
                        Name: sdk.String("Jon Boyer"),
                        Percentage: sdk.String("illo"),
                        Taxable: sdk.Bool(false),
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(759839),
                            Currency: sdk.String("sapiente"),
                        },
                        TotalTaxMoney: &shared.Money{
                            Amount: sdk.Int64(435455),
                            Currency: sdk.String("molestiae"),
                        },
                        Type: sdk.String("iste"),
                        UID: sdk.String("iure"),
                    },
                },
                Source: &shared.OrderSource{
                    Name: sdk.String("Dallas Fadel"),
                },
                State: sdk.String("aspernatur"),
                Taxes: []shared.OrderLineItemTax{
                    shared.OrderLineItemTax{
                        AppliedMoney: &shared.Money{
                            Amount: sdk.Int64(811745),
                            Currency: sdk.String("ab"),
                        },
                        AutoApplied: sdk.Bool(false),
                        CatalogObjectID: sdk.String("praesentium"),
                        CatalogVersion: sdk.Int64(996947),
                        Metadata: map[string]string{
                            "rem": "beatae",
                            "necessitatibus": "provident",
                        },
                        Name: sdk.String("Lowell Schimmel"),
                        Percentage: sdk.String("reiciendis"),
                        Scope: sdk.String("esse"),
                        Type: sdk.String("sunt"),
                        UID: sdk.String("autem"),
                    },
                    shared.OrderLineItemTax{
                        AppliedMoney: &shared.Money{
                            Amount: sdk.Int64(396784),
                            Currency: sdk.String("accusantium"),
                        },
                        AutoApplied: sdk.Bool(false),
                        CatalogObjectID: sdk.String("aperiam"),
                        CatalogVersion: sdk.Int64(823876),
                        Metadata: map[string]string{
                            "doloremque": "officiis",
                            "dolor": "harum",
                            "deserunt": "laboriosam",
                        },
                        Name: sdk.String("Marianne Jakubowski"),
                        Percentage: sdk.String("alias"),
                        Scope: sdk.String("sint"),
                        Type: sdk.String("assumenda"),
                        UID: sdk.String("totam"),
                    },
                },
                Tenders: []shared.Tender{
                    shared.Tender{
                        AdditionalRecipients: []shared.AdditionalRecipient{
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(747067),
                                    Currency: sdk.String("ad"),
                                },
                                Description: sdk.String("adipisci"),
                                LocationID: "rerum",
                                ReceivableID: sdk.String("nesciunt"),
                            },
                        },
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(177628),
                            Currency: sdk.String("placeat"),
                        },
                        CardDetails: &shared.TenderCardDetails{
                            Card: &shared.Card{
                                BillingAddress: &shared.Address{
                                    AddressLine1: sdk.String("blanditiis"),
                                    AddressLine2: sdk.String("cumque"),
                                    AddressLine3: sdk.String("dignissimos"),
                                    AdministrativeDistrictLevel1: sdk.String("placeat"),
                                    AdministrativeDistrictLevel2: sdk.String("ratione"),
                                    AdministrativeDistrictLevel3: sdk.String("eligendi"),
                                    Country: sdk.String("Kiribati"),
                                    FirstName: sdk.String("Austyn"),
                                    LastName: sdk.String("Abbott"),
                                    Locality: sdk.String("accusamus"),
                                    Organization: sdk.String("inventore"),
                                    PostalCode: sdk.String("42850"),
                                    Sublocality: sdk.String("nostrum"),
                                    Sublocality2: sdk.String("quisquam"),
                                    Sublocality3: sdk.String("expedita"),
                                },
                                Bin: sdk.String("labore"),
                                CardBrand: sdk.String("quidem"),
                                CardType: sdk.String("recusandae"),
                                CardholderName: sdk.String("illum"),
                                CustomerID: sdk.String("itaque"),
                                Enabled: sdk.Bool(false),
                                ExpMonth: sdk.Int64(993559),
                                ExpYear: sdk.Int64(226671),
                                Fingerprint: sdk.String("quod"),
                                ID: sdk.String("127c3909-9552-4825-8dcb-bcd3b121b88c"),
                                Last4: sdk.String("beatae"),
                                PrepaidType: sdk.String("officiis"),
                                ReferenceID: sdk.String("saepe"),
                                Version: sdk.Int64(326048),
                            },
                            EntryMethod: sdk.String("saepe"),
                            Status: sdk.String("voluptate"),
                        },
                        CashDetails: &shared.TenderCashDetails{
                            BuyerTenderedMoney: &shared.Money{
                                Amount: sdk.Int64(627864),
                                Currency: sdk.String("doloremque"),
                            },
                            ChangeBackMoney: &shared.Money{
                                Amount: sdk.Int64(419641),
                                Currency: sdk.String("quasi"),
                            },
                        },
                        CreatedAt: sdk.String("adipisci"),
                        CustomerID: sdk.String("excepturi"),
                        ID: sdk.String("1cc8fa0b-7d17-4649-a6b0-cf5e6cb6ebab"),
                        LocationID: sdk.String("debitis"),
                        Note: sdk.String("quis"),
                        PaymentID: sdk.String("accusamus"),
                        ProcessingFeeMoney: &shared.Money{
                            Amount: sdk.Int64(39686),
                            Currency: sdk.String("tempore"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(622315),
                            Currency: sdk.String("cupiditate"),
                        },
                        TransactionID: sdk.String("tenetur"),
                        Type: "velit",
                    },
                    shared.Tender{
                        AdditionalRecipients: []shared.AdditionalRecipient{
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(73019),
                                    Currency: sdk.String("amet"),
                                },
                                Description: sdk.String("enim"),
                                LocationID: "quas",
                                ReceivableID: sdk.String("nulla"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(390215),
                                    Currency: sdk.String("deserunt"),
                                },
                                Description: sdk.String("corrupti"),
                                LocationID: "reprehenderit",
                                ReceivableID: sdk.String("nam"),
                            },
                            shared.AdditionalRecipient{
                                AmountMoney: shared.Money{
                                    Amount: sdk.Int64(745589),
                                    Currency: sdk.String("odio"),
                                },
                                Description: sdk.String("est"),
                                LocationID: "voluptates",
                                ReceivableID: sdk.String("minus"),
                            },
                        },
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(692115),
                            Currency: sdk.String("recusandae"),
                        },
                        CardDetails: &shared.TenderCardDetails{
                            Card: &shared.Card{
                                BillingAddress: &shared.Address{
                                    AddressLine1: sdk.String("ullam"),
                                    AddressLine2: sdk.String("eum"),
                                    AddressLine3: sdk.String("iste"),
                                    AdministrativeDistrictLevel1: sdk.String("at"),
                                    AdministrativeDistrictLevel2: sdk.String("voluptate"),
                                    AdministrativeDistrictLevel3: sdk.String("alias"),
                                    Country: sdk.String("Serbia"),
                                    FirstName: sdk.String("Melvina"),
                                    LastName: sdk.String("Adams"),
                                    Locality: sdk.String("suscipit"),
                                    Organization: sdk.String("cupiditate"),
                                    PostalCode: sdk.String("04955-6221"),
                                    Sublocality: sdk.String("incidunt"),
                                    Sublocality2: sdk.String("nostrum"),
                                    Sublocality3: sdk.String("explicabo"),
                                },
                                Bin: sdk.String("culpa"),
                                CardBrand: sdk.String("sint"),
                                CardType: sdk.String("voluptatibus"),
                                CardholderName: sdk.String("ipsa"),
                                CustomerID: sdk.String("quasi"),
                                Enabled: sdk.Bool(false),
                                ExpMonth: sdk.Int64(958965),
                                ExpYear: sdk.Int64(210237),
                                Fingerprint: sdk.String("quaerat"),
                                ID: sdk.String("42c61be1-33ba-4cde-932b-6526f862853f"),
                                Last4: sdk.String("eveniet"),
                                PrepaidType: sdk.String("eos"),
                                ReferenceID: sdk.String("laudantium"),
                                Version: sdk.Int64(315164),
                            },
                            EntryMethod: sdk.String("provident"),
                            Status: sdk.String("maxime"),
                        },
                        CashDetails: &shared.TenderCashDetails{
                            BuyerTenderedMoney: &shared.Money{
                                Amount: sdk.Int64(887693),
                                Currency: sdk.String("non"),
                            },
                            ChangeBackMoney: &shared.Money{
                                Amount: sdk.Int64(166302),
                                Currency: sdk.String("consequuntur"),
                            },
                        },
                        CreatedAt: sdk.String("quia"),
                        CustomerID: sdk.String("ratione"),
                        ID: sdk.String("1fe6664c-41d2-4fba-9cba-069b8d291beb"),
                        LocationID: sdk.String("blanditiis"),
                        Note: sdk.String("quae"),
                        PaymentID: sdk.String("eaque"),
                        ProcessingFeeMoney: &shared.Money{
                            Amount: sdk.Int64(665338),
                            Currency: sdk.String("sed"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(679842),
                            Currency: sdk.String("laborum"),
                        },
                        TransactionID: sdk.String("atque"),
                        Type: "molestiae",
                    },
                },
                TotalDiscountMoney: &shared.Money{
                    Amount: sdk.Int64(302334),
                    Currency: sdk.String("perspiciatis"),
                },
                TotalMoney: &shared.Money{
                    Amount: sdk.Int64(290392),
                    Currency: sdk.String("esse"),
                },
                TotalServiceChargeMoney: &shared.Money{
                    Amount: sdk.Int64(601704),
                    Currency: sdk.String("recusandae"),
                },
                TotalTaxMoney: &shared.Money{
                    Amount: sdk.Int64(842306),
                    Currency: sdk.String("assumenda"),
                },
                TotalTipMoney: &shared.Money{
                    Amount: sdk.Int64(265549),
                    Currency: sdk.String("maiores"),
                },
                UpdatedAt: sdk.String("cumque"),
                Version: sdk.Int64(939233),
            },
        },
        OrderID: "ducimus",
    }, operations.PutV2OrdersOrderIDSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrderResponse != nil {
        // handle response
    }
}
```
