<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Authorization: "unde",
            XCustomerUserAgent: "deserunt",
            XFapiAuthDate: "porro",
            XFapiCustomerIPAddress: "nulla",
            XFapiInteractionID: "id",
        },
        Request: shared.OBFundsConfirmationConsent1{
            Data: shared.OBFundsConfirmationConsent1Data{
                DebtorAccount: shared.OBFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "vero",
                    Name: "perspiciatis",
                    SchemeName: "nulla",
                    SecondaryIdentification: "nihil",
                },
                ExpirationDateTime: "2022-08-13T22:20:17.848Z",
            },
        },
    }

    ctx := context.Background()
    res, err := s.FundsConfirmations.CreateFundsConfirmationConsents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OBFundsConfirmationConsentResponse1 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->