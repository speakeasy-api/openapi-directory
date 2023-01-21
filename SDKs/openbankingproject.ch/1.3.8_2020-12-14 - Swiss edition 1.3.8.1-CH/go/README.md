# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConsentRequest{
        Security: operations.CreateConsentSecurity{
            BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Headers: operations.CreateConsentHeaders{
            Digest: "sit",
            PSUAccept: "voluptas",
            PSUAcceptCharset: "culpa",
            PSUAcceptEncoding: "expedita",
            PSUAcceptLanguage: "consequuntur",
            PSUCorporateID: "dolor",
            PSUCorporateIDType: "expedita",
            PSUDeviceID: "voluptas",
            PSUGeoLocation: "fugit",
            PSUHTTPMethod: "PATCH",
            PSUID: "nihil",
            PSUIDType: "rerum",
            PSUIPAddress: "dicta",
            PSUIPPort: "debitis",
            PSUUserAgent: "voluptatum",
            Signature: "et",
            TPPBrandLoggingInformation: "ut",
            TPPExplicitAuthorisationPreferred: true,
            TPPNokRedirectURI: "et",
            TPPNotificationContentPreferred: "voluptate",
            TPPNotificationURI: "iste",
            TPPRedirectPreferred: true,
            TPPRedirectURI: "totam",
            TPPSignatureCertificate: "dolores",
            XRequestID: "illum",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "vel",
                        Currency: "odio",
                        Iban: "dolore",
                        OtherAccountIdentification: "id",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "accusantium",
                            Currency: "totam",
                            Iban: "commodi",
                            OtherAccountIdentification: "quis",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "aut",
                            Currency: "odit",
                            Iban: "non",
                            OtherAccountIdentification: "voluptas",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "omnis",
                            Currency: "aut",
                            Iban: "illo",
                            OtherAccountIdentification: "sed",
                        },
                    },
                },
                AllPsd2: "allAccountsWithOwnerName",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccounts",
                Balances: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "odio",
                        Currency: "qui",
                        Iban: "recusandae",
                        OtherAccountIdentification: "at",
                    },
                },
                RestrictedTo: []string{
                    "eveniet",
                },
                Transactions: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "sint",
                        Currency: "inventore",
                        Iban: "ut",
                        OtherAccountIdentification: "exercitationem",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "aut",
                        Currency: "reprehenderit",
                        Iban: "tempore",
                        OtherAccountIdentification: "maiores",
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 7242748068272024738,
            RecurringIndicator: false,
            ValidUntil: "1992-08-27",
        },
    }
    
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentsResponse201 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account Information Service (AIS)

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

### Common Services

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

### Confirmation of Funds Service (PIIS)

* `CheckAvailabilityOfFunds` - Confirmation of funds request

### Payment Initiation Service (PIS)

* `CancelPayment` - Payment cancellation request
* `GetPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `GetPaymentInformation` - Get payment information
* `GetPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `GetPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `GetPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `GetPaymentInitiationStatus` - Payment initiation status request
* `InitiatePayment` - Payment initiation request
* `StartPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `StartPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `UpdatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `UpdatePaymentPsuData` - Update PSU data for payment initiation

### Signing Baskets Service (SBS)

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
