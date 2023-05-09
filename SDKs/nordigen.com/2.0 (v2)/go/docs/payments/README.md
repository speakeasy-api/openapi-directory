# Payments

### Available Operations

* [CreatePaymentForm](#createpaymentform) - Create payment
* [CreatePaymentJSON](#createpaymentjson) - Create payment
* [CreatePaymentMultipart](#createpaymentmultipart) - Create payment
* [DeletePeriodicPayment](#deleteperiodicpayment) - Delete periodic payment
* [ListMinimumRequiredFieldsForInstitution](#listminimumrequiredfieldsforinstitution) - List minimum required fields for institution
* [ListPayments](#listpayments) - Retrieve all payments belonging to the company
* [PaymentsCreditorsCreateForm](#paymentscreditorscreateform) - API endpoints related to creditor accounts.
* [PaymentsCreditorsCreateJSON](#paymentscreditorscreatejson) - API endpoints related to creditor accounts.
* [PaymentsCreditorsCreateMultipart](#paymentscreditorscreatemultipart) - API endpoints related to creditor accounts.
* [PaymentsCreditorsDestroy](#paymentscreditorsdestroy) - API endpoints related to creditor accounts.
* [PaymentsCreditorsList](#paymentscreditorslist) - API endpoints related to creditor accounts.
* [PaymentsCreditorsRetrieve](#paymentscreditorsretrieve) - API endpoints related to creditor accounts.
* [PaymentsSubmitCreateForm](#paymentssubmitcreateform) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [PaymentsSubmitCreateJSON](#paymentssubmitcreatejson) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [PaymentsSubmitCreateMultipart](#paymentssubmitcreatemultipart) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [RetrieveAllPaymentCreditorAccounts](#retrieveallpaymentcreditoraccounts) - Retrieve all payment creditor accounts
* [RetrievePayment](#retrievepayment) - Retrieve payment

## CreatePaymentForm

Create payment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.CreatePaymentForm(ctx, shared.PaymentWriteRequest2{
        CreditorAccount: sdk.String("28921cdd-c692-4601-bb57-6b0d5f0d30c5"),
        CreditorObject: &shared.CreditorAccountWriteRequest{
            Account: "hic",
            AddressCountry: shared.AddressCountryEnumEnumPl.ToPointer(),
            AddressStreet: sdk.String("nobis"),
            Agent: sdk.String("dolores"),
            AgentName: sdk.String("quis"),
            Currency: "totam",
            InstitutionID: sdk.String("dignissimos"),
            Name: "Beatrice Dooley Sr.",
            PostCode: sdk.String("42839-9675"),
            Type: shared.CreditorAccountWriteRequestTypeEnumIban.ToPointer(),
        },
        CustomPaymentID: sdk.String("porro"),
        DebtorAccount: sdk.String("consequuntur"),
        Description: sdk.String("blanditiis"),
        InstitutionID: sdk.String("error"),
        InstructedAmount: shared.InstructedAmountRequest{
            Amount: "eaque",
            Currency: "occaecati",
        },
        PaymentProduct: sdk.String("rerum"),
        PeriodicPayment: &shared.PeriodicPaymentRequest{
            DayOfExecution: sdk.String("adipisci"),
            EndDate: types.MustDateFromString("2020-03-14"),
            ExecutionRule: shared.PeriodicPaymentRequestExecutionRuleEnumFollowing.ToPointer(),
            Frequency: shared.PeriodicPaymentRequestFrequencyEnumQuarterly.ToPointer(),
            StartDate: types.MustDateFromString("2021-12-05"),
        },
        Redirect: "https://only-rice.net",
        RequestedExecutionDate: types.MustDateFromString("2022-01-24"),
        SubmitPayment: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentWrite != nil {
        // handle response
    }
}
```

## CreatePaymentJSON

Create payment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.CreatePaymentJSON(ctx, shared.PaymentWriteRequest{
        CreditorAccount: sdk.String("8633323f-9b77-4f3a-8100-674ebf69280d"),
        CreditorObject: &shared.CreditorAccountWriteRequest{
            Account: "ab",
            AddressCountry: shared.AddressCountryEnumEnumPl.ToPointer(),
            AddressStreet: sdk.String("dolorum"),
            Agent: sdk.String("iusto"),
            AgentName: sdk.String("voluptate"),
            Currency: "dolorum",
            InstitutionID: sdk.String("deleniti"),
            Name: "Terence Rau",
            PostCode: sdk.String("46921"),
            Type: shared.CreditorAccountWriteRequestTypeEnumIban.ToPointer(),
        },
        CustomPaymentID: sdk.String("amet"),
        DebtorAccount: &shared.PaymentWriteRequestDebtorAccount{
            Account: sdk.String("optio"),
            AddressCountry: sdk.String("accusamus"),
            AddressStreet: sdk.String("ad"),
            Currency: sdk.String("saepe"),
            Name: "Rosie McKenzie",
            PostCode: sdk.String("60832-4781"),
            Type: shared.PaymentWriteRequestDebtorAccountTypeEnumScan.ToPointer(),
            TypeNumber: sdk.String("a"),
        },
        Description: sdk.String("esse"),
        InstitutionID: sdk.String("harum"),
        InstructedAmount: shared.InstructedAmountRequest{
            Amount: "iusto",
            Currency: "ipsum",
        },
        PaymentProduct: shared.PaymentWriteRequestPaymentProductEnumSwift.ToPointer(),
        PeriodicPayment: &shared.PeriodicPaymentRequest{
            DayOfExecution: sdk.String("tenetur"),
            EndDate: types.MustDateFromString("2022-04-09"),
            ExecutionRule: shared.PeriodicPaymentRequestExecutionRuleEnumPreceding.ToPointer(),
            Frequency: shared.PeriodicPaymentRequestFrequencyEnumEveryTwoWeeks.ToPointer(),
            StartDate: types.MustDateFromString("2022-10-15"),
        },
        Redirect: "https://masculine-introduction.com",
        RequestedExecutionDate: types.MustDateFromString("2022-08-02"),
        SubmitPayment: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentWrite != nil {
        // handle response
    }
}
```

## CreatePaymentMultipart

Create payment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.CreatePaymentMultipart(ctx, shared.PaymentWriteRequest2{
        CreditorAccount: sdk.String("26b5a734-29cd-4b1a-8422-bb679d232271"),
        CreditorObject: &shared.CreditorAccountWriteRequest{
            Account: "ullam",
            AddressCountry: shared.AddressCountryEnumEnumPl.ToPointer(),
            AddressStreet: sdk.String("hic"),
            Agent: sdk.String("voluptatem"),
            AgentName: sdk.String("cumque"),
            Currency: "soluta",
            InstitutionID: sdk.String("nobis"),
            Name: "Miss Kerry Emmerich",
            PostCode: sdk.String("50922-2261"),
            Type: shared.CreditorAccountWriteRequestTypeEnumIban.ToPointer(),
        },
        CustomPaymentID: sdk.String("aut"),
        DebtorAccount: sdk.String("quas"),
        Description: sdk.String("itaque"),
        InstitutionID: sdk.String("consequatur"),
        InstructedAmount: shared.InstructedAmountRequest{
            Amount: "est",
            Currency: "repellendus",
        },
        PaymentProduct: sdk.String("porro"),
        PeriodicPayment: &shared.PeriodicPaymentRequest{
            DayOfExecution: sdk.String("doloribus"),
            EndDate: types.MustDateFromString("2022-04-19"),
            ExecutionRule: shared.PeriodicPaymentRequestExecutionRuleEnumPreceding.ToPointer(),
            Frequency: shared.PeriodicPaymentRequestFrequencyEnumWeekly.ToPointer(),
            StartDate: types.MustDateFromString("2022-06-27"),
        },
        Redirect: "http://obese-western.net",
        RequestedExecutionDate: types.MustDateFromString("2021-03-07"),
        SubmitPayment: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentWrite != nil {
        // handle response
    }
}
```

## DeletePeriodicPayment

Delete periodic payment

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.DeletePeriodicPayment(ctx, operations.DeletePeriodicPaymentRequest{
        ID: "53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePeriodicPayment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListMinimumRequiredFieldsForInstitution

List minimum required fields for institution

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.ListMinimumRequiredFieldsForInstitution(ctx, operations.ListMinimumRequiredFieldsForInstitutionRequest{
        InstitutionID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMinimumRequiredFieldsForInstitution200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPayments

Retrieve all payments belonging to the company

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.ListPayments(ctx, operations.ListPaymentsRequest{
        Limit: sdk.Int64(497391),
        Offset: sdk.Int64(4048),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPaymentReadList != nil {
        // handle response
    }
}
```

## PaymentsCreditorsCreateForm

API endpoints related to creditor accounts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsCreditorsCreateForm(ctx, shared.CreditorAccountWriteRequest1{
        Account: "officia",
        AddressCountry: shared.AddressCountryEnumEnumFi.ToPointer(),
        AddressStreet: sdk.String("ipsam"),
        Agent: sdk.String("ea"),
        AgentName: sdk.String("aspernatur"),
        Currency: "vel",
        InstitutionID: sdk.String("possimus"),
        Name: "Paula Jacobs I",
        PostCode: sdk.String("04859-3979"),
        Type: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditorAccountWrite != nil {
        // handle response
    }
}
```

## PaymentsCreditorsCreateJSON

API endpoints related to creditor accounts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsCreditorsCreateJSON(ctx, shared.CreditorAccountWriteRequest{
        Account: "impedit",
        AddressCountry: shared.AddressCountryEnumEnumGr.ToPointer(),
        AddressStreet: sdk.String("veniam"),
        Agent: sdk.String("aliquid"),
        AgentName: sdk.String("inventore"),
        Currency: "magnam",
        InstitutionID: sdk.String("ea"),
        Name: "Glenn Walter",
        PostCode: sdk.String("97005"),
        Type: shared.CreditorAccountWriteRequestTypeEnumScan.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditorAccountWrite != nil {
        // handle response
    }
}
```

## PaymentsCreditorsCreateMultipart

API endpoints related to creditor accounts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsCreditorsCreateMultipart(ctx, shared.CreditorAccountWriteRequest1{
        Account: "aliquam",
        AddressCountry: shared.AddressCountryEnumEnumCy.ToPointer(),
        AddressStreet: sdk.String("accusamus"),
        Agent: sdk.String("inventore"),
        AgentName: sdk.String("non"),
        Currency: "et",
        InstitutionID: sdk.String("dolorum"),
        Name: "Clark Franecki",
        PostCode: sdk.String("58837-0221"),
        Type: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditorAccountWrite != nil {
        // handle response
    }
}
```

## PaymentsCreditorsDestroy

API endpoints related to creditor accounts.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsCreditorsDestroy(ctx, operations.PaymentsCreditorsDestroyRequest{
        ID: "07474778-a7bd-4466-928c-10ab3cdca425",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PaymentsCreditorsList

API endpoints related to creditor accounts.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsCreditorsList(ctx, operations.PaymentsCreditorsListRequest{
        Account: sdk.String("ab"),
        AddressCountry: sdk.String("cupiditate"),
        Agent: sdk.String("consequatur"),
        Currency: sdk.String("tempora"),
        Limit: sdk.Int64(892050),
        Name: sdk.String("Kelly Donnelly"),
        Offset: sdk.Int64(925164),
        Type: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedCreditorAccountList != nil {
        // handle response
    }
}
```

## PaymentsCreditorsRetrieve

API endpoints related to creditor accounts.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsCreditorsRetrieve(ctx, operations.PaymentsCreditorsRetrieveRequest{
        ID: "bc7178e4-796f-42a7-8c68-8282aa482562",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditorAccount != nil {
        // handle response
    }
}
```

## PaymentsSubmitCreateForm

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsSubmitCreateForm(ctx, operations.PaymentsSubmitCreateFormRequest{
        PaymentReadRequest1: shared.PaymentReadRequest1{
            CreditorAccount: sdk.String("f222e981-7ee1-47cb-a61e-6b7b95bc0ab3"),
            CreditorObject: &shared.CreditorAccountWriteRequest{
                Account: "cumque",
                AddressCountry: shared.AddressCountryEnumEnumCz.ToPointer(),
                AddressStreet: sdk.String("consequatur"),
                Agent: sdk.String("minus"),
                AgentName: sdk.String("quaerat"),
                Currency: "sapiente",
                InstitutionID: sdk.String("consectetur"),
                Name: "Mattie McLaughlin",
                PostCode: sdk.String("40965-8819"),
                Type: shared.CreditorAccountWriteRequestTypeEnumScan.ToPointer(),
            },
            CustomPaymentID: sdk.String("facere"),
            DebtorAccount: shared.DebtorAccountWriteRequest{
                Account: sdk.String("veritatis"),
                AddressCountry: sdk.String("consequuntur"),
                AddressStreet: sdk.String("quasi"),
                Currency: sdk.String("similique"),
                Name: "Dr. Gene Wiegand",
                PostCode: sdk.String("27870"),
                Type: shared.DebtorAccountWriteRequestTypeEnumIban.ToPointer(),
                TypeNumber: sdk.String("sapiente"),
            },
            Description: sdk.String("dicta"),
            InstitutionID: sdk.String("ullam"),
            InstructedAmount: shared.InstructedAmountRequest{
                Amount: "reprehenderit",
                Currency: "ullam",
            },
            PaymentProduct: sdk.String("nisi"),
            Redirect: "http://mild-commerce.org",
        },
        ID: "68ea19f1-d170-4513-b9d0-8086a1840394",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentRead != nil {
        // handle response
    }
}
```

## PaymentsSubmitCreateJSON

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsSubmitCreateJSON(ctx, operations.PaymentsSubmitCreateJSONRequest{
        PaymentReadRequest: shared.PaymentReadRequest{
            CreditorAccount: sdk.String("c26071f9-3f5f-4064-adac-7af515cc413a"),
            CreditorObject: &shared.CreditorAccountWriteRequest{
                Account: "id",
                AddressCountry: shared.AddressCountryEnumEnumHu.ToPointer(),
                AddressStreet: sdk.String("velit"),
                Agent: sdk.String("culpa"),
                AgentName: sdk.String("est"),
                Currency: "recusandae",
                InstitutionID: sdk.String("totam"),
                Name: "Chester Kuphal",
                PostCode: sdk.String("87744"),
                Type: shared.CreditorAccountWriteRequestTypeEnumIban.ToPointer(),
            },
            CustomPaymentID: sdk.String("reiciendis"),
            DebtorAccount: shared.DebtorAccountWriteRequest{
                Account: sdk.String("assumenda"),
                AddressCountry: sdk.String("nemo"),
                AddressStreet: sdk.String("recusandae"),
                Currency: sdk.String("aliquid"),
                Name: "Karla Feest",
                PostCode: sdk.String("82939-6982"),
                Type: shared.DebtorAccountWriteRequestTypeEnumIban.ToPointer(),
                TypeNumber: sdk.String("asperiores"),
            },
            Description: sdk.String("adipisci"),
            InstitutionID: sdk.String("non"),
            InstructedAmount: shared.InstructedAmountRequest{
                Amount: "amet",
                Currency: "beatae",
            },
            PaymentProduct: shared.PaymentReadRequestPaymentProductEnumBacs.ToPointer(),
            Redirect: "https://unimportant-custard.info",
        },
        ID: "b60eb1ea-4265-455b-a3c2-8744ed53b88f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentRead != nil {
        // handle response
    }
}
```

## PaymentsSubmitCreateMultipart

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.PaymentsSubmitCreateMultipart(ctx, operations.PaymentsSubmitCreateMultipartRequest{
        PaymentReadRequest1: shared.PaymentReadRequest1{
            CreditorAccount: sdk.String("3a8d8f5c-0b2f-42fb-bb19-4a276b26916f"),
            CreditorObject: &shared.CreditorAccountWriteRequest{
                Account: "debitis",
                AddressCountry: shared.AddressCountryEnumEnumBg.ToPointer(),
                AddressStreet: sdk.String("reiciendis"),
                Agent: sdk.String("perferendis"),
                AgentName: sdk.String("corrupti"),
                Currency: "maiores",
                InstitutionID: sdk.String("incidunt"),
                Name: "Sherri Gerlach",
                PostCode: sdk.String("55922"),
                Type: shared.CreditorAccountWriteRequestTypeEnumIban.ToPointer(),
            },
            CustomPaymentID: sdk.String("reiciendis"),
            DebtorAccount: shared.DebtorAccountWriteRequest{
                Account: sdk.String("ex"),
                AddressCountry: sdk.String("sit"),
                AddressStreet: sdk.String("non"),
                Currency: sdk.String("officiis"),
                Name: "Malcolm Hagenes",
                PostCode: sdk.String("50763-3998"),
                Type: shared.DebtorAccountWriteRequestTypeEnumIban.ToPointer(),
                TypeNumber: sdk.String("aperiam"),
            },
            Description: sdk.String("saepe"),
            InstitutionID: sdk.String("numquam"),
            InstructedAmount: shared.InstructedAmountRequest{
                Amount: "veniam",
                Currency: "in",
            },
            PaymentProduct: sdk.String("officiis"),
            Redirect: "http://magnificent-fishbone.name",
        },
        ID: "b6a89fbe-3a5a-4a8e-8824-d0ab4075088e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentRead != nil {
        // handle response
    }
}
```

## RetrieveAllPaymentCreditorAccounts

Retrieve all payment creditor accounts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.RetrieveAllPaymentCreditorAccounts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditorAccounts != nil {
        // handle response
    }
}
```

## RetrievePayment

Retrieve payment

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payments.RetrievePayment(ctx, operations.RetrievePaymentRequest{
        ID: "51862065-e904-4f3b-9194-b8abf603a79f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentRead != nil {
        // handle response
    }
}
```
