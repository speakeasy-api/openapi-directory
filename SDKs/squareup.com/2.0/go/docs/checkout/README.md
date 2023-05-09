# Checkout

### Available Operations

* [CreateCheckout](#createcheckout) - CreateCheckout

## CreateCheckout

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com.

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
    res, err := s.Checkout.CreateCheckout(ctx, operations.CreateCheckoutRequest{
        CreateCheckoutRequest: shared.CreateCheckoutRequest{
            AdditionalRecipients: []shared.ChargeRequestAdditionalRecipient{
                shared.ChargeRequestAdditionalRecipient{
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(343454),
                        Currency: sdk.String("sequi"),
                    },
                    Description: "voluptatum",
                    LocationID: "quasi",
                },
                shared.ChargeRequestAdditionalRecipient{
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(622566),
                        Currency: sdk.String("nobis"),
                    },
                    Description: "tempora",
                    LocationID: "voluptate",
                },
            },
            AskForShippingAddress: sdk.Bool(false),
            IdempotencyKey: "eius",
            MerchantSupportEmail: sdk.String("expedita"),
            Note: sdk.String("aperiam"),
            Order: shared.CreateOrderRequest{
                IdempotencyKey: sdk.String("voluptates"),
                Order: &shared.Order{
                    ClosedAt: sdk.String("possimus"),
                    CreatedAt: sdk.String("fugit"),
                    CustomerID: sdk.String("voluptatem"),
                    Discounts: []shared.OrderLineItemDiscount{
                        shared.OrderLineItemDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(360635),
                                Currency: sdk.String("ea"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(179906),
                                Currency: sdk.String("aliquam"),
                            },
                            CatalogObjectID: sdk.String("blanditiis"),
                            CatalogVersion: sdk.Int64(943063),
                            Metadata: map[string]string{
                                "asperiores": "autem",
                                "nesciunt": "cupiditate",
                                "animi": "provident",
                                "beatae": "ipsa",
                            },
                            Name: sdk.String("Alton Shields"),
                            Percentage: sdk.String("tempore"),
                            PricingRuleID: sdk.String("commodi"),
                            RewardIds: []string{
                                "suscipit",
                            },
                            Scope: sdk.String("voluptate"),
                            Type: sdk.String("nisi"),
                            UID: sdk.String("aliquid"),
                        },
                        shared.OrderLineItemDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(589712),
                                Currency: sdk.String("laboriosam"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(881568),
                                Currency: sdk.String("ab"),
                            },
                            CatalogObjectID: sdk.String("itaque"),
                            CatalogVersion: sdk.Int64(790305),
                            Metadata: map[string]string{
                                "alias": "qui",
                            },
                            Name: sdk.String("Evelyn Predovic"),
                            Percentage: sdk.String("exercitationem"),
                            PricingRuleID: sdk.String("illum"),
                            RewardIds: []string{
                                "unde",
                                "similique",
                                "eligendi",
                            },
                            Scope: sdk.String("tempore"),
                            Type: sdk.String("amet"),
                            UID: sdk.String("debitis"),
                        },
                        shared.OrderLineItemDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(751381),
                                Currency: sdk.String("asperiores"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(836053),
                                Currency: sdk.String("id"),
                            },
                            CatalogObjectID: sdk.String("atque"),
                            CatalogVersion: sdk.Int64(845365),
                            Metadata: map[string]string{
                                "quo": "veniam",
                            },
                            Name: sdk.String("Ramona Terry I"),
                            Percentage: sdk.String("alias"),
                            PricingRuleID: sdk.String("doloremque"),
                            RewardIds: []string{
                                "perspiciatis",
                                "quam",
                            },
                            Scope: sdk.String("atque"),
                            Type: sdk.String("officia"),
                            UID: sdk.String("ex"),
                        },
                        shared.OrderLineItemDiscount{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(101770),
                                Currency: sdk.String("a"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(673010),
                                Currency: sdk.String("veritatis"),
                            },
                            CatalogObjectID: sdk.String("quod"),
                            CatalogVersion: sdk.Int64(951103),
                            Metadata: map[string]string{
                                "accusantium": "commodi",
                            },
                            Name: sdk.String("Jimmie West"),
                            Percentage: sdk.String("quod"),
                            PricingRuleID: sdk.String("vitae"),
                            RewardIds: []string{
                                "reiciendis",
                                "quod",
                                "voluptate",
                                "inventore",
                            },
                            Scope: sdk.String("facere"),
                            Type: sdk.String("maxime"),
                            UID: sdk.String("fuga"),
                        },
                    },
                    Fulfillments: []shared.OrderFulfillment{
                        shared.OrderFulfillment{
                            Metadata: map[string]string{
                                "consectetur": "maiores",
                                "sed": "animi",
                            },
                            PickupDetails: &shared.OrderFulfillmentPickupDetails{
                                AcceptedAt: sdk.String("sequi"),
                                AutoCompleteDuration: sdk.String("eligendi"),
                                CancelReason: sdk.String("voluptatum"),
                                CanceledAt: sdk.String("perferendis"),
                                CurbsidePickupDetails: &shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails{
                                    BuyerArrivedAt: sdk.String("laborum"),
                                    CurbsideDetails: sdk.String("omnis"),
                                },
                                ExpiredAt: sdk.String("nihil"),
                                ExpiresAt: sdk.String("tenetur"),
                                IsCurbsidePickup: sdk.Bool(false),
                                Note: sdk.String("sapiente"),
                                PickedUpAt: sdk.String("velit"),
                                PickupAt: sdk.String("adipisci"),
                                PickupWindowDuration: sdk.String("non"),
                                PlacedAt: sdk.String("optio"),
                                PrepTimeDuration: sdk.String("illum"),
                                ReadyAt: sdk.String("at"),
                                Recipient: &shared.OrderFulfillmentRecipient{
                                    Address: &shared.Address{
                                        AddressLine1: sdk.String("tenetur"),
                                        AddressLine2: sdk.String("molestias"),
                                        AddressLine3: sdk.String("ipsam"),
                                        AdministrativeDistrictLevel1: sdk.String("esse"),
                                        AdministrativeDistrictLevel2: sdk.String("laborum"),
                                        AdministrativeDistrictLevel3: sdk.String("perspiciatis"),
                                        Country: sdk.String("Turkmenistan"),
                                        FirstName: sdk.String("Hildegard"),
                                        LastName: sdk.String("Botsford"),
                                        Locality: sdk.String("quas"),
                                        Organization: sdk.String("odio"),
                                        PostalCode: sdk.String("74661"),
                                        Sublocality: sdk.String("et"),
                                        Sublocality2: sdk.String("nulla"),
                                        Sublocality3: sdk.String("magni"),
                                    },
                                    CustomerID: sdk.String("natus"),
                                    DisplayName: sdk.String("illum"),
                                    EmailAddress: sdk.String("a"),
                                    PhoneNumber: sdk.String("impedit"),
                                },
                                RejectedAt: sdk.String("unde"),
                                ScheduleType: sdk.String("ut"),
                            },
                            ShipmentDetails: &shared.OrderFulfillmentShipmentDetails{
                                CancelReason: sdk.String("facere"),
                                CanceledAt: sdk.String("voluptas"),
                                Carrier: sdk.String("doloribus"),
                                ExpectedShippedAt: sdk.String("recusandae"),
                                FailedAt: sdk.String("quisquam"),
                                FailureReason: sdk.String("facere"),
                                InProgressAt: sdk.String("dignissimos"),
                                PackagedAt: sdk.String("iste"),
                                PlacedAt: sdk.String("provident"),
                                Recipient: &shared.OrderFulfillmentRecipient{
                                    Address: &shared.Address{
                                        AddressLine1: sdk.String("dolor"),
                                        AddressLine2: sdk.String("sint"),
                                        AddressLine3: sdk.String("aperiam"),
                                        AdministrativeDistrictLevel1: sdk.String("eaque"),
                                        AdministrativeDistrictLevel2: sdk.String("eum"),
                                        AdministrativeDistrictLevel3: sdk.String("laboriosam"),
                                        Country: sdk.String("Pakistan"),
                                        FirstName: sdk.String("Helmer"),
                                        LastName: sdk.String("Shields"),
                                        Locality: sdk.String("explicabo"),
                                        Organization: sdk.String("fugiat"),
                                        PostalCode: sdk.String("00233"),
                                        Sublocality: sdk.String("velit"),
                                        Sublocality2: sdk.String("ratione"),
                                        Sublocality3: sdk.String("quas"),
                                    },
                                    CustomerID: sdk.String("maxime"),
                                    DisplayName: sdk.String("recusandae"),
                                    EmailAddress: sdk.String("cumque"),
                                    PhoneNumber: sdk.String("doloremque"),
                                },
                                ShippedAt: sdk.String("totam"),
                                ShippingNote: sdk.String("iure"),
                                ShippingType: sdk.String("maiores"),
                                TrackingNumber: sdk.String("est"),
                                TrackingURL: sdk.String("fugit"),
                            },
                            State: sdk.String("veritatis"),
                            Type: sdk.String("necessitatibus"),
                            UID: sdk.String("iste"),
                        },
                    },
                    ID: sdk.String("152cb311-9167-4b8e-bc8d-b03408d6d364"),
                    LineItems: []shared.OrderLineItem{
                        shared.OrderLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(826797),
                                        Currency: sdk.String("dolore"),
                                    },
                                    DiscountUID: "enim",
                                    UID: sdk.String("ullam"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(598193),
                                        Currency: sdk.String("alias"),
                                    },
                                    DiscountUID: "ex",
                                    UID: sdk.String("quibusdam"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(116867),
                                        Currency: sdk.String("quia"),
                                    },
                                    DiscountUID: "commodi",
                                    UID: sdk.String("neque"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(843659),
                                        Currency: sdk.String("numquam"),
                                    },
                                    DiscountUID: "rem",
                                    UID: sdk.String("officiis"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(206451),
                                        Currency: sdk.String("corporis"),
                                    },
                                    TaxUID: "quod",
                                    UID: sdk.String("dolores"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(808050),
                                        Currency: sdk.String("excepturi"),
                                    },
                                    TaxUID: "recusandae",
                                    UID: sdk.String("quos"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(115561),
                                        Currency: sdk.String("sapiente"),
                                    },
                                    TaxUID: "ipsum",
                                    UID: sdk.String("consequatur"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(742899),
                                Currency: sdk.String("necessitatibus"),
                            },
                            CatalogObjectID: sdk.String("sequi"),
                            CatalogVersion: sdk.Int64(925847),
                            GrossSalesMoney: &shared.Money{
                                Amount: sdk.Int64(286329),
                                Currency: sdk.String("adipisci"),
                            },
                            ItemType: sdk.String("magni"),
                            Metadata: map[string]string{
                                "dolores": "illum",
                            },
                            Modifiers: []shared.OrderLineItemModifier{
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(168976),
                                        Currency: sdk.String("beatae"),
                                    },
                                    CatalogObjectID: sdk.String("aliquid"),
                                    CatalogVersion: sdk.Int64(321697),
                                    Name: sdk.String("Ms. Kristin Hane"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(311247),
                                        Currency: sdk.String("quasi"),
                                    },
                                    UID: sdk.String("rem"),
                                },
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(493579),
                                        Currency: sdk.String("doloremque"),
                                    },
                                    CatalogObjectID: sdk.String("assumenda"),
                                    CatalogVersion: sdk.Int64(590969),
                                    Name: sdk.String("Aaron Bode"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(645609),
                                        Currency: sdk.String("repellendus"),
                                    },
                                    UID: sdk.String("consequatur"),
                                },
                            },
                            Name: sdk.String("Sharon Ruecker"),
                            Note: sdk.String("cumque"),
                            PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                                BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("et"),
                                        DiscountUID: sdk.String("beatae"),
                                        UID: sdk.String("id"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("consequatur"),
                                        DiscountUID: sdk.String("quos"),
                                        UID: sdk.String("ratione"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("iure"),
                                        DiscountUID: sdk.String("tempora"),
                                        UID: sdk.String("eos"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("natus"),
                                        DiscountUID: sdk.String("voluptatem"),
                                        UID: sdk.String("suscipit"),
                                    },
                                },
                                BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("facilis"),
                                        TaxUID: sdk.String("laudantium"),
                                        UID: sdk.String("ullam"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("aut"),
                                        TaxUID: sdk.String("quia"),
                                        UID: sdk.String("officia"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("quaerat"),
                                        TaxUID: sdk.String("corporis"),
                                        UID: sdk.String("accusamus"),
                                    },
                                },
                            },
                            Quantity: "iusto",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(958533),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("esse"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "neque",
                                        Name: "Devin Lakin",
                                    },
                                    GenericUnit: sdk.String("officiis"),
                                    LengthUnit: sdk.String("sequi"),
                                    TimeUnit: sdk.String("magni"),
                                    Type: sdk.String("voluptatem"),
                                    VolumeUnit: sdk.String("est"),
                                    WeightUnit: sdk.String("amet"),
                                },
                                Precision: sdk.Int64(84211),
                            },
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(621810),
                                Currency: sdk.String("voluptatibus"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(258140),
                                Currency: sdk.String("rerum"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(678695),
                                Currency: sdk.String("quibusdam"),
                            },
                            UID: sdk.String("earum"),
                            VariationName: sdk.String("excepturi"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(256567),
                                Currency: sdk.String("molestiae"),
                            },
                        },
                        shared.OrderLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(621883),
                                        Currency: sdk.String("animi"),
                                    },
                                    DiscountUID: "voluptatum",
                                    UID: sdk.String("aliquid"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(469384),
                                        Currency: sdk.String("facilis"),
                                    },
                                    DiscountUID: "optio",
                                    UID: sdk.String("incidunt"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(178201),
                                        Currency: sdk.String("magnam"),
                                    },
                                    DiscountUID: "dolores",
                                    UID: sdk.String("aliquid"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(431843),
                                        Currency: sdk.String("vel"),
                                    },
                                    DiscountUID: "ad",
                                    UID: sdk.String("quos"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(383381),
                                        Currency: sdk.String("quibusdam"),
                                    },
                                    TaxUID: "fugiat",
                                    UID: sdk.String("impedit"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(632939),
                                Currency: sdk.String("atque"),
                            },
                            CatalogObjectID: sdk.String("voluptates"),
                            CatalogVersion: sdk.Int64(979325),
                            GrossSalesMoney: &shared.Money{
                                Amount: sdk.Int64(366275),
                                Currency: sdk.String("illo"),
                            },
                            ItemType: sdk.String("doloribus"),
                            Metadata: map[string]string{
                                "expedita": "modi",
                                "cumque": "ipsam",
                                "occaecati": "ipsum",
                                "accusamus": "quisquam",
                            },
                            Modifiers: []shared.OrderLineItemModifier{
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(144240),
                                        Currency: sdk.String("quo"),
                                    },
                                    CatalogObjectID: sdk.String("temporibus"),
                                    CatalogVersion: sdk.Int64(652092),
                                    Name: sdk.String("Marty Beer"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(464878),
                                        Currency: sdk.String("similique"),
                                    },
                                    UID: sdk.String("delectus"),
                                },
                            },
                            Name: sdk.String("Irving Rohan"),
                            Note: sdk.String("aut"),
                            PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                                BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("tenetur"),
                                        DiscountUID: sdk.String("incidunt"),
                                        UID: sdk.String("numquam"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("corrupti"),
                                        DiscountUID: sdk.String("similique"),
                                        UID: sdk.String("dolore"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("esse"),
                                        DiscountUID: sdk.String("reiciendis"),
                                        UID: sdk.String("iste"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("amet"),
                                        DiscountUID: sdk.String("occaecati"),
                                        UID: sdk.String("aut"),
                                    },
                                },
                                BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("minima"),
                                        TaxUID: sdk.String("quos"),
                                        UID: sdk.String("blanditiis"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("quas"),
                                        TaxUID: sdk.String("voluptatem"),
                                        UID: sdk.String("provident"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("quas"),
                                        TaxUID: sdk.String("ipsum"),
                                        UID: sdk.String("vero"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("fuga"),
                                        TaxUID: sdk.String("facilis"),
                                        UID: sdk.String("maiores"),
                                    },
                                },
                            },
                            Quantity: "error",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(926119),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("a"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "consectetur",
                                        Name: "Jan Senger",
                                    },
                                    GenericUnit: sdk.String("delectus"),
                                    LengthUnit: sdk.String("odio"),
                                    TimeUnit: sdk.String("voluptatibus"),
                                    Type: sdk.String("aut"),
                                    VolumeUnit: sdk.String("quam"),
                                    WeightUnit: sdk.String("omnis"),
                                },
                                Precision: sdk.Int64(626676),
                            },
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(989089),
                                Currency: sdk.String("modi"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(818101),
                                Currency: sdk.String("neque"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(340604),
                                Currency: sdk.String("in"),
                            },
                            UID: sdk.String("sed"),
                            VariationName: sdk.String("non"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(784059),
                                Currency: sdk.String("fugiat"),
                            },
                        },
                        shared.OrderLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(58463),
                                        Currency: sdk.String("reiciendis"),
                                    },
                                    DiscountUID: "labore",
                                    UID: sdk.String("vero"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(177651),
                                        Currency: sdk.String("quas"),
                                    },
                                    DiscountUID: "quasi",
                                    UID: sdk.String("architecto"),
                                },
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(509799),
                                        Currency: sdk.String("iusto"),
                                    },
                                    DiscountUID: "fugiat",
                                    UID: sdk.String("enim"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(512408),
                                        Currency: sdk.String("modi"),
                                    },
                                    TaxUID: "magnam",
                                    UID: sdk.String("accusamus"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(861823),
                                        Currency: sdk.String("repudiandae"),
                                    },
                                    TaxUID: "quibusdam",
                                    UID: sdk.String("praesentium"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(315465),
                                Currency: sdk.String("animi"),
                            },
                            CatalogObjectID: sdk.String("unde"),
                            CatalogVersion: sdk.Int64(61498),
                            GrossSalesMoney: &shared.Money{
                                Amount: sdk.Int64(430181),
                                Currency: sdk.String("nostrum"),
                            },
                            ItemType: sdk.String("eveniet"),
                            Metadata: map[string]string{
                                "ratione": "blanditiis",
                                "quidem": "illum",
                            },
                            Modifiers: []shared.OrderLineItemModifier{
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(809567),
                                        Currency: sdk.String("dolores"),
                                    },
                                    CatalogObjectID: sdk.String("consequatur"),
                                    CatalogVersion: sdk.Int64(201966),
                                    Name: sdk.String("Alison Hodkiewicz"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(490549),
                                        Currency: sdk.String("omnis"),
                                    },
                                    UID: sdk.String("omnis"),
                                },
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(144397),
                                        Currency: sdk.String("dolorem"),
                                    },
                                    CatalogObjectID: sdk.String("quidem"),
                                    CatalogVersion: sdk.Int64(476614),
                                    Name: sdk.String("Terry Fadel"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(284779),
                                        Currency: sdk.String("asperiores"),
                                    },
                                    UID: sdk.String("reprehenderit"),
                                },
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(644129),
                                        Currency: sdk.String("itaque"),
                                    },
                                    CatalogObjectID: sdk.String("et"),
                                    CatalogVersion: sdk.Int64(181267),
                                    Name: sdk.String("Marc Lang DVM"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(515153),
                                        Currency: sdk.String("aspernatur"),
                                    },
                                    UID: sdk.String("eligendi"),
                                },
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(917877),
                                        Currency: sdk.String("dicta"),
                                    },
                                    CatalogObjectID: sdk.String("inventore"),
                                    CatalogVersion: sdk.Int64(356256),
                                    Name: sdk.String("Carolyn Klocko"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(52497),
                                        Currency: sdk.String("exercitationem"),
                                    },
                                    UID: sdk.String("amet"),
                                },
                            },
                            Name: sdk.String("Allison Streich"),
                            Note: sdk.String("fuga"),
                            PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                                BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("cupiditate"),
                                        DiscountUID: sdk.String("at"),
                                        UID: sdk.String("doloribus"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("omnis"),
                                        DiscountUID: sdk.String("quam"),
                                        UID: sdk.String("exercitationem"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("voluptates"),
                                        DiscountUID: sdk.String("sequi"),
                                        UID: sdk.String("quis"),
                                    },
                                },
                                BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("vel"),
                                        TaxUID: sdk.String("rem"),
                                        UID: sdk.String("aliquid"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("aperiam"),
                                        TaxUID: sdk.String("perspiciatis"),
                                        UID: sdk.String("fugit"),
                                    },
                                },
                            },
                            Quantity: "itaque",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(600185),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("cumque"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "dolor",
                                        Name: "Jake Schiller",
                                    },
                                    GenericUnit: sdk.String("beatae"),
                                    LengthUnit: sdk.String("vitae"),
                                    TimeUnit: sdk.String("veritatis"),
                                    Type: sdk.String("facere"),
                                    VolumeUnit: sdk.String("earum"),
                                    WeightUnit: sdk.String("laborum"),
                                },
                                Precision: sdk.Int64(118020),
                            },
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(32737),
                                Currency: sdk.String("odit"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(398847),
                                Currency: sdk.String("pariatur"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(318450),
                                Currency: sdk.String("numquam"),
                            },
                            UID: sdk.String("architecto"),
                            VariationName: sdk.String("est"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(309852),
                                Currency: sdk.String("facere"),
                            },
                        },
                        shared.OrderLineItem{
                            AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                shared.OrderLineItemAppliedDiscount{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(607181),
                                        Currency: sdk.String("alias"),
                                    },
                                    DiscountUID: "sapiente",
                                    UID: sdk.String("officiis"),
                                },
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(156843),
                                        Currency: sdk.String("vitae"),
                                    },
                                    TaxUID: "odio",
                                    UID: sdk.String("quas"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(55407),
                                        Currency: sdk.String("distinctio"),
                                    },
                                    TaxUID: "placeat",
                                    UID: sdk.String("quod"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(756074),
                                        Currency: sdk.String("sit"),
                                    },
                                    TaxUID: "possimus",
                                    UID: sdk.String("distinctio"),
                                },
                            },
                            BasePriceMoney: &shared.Money{
                                Amount: sdk.Int64(714835),
                                Currency: sdk.String("assumenda"),
                            },
                            CatalogObjectID: sdk.String("illum"),
                            CatalogVersion: sdk.Int64(746834),
                            GrossSalesMoney: &shared.Money{
                                Amount: sdk.Int64(297325),
                                Currency: sdk.String("laudantium"),
                            },
                            ItemType: sdk.String("tempora"),
                            Metadata: map[string]string{
                                "doloremque": "corrupti",
                                "reiciendis": "facilis",
                            },
                            Modifiers: []shared.OrderLineItemModifier{
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(922915),
                                        Currency: sdk.String("amet"),
                                    },
                                    CatalogObjectID: sdk.String("natus"),
                                    CatalogVersion: sdk.Int64(68253),
                                    Name: sdk.String("Duane Prohaska II"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(500828),
                                        Currency: sdk.String("porro"),
                                    },
                                    UID: sdk.String("labore"),
                                },
                                shared.OrderLineItemModifier{
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(773889),
                                        Currency: sdk.String("ut"),
                                    },
                                    CatalogObjectID: sdk.String("earum"),
                                    CatalogVersion: sdk.Int64(355927),
                                    Name: sdk.String("Veronica McDermott"),
                                    TotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(683602),
                                        Currency: sdk.String("consectetur"),
                                    },
                                    UID: sdk.String("modi"),
                                },
                            },
                            Name: sdk.String("Dr. Rose Hoeger"),
                            Note: sdk.String("nobis"),
                            PricingBlocklists: &shared.OrderLineItemPricingBlocklists{
                                BlockedDiscounts: []shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                    shared.OrderLineItemPricingBlocklistsBlockedDiscount{
                                        DiscountCatalogObjectID: sdk.String("accusantium"),
                                        DiscountUID: sdk.String("consequatur"),
                                        UID: sdk.String("impedit"),
                                    },
                                },
                                BlockedTaxes: []shared.OrderLineItemPricingBlocklistsBlockedTax{
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("voluptate"),
                                        TaxUID: sdk.String("deleniti"),
                                        UID: sdk.String("est"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("et"),
                                        TaxUID: sdk.String("expedita"),
                                        UID: sdk.String("quibusdam"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("quos"),
                                        TaxUID: sdk.String("maiores"),
                                        UID: sdk.String("quidem"),
                                    },
                                    shared.OrderLineItemPricingBlocklistsBlockedTax{
                                        TaxCatalogObjectID: sdk.String("in"),
                                        TaxUID: sdk.String("culpa"),
                                        UID: sdk.String("doloremque"),
                                    },
                                },
                            },
                            Quantity: "fuga",
                            QuantityUnit: &shared.OrderQuantityUnit{
                                CatalogVersion: sdk.Int64(117546),
                                MeasurementUnit: &shared.MeasurementUnit{
                                    AreaUnit: sdk.String("architecto"),
                                    CustomUnit: &shared.MeasurementUnitCustom{
                                        Abbreviation: "suscipit",
                                        Name: "Erick Kulas",
                                    },
                                    GenericUnit: sdk.String("possimus"),
                                    LengthUnit: sdk.String("quaerat"),
                                    TimeUnit: sdk.String("aut"),
                                    Type: sdk.String("natus"),
                                    VolumeUnit: sdk.String("esse"),
                                    WeightUnit: sdk.String("delectus"),
                                },
                                Precision: sdk.Int64(644397),
                            },
                            TotalDiscountMoney: &shared.Money{
                                Amount: sdk.Int64(188081),
                                Currency: sdk.String("ipsa"),
                            },
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(895293),
                                Currency: sdk.String("iste"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(646776),
                                Currency: sdk.String("hic"),
                            },
                            UID: sdk.String("ducimus"),
                            VariationName: sdk.String("consequuntur"),
                            VariationTotalPriceMoney: &shared.Money{
                                Amount: sdk.Int64(370195),
                                Currency: sdk.String("libero"),
                            },
                        },
                    },
                    LocationID: "quia",
                    Metadata: map[string]string{
                        "dicta": "qui",
                        "explicabo": "consequatur",
                        "amet": "consequatur",
                    },
                    NetAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(852634),
                            Currency: sdk.String("voluptatum"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(245116),
                            Currency: sdk.String("hic"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(356485),
                            Currency: sdk.String("deserunt"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(931953),
                            Currency: sdk.String("distinctio"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(480295),
                            Currency: sdk.String("dignissimos"),
                        },
                    },
                    PricingOptions: &shared.OrderPricingOptions{
                        AutoApplyDiscounts: sdk.Bool(false),
                        AutoApplyTaxes: sdk.Bool(false),
                    },
                    ReferenceID: sdk.String("provident"),
                    Refunds: []shared.Refund{
                        shared.Refund{
                            AdditionalRecipients: []shared.AdditionalRecipient{
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(126367),
                                        Currency: sdk.String("odit"),
                                    },
                                    Description: sdk.String("vero"),
                                    LocationID: "deleniti",
                                    ReceivableID: sdk.String("optio"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(98805),
                                        Currency: sdk.String("repellat"),
                                    },
                                    Description: sdk.String("atque"),
                                    LocationID: "magnam",
                                    ReceivableID: sdk.String("perspiciatis"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(227017),
                                        Currency: sdk.String("corrupti"),
                                    },
                                    Description: sdk.String("sunt"),
                                    LocationID: "nemo",
                                    ReceivableID: sdk.String("delectus"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(848439),
                                        Currency: sdk.String("porro"),
                                    },
                                    Description: sdk.String("quaerat"),
                                    LocationID: "magni",
                                    ReceivableID: sdk.String("cumque"),
                                },
                            },
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(552687),
                                Currency: sdk.String("in"),
                            },
                            CreatedAt: sdk.String("commodi"),
                            ID: "c2c2dfb4-cfc1-4c76-a30f-841fb1bd23fd",
                            LocationID: "nam",
                            ProcessingFeeMoney: &shared.Money{
                                Amount: sdk.Int64(69184),
                                Currency: sdk.String("magnam"),
                            },
                            Reason: "pariatur",
                            Status: "expedita",
                            TenderID: "autem",
                            TransactionID: "tempore",
                        },
                        shared.Refund{
                            AdditionalRecipients: []shared.AdditionalRecipient{
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(342226),
                                        Currency: sdk.String("officia"),
                                    },
                                    Description: sdk.String("voluptas"),
                                    LocationID: "laudantium",
                                    ReceivableID: sdk.String("corporis"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(567241),
                                        Currency: sdk.String("natus"),
                                    },
                                    Description: sdk.String("deleniti"),
                                    LocationID: "necessitatibus",
                                    ReceivableID: sdk.String("aspernatur"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(173193),
                                        Currency: sdk.String("laborum"),
                                    },
                                    Description: sdk.String("vero"),
                                    LocationID: "eos",
                                    ReceivableID: sdk.String("voluptatem"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(838176),
                                        Currency: sdk.String("id"),
                                    },
                                    Description: sdk.String("quae"),
                                    LocationID: "commodi",
                                    ReceivableID: sdk.String("a"),
                                },
                            },
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(791282),
                                Currency: sdk.String("sed"),
                            },
                            CreatedAt: sdk.String("nam"),
                            ID: "271a289c-57e8-454e-9043-9d2224656946",
                            LocationID: "explicabo",
                            ProcessingFeeMoney: &shared.Money{
                                Amount: sdk.Int64(268173),
                                Currency: sdk.String("doloremque"),
                            },
                            Reason: "odio",
                            Status: "sit",
                            TenderID: "voluptatum",
                            TransactionID: "tempora",
                        },
                        shared.Refund{
                            AdditionalRecipients: []shared.AdditionalRecipient{
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(461853),
                                        Currency: sdk.String("dolorum"),
                                    },
                                    Description: sdk.String("libero"),
                                    LocationID: "ratione",
                                    ReceivableID: sdk.String("molestiae"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(761331),
                                        Currency: sdk.String("saepe"),
                                    },
                                    Description: sdk.String("maiores"),
                                    LocationID: "accusantium",
                                    ReceivableID: sdk.String("sed"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(180660),
                                        Currency: sdk.String("consequuntur"),
                                    },
                                    Description: sdk.String("quis"),
                                    LocationID: "vitae",
                                    ReceivableID: sdk.String("occaecati"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(290761),
                                        Currency: sdk.String("fugiat"),
                                    },
                                    Description: sdk.String("quidem"),
                                    LocationID: "exercitationem",
                                    ReceivableID: sdk.String("veniam"),
                                },
                            },
                            AmountMoney: shared.Money{
                                Amount: sdk.Int64(267988),
                                Currency: sdk.String("quasi"),
                            },
                            CreatedAt: sdk.String("quae"),
                            ID: "adc669af-90a2-46c7-8dc9-81f068981d6b",
                            LocationID: "nam",
                            ProcessingFeeMoney: &shared.Money{
                                Amount: sdk.Int64(225383),
                                Currency: sdk.String("adipisci"),
                            },
                            Reason: "minus",
                            Status: "hic",
                            TenderID: "similique",
                            TransactionID: "fuga",
                        },
                    },
                    ReturnAmounts: &shared.OrderMoneyAmounts{
                        DiscountMoney: &shared.Money{
                            Amount: sdk.Int64(233271),
                            Currency: sdk.String("labore"),
                        },
                        ServiceChargeMoney: &shared.Money{
                            Amount: sdk.Int64(515873),
                            Currency: sdk.String("cumque"),
                        },
                        TaxMoney: &shared.Money{
                            Amount: sdk.Int64(240027),
                            Currency: sdk.String("veritatis"),
                        },
                        TipMoney: &shared.Money{
                            Amount: sdk.Int64(721723),
                            Currency: sdk.String("voluptatibus"),
                        },
                        TotalMoney: &shared.Money{
                            Amount: sdk.Int64(301865),
                            Currency: sdk.String("aperiam"),
                        },
                    },
                    Returns: []shared.OrderReturn{
                        shared.OrderReturn{
                            ReturnAmounts: &shared.OrderMoneyAmounts{
                                DiscountMoney: &shared.Money{
                                    Amount: sdk.Int64(933456),
                                    Currency: sdk.String("necessitatibus"),
                                },
                                ServiceChargeMoney: &shared.Money{
                                    Amount: sdk.Int64(252854),
                                    Currency: sdk.String("doloribus"),
                                },
                                TaxMoney: &shared.Money{
                                    Amount: sdk.Int64(757824),
                                    Currency: sdk.String("sapiente"),
                                },
                                TipMoney: &shared.Money{
                                    Amount: sdk.Int64(73),
                                    Currency: sdk.String("impedit"),
                                },
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(254240),
                                    Currency: sdk.String("aspernatur"),
                                },
                            },
                            ReturnDiscounts: []shared.OrderReturnDiscount{
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(467947),
                                        Currency: sdk.String("voluptatum"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(968286),
                                        Currency: sdk.String("vitae"),
                                    },
                                    CatalogObjectID: sdk.String("ullam"),
                                    CatalogVersion: sdk.Int64(393630),
                                    Name: sdk.String("Melanie Dicki"),
                                    Percentage: sdk.String("est"),
                                    Scope: sdk.String("perferendis"),
                                    SourceDiscountUID: sdk.String("quibusdam"),
                                    Type: sdk.String("impedit"),
                                    UID: sdk.String("ducimus"),
                                },
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(392569),
                                        Currency: sdk.String("nisi"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(223358),
                                        Currency: sdk.String("fugit"),
                                    },
                                    CatalogObjectID: sdk.String("dolore"),
                                    CatalogVersion: sdk.Int64(804823),
                                    Name: sdk.String("Damon Bashirian"),
                                    Percentage: sdk.String("totam"),
                                    Scope: sdk.String("optio"),
                                    SourceDiscountUID: sdk.String("est"),
                                    Type: sdk.String("inventore"),
                                    UID: sdk.String("consequuntur"),
                                },
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(831037),
                                        Currency: sdk.String("sit"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(172042),
                                        Currency: sdk.String("enim"),
                                    },
                                    CatalogObjectID: sdk.String("aspernatur"),
                                    CatalogVersion: sdk.Int64(595585),
                                    Name: sdk.String("Viola Abernathy"),
                                    Percentage: sdk.String("possimus"),
                                    Scope: sdk.String("ipsam"),
                                    SourceDiscountUID: sdk.String("odio"),
                                    Type: sdk.String("fugit"),
                                    UID: sdk.String("aspernatur"),
                                },
                            },
                            ReturnLineItems: []shared.OrderReturnLineItem{
                                shared.OrderReturnLineItem{
                                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(506202),
                                                Currency: sdk.String("sint"),
                                            },
                                            DiscountUID: "exercitationem",
                                            UID: sdk.String("cum"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(532721),
                                                Currency: sdk.String("facilis"),
                                            },
                                            DiscountUID: "placeat",
                                            UID: sdk.String("reiciendis"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(170934),
                                                Currency: sdk.String("dolore"),
                                            },
                                            DiscountUID: "pariatur",
                                            UID: sdk.String("facilis"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(585445),
                                                Currency: sdk.String("nemo"),
                                            },
                                            DiscountUID: "natus",
                                            UID: sdk.String("nisi"),
                                        },
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(230594),
                                                Currency: sdk.String("dolor"),
                                            },
                                            TaxUID: "nostrum",
                                            UID: sdk.String("qui"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(948297),
                                                Currency: sdk.String("molestiae"),
                                            },
                                            TaxUID: "dolore",
                                            UID: sdk.String("ullam"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(245990),
                                                Currency: sdk.String("adipisci"),
                                            },
                                            TaxUID: "cupiditate",
                                            UID: sdk.String("occaecati"),
                                        },
                                    },
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(258036),
                                        Currency: sdk.String("fugiat"),
                                    },
                                    CatalogObjectID: sdk.String("molestiae"),
                                    CatalogVersion: sdk.Int64(556898),
                                    GrossReturnMoney: &shared.Money{
                                        Amount: sdk.Int64(834177),
                                        Currency: sdk.String("saepe"),
                                    },
                                    ItemType: sdk.String("amet"),
                                    Name: sdk.String("Cecil Tromp"),
                                    Note: sdk.String("corrupti"),
                                    Quantity: "cupiditate",
                                    QuantityUnit: &shared.OrderQuantityUnit{
                                        CatalogVersion: sdk.Int64(974724),
                                        MeasurementUnit: &shared.MeasurementUnit{
                                            AreaUnit: sdk.String("ullam"),
                                            CustomUnit: &shared.MeasurementUnitCustom{
                                                Abbreviation: "dolorum",
                                                Name: "Felipe Kirlin",
                                            },
                                            GenericUnit: sdk.String("commodi"),
                                            LengthUnit: sdk.String("fugit"),
                                            TimeUnit: sdk.String("ullam"),
                                            Type: sdk.String("ullam"),
                                            VolumeUnit: sdk.String("doloremque"),
                                            WeightUnit: sdk.String("est"),
                                        },
                                        Precision: sdk.Int64(184204),
                                    },
                                    ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(237189),
                                                Currency: sdk.String("totam"),
                                            },
                                            CatalogObjectID: sdk.String("qui"),
                                            CatalogVersion: sdk.Int64(648166),
                                            Name: sdk.String("Troy Leuschke"),
                                            SourceModifierUID: sdk.String("reiciendis"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(820462),
                                                Currency: sdk.String("odit"),
                                            },
                                            UID: sdk.String("consectetur"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(80998),
                                                Currency: sdk.String("minima"),
                                            },
                                            CatalogObjectID: sdk.String("facilis"),
                                            CatalogVersion: sdk.Int64(708360),
                                            Name: sdk.String("Mr. Charlie Hilpert"),
                                            SourceModifierUID: sdk.String("incidunt"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(908274),
                                                Currency: sdk.String("quae"),
                                            },
                                            UID: sdk.String("ea"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(989122),
                                                Currency: sdk.String("veniam"),
                                            },
                                            CatalogObjectID: sdk.String("quidem"),
                                            CatalogVersion: sdk.Int64(989526),
                                            Name: sdk.String("Rosie Waelchi"),
                                            SourceModifierUID: sdk.String("architecto"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(711275),
                                                Currency: sdk.String("quisquam"),
                                            },
                                            UID: sdk.String("praesentium"),
                                        },
                                    },
                                    SourceLineItemUID: sdk.String("facilis"),
                                    TotalDiscountMoney: &shared.Money{
                                        Amount: sdk.Int64(826478),
                                        Currency: sdk.String("repudiandae"),
                                    },
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(982447),
                                        Currency: sdk.String("ipsum"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(412128),
                                        Currency: sdk.String("vitae"),
                                    },
                                    UID: sdk.String("fugit"),
                                    VariationName: sdk.String("nam"),
                                    VariationTotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(401844),
                                        Currency: sdk.String("neque"),
                                    },
                                },
                                shared.OrderReturnLineItem{
                                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(176104),
                                                Currency: sdk.String("alias"),
                                            },
                                            DiscountUID: "ad",
                                            UID: sdk.String("a"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(816825),
                                                Currency: sdk.String("id"),
                                            },
                                            DiscountUID: "atque",
                                            UID: sdk.String("quaerat"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(45850),
                                                Currency: sdk.String("dignissimos"),
                                            },
                                            DiscountUID: "quam",
                                            UID: sdk.String("modi"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(683980),
                                                Currency: sdk.String("iure"),
                                            },
                                            DiscountUID: "deleniti",
                                            UID: sdk.String("officia"),
                                        },
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(674077),
                                                Currency: sdk.String("dolor"),
                                            },
                                            TaxUID: "ad",
                                            UID: sdk.String("illum"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(22966),
                                                Currency: sdk.String("molestias"),
                                            },
                                            TaxUID: "voluptas",
                                            UID: sdk.String("expedita"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(375378),
                                                Currency: sdk.String("maiores"),
                                            },
                                            TaxUID: "ea",
                                            UID: sdk.String("vel"),
                                        },
                                    },
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(965726),
                                        Currency: sdk.String("accusamus"),
                                    },
                                    CatalogObjectID: sdk.String("reiciendis"),
                                    CatalogVersion: sdk.Int64(7281),
                                    GrossReturnMoney: &shared.Money{
                                        Amount: sdk.Int64(148714),
                                        Currency: sdk.String("accusantium"),
                                    },
                                    ItemType: sdk.String("voluptates"),
                                    Name: sdk.String("Emilio Hahn"),
                                    Note: sdk.String("cum"),
                                    Quantity: "incidunt",
                                    QuantityUnit: &shared.OrderQuantityUnit{
                                        CatalogVersion: sdk.Int64(175455),
                                        MeasurementUnit: &shared.MeasurementUnit{
                                            AreaUnit: sdk.String("enim"),
                                            CustomUnit: &shared.MeasurementUnitCustom{
                                                Abbreviation: "nihil",
                                                Name: "Arturo Marks",
                                            },
                                            GenericUnit: sdk.String("corrupti"),
                                            LengthUnit: sdk.String("repellendus"),
                                            TimeUnit: sdk.String("cum"),
                                            Type: sdk.String("quibusdam"),
                                            VolumeUnit: sdk.String("est"),
                                            WeightUnit: sdk.String("commodi"),
                                        },
                                        Precision: sdk.Int64(630747),
                                    },
                                    ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(120432),
                                                Currency: sdk.String("recusandae"),
                                            },
                                            CatalogObjectID: sdk.String("sapiente"),
                                            CatalogVersion: sdk.Int64(661764),
                                            Name: sdk.String("Stephanie Moore"),
                                            SourceModifierUID: sdk.String("ullam"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(539703),
                                                Currency: sdk.String("doloribus"),
                                            },
                                            UID: sdk.String("pariatur"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(13655),
                                                Currency: sdk.String("similique"),
                                            },
                                            CatalogObjectID: sdk.String("iste"),
                                            CatalogVersion: sdk.Int64(908587),
                                            Name: sdk.String("Lynn Green"),
                                            SourceModifierUID: sdk.String("quam"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(859537),
                                                Currency: sdk.String("dolorem"),
                                            },
                                            UID: sdk.String("voluptates"),
                                        },
                                    },
                                    SourceLineItemUID: sdk.String("a"),
                                    TotalDiscountMoney: &shared.Money{
                                        Amount: sdk.Int64(19232),
                                        Currency: sdk.String("quaerat"),
                                    },
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(569872),
                                        Currency: sdk.String("aliquid"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(294650),
                                        Currency: sdk.String("voluptatem"),
                                    },
                                    UID: sdk.String("illum"),
                                    VariationName: sdk.String("laboriosam"),
                                    VariationTotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(632850),
                                        Currency: sdk.String("dicta"),
                                    },
                                },
                                shared.OrderReturnLineItem{
                                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(191425),
                                                Currency: sdk.String("vitae"),
                                            },
                                            DiscountUID: "quisquam",
                                            UID: sdk.String("atque"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(472190),
                                                Currency: sdk.String("culpa"),
                                            },
                                            DiscountUID: "temporibus",
                                            UID: sdk.String("a"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(322849),
                                                Currency: sdk.String("cupiditate"),
                                            },
                                            DiscountUID: "suscipit",
                                            UID: sdk.String("reiciendis"),
                                        },
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(961607),
                                                Currency: sdk.String("ab"),
                                            },
                                            TaxUID: "mollitia",
                                            UID: sdk.String("possimus"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(505908),
                                                Currency: sdk.String("neque"),
                                            },
                                            TaxUID: "quam",
                                            UID: sdk.String("animi"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(890379),
                                                Currency: sdk.String("voluptatum"),
                                            },
                                            TaxUID: "voluptatem",
                                            UID: sdk.String("quisquam"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(113808),
                                                Currency: sdk.String("cumque"),
                                            },
                                            TaxUID: "architecto",
                                            UID: sdk.String("sint"),
                                        },
                                    },
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(756936),
                                        Currency: sdk.String("occaecati"),
                                    },
                                    CatalogObjectID: sdk.String("quis"),
                                    CatalogVersion: sdk.Int64(734361),
                                    GrossReturnMoney: &shared.Money{
                                        Amount: sdk.Int64(637969),
                                        Currency: sdk.String("iste"),
                                    },
                                    ItemType: sdk.String("unde"),
                                    Name: sdk.String("Rick Kuphal"),
                                    Note: sdk.String("deserunt"),
                                    Quantity: "dolor",
                                    QuantityUnit: &shared.OrderQuantityUnit{
                                        CatalogVersion: sdk.Int64(940951),
                                        MeasurementUnit: &shared.MeasurementUnit{
                                            AreaUnit: sdk.String("iure"),
                                            CustomUnit: &shared.MeasurementUnitCustom{
                                                Abbreviation: "sint",
                                                Name: "Miss Cora McGlynn",
                                            },
                                            GenericUnit: sdk.String("dolor"),
                                            LengthUnit: sdk.String("voluptatum"),
                                            TimeUnit: sdk.String("molestias"),
                                            Type: sdk.String("quod"),
                                            VolumeUnit: sdk.String("repudiandae"),
                                            WeightUnit: sdk.String("eaque"),
                                        },
                                        Precision: sdk.Int64(234347),
                                    },
                                    ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(110804),
                                                Currency: sdk.String("numquam"),
                                            },
                                            CatalogObjectID: sdk.String("incidunt"),
                                            CatalogVersion: sdk.Int64(266976),
                                            Name: sdk.String("Sylvester Kling"),
                                            SourceModifierUID: sdk.String("reprehenderit"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(654199),
                                                Currency: sdk.String("consequatur"),
                                            },
                                            UID: sdk.String("voluptates"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(964928),
                                                Currency: sdk.String("qui"),
                                            },
                                            CatalogObjectID: sdk.String("delectus"),
                                            CatalogVersion: sdk.Int64(348573),
                                            Name: sdk.String("Katie Bauch"),
                                            SourceModifierUID: sdk.String("debitis"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(951411),
                                                Currency: sdk.String("itaque"),
                                            },
                                            UID: sdk.String("eveniet"),
                                        },
                                    },
                                    SourceLineItemUID: sdk.String("repellat"),
                                    TotalDiscountMoney: &shared.Money{
                                        Amount: sdk.Int64(584663),
                                        Currency: sdk.String("adipisci"),
                                    },
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(303549),
                                        Currency: sdk.String("illo"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(329961),
                                        Currency: sdk.String("sed"),
                                    },
                                    UID: sdk.String("necessitatibus"),
                                    VariationName: sdk.String("possimus"),
                                    VariationTotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(491784),
                                        Currency: sdk.String("itaque"),
                                    },
                                },
                                shared.OrderReturnLineItem{
                                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(355898),
                                                Currency: sdk.String("non"),
                                            },
                                            DiscountUID: "delectus",
                                            UID: sdk.String("incidunt"),
                                        },
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(123546),
                                                Currency: sdk.String("ullam"),
                                            },
                                            TaxUID: "quam",
                                            UID: sdk.String("illum"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(916051),
                                                Currency: sdk.String("officia"),
                                            },
                                            TaxUID: "est",
                                            UID: sdk.String("in"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(72473),
                                                Currency: sdk.String("voluptate"),
                                            },
                                            TaxUID: "consequatur",
                                            UID: sdk.String("delectus"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(276247),
                                                Currency: sdk.String("dolore"),
                                            },
                                            TaxUID: "nemo",
                                            UID: sdk.String("est"),
                                        },
                                    },
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(776750),
                                        Currency: sdk.String("maxime"),
                                    },
                                    CatalogObjectID: sdk.String("delectus"),
                                    CatalogVersion: sdk.Int64(385383),
                                    GrossReturnMoney: &shared.Money{
                                        Amount: sdk.Int64(387567),
                                        Currency: sdk.String("quam"),
                                    },
                                    ItemType: sdk.String("fuga"),
                                    Name: sdk.String("Emanuel McKenzie"),
                                    Note: sdk.String("culpa"),
                                    Quantity: "fugiat",
                                    QuantityUnit: &shared.OrderQuantityUnit{
                                        CatalogVersion: sdk.Int64(78074),
                                        MeasurementUnit: &shared.MeasurementUnit{
                                            AreaUnit: sdk.String("atque"),
                                            CustomUnit: &shared.MeasurementUnitCustom{
                                                Abbreviation: "ad",
                                                Name: "Pat Goyette PhD",
                                            },
                                            GenericUnit: sdk.String("suscipit"),
                                            LengthUnit: sdk.String("quidem"),
                                            TimeUnit: sdk.String("delectus"),
                                            Type: sdk.String("nemo"),
                                            VolumeUnit: sdk.String("cumque"),
                                            WeightUnit: sdk.String("voluptatum"),
                                        },
                                        Precision: sdk.Int64(196892),
                                    },
                                    ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(979706),
                                                Currency: sdk.String("expedita"),
                                            },
                                            CatalogObjectID: sdk.String("rerum"),
                                            CatalogVersion: sdk.Int64(516556),
                                            Name: sdk.String("Bruce Becker"),
                                            SourceModifierUID: sdk.String("ex"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(483626),
                                                Currency: sdk.String("delectus"),
                                            },
                                            UID: sdk.String("minus"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(283514),
                                                Currency: sdk.String("distinctio"),
                                            },
                                            CatalogObjectID: sdk.String("eius"),
                                            CatalogVersion: sdk.Int64(176418),
                                            Name: sdk.String("Elvira Marquardt"),
                                            SourceModifierUID: sdk.String("laboriosam"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(176281),
                                                Currency: sdk.String("amet"),
                                            },
                                            UID: sdk.String("incidunt"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(783539),
                                                Currency: sdk.String("occaecati"),
                                            },
                                            CatalogObjectID: sdk.String("reiciendis"),
                                            CatalogVersion: sdk.Int64(454334),
                                            Name: sdk.String("Arnold Monahan"),
                                            SourceModifierUID: sdk.String("recusandae"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(711572),
                                                Currency: sdk.String("iusto"),
                                            },
                                            UID: sdk.String("esse"),
                                        },
                                    },
                                    SourceLineItemUID: sdk.String("harum"),
                                    TotalDiscountMoney: &shared.Money{
                                        Amount: sdk.Int64(321654),
                                        Currency: sdk.String("quod"),
                                    },
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(188705),
                                        Currency: sdk.String("totam"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(873681),
                                        Currency: sdk.String("dolore"),
                                    },
                                    UID: sdk.String("nam"),
                                    VariationName: sdk.String("officia"),
                                    VariationTotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(978079),
                                        Currency: sdk.String("cupiditate"),
                                    },
                                },
                            },
                            ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                                shared.OrderReturnServiceCharge{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(901563),
                                        Currency: sdk.String("enim"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(52407),
                                        Currency: sdk.String("ex"),
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(962543),
                                                Currency: sdk.String("deleniti"),
                                            },
                                            TaxUID: "provident",
                                            UID: sdk.String("aut"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(680084),
                                                Currency: sdk.String("nostrum"),
                                            },
                                            TaxUID: "tempora",
                                            UID: sdk.String("nam"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(257488),
                                                Currency: sdk.String("odio"),
                                            },
                                            TaxUID: "nostrum",
                                            UID: sdk.String("maiores"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(83997),
                                                Currency: sdk.String("autem"),
                                            },
                                            TaxUID: "earum",
                                            UID: sdk.String("minima"),
                                        },
                                    },
                                    CalculationPhase: sdk.String("ex"),
                                    CatalogObjectID: sdk.String("possimus"),
                                    CatalogVersion: sdk.Int64(200501),
                                    Name: sdk.String("Gordon Parker"),
                                    Percentage: sdk.String("numquam"),
                                    SourceServiceChargeUID: sdk.String("laborum"),
                                    Taxable: sdk.Bool(false),
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(757596),
                                        Currency: sdk.String("autem"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(238022),
                                        Currency: sdk.String("sunt"),
                                    },
                                    UID: sdk.String("rerum"),
                                },
                            },
                            ReturnTaxes: []shared.OrderReturnTax{
                                shared.OrderReturnTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(593366),
                                        Currency: sdk.String("necessitatibus"),
                                    },
                                    CatalogObjectID: sdk.String("fugit"),
                                    CatalogVersion: sdk.Int64(418892),
                                    Name: sdk.String("Conrad Stehr"),
                                    Percentage: sdk.String("natus"),
                                    Scope: sdk.String("sapiente"),
                                    SourceTaxUID: sdk.String("repellendus"),
                                    Type: sdk.String("facilis"),
                                    UID: sdk.String("molestias"),
                                },
                                shared.OrderReturnTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(291344),
                                        Currency: sdk.String("et"),
                                    },
                                    CatalogObjectID: sdk.String("accusantium"),
                                    CatalogVersion: sdk.Int64(980980),
                                    Name: sdk.String("Shannon Reynolds"),
                                    Percentage: sdk.String("blanditiis"),
                                    Scope: sdk.String("vitae"),
                                    SourceTaxUID: sdk.String("iusto"),
                                    Type: sdk.String("atque"),
                                    UID: sdk.String("velit"),
                                },
                                shared.OrderReturnTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(474774),
                                        Currency: sdk.String("nam"),
                                    },
                                    CatalogObjectID: sdk.String("aperiam"),
                                    CatalogVersion: sdk.Int64(112788),
                                    Name: sdk.String("Emmett Swaniawski"),
                                    Percentage: sdk.String("deleniti"),
                                    Scope: sdk.String("rem"),
                                    SourceTaxUID: sdk.String("vel"),
                                    Type: sdk.String("eos"),
                                    UID: sdk.String("labore"),
                                },
                            },
                            RoundingAdjustment: &shared.OrderRoundingAdjustment{
                                AmountMoney: &shared.Money{
                                    Amount: sdk.Int64(121118),
                                    Currency: sdk.String("blanditiis"),
                                },
                                Name: sdk.String("Caleb Rau"),
                                UID: sdk.String("blanditiis"),
                            },
                            SourceOrderID: sdk.String("ducimus"),
                            UID: sdk.String("consectetur"),
                        },
                        shared.OrderReturn{
                            ReturnAmounts: &shared.OrderMoneyAmounts{
                                DiscountMoney: &shared.Money{
                                    Amount: sdk.Int64(958060),
                                    Currency: sdk.String("quis"),
                                },
                                ServiceChargeMoney: &shared.Money{
                                    Amount: sdk.Int64(33323),
                                    Currency: sdk.String("ratione"),
                                },
                                TaxMoney: &shared.Money{
                                    Amount: sdk.Int64(235813),
                                    Currency: sdk.String("asperiores"),
                                },
                                TipMoney: &shared.Money{
                                    Amount: sdk.Int64(103053),
                                    Currency: sdk.String("sint"),
                                },
                                TotalMoney: &shared.Money{
                                    Amount: sdk.Int64(821993),
                                    Currency: sdk.String("tempore"),
                                },
                            },
                            ReturnDiscounts: []shared.OrderReturnDiscount{
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(98250),
                                        Currency: sdk.String("consequuntur"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(366117),
                                        Currency: sdk.String("nobis"),
                                    },
                                    CatalogObjectID: sdk.String("debitis"),
                                    CatalogVersion: sdk.Int64(287379),
                                    Name: sdk.String("Lorraine Cummerata"),
                                    Percentage: sdk.String("expedita"),
                                    Scope: sdk.String("error"),
                                    SourceDiscountUID: sdk.String("placeat"),
                                    Type: sdk.String("temporibus"),
                                    UID: sdk.String("voluptate"),
                                },
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(935493),
                                        Currency: sdk.String("minima"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(141986),
                                        Currency: sdk.String("odit"),
                                    },
                                    CatalogObjectID: sdk.String("eius"),
                                    CatalogVersion: sdk.Int64(625378),
                                    Name: sdk.String("Jan Abbott Sr."),
                                    Percentage: sdk.String("amet"),
                                    Scope: sdk.String("cum"),
                                    SourceDiscountUID: sdk.String("iusto"),
                                    Type: sdk.String("corrupti"),
                                    UID: sdk.String("non"),
                                },
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(457330),
                                        Currency: sdk.String("vero"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(752919),
                                        Currency: sdk.String("minima"),
                                    },
                                    CatalogObjectID: sdk.String("omnis"),
                                    CatalogVersion: sdk.Int64(924623),
                                    Name: sdk.String("Camille Johnston"),
                                    Percentage: sdk.String("amet"),
                                    Scope: sdk.String("cumque"),
                                    SourceDiscountUID: sdk.String("dolore"),
                                    Type: sdk.String("optio"),
                                    UID: sdk.String("quo"),
                                },
                                shared.OrderReturnDiscount{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(922207),
                                        Currency: sdk.String("tempora"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(729386),
                                        Currency: sdk.String("suscipit"),
                                    },
                                    CatalogObjectID: sdk.String("illum"),
                                    CatalogVersion: sdk.Int64(478576),
                                    Name: sdk.String("Bobbie Jacobs"),
                                    Percentage: sdk.String("consectetur"),
                                    Scope: sdk.String("eligendi"),
                                    SourceDiscountUID: sdk.String("ullam"),
                                    Type: sdk.String("nihil"),
                                    UID: sdk.String("eius"),
                                },
                            },
                            ReturnLineItems: []shared.OrderReturnLineItem{
                                shared.OrderReturnLineItem{
                                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(16590),
                                                Currency: sdk.String("architecto"),
                                            },
                                            DiscountUID: "amet",
                                            UID: sdk.String("corporis"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(471302),
                                                Currency: sdk.String("officiis"),
                                            },
                                            DiscountUID: "dolore",
                                            UID: sdk.String("magnam"),
                                        },
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(371935),
                                                Currency: sdk.String("dicta"),
                                            },
                                            TaxUID: "hic",
                                            UID: sdk.String("praesentium"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(728379),
                                                Currency: sdk.String("consequatur"),
                                            },
                                            TaxUID: "totam",
                                            UID: sdk.String("tempora"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(777193),
                                                Currency: sdk.String("dolor"),
                                            },
                                            TaxUID: "sunt",
                                            UID: sdk.String("omnis"),
                                        },
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(464490),
                                                Currency: sdk.String("officiis"),
                                            },
                                            TaxUID: "dicta",
                                            UID: sdk.String("excepturi"),
                                        },
                                    },
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(233618),
                                        Currency: sdk.String("deserunt"),
                                    },
                                    CatalogObjectID: sdk.String("odit"),
                                    CatalogVersion: sdk.Int64(279923),
                                    GrossReturnMoney: &shared.Money{
                                        Amount: sdk.Int64(361801),
                                        Currency: sdk.String("quaerat"),
                                    },
                                    ItemType: sdk.String("suscipit"),
                                    Name: sdk.String("Essie Mante"),
                                    Note: sdk.String("nihil"),
                                    Quantity: "eius",
                                    QuantityUnit: &shared.OrderQuantityUnit{
                                        CatalogVersion: sdk.Int64(811380),
                                        MeasurementUnit: &shared.MeasurementUnit{
                                            AreaUnit: sdk.String("fugit"),
                                            CustomUnit: &shared.MeasurementUnitCustom{
                                                Abbreviation: "facere",
                                                Name: "Della Sawayn",
                                            },
                                            GenericUnit: sdk.String("ducimus"),
                                            LengthUnit: sdk.String("qui"),
                                            TimeUnit: sdk.String("qui"),
                                            Type: sdk.String("consectetur"),
                                            VolumeUnit: sdk.String("ratione"),
                                            WeightUnit: sdk.String("saepe"),
                                        },
                                        Precision: sdk.Int64(435841),
                                    },
                                    ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(738592),
                                                Currency: sdk.String("fugiat"),
                                            },
                                            CatalogObjectID: sdk.String("rem"),
                                            CatalogVersion: sdk.Int64(977472),
                                            Name: sdk.String("Mr. Dan Sipes"),
                                            SourceModifierUID: sdk.String("excepturi"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(485438),
                                                Currency: sdk.String("omnis"),
                                            },
                                            UID: sdk.String("officiis"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(961576),
                                                Currency: sdk.String("magni"),
                                            },
                                            CatalogObjectID: sdk.String("sit"),
                                            CatalogVersion: sdk.Int64(243247),
                                            Name: sdk.String("Christian Doyle II"),
                                            SourceModifierUID: sdk.String("cupiditate"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(15563),
                                                Currency: sdk.String("impedit"),
                                            },
                                            UID: sdk.String("quod"),
                                        },
                                    },
                                    SourceLineItemUID: sdk.String("quo"),
                                    TotalDiscountMoney: &shared.Money{
                                        Amount: sdk.Int64(100704),
                                        Currency: sdk.String("voluptatem"),
                                    },
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(595858),
                                        Currency: sdk.String("ea"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(262231),
                                        Currency: sdk.String("aperiam"),
                                    },
                                    UID: sdk.String("voluptatem"),
                                    VariationName: sdk.String("non"),
                                    VariationTotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(109695),
                                        Currency: sdk.String("sequi"),
                                    },
                                },
                                shared.OrderReturnLineItem{
                                    AppliedDiscounts: []shared.OrderLineItemAppliedDiscount{
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(215182),
                                                Currency: sdk.String("debitis"),
                                            },
                                            DiscountUID: "quis",
                                            UID: sdk.String("eaque"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(277418),
                                                Currency: sdk.String("ut"),
                                            },
                                            DiscountUID: "delectus",
                                            UID: sdk.String("aliquid"),
                                        },
                                        shared.OrderLineItemAppliedDiscount{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(352407),
                                                Currency: sdk.String("maiores"),
                                            },
                                            DiscountUID: "debitis",
                                            UID: sdk.String("reprehenderit"),
                                        },
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(824861),
                                                Currency: sdk.String("cumque"),
                                            },
                                            TaxUID: "ut",
                                            UID: sdk.String("quae"),
                                        },
                                    },
                                    BasePriceMoney: &shared.Money{
                                        Amount: sdk.Int64(468170),
                                        Currency: sdk.String("quam"),
                                    },
                                    CatalogObjectID: sdk.String("assumenda"),
                                    CatalogVersion: sdk.Int64(5510),
                                    GrossReturnMoney: &shared.Money{
                                        Amount: sdk.Int64(768692),
                                        Currency: sdk.String("placeat"),
                                    },
                                    ItemType: sdk.String("adipisci"),
                                    Name: sdk.String("Francis Barton"),
                                    Note: sdk.String("earum"),
                                    Quantity: "impedit",
                                    QuantityUnit: &shared.OrderQuantityUnit{
                                        CatalogVersion: sdk.Int64(119928),
                                        MeasurementUnit: &shared.MeasurementUnit{
                                            AreaUnit: sdk.String("corporis"),
                                            CustomUnit: &shared.MeasurementUnitCustom{
                                                Abbreviation: "impedit",
                                                Name: "Jonathon Gulgowski",
                                            },
                                            GenericUnit: sdk.String("officiis"),
                                            LengthUnit: sdk.String("quasi"),
                                            TimeUnit: sdk.String("accusamus"),
                                            Type: sdk.String("animi"),
                                            VolumeUnit: sdk.String("necessitatibus"),
                                            WeightUnit: sdk.String("voluptatem"),
                                        },
                                        Precision: sdk.Int64(980705),
                                    },
                                    ReturnModifiers: []shared.OrderReturnLineItemModifier{
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(332429),
                                                Currency: sdk.String("fuga"),
                                            },
                                            CatalogObjectID: sdk.String("itaque"),
                                            CatalogVersion: sdk.Int64(821238),
                                            Name: sdk.String("Louis O'Connell"),
                                            SourceModifierUID: sdk.String("distinctio"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(358558),
                                                Currency: sdk.String("quas"),
                                            },
                                            UID: sdk.String("soluta"),
                                        },
                                        shared.OrderReturnLineItemModifier{
                                            BasePriceMoney: &shared.Money{
                                                Amount: sdk.Int64(584645),
                                                Currency: sdk.String("unde"),
                                            },
                                            CatalogObjectID: sdk.String("et"),
                                            CatalogVersion: sdk.Int64(786319),
                                            Name: sdk.String("Aaron Homenick"),
                                            SourceModifierUID: sdk.String("nam"),
                                            TotalPriceMoney: &shared.Money{
                                                Amount: sdk.Int64(313099),
                                                Currency: sdk.String("corrupti"),
                                            },
                                            UID: sdk.String("sint"),
                                        },
                                    },
                                    SourceLineItemUID: sdk.String("eius"),
                                    TotalDiscountMoney: &shared.Money{
                                        Amount: sdk.Int64(426571),
                                        Currency: sdk.String("quasi"),
                                    },
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(876262),
                                        Currency: sdk.String("odio"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(253916),
                                        Currency: sdk.String("fugit"),
                                    },
                                    UID: sdk.String("inventore"),
                                    VariationName: sdk.String("optio"),
                                    VariationTotalPriceMoney: &shared.Money{
                                        Amount: sdk.Int64(748656),
                                        Currency: sdk.String("recusandae"),
                                    },
                                },
                            },
                            ReturnServiceCharges: []shared.OrderReturnServiceCharge{
                                shared.OrderReturnServiceCharge{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(820322),
                                        Currency: sdk.String("provident"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(330459),
                                        Currency: sdk.String("sit"),
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(952110),
                                                Currency: sdk.String("consequatur"),
                                            },
                                            TaxUID: "vero",
                                            UID: sdk.String("id"),
                                        },
                                    },
                                    CalculationPhase: sdk.String("error"),
                                    CatalogObjectID: sdk.String("ratione"),
                                    CatalogVersion: sdk.Int64(17029),
                                    Name: sdk.String("Hector Mayer"),
                                    Percentage: sdk.String("fuga"),
                                    SourceServiceChargeUID: sdk.String("cumque"),
                                    Taxable: sdk.Bool(false),
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(160988),
                                        Currency: sdk.String("maiores"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(460597),
                                        Currency: sdk.String("explicabo"),
                                    },
                                    UID: sdk.String("delectus"),
                                },
                                shared.OrderReturnServiceCharge{
                                    AmountMoney: &shared.Money{
                                        Amount: sdk.Int64(550519),
                                        Currency: sdk.String("deleniti"),
                                    },
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(313223),
                                        Currency: sdk.String("sit"),
                                    },
                                    AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                        shared.OrderLineItemAppliedTax{
                                            AppliedMoney: &shared.Money{
                                                Amount: sdk.Int64(619772),
                                                Currency: sdk.String("voluptatem"),
                                            },
                                            TaxUID: "tempora",
                                            UID: sdk.String("occaecati"),
                                        },
                                    },
                                    CalculationPhase: sdk.String("quasi"),
                                    CatalogObjectID: sdk.String("veritatis"),
                                    CatalogVersion: sdk.Int64(402908),
                                    Name: sdk.String("Ms. Tracey D'Amore"),
                                    Percentage: sdk.String("blanditiis"),
                                    SourceServiceChargeUID: sdk.String("laudantium"),
                                    Taxable: sdk.Bool(false),
                                    TotalMoney: &shared.Money{
                                        Amount: sdk.Int64(915267),
                                        Currency: sdk.String("minus"),
                                    },
                                    TotalTaxMoney: &shared.Money{
                                        Amount: sdk.Int64(419669),
                                        Currency: sdk.String("vel"),
                                    },
                                    UID: sdk.String("beatae"),
                                },
                            },
                            ReturnTaxes: []shared.OrderReturnTax{
                                shared.OrderReturnTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(230916),
                                        Currency: sdk.String("soluta"),
                                    },
                                    CatalogObjectID: sdk.String("tenetur"),
                                    CatalogVersion: sdk.Int64(897146),
                                    Name: sdk.String("Ricardo Hermiston"),
                                    Percentage: sdk.String("quidem"),
                                    Scope: sdk.String("magnam"),
                                    SourceTaxUID: sdk.String("doloremque"),
                                    Type: sdk.String("accusamus"),
                                    UID: sdk.String("quod"),
                                },
                                shared.OrderReturnTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(121133),
                                        Currency: sdk.String("voluptas"),
                                    },
                                    CatalogObjectID: sdk.String("earum"),
                                    CatalogVersion: sdk.Int64(670239),
                                    Name: sdk.String("Christian Hegmann MD"),
                                    Percentage: sdk.String("ullam"),
                                    Scope: sdk.String("ratione"),
                                    SourceTaxUID: sdk.String("eos"),
                                    Type: sdk.String("id"),
                                    UID: sdk.String("modi"),
                                },
                                shared.OrderReturnTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(851324),
                                        Currency: sdk.String("error"),
                                    },
                                    CatalogObjectID: sdk.String("consectetur"),
                                    CatalogVersion: sdk.Int64(443098),
                                    Name: sdk.String("Jonathon Nader"),
                                    Percentage: sdk.String("magnam"),
                                    Scope: sdk.String("eius"),
                                    SourceTaxUID: sdk.String("ad"),
                                    Type: sdk.String("quia"),
                                    UID: sdk.String("quod"),
                                },
                            },
                            RoundingAdjustment: &shared.OrderRoundingAdjustment{
                                AmountMoney: &shared.Money{
                                    Amount: sdk.Int64(312121),
                                    Currency: sdk.String("voluptatum"),
                                },
                                Name: sdk.String("Judith Roob"),
                                UID: sdk.String("odit"),
                            },
                            SourceOrderID: sdk.String("est"),
                            UID: sdk.String("at"),
                        },
                    },
                    Rewards: []shared.OrderReward{
                        shared.OrderReward{
                            ID: "2dafe81a-88f4-4444-973f-ecd47353f63c",
                            RewardTierID: "quos",
                        },
                    },
                    RoundingAdjustment: &shared.OrderRoundingAdjustment{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(152302),
                            Currency: sdk.String("eaque"),
                        },
                        Name: sdk.String("Chris Kozey"),
                        UID: sdk.String("id"),
                    },
                    ServiceCharges: []shared.OrderServiceCharge{
                        shared.OrderServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(580996),
                                Currency: sdk.String("optio"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(869602),
                                Currency: sdk.String("ad"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(722168),
                                        Currency: sdk.String("cumque"),
                                    },
                                    TaxUID: "sapiente",
                                    UID: sdk.String("quam"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(579242),
                                        Currency: sdk.String("repellendus"),
                                    },
                                    TaxUID: "culpa",
                                    UID: sdk.String("dicta"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(524801),
                                        Currency: sdk.String("fuga"),
                                    },
                                    TaxUID: "odio",
                                    UID: sdk.String("totam"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(168546),
                                        Currency: sdk.String("eos"),
                                    },
                                    TaxUID: "harum",
                                    UID: sdk.String("voluptatibus"),
                                },
                            },
                            CalculationPhase: sdk.String("omnis"),
                            CatalogObjectID: sdk.String("quis"),
                            CatalogVersion: sdk.Int64(552886),
                            Metadata: map[string]string{
                                "aliquam": "vero",
                                "nisi": "praesentium",
                                "eum": "vitae",
                            },
                            Name: sdk.String("Owen Reinger"),
                            Percentage: sdk.String("maiores"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(614737),
                                Currency: sdk.String("accusamus"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(370374),
                                Currency: sdk.String("fugiat"),
                            },
                            Type: sdk.String("odio"),
                            UID: sdk.String("ullam"),
                        },
                        shared.OrderServiceCharge{
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(81917),
                                Currency: sdk.String("eligendi"),
                            },
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(578678),
                                Currency: sdk.String("doloribus"),
                            },
                            AppliedTaxes: []shared.OrderLineItemAppliedTax{
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(526322),
                                        Currency: sdk.String("a"),
                                    },
                                    TaxUID: "nihil",
                                    UID: sdk.String("veniam"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(14665),
                                        Currency: sdk.String("magni"),
                                    },
                                    TaxUID: "rerum",
                                    UID: sdk.String("voluptatibus"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(858478),
                                        Currency: sdk.String("quod"),
                                    },
                                    TaxUID: "non",
                                    UID: sdk.String("dolore"),
                                },
                                shared.OrderLineItemAppliedTax{
                                    AppliedMoney: &shared.Money{
                                        Amount: sdk.Int64(315024),
                                        Currency: sdk.String("alias"),
                                    },
                                    TaxUID: "blanditiis",
                                    UID: sdk.String("modi"),
                                },
                            },
                            CalculationPhase: sdk.String("illo"),
                            CatalogObjectID: sdk.String("a"),
                            CatalogVersion: sdk.Int64(89642),
                            Metadata: map[string]string{
                                "autem": "dolore",
                                "eius": "nostrum",
                            },
                            Name: sdk.String("Wendy Kling"),
                            Percentage: sdk.String("ipsum"),
                            Taxable: sdk.Bool(false),
                            TotalMoney: &shared.Money{
                                Amount: sdk.Int64(944260),
                                Currency: sdk.String("quidem"),
                            },
                            TotalTaxMoney: &shared.Money{
                                Amount: sdk.Int64(139730),
                                Currency: sdk.String("molestiae"),
                            },
                            Type: sdk.String("accusamus"),
                            UID: sdk.String("quia"),
                        },
                    },
                    Source: &shared.OrderSource{
                        Name: sdk.String("Nettie Lang"),
                    },
                    State: sdk.String("laboriosam"),
                    Taxes: []shared.OrderLineItemTax{
                        shared.OrderLineItemTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(442853),
                                Currency: sdk.String("soluta"),
                            },
                            AutoApplied: sdk.Bool(false),
                            CatalogObjectID: sdk.String("ipsum"),
                            CatalogVersion: sdk.Int64(424505),
                            Metadata: map[string]string{
                                "maxime": "vel",
                                "distinctio": "cupiditate",
                                "hic": "quis",
                                "deleniti": "iusto",
                            },
                            Name: sdk.String("Bert Hand"),
                            Percentage: sdk.String("minus"),
                            Scope: sdk.String("aliquid"),
                            Type: sdk.String("quam"),
                            UID: sdk.String("ea"),
                        },
                        shared.OrderLineItemTax{
                            AppliedMoney: &shared.Money{
                                Amount: sdk.Int64(256941),
                                Currency: sdk.String("architecto"),
                            },
                            AutoApplied: sdk.Bool(false),
                            CatalogObjectID: sdk.String("fuga"),
                            CatalogVersion: sdk.Int64(519099),
                            Metadata: map[string]string{
                                "quasi": "sed",
                            },
                            Name: sdk.String("Jerome Berge"),
                            Percentage: sdk.String("libero"),
                            Scope: sdk.String("ut"),
                            Type: sdk.String("cumque"),
                            UID: sdk.String("quia"),
                        },
                    },
                    Tenders: []shared.Tender{
                        shared.Tender{
                            AdditionalRecipients: []shared.AdditionalRecipient{
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(767880),
                                        Currency: sdk.String("distinctio"),
                                    },
                                    Description: sdk.String("numquam"),
                                    LocationID: "fugit",
                                    ReceivableID: sdk.String("amet"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(632766),
                                        Currency: sdk.String("facilis"),
                                    },
                                    Description: sdk.String("minus"),
                                    LocationID: "vero",
                                    ReceivableID: sdk.String("impedit"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(607242),
                                        Currency: sdk.String("et"),
                                    },
                                    Description: sdk.String("earum"),
                                    LocationID: "fuga",
                                    ReceivableID: sdk.String("est"),
                                },
                                shared.AdditionalRecipient{
                                    AmountMoney: shared.Money{
                                        Amount: sdk.Int64(716024),
                                        Currency: sdk.String("fugiat"),
                                    },
                                    Description: sdk.String("nulla"),
                                    LocationID: "totam",
                                    ReceivableID: sdk.String("praesentium"),
                                },
                            },
                            AmountMoney: &shared.Money{
                                Amount: sdk.Int64(885721),
                                Currency: sdk.String("esse"),
                            },
                            CardDetails: &shared.TenderCardDetails{
                                Card: &shared.Card{
                                    BillingAddress: &shared.Address{
                                        AddressLine1: sdk.String("vitae"),
                                        AddressLine2: sdk.String("delectus"),
                                        AddressLine3: sdk.String("laboriosam"),
                                        AdministrativeDistrictLevel1: sdk.String("minus"),
                                        AdministrativeDistrictLevel2: sdk.String("labore"),
                                        AdministrativeDistrictLevel3: sdk.String("quas"),
                                        Country: sdk.String("Cameroon"),
                                        FirstName: sdk.String("Ervin"),
                                        LastName: sdk.String("Cormier"),
                                        Locality: sdk.String("quibusdam"),
                                        Organization: sdk.String("reprehenderit"),
                                        PostalCode: sdk.String("40949"),
                                        Sublocality: sdk.String("at"),
                                        Sublocality2: sdk.String("perferendis"),
                                        Sublocality3: sdk.String("in"),
                                    },
                                    Bin: sdk.String("eius"),
                                    CardBrand: sdk.String("aut"),
                                    CardType: sdk.String("consequatur"),
                                    CardholderName: sdk.String("iste"),
                                    CustomerID: sdk.String("accusamus"),
                                    Enabled: sdk.Bool(false),
                                    ExpMonth: sdk.Int64(995830),
                                    ExpYear: sdk.Int64(532110),
                                    Fingerprint: sdk.String("facere"),
                                    ID: sdk.String("29de1dd7-097b-45da-88c5-7fa6c78a216e"),
                                    Last4: sdk.String("illo"),
                                    PrepaidType: sdk.String("excepturi"),
                                    ReferenceID: sdk.String("harum"),
                                    Version: sdk.Int64(675689),
                                },
                                EntryMethod: sdk.String("a"),
                                Status: sdk.String("repudiandae"),
                            },
                            CashDetails: &shared.TenderCashDetails{
                                BuyerTenderedMoney: &shared.Money{
                                    Amount: sdk.Int64(795253),
                                    Currency: sdk.String("officia"),
                                },
                                ChangeBackMoney: &shared.Money{
                                    Amount: sdk.Int64(389786),
                                    Currency: sdk.String("illo"),
                                },
                            },
                            CreatedAt: sdk.String("cupiditate"),
                            CustomerID: sdk.String("veritatis"),
                            ID: sdk.String("498140b6-4ff8-4ae1-b0ef-03b5f37e4aa8"),
                            LocationID: sdk.String("suscipit"),
                            Note: sdk.String("quas"),
                            PaymentID: sdk.String("quis"),
                            ProcessingFeeMoney: &shared.Money{
                                Amount: sdk.Int64(317873),
                                Currency: sdk.String("corporis"),
                            },
                            TipMoney: &shared.Money{
                                Amount: sdk.Int64(614175),
                                Currency: sdk.String("ea"),
                            },
                            TransactionID: sdk.String("autem"),
                            Type: "voluptate",
                        },
                    },
                    TotalDiscountMoney: &shared.Money{
                        Amount: sdk.Int64(199228),
                        Currency: sdk.String("magni"),
                    },
                    TotalMoney: &shared.Money{
                        Amount: sdk.Int64(656605),
                        Currency: sdk.String("dolorum"),
                    },
                    TotalServiceChargeMoney: &shared.Money{
                        Amount: sdk.Int64(373840),
                        Currency: sdk.String("temporibus"),
                    },
                    TotalTaxMoney: &shared.Money{
                        Amount: sdk.Int64(785067),
                        Currency: sdk.String("tempore"),
                    },
                    TotalTipMoney: &shared.Money{
                        Amount: sdk.Int64(415395),
                        Currency: sdk.String("autem"),
                    },
                    UpdatedAt: sdk.String("praesentium"),
                    Version: sdk.Int64(166136),
                },
            },
            PrePopulateBuyerEmail: sdk.String("quisquam"),
            PrePopulateShippingAddress: &shared.Address{
                AddressLine1: sdk.String("expedita"),
                AddressLine2: sdk.String("in"),
                AddressLine3: sdk.String("eaque"),
                AdministrativeDistrictLevel1: sdk.String("delectus"),
                AdministrativeDistrictLevel2: sdk.String("blanditiis"),
                AdministrativeDistrictLevel3: sdk.String("minus"),
                Country: sdk.String("United States Minor Outlying Islands"),
                FirstName: sdk.String("Reymundo"),
                LastName: sdk.String("Herman"),
                Locality: sdk.String("a"),
                Organization: sdk.String("tempore"),
                PostalCode: sdk.String("95166"),
                Sublocality: sdk.String("laborum"),
                Sublocality2: sdk.String("molestias"),
                Sublocality3: sdk.String("a"),
            },
            RedirectURL: sdk.String("dignissimos"),
        },
        LocationID: "labore",
    }, operations.CreateCheckoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCheckoutResponse != nil {
        // handle response
    }
}
```
