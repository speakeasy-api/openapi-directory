# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openbankingproject.ch/1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH/go
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

    req := operations.CreateConsentRequest{
        Digest: "corrupti",
        PSUAccept: "provident",
        PSUAcceptCharset: "distinctio",
        PSUAcceptEncoding: "quibusdam",
        PSUAcceptLanguage: "unde",
        PSUCorporateID: "nulla",
        PSUCorporateIDType: "corrupti",
        PSUDeviceID: "illum",
        PSUGeoLocation: "vel",
        PSUHTTPMethod: "PATCH",
        PsuID: "deserunt",
        PSUIDType: "suscipit",
        PSUIPAddress: "112.76.228.14",
        PSUIPPort: "delectus",
        PSUUserAgent: "tempora",
        Signature: "suscipit",
        TPPBrandLoggingInformation: "molestiae",
        TPPExplicitAuthorisationPreferred: false,
        TPPNokRedirectURI: "https://studious-lynx.info",
        TPPNotificationContentPreferred: "excepturi",
        TPPNotificationURI: "nisi",
        TPPRedirectPreferred: false,
        TPPRedirectURI: "https://tangible-bathroom.info",
        TPPSignatureCertificate: "veritatis",
        XRequestID: "deserunt",
        Consents: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "ipsam",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "sapiente",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "quo",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "odit",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "at",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "maiores",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "molestiae",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "quod",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "quod",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                },
                AllPsd2: "allAccounts",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccountsWithOwnerName",
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "dicta",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "nam",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "officia",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                RestrictedTo: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "totam",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "beatae",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "commodi",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "molestiae",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 4,
            RecurringIndicator: false,
            ValidUntil: "2020-12-31",
        },
    }

    ctx := context.Background()
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, req, operations.CreateConsentSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentsResponse201 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccountInformationServiceAIS

* `CreateConsent` - Create consent
* `DeleteConsent` - Delete Consent
* `GetAccountList` - Read account list
* `GetBalances` - Read balance
* `GetConsentAuthorisation` - Get consent authorisation sub-resources request
* `GetConsentInformation` - Get consent request
* `GetConsentScaStatus` - Read the SCA status of the consent authorisation
* `GetConsentStatus` - Consent status request
* `GetTransactionDetails` - Read transaction details
* `GetTransactionList` - Read transaction list of an account
* `ReadAccountDetails` - Read account details
* `StartConsentAuthorisation` - Start the authorisation process for a consent
* `UpdateConsentsPsuData` - Update PSU Data for consents

### CommonServices

* `DeleteSigningBasket` - Delete the signing basket
* `GetConsentScaStatus` - Read the SCA status of the consent authorisation
* `GetPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `GetPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `GetPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `GetSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `GetSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `GetSigningBasketStatus` - Read the status of the signing basket
* `StartConsentAuthorisation` - Start the authorisation process for a consent
* `StartPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `StartPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `StartSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `UpdateConsentsPsuData` - Update PSU Data for consents
* `UpdatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `UpdatePaymentPsuData` - Update PSU data for payment initiation
* `UpdateSigningBasketPsuData` - Update PSU data for signing basket

### ConfirmationOfFundsServicePIIS

* `CheckAvailabilityOfFunds` - Confirmation of funds request

### PaymentInitiationServicePIS

* `CancelPayment` - Payment cancellation request
* `GetPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `GetPaymentInformation` - Get payment information
* `GetPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `GetPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `GetPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `GetPaymentInitiationStatus` - Payment initiation status request
* `InitiatePaymentJSON` - Payment initiation request
* `InitiatePaymentMultipart` - Payment initiation request
* `InitiatePaymentRaw` - Payment initiation request
* `StartPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `StartPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `UpdatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `UpdatePaymentPsuData` - Update PSU data for payment initiation

### SigningBasketsServiceSBS

* `CreateSigningBasket` - Create a signing basket resource
* `DeleteSigningBasket` - Delete the signing basket
* `GetSigningBasket` - Returns the content of an signing basket object
* `GetSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `GetSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `GetSigningBasketStatus` - Read the status of the signing basket
* `StartSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `UpdateSigningBasketPsuData` - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
