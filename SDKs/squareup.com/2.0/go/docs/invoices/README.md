# Invoices

### Available Operations

* [CancelInvoice](#cancelinvoice) - CancelInvoice
* [CreateInvoice](#createinvoice) - CreateInvoice
* [DeleteInvoice](#deleteinvoice) - DeleteInvoice
* [GetInvoice](#getinvoice) - GetInvoice
* [ListInvoices](#listinvoices) - ListInvoices
* [PublishInvoice](#publishinvoice) - PublishInvoice
* [SearchInvoices](#searchinvoices) - SearchInvoices
* [UpdateInvoice](#updateinvoice) - UpdateInvoice

## CancelInvoice

Cancels an invoice. The seller cannot collect payments for 
the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

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
    res, err := s.Invoices.CancelInvoice(ctx, operations.CancelInvoiceRequest{
        CancelInvoiceRequest: shared.CancelInvoiceRequest{
            Version: 437446,
        },
        InvoiceID: "similique",
    }, operations.CancelInvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelInvoiceResponse != nil {
        // handle response
    }
}
```

## CreateInvoice

Creates a draft [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) 
for an order created using the Orders API.

A draft invoice remains in your account and no action is taken. 
You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

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
    res, err := s.Invoices.CreateInvoice(ctx, shared.CreateInvoiceRequest{
        IdempotencyKey: sdk.String("molestiae"),
        Invoice: shared.Invoice{
            AcceptedPaymentMethods: &shared.InvoiceAcceptedPaymentMethods{
                BankAccount: sdk.Bool(false),
                Card: sdk.Bool(false),
                SquareGiftCard: sdk.Bool(false),
            },
            CreatedAt: sdk.String("itaque"),
            CustomFields: []shared.InvoiceCustomField{
                shared.InvoiceCustomField{
                    Label: sdk.String("possimus"),
                    Placement: sdk.String("minima"),
                    Value: sdk.String("non"),
                },
                shared.InvoiceCustomField{
                    Label: sdk.String("qui"),
                    Placement: sdk.String("et"),
                    Value: sdk.String("amet"),
                },
                shared.InvoiceCustomField{
                    Label: sdk.String("tenetur"),
                    Placement: sdk.String("velit"),
                    Value: sdk.String("asperiores"),
                },
            },
            DeliveryMethod: sdk.String("commodi"),
            Description: sdk.String("voluptas"),
            ID: sdk.String("8752db76-4c59-4f0a-96ce-bcada29ca791"),
            InvoiceNumber: sdk.String("deleniti"),
            LocationID: sdk.String("et"),
            NextPaymentAmountMoney: &shared.Money{
                Amount: sdk.Int64(757747),
                Currency: sdk.String("sint"),
            },
            OrderID: sdk.String("ipsam"),
            PaymentRequests: []shared.InvoicePaymentRequest{
                shared.InvoicePaymentRequest{
                    AutomaticPaymentSource: sdk.String("molestiae"),
                    CardID: sdk.String("ab"),
                    ComputedAmountMoney: &shared.Money{
                        Amount: sdk.Int64(401449),
                        Currency: sdk.String("iure"),
                    },
                    DueDate: sdk.String("dolorem"),
                    FixedAmountRequestedMoney: &shared.Money{
                        Amount: sdk.Int64(792150),
                        Currency: sdk.String("ad"),
                    },
                    PercentageRequested: sdk.String("ipsum"),
                    Reminders: []shared.InvoicePaymentReminder{
                        shared.InvoicePaymentReminder{
                            Message: sdk.String("nam"),
                            RelativeScheduledDays: sdk.Int64(325527),
                            SentAt: sdk.String("vel"),
                            Status: sdk.String("nisi"),
                            UID: sdk.String("minima"),
                        },
                    },
                    RequestMethod: sdk.String("et"),
                    RequestType: sdk.String("autem"),
                    RoundingAdjustmentIncludedMoney: &shared.Money{
                        Amount: sdk.Int64(220455),
                        Currency: sdk.String("culpa"),
                    },
                    TippingEnabled: sdk.Bool(false),
                    TotalCompletedAmountMoney: &shared.Money{
                        Amount: sdk.Int64(249541),
                        Currency: sdk.String("suscipit"),
                    },
                    UID: sdk.String("amet"),
                },
                shared.InvoicePaymentRequest{
                    AutomaticPaymentSource: sdk.String("deleniti"),
                    CardID: sdk.String("exercitationem"),
                    ComputedAmountMoney: &shared.Money{
                        Amount: sdk.Int64(74838),
                        Currency: sdk.String("fugit"),
                    },
                    DueDate: sdk.String("id"),
                    FixedAmountRequestedMoney: &shared.Money{
                        Amount: sdk.Int64(731502),
                        Currency: sdk.String("fugit"),
                    },
                    PercentageRequested: sdk.String("nostrum"),
                    Reminders: []shared.InvoicePaymentReminder{
                        shared.InvoicePaymentReminder{
                            Message: sdk.String("sunt"),
                            RelativeScheduledDays: sdk.Int64(696581),
                            SentAt: sdk.String("perspiciatis"),
                            Status: sdk.String("asperiores"),
                            UID: sdk.String("eos"),
                        },
                    },
                    RequestMethod: sdk.String("saepe"),
                    RequestType: sdk.String("ipsa"),
                    RoundingAdjustmentIncludedMoney: &shared.Money{
                        Amount: sdk.Int64(457399),
                        Currency: sdk.String("consequuntur"),
                    },
                    TippingEnabled: sdk.Bool(false),
                    TotalCompletedAmountMoney: &shared.Money{
                        Amount: sdk.Int64(302814),
                        Currency: sdk.String("autem"),
                    },
                    UID: sdk.String("reprehenderit"),
                },
            },
            PrimaryRecipient: &shared.InvoiceRecipient{
                Address: &shared.Address{
                    AddressLine1: sdk.String("quidem"),
                    AddressLine2: sdk.String("quas"),
                    AddressLine3: sdk.String("officia"),
                    AdministrativeDistrictLevel1: sdk.String("modi"),
                    AdministrativeDistrictLevel2: sdk.String("alias"),
                    AdministrativeDistrictLevel3: sdk.String("nam"),
                    Country: sdk.String("Serbia"),
                    FirstName: sdk.String("Albertha"),
                    LastName: sdk.String("Harvey"),
                    Locality: sdk.String("hic"),
                    Organization: sdk.String("dolorum"),
                    PostalCode: sdk.String("08330-9891"),
                    Sublocality: sdk.String("eos"),
                    Sublocality2: sdk.String("laborum"),
                    Sublocality3: sdk.String("sint"),
                },
                CompanyName: sdk.String("incidunt"),
                CustomerID: sdk.String("pariatur"),
                EmailAddress: sdk.String("aspernatur"),
                FamilyName: sdk.String("aperiam"),
                GivenName: sdk.String("itaque"),
                PhoneNumber: sdk.String("quo"),
            },
            PublicURL: sdk.String("perspiciatis"),
            ScheduledAt: sdk.String("accusantium"),
            Status: sdk.String("debitis"),
            SubscriptionID: sdk.String("animi"),
            Timezone: sdk.String("aliquam"),
            Title: sdk.String("Mr."),
            UpdatedAt: sdk.String("repellendus"),
            Version: sdk.Int64(100436),
        },
    }, operations.CreateInvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInvoiceResponse != nil {
        // handle response
    }
}
```

## DeleteInvoice

Deletes the specified invoice. When an invoice is deleted, the 
associated order status changes to CANCELED. You can only delete a draft 
invoice (you cannot delete a published invoice, including one that is scheduled for processing).

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
    res, err := s.Invoices.DeleteInvoice(ctx, operations.DeleteInvoiceRequest{
        InvoiceID: "hic",
        Version: sdk.Int64(287530),
    }, operations.DeleteInvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInvoiceResponse != nil {
        // handle response
    }
}
```

## GetInvoice

Retrieves an invoice by invoice ID.

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
    res, err := s.Invoices.GetInvoice(ctx, operations.GetInvoiceRequest{
        InvoiceID: "nisi",
    }, operations.GetInvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvoiceResponse != nil {
        // handle response
    }
}
```

## ListInvoices

Returns a list of invoices for a given location. The response 
is paginated. If truncated, the response includes a `cursor` that you    
use in a subsequent request to retrieve the next set of invoices.

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
    res, err := s.Invoices.ListInvoices(ctx, operations.ListInvoicesRequest{
        Cursor: sdk.String("voluptas"),
        Limit: sdk.Int64(904131),
        LocationID: "praesentium",
    }, operations.ListInvoicesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInvoicesResponse != nil {
        // handle response
    }
}
```

## PublishInvoice

Publishes the specified draft invoice. 

After an invoice is published, Square 
follows up based on the invoice configuration. For example, Square 
sends the invoice to the customer's email address, charges the customer's card on file, or does 
nothing. Square also makes the invoice available on a Square-hosted invoice page. 

The invoice `status` also changes from `DRAFT` to a status 
based on the invoice configuration. For example, the status changes to `UNPAID` if 
Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the 
invoice amount.

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
    res, err := s.Invoices.PublishInvoice(ctx, operations.PublishInvoiceRequest{
        PublishInvoiceRequest: shared.PublishInvoiceRequest{
            IdempotencyKey: sdk.String("veniam"),
            Version: 67582,
        },
        InvoiceID: "minima",
    }, operations.PublishInvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishInvoiceResponse != nil {
        // handle response
    }
}
```

## SearchInvoices

Searches for invoices from a location specified in 
the filter. You can optionally specify customers in the filter for whom to 
retrieve invoices. In the current implementation, you can only specify one location and 
optionally one customer.

The response is paginated. If truncated, the response includes a `cursor` 
that you use in a subsequent request to retrieve the next set of invoices.

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
    res, err := s.Invoices.SearchInvoices(ctx, shared.SearchInvoicesRequest{
        Cursor: sdk.String("nisi"),
        Limit: sdk.Int64(995733),
        Query: shared.InvoiceQuery{
            Filter: shared.InvoiceFilter{
                CustomerIds: []string{
                    "a",
                    "molestiae",
                    "amet",
                    "voluptatibus",
                },
                LocationIds: []string{
                    "tenetur",
                    "nostrum",
                    "tempora",
                    "maiores",
                },
            },
            Sort: &shared.InvoiceSort{
                Field: "facere",
                Order: sdk.String("illum"),
            },
        },
    }, operations.SearchInvoicesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchInvoicesResponse != nil {
        // handle response
    }
}
```

## UpdateInvoice

Updates an invoice by modifying fields, clearing fields, or both. For most updates, you can use a sparse 
`Invoice` object to add fields or change values and use the `fields_to_clear` field to specify fields to clear. 
However, some restrictions apply. For example, you cannot change the `order_id` or `location_id` field and you 
must provide the complete `custom_fields` list to update a custom field. Published invoices have additional restrictions.

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
    res, err := s.Invoices.UpdateInvoice(ctx, operations.UpdateInvoiceRequest{
        UpdateInvoiceRequest: shared.UpdateInvoiceRequest{
            FieldsToClear: []string{
                "saepe",
                "deserunt",
            },
            IdempotencyKey: sdk.String("sint"),
            Invoice: shared.Invoice{
                AcceptedPaymentMethods: &shared.InvoiceAcceptedPaymentMethods{
                    BankAccount: sdk.Bool(false),
                    Card: sdk.Bool(false),
                    SquareGiftCard: sdk.Bool(false),
                },
                CreatedAt: sdk.String("minima"),
                CustomFields: []shared.InvoiceCustomField{
                    shared.InvoiceCustomField{
                        Label: sdk.String("sequi"),
                        Placement: sdk.String("sequi"),
                        Value: sdk.String("occaecati"),
                    },
                    shared.InvoiceCustomField{
                        Label: sdk.String("voluptatum"),
                        Placement: sdk.String("illum"),
                        Value: sdk.String("laborum"),
                    },
                },
                DeliveryMethod: sdk.String("sapiente"),
                Description: sdk.String("soluta"),
                ID: sdk.String("42a8d633-88e4-4d80-b9ea-5f9b18a244fd"),
                InvoiceNumber: sdk.String("nisi"),
                LocationID: sdk.String("ab"),
                NextPaymentAmountMoney: &shared.Money{
                    Amount: sdk.Int64(607407),
                    Currency: sdk.String("aut"),
                },
                OrderID: sdk.String("ipsum"),
                PaymentRequests: []shared.InvoicePaymentRequest{
                    shared.InvoicePaymentRequest{
                        AutomaticPaymentSource: sdk.String("nulla"),
                        CardID: sdk.String("dolorum"),
                        ComputedAmountMoney: &shared.Money{
                            Amount: sdk.Int64(804333),
                            Currency: sdk.String("assumenda"),
                        },
                        DueDate: sdk.String("velit"),
                        FixedAmountRequestedMoney: &shared.Money{
                            Amount: sdk.Int64(530225),
                            Currency: sdk.String("eveniet"),
                        },
                        PercentageRequested: sdk.String("quibusdam"),
                        Reminders: []shared.InvoicePaymentReminder{
                            shared.InvoicePaymentReminder{
                                Message: sdk.String("assumenda"),
                                RelativeScheduledDays: sdk.Int64(752573),
                                SentAt: sdk.String("laboriosam"),
                                Status: sdk.String("esse"),
                                UID: sdk.String("et"),
                            },
                        },
                        RequestMethod: sdk.String("temporibus"),
                        RequestType: sdk.String("optio"),
                        RoundingAdjustmentIncludedMoney: &shared.Money{
                            Amount: sdk.Int64(465486),
                            Currency: sdk.String("delectus"),
                        },
                        TippingEnabled: sdk.Bool(false),
                        TotalCompletedAmountMoney: &shared.Money{
                            Amount: sdk.Int64(65582),
                            Currency: sdk.String("vero"),
                        },
                        UID: sdk.String("amet"),
                    },
                    shared.InvoicePaymentRequest{
                        AutomaticPaymentSource: sdk.String("culpa"),
                        CardID: sdk.String("asperiores"),
                        ComputedAmountMoney: &shared.Money{
                            Amount: sdk.Int64(96083),
                            Currency: sdk.String("veniam"),
                        },
                        DueDate: sdk.String("provident"),
                        FixedAmountRequestedMoney: &shared.Money{
                            Amount: sdk.Int64(160305),
                            Currency: sdk.String("aut"),
                        },
                        PercentageRequested: sdk.String("maxime"),
                        Reminders: []shared.InvoicePaymentReminder{
                            shared.InvoicePaymentReminder{
                                Message: sdk.String("aperiam"),
                                RelativeScheduledDays: sdk.Int64(833706),
                                SentAt: sdk.String("ab"),
                                Status: sdk.String("cum"),
                                UID: sdk.String("magnam"),
                            },
                            shared.InvoicePaymentReminder{
                                Message: sdk.String("natus"),
                                RelativeScheduledDays: sdk.Int64(47401),
                                SentAt: sdk.String("dicta"),
                                Status: sdk.String("repellat"),
                                UID: sdk.String("dolores"),
                            },
                            shared.InvoicePaymentReminder{
                                Message: sdk.String("harum"),
                                RelativeScheduledDays: sdk.Int64(845115),
                                SentAt: sdk.String("totam"),
                                Status: sdk.String("provident"),
                                UID: sdk.String("maxime"),
                            },
                        },
                        RequestMethod: sdk.String("totam"),
                        RequestType: sdk.String("id"),
                        RoundingAdjustmentIncludedMoney: &shared.Money{
                            Amount: sdk.Int64(208122),
                            Currency: sdk.String("dolores"),
                        },
                        TippingEnabled: sdk.Bool(false),
                        TotalCompletedAmountMoney: &shared.Money{
                            Amount: sdk.Int64(424404),
                            Currency: sdk.String("ipsum"),
                        },
                        UID: sdk.String("occaecati"),
                    },
                    shared.InvoicePaymentRequest{
                        AutomaticPaymentSource: sdk.String("pariatur"),
                        CardID: sdk.String("similique"),
                        ComputedAmountMoney: &shared.Money{
                            Amount: sdk.Int64(336961),
                            Currency: sdk.String("facilis"),
                        },
                        DueDate: sdk.String("in"),
                        FixedAmountRequestedMoney: &shared.Money{
                            Amount: sdk.Int64(748253),
                            Currency: sdk.String("nisi"),
                        },
                        PercentageRequested: sdk.String("natus"),
                        Reminders: []shared.InvoicePaymentReminder{
                            shared.InvoicePaymentReminder{
                                Message: sdk.String("quia"),
                                RelativeScheduledDays: sdk.Int64(704574),
                                SentAt: sdk.String("atque"),
                                Status: sdk.String("atque"),
                                UID: sdk.String("illo"),
                            },
                        },
                        RequestMethod: sdk.String("dolorum"),
                        RequestType: sdk.String("provident"),
                        RoundingAdjustmentIncludedMoney: &shared.Money{
                            Amount: sdk.Int64(278231),
                            Currency: sdk.String("maiores"),
                        },
                        TippingEnabled: sdk.Bool(false),
                        TotalCompletedAmountMoney: &shared.Money{
                            Amount: sdk.Int64(406914),
                            Currency: sdk.String("modi"),
                        },
                        UID: sdk.String("sequi"),
                    },
                },
                PrimaryRecipient: &shared.InvoiceRecipient{
                    Address: &shared.Address{
                        AddressLine1: sdk.String("nisi"),
                        AddressLine2: sdk.String("autem"),
                        AddressLine3: sdk.String("tempora"),
                        AdministrativeDistrictLevel1: sdk.String("mollitia"),
                        AdministrativeDistrictLevel2: sdk.String("quas"),
                        AdministrativeDistrictLevel3: sdk.String("hic"),
                        Country: sdk.String("Armenia"),
                        FirstName: sdk.String("Malachi"),
                        LastName: sdk.String("Ziemann"),
                        Locality: sdk.String("rem"),
                        Organization: sdk.String("quod"),
                        PostalCode: sdk.String("61842"),
                        Sublocality: sdk.String("quia"),
                        Sublocality2: sdk.String("nulla"),
                        Sublocality3: sdk.String("occaecati"),
                    },
                    CompanyName: sdk.String("doloribus"),
                    CustomerID: sdk.String("libero"),
                    EmailAddress: sdk.String("culpa"),
                    FamilyName: sdk.String("tenetur"),
                    GivenName: sdk.String("molestias"),
                    PhoneNumber: sdk.String("magnam"),
                },
                PublicURL: sdk.String("voluptate"),
                ScheduledAt: sdk.String("aliquid"),
                Status: sdk.String("officia"),
                SubscriptionID: sdk.String("qui"),
                Timezone: sdk.String("animi"),
                Title: sdk.String("Dr."),
                UpdatedAt: sdk.String("quas"),
                Version: sdk.Int64(824078),
            },
        },
        InvoiceID: "optio",
    }, operations.UpdateInvoiceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInvoiceResponse != nil {
        // handle response
    }
}
```
