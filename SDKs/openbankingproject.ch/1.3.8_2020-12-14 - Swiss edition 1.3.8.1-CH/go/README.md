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
        Security: operations.CreateConsentSecurity{
            BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Headers: operations.CreateConsentHeaders{
            Digest: "unde",
            PSUAccept: "deserunt",
            PSUAcceptCharset: "porro",
            PSUAcceptEncoding: "nulla",
            PSUAcceptLanguage: "id",
            PSUCorporateID: "vero",
            PSUCorporateIDType: "perspiciatis",
            PSUDeviceID: "nulla",
            PSUGeoLocation: "nihil",
            PSUHTTPMethod: "PATCH",
            PsuID: "facilis",
            PSUIDType: "eum",
            PSUIPAddress: "112.76.228.14",
            PSUIPPort: "sapiente",
            PSUUserAgent: "enim",
            Signature: "eum",
            TPPBrandLoggingInformation: "voluptatum",
            TPPExplicitAuthorisationPreferred: false,
            TPPNokRedirectURI: "https://randy.name",
            TPPNotificationContentPreferred: "deleniti",
            TPPNotificationURI: "similique",
            TPPRedirectPreferred: false,
            TPPRedirectURI: "http://tianna.org",
            TPPSignatureCertificate: "quasi",
            XRequestID: "laboriosam",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "est",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "consequatur",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "a",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "omnis",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "eos",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "accusamus",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                },
                AllPsd2: "allAccountsWithOwnerName",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccounts",
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "et",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "praesentium",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "occaecati",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "dolor",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                RestrictedTo: []string{
                    "sed",
                    "quisquam",
                    "rerum",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "qui",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "sed",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "rerum",
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
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
