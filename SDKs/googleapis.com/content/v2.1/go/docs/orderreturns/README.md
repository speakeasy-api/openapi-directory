# Orderreturns

### Available Operations

* [ContentOrderreturnsAcknowledge](#contentorderreturnsacknowledge) - Acks an order return in your Merchant Center account.
* [ContentOrderreturnsCreateorderreturn](#contentorderreturnscreateorderreturn) - Create return in your Merchant Center account.
* [ContentOrderreturnsGet](#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [ContentOrderreturnsLabelsCreate](#contentorderreturnslabelscreate) - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* [ContentOrderreturnsList](#contentorderreturnslist) - Lists order returns in your Merchant Center account.
* [ContentOrderreturnsProcess](#contentorderreturnsprocess) - Processes return in your Merchant Center account.

## ContentOrderreturnsAcknowledge

Acks an order return in your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsAcknowledge(ctx, operations.ContentOrderreturnsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrderreturnsAcknowledgeRequest: &shared.OrderreturnsAcknowledgeRequest{
            OperationID: sdk.String("nemo"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("explicabo"),
        MerchantID: "ipsam",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        ReturnID: "alias",
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.ContentOrderreturnsAcknowledgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreturnsAcknowledgeResponse != nil {
        // handle response
    }
}
```

## ContentOrderreturnsCreateorderreturn

Create return in your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsCreateorderreturn(ctx, operations.ContentOrderreturnsCreateorderreturnRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrderreturnsCreateOrderReturnRequest: &shared.OrderreturnsCreateOrderReturnRequest{
            LineItems: []shared.OrderreturnsLineItem{
                shared.OrderreturnsLineItem{
                    LineItemID: sdk.String("consequuntur"),
                    ProductID: sdk.String("veniam"),
                    Quantity: sdk.Int64(893773),
                },
                shared.OrderreturnsLineItem{
                    LineItemID: sdk.String("officia"),
                    ProductID: sdk.String("sint"),
                    Quantity: sdk.Int64(280859),
                },
                shared.OrderreturnsLineItem{
                    LineItemID: sdk.String("numquam"),
                    ProductID: sdk.String("tenetur"),
                    Quantity: sdk.Int64(236790),
                },
                shared.OrderreturnsLineItem{
                    LineItemID: sdk.String("libero"),
                    ProductID: sdk.String("in"),
                    Quantity: sdk.Int64(329651),
                },
            },
            OperationID: sdk.String("ex"),
            OrderID: sdk.String("minus"),
            ReturnMethodType: sdk.String("ab"),
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("dolor"),
        MerchantID: "ducimus",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ContentOrderreturnsCreateorderreturnSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreturnsCreateOrderReturnResponse != nil {
        // handle response
    }
}
```

## ContentOrderreturnsGet

Retrieves an order return from your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsGet(ctx, operations.ContentOrderreturnsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("dolor"),
        MerchantID: "exercitationem",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        ReturnID: "impedit",
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.ContentOrderreturnsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MerchantOrderReturn != nil {
        // handle response
    }
}
```

## ContentOrderreturnsLabelsCreate

Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.

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
    res, err := s.Orderreturns.ContentOrderreturnsLabelsCreate(ctx, operations.ContentOrderreturnsLabelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReturnShippingLabel: &shared.ReturnShippingLabel{
            Carrier: sdk.String("consequuntur"),
            LabelURI: sdk.String("amet"),
            TrackingID: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("a"),
        MerchantID: "quisquam",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        ReturnID: "assumenda",
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.ContentOrderreturnsLabelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnShippingLabel != nil {
        // handle response
    }
}
```

## ContentOrderreturnsList

Lists order returns in your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsList(ctx, operations.ContentOrderreturnsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Acknowledged: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        CreatedEndDate: sdk.String("necessitatibus"),
        CreatedStartDate: sdk.String("quia"),
        Fields: sdk.String("dicta"),
        GoogleOrderIds: []string{
            "perspiciatis",
            "debitis",
        },
        Key: sdk.String("ullam"),
        MaxResults: sdk.Int64(103578),
        MerchantID: "accusantium",
        OauthToken: sdk.String("perferendis"),
        OrderBy: operations.ContentOrderreturnsListOrderByEnumReturnCreationTimeDesc.ToPointer(),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        ShipmentStates: []ContentOrderreturnsListShipmentStatesEnum{
            operations.ContentOrderreturnsListShipmentStatesEnumPending,
            operations.ContentOrderreturnsListShipmentStatesEnumUndeliverable,
        },
        ShipmentStatus: []ContentOrderreturnsListShipmentStatusEnum{
            operations.ContentOrderreturnsListShipmentStatusEnumProcessed,
            operations.ContentOrderreturnsListShipmentStatusEnumNew,
        },
        ShipmentTrackingNumbers: []string{
            "dignissimos",
            "laboriosam",
        },
        ShipmentTypes: []ContentOrderreturnsListShipmentTypesEnum{
            operations.ContentOrderreturnsListShipmentTypesEnumReturnless,
        },
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ContentOrderreturnsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreturnsListResponse != nil {
        // handle response
    }
}
```

## ContentOrderreturnsProcess

Processes return in your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsProcess(ctx, operations.ContentOrderreturnsProcessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrderreturnsProcessRequest: &shared.OrderreturnsProcessRequest{
            FullChargeReturnShippingCost: sdk.Bool(false),
            OperationID: sdk.String("doloribus"),
            RefundShippingFee: &shared.OrderreturnsRefundOperation{
                FullRefund: sdk.Bool(false),
                PartialRefund: &shared.OrderreturnsPartialRefund{
                    PriceAmount: &shared.Price{
                        Currency: sdk.String("facilis"),
                        Value: sdk.String("quidem"),
                    },
                    TaxAmount: &shared.Price{
                        Currency: sdk.String("itaque"),
                        Value: sdk.String("laboriosam"),
                    },
                },
                PaymentType: sdk.String("unde"),
                ReasonText: sdk.String("modi"),
                ReturnRefundReason: sdk.String("perspiciatis"),
            },
            ReturnItems: []shared.OrderreturnsReturnItem{
                shared.OrderreturnsReturnItem{
                    Refund: &shared.OrderreturnsRefundOperation{
                        FullRefund: sdk.Bool(false),
                        PartialRefund: &shared.OrderreturnsPartialRefund{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("cum"),
                                Value: sdk.String("aspernatur"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("libero"),
                                Value: sdk.String("nam"),
                            },
                        },
                        PaymentType: sdk.String("incidunt"),
                        ReasonText: sdk.String("recusandae"),
                        ReturnRefundReason: sdk.String("quod"),
                    },
                    Reject: &shared.OrderreturnsRejectOperation{
                        Reason: sdk.String("id"),
                        ReasonText: sdk.String("saepe"),
                    },
                    ReturnItemID: sdk.String("autem"),
                },
                shared.OrderreturnsReturnItem{
                    Refund: &shared.OrderreturnsRefundOperation{
                        FullRefund: sdk.Bool(false),
                        PartialRefund: &shared.OrderreturnsPartialRefund{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("quo"),
                                Value: sdk.String("nesciunt"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("illum"),
                                Value: sdk.String("nemo"),
                            },
                        },
                        PaymentType: sdk.String("illum"),
                        ReasonText: sdk.String("facilis"),
                        ReturnRefundReason: sdk.String("non"),
                    },
                    Reject: &shared.OrderreturnsRejectOperation{
                        Reason: sdk.String("mollitia"),
                        ReasonText: sdk.String("assumenda"),
                    },
                    ReturnItemID: sdk.String("recusandae"),
                },
                shared.OrderreturnsReturnItem{
                    Refund: &shared.OrderreturnsRefundOperation{
                        FullRefund: sdk.Bool(false),
                        PartialRefund: &shared.OrderreturnsPartialRefund{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("distinctio"),
                                Value: sdk.String("pariatur"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("ad"),
                                Value: sdk.String("facere"),
                            },
                        },
                        PaymentType: sdk.String("laborum"),
                        ReasonText: sdk.String("eveniet"),
                        ReturnRefundReason: sdk.String("laborum"),
                    },
                    Reject: &shared.OrderreturnsRejectOperation{
                        Reason: sdk.String("incidunt"),
                        ReasonText: sdk.String("maxime"),
                    },
                    ReturnItemID: sdk.String("ipsam"),
                },
                shared.OrderreturnsReturnItem{
                    Refund: &shared.OrderreturnsRefundOperation{
                        FullRefund: sdk.Bool(false),
                        PartialRefund: &shared.OrderreturnsPartialRefund{
                            PriceAmount: &shared.Price{
                                Currency: sdk.String("alias"),
                                Value: sdk.String("suscipit"),
                            },
                            TaxAmount: &shared.Price{
                                Currency: sdk.String("deserunt"),
                                Value: sdk.String("molestias"),
                            },
                        },
                        PaymentType: sdk.String("laborum"),
                        ReasonText: sdk.String("est"),
                        ReturnRefundReason: sdk.String("occaecati"),
                    },
                    Reject: &shared.OrderreturnsRejectOperation{
                        Reason: sdk.String("labore"),
                        ReasonText: sdk.String("quo"),
                    },
                    ReturnItemID: sdk.String("perferendis"),
                },
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("eligendi"),
        MerchantID: "hic",
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        ReturnID: "unde",
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("error"),
    }, operations.ContentOrderreturnsProcessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreturnsProcessResponse != nil {
        // handle response
    }
}
```
