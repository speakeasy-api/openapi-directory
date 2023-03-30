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
            Authorization: "corrupti",
            XCustomerUserAgent: "provident",
            XFapiAuthDate: "distinctio",
            XFapiCustomerIPAddress: "quibusdam",
            XFapiInteractionID: "unde",
        },
        Request: shared.OBFundsConfirmationConsent1{
            Data: shared.OBFundsConfirmationConsent1Data{
                DebtorAccount: shared.OBFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "nulla",
                    Name: "corrupti",
                    SchemeName: "illum",
                    SecondaryIdentification: "vel",
                },
                ExpirationDateTime: "2021-09-16T11:56:06.019Z",
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