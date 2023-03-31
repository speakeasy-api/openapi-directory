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
        Authorization: "corrupti",
        OBFundsConfirmationConsent1: shared.OBFundsConfirmationConsent1{
            Data: shared.OBFundsConfirmationConsent1Data{
                DebtorAccount: shared.OBFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "provident",
                    Name: "distinctio",
                    SchemeName: "quibusdam",
                    SecondaryIdentification: "unde",
                },
                ExpirationDateTime: "2021-05-14T08:28:11.899Z",
            },
        },
        XCustomerUserAgent: "illum",
        XFapiAuthDate: "vel",
        XFapiCustomerIPAddress: "error",
        XFapiInteractionID: "deserunt",
    }

    ctx := context.Background()
    res, err := s.FundsConfirmations.CreateFundsConfirmationConsents(ctx, req, operations.CreateFundsConfirmationConsentsSecurity{
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
<!-- End SDK Example Usage -->