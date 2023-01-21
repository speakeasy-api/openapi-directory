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
            Authorization: "sit",
            XCustomerUserAgent: "voluptas",
            XFapiAuthDate: "culpa",
            XFapiCustomerIPAddress: "expedita",
            XFapiInteractionID: "consequuntur",
        },
        Request: shared.ObFundsConfirmationConsent1{
            Data: shared.ObFundsConfirmationConsent1Data{
                DebtorAccount: shared.ObFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "dolor",
                    Name: "expedita",
                    SchemeName: "voluptas",
                    SecondaryIdentification: "fugit",
                },
                ExpirationDateTime: "2011-08-12T10:11:12Z",
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