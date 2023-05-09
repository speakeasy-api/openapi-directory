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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [FundsConfirmations](docs/fundsconfirmations/README.md)

* [CreateFundsConfirmationConsents](docs/fundsconfirmations/README.md#createfundsconfirmationconsents) - Create Funds Confirmation Consent
* [CreateFundsConfirmations](docs/fundsconfirmations/README.md#createfundsconfirmations) - Create Funds Confirmation
* [DeleteFundsConfirmationConsentsConsentID](docs/fundsconfirmations/README.md#deletefundsconfirmationconsentsconsentid) - Delete Funds Confirmation Consent
* [GetFundsConfirmationConsentsConsentID](docs/fundsconfirmations/README.md#getfundsconfirmationconsentsconsentid) - Get Funds Confirmation Consent
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
