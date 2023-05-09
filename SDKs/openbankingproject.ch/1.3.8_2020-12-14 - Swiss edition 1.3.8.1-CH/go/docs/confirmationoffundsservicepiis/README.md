# ConfirmationOfFundsServicePIIS

## Overview

Confirmation of Funds Service (PIIS) returns a confirmation of funds request at the ASPSP.


### Available Operations

* [CheckAvailabilityOfFunds](#checkavailabilityoffunds) - Confirmation of funds request

## CheckAvailabilityOfFunds

Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.

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
    res, err := s.ConfirmationOfFundsServicePIIS.CheckAvailabilityOfFunds(ctx, operations.CheckAvailabilityOfFundsRequest{
        Authorization: sdk.String("fugit"),
        Digest: sdk.String("sapiente"),
        Signature: sdk.String("consequuntur"),
        TPPSignatureCertificate: sdk.String("ratione"),
        XRequestID: "explicabo",
        ConfirmationOfFunds: shared.ConfirmationOfFunds{
            Account: shared.AccountReference16CH{
                CashAccountType: sdk.String("saepe"),
                Currency: sdk.String("EUR"),
                Iban: sdk.String("FR7612345987650123456789014"),
                OtherAccountIdentification: sdk.String("90-100100-0"),
            },
            CardNumber: sdk.String("occaecati"),
            InstructedAmount: shared.Amount{
                Amount: "5877.78",
                Currency: "EUR",
            },
            Payee: sdk.String("atque"),
        },
    }, operations.CheckAvailabilityOfFundsSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAvailabilityOfFunds200ApplicationJSONObject != nil {
        // handle response
    }
}
```
