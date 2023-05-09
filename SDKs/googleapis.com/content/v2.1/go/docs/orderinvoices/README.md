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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrderinvoicesCreateChargeInvoiceRequest: &shared.OrderinvoicesCreateChargeInvoiceRequest{
            InvoiceID: sdk.String("ab"),
            InvoiceSummary: &shared.InvoiceSummary{
                AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                    shared.InvoiceSummaryAdditionalChargeSummary{
                        TotalAmount: &shared.Amount{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("accusamus"),
                                Value: sdk.String("saepe"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("tempore"),
                                Value: sdk.String("veniam"),
                            },
                        },
                        Type: sdk.String("eos"),
                    },
                    shared.InvoiceSummaryAdditionalChargeSummary{
                        TotalAmount: &shared.Amount{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("reiciendis"),
                                Value: sdk.String("earum"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("reprehenderit"),
                                Value: sdk.String("praesentium"),
                            },
                        },
                        Type: sdk.String("nemo"),
                    },
                },
                ProductTotal: &shared.Amount{
                    PriceAmount: &shared.Price{
                        Currency: sdk.String("repellat"),
                        Value: sdk.String("quisquam"),
                    },
                    TaxAmount: &shared.Price{
                        Currency: sdk.String("sequi"),
                        Value: sdk.String("nihil"),
                    },
                },
            },
            LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("illo"),
                    ProductID: sdk.String("labore"),
                    ShipmentUnitIds: []string{
                        "aliquam",
                        "quisquam",
                        "provident",
                        "laudantium",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("consequatur"),
                                        Value: sdk.String("maxime"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("aspernatur"),
                                        Value: sdk.String("nam"),
                                    },
                                },
                                Type: sdk.String("expedita"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("quas"),
                                        Value: sdk.String("provident"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("repudiandae"),
                                        Value: sdk.String("rerum"),
                                    },
                                },
                                Type: sdk.String("dignissimos"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("corporis"),
                                        Value: sdk.String("vero"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("similique"),
                                        Value: sdk.String("repellendus"),
                                    },
                                },
                                Type: sdk.String("iure"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("dolorem"),
                                        Value: sdk.String("commodi"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("impedit"),
                                        Value: sdk.String("commodi"),
                                    },
                                },
                                Type: sdk.String("aut"),
                            },
                        },
                        UnitPrice: &shared.Price{
                            Currency: sdk.String("voluptatem"),
                            Value: sdk.String("ad"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("amet"),
                                    Value: sdk.String("illum"),
                                },
                                TaxName: sdk.String("praesentium"),
                                TaxType: sdk.String("quidem"),
                            },
                        },
                    },
                },
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("cum"),
                    ProductID: sdk.String("amet"),
                    ShipmentUnitIds: []string{
                        "dicta",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("doloremque"),
                                        Value: sdk.String("earum"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("iusto"),
                                        Value: sdk.String("amet"),
                                    },
                                },
                                Type: sdk.String("provident"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("dolorum"),
                                        Value: sdk.String("necessitatibus"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("provident"),
                                        Value: sdk.String("repudiandae"),
                                    },
                                },
                                Type: sdk.String("consequatur"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("nemo"),
                                        Value: sdk.String("molestiae"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("itaque"),
                                        Value: sdk.String("facilis"),
                                    },
                                },
                                Type: sdk.String("corrupti"),
                            },
                        },
                        UnitPrice: &shared.Price{
                            Currency: sdk.String("aperiam"),
                            Value: sdk.String("sint"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("eos"),
                                    Value: sdk.String("totam"),
                                },
                                TaxName: sdk.String("dicta"),
                                TaxType: sdk.String("voluptatem"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("velit"),
                                    Value: sdk.String("dolor"),
                                },
                                TaxName: sdk.String("sunt"),
                                TaxType: sdk.String("a"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("dolor"),
                                    Value: sdk.String("occaecati"),
                                },
                                TaxName: sdk.String("atque"),
                                TaxType: sdk.String("beatae"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("at"),
                                    Value: sdk.String("labore"),
                                },
                                TaxName: sdk.String("minus"),
                                TaxType: sdk.String("esse"),
                            },
                        },
                    },
                },
                shared.ShipmentInvoiceLineItemInvoice{
                    LineItemID: sdk.String("voluptatem"),
                    ProductID: sdk.String("perferendis"),
                    ShipmentUnitIds: []string{
                        "ea",
                        "aperiam",
                        "dignissimos",
                    },
                    UnitInvoice: &shared.UnitInvoice{
                        AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("velit"),
                                        Value: sdk.String("porro"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("provident"),
                                        Value: sdk.String("consectetur"),
                                    },
                                },
                                Type: sdk.String("eligendi"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("dignissimos"),
                                        Value: sdk.String("consectetur"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("soluta"),
                                        Value: sdk.String("natus"),
                                    },
                                },
                                Type: sdk.String("temporibus"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("officia"),
                                        Value: sdk.String("amet"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("tenetur"),
                                        Value: sdk.String("aspernatur"),
                                    },
                                },
                                Type: sdk.String("quo"),
                            },
                            shared.UnitInvoiceAdditionalCharge{
                                AdditionalChargeAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("itaque"),
                                        Value: sdk.String("illum"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("laborum"),
                                        Value: sdk.String("dignissimos"),
                                    },
                                },
                                Type: sdk.String("vero"),
                            },
                        },
                        UnitPrice: &shared.Price{
                            Currency: sdk.String("qui"),
                            Value: sdk.String("consectetur"),
                        },
                        UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("explicabo"),
                                    Value: sdk.String("explicabo"),
                                },
                                TaxName: sdk.String("exercitationem"),
                                TaxType: sdk.String("nihil"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("non"),
                                    Value: sdk.String("ab"),
                                },
                                TaxName: sdk.String("illo"),
                                TaxType: sdk.String("hic"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("deserunt"),
                                    Value: sdk.String("delectus"),
                                },
                                TaxName: sdk.String("non"),
                                TaxType: sdk.String("distinctio"),
                            },
                            shared.UnitInvoiceTaxLine{
                                TaxAmount: &shared.Price{
                                    Currency: sdk.String("in"),
                                    Value: sdk.String("exercitationem"),
                                },
                                TaxName: sdk.String("labore"),
                                TaxType: sdk.String("numquam"),
                            },
                        },
                    },
                },
            },
            OperationID: sdk.String("repudiandae"),
            ShipmentGroupID: sdk.String("modi"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("rem"),
        Key: sdk.String("aperiam"),
        MerchantID: "odit",
        OauthToken: sdk.String("deleniti"),
        OrderID: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("minima"),
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
            InvoiceID: sdk.String("magnam"),
            OperationID: sdk.String("sit"),
            RefundOnlyOption: &shared.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption{
                Description: sdk.String("modi"),
                Reason: sdk.String("eum"),
            },
            ReturnOption: &shared.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption{
                Description: sdk.String("nesciunt"),
                Reason: sdk.String("mollitia"),
            },
            ShipmentInvoices: []shared.ShipmentInvoice{
                shared.ShipmentInvoice{
                    InvoiceSummary: &shared.InvoiceSummary{
                        AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("nostrum"),
                                        Value: sdk.String("molestiae"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("veniam"),
                                        Value: sdk.String("reiciendis"),
                                    },
                                },
                                Type: sdk.String("ab"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("modi"),
                                        Value: sdk.String("aut"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("aut"),
                                        Value: sdk.String("eveniet"),
                                    },
                                },
                                Type: sdk.String("odio"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("commodi"),
                                        Value: sdk.String("numquam"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("dolorum"),
                                        Value: sdk.String("possimus"),
                                    },
                                },
                                Type: sdk.String("voluptate"),
                            },
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("consectetur"),
                                        Value: sdk.String("nesciunt"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("quaerat"),
                                        Value: sdk.String("itaque"),
                                    },
                                },
                                Type: sdk.String("minus"),
                            },
                        },
                        ProductTotal: &shared.Amount{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("sunt"),
                                Value: sdk.String("distinctio"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("iusto"),
                                Value: sdk.String("quas"),
                            },
                        },
                    },
                    LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("facilis"),
                            ProductID: sdk.String("amet"),
                            ShipmentUnitIds: []string{
                                "fuga",
                                "alias",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("aut"),
                                                Value: sdk.String("quos"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("laudantium"),
                                                Value: sdk.String("repellendus"),
                                            },
                                        },
                                        Type: sdk.String("veritatis"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("quae"),
                                                Value: sdk.String("eaque"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("saepe"),
                                                Value: sdk.String("delectus"),
                                            },
                                        },
                                        Type: sdk.String("mollitia"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("nulla"),
                                                Value: sdk.String("officia"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("sed"),
                                                Value: sdk.String("voluptatem"),
                                            },
                                        },
                                        Type: sdk.String("alias"),
                                    },
                                },
                                UnitPrice: &shared.Price{
                                    Currency: sdk.String("eveniet"),
                                    Value: sdk.String("hic"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("incidunt"),
                                            Value: sdk.String("qui"),
                                        },
                                        TaxName: sdk.String("qui"),
                                        TaxType: sdk.String("necessitatibus"),
                                    },
                                },
                            },
                        },
                    },
                    ShipmentGroupID: sdk.String("harum"),
                },
                shared.ShipmentInvoice{
                    InvoiceSummary: &shared.InvoiceSummary{
                        AdditionalChargeSummaries: []shared.InvoiceSummaryAdditionalChargeSummary{
                            shared.InvoiceSummaryAdditionalChargeSummary{
                                TotalAmount: &shared.Amount{
                                    PriceAmount: &shared.Price{
                                        Currency: sdk.String("beatae"),
                                        Value: sdk.String("aliquid"),
                                    },
                                    TaxAmount: &shared.Price{
                                        Currency: sdk.String("modi"),
                                        Value: sdk.String("optio"),
                                    },
                                },
                                Type: sdk.String("voluptatibus"),
                            },
                        },
                        ProductTotal: &shared.Amount{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("molestias"),
                                Value: sdk.String("officia"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("libero"),
                                Value: sdk.String("totam"),
                            },
                        },
                    },
                    LineItemInvoices: []shared.ShipmentInvoiceLineItemInvoice{
                        shared.ShipmentInvoiceLineItemInvoice{
                            LineItemID: sdk.String("aliquid"),
                            ProductID: sdk.String("ea"),
                            ShipmentUnitIds: []string{
                                "ducimus",
                                "odit",
                                "velit",
                                "reiciendis",
                            },
                            UnitInvoice: &shared.UnitInvoice{
                                AdditionalCharges: []shared.UnitInvoiceAdditionalCharge{
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("nulla"),
                                                Value: sdk.String("laborum"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("natus"),
                                                Value: sdk.String("accusamus"),
                                            },
                                        },
                                        Type: sdk.String("doloremque"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("nisi"),
                                                Value: sdk.String("rerum"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("recusandae"),
                                                Value: sdk.String("voluptates"),
                                            },
                                        },
                                        Type: sdk.String("non"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("rem"),
                                                Value: sdk.String("quia"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("ullam"),
                                                Value: sdk.String("quisquam"),
                                            },
                                        },
                                        Type: sdk.String("dicta"),
                                    },
                                    shared.UnitInvoiceAdditionalCharge{
                                        AdditionalChargeAmount: &shared.Amount{
                                            PriceAmount: &shared.Price{
                                                Currency: sdk.String("voluptatibus"),
                                                Value: sdk.String("eligendi"),
                                            },
                                            TaxAmount: &shared.Price{
                                                Currency: sdk.String("quae"),
                                                Value: sdk.String("officiis"),
                                            },
                                        },
                                        Type: sdk.String("architecto"),
                                    },
                                },
                                UnitPrice: &shared.Price{
                                    Currency: sdk.String("architecto"),
                                    Value: sdk.String("enim"),
                                },
                                UnitPriceTaxes: []shared.UnitInvoiceTaxLine{
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("rem"),
                                            Value: sdk.String("perferendis"),
                                        },
                                        TaxName: sdk.String("facilis"),
                                        TaxType: sdk.String("reiciendis"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("a"),
                                            Value: sdk.String("iste"),
                                        },
                                        TaxName: sdk.String("dicta"),
                                        TaxType: sdk.String("quos"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("ullam"),
                                            Value: sdk.String("dolore"),
                                        },
                                        TaxName: sdk.String("modi"),
                                        TaxType: sdk.String("itaque"),
                                    },
                                    shared.UnitInvoiceTaxLine{
                                        TaxAmount: &shared.Price{
                                            Currency: sdk.String("maxime"),
                                            Value: sdk.String("modi"),
                                        },
                                        TaxName: sdk.String("consequuntur"),
                                        TaxType: sdk.String("assumenda"),
                                    },
                                },
                            },
                        },
                    },
                    ShipmentGroupID: sdk.String("vero"),
                },
            },
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("totam"),
        MerchantID: "reiciendis",
        OauthToken: sdk.String("ab"),
        OrderID: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("iure"),
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
