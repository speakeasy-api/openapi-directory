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
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, operations.CreateConsentRequest{
        Digest: sdk.String("corrupti"),
        PSUAccept: sdk.String("provident"),
        PSUAcceptCharset: sdk.String("distinctio"),
        PSUAcceptEncoding: sdk.String("quibusdam"),
        PSUAcceptLanguage: sdk.String("unde"),
        PSUCorporateID: sdk.String("nulla"),
        PSUCorporateIDType: sdk.String("corrupti"),
        PSUDeviceID: sdk.String("illum"),
        PSUGeoLocation: sdk.String("vel"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PsuID: sdk.String("deserunt"),
        PSUIDType: sdk.String("suscipit"),
        PSUIPAddress: "112.76.228.14",
        PSUIPPort: sdk.String("delectus"),
        PSUUserAgent: sdk.String("tempora"),
        Signature: sdk.String("suscipit"),
        TPPBrandLoggingInformation: sdk.String("molestiae"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("https://studious-lynx.info"),
        TPPNotificationContentPreferred: sdk.String("excepturi"),
        TPPNotificationURI: sdk.String("nisi"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://tangible-bathroom.info"),
        TPPSignatureCertificate: sdk.String("veritatis"),
        XRequestID: "deserunt",
        Consents: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("ipsam"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("sapiente"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("quo"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("odit"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("at"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("maiores"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("molestiae"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("quod"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("quod"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                    },
                },
                AllPsd2: shared.AccountAccessAllPsd2EnumAllAccounts.ToPointer(),
                AvailableAccounts: shared.AccountAccessAvailableAccountsEnumAllAccountsWithOwnerName.ToPointer(),
                AvailableAccountsWithBalance: shared.AccountAccessAvailableAccountsWithBalanceEnumAllAccountsWithOwnerName.ToPointer(),
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("dicta"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("nam"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("officia"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
                RestrictedTo: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("totam"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("beatae"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("commodi"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("molestiae"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 4,
            RecurringIndicator: false,
            ValidUntil: types.MustDateFromString("2020-12-31"),
        },
    }, operations.CreateConsentSecurity{
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


### [AccountInformationServiceAIS](docs/accountinformationserviceais/README.md)

* [CreateConsent](docs/accountinformationserviceais/README.md#createconsent) - Create consent
* [DeleteConsent](docs/accountinformationserviceais/README.md#deleteconsent) - Delete Consent
* [GetAccountList](docs/accountinformationserviceais/README.md#getaccountlist) - Read account list
* [GetBalances](docs/accountinformationserviceais/README.md#getbalances) - Read balance
* [GetConsentAuthorisation](docs/accountinformationserviceais/README.md#getconsentauthorisation) - Get consent authorisation sub-resources request
* [GetConsentInformation](docs/accountinformationserviceais/README.md#getconsentinformation) - Get consent request
* [GetConsentScaStatus](docs/accountinformationserviceais/README.md#getconsentscastatus) - Read the SCA status of the consent authorisation
* [GetConsentStatus](docs/accountinformationserviceais/README.md#getconsentstatus) - Consent status request
* [GetTransactionDetails](docs/accountinformationserviceais/README.md#gettransactiondetails) - Read transaction details
* [GetTransactionList](docs/accountinformationserviceais/README.md#gettransactionlist) - Read transaction list of an account
* [ReadAccountDetails](docs/accountinformationserviceais/README.md#readaccountdetails) - Read account details
* [StartConsentAuthorisation](docs/accountinformationserviceais/README.md#startconsentauthorisation) - Start the authorisation process for a consent
* [UpdateConsentsPsuData](docs/accountinformationserviceais/README.md#updateconsentspsudata) - Update PSU Data for consents

### [CommonServices](docs/commonservices/README.md)

* [DeleteSigningBasket](docs/commonservices/README.md#deletesigningbasket) - Delete the signing basket
* [GetConsentScaStatus](docs/commonservices/README.md#getconsentscastatus) - Read the SCA status of the consent authorisation
* [GetPaymentCancellationScaStatus](docs/commonservices/README.md#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [GetPaymentInitiationAuthorisation](docs/commonservices/README.md#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [GetPaymentInitiationScaStatus](docs/commonservices/README.md#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [GetSigningBasketAuthorisation](docs/commonservices/README.md#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [GetSigningBasketScaStatus](docs/commonservices/README.md#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [GetSigningBasketStatus](docs/commonservices/README.md#getsigningbasketstatus) - Read the status of the signing basket
* [StartConsentAuthorisation](docs/commonservices/README.md#startconsentauthorisation) - Start the authorisation process for a consent
* [StartPaymentAuthorisation](docs/commonservices/README.md#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [StartPaymentInitiationCancellationAuthorisation](docs/commonservices/README.md#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [StartSigningBasketAuthorisation](docs/commonservices/README.md#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [UpdateConsentsPsuData](docs/commonservices/README.md#updateconsentspsudata) - Update PSU Data for consents
* [UpdatePaymentCancellationPsuData](docs/commonservices/README.md#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [UpdatePaymentPsuData](docs/commonservices/README.md#updatepaymentpsudata) - Update PSU data for payment initiation
* [UpdateSigningBasketPsuData](docs/commonservices/README.md#updatesigningbasketpsudata) - Update PSU data for signing basket

### [ConfirmationOfFundsServicePIIS](docs/confirmationoffundsservicepiis/README.md)

* [CheckAvailabilityOfFunds](docs/confirmationoffundsservicepiis/README.md#checkavailabilityoffunds) - Confirmation of funds request

### [PaymentInitiationServicePIS](docs/paymentinitiationservicepis/README.md)

* [CancelPayment](docs/paymentinitiationservicepis/README.md#cancelpayment) - Payment cancellation request
* [GetPaymentCancellationScaStatus](docs/paymentinitiationservicepis/README.md#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [GetPaymentInformation](docs/paymentinitiationservicepis/README.md#getpaymentinformation) - Get payment information
* [GetPaymentInitiationAuthorisation](docs/paymentinitiationservicepis/README.md#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [GetPaymentInitiationCancellationAuthorisationInformation](docs/paymentinitiationservicepis/README.md#getpaymentinitiationcancellationauthorisationinformation) - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* [GetPaymentInitiationScaStatus](docs/paymentinitiationservicepis/README.md#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [GetPaymentInitiationStatus](docs/paymentinitiationservicepis/README.md#getpaymentinitiationstatus) - Payment initiation status request
* [InitiatePaymentJSON](docs/paymentinitiationservicepis/README.md#initiatepaymentjson) - Payment initiation request
* [InitiatePaymentMultipart](docs/paymentinitiationservicepis/README.md#initiatepaymentmultipart) - Payment initiation request
* [InitiatePaymentRaw](docs/paymentinitiationservicepis/README.md#initiatepaymentraw) - Payment initiation request
* [StartPaymentAuthorisation](docs/paymentinitiationservicepis/README.md#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [StartPaymentInitiationCancellationAuthorisation](docs/paymentinitiationservicepis/README.md#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [UpdatePaymentCancellationPsuData](docs/paymentinitiationservicepis/README.md#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [UpdatePaymentPsuData](docs/paymentinitiationservicepis/README.md#updatepaymentpsudata) - Update PSU data for payment initiation

### [SigningBasketsServiceSBS](docs/signingbasketsservicesbs/README.md)

* [CreateSigningBasket](docs/signingbasketsservicesbs/README.md#createsigningbasket) - Create a signing basket resource
* [DeleteSigningBasket](docs/signingbasketsservicesbs/README.md#deletesigningbasket) - Delete the signing basket
* [GetSigningBasket](docs/signingbasketsservicesbs/README.md#getsigningbasket) - Returns the content of an signing basket object
* [GetSigningBasketAuthorisation](docs/signingbasketsservicesbs/README.md#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [GetSigningBasketScaStatus](docs/signingbasketsservicesbs/README.md#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [GetSigningBasketStatus](docs/signingbasketsservicesbs/README.md#getsigningbasketstatus) - Read the status of the signing basket
* [StartSigningBasketAuthorisation](docs/signingbasketsservicesbs/README.md#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [UpdateSigningBasketPsuData](docs/signingbasketsservicesbs/README.md#updatesigningbasketpsudata) - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
