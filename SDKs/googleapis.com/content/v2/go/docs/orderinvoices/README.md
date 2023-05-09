# Orderinvoices

### Available Operations

* [ContentOrderinvoicesCreatechargeinvoice](#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [ContentOrderinvoicesCreaterefundinvoice](#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

## ContentOrderinvoicesCreatechargeinvoice

Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.

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
    res, err := s.Orderinvoices.ContentOrderinvoicesCreatechargeinvoice(ctx, operations.ContentOrderinvoicesCreatechargeinvoiceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrderinvoicesCreateChargeInvoiceRequest: &shared.OrderinvoicesCreateChargeInvoiceRequest{
            InvoiceID: sdk.String("accusamus"),
            InvoiceSummary: &shared.InvoiceSummary{
                AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                    shared.InvoiceSummaryAdditionalChargeSummary{
                        TotalAmount: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("minima"),
                                Value: sdk.String("aspernatur"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("ex"),
                                Value: sdk.String("maiores"),
                            },
                        },
                        Type: sdk.String("corrupti"),
                    },
                    shared.InvoiceSummaryAdditionalChargeSummary{
                        TotalAmount: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("at"),
                                Value: sdk.String("error"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("blanditiis"),
                                Value: sdk.String("suscipit"),
                            },
                        },
                        Type: sdk.String("repudiandae"),
                    },
                    shared.InvoiceSummaryAdditionalChargeSummary{
                        TotalAmount: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("atque"),
                                Value: sdk.String("atque"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("sunt"),
                                Value: sdk.String("recusandae"),
                            },
                        },
                        Type: sdk.String("dolorum"),
                    },
                },
                CustomerBalance: &shared.Amount{
                    Pretax: &shared.Price{
                        Currency: sdk.String("repellendus"),
                        Value: sdk.String("labore"),
                    },
                    Tax: &shared.Price{
                        Currency: sdk.String("reiciendis"),
                        Value: sdk.String("doloremque"),
                    },
                },
                GoogleBalance: &shared.Amount{
                    Pretax: &shared.Price{
                        Currency: sdk.String("repudiandae"),
                        Value: sdk.String("dicta"),
                    },
                    Tax: &shared.Price{
                        Currency: sdk.String("accusantium"),
                        Value: sdk.String("beatae"),
                    },
                },
                MerchantBalance: &shared.Amount{
                    Pretax: &shared.Price{
                        Currency: sdk.String("dolores"),
                        Value: sdk.String("enim"),
                    },
                    Tax: &shared.Price{
                        Currency: sdk.String("laboriosam"),
                        Value: sdk.String("velit"),
                    },
                },
                ProductTotal: &shared.Amount{
                    Pretax: &shared.Price{
                        Currency: sdk.String("a"),
                        Value: sdk.String("molestias"),
                    },
                    Tax: &shared.Price{
                        Currency: sdk.String("magnam"),
                        Value: sdk.String("saepe"),
                    },
                },
                PromotionSummaries: []shared.Promotion{
                    shared.Promotion{
                        PromotionAmount: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("occaecati"),
                                Value: sdk.String("officiis"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("perspiciatis"),
                                Value: sdk.String("in"),
                            },
                        },
                        PromotionID: sdk.String("adipisci"),
                    },
                },
            },
            LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("occaecati"),
                    ProductID: sdk.String("consequuntur"),
                    ShipmentUnitIds: []string{
                        "id",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("reprehenderit"),
                                        Value: sdk.String("error"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("illo"),
                                        Value: sdk.String("corporis"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("eveniet"),
                                                Value: sdk.String("non"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("vero"),
                                                Value: sdk.String("doloremque"),
                                            },
                                        },
                                        PromotionID: sdk.String("iure"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("ipsa"),
                                                Value: sdk.String("totam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quae"),
                                                Value: sdk.String("molestiae"),
                                            },
                                        },
                                        PromotionID: sdk.String("eveniet"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("qui"),
                                                Value: sdk.String("cum"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("iure"),
                                                Value: sdk.String("necessitatibus"),
                                            },
                                        },
                                        PromotionID: sdk.String("ratione"),
                                    },
                                },
                                Type: sdk.String("laborum"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("distinctio"),
                                        Value: sdk.String("voluptatum"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("rem"),
                                        Value: sdk.String("aliquam"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("repellat"),
                                                Value: sdk.String("alias"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("corporis"),
                                                Value: sdk.String("perspiciatis"),
                                            },
                                        },
                                        PromotionID: sdk.String("nihil"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("mollitia"),
                                                Value: sdk.String("voluptas"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("alias"),
                                                Value: sdk.String("maiores"),
                                            },
                                        },
                                        PromotionID: sdk.String("reiciendis"),
                                    },
                                },
                                Type: sdk.String("dolores"),
                            },
                        },
                        Promotions: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("minima"),
                                        Value: sdk.String("dolore"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("dolorum"),
                                        Value: sdk.String("nesciunt"),
                                    },
                                },
                                PromotionID: sdk.String("quae"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("recusandae"),
                                        Value: sdk.String("omnis"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("quaerat"),
                                        Value: sdk.String("molestiae"),
                                    },
                                },
                                PromotionID: sdk.String("ex"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("ut"),
                                        Value: sdk.String("culpa"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("adipisci"),
                                        Value: sdk.String("debitis"),
                                    },
                                },
                                PromotionID: sdk.String("laudantium"),
                            },
                        },
                        UnitPricePretax: &shared.Price{
                            Currency: sdk.String("eum"),
                            Value: sdk.String("nemo"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("esse"),
                                    Value: sdk.String("provident"),
                                },
                                TaxName: sdk.String("quis"),
                                TaxType: sdk.String("eum"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("reiciendis"),
                                    Value: sdk.String("provident"),
                                },
                                TaxName: sdk.String("aspernatur"),
                                TaxType: sdk.String("ullam"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("quasi"),
                                    Value: sdk.String("animi"),
                                },
                                TaxName: sdk.String("nostrum"),
                                TaxType: sdk.String("mollitia"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("provident"),
                                    Value: sdk.String("possimus"),
                                },
                                TaxName: sdk.String("animi"),
                                TaxType: sdk.String("ex"),
                            },
                        },
                    },
                },
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("aliquid"),
                    ProductID: sdk.String("accusantium"),
                    ShipmentUnitIds: []string{
                        "doloribus",
                        "ullam",
                        "in",
                        "nam",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("officia"),
                                        Value: sdk.String("laborum"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("placeat"),
                                        Value: sdk.String("modi"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("molestias"),
                                                Value: sdk.String("officiis"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("sapiente"),
                                                Value: sdk.String("cumque"),
                                            },
                                        },
                                        PromotionID: sdk.String("vitae"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("rerum"),
                                                Value: sdk.String("tempora"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quis"),
                                                Value: sdk.String("inventore"),
                                            },
                                        },
                                        PromotionID: sdk.String("fugit"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("cumque"),
                                                Value: sdk.String("quae"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("perferendis"),
                                                Value: sdk.String("velit"),
                                            },
                                        },
                                        PromotionID: sdk.String("aspernatur"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("eum"),
                                                Value: sdk.String("eius"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("rem"),
                                                Value: sdk.String("at"),
                                            },
                                        },
                                        PromotionID: sdk.String("impedit"),
                                    },
                                },
                                Type: sdk.String("eos"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("sapiente"),
                                        Value: sdk.String("eum"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("dicta"),
                                        Value: sdk.String("minima"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("cupiditate"),
                                                Value: sdk.String("provident"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("earum"),
                                                Value: sdk.String("soluta"),
                                            },
                                        },
                                        PromotionID: sdk.String("hic"),
                                    },
                                },
                                Type: sdk.String("illum"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("eaque"),
                                        Value: sdk.String("earum"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("perspiciatis"),
                                        Value: sdk.String("maiores"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("aliquid"),
                                                Value: sdk.String("porro"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("suscipit"),
                                                Value: sdk.String("dolorem"),
                                            },
                                        },
                                        PromotionID: sdk.String("fugit"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("cumque"),
                                                Value: sdk.String("fuga"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("ratione"),
                                                Value: sdk.String("animi"),
                                            },
                                        },
                                        PromotionID: sdk.String("necessitatibus"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("nulla"),
                                                Value: sdk.String("consequatur"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quasi"),
                                                Value: sdk.String("et"),
                                            },
                                        },
                                        PromotionID: sdk.String("ducimus"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("natus"),
                                                Value: sdk.String("occaecati"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("suscipit"),
                                                Value: sdk.String("adipisci"),
                                            },
                                        },
                                        PromotionID: sdk.String("quasi"),
                                    },
                                },
                                Type: sdk.String("magni"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("doloribus"),
                                        Value: sdk.String("nulla"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("necessitatibus"),
                                        Value: sdk.String("ipsa"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("nihil"),
                                                Value: sdk.String("molestiae"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("dicta"),
                                                Value: sdk.String("iusto"),
                                            },
                                        },
                                        PromotionID: sdk.String("esse"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("praesentium"),
                                                Value: sdk.String("maiores"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("reiciendis"),
                                                Value: sdk.String("vel"),
                                            },
                                        },
                                        PromotionID: sdk.String("architecto"),
                                    },
                                },
                                Type: sdk.String("fugiat"),
                            },
                        },
                        Promotions: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("dicta"),
                                        Value: sdk.String("odio"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("tempora"),
                                        Value: sdk.String("esse"),
                                    },
                                },
                                PromotionID: sdk.String("ex"),
                            },
                        },
                        UnitPricePretax: &shared.Price{
                            Currency: sdk.String("consectetur"),
                            Value: sdk.String("aliquid"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("laborum"),
                                    Value: sdk.String("sunt"),
                                },
                                TaxName: sdk.String("nostrum"),
                                TaxType: sdk.String("fugiat"),
                            },
                        },
                    },
                },
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("expedita"),
                    ProductID: sdk.String("aliquid"),
                    ShipmentUnitIds: []string{
                        "suscipit",
                        "aliquid",
                        "perferendis",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("voluptas"),
                                        Value: sdk.String("iste"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("id"),
                                        Value: sdk.String("ab"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("possimus"),
                                                Value: sdk.String("voluptates"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("mollitia"),
                                                Value: sdk.String("laborum"),
                                            },
                                        },
                                        PromotionID: sdk.String("libero"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("ad"),
                                                Value: sdk.String("deleniti"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("enim"),
                                                Value: sdk.String("vitae"),
                                            },
                                        },
                                        PromotionID: sdk.String("repellendus"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("ex"),
                                                Value: sdk.String("quo"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("ex"),
                                                Value: sdk.String("ut"),
                                            },
                                        },
                                        PromotionID: sdk.String("ad"),
                                    },
                                },
                                Type: sdk.String("expedita"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("voluptatem"),
                                        Value: sdk.String("molestias"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("cum"),
                                        Value: sdk.String("aliquid"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("voluptatum"),
                                                Value: sdk.String("omnis"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("veritatis"),
                                                Value: sdk.String("rerum"),
                                            },
                                        },
                                        PromotionID: sdk.String("est"),
                                    },
                                },
                                Type: sdk.String("culpa"),
                            },
                        },
                        Promotions: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("sapiente"),
                                        Value: sdk.String("officiis"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("architecto"),
                                        Value: sdk.String("fuga"),
                                    },
                                },
                                PromotionID: sdk.String("pariatur"),
                            },
                        },
                        UnitPricePretax: &shared.Price{
                            Currency: sdk.String("debitis"),
                            Value: sdk.String("voluptatem"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("deleniti"),
                                    Value: sdk.String("earum"),
                                },
                                TaxName: sdk.String("ex"),
                                TaxType: sdk.String("sapiente"),
                            },
                        },
                    },
                },
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("rem"),
                    ProductID: sdk.String("minus"),
                    ShipmentUnitIds: []string{
                        "asperiores",
                        "ratione",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("perferendis"),
                                        Value: sdk.String("illum"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("totam"),
                                        Value: sdk.String("impedit"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("nam"),
                                                Value: sdk.String("ipsam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("culpa"),
                                                Value: sdk.String("dolor"),
                                            },
                                        },
                                        PromotionID: sdk.String("aliquam"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("inventore"),
                                                Value: sdk.String("deleniti"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("veritatis"),
                                                Value: sdk.String("tempora"),
                                            },
                                        },
                                        PromotionID: sdk.String("dolor"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("consequatur"),
                                                Value: sdk.String("architecto"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("sit"),
                                                Value: sdk.String("modi"),
                                            },
                                        },
                                        PromotionID: sdk.String("fugit"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("ab"),
                                                Value: sdk.String("laudantium"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quae"),
                                                Value: sdk.String("dolor"),
                                            },
                                        },
                                        PromotionID: sdk.String("fugiat"),
                                    },
                                },
                                Type: sdk.String("ipsam"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("consequuntur"),
                                        Value: sdk.String("ipsa"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("quas"),
                                        Value: sdk.String("eveniet"),
                                    },
                                },
                                AdditionalChargePromotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("officiis"),
                                                Value: sdk.String("esse"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("necessitatibus"),
                                                Value: sdk.String("sed"),
                                            },
                                        },
                                        PromotionID: sdk.String("veniam"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("nesciunt"),
                                                Value: sdk.String("expedita"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("eum"),
                                                Value: sdk.String("vel"),
                                            },
                                        },
                                        PromotionID: sdk.String("voluptatum"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("magnam"),
                                                Value: sdk.String("exercitationem"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("ab"),
                                                Value: sdk.String("porro"),
                                            },
                                        },
                                        PromotionID: sdk.String("autem"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("nobis"),
                                                Value: sdk.String("laboriosam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("recusandae"),
                                                Value: sdk.String("consequuntur"),
                                            },
                                        },
                                        PromotionID: sdk.String("voluptatem"),
                                    },
                                },
                                Type: sdk.String("exercitationem"),
                            },
                        },
                        Promotions: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("quasi"),
                                        Value: sdk.String("nisi"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("at"),
                                        Value: sdk.String("vero"),
                                    },
                                },
                                PromotionID: sdk.String("est"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("harum"),
                                        Value: sdk.String("sequi"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("doloribus"),
                                        Value: sdk.String("repudiandae"),
                                    },
                                },
                                PromotionID: sdk.String("optio"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("occaecati"),
                                        Value: sdk.String("nemo"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("voluptate"),
                                        Value: sdk.String("blanditiis"),
                                    },
                                },
                                PromotionID: sdk.String("officia"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("voluptas"),
                                        Value: sdk.String("numquam"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("nemo"),
                                        Value: sdk.String("quos"),
                                    },
                                },
                                PromotionID: sdk.String("eius"),
                            },
                        },
                        UnitPricePretax: &shared.Price{
                            Currency: sdk.String("aspernatur"),
                            Value: sdk.String("ducimus"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("fuga"),
                                    Value: sdk.String("laudantium"),
                                },
                                TaxName: sdk.String("incidunt"),
                                TaxType: sdk.String("quasi"),
                            },
                        },
                    },
                },
            },
            OperationID: sdk.String("rem"),
            ShipmentGroupID: sdk.String("fugiat"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("aperiam"),
        MerchantID: "cupiditate",
        OauthToken: sdk.String("reiciendis"),
        OrderID: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("eos"),
    }, operations.ContentOrderinvoicesCreatechargeinvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderinvoicesCreateChargeInvoiceResponse != nil {
        // handle response
    }
}
```

## ContentOrderinvoicesCreaterefundinvoice

Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

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
    res, err := s.Orderinvoices.ContentOrderinvoicesCreaterefundinvoice(ctx, operations.ContentOrderinvoicesCreaterefundinvoiceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrderinvoicesCreateRefundInvoiceRequest: &shared.OrderinvoicesCreateRefundInvoiceRequest{
            InvoiceID: sdk.String("iste"),
            OperationID: sdk.String("magni"),
            RefundOnlyOption: &shared.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption{
                Description: sdk.String("inventore"),
                Reason: sdk.String("fuga"),
            },
            ReturnOption: &shared.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption{
                Description: sdk.String("accusamus"),
                Reason: sdk.String("voluptatibus"),
            },
            ShipmentInvoices: []shared.ShipmentInvoice{
                shared.ShipmentInvoice{
                    InvoiceSummary: &shared.InvoiceSummary{
                        AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("delectus"),
                                        Value: sdk.String("minima"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("praesentium"),
                                        Value: sdk.String("maxime"),
                                    },
                                },
                                Type: sdk.String("magnam"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("temporibus"),
                                        Value: sdk.String("quos"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("commodi"),
                                        Value: sdk.String("itaque"),
                                    },
                                },
                                Type: sdk.String("commodi"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("totam"),
                                        Value: sdk.String("earum"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("modi"),
                                        Value: sdk.String("nam"),
                                    },
                                },
                                Type: sdk.String("vero"),
                            },
                        },
                        CustomerBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("voluptatem"),
                                Value: sdk.String("ipsam"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("vel"),
                                Value: sdk.String("alias"),
                            },
                        },
                        GoogleBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("quasi"),
                                Value: sdk.String("non"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("maiores"),
                                Value: sdk.String("enim"),
                            },
                        },
                        MerchantBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("sint"),
                                Value: sdk.String("nulla"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("deserunt"),
                                Value: sdk.String("esse"),
                            },
                        },
                        ProductTotal: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("nemo"),
                                Value: sdk.String("reprehenderit"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("est"),
                                Value: sdk.String("quis"),
                            },
                        },
                        PromotionSummaries: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("accusamus"),
                                        Value: sdk.String("impedit"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("hic"),
                                        Value: sdk.String("necessitatibus"),
                                    },
                                },
                                PromotionID: sdk.String("asperiores"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("ex"),
                                        Value: sdk.String("voluptas"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("debitis"),
                                        Value: sdk.String("delectus"),
                                    },
                                },
                                PromotionID: sdk.String("quae"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("minus"),
                                        Value: sdk.String("fuga"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("laborum"),
                                        Value: sdk.String("consectetur"),
                                    },
                                },
                                PromotionID: sdk.String("velit"),
                            },
                        },
                    },
                    LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("ipsum"),
                            ProductID: sdk.String("impedit"),
                            ShipmentUnitIds: []string{
                                "soluta",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("nam"),
                                                Value: sdk.String("dolore"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("iusto"),
                                                Value: sdk.String("voluptate"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("dignissimos"),
                                                        Value: sdk.String("neque"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("quo"),
                                                        Value: sdk.String("deleniti"),
                                                    },
                                                },
                                                PromotionID: sdk.String("quibusdam"),
                                            },
                                        },
                                        Type: sdk.String("iure"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("odit"),
                                                Value: sdk.String("voluptatibus"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("vel"),
                                                Value: sdk.String("magnam"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("inventore"),
                                                        Value: sdk.String("facere"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("libero"),
                                                        Value: sdk.String("architecto"),
                                                    },
                                                },
                                                PromotionID: sdk.String("voluptatibus"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("quia"),
                                                        Value: sdk.String("porro"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("aliquam"),
                                                        Value: sdk.String("velit"),
                                                    },
                                                },
                                                PromotionID: sdk.String("illo"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("accusantium"),
                                                        Value: sdk.String("vel"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("ea"),
                                                        Value: sdk.String("beatae"),
                                                    },
                                                },
                                                PromotionID: sdk.String("vero"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("excepturi"),
                                                        Value: sdk.String("eum"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("velit"),
                                                        Value: sdk.String("ut"),
                                                    },
                                                },
                                                PromotionID: sdk.String("perspiciatis"),
                                            },
                                        },
                                        Type: sdk.String("earum"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("dicta"),
                                                Value: sdk.String("impedit"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("voluptatibus"),
                                                Value: sdk.String("iste"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("alias"),
                                                        Value: sdk.String("nisi"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("itaque"),
                                                        Value: sdk.String("velit"),
                                                    },
                                                },
                                                PromotionID: sdk.String("laborum"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("non"),
                                                        Value: sdk.String("dolor"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("iusto"),
                                                        Value: sdk.String("sit"),
                                                    },
                                                },
                                                PromotionID: sdk.String("doloremque"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("consequatur"),
                                                        Value: sdk.String("officia"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("recusandae"),
                                                        Value: sdk.String("ea"),
                                                    },
                                                },
                                                PromotionID: sdk.String("quidem"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("voluptas"),
                                                        Value: sdk.String("facilis"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("placeat"),
                                                        Value: sdk.String("perspiciatis"),
                                                    },
                                                },
                                                PromotionID: sdk.String("expedita"),
                                            },
                                        },
                                        Type: sdk.String("deleniti"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("a"),
                                                Value: sdk.String("voluptate"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("ullam"),
                                                Value: sdk.String("unde"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("animi"),
                                                        Value: sdk.String("impedit"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("ipsam"),
                                                        Value: sdk.String("corporis"),
                                                    },
                                                },
                                                PromotionID: sdk.String("est"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("error"),
                                                        Value: sdk.String("esse"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("labore"),
                                                        Value: sdk.String("veritatis"),
                                                    },
                                                },
                                                PromotionID: sdk.String("vero"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("consectetur"),
                                                        Value: sdk.String("vitae"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("inventore"),
                                                        Value: sdk.String("dolorem"),
                                                    },
                                                },
                                                PromotionID: sdk.String("ad"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("qui"),
                                                        Value: sdk.String("iste"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("ex"),
                                                        Value: sdk.String("nemo"),
                                                    },
                                                },
                                                PromotionID: sdk.String("soluta"),
                                            },
                                        },
                                        Type: sdk.String("libero"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("dolorum"),
                                                Value: sdk.String("odio"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("fugit"),
                                                Value: sdk.String("alias"),
                                            },
                                        },
                                        PromotionID: sdk.String("magni"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("vel"),
                                                Value: sdk.String("quae"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quae"),
                                                Value: sdk.String("modi"),
                                            },
                                        },
                                        PromotionID: sdk.String("neque"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("exercitationem"),
                                                Value: sdk.String("itaque"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("et"),
                                                Value: sdk.String("ipsum"),
                                            },
                                        },
                                        PromotionID: sdk.String("unde"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("nulla"),
                                    Value: sdk.String("distinctio"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("quia"),
                                            Value: sdk.String("quia"),
                                        },
                                        TaxName: sdk.String("nostrum"),
                                        TaxType: sdk.String("omnis"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("libero"),
                                            Value: sdk.String("dicta"),
                                        },
                                        TaxName: sdk.String("id"),
                                        TaxType: sdk.String("libero"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("fugiat"),
                                            Value: sdk.String("officia"),
                                        },
                                        TaxName: sdk.String("quos"),
                                        TaxType: sdk.String("placeat"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("sit"),
                                            Value: sdk.String("iusto"),
                                        },
                                        TaxName: sdk.String("ipsa"),
                                        TaxType: sdk.String("voluptates"),
                                    },
                                },
                            },
                        },
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("inventore"),
                            ProductID: sdk.String("aperiam"),
                            ShipmentUnitIds: []string{
                                "dolore",
                                "eligendi",
                                "distinctio",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("autem"),
                                                Value: sdk.String("esse"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("dolores"),
                                                Value: sdk.String("assumenda"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("est"),
                                                        Value: sdk.String("facere"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("corrupti"),
                                                        Value: sdk.String("molestiae"),
                                                    },
                                                },
                                                PromotionID: sdk.String("provident"),
                                            },
                                        },
                                        Type: sdk.String("accusamus"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("tempore"),
                                                Value: sdk.String("sint"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("ea"),
                                                Value: sdk.String("autem"),
                                            },
                                        },
                                        PromotionID: sdk.String("ipsam"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("rerum"),
                                                Value: sdk.String("laudantium"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("corporis"),
                                                Value: sdk.String("officiis"),
                                            },
                                        },
                                        PromotionID: sdk.String("voluptatibus"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("cum"),
                                                Value: sdk.String("at"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("alias"),
                                                Value: sdk.String("quia"),
                                            },
                                        },
                                        PromotionID: sdk.String("quidem"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("fuga"),
                                                Value: sdk.String("repudiandae"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("accusantium"),
                                                Value: sdk.String("expedita"),
                                            },
                                        },
                                        PromotionID: sdk.String("officiis"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("eos"),
                                    Value: sdk.String("quibusdam"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("praesentium"),
                                            Value: sdk.String("odit"),
                                        },
                                        TaxName: sdk.String("explicabo"),
                                        TaxType: sdk.String("corporis"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("error"),
                                            Value: sdk.String("earum"),
                                        },
                                        TaxName: sdk.String("adipisci"),
                                        TaxType: sdk.String("recusandae"),
                                    },
                                },
                            },
                        },
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("similique"),
                            ProductID: sdk.String("ut"),
                            ShipmentUnitIds: []string{
                                "quis",
                                "beatae",
                                "unde",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("delectus"),
                                                Value: sdk.String("cupiditate"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("fugit"),
                                                Value: sdk.String("numquam"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("nesciunt"),
                                                        Value: sdk.String("at"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("officia"),
                                                        Value: sdk.String("dignissimos"),
                                                    },
                                                },
                                                PromotionID: sdk.String("optio"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("necessitatibus"),
                                                        Value: sdk.String("corporis"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("qui"),
                                                        Value: sdk.String("expedita"),
                                                    },
                                                },
                                                PromotionID: sdk.String("voluptatum"),
                                            },
                                        },
                                        Type: sdk.String("cupiditate"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("minima"),
                                                Value: sdk.String("placeat"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("enim"),
                                                Value: sdk.String("neque"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("minus"),
                                                        Value: sdk.String("eum"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("modi"),
                                                        Value: sdk.String("corporis"),
                                                    },
                                                },
                                                PromotionID: sdk.String("magnam"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("voluptates"),
                                                        Value: sdk.String("maiores"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("tempore"),
                                                        Value: sdk.String("aperiam"),
                                                    },
                                                },
                                                PromotionID: sdk.String("libero"),
                                            },
                                        },
                                        Type: sdk.String("ratione"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("totam"),
                                                Value: sdk.String("occaecati"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("voluptas"),
                                                Value: sdk.String("quo"),
                                            },
                                        },
                                        PromotionID: sdk.String("velit"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("minus"),
                                                Value: sdk.String("fuga"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("nostrum"),
                                                Value: sdk.String("est"),
                                            },
                                        },
                                        PromotionID: sdk.String("impedit"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("delectus"),
                                    Value: sdk.String("tempore"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("odit"),
                                            Value: sdk.String("repellat"),
                                        },
                                        TaxName: sdk.String("pariatur"),
                                        TaxType: sdk.String("nemo"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("reprehenderit"),
                                            Value: sdk.String("aperiam"),
                                        },
                                        TaxName: sdk.String("odio"),
                                        TaxType: sdk.String("minima"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("in"),
                                            Value: sdk.String("ducimus"),
                                        },
                                        TaxName: sdk.String("excepturi"),
                                        TaxType: sdk.String("dolores"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("error"),
                                            Value: sdk.String("veritatis"),
                                        },
                                        TaxName: sdk.String("ducimus"),
                                        TaxType: sdk.String("voluptate"),
                                    },
                                },
                            },
                        },
                    },
                    ShipmentGroupID: sdk.String("pariatur"),
                },
                shared.ShipmentInvoice{
                    InvoiceSummary: &shared.InvoiceSummary{
                        AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("similique"),
                                        Value: sdk.String("optio"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("ex"),
                                        Value: sdk.String("quaerat"),
                                    },
                                },
                                Type: sdk.String("commodi"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("officiis"),
                                        Value: sdk.String("placeat"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("quidem"),
                                        Value: sdk.String("exercitationem"),
                                    },
                                },
                                Type: sdk.String("quam"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("dolorem"),
                                        Value: sdk.String("modi"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("ipsa"),
                                        Value: sdk.String("sint"),
                                    },
                                },
                                Type: sdk.String("vero"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("sequi"),
                                        Value: sdk.String("repudiandae"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("cum"),
                                        Value: sdk.String("dicta"),
                                    },
                                },
                                Type: sdk.String("earum"),
                            },
                        },
                        CustomerBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("veniam"),
                                Value: sdk.String("animi"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("dolores"),
                                Value: sdk.String("nam"),
                            },
                        },
                        GoogleBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("dicta"),
                                Value: sdk.String("consequuntur"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("necessitatibus"),
                                Value: sdk.String("nobis"),
                            },
                        },
                        MerchantBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("ipsa"),
                                Value: sdk.String("ducimus"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("maiores"),
                                Value: sdk.String("veritatis"),
                            },
                        },
                        ProductTotal: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("quasi"),
                                Value: sdk.String("laboriosam"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("pariatur"),
                                Value: sdk.String("libero"),
                            },
                        },
                        PromotionSummaries: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("occaecati"),
                                        Value: sdk.String("nemo"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("aliquam"),
                                        Value: sdk.String("nostrum"),
                                    },
                                },
                                PromotionID: sdk.String("doloribus"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("eligendi"),
                                        Value: sdk.String("sint"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("enim"),
                                        Value: sdk.String("hic"),
                                    },
                                },
                                PromotionID: sdk.String("animi"),
                            },
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("quas"),
                                        Value: sdk.String("totam"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("molestias"),
                                        Value: sdk.String("odio"),
                                    },
                                },
                                PromotionID: sdk.String("eaque"),
                            },
                        },
                    },
                    LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("architecto"),
                            ProductID: sdk.String("quos"),
                            ShipmentUnitIds: []string{
                                "assumenda",
                                "tempore",
                                "libero",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("doloremque"),
                                                Value: sdk.String("delectus"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("impedit"),
                                                Value: sdk.String("cum"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("adipisci"),
                                                        Value: sdk.String("saepe"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("deserunt"),
                                                        Value: sdk.String("doloremque"),
                                                    },
                                                },
                                                PromotionID: sdk.String("quis"),
                                            },
                                        },
                                        Type: sdk.String("veniam"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("architecto"),
                                                Value: sdk.String("cupiditate"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("molestiae"),
                                                Value: sdk.String("eligendi"),
                                            },
                                        },
                                        PromotionID: sdk.String("possimus"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("non"),
                                                Value: sdk.String("magnam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("itaque"),
                                                Value: sdk.String("sed"),
                                            },
                                        },
                                        PromotionID: sdk.String("asperiores"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("veniam"),
                                                Value: sdk.String("consequuntur"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("facere"),
                                                Value: sdk.String("laudantium"),
                                            },
                                        },
                                        PromotionID: sdk.String("odit"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("pariatur"),
                                    Value: sdk.String("amet"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("ab"),
                                            Value: sdk.String("velit"),
                                        },
                                        TaxName: sdk.String("facilis"),
                                        TaxType: sdk.String("tempore"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("nisi"),
                                            Value: sdk.String("voluptatibus"),
                                        },
                                        TaxName: sdk.String("quaerat"),
                                        TaxType: sdk.String("blanditiis"),
                                    },
                                },
                            },
                        },
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("distinctio"),
                            ProductID: sdk.String("nisi"),
                            ShipmentUnitIds: []string{
                                "nisi",
                                "libero",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("facere"),
                                                Value: sdk.String("facilis"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("ipsum"),
                                                Value: sdk.String("ad"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("voluptatibus"),
                                                        Value: sdk.String("consequuntur"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("debitis"),
                                                        Value: sdk.String("labore"),
                                                    },
                                                },
                                                PromotionID: sdk.String("rerum"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("eos"),
                                                        Value: sdk.String("reprehenderit"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("nostrum"),
                                                        Value: sdk.String("neque"),
                                                    },
                                                },
                                                PromotionID: sdk.String("iusto"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("est"),
                                                        Value: sdk.String("rem"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("eligendi"),
                                                        Value: sdk.String("fugiat"),
                                                    },
                                                },
                                                PromotionID: sdk.String("unde"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("officiis"),
                                                        Value: sdk.String("ducimus"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("dolor"),
                                                        Value: sdk.String("dicta"),
                                                    },
                                                },
                                                PromotionID: sdk.String("error"),
                                            },
                                        },
                                        Type: sdk.String("porro"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("vitae"),
                                                Value: sdk.String("dignissimos"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("esse"),
                                                Value: sdk.String("fugiat"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("aspernatur"),
                                                        Value: sdk.String("enim"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("iusto"),
                                                    },
                                                },
                                                PromotionID: sdk.String("dignissimos"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("libero"),
                                                        Value: sdk.String("illo"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("ab"),
                                                        Value: sdk.String("incidunt"),
                                                    },
                                                },
                                                PromotionID: sdk.String("accusamus"),
                                            },
                                        },
                                        Type: sdk.String("saepe"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("tempore"),
                                                Value: sdk.String("veniam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("eos"),
                                                Value: sdk.String("reiciendis"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("reprehenderit"),
                                                        Value: sdk.String("praesentium"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("nemo"),
                                                        Value: sdk.String("repellat"),
                                                    },
                                                },
                                                PromotionID: sdk.String("quisquam"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("sequi"),
                                                        Value: sdk.String("nihil"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("deleniti"),
                                                        Value: sdk.String("illo"),
                                                    },
                                                },
                                                PromotionID: sdk.String("labore"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("assumenda"),
                                                        Value: sdk.String("aliquam"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("quisquam"),
                                                        Value: sdk.String("provident"),
                                                    },
                                                },
                                                PromotionID: sdk.String("laudantium"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("repudiandae"),
                                                        Value: sdk.String("consequatur"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("maxime"),
                                                        Value: sdk.String("aspernatur"),
                                                    },
                                                },
                                                PromotionID: sdk.String("nam"),
                                            },
                                        },
                                        Type: sdk.String("expedita"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("quas"),
                                                Value: sdk.String("provident"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("repudiandae"),
                                                Value: sdk.String("rerum"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("corporis"),
                                                        Value: sdk.String("vero"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("similique"),
                                                        Value: sdk.String("repellendus"),
                                                    },
                                                },
                                                PromotionID: sdk.String("iure"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("dolorem"),
                                                        Value: sdk.String("commodi"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("impedit"),
                                                        Value: sdk.String("commodi"),
                                                    },
                                                },
                                                PromotionID: sdk.String("aut"),
                                            },
                                        },
                                        Type: sdk.String("voluptatem"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("quae"),
                                                Value: sdk.String("amet"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("illum"),
                                                Value: sdk.String("praesentium"),
                                            },
                                        },
                                        PromotionID: sdk.String("quidem"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("cum"),
                                                Value: sdk.String("amet"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quasi"),
                                                Value: sdk.String("dicta"),
                                            },
                                        },
                                        PromotionID: sdk.String("laudantium"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("doloremque"),
                                    Value: sdk.String("earum"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("amet"),
                                            Value: sdk.String("provident"),
                                        },
                                        TaxName: sdk.String("dolorum"),
                                        TaxType: sdk.String("necessitatibus"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("provident"),
                                            Value: sdk.String("repudiandae"),
                                        },
                                        TaxName: sdk.String("consequatur"),
                                        TaxType: sdk.String("nemo"),
                                    },
                                },
                            },
                        },
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("molestiae"),
                            ProductID: sdk.String("itaque"),
                            ShipmentUnitIds: []string{
                                "corrupti",
                                "aperiam",
                                "sint",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("eos"),
                                                Value: sdk.String("totam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("dicta"),
                                                Value: sdk.String("voluptatem"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("dolor"),
                                                        Value: sdk.String("sunt"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("a"),
                                                        Value: sdk.String("dolor"),
                                                    },
                                                },
                                                PromotionID: sdk.String("occaecati"),
                                            },
                                        },
                                        Type: sdk.String("atque"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("beatae"),
                                                Value: sdk.String("at"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("labore"),
                                                Value: sdk.String("minus"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("voluptatem"),
                                                        Value: sdk.String("perferendis"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("rerum"),
                                                        Value: sdk.String("ea"),
                                                    },
                                                },
                                                PromotionID: sdk.String("aperiam"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("dignissimos"),
                                                        Value: sdk.String("repellat"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("velit"),
                                                        Value: sdk.String("porro"),
                                                    },
                                                },
                                                PromotionID: sdk.String("provident"),
                                            },
                                        },
                                        Type: sdk.String("consectetur"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("eligendi"),
                                                Value: sdk.String("dignissimos"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("consectetur"),
                                                Value: sdk.String("soluta"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("temporibus"),
                                                        Value: sdk.String("officia"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("amet"),
                                                        Value: sdk.String("tenetur"),
                                                    },
                                                },
                                                PromotionID: sdk.String("aspernatur"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("quo"),
                                                        Value: sdk.String("itaque"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("illum"),
                                                        Value: sdk.String("laborum"),
                                                    },
                                                },
                                                PromotionID: sdk.String("dignissimos"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("vero"),
                                                        Value: sdk.String("qui"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("consectetur"),
                                                        Value: sdk.String("repellat"),
                                                    },
                                                },
                                                PromotionID: sdk.String("explicabo"),
                                            },
                                        },
                                        Type: sdk.String("explicabo"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("exercitationem"),
                                                Value: sdk.String("nihil"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("non"),
                                                Value: sdk.String("ab"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("hic"),
                                                        Value: sdk.String("deserunt"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("non"),
                                                    },
                                                },
                                                PromotionID: sdk.String("distinctio"),
                                            },
                                        },
                                        Type: sdk.String("in"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("labore"),
                                                Value: sdk.String("numquam"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("repudiandae"),
                                                Value: sdk.String("modi"),
                                            },
                                        },
                                        PromotionID: sdk.String("in"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("explicabo"),
                                                Value: sdk.String("accusamus"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("rem"),
                                                Value: sdk.String("aperiam"),
                                            },
                                        },
                                        PromotionID: sdk.String("odit"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("deleniti"),
                                    Value: sdk.String("enim"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("similique"),
                                            Value: sdk.String("minima"),
                                        },
                                        TaxName: sdk.String("libero"),
                                        TaxType: sdk.String("magnam"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("sit"),
                                            Value: sdk.String("modi"),
                                        },
                                        TaxName: sdk.String("eum"),
                                        TaxType: sdk.String("nesciunt"),
                                    },
                                },
                            },
                        },
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("mollitia"),
                            ProductID: sdk.String("dignissimos"),
                            ShipmentUnitIds: []string{
                                "nostrum",
                                "molestiae",
                                "veniam",
                                "reiciendis",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("modi"),
                                                Value: sdk.String("aut"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("aut"),
                                                Value: sdk.String("eveniet"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("commodi"),
                                                        Value: sdk.String("numquam"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("dolorum"),
                                                        Value: sdk.String("possimus"),
                                                    },
                                                },
                                                PromotionID: sdk.String("voluptate"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("consectetur"),
                                                        Value: sdk.String("nesciunt"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("quaerat"),
                                                        Value: sdk.String("itaque"),
                                                    },
                                                },
                                                PromotionID: sdk.String("minus"),
                                            },
                                        },
                                        Type: sdk.String("sunt"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("iusto"),
                                                Value: sdk.String("quas"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("et"),
                                                Value: sdk.String("facilis"),
                                            },
                                        },
                                        PromotionID: sdk.String("amet"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("autem"),
                                                Value: sdk.String("fuga"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("alias"),
                                                Value: sdk.String("rem"),
                                            },
                                        },
                                        PromotionID: sdk.String("aut"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("quos"),
                                                Value: sdk.String("laudantium"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("repellendus"),
                                                Value: sdk.String("veritatis"),
                                            },
                                        },
                                        PromotionID: sdk.String("quae"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("eaque"),
                                    Value: sdk.String("saepe"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("mollitia"),
                                            Value: sdk.String("nulla"),
                                        },
                                        TaxName: sdk.String("officia"),
                                        TaxType: sdk.String("sed"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("voluptatem"),
                                            Value: sdk.String("alias"),
                                        },
                                        TaxName: sdk.String("eveniet"),
                                        TaxType: sdk.String("hic"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("voluptatem"),
                                            Value: sdk.String("incidunt"),
                                        },
                                        TaxName: sdk.String("qui"),
                                        TaxType: sdk.String("qui"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("necessitatibus"),
                                            Value: sdk.String("harum"),
                                        },
                                        TaxName: sdk.String("explicabo"),
                                        TaxType: sdk.String("beatae"),
                                    },
                                },
                            },
                        },
                    },
                    ShipmentGroupID: sdk.String("aliquid"),
                },
                shared.ShipmentInvoice{
                    InvoiceSummary: &shared.InvoiceSummary{
                        AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("optio"),
                                        Value: sdk.String("voluptatibus"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("molestias"),
                                        Value: sdk.String("officia"),
                                    },
                                },
                                Type: sdk.String("libero"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("totam"),
                                        Value: sdk.String("sequi"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("aliquid"),
                                        Value: sdk.String("ea"),
                                    },
                                },
                                Type: sdk.String("impedit"),
                            },
                        },
                        CustomerBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("ducimus"),
                                Value: sdk.String("odit"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("velit"),
                                Value: sdk.String("reiciendis"),
                            },
                        },
                        GoogleBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("repellat"),
                                Value: sdk.String("nulla"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("laborum"),
                                Value: sdk.String("natus"),
                            },
                        },
                        MerchantBalance: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("accusamus"),
                                Value: sdk.String("doloremque"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("nisi"),
                                Value: sdk.String("rerum"),
                            },
                        },
                        ProductTotal: &shared.Amount{
                            Pretax: &shared.Price{
                                Currency: sdk.String("recusandae"),
                                Value: sdk.String("voluptates"),
                            },
                            Tax: &shared.Price{
                                Currency: sdk.String("non"),
                                Value: sdk.String("rem"),
                            },
                        },
                        PromotionSummaries: []shared.Promotion{
                            shared.Promotion{
                                PromotionAmount: &shared.Amount{
                                    Pretax: &shared.Price{
                                        Currency: sdk.String("ullam"),
                                        Value: sdk.String("quisquam"),
                                    },
                                    Tax: &shared.Price{
                                        Currency: sdk.String("dicta"),
                                        Value: sdk.String("voluptatibus"),
                                    },
                                },
                                PromotionID: sdk.String("eligendi"),
                            },
                        },
                    },
                    LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("officiis"),
                            ProductID: sdk.String("architecto"),
                            ShipmentUnitIds: []string{
                                "enim",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("rem"),
                                                Value: sdk.String("perferendis"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("facilis"),
                                                Value: sdk.String("reiciendis"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("iste"),
                                                        Value: sdk.String("dicta"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("quos"),
                                                        Value: sdk.String("ullam"),
                                                    },
                                                },
                                                PromotionID: sdk.String("dolore"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("modi"),
                                                        Value: sdk.String("itaque"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("maxime"),
                                                        Value: sdk.String("modi"),
                                                    },
                                                },
                                                PromotionID: sdk.String("consequuntur"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("assumenda"),
                                                        Value: sdk.String("vero"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("doloribus"),
                                                        Value: sdk.String("impedit"),
                                                    },
                                                },
                                                PromotionID: sdk.String("porro"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("accusamus"),
                                                        Value: sdk.String("totam"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("reiciendis"),
                                                        Value: sdk.String("ab"),
                                                    },
                                                },
                                                PromotionID: sdk.String("sint"),
                                            },
                                        },
                                        Type: sdk.String("nihil"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("esse"),
                                                Value: sdk.String("iure"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("odio"),
                                                Value: sdk.String("nesciunt"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("vel"),
                                                        Value: sdk.String("neque"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("corporis"),
                                                        Value: sdk.String("voluptas"),
                                                    },
                                                },
                                                PromotionID: sdk.String("consequuntur"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("officia"),
                                                        Value: sdk.String("reprehenderit"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("distinctio"),
                                                        Value: sdk.String("eius"),
                                                    },
                                                },
                                                PromotionID: sdk.String("ipsa"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("rem"),
                                                        Value: sdk.String("maiores"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("accusantium"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                },
                                                PromotionID: sdk.String("saepe"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("neque"),
                                                        Value: sdk.String("facere"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("aliquam"),
                                                        Value: sdk.String("quos"),
                                                    },
                                                },
                                                PromotionID: sdk.String("doloribus"),
                                            },
                                        },
                                        Type: sdk.String("fugiat"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("est"),
                                                Value: sdk.String("delectus"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("velit"),
                                                Value: sdk.String("vitae"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("similique"),
                                                        Value: sdk.String("illo"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("repellat"),
                                                        Value: sdk.String("nemo"),
                                                    },
                                                },
                                                PromotionID: sdk.String("doloribus"),
                                            },
                                        },
                                        Type: sdk.String("possimus"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("unde"),
                                                Value: sdk.String("incidunt"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("explicabo"),
                                                Value: sdk.String("ipsam"),
                                            },
                                        },
                                        AdditionalChargePromotions: []shared.Promotion{
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("optio"),
                                                        Value: sdk.String("alias"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("quidem"),
                                                        Value: sdk.String("nesciunt"),
                                                    },
                                                },
                                                PromotionID: sdk.String("commodi"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("sapiente"),
                                                        Value: sdk.String("consequuntur"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("veniam"),
                                                        Value: sdk.String("debitis"),
                                                    },
                                                },
                                                PromotionID: sdk.String("officia"),
                                            },
                                            shared.Promotion{
                                                PromotionAmount: &shared.Amount{
                                                    Pretax: &shared.Price{
                                                        Currency: sdk.String("sint"),
                                                        Value: sdk.String("ut"),
                                                    },
                                                    Tax: &shared.Price{
                                                        Currency: sdk.String("numquam"),
                                                        Value: sdk.String("tenetur"),
                                                    },
                                                },
                                                PromotionID: sdk.String("adipisci"),
                                            },
                                        },
                                        Type: sdk.String("libero"),
                                    },
                                },
                                Promotions: []shared.Promotion{
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("minima"),
                                                Value: sdk.String("ex"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("minus"),
                                                Value: sdk.String("ab"),
                                            },
                                        },
                                        PromotionID: sdk.String("beatae"),
                                    },
                                    shared.Promotion{
                                        PromotionAmount: &shared.Amount{
                                            Pretax: &shared.Price{
                                                Currency: sdk.String("hic"),
                                                Value: sdk.String("nisi"),
                                            },
                                            Tax: &shared.Price{
                                                Currency: sdk.String("quisquam"),
                                                Value: sdk.String("dolor"),
                                            },
                                        },
                                        PromotionID: sdk.String("ducimus"),
                                    },
                                },
                                UnitPricePretax: &shared.Price{
                                    Currency: sdk.String("fuga"),
                                    Value: sdk.String("minima"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("qui"),
                                            Value: sdk.String("aliquid"),
                                        },
                                        TaxName: sdk.String("magni"),
                                        TaxType: sdk.String("incidunt"),
                                    },
                                },
                            },
                        },
                    },
                    ShipmentGroupID: sdk.String("adipisci"),
                },
            },
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("facilis"),
        MerchantID: "impedit",
        OauthToken: sdk.String("sit"),
        OrderID: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ContentOrderinvoicesCreaterefundinvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderinvoicesCreateRefundInvoiceResponse != nil {
        // handle response
    }
}
```
