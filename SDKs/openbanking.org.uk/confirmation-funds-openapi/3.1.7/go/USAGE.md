<!-- Start SDK Example Usage -->
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
        Authorization: "corrupti",
        OBFundsConfirmationConsent1: shared.OBFundsConfirmationConsent1{
            Data: shared.OBFundsConfirmationConsent1Data{
                DebtorAccount: shared.OBFundsConfirmationConsent1DataDebtorAccount{
                    Identification: "provident",
                    Name: sdk.String("Ellis Mitchell"),
                    SchemeName: "illum",
                    SecondaryIdentification: sdk.String("vel"),
                },
                ExpirationDateTime: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
            },
        },
        XCustomerUserAgent: sdk.String("suscipit"),
        XFapiAuthDate: sdk.String("iure"),
        XFapiCustomerIPAddress: sdk.String("magnam"),
        XFapiInteractionID: sdk.String("debitis"),
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
<!-- End SDK Example Usage -->