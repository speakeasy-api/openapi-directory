# Payments

### Available Operations

* [CancelPayment](#cancelpayment) - CancelPayment
* [CancelPaymentByIdempotencyKey](#cancelpaymentbyidempotencykey) - CancelPaymentByIdempotencyKey
* [CompletePayment](#completepayment) - CompletePayment
* [CreatePayment](#createpayment) - CreatePayment
* [GetPayment](#getpayment) - GetPayment
* [UpdatePayment](#updatepayment) - UpdatePayment
* [GetV2Payments](#getv2payments) - ListPayments

## CancelPayment

Cancels (voids) a payment. You can use this endpoint to cancel a payment with 
the APPROVED `status`.

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
    res, err := s.Payments.CancelPayment(ctx, operations.CancelPaymentRequest{
        PaymentID: "libero",
    }, operations.CancelPaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelPaymentResponse != nil {
        // handle response
    }
}
```

## CancelPaymentByIdempotencyKey

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
`CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
returns successfully.

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
    res, err := s.Payments.CancelPaymentByIdempotencyKey(ctx, shared.CancelPaymentByIdempotencyKeyRequest{
        IdempotencyKey: "corporis",
    }, operations.CancelPaymentByIdempotencyKeySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelPaymentByIdempotencyKeyResponse != nil {
        // handle response
    }
}
```

## CompletePayment

Completes (captures) a payment.
By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

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
    res, err := s.Payments.CompletePayment(ctx, operations.CompletePaymentRequest{
        PaymentID: "eaque",
    }, operations.CompletePaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompletePaymentResponse != nil {
        // handle response
    }
}
```

## CreatePayment

Creates a payment using the provided source. You can use this endpoint 
to charge a card (credit/debit card or    
Square gift card) or record a payment that the seller received outside of Square 
(cash payment from a buyer or a payment that an external entity 
processed on behalf of the seller).

The endpoint creates a 
`Payment` object and returns it in the response.

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
    res, err := s.Payments.CreatePayment(ctx, shared.CreatePaymentRequest{
        AcceptPartialAuthorization: sdk.Bool(false),
        AmountMoney: shared.Money{
            Amount: sdk.Int64(760374),
            Currency: sdk.String("repellat"),
        },
        AppFeeMoney: &shared.Money{
            Amount: sdk.Int64(503662),
            Currency: sdk.String("molestiae"),
        },
        Autocomplete: sdk.Bool(false),
        BillingAddress: &shared.Address{
            AddressLine1: sdk.String("a"),
            AddressLine2: sdk.String("quae"),
            AddressLine3: sdk.String("deleniti"),
            AdministrativeDistrictLevel1: sdk.String("asperiores"),
            AdministrativeDistrictLevel2: sdk.String("dolor"),
            AdministrativeDistrictLevel3: sdk.String("excepturi"),
            Country: sdk.String("Burundi"),
            FirstName: sdk.String("Jadyn"),
            LastName: sdk.String("Blick"),
            Locality: sdk.String("perferendis"),
            Organization: sdk.String("reprehenderit"),
            PostalCode: sdk.String("61272"),
            Sublocality: sdk.String("consequatur"),
            Sublocality2: sdk.String("porro"),
            Sublocality3: sdk.String("deleniti"),
        },
        BuyerEmailAddress: sdk.String("maiores"),
        CashDetails: &shared.CashPaymentDetails{
            BuyerSuppliedMoney: shared.Money{
                Amount: sdk.Int64(43716),
                Currency: sdk.String("praesentium"),
            },
            ChangeBackMoney: &shared.Money{
                Amount: sdk.Int64(714830),
                Currency: sdk.String("sapiente"),
            },
        },
        CustomerID: sdk.String("a"),
        DelayDuration: sdk.String("quae"),
        ExternalDetails: &shared.ExternalPaymentDetails{
            Source: "doloremque",
            SourceFeeMoney: &shared.Money{
                Amount: sdk.Int64(561540),
                Currency: sdk.String("architecto"),
            },
            SourceID: sdk.String("saepe"),
            Type: "laudantium",
        },
        IdempotencyKey: "praesentium",
        LocationID: sdk.String("maiores"),
        Note: sdk.String("blanditiis"),
        OrderID: sdk.String("ea"),
        ReferenceID: sdk.String("occaecati"),
        ShippingAddress: &shared.Address{
            AddressLine1: sdk.String("natus"),
            AddressLine2: sdk.String("voluptas"),
            AddressLine3: sdk.String("optio"),
            AdministrativeDistrictLevel1: sdk.String("totam"),
            AdministrativeDistrictLevel2: sdk.String("recusandae"),
            AdministrativeDistrictLevel3: sdk.String("odit"),
            Country: sdk.String("China"),
            FirstName: sdk.String("Monique"),
            LastName: sdk.String("Veum"),
            Locality: sdk.String("aut"),
            Organization: sdk.String("similique"),
            PostalCode: sdk.String("89245"),
            Sublocality: sdk.String("sint"),
            Sublocality2: sdk.String("dolorem"),
            Sublocality3: sdk.String("soluta"),
        },
        SourceID: "fugiat",
        StatementDescriptionIdentifier: sdk.String("fugit"),
        TipMoney: &shared.Money{
            Amount: sdk.Int64(204579),
            Currency: sdk.String("asperiores"),
        },
        VerificationToken: sdk.String("corrupti"),
    }, operations.CreatePaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePaymentResponse != nil {
        // handle response
    }
}
```

## GetPayment

Retrieves details for a specific payment.

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
    res, err := s.Payments.GetPayment(ctx, operations.GetPaymentRequest{
        PaymentID: "autem",
    }, operations.GetPaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentResponse != nil {
        // handle response
    }
}
```

## UpdatePayment

Updates a payment with the APPROVED status.
You can update the `amount_money` and `tip_money` using this endpoint.

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
    res, err := s.Payments.UpdatePayment(ctx, operations.UpdatePaymentRequest{
        UpdatePaymentRequest: shared.UpdatePaymentRequest{
            IdempotencyKey: "autem",
            Payment: &shared.Payment{
                AmountMoney: &shared.Money{
                    Amount: sdk.Int64(20),
                    Currency: sdk.String("eaque"),
                },
                AppFeeMoney: &shared.Money{
                    Amount: sdk.Int64(795071),
                    Currency: sdk.String("commodi"),
                },
                ApprovedMoney: &shared.Money{
                    Amount: sdk.Int64(79239),
                    Currency: sdk.String("porro"),
                },
                BankAccountDetails: &shared.BankAccountPaymentDetails{
                    AccountOwnershipType: sdk.String("nihil"),
                    AchDetails: &shared.ACHDetails{
                        AccountNumberSuffix: sdk.String("voluptatum"),
                        AccountType: sdk.String("consectetur"),
                        RoutingNumber: sdk.String("aliquam"),
                    },
                    BankName: sdk.String("magni"),
                    Country: sdk.String("Jersey"),
                    Errors: []shared.Error{
                        shared.Error{
                            Category: "impedit",
                            Code: "est",
                            Detail: sdk.String("est"),
                            Field: sdk.String("provident"),
                        },
                    },
                    Fingerprint: sdk.String("vitae"),
                    StatementDescription: sdk.String("quae"),
                    TransferType: sdk.String("voluptatum"),
                },
                BillingAddress: &shared.Address{
                    AddressLine1: sdk.String("tempore"),
                    AddressLine2: sdk.String("nesciunt"),
                    AddressLine3: sdk.String("atque"),
                    AdministrativeDistrictLevel1: sdk.String("maiores"),
                    AdministrativeDistrictLevel2: sdk.String("veritatis"),
                    AdministrativeDistrictLevel3: sdk.String("cum"),
                    Country: sdk.String("Iran"),
                    FirstName: sdk.String("Armando"),
                    LastName: sdk.String("Orn"),
                    Locality: sdk.String("non"),
                    Organization: sdk.String("ratione"),
                    PostalCode: sdk.String("63287"),
                    Sublocality: sdk.String("ab"),
                    Sublocality2: sdk.String("voluptatem"),
                    Sublocality3: sdk.String("magni"),
                },
                BuyerEmailAddress: sdk.String("iste"),
                Capabilities: []string{
                    "reiciendis",
                    "error",
                },
                CardDetails: &shared.CardPaymentDetails{
                    ApplicationCryptogram: sdk.String("eos"),
                    ApplicationIdentifier: sdk.String("voluptatibus"),
                    ApplicationName: sdk.String("debitis"),
                    AuthResultCode: sdk.String("possimus"),
                    AvsStatus: sdk.String("omnis"),
                    Card: &shared.Card{
                        BillingAddress: &shared.Address{
                            AddressLine1: sdk.String("nesciunt"),
                            AddressLine2: sdk.String("perspiciatis"),
                            AddressLine3: sdk.String("expedita"),
                            AdministrativeDistrictLevel1: sdk.String("mollitia"),
                            AdministrativeDistrictLevel2: sdk.String("quas"),
                            AdministrativeDistrictLevel3: sdk.String("asperiores"),
                            Country: sdk.String("Lebanon"),
                            FirstName: sdk.String("Ashlynn"),
                            LastName: sdk.String("Upton"),
                            Locality: sdk.String("consequuntur"),
                            Organization: sdk.String("provident"),
                            PostalCode: sdk.String("18109-8011"),
                            Sublocality: sdk.String("quas"),
                            Sublocality2: sdk.String("mollitia"),
                            Sublocality3: sdk.String("cumque"),
                        },
                        Bin: sdk.String("dolor"),
                        CardBrand: sdk.String("id"),
                        CardType: sdk.String("assumenda"),
                        CardholderName: sdk.String("optio"),
                        CustomerID: sdk.String("commodi"),
                        Enabled: sdk.Bool(false),
                        ExpMonth: sdk.Int64(293176),
                        ExpYear: sdk.Int64(482400),
                        Fingerprint: sdk.String("nulla"),
                        ID: sdk.String("240bc11e-a482-4824-8cc6-a2f0f5b9d3cb"),
                        Last4: sdk.String("inventore"),
                        PrepaidType: sdk.String("beatae"),
                        ReferenceID: sdk.String("similique"),
                        Version: sdk.Int64(471965),
                    },
                    CardPaymentTimeline: &shared.CardPaymentTimeline{
                        AuthorizedAt: sdk.String("commodi"),
                        CapturedAt: sdk.String("deleniti"),
                        VoidedAt: sdk.String("dignissimos"),
                    },
                    CvvStatus: sdk.String("possimus"),
                    DeviceDetails: &shared.DeviceDetails{
                        DeviceID: sdk.String("dolor"),
                        DeviceInstallationID: sdk.String("dicta"),
                        DeviceName: sdk.String("voluptatem"),
                    },
                    EntryMethod: sdk.String("alias"),
                    Errors: []shared.Error{
                        shared.Error{
                            Category: "deleniti",
                            Code: "repudiandae",
                            Detail: sdk.String("sed"),
                            Field: sdk.String("cum"),
                        },
                        shared.Error{
                            Category: "sint",
                            Code: "soluta",
                            Detail: sdk.String("voluptatem"),
                            Field: sdk.String("repellendus"),
                        },
                        shared.Error{
                            Category: "dignissimos",
                            Code: "quaerat",
                            Detail: sdk.String("nisi"),
                            Field: sdk.String("possimus"),
                        },
                        shared.Error{
                            Category: "quia",
                            Code: "dolorum",
                            Detail: sdk.String("nihil"),
                            Field: sdk.String("quisquam"),
                        },
                    },
                    RefundRequiresCardPresence: sdk.Bool(false),
                    StatementDescription: sdk.String("molestiae"),
                    Status: sdk.String("fugiat"),
                    VerificationMethod: sdk.String("ab"),
                    VerificationResults: sdk.String("debitis"),
                },
                CashDetails: &shared.CashPaymentDetails{
                    BuyerSuppliedMoney: shared.Money{
                        Amount: sdk.Int64(676908),
                        Currency: sdk.String("perferendis"),
                    },
                    ChangeBackMoney: &shared.Money{
                        Amount: sdk.Int64(913700),
                        Currency: sdk.String("quam"),
                    },
                },
                CreatedAt: sdk.String("iste"),
                CustomerID: sdk.String("tenetur"),
                DelayAction: sdk.String("similique"),
                DelayDuration: sdk.String("sint"),
                DelayedUntil: sdk.String("nobis"),
                EmployeeID: sdk.String("distinctio"),
                ExternalDetails: &shared.ExternalPaymentDetails{
                    Source: "earum",
                    SourceFeeMoney: &shared.Money{
                        Amount: sdk.Int64(334801),
                        Currency: sdk.String("maiores"),
                    },
                    SourceID: sdk.String("et"),
                    Type: "dignissimos",
                },
                ID: sdk.String("9f650b1e-707e-47e4-b967-13bacce072ab"),
                LocationID: sdk.String("quibusdam"),
                Note: sdk.String("ex"),
                OrderID: sdk.String("et"),
                ProcessingFee: []shared.ProcessingFee{
                    shared.ProcessingFee{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(119158),
                            Currency: sdk.String("rem"),
                        },
                        EffectiveAt: sdk.String("facere"),
                        Type: sdk.String("magni"),
                    },
                    shared.ProcessingFee{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(441969),
                            Currency: sdk.String("omnis"),
                        },
                        EffectiveAt: sdk.String("maxime"),
                        Type: sdk.String("vitae"),
                    },
                    shared.ProcessingFee{
                        AmountMoney: &shared.Money{
                            Amount: sdk.Int64(150),
                            Currency: sdk.String("maxime"),
                        },
                        EffectiveAt: sdk.String("vitae"),
                        Type: sdk.String("blanditiis"),
                    },
                },
                ReceiptNumber: sdk.String("ipsam"),
                ReceiptURL: sdk.String("ab"),
                ReferenceID: sdk.String("aliquid"),
                RefundIds: []string{
                    "repellendus",
                    "in",
                    "praesentium",
                    "rerum",
                },
                RefundedMoney: &shared.Money{
                    Amount: sdk.Int64(917965),
                    Currency: sdk.String("fugit"),
                },
                RiskEvaluation: &shared.RiskEvaluation{
                    CreatedAt: sdk.String("vel"),
                    RiskLevel: sdk.String("fugit"),
                },
                ShippingAddress: &shared.Address{
                    AddressLine1: sdk.String("ab"),
                    AddressLine2: sdk.String("quia"),
                    AddressLine3: sdk.String("esse"),
                    AdministrativeDistrictLevel1: sdk.String("sed"),
                    AdministrativeDistrictLevel2: sdk.String("ea"),
                    AdministrativeDistrictLevel3: sdk.String("odit"),
                    Country: sdk.String("Marshall Islands"),
                    FirstName: sdk.String("Winona"),
                    LastName: sdk.String("Nikolaus"),
                    Locality: sdk.String("ullam"),
                    Organization: sdk.String("ipsa"),
                    PostalCode: sdk.String("64154"),
                    Sublocality: sdk.String("esse"),
                    Sublocality2: sdk.String("debitis"),
                    Sublocality3: sdk.String("esse"),
                },
                SourceType: sdk.String("aspernatur"),
                StatementDescriptionIdentifier: sdk.String("nam"),
                Status: sdk.String("neque"),
                TipMoney: &shared.Money{
                    Amount: sdk.Int64(675452),
                    Currency: sdk.String("autem"),
                },
                TotalMoney: &shared.Money{
                    Amount: sdk.Int64(327373),
                    Currency: sdk.String("ipsa"),
                },
                UpdatedAt: sdk.String("qui"),
                VersionToken: sdk.String("labore"),
                WalletDetails: &shared.DigitalWalletDetails{
                    Status: sdk.String("rerum"),
                },
            },
        },
        PaymentID: "inventore",
    }, operations.UpdatePaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePaymentResponse != nil {
        // handle response
    }
}
```

## GetV2Payments

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several
seconds to appear.

The maximum results per page is 100.

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
    res, err := s.Payments.GetV2Payments(ctx, operations.GetV2PaymentsRequest{
        BeginTime: sdk.String("minima"),
        CardBrand: sdk.String("molestiae"),
        Cursor: sdk.String("voluptatibus"),
        EndTime: sdk.String("sint"),
        Last4: sdk.String("libero"),
        Limit: sdk.Int64(749283),
        LocationID: sdk.String("laboriosam"),
        SortOrder: sdk.String("recusandae"),
        Total: sdk.Int64(999839),
    }, operations.GetV2PaymentsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPaymentsResponse != nil {
        // handle response
    }
}
```
