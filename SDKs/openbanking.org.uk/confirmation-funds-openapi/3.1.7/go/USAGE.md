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
            Authorization: "quae",
            XCustomerUserAgent: "incidunt",
            XFapiAuthDate: "dicta",
            XFapiCustomerIPAddress: "quo",
            XFapiInteractionID: "ea",
        },
        Request: shared.ObFundsConfirmationConsent1{
            Data: shared.ObFundsConfirmationConsent1Data{
                DebtorAccount: shared.ObFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "dolorem",
                    Name: "dolorum",
                    SchemeName: "reprehenderit",
                    SecondaryIdentification: "consequatur",
                },
                ExpirationDateTime: "2011-12-15T00:25:43Z",
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