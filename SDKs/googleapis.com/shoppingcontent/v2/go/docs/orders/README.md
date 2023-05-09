# Orders

### Available Operations

* [ContentOrdersAcknowledge](#contentordersacknowledge) - Marks an order as acknowledged.
* [ContentOrdersAdvancetestorder](#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [ContentOrdersCancel](#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [ContentOrdersCancellineitem](#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [ContentOrdersCanceltestorderbycustomer](#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [ContentOrdersCreatetestorder](#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [ContentOrdersCreatetestreturn](#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [ContentOrdersCustombatch](#contentorderscustombatch) - Retrieves or modifies multiple orders in a single request.
* [ContentOrdersGet](#contentordersget) - Retrieves an order from your Merchant Center account.
* [ContentOrdersGetbymerchantorderid](#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [ContentOrdersGettestordertemplate](#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [ContentOrdersInstorerefundlineitem](#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* [ContentOrdersList](#contentorderslist) - Lists the orders in your Merchant Center account.
* [ContentOrdersRefund](#contentordersrefund) - Deprecated, please use returnRefundLineItem instead.
* [ContentOrdersRejectreturnlineitem](#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [ContentOrdersReturnlineitem](#contentordersreturnlineitem) - Returns a line item.
* [ContentOrdersReturnrefundlineitem](#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [ContentOrdersSetlineitemmetadata](#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [ContentOrdersShiplineitems](#contentordersshiplineitems) - Marks line item(s) as shipped.
* [ContentOrdersUpdatelineitemshippingdetails](#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [ContentOrdersUpdatemerchantorderid](#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [ContentOrdersUpdateshipment](#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

## ContentOrdersAcknowledge

Marks an order as acknowledged.

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
    res, err := s.Orders.ContentOrdersAcknowledge(ctx, operations.ContentOrdersAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersAcknowledgeRequest: &shared.OrdersAcknowledgeRequest{
            OperationID: sdk.String("saepe"),
        },
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("illum"),
        Key: sdk.String("nemo"),
        MerchantID: "illum",
        OauthToken: sdk.String("facilis"),
        OrderID: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.ContentOrdersAcknowledgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersAcknowledgeResponse != nil {
        // handle response
    }
}
```

## ContentOrdersAdvancetestorder

Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".

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
    res, err := s.Orders.ContentOrdersAdvancetestorder(ctx, operations.ContentOrdersAdvancetestorderRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("eveniet"),
        MerchantID: "laborum",
        OauthToken: sdk.String("incidunt"),
        OrderID: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.ContentOrdersAdvancetestorderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersAdvanceTestOrderResponse != nil {
        // handle response
    }
}
```

## ContentOrdersCancel

Cancels all line items in an order, making a full refund.

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
    res, err := s.Orders.ContentOrdersCancel(ctx, operations.ContentOrdersCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersCancelRequest: &shared.OrdersCancelRequest{
            OperationID: sdk.String("molestias"),
            Reason: sdk.String("laborum"),
            ReasonText: sdk.String("est"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugit"),
        MerchantID: "aliquid",
        OauthToken: sdk.String("magnam"),
        OrderID: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.ContentOrdersCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersCancelResponse != nil {
        // handle response
    }
}
```

## ContentOrdersCancellineitem

Cancels a line item, making a full refund.

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
    res, err := s.Orders.ContentOrdersCancellineitem(ctx, operations.ContentOrdersCancellineitemRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersCancelLineItemRequest: &shared.OrdersCancelLineItemRequest{
            Amount: &shared.Price{
                Currency: sdk.String("unde"),
                Value: sdk.String("nulla"),
            },
            AmountPretax: &shared.Price{
                Currency: sdk.String("error"),
                Value: sdk.String("mollitia"),
            },
            AmountTax: &shared.Price{
                Currency: sdk.String("magnam"),
                Value: sdk.String("nostrum"),
            },
            LineItemID: sdk.String("esse"),
            OperationID: sdk.String("corrupti"),
            ProductID: sdk.String("fuga"),
            Quantity: sdk.Int64(815225),
            Reason: sdk.String("impedit"),
            ReasonText: sdk.String("quasi"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("voluptatem"),
        MerchantID: "facere",
        OauthToken: sdk.String("necessitatibus"),
        OrderID: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.ContentOrdersCancellineitemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersCancelLineItemResponse != nil {
        // handle response
    }
}
```

## ContentOrdersCanceltestorderbycustomer

Sandbox only. Cancels a test order for customer-initiated cancellation.

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
    res, err := s.Orders.ContentOrdersCanceltestorderbycustomer(ctx, operations.ContentOrdersCanceltestorderbycustomerRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersCancelTestOrderByCustomerRequest: &shared.OrdersCancelTestOrderByCustomerRequest{
            Reason: sdk.String("porro"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("sed"),
        MerchantID: "necessitatibus",
        OauthToken: sdk.String("impedit"),
        OrderID: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.ContentOrdersCanceltestorderbycustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersCancelTestOrderByCustomerResponse != nil {
        // handle response
    }
}
```

## ContentOrdersCreatetestorder

Sandbox only. Creates a test order.

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
    res, err := s.Orders.ContentOrdersCreatetestorder(ctx, operations.ContentOrdersCreatetestorderRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersCreateTestOrderRequest: &shared.OrdersCreateTestOrderRequest{
            Country: sdk.String("Wallis and Futuna"),
            TemplateName: sdk.String("alias"),
            TestOrder: &shared.TestOrder{
                Customer: &shared.TestOrderCustomer{
                    Email: sdk.String("Judah_Carter@hotmail.com"),
                    ExplicitMarketingPreference: sdk.Bool(false),
                    FullName: sdk.String("doloribus"),
                    MarketingRightsInfo: &shared.TestOrderCustomerMarketingRightsInfo{
                        ExplicitMarketingPreference: sdk.String("velit"),
                        LastUpdatedTimestamp: sdk.String("eius"),
                    },
                },
                EnableOrderinvoices: sdk.Bool(false),
                Kind: sdk.String("esse"),
                LineItems: []shared.TestOrderLineItem{
                    shared.TestOrderLineItem{
                        Product: &shared.TestOrderLineItemProduct{
                            Brand: sdk.String("eligendi"),
                            Channel: sdk.String("quasi"),
                            Condition: sdk.String("neque"),
                            ContentLanguage: sdk.String("vero"),
                            Fees: []shared.OrderLineItemProductFee{
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("accusantium"),
                                        Value: sdk.String("qui"),
                                    },
                                    Name: sdk.String("Mr. Jack Gottlieb"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("rerum"),
                                        Value: sdk.String("alias"),
                                    },
                                    Name: sdk.String("Chester Barton"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("ex"),
                                        Value: sdk.String("quas"),
                                    },
                                    Name: sdk.String("Dana Berge"),
                                },
                            },
                            Gtin: sdk.String("quam"),
                            ImageLink: sdk.String("magni"),
                            ItemGroupID: sdk.String("deserunt"),
                            Mpn: sdk.String("delectus"),
                            OfferID: sdk.String("omnis"),
                            Price: &shared.Price{
                                Currency: sdk.String("sed"),
                                Value: sdk.String("nesciunt"),
                            },
                            TargetCountry: sdk.String("maxime"),
                            Title: sdk.String("Mrs."),
                            VariantAttributes: []shared.OrderLineItemProductVariantAttribute{
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("aliquam"),
                                    Value: sdk.String("excepturi"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("maiores"),
                                    Value: sdk.String("laudantium"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("velit"),
                                    Value: sdk.String("reiciendis"),
                                },
                            },
                        },
                        QuantityOrdered: sdk.Int64(230305),
                        ReturnInfo: &shared.OrderLineItemReturnInfo{
                            DaysToReturn: sdk.Int(363845),
                            IsReturnable: sdk.Bool(false),
                            PolicyURL: sdk.String("ipsa"),
                        },
                        ShippingDetails: &shared.OrderLineItemShippingDetails{
                            DeliverByDate: sdk.String("quisquam"),
                            Method: &shared.OrderLineItemShippingDetailsMethod{
                                Carrier: sdk.String("tenetur"),
                                MaxDaysInTransit: sdk.Int64(555294),
                                MethodName: sdk.String("molestiae"),
                                MinDaysInTransit: sdk.Int64(395634),
                            },
                            ShipByDate: sdk.String("asperiores"),
                            Type: sdk.String("a"),
                        },
                        UnitTax: &shared.Price{
                            Currency: sdk.String("nobis"),
                            Value: sdk.String("perspiciatis"),
                        },
                    },
                    shared.TestOrderLineItem{
                        Product: &shared.TestOrderLineItemProduct{
                            Brand: sdk.String("accusantium"),
                            Channel: sdk.String("dicta"),
                            Condition: sdk.String("minus"),
                            ContentLanguage: sdk.String("commodi"),
                            Fees: []shared.OrderLineItemProductFee{
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("porro"),
                                        Value: sdk.String("tempore"),
                                    },
                                    Name: sdk.String("Joel Von"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("sequi"),
                                        Value: sdk.String("eligendi"),
                                    },
                                    Name: sdk.String("Claude Kutch"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("a"),
                                        Value: sdk.String("animi"),
                                    },
                                    Name: sdk.String("Dexter Stoltenberg"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("velit"),
                                        Value: sdk.String("officiis"),
                                    },
                                    Name: sdk.String("Brandi Turner"),
                                },
                            },
                            Gtin: sdk.String("accusantium"),
                            ImageLink: sdk.String("officia"),
                            ItemGroupID: sdk.String("impedit"),
                            Mpn: sdk.String("quasi"),
                            OfferID: sdk.String("blanditiis"),
                            Price: &shared.Price{
                                Currency: sdk.String("eius"),
                                Value: sdk.String("quisquam"),
                            },
                            TargetCountry: sdk.String("eos"),
                            Title: sdk.String("Miss"),
                            VariantAttributes: []shared.OrderLineItemProductVariantAttribute{
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("minus"),
                                    Value: sdk.String("quia"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("magnam"),
                                    Value: sdk.String("reprehenderit"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("quod"),
                                    Value: sdk.String("quos"),
                                },
                            },
                        },
                        QuantityOrdered: sdk.Int64(548846),
                        ReturnInfo: &shared.OrderLineItemReturnInfo{
                            DaysToReturn: sdk.Int(227870),
                            IsReturnable: sdk.Bool(false),
                            PolicyURL: sdk.String("molestiae"),
                        },
                        ShippingDetails: &shared.OrderLineItemShippingDetails{
                            DeliverByDate: sdk.String("amet"),
                            Method: &shared.OrderLineItemShippingDetailsMethod{
                                Carrier: sdk.String("laborum"),
                                MaxDaysInTransit: sdk.Int64(266946),
                                MethodName: sdk.String("perferendis"),
                                MinDaysInTransit: sdk.Int64(897058),
                            },
                            ShipByDate: sdk.String("architecto"),
                            Type: sdk.String("molestias"),
                        },
                        UnitTax: &shared.Price{
                            Currency: sdk.String("dolore"),
                            Value: sdk.String("sunt"),
                        },
                    },
                },
                NotificationMode: sdk.String("maiores"),
                PaymentMethod: &shared.TestOrderPaymentMethod{
                    ExpirationMonth: sdk.Int(205011),
                    ExpirationYear: sdk.Int(139745),
                    LastFourDigits: sdk.String("earum"),
                    PredefinedBillingAddress: sdk.String("veniam"),
                    Type: sdk.String("ipsam"),
                },
                PredefinedDeliveryAddress: sdk.String("eaque"),
                PredefinedPickupDetails: sdk.String("exercitationem"),
                Promotions: []shared.OrderLegacyPromotion{
                    shared.OrderLegacyPromotion{
                        Benefits: []shared.OrderLegacyPromotionBenefit{
                            shared.OrderLegacyPromotionBenefit{
                                Discount: &shared.Price{
                                    Currency: sdk.String("ad"),
                                    Value: sdk.String("nisi"),
                                },
                                OfferIds: []string{
                                    "quis",
                                    "quibusdam",
                                    "nemo",
                                    "suscipit",
                                },
                                SubType: sdk.String("pariatur"),
                                TaxImpact: &shared.Price{
                                    Currency: sdk.String("sit"),
                                    Value: sdk.String("quidem"),
                                },
                                Type: sdk.String("repellendus"),
                            },
                            shared.OrderLegacyPromotionBenefit{
                                Discount: &shared.Price{
                                    Currency: sdk.String("perferendis"),
                                    Value: sdk.String("id"),
                                },
                                OfferIds: []string{
                                    "sed",
                                    "possimus",
                                    "repellat",
                                    "repudiandae",
                                },
                                SubType: sdk.String("architecto"),
                                TaxImpact: &shared.Price{
                                    Currency: sdk.String("adipisci"),
                                    Value: sdk.String("pariatur"),
                                },
                                Type: sdk.String("harum"),
                            },
                        },
                        EffectiveDates: sdk.String("dolore"),
                        GenericRedemptionCode: sdk.String("voluptatibus"),
                        ID: sdk.String("62cba3f8-941a-4ebc-8b80-a6924d3b2ecf"),
                        LongTitle: sdk.String("minus"),
                        ProductApplicability: sdk.String("quo"),
                        RedemptionChannel: sdk.String("quos"),
                    },
                    shared.OrderLegacyPromotion{
                        Benefits: []shared.OrderLegacyPromotionBenefit{
                            shared.OrderLegacyPromotionBenefit{
                                Discount: &shared.Price{
                                    Currency: sdk.String("voluptatum"),
                                    Value: sdk.String("iste"),
                                },
                                OfferIds: []string{
                                    "accusantium",
                                    "illo",
                                },
                                SubType: sdk.String("aut"),
                                TaxImpact: &shared.Price{
                                    Currency: sdk.String("doloribus"),
                                    Value: sdk.String("nostrum"),
                                },
                                Type: sdk.String("at"),
                            },
                            shared.OrderLegacyPromotionBenefit{
                                Discount: &shared.Price{
                                    Currency: sdk.String("possimus"),
                                    Value: sdk.String("neque"),
                                },
                                OfferIds: []string{
                                    "vel",
                                    "sapiente",
                                    "mollitia",
                                    "quae",
                                },
                                SubType: sdk.String("quos"),
                                TaxImpact: &shared.Price{
                                    Currency: sdk.String("aperiam"),
                                    Value: sdk.String("non"),
                                },
                                Type: sdk.String("voluptates"),
                            },
                            shared.OrderLegacyPromotionBenefit{
                                Discount: &shared.Price{
                                    Currency: sdk.String("ad"),
                                    Value: sdk.String("aliquam"),
                                },
                                OfferIds: []string{
                                    "quas",
                                    "consequuntur",
                                    "maiores",
                                    "inventore",
                                },
                                SubType: sdk.String("aliquid"),
                                TaxImpact: &shared.Price{
                                    Currency: sdk.String("laudantium"),
                                    Value: sdk.String("est"),
                                },
                                Type: sdk.String("dolor"),
                            },
                            shared.OrderLegacyPromotionBenefit{
                                Discount: &shared.Price{
                                    Currency: sdk.String("aliquid"),
                                    Value: sdk.String("consectetur"),
                                },
                                OfferIds: []string{
                                    "rem",
                                    "voluptatum",
                                    "ducimus",
                                    "adipisci",
                                },
                                SubType: sdk.String("recusandae"),
                                TaxImpact: &shared.Price{
                                    Currency: sdk.String("tempora"),
                                    Value: sdk.String("blanditiis"),
                                },
                                Type: sdk.String("numquam"),
                            },
                        },
                        EffectiveDates: sdk.String("sequi"),
                        GenericRedemptionCode: sdk.String("voluptatum"),
                        ID: sdk.String("0b1f6b8c-a275-4a60-a04c-495cc699171b"),
                        LongTitle: sdk.String("ipsam"),
                        ProductApplicability: sdk.String("quasi"),
                        RedemptionChannel: sdk.String("cumque"),
                    },
                },
                ShippingCost: &shared.Price{
                    Currency: sdk.String("dicta"),
                    Value: sdk.String("harum"),
                },
                ShippingCostTax: &shared.Price{
                    Currency: sdk.String("facere"),
                    Value: sdk.String("facilis"),
                },
                ShippingOption: sdk.String("beatae"),
            },
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("corrupti"),
        MerchantID: "rem",
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ContentOrdersCreatetestorderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersCreateTestOrderResponse != nil {
        // handle response
    }
}
```

## ContentOrdersCreatetestreturn

Sandbox only. Creates a test return.

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
    res, err := s.Orders.ContentOrdersCreatetestreturn(ctx, operations.ContentOrdersCreatetestreturnRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersCreateTestReturnRequest: &shared.OrdersCreateTestReturnRequest{
            Items: []shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                    LineItemID: sdk.String("incidunt"),
                    Quantity: sdk.Int64(797293),
                },
                shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                    LineItemID: sdk.String("minus"),
                    Quantity: sdk.Int64(781491),
                },
                shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                    LineItemID: sdk.String("id"),
                    Quantity: sdk.Int64(569706),
                },
                shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                    LineItemID: sdk.String("occaecati"),
                    Quantity: sdk.Int64(726851),
                },
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("accusantium"),
        MerchantID: "soluta",
        OauthToken: sdk.String("fugit"),
        OrderID: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.ContentOrdersCreatetestreturnSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersCreateTestReturnResponse != nil {
        // handle response
    }
}
```

## ContentOrdersCustombatch

Retrieves or modifies multiple orders in a single request.

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
    res, err := s.Orders.ContentOrdersCustombatch(ctx, operations.ContentOrdersCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersCustomBatchRequest: &shared.OrdersCustomBatchRequest{
            Entries: []shared.OrdersCustomBatchRequestEntry{
                shared.OrdersCustomBatchRequestEntry{
                    BatchID: sdk.Int64(480421),
                    Cancel: &shared.OrdersCustomBatchRequestEntryCancel{
                        Reason: sdk.String("dolor"),
                        ReasonText: sdk.String("voluptates"),
                    },
                    CancelLineItem: &shared.OrdersCustomBatchRequestEntryCancelLineItem{
                        Amount: &shared.Price{
                            Currency: sdk.String("tempora"),
                            Value: sdk.String("magni"),
                        },
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("rerum"),
                            Value: sdk.String("doloremque"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("voluptatem"),
                            Value: sdk.String("eum"),
                        },
                        LineItemID: sdk.String("at"),
                        ProductID: sdk.String("eum"),
                        Quantity: sdk.Int64(444479),
                        Reason: sdk.String("voluptatum"),
                        ReasonText: sdk.String("blanditiis"),
                    },
                    InStoreRefundLineItem: &shared.OrdersCustomBatchRequestEntryInStoreRefundLineItem{
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("nihil"),
                            Value: sdk.String("atque"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("rerum"),
                            Value: sdk.String("deserunt"),
                        },
                        LineItemID: sdk.String("atque"),
                        ProductID: sdk.String("nostrum"),
                        Quantity: sdk.Int64(542340),
                        Reason: sdk.String("architecto"),
                        ReasonText: sdk.String("est"),
                    },
                    MerchantID: sdk.String("enim"),
                    MerchantOrderID: sdk.String("rem"),
                    Method: sdk.String("magni"),
                    OperationID: sdk.String("quae"),
                    OrderID: sdk.String("quas"),
                    Refund: &shared.OrdersCustomBatchRequestEntryRefund{
                        Amount: &shared.Price{
                            Currency: sdk.String("placeat"),
                            Value: sdk.String("enim"),
                        },
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("labore"),
                            Value: sdk.String("sapiente"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("saepe"),
                            Value: sdk.String("delectus"),
                        },
                        Reason: sdk.String("officia"),
                        ReasonText: sdk.String("natus"),
                    },
                    RejectReturnLineItem: &shared.OrdersCustomBatchRequestEntryRejectReturnLineItem{
                        LineItemID: sdk.String("cumque"),
                        ProductID: sdk.String("natus"),
                        Quantity: sdk.Int64(312511),
                        Reason: sdk.String("doloribus"),
                        ReasonText: sdk.String("quia"),
                    },
                    ReturnLineItem: &shared.OrdersCustomBatchRequestEntryReturnLineItem{
                        LineItemID: sdk.String("officiis"),
                        ProductID: sdk.String("mollitia"),
                        Quantity: sdk.Int64(765070),
                        Reason: sdk.String("quis"),
                        ReasonText: sdk.String("enim"),
                    },
                    ReturnRefundLineItem: &shared.OrdersCustomBatchRequestEntryReturnRefundLineItem{
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("eum"),
                            Value: sdk.String("nemo"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("illum"),
                            Value: sdk.String("nesciunt"),
                        },
                        LineItemID: sdk.String("sit"),
                        ProductID: sdk.String("odio"),
                        Quantity: sdk.Int64(794306),
                        Reason: sdk.String("asperiores"),
                        ReasonText: sdk.String("recusandae"),
                    },
                    SetLineItemMetadata: &shared.OrdersCustomBatchRequestEntrySetLineItemMetadata{
                        Annotations: []shared.OrderMerchantProvidedAnnotation{
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("praesentium"),
                                Value: sdk.String("dicta"),
                            },
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("fugit"),
                                Value: sdk.String("sit"),
                            },
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("aliquid"),
                                Value: sdk.String("necessitatibus"),
                            },
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("sed"),
                                Value: sdk.String("deleniti"),
                            },
                        },
                        LineItemID: sdk.String("sunt"),
                        ProductID: sdk.String("nesciunt"),
                    },
                    ShipLineItems: &shared.OrdersCustomBatchRequestEntryShipLineItems{
                        Carrier: sdk.String("delectus"),
                        LineItems: []shared.OrderShipmentLineItemShipment{
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("aliquam"),
                                ProductID: sdk.String("deserunt"),
                                Quantity: sdk.Int64(266680),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("sunt"),
                                ProductID: sdk.String("impedit"),
                                Quantity: sdk.Int64(259600),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("voluptatum"),
                                ProductID: sdk.String("ipsa"),
                                Quantity: sdk.Int64(872991),
                            },
                        },
                        ShipmentGroupID: sdk.String("dolorem"),
                        ShipmentID: sdk.String("repellat"),
                        ShipmentInfos: []shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                            shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                                Carrier: sdk.String("inventore"),
                                ShipmentID: sdk.String("sequi"),
                                TrackingID: sdk.String("fugit"),
                            },
                        },
                        TrackingID: sdk.String("fuga"),
                    },
                    UpdateLineItemShippingDetails: &shared.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails{
                        DeliverByDate: sdk.String("hic"),
                        LineItemID: sdk.String("eaque"),
                        ProductID: sdk.String("dolorem"),
                        ShipByDate: sdk.String("architecto"),
                    },
                    UpdateShipment: &shared.OrdersCustomBatchRequestEntryUpdateShipment{
                        Carrier: sdk.String("aperiam"),
                        DeliveryDate: sdk.String("aspernatur"),
                        ShipmentID: sdk.String("nulla"),
                        Status: sdk.String("enim"),
                        TrackingID: sdk.String("illo"),
                    },
                },
                shared.OrdersCustomBatchRequestEntry{
                    BatchID: sdk.Int64(298750),
                    Cancel: &shared.OrdersCustomBatchRequestEntryCancel{
                        Reason: sdk.String("delectus"),
                        ReasonText: sdk.String("numquam"),
                    },
                    CancelLineItem: &shared.OrdersCustomBatchRequestEntryCancelLineItem{
                        Amount: &shared.Price{
                            Currency: sdk.String("optio"),
                            Value: sdk.String("nobis"),
                        },
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("ex"),
                            Value: sdk.String("repellat"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("quae"),
                            Value: sdk.String("deleniti"),
                        },
                        LineItemID: sdk.String("expedita"),
                        ProductID: sdk.String("hic"),
                        Quantity: sdk.Int64(569834),
                        Reason: sdk.String("aliquid"),
                        ReasonText: sdk.String("sed"),
                    },
                    InStoreRefundLineItem: &shared.OrdersCustomBatchRequestEntryInStoreRefundLineItem{
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("beatae"),
                            Value: sdk.String("similique"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("ea"),
                            Value: sdk.String("animi"),
                        },
                        LineItemID: sdk.String("dolore"),
                        ProductID: sdk.String("tenetur"),
                        Quantity: sdk.Int64(493407),
                        Reason: sdk.String("esse"),
                        ReasonText: sdk.String("animi"),
                    },
                    MerchantID: sdk.String("laudantium"),
                    MerchantOrderID: sdk.String("esse"),
                    Method: sdk.String("eveniet"),
                    OperationID: sdk.String("earum"),
                    OrderID: sdk.String("velit"),
                    Refund: &shared.OrdersCustomBatchRequestEntryRefund{
                        Amount: &shared.Price{
                            Currency: sdk.String("officiis"),
                            Value: sdk.String("eius"),
                        },
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("rerum"),
                            Value: sdk.String("itaque"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("dignissimos"),
                            Value: sdk.String("ipsam"),
                        },
                        Reason: sdk.String("explicabo"),
                        ReasonText: sdk.String("impedit"),
                    },
                    RejectReturnLineItem: &shared.OrdersCustomBatchRequestEntryRejectReturnLineItem{
                        LineItemID: sdk.String("aliquid"),
                        ProductID: sdk.String("quis"),
                        Quantity: sdk.Int64(704402),
                        Reason: sdk.String("ipsum"),
                        ReasonText: sdk.String("ut"),
                    },
                    ReturnLineItem: &shared.OrdersCustomBatchRequestEntryReturnLineItem{
                        LineItemID: sdk.String("quaerat"),
                        ProductID: sdk.String("architecto"),
                        Quantity: sdk.Int64(506966),
                        Reason: sdk.String("eveniet"),
                        ReasonText: sdk.String("dolor"),
                    },
                    ReturnRefundLineItem: &shared.OrdersCustomBatchRequestEntryReturnRefundLineItem{
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("expedita"),
                            Value: sdk.String("libero"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("iste"),
                            Value: sdk.String("illo"),
                        },
                        LineItemID: sdk.String("minus"),
                        ProductID: sdk.String("quos"),
                        Quantity: sdk.Int64(835646),
                        Reason: sdk.String("sint"),
                        ReasonText: sdk.String("iusto"),
                    },
                    SetLineItemMetadata: &shared.OrdersCustomBatchRequestEntrySetLineItemMetadata{
                        Annotations: []shared.OrderMerchantProvidedAnnotation{
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("accusamus"),
                                Value: sdk.String("aperiam"),
                            },
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("voluptates"),
                                Value: sdk.String("laudantium"),
                            },
                        },
                        LineItemID: sdk.String("tempora"),
                        ProductID: sdk.String("quae"),
                    },
                    ShipLineItems: &shared.OrdersCustomBatchRequestEntryShipLineItems{
                        Carrier: sdk.String("omnis"),
                        LineItems: []shared.OrderShipmentLineItemShipment{
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("rem"),
                                ProductID: sdk.String("tenetur"),
                                Quantity: sdk.Int64(537946),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("modi"),
                                ProductID: sdk.String("earum"),
                                Quantity: sdk.Int64(101374),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("aliquam"),
                                ProductID: sdk.String("labore"),
                                Quantity: sdk.Int64(983434),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("sequi"),
                                ProductID: sdk.String("saepe"),
                                Quantity: sdk.Int64(8904),
                            },
                        },
                        ShipmentGroupID: sdk.String("esse"),
                        ShipmentID: sdk.String("debitis"),
                        ShipmentInfos: []shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                            shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                                Carrier: sdk.String("quisquam"),
                                ShipmentID: sdk.String("cumque"),
                                TrackingID: sdk.String("aliquam"),
                            },
                            shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                                Carrier: sdk.String("dolorum"),
                                ShipmentID: sdk.String("deserunt"),
                                TrackingID: sdk.String("ad"),
                            },
                            shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                                Carrier: sdk.String("reiciendis"),
                                ShipmentID: sdk.String("sequi"),
                                TrackingID: sdk.String("porro"),
                            },
                            shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                                Carrier: sdk.String("laborum"),
                                ShipmentID: sdk.String("nobis"),
                                TrackingID: sdk.String("quibusdam"),
                            },
                        },
                        TrackingID: sdk.String("omnis"),
                    },
                    UpdateLineItemShippingDetails: &shared.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails{
                        DeliverByDate: sdk.String("aut"),
                        LineItemID: sdk.String("ipsam"),
                        ProductID: sdk.String("officia"),
                        ShipByDate: sdk.String("cupiditate"),
                    },
                    UpdateShipment: &shared.OrdersCustomBatchRequestEntryUpdateShipment{
                        Carrier: sdk.String("reprehenderit"),
                        DeliveryDate: sdk.String("quia"),
                        ShipmentID: sdk.String("necessitatibus"),
                        Status: sdk.String("accusantium"),
                        TrackingID: sdk.String("ad"),
                    },
                },
                shared.OrdersCustomBatchRequestEntry{
                    BatchID: sdk.Int64(392752),
                    Cancel: &shared.OrdersCustomBatchRequestEntryCancel{
                        Reason: sdk.String("molestiae"),
                        ReasonText: sdk.String("quia"),
                    },
                    CancelLineItem: &shared.OrdersCustomBatchRequestEntryCancelLineItem{
                        Amount: &shared.Price{
                            Currency: sdk.String("laudantium"),
                            Value: sdk.String("sed"),
                        },
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("odit"),
                            Value: sdk.String("iusto"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("expedita"),
                            Value: sdk.String("eos"),
                        },
                        LineItemID: sdk.String("repellendus"),
                        ProductID: sdk.String("nesciunt"),
                        Quantity: sdk.Int64(57909),
                        Reason: sdk.String("sint"),
                        ReasonText: sdk.String("dolore"),
                    },
                    InStoreRefundLineItem: &shared.OrdersCustomBatchRequestEntryInStoreRefundLineItem{
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("esse"),
                            Value: sdk.String("accusantium"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("distinctio"),
                            Value: sdk.String("sapiente"),
                        },
                        LineItemID: sdk.String("quam"),
                        ProductID: sdk.String("est"),
                        Quantity: sdk.Int64(307306),
                        Reason: sdk.String("delectus"),
                        ReasonText: sdk.String("culpa"),
                    },
                    MerchantID: sdk.String("voluptatum"),
                    MerchantOrderID: sdk.String("iusto"),
                    Method: sdk.String("quod"),
                    OperationID: sdk.String("voluptatibus"),
                    OrderID: sdk.String("voluptas"),
                    Refund: &shared.OrdersCustomBatchRequestEntryRefund{
                        Amount: &shared.Price{
                            Currency: sdk.String("non"),
                            Value: sdk.String("ullam"),
                        },
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("laborum"),
                            Value: sdk.String("voluptas"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("doloribus"),
                            Value: sdk.String("animi"),
                        },
                        Reason: sdk.String("recusandae"),
                        ReasonText: sdk.String("corporis"),
                    },
                    RejectReturnLineItem: &shared.OrdersCustomBatchRequestEntryRejectReturnLineItem{
                        LineItemID: sdk.String("non"),
                        ProductID: sdk.String("necessitatibus"),
                        Quantity: sdk.Int64(719469),
                        Reason: sdk.String("maiores"),
                        ReasonText: sdk.String("laboriosam"),
                    },
                    ReturnLineItem: &shared.OrdersCustomBatchRequestEntryReturnLineItem{
                        LineItemID: sdk.String("voluptatem"),
                        ProductID: sdk.String("optio"),
                        Quantity: sdk.Int64(193623),
                        Reason: sdk.String("sunt"),
                        ReasonText: sdk.String("vitae"),
                    },
                    ReturnRefundLineItem: &shared.OrdersCustomBatchRequestEntryReturnRefundLineItem{
                        AmountPretax: &shared.Price{
                            Currency: sdk.String("voluptatibus"),
                            Value: sdk.String("doloremque"),
                        },
                        AmountTax: &shared.Price{
                            Currency: sdk.String("sed"),
                            Value: sdk.String("amet"),
                        },
                        LineItemID: sdk.String("rerum"),
                        ProductID: sdk.String("in"),
                        Quantity: sdk.Int64(345514),
                        Reason: sdk.String("temporibus"),
                        ReasonText: sdk.String("ratione"),
                    },
                    SetLineItemMetadata: &shared.OrdersCustomBatchRequestEntrySetLineItemMetadata{
                        Annotations: []shared.OrderMerchantProvidedAnnotation{
                            shared.OrderMerchantProvidedAnnotation{
                                Key: sdk.String("nisi"),
                                Value: sdk.String("dignissimos"),
                            },
                        },
                        LineItemID: sdk.String("reiciendis"),
                        ProductID: sdk.String("itaque"),
                    },
                    ShipLineItems: &shared.OrdersCustomBatchRequestEntryShipLineItems{
                        Carrier: sdk.String("vitae"),
                        LineItems: []shared.OrderShipmentLineItemShipment{
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("accusantium"),
                                ProductID: sdk.String("quod"),
                                Quantity: sdk.Int64(796117),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("quos"),
                                ProductID: sdk.String("possimus"),
                                Quantity: sdk.Int64(980467),
                            },
                            shared.OrderShipmentLineItemShipment{
                                LineItemID: sdk.String("odio"),
                                ProductID: sdk.String("provident"),
                                Quantity: sdk.Int64(960933),
                            },
                        },
                        ShipmentGroupID: sdk.String("aperiam"),
                        ShipmentID: sdk.String("similique"),
                        ShipmentInfos: []shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                            shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                                Carrier: sdk.String("provident"),
                                ShipmentID: sdk.String("ex"),
                                TrackingID: sdk.String("repellendus"),
                            },
                        },
                        TrackingID: sdk.String("unde"),
                    },
                    UpdateLineItemShippingDetails: &shared.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails{
                        DeliverByDate: sdk.String("alias"),
                        LineItemID: sdk.String("impedit"),
                        ProductID: sdk.String("sequi"),
                        ShipByDate: sdk.String("commodi"),
                    },
                    UpdateShipment: &shared.OrdersCustomBatchRequestEntryUpdateShipment{
                        Carrier: sdk.String("labore"),
                        DeliveryDate: sdk.String("expedita"),
                        ShipmentID: sdk.String("in"),
                        Status: sdk.String("quisquam"),
                        TrackingID: sdk.String("sunt"),
                    },
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("quas"),
    }, operations.ContentOrdersCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentOrdersGet

Retrieves an order from your Merchant Center account.

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
    res, err := s.Orders.ContentOrdersGet(ctx, operations.ContentOrdersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("eveniet"),
        MerchantID: "repudiandae",
        OauthToken: sdk.String("sed"),
        OrderID: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ContentOrdersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## ContentOrdersGetbymerchantorderid

Retrieves an order using merchant order ID.

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
    res, err := s.Orders.ContentOrdersGetbymerchantorderid(ctx, operations.ContentOrdersGetbymerchantorderidRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("maiores"),
        MerchantID: "itaque",
        MerchantOrderID: "vero",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.ContentOrdersGetbymerchantorderidSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersGetByMerchantOrderIDResponse != nil {
        // handle response
    }
}
```

## ContentOrdersGettestordertemplate

Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.

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
    res, err := s.Orders.ContentOrdersGettestordertemplate(ctx, operations.ContentOrdersGettestordertemplateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Country: sdk.String("Holy See (Vatican City State)"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("earum"),
        MerchantID: "quod",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        TemplateName: operations.ContentOrdersGettestordertemplateTemplateNameEnumTemplate2,
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.ContentOrdersGettestordertemplateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersGetTestOrderTemplateResponse != nil {
        // handle response
    }
}
```

## ContentOrdersInstorerefundlineitem

Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.

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
    res, err := s.Orders.ContentOrdersInstorerefundlineitem(ctx, operations.ContentOrdersInstorerefundlineitemRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersInStoreRefundLineItemRequest: &shared.OrdersInStoreRefundLineItemRequest{
            AmountPretax: &shared.Price{
                Currency: sdk.String("deserunt"),
                Value: sdk.String("odit"),
            },
            AmountTax: &shared.Price{
                Currency: sdk.String("ad"),
                Value: sdk.String("sequi"),
            },
            LineItemID: sdk.String("beatae"),
            OperationID: sdk.String("iusto"),
            ProductID: sdk.String("esse"),
            Quantity: sdk.Int64(298246),
            Reason: sdk.String("odio"),
            ReasonText: sdk.String("nulla"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("laborum"),
        MerchantID: "illum",
        OauthToken: sdk.String("fugit"),
        OrderID: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.ContentOrdersInstorerefundlineitemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersInStoreRefundLineItemResponse != nil {
        // handle response
    }
}
```

## ContentOrdersList

Lists the orders in your Merchant Center account.

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
    res, err := s.Orders.ContentOrdersList(ctx, operations.ContentOrdersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Acknowledged: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("consectetur"),
        MaxResults: sdk.Int64(840641),
        MerchantID: "optio",
        OauthToken: sdk.String("ipsa"),
        OrderBy: sdk.String("maiores"),
        PageToken: sdk.String("exercitationem"),
        PlacedDateEnd: sdk.String("culpa"),
        PlacedDateStart: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        Statuses: []ContentOrdersListStatusesEnum{
            operations.ContentOrdersListStatusesEnumCanceled,
            operations.ContentOrdersListStatusesEnumPartiallyDelivered,
            operations.ContentOrdersListStatusesEnumPendingShipment,
            operations.ContentOrdersListStatusesEnumPartiallyDelivered,
        },
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ContentOrdersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersListResponse != nil {
        // handle response
    }
}
```

## ContentOrdersRefund

Deprecated, please use returnRefundLineItem instead.

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
    res, err := s.Orders.ContentOrdersRefund(ctx, operations.ContentOrdersRefundRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersRefundRequest: &shared.OrdersRefundRequest{
            Amount: &shared.Price{
                Currency: sdk.String("laudantium"),
                Value: sdk.String("iusto"),
            },
            AmountPretax: &shared.Price{
                Currency: sdk.String("corrupti"),
                Value: sdk.String("molestiae"),
            },
            AmountTax: &shared.Price{
                Currency: sdk.String("quis"),
                Value: sdk.String("iure"),
            },
            OperationID: sdk.String("ab"),
            Reason: sdk.String("quaerat"),
            ReasonText: sdk.String("amet"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("iure"),
        Key: sdk.String("quisquam"),
        MerchantID: "provident",
        OauthToken: sdk.String("laudantium"),
        OrderID: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.ContentOrdersRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersRefundResponse != nil {
        // handle response
    }
}
```

## ContentOrdersRejectreturnlineitem

Rejects return on an line item.

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
    res, err := s.Orders.ContentOrdersRejectreturnlineitem(ctx, operations.ContentOrdersRejectreturnlineitemRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersRejectReturnLineItemRequest: &shared.OrdersRejectReturnLineItemRequest{
            LineItemID: sdk.String("tempora"),
            OperationID: sdk.String("perferendis"),
            ProductID: sdk.String("corrupti"),
            Quantity: sdk.Int64(40874),
            Reason: sdk.String("fugiat"),
            ReasonText: sdk.String("numquam"),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("similique"),
        Key: sdk.String("porro"),
        MerchantID: "impedit",
        OauthToken: sdk.String("nisi"),
        OrderID: "cumque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.ContentOrdersRejectreturnlineitemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersRejectReturnLineItemResponse != nil {
        // handle response
    }
}
```

## ContentOrdersReturnlineitem

Returns a line item.

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
    res, err := s.Orders.ContentOrdersReturnlineitem(ctx, operations.ContentOrdersReturnlineitemRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersReturnLineItemRequest: &shared.OrdersReturnLineItemRequest{
            LineItemID: sdk.String("enim"),
            OperationID: sdk.String("maiores"),
            ProductID: sdk.String("consectetur"),
            Quantity: sdk.Int64(898826),
            Reason: sdk.String("maxime"),
            ReasonText: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("magnam"),
        MerchantID: "repellat",
        OauthToken: sdk.String("omnis"),
        OrderID: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("id"),
    }, operations.ContentOrdersReturnlineitemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersReturnLineItemResponse != nil {
        // handle response
    }
}
```

## ContentOrdersReturnrefundlineitem

Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.

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
    res, err := s.Orders.ContentOrdersReturnrefundlineitem(ctx, operations.ContentOrdersReturnrefundlineitemRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersReturnRefundLineItemRequest: &shared.OrdersReturnRefundLineItemRequest{
            AmountPretax: &shared.Price{
                Currency: sdk.String("fugit"),
                Value: sdk.String("ipsam"),
            },
            AmountTax: &shared.Price{
                Currency: sdk.String("nostrum"),
                Value: sdk.String("sequi"),
            },
            LineItemID: sdk.String("voluptatum"),
            OperationID: sdk.String("quasi"),
            ProductID: sdk.String("error"),
            Quantity: sdk.Int64(748606),
            Reason: sdk.String("tempora"),
            ReasonText: sdk.String("voluptate"),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("possimus"),
        MerchantID: "fugit",
        OauthToken: sdk.String("voluptatem"),
        OrderID: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("eos"),
    }, operations.ContentOrdersReturnrefundlineitemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersReturnRefundLineItemResponse != nil {
        // handle response
    }
}
```

## ContentOrdersSetlineitemmetadata

Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.

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
    res, err := s.Orders.ContentOrdersSetlineitemmetadata(ctx, operations.ContentOrdersSetlineitemmetadataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersSetLineItemMetadataRequest: &shared.OrdersSetLineItemMetadataRequest{
            Annotations: []shared.OrderMerchantProvidedAnnotation{
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("hic"),
                    Value: sdk.String("maiores"),
                },
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("asperiores"),
                    Value: sdk.String("autem"),
                },
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("nesciunt"),
                    Value: sdk.String("cupiditate"),
                },
            },
            LineItemID: sdk.String("animi"),
            OperationID: sdk.String("provident"),
            ProductID: sdk.String("beatae"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("quo"),
        MerchantID: "fuga",
        OauthToken: sdk.String("tempore"),
        OrderID: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.ContentOrdersSetlineitemmetadataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersSetLineItemMetadataResponse != nil {
        // handle response
    }
}
```

## ContentOrdersShiplineitems

Marks line item(s) as shipped.

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
    res, err := s.Orders.ContentOrdersShiplineitems(ctx, operations.ContentOrdersShiplineitemsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersShipLineItemsRequest: &shared.OrdersShipLineItemsRequest{
            Carrier: sdk.String("aliquid"),
            LineItems: []shared.OrderShipmentLineItemShipment{
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("laboriosam"),
                    ProductID: sdk.String("accusamus"),
                    Quantity: sdk.Int64(68292),
                },
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("itaque"),
                    ProductID: sdk.String("quisquam"),
                    Quantity: sdk.Int64(53529),
                },
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("alias"),
                    ProductID: sdk.String("qui"),
                    Quantity: sdk.Int64(163263),
                },
            },
            OperationID: sdk.String("vitae"),
            ShipmentGroupID: sdk.String("quidem"),
            ShipmentID: sdk.String("sequi"),
            ShipmentInfos: []shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                    Carrier: sdk.String("exercitationem"),
                    ShipmentID: sdk.String("illum"),
                    TrackingID: sdk.String("praesentium"),
                },
            },
            TrackingID: sdk.String("unde"),
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("amet"),
        Key: sdk.String("debitis"),
        MerchantID: "nobis",
        OauthToken: sdk.String("asperiores"),
        OrderID: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ContentOrdersShiplineitemsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersShipLineItemsResponse != nil {
        // handle response
    }
}
```

## ContentOrdersUpdatelineitemshippingdetails

Updates ship by and delivery by dates for a line item.

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
    res, err := s.Orders.ContentOrdersUpdatelineitemshippingdetails(ctx, operations.ContentOrdersUpdatelineitemshippingdetailsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersUpdateLineItemShippingDetailsRequest: &shared.OrdersUpdateLineItemShippingDetailsRequest{
            DeliverByDate: sdk.String("quo"),
            LineItemID: sdk.String("veniam"),
            OperationID: sdk.String("aliquam"),
            ProductID: sdk.String("provident"),
            ShipByDate: sdk.String("vero"),
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("alias"),
        Key: sdk.String("doloremque"),
        MerchantID: "tempora",
        OauthToken: sdk.String("perspiciatis"),
        OrderID: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("ex"),
    }, operations.ContentOrdersUpdatelineitemshippingdetailsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersUpdateLineItemShippingDetailsResponse != nil {
        // handle response
    }
}
```

## ContentOrdersUpdatemerchantorderid

Updates the merchant order ID for a given order.

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
    res, err := s.Orders.ContentOrdersUpdatemerchantorderid(ctx, operations.ContentOrdersUpdatemerchantorderidRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersUpdateMerchantOrderIDRequest: &shared.OrdersUpdateMerchantOrderIDRequest{
            MerchantOrderID: sdk.String("a"),
            OperationID: sdk.String("laborum"),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("qui"),
        Key: sdk.String("accusantium"),
        MerchantID: "commodi",
        OauthToken: sdk.String("atque"),
        OrderID: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("quam"),
    }, operations.ContentOrdersUpdatemerchantorderidSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersUpdateMerchantOrderIDResponse != nil {
        // handle response
    }
}
```

## ContentOrdersUpdateshipment

Updates a shipment's status, carrier, and/or tracking ID.

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
    res, err := s.Orders.ContentOrdersUpdateshipment(ctx, operations.ContentOrdersUpdateshipmentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersUpdateShipmentRequest: &shared.OrdersUpdateShipmentRequest{
            Carrier: sdk.String("vitae"),
            DeliveryDate: sdk.String("sapiente"),
            OperationID: sdk.String("reiciendis"),
            ShipmentID: sdk.String("quod"),
            Status: sdk.String("voluptate"),
            TrackingID: sdk.String("inventore"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("ab"),
        Key: sdk.String("ex"),
        MerchantID: "consectetur",
        OauthToken: sdk.String("maiores"),
        OrderID: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.ContentOrdersUpdateshipmentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersUpdateShipmentResponse != nil {
        // handle response
    }
}
```
