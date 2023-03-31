# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/confirmation-funds-openapi/3.1.7/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### FundsConfirmations

* `CreateFundsConfirmationConsents` - Create Funds Confirmation Consent
* `CreateFundsConfirmations` - Create Funds Confirmation
* `DeleteFundsConfirmationConsentsConsentID` - Delete Funds Confirmation Consent
* `GetFundsConfirmationConsentsConsentID` - Get Funds Confirmation Consent
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
