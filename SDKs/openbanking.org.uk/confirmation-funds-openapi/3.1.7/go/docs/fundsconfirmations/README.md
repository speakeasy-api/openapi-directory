# FundsConfirmations

### Available Operations

* [CreateFundsConfirmationConsents](#createfundsconfirmationconsents) - Create Funds Confirmation Consent
* [CreateFundsConfirmations](#createfundsconfirmations) - Create Funds Confirmation
* [DeleteFundsConfirmationConsentsConsentID](#deletefundsconfirmationconsentsconsentid) - Delete Funds Confirmation Consent
* [GetFundsConfirmationConsentsConsentID](#getfundsconfirmationconsentsconsentid) - Get Funds Confirmation Consent

## CreateFundsConfirmationConsents

Create Funds Confirmation Consent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FundsConfirmations.CreateFundsConfirmationConsents(ctx, operations.CreateFundsConfirmationConsentsRequest{
        Authorization: "ipsa",
        OBFundsConfirmationConsent1: shared.OBFundsConfirmationConsent1{
            Data: shared.OBFundsConfirmationConsent1Data{
                DebtorAccount: shared.OBFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "delectus",
                    Name: sdk.String("Laurie Kreiger"),
                    SchemeName: "voluptatum",
                    SecondaryIdentification: sdk.String("iusto"),
                },
                ExpirationDateTime: types.MustTimeFromString("2022-03-20T06:24:36.919Z"),
            },
        },
        XCustomerUserAgent: sdk.String("recusandae"),
        XFapiAuthDate: sdk.String("temporibus"),
        XFapiCustomerIPAddress: sdk.String("ab"),
        XFapiInteractionID: sdk.String("quis"),
    }, operations.CreateFundsConfirmationConsentsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBFundsConfirmationConsentResponse1 != nil {
        // handle response
    }
}
```

## CreateFundsConfirmations

Create Funds Confirmation

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
    res, err := s.FundsConfirmations.CreateFundsConfirmations(ctx, operations.CreateFundsConfirmationsRequest{
        Authorization: "veritatis",
        OBFundsConfirmation1: shared.OBFundsConfirmation1{
            Data: shared.OBFundsConfirmation1Data{
                ConsentID: "deserunt",
                InstructedAmount: shared.OBFundsConfirmation1DataInstructedAmount{
                    Amount: "perferendis",
                    Currency: "ipsam",
                },
                Reference: "repellendus",
            },
        },
        XCustomerUserAgent: sdk.String("sapiente"),
        XFapiAuthDate: sdk.String("quo"),
        XFapiCustomerIPAddress: sdk.String("odit"),
        XFapiInteractionID: sdk.String("at"),
    }, operations.CreateFundsConfirmationsSecurity{
        PSUOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBFundsConfirmationResponse1 != nil {
        // handle response
    }
}
```

## DeleteFundsConfirmationConsentsConsentID

Delete Funds Confirmation Consent

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
    res, err := s.FundsConfirmations.DeleteFundsConfirmationConsentsConsentID(ctx, operations.DeleteFundsConfirmationConsentsConsentIDRequest{
        Authorization: "at",
        ConsentID: "maiores",
        XCustomerUserAgent: sdk.String("molestiae"),
        XFapiAuthDate: sdk.String("quod"),
        XFapiCustomerIPAddress: sdk.String("quod"),
        XFapiInteractionID: sdk.String("esse"),
    }, operations.DeleteFundsConfirmationConsentsConsentIDSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFundsConfirmationConsentsConsentID

Get Funds Confirmation Consent

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
    res, err := s.FundsConfirmations.GetFundsConfirmationConsentsConsentID(ctx, operations.GetFundsConfirmationConsentsConsentIDRequest{
        Authorization: "totam",
        ConsentID: "porro",
        XCustomerUserAgent: sdk.String("dolorum"),
        XFapiAuthDate: sdk.String("dicta"),
        XFapiCustomerIPAddress: sdk.String("nam"),
        XFapiInteractionID: sdk.String("officia"),
    }, operations.GetFundsConfirmationConsentsConsentIDSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBFundsConfirmationConsentResponse1 != nil {
        // handle response
    }
}
```
