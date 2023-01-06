<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateFundsConfirmationConsentsRequest{
        Security: operations.CreateFundsConfirmationConsentsSecurity{
            TPPOAuth2Security: shared.SchemeTppoAuth2Security{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateFundsConfirmationConsentsHeaders{
            Authorization: "voluptatem",
            XCustomerUserAgent: "qui",
            XFapiAuthDate: "veritatis",
            XFapiCustomerIPAddress: "quo",
            XFapiInteractionID: "error",
        },
        Request: shared.ObFundsConfirmationConsent1{
            Data: shared.ObFundsConfirmationConsent1Data{
                DebtorAccount: shared.ObFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "et",
                    Name: "consequuntur",
                    SchemeName: "qui",
                    SecondaryIdentification: "ab",
                },
                ExpirationDateTime: "1993-11-30T12:01:29Z",
            },
        },
    }
    
    res, err := s.FundsConfirmations.CreateFundsConfirmationConsents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OBFundsConfirmationConsentResponse1 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->