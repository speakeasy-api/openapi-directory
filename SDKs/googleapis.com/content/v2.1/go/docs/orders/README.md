# Orders

### Available Operations

* [ContentOrdersAcknowledge](#contentordersacknowledge) - Marks an order as acknowledged.
* [ContentOrdersAdvancetestorder](#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [ContentOrdersCancel](#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [ContentOrdersCancellineitem](#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [ContentOrdersCanceltestorderbycustomer](#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [ContentOrdersCaptureOrder](#contentorderscaptureorder) - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* [ContentOrdersCreatetestorder](#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [ContentOrdersCreatetestreturn](#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [ContentOrdersGet](#contentordersget) - Retrieves an order from your Merchant Center account.
* [ContentOrdersGetbymerchantorderid](#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [ContentOrdersGettestordertemplate](#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [ContentOrdersInstorerefundlineitem](#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* [ContentOrdersList](#contentorderslist) - Lists the orders in your Merchant Center account.
* [ContentOrdersRefunditem](#contentordersrefunditem) - Issues a partial or total refund for items and shipment.
* [ContentOrdersRefundorder](#contentordersrefundorder) - Issues a partial or total refund for an order.
* [ContentOrdersRejectreturnlineitem](#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [ContentOrdersReturnrefundlineitem](#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [ContentOrdersSetlineitemmetadata](#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
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
            OperationID: sdk.String("magnam"),
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("facere"),
        MerchantID: "impedit",
        OauthToken: sdk.String("quasi"),
        OrderID: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("doloremque"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("eaque"),
        MerchantID: "architecto",
        OauthToken: sdk.String("similique"),
        OrderID: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("magni"),
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
            OperationID: sdk.String("sed"),
            Reason: sdk.String("necessitatibus"),
            ReasonText: sdk.String("impedit"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("laudantium"),
        MerchantID: "maiores",
        OauthToken: sdk.String("alias"),
        OrderID: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("suscipit"),
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
            LineItemID: sdk.String("doloribus"),
            OperationID: sdk.String("velit"),
            ProductID: sdk.String("eius"),
            Quantity: sdk.Int64(458212),
            Reason: sdk.String("in"),
            ReasonText: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        MerchantID: "qui",
        OauthToken: sdk.String("impedit"),
        OrderID: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersCancelTestOrderByCustomerRequest: &shared.OrdersCancelTestOrderByCustomerRequest{
            Reason: sdk.String("rerum"),
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("id"),
        MerchantID: "laboriosam",
        OauthToken: sdk.String("ex"),
        OrderID: "quas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("quae"),
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

## ContentOrdersCaptureOrder

Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.

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
    res, err := s.Orders.ContentOrdersCaptureOrder(ctx, operations.ContentOrdersCaptureOrderRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quam": "magni",
            "deserunt": "delectus",
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("quis"),
        MerchantID: "cupiditate",
        OauthToken: sdk.String("aliquam"),
        OrderID: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("velit"),
    }, operations.ContentOrdersCaptureOrderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CaptureOrderResponse != nil {
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
            Country: sdk.String("Denmark"),
            TemplateName: sdk.String("nemo"),
            TestOrder: &shared.TestOrder{
                DeliveryDetails: &shared.TestOrderDeliveryDetails{
                    Address: &shared.TestOrderAddress{
                        Country: sdk.String("Azerbaijan"),
                        FullAddress: []string{
                            "tenetur",
                            "quas",
                            "molestiae",
                            "aliquid",
                        },
                        IsPostOfficeBox: sdk.Bool(false),
                        Locality: sdk.String("asperiores"),
                        PostalCode: sdk.String("75017-4977"),
                        RecipientName: sdk.String("quidem"),
                        Region: sdk.String("modi"),
                        StreetAddress: []string{
                            "fugit",
                            "eius",
                            "sequi",
                            "eligendi",
                        },
                    },
                    IsScheduledDelivery: sdk.Bool(false),
                    PhoneNumber: sdk.String("asperiores"),
                },
                EnableOrderinvoices: sdk.Bool(false),
                Kind: sdk.String("esse"),
                LineItems: []shared.TestOrderLineItem{
                    shared.TestOrderLineItem{
                        Product: &shared.TestOrderLineItemProduct{
                            Brand: sdk.String("sint"),
                            Condition: sdk.String("repellat"),
                            ContentLanguage: sdk.String("a"),
                            Fees: []shared.OrderLineItemProductFee{
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("maiores"),
                                        Value: sdk.String("itaque"),
                                    },
                                    Name: sdk.String("Gerard Herzog"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("enim"),
                                        Value: sdk.String("officia"),
                                    },
                                    Name: sdk.String("Miss Duane Walker"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("quasi"),
                                        Value: sdk.String("blanditiis"),
                                    },
                                    Name: sdk.String("Adrienne Daugherty"),
                                },
                            },
                            Gtin: sdk.String("minus"),
                            ImageLink: sdk.String("quia"),
                            ItemGroupID: sdk.String("magnam"),
                            Mpn: sdk.String("reprehenderit"),
                            OfferID: sdk.String("quod"),
                            Price: &shared.Price{
                                Currency: sdk.String("quos"),
                                Value: sdk.String("corrupti"),
                            },
                            TargetCountry: sdk.String("amet"),
                            Title: sdk.String("Ms."),
                            VariantAttributes: []shared.OrderLineItemProductVariantAttribute{
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("laborum"),
                                    Value: sdk.String("modi"),
                                },
                            },
                        },
                        QuantityOrdered: sdk.Int64(21358),
                        ReturnInfo: &shared.OrderLineItemReturnInfo{
                            DaysToReturn: sdk.Int(897058),
                            IsReturnable: sdk.Bool(false),
                            PolicyURL: sdk.String("architecto"),
                        },
                        ShippingDetails: &shared.OrderLineItemShippingDetails{
                            DeliverByDate: sdk.String("molestias"),
                            Method: &shared.OrderLineItemShippingDetailsMethod{
                                Carrier: sdk.String("dolore"),
                                MaxDaysInTransit: sdk.Int64(125811),
                                MethodName: sdk.String("maiores"),
                                MinDaysInTransit: sdk.Int64(205011),
                            },
                            PickupPromiseInMinutes: sdk.Int64(139745),
                            ShipByDate: sdk.String("earum"),
                            Type: sdk.String("veniam"),
                        },
                    },
                    shared.TestOrderLineItem{
                        Product: &shared.TestOrderLineItemProduct{
                            Brand: sdk.String("ipsam"),
                            Condition: sdk.String("eaque"),
                            ContentLanguage: sdk.String("exercitationem"),
                            Fees: []shared.OrderLineItemProductFee{
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("nihil"),
                                        Value: sdk.String("ad"),
                                    },
                                    Name: sdk.String("Essie Hayes"),
                                },
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("suscipit"),
                                        Value: sdk.String("pariatur"),
                                    },
                                    Name: sdk.String("Miss Yvette Sipes"),
                                },
                            },
                            Gtin: sdk.String("sed"),
                            ImageLink: sdk.String("possimus"),
                            ItemGroupID: sdk.String("repellat"),
                            Mpn: sdk.String("repudiandae"),
                            OfferID: sdk.String("architecto"),
                            Price: &shared.Price{
                                Currency: sdk.String("adipisci"),
                                Value: sdk.String("pariatur"),
                            },
                            TargetCountry: sdk.String("harum"),
                            Title: sdk.String("Mrs."),
                            VariantAttributes: []shared.OrderLineItemProductVariantAttribute{
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("iure"),
                                    Value: sdk.String("explicabo"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("minus"),
                                    Value: sdk.String("soluta"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("dolorum"),
                                    Value: sdk.String("velit"),
                                },
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("earum"),
                                    Value: sdk.String("praesentium"),
                                },
                            },
                        },
                        QuantityOrdered: sdk.Int64(621140),
                        ReturnInfo: &shared.OrderLineItemReturnInfo{
                            DaysToReturn: sdk.Int(252473),
                            IsReturnable: sdk.Bool(false),
                            PolicyURL: sdk.String("quasi"),
                        },
                        ShippingDetails: &shared.OrderLineItemShippingDetails{
                            DeliverByDate: sdk.String("mollitia"),
                            Method: &shared.OrderLineItemShippingDetailsMethod{
                                Carrier: sdk.String("accusamus"),
                                MaxDaysInTransit: sdk.Int64(687589),
                                MethodName: sdk.String("cumque"),
                                MinDaysInTransit: sdk.Int64(42615),
                            },
                            PickupPromiseInMinutes: sdk.Int64(711871),
                            ShipByDate: sdk.String("corrupti"),
                            Type: sdk.String("eaque"),
                        },
                    },
                    shared.TestOrderLineItem{
                        Product: &shared.TestOrderLineItemProduct{
                            Brand: sdk.String("deserunt"),
                            Condition: sdk.String("aliquid"),
                            ContentLanguage: sdk.String("excepturi"),
                            Fees: []shared.OrderLineItemProductFee{
                                shared.OrderLineItemProductFee{
                                    Amount: &shared.Price{
                                        Currency: sdk.String("tempora"),
                                        Value: sdk.String("possimus"),
                                    },
                                    Name: sdk.String("Susie Cremin"),
                                },
                            },
                            Gtin: sdk.String("delectus"),
                            ImageLink: sdk.String("minus"),
                            ItemGroupID: sdk.String("quo"),
                            Mpn: sdk.String("quos"),
                            OfferID: sdk.String("asperiores"),
                            Price: &shared.Price{
                                Currency: sdk.String("voluptatum"),
                                Value: sdk.String("iste"),
                            },
                            TargetCountry: sdk.String("corporis"),
                            Title: sdk.String("Mr."),
                            VariantAttributes: []shared.OrderLineItemProductVariantAttribute{
                                shared.OrderLineItemProductVariantAttribute{
                                    Dimension: sdk.String("aut"),
                                    Value: sdk.String("doloribus"),
                                },
                            },
                        },
                        QuantityOrdered: sdk.Int64(342104),
                        ReturnInfo: &shared.OrderLineItemReturnInfo{
                            DaysToReturn: sdk.Int(869848),
                            IsReturnable: sdk.Bool(false),
                            PolicyURL: sdk.String("possimus"),
                        },
                        ShippingDetails: &shared.OrderLineItemShippingDetails{
                            DeliverByDate: sdk.String("neque"),
                            Method: &shared.OrderLineItemShippingDetailsMethod{
                                Carrier: sdk.String("pariatur"),
                                MaxDaysInTransit: sdk.Int64(424853),
                                MethodName: sdk.String("sapiente"),
                                MinDaysInTransit: sdk.Int64(652515),
                            },
                            PickupPromiseInMinutes: sdk.Int64(65121),
                            ShipByDate: sdk.String("quos"),
                            Type: sdk.String("aperiam"),
                        },
                    },
                },
                NotificationMode: sdk.String("non"),
                PickupDetails: &shared.TestOrderPickupDetails{
                    LocationCode: sdk.String("voluptates"),
                    PickupLocationAddress: &shared.TestOrderAddress{
                        Country: sdk.String("Ghana"),
                        FullAddress: []string{
                            "quisquam",
                            "quas",
                        },
                        IsPostOfficeBox: sdk.Bool(false),
                        Locality: sdk.String("consequuntur"),
                        PostalCode: sdk.String("04562-4275"),
                        RecipientName: sdk.String("voluptatum"),
                        Region: sdk.String("ducimus"),
                        StreetAddress: []string{
                            "recusandae",
                        },
                    },
                    PickupLocationType: sdk.String("tempora"),
                    PickupPersons: []shared.TestOrderPickupDetailsPickupPerson{
                        shared.TestOrderPickupDetailsPickupPerson{
                            Name: sdk.String("Miss Emily Lemke DVM"),
                            PhoneNumber: sdk.String("autem"),
                        },
                        shared.TestOrderPickupDetailsPickupPerson{
                            Name: sdk.String("Felix Sauer"),
                            PhoneNumber: sdk.String("nihil"),
                        },
                        shared.TestOrderPickupDetailsPickupPerson{
                            Name: sdk.String("Miss Madeline Jerde II"),
                            PhoneNumber: sdk.String("maxime"),
                        },
                    },
                },
                PredefinedBillingAddress: sdk.String("aliquam"),
                PredefinedDeliveryAddress: sdk.String("iste"),
                PredefinedEmail: sdk.String("ullam"),
                PredefinedPickupDetails: sdk.String("eligendi"),
                Promotions: []shared.OrderPromotion{
                    shared.OrderPromotion{
                        ApplicableItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("occaecati"),
                                OfferID: sdk.String("unde"),
                                ProductID: sdk.String("illo"),
                                Quantity: sdk.Int(469170),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("inventore"),
                                OfferID: sdk.String("libero"),
                                ProductID: sdk.String("ipsam"),
                                Quantity: sdk.Int(97659),
                            },
                        },
                        AppliedItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("dicta"),
                                OfferID: sdk.String("harum"),
                                ProductID: sdk.String("facere"),
                                Quantity: sdk.Int(707983),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("beatae"),
                                OfferID: sdk.String("cumque"),
                                ProductID: sdk.String("delectus"),
                                Quantity: sdk.Int(287152),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("expedita"),
                                OfferID: sdk.String("corrupti"),
                                ProductID: sdk.String("rem"),
                                Quantity: sdk.Int(543353),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("officiis"),
                                OfferID: sdk.String("cum"),
                                ProductID: sdk.String("pariatur"),
                                Quantity: sdk.Int(956871),
                            },
                        },
                        EndTime: sdk.String("quo"),
                        Funder: sdk.String("incidunt"),
                        MerchantPromotionID: sdk.String("quod"),
                        PriceValue: &shared.Price{
                            Currency: sdk.String("minus"),
                            Value: sdk.String("porro"),
                        },
                        ShortTitle: sdk.String("id"),
                        StartTime: sdk.String("excepturi"),
                        Subtype: sdk.String("occaecati"),
                        TaxValue: &shared.Price{
                            Currency: sdk.String("libero"),
                            Value: sdk.String("quo"),
                        },
                        Title: sdk.String("Ms."),
                        Type: sdk.String("hic"),
                    },
                    shared.OrderPromotion{
                        ApplicableItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("accusantium"),
                                OfferID: sdk.String("soluta"),
                                ProductID: sdk.String("fugit"),
                                Quantity: sdk.Int(866292),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("eligendi"),
                                OfferID: sdk.String("recusandae"),
                                ProductID: sdk.String("veritatis"),
                                Quantity: sdk.Int(13637),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("laudantium"),
                                OfferID: sdk.String("iusto"),
                                ProductID: sdk.String("dolor"),
                                Quantity: sdk.Int(917152),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("tempora"),
                                OfferID: sdk.String("magni"),
                                ProductID: sdk.String("rerum"),
                                Quantity: sdk.Int(39222),
                            },
                        },
                        AppliedItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("eum"),
                                OfferID: sdk.String("at"),
                                ProductID: sdk.String("eum"),
                                Quantity: sdk.Int(444479),
                            },
                        },
                        EndTime: sdk.String("voluptatum"),
                        Funder: sdk.String("blanditiis"),
                        MerchantPromotionID: sdk.String("nihil"),
                        PriceValue: &shared.Price{
                            Currency: sdk.String("atque"),
                            Value: sdk.String("rerum"),
                        },
                        ShortTitle: sdk.String("deserunt"),
                        StartTime: sdk.String("atque"),
                        Subtype: sdk.String("nostrum"),
                        TaxValue: &shared.Price{
                            Currency: sdk.String("atque"),
                            Value: sdk.String("architecto"),
                        },
                        Title: sdk.String("Miss"),
                        Type: sdk.String("enim"),
                    },
                    shared.OrderPromotion{
                        ApplicableItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("magni"),
                                OfferID: sdk.String("quae"),
                                ProductID: sdk.String("quas"),
                                Quantity: sdk.Int(811259),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("enim"),
                                OfferID: sdk.String("labore"),
                                ProductID: sdk.String("sapiente"),
                                Quantity: sdk.Int(901651),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("delectus"),
                                OfferID: sdk.String("officia"),
                                ProductID: sdk.String("natus"),
                                Quantity: sdk.Int(763869),
                            },
                        },
                        AppliedItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("quaerat"),
                                OfferID: sdk.String("doloribus"),
                                ProductID: sdk.String("quia"),
                                Quantity: sdk.Int(887284),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("mollitia"),
                                OfferID: sdk.String("cumque"),
                                ProductID: sdk.String("quis"),
                                Quantity: sdk.Int(313590),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("eum"),
                                OfferID: sdk.String("nemo"),
                                ProductID: sdk.String("illum"),
                                Quantity: sdk.Int(201266),
                            },
                        },
                        EndTime: sdk.String("sit"),
                        Funder: sdk.String("odio"),
                        MerchantPromotionID: sdk.String("minus"),
                        PriceValue: &shared.Price{
                            Currency: sdk.String("asperiores"),
                            Value: sdk.String("recusandae"),
                        },
                        ShortTitle: sdk.String("voluptates"),
                        StartTime: sdk.String("praesentium"),
                        Subtype: sdk.String("dicta"),
                        TaxValue: &shared.Price{
                            Currency: sdk.String("fugit"),
                            Value: sdk.String("sit"),
                        },
                        Title: sdk.String("Mrs."),
                        Type: sdk.String("necessitatibus"),
                    },
                    shared.OrderPromotion{
                        ApplicableItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("deleniti"),
                                OfferID: sdk.String("sunt"),
                                ProductID: sdk.String("nesciunt"),
                                Quantity: sdk.Int(963913),
                            },
                        },
                        AppliedItems: []shared.OrderPromotionItem{
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("aliquam"),
                                OfferID: sdk.String("deserunt"),
                                ProductID: sdk.String("modi"),
                                Quantity: sdk.Int(122085),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("impedit"),
                                OfferID: sdk.String("eius"),
                                ProductID: sdk.String("voluptatum"),
                                Quantity: sdk.Int(60078),
                            },
                            shared.OrderPromotionItem{
                                LineItemID: sdk.String("at"),
                                OfferID: sdk.String("dolorem"),
                                ProductID: sdk.String("repellat"),
                                Quantity: sdk.Int(132305),
                            },
                        },
                        EndTime: sdk.String("inventore"),
                        Funder: sdk.String("sequi"),
                        MerchantPromotionID: sdk.String("fugit"),
                        PriceValue: &shared.Price{
                            Currency: sdk.String("fuga"),
                            Value: sdk.String("hic"),
                        },
                        ShortTitle: sdk.String("eaque"),
                        StartTime: sdk.String("dolorem"),
                        Subtype: sdk.String("architecto"),
                        TaxValue: &shared.Price{
                            Currency: sdk.String("aperiam"),
                            Value: sdk.String("aspernatur"),
                        },
                        Title: sdk.String("Dr."),
                        Type: sdk.String("enim"),
                    },
                },
                ShippingCost: &shared.Price{
                    Currency: sdk.String("illo"),
                    Value: sdk.String("magnam"),
                },
                ShippingOption: sdk.String("delectus"),
            },
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("ex"),
        Key: sdk.String("repellat"),
        MerchantID: "quae",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersCreateTestReturnRequest: &shared.OrdersCreateTestReturnRequest{
            Items: []shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem{
                    LineItemID: sdk.String("beatae"),
                    Quantity: sdk.Int64(627341),
                },
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("dignissimos"),
        MerchantID: "esse",
        OauthToken: sdk.String("animi"),
        OrderID: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("earum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("dignissimos"),
        MerchantID: "ipsam",
        OauthToken: sdk.String("explicabo"),
        OrderID: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("facilis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("eveniet"),
        MerchantID: "dolor",
        MerchantOrderID: "expedita",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("minus"),
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
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Country: sdk.String("Georgia"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("aperiam"),
        MerchantID: "voluptates",
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        TemplateName: operations.ContentOrdersGettestordertemplateTemplateNameEnumTemplate1,
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("illum"),
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

Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.

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
            LineItemID: sdk.String("tenetur"),
            OperationID: sdk.String("deleniti"),
            PriceAmount: &shared.Price{
                Currency: sdk.String("modi"),
                Value: sdk.String("earum"),
            },
            ProductID: sdk.String("architecto"),
            Quantity: sdk.Int64(305189),
            Reason: sdk.String("labore"),
            ReasonText: sdk.String("maiores"),
            TaxAmount: &shared.Price{
                Currency: sdk.String("sequi"),
                Value: sdk.String("saepe"),
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("facere"),
        Key: sdk.String("quisquam"),
        MerchantID: "cumque",
        OauthToken: sdk.String("aliquam"),
        OrderID: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("reiciendis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("porro"),
        Acknowledged: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("omnis"),
        MaxResults: sdk.Int64(16252),
        MerchantID: "ipsam",
        OauthToken: sdk.String("officia"),
        OrderBy: sdk.String("cupiditate"),
        PageToken: sdk.String("reprehenderit"),
        PlacedDateEnd: sdk.String("quia"),
        PlacedDateStart: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        Statuses: []ContentOrdersListStatusesEnum{
            operations.ContentOrdersListStatusesEnumPendingShipment,
            operations.ContentOrdersListStatusesEnumPartiallyShipped,
        },
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("laudantium"),
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

## ContentOrdersRefunditem

Issues a partial or total refund for items and shipment.

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
    res, err := s.Orders.ContentOrdersRefunditem(ctx, operations.ContentOrdersRefunditemRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersRefundItemRequest: &shared.OrdersRefundItemRequest{
            Items: []shared.OrdersCustomBatchRequestEntryRefundItemItem{
                shared.OrdersCustomBatchRequestEntryRefundItemItem{
                    Amount: &shared.MonetaryAmount{
                        PriceAmount: &shared.Price{
                            Currency: sdk.String("iusto"),
                            Value: sdk.String("expedita"),
                        },
                        TaxAmount: &shared.Price{
                            Currency: sdk.String("eos"),
                            Value: sdk.String("repellendus"),
                        },
                    },
                    FullRefund: sdk.Bool(false),
                    LineItemID: sdk.String("nesciunt"),
                    ProductID: sdk.String("ipsa"),
                    Quantity: sdk.Int(575139),
                },
            },
            OperationID: sdk.String("dolore"),
            Reason: sdk.String("esse"),
            ReasonText: sdk.String("accusantium"),
            Shipping: &shared.OrdersCustomBatchRequestEntryRefundItemShipping{
                Amount: &shared.Price{
                    Currency: sdk.String("distinctio"),
                    Value: sdk.String("sapiente"),
                },
                FullRefund: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("culpa"),
        MerchantID: "voluptatum",
        OauthToken: sdk.String("iusto"),
        OrderID: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("non"),
    }, operations.ContentOrdersRefunditemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersRefundItemResponse != nil {
        // handle response
    }
}
```

## ContentOrdersRefundorder

Issues a partial or total refund for an order.

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
    res, err := s.Orders.ContentOrdersRefundorder(ctx, operations.ContentOrdersRefundorderRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrdersRefundOrderRequest: &shared.OrdersRefundOrderRequest{
            Amount: &shared.MonetaryAmount{
                PriceAmount: &shared.Price{
                    Currency: sdk.String("laborum"),
                    Value: sdk.String("voluptas"),
                },
                TaxAmount: &shared.Price{
                    Currency: sdk.String("doloribus"),
                    Value: sdk.String("animi"),
                },
            },
            FullRefund: sdk.Bool(false),
            OperationID: sdk.String("recusandae"),
            Reason: sdk.String("corporis"),
            ReasonText: sdk.String("non"),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("voluptatem"),
        MerchantID: "optio",
        OauthToken: sdk.String("sequi"),
        OrderID: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ContentOrdersRefundorderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersRefundOrderResponse != nil {
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
            LineItemID: sdk.String("amet"),
            OperationID: sdk.String("rerum"),
            ProductID: sdk.String("in"),
            Quantity: sdk.Int64(345514),
            Reason: sdk.String("temporibus"),
            ReasonText: sdk.String("ratione"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("itaque"),
        MerchantID: "vitae",
        OauthToken: sdk.String("est"),
        OrderID: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("quos"),
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

## ContentOrdersReturnrefundlineitem

Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.

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
            LineItemID: sdk.String("maiores"),
            OperationID: sdk.String("odio"),
            PriceAmount: &shared.Price{
                Currency: sdk.String("provident"),
                Value: sdk.String("sapiente"),
            },
            ProductID: sdk.String("aperiam"),
            Quantity: sdk.Int64(627717),
            Reason: sdk.String("nesciunt"),
            ReasonText: sdk.String("provident"),
            TaxAmount: &shared.Price{
                Currency: sdk.String("ex"),
                Value: sdk.String("repellendus"),
            },
        },
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("commodi"),
        MerchantID: "labore",
        OauthToken: sdk.String("expedita"),
        OrderID: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("enim"),
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

Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrdersSetLineItemMetadataRequest: &shared.OrdersSetLineItemMetadataRequest{
            Annotations: []shared.OrderMerchantProvidedAnnotation{
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("distinctio"),
                    Value: sdk.String("mollitia"),
                },
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("impedit"),
                    Value: sdk.String("accusamus"),
                },
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("et"),
                    Value: sdk.String("quas"),
                },
                shared.OrderMerchantProvidedAnnotation{
                    Key: sdk.String("blanditiis"),
                    Value: sdk.String("cum"),
                },
            },
            LineItemID: sdk.String("dicta"),
            OperationID: sdk.String("impedit"),
            ProductID: sdk.String("tempora"),
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("quas"),
        MerchantID: "impedit",
        OauthToken: sdk.String("vel"),
        OrderID: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("beatae"),
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
            LineItems: []shared.OrderShipmentLineItemShipment{
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("itaque"),
                    ProductID: sdk.String("vero"),
                    Quantity: sdk.Int64(694394),
                },
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("illo"),
                    ProductID: sdk.String("quo"),
                    Quantity: sdk.Int64(490966),
                },
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("minus"),
                    ProductID: sdk.String("distinctio"),
                    Quantity: sdk.Int64(823341),
                },
                shared.OrderShipmentLineItemShipment{
                    LineItemID: sdk.String("cum"),
                    ProductID: sdk.String("suscipit"),
                    Quantity: sdk.Int64(906495),
                },
            },
            OperationID: sdk.String("earum"),
            ShipmentGroupID: sdk.String("quod"),
            ShipmentInfos: []shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                    Carrier: sdk.String("quaerat"),
                    ShipmentID: sdk.String("ipsum"),
                    TrackingID: sdk.String("ducimus"),
                },
                shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo{
                    Carrier: sdk.String("laudantium"),
                    ShipmentID: sdk.String("rerum"),
                    TrackingID: sdk.String("deserunt"),
                },
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("iusto"),
        MerchantID: "esse",
        OauthToken: sdk.String("magnam"),
        OrderID: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cupiditate"),
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
            DeliverByDate: sdk.String("exercitationem"),
            LineItemID: sdk.String("laborum"),
            OperationID: sdk.String("illum"),
            ProductID: sdk.String("fugit"),
            ShipByDate: sdk.String("maxime"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("illum"),
        Key: sdk.String("quibusdam"),
        MerchantID: "commodi",
        OauthToken: sdk.String("esse"),
        OrderID: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("optio"),
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
            MerchantOrderID: sdk.String("maiores"),
            OperationID: sdk.String("exercitationem"),
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("neque"),
        MerchantID: "officia",
        OauthToken: sdk.String("suscipit"),
        OrderID: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("perferendis"),
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
            Carrier: sdk.String("iusto"),
            DeliveryDate: sdk.String("corrupti"),
            LastPickupDate: sdk.String("molestiae"),
            OperationID: sdk.String("quis"),
            ReadyPickupDate: sdk.String("iure"),
            ScheduledDeliveryDetails: &shared.OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails{
                CarrierPhoneNumber: sdk.String("ab"),
                ScheduledDate: sdk.String("quaerat"),
            },
            ShipmentID: sdk.String("amet"),
            Status: sdk.String("sapiente"),
            TrackingID: sdk.String("corporis"),
            UndeliveredDate: sdk.String("est"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("nam"),
        MerchantID: "nemo",
        OauthToken: sdk.String("enim"),
        OrderID: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("perferendis"),
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
