# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConsentRequest;
import org.openapis.openapi.models.operations.CreateConsentResponse;
import org.openapis.openapi.models.operations.CreateConsentSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessAllPsd2Enum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsEnum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsWithBalanceEnum;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.AdditionalInformationAccess;
import org.openapis.openapi.models.shared.Consents;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConsentRequest req = new CreateConsentRequest("140.151.183.216", "unde") {{
                digest = "nulla";
                psuAccept = "corrupti";
                psuAcceptCharset = "illum";
                psuAcceptEncoding = "vel";
                psuAcceptLanguage = "error";
                psuCorporateID = "deserunt";
                psuCorporateIDType = "suscipit";
                psuDeviceID = "iure";
                psuGeoLocation = "magnam";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuId = "ipsa";
                psuIDType = "delectus";
                psuIPPort = "tempora";
                psuUserAgent = "suscipit";
                signature = "molestiae";
                tppBrandLoggingInformation = "minus";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://menacing-jewellery.name";
                tppNotificationContentPreferred = "nisi";
                tppNotificationURI = "recusandae";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://bite-sized-favorite.com";
                tppSignatureCertificate = "deserunt";
                consents = new Consents(                new AccountAccess() {{
                                    accounts = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "ipsam";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                    }};
                                    additionalInformation = new AdditionalInformationAccess() {{
                                        ownerName = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "sapiente";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "quo";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "odit";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "at";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                        }};
                                        trustedBeneficiaries = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "maiores";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "molestiae";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "quod";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "quod";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                        }};
                                    }};;
                                    allPsd2 = AccountAccessAllPsd2Enum.ALL_ACCOUNTS;
                                    availableAccounts = AccountAccessAvailableAccountsEnum.ALL_ACCOUNTS_WITH_OWNER_NAME;
                                    availableAccountsWithBalance = AccountAccessAvailableAccountsWithBalanceEnum.ALL_ACCOUNTS_WITH_OWNER_NAME;
                                    balances = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "dicta";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "nam";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "officia";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                    }};
                                    restrictedTo = new String[]{{
                                        add("fugit"),
                                        add("deleniti"),
                                        add("hic"),
                                    }};
                                    transactions = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "totam";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "beatae";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "commodi";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "molestiae";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                    }};
                                }};, false, 4L, false, LocalDate.parse("2020-12-31"));;
            }};            

            CreateConsentResponse res = sdk.accountInformationServiceAIS.createConsent(req, new CreateConsentSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.consentsResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountInformationServiceAIS](docs/accountinformationserviceais/README.md)

* [createConsent](docs/accountinformationserviceais/README.md#createconsent) - Create consent
* [deleteConsent](docs/accountinformationserviceais/README.md#deleteconsent) - Delete Consent
* [getAccountList](docs/accountinformationserviceais/README.md#getaccountlist) - Read account list
* [getBalances](docs/accountinformationserviceais/README.md#getbalances) - Read balance
* [getConsentAuthorisation](docs/accountinformationserviceais/README.md#getconsentauthorisation) - Get consent authorisation sub-resources request
* [getConsentInformation](docs/accountinformationserviceais/README.md#getconsentinformation) - Get consent request
* [getConsentScaStatus](docs/accountinformationserviceais/README.md#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getConsentStatus](docs/accountinformationserviceais/README.md#getconsentstatus) - Consent status request
* [getTransactionDetails](docs/accountinformationserviceais/README.md#gettransactiondetails) - Read transaction details
* [getTransactionList](docs/accountinformationserviceais/README.md#gettransactionlist) - Read transaction list of an account
* [readAccountDetails](docs/accountinformationserviceais/README.md#readaccountdetails) - Read account details
* [startConsentAuthorisation](docs/accountinformationserviceais/README.md#startconsentauthorisation) - Start the authorisation process for a consent
* [updateConsentsPsuData](docs/accountinformationserviceais/README.md#updateconsentspsudata) - Update PSU Data for consents

### [commonServices](docs/commonservices/README.md)

* [deleteSigningBasket](docs/commonservices/README.md#deletesigningbasket) - Delete the signing basket
* [getConsentScaStatus](docs/commonservices/README.md#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getPaymentCancellationScaStatus](docs/commonservices/README.md#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [getPaymentInitiationAuthorisation](docs/commonservices/README.md#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [getPaymentInitiationScaStatus](docs/commonservices/README.md#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [getSigningBasketAuthorisation](docs/commonservices/README.md#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [getSigningBasketScaStatus](docs/commonservices/README.md#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [getSigningBasketStatus](docs/commonservices/README.md#getsigningbasketstatus) - Read the status of the signing basket
* [startConsentAuthorisation](docs/commonservices/README.md#startconsentauthorisation) - Start the authorisation process for a consent
* [startPaymentAuthorisation](docs/commonservices/README.md#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [startPaymentInitiationCancellationAuthorisation](docs/commonservices/README.md#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [startSigningBasketAuthorisation](docs/commonservices/README.md#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [updateConsentsPsuData](docs/commonservices/README.md#updateconsentspsudata) - Update PSU Data for consents
* [updatePaymentCancellationPsuData](docs/commonservices/README.md#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [updatePaymentPsuData](docs/commonservices/README.md#updatepaymentpsudata) - Update PSU data for payment initiation
* [updateSigningBasketPsuData](docs/commonservices/README.md#updatesigningbasketpsudata) - Update PSU data for signing basket

### [confirmationOfFundsServicePIIS](docs/confirmationoffundsservicepiis/README.md)

* [checkAvailabilityOfFunds](docs/confirmationoffundsservicepiis/README.md#checkavailabilityoffunds) - Confirmation of funds request

### [paymentInitiationServicePIS](docs/paymentinitiationservicepis/README.md)

* [cancelPayment](docs/paymentinitiationservicepis/README.md#cancelpayment) - Payment cancellation request
* [getPaymentCancellationScaStatus](docs/paymentinitiationservicepis/README.md#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [getPaymentInformation](docs/paymentinitiationservicepis/README.md#getpaymentinformation) - Get payment information
* [getPaymentInitiationAuthorisation](docs/paymentinitiationservicepis/README.md#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [getPaymentInitiationCancellationAuthorisationInformation](docs/paymentinitiationservicepis/README.md#getpaymentinitiationcancellationauthorisationinformation) - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* [getPaymentInitiationScaStatus](docs/paymentinitiationservicepis/README.md#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [getPaymentInitiationStatus](docs/paymentinitiationservicepis/README.md#getpaymentinitiationstatus) - Payment initiation status request
* [initiatePaymentJson](docs/paymentinitiationservicepis/README.md#initiatepaymentjson) - Payment initiation request
* [initiatePaymentMultipart](docs/paymentinitiationservicepis/README.md#initiatepaymentmultipart) - Payment initiation request
* [initiatePaymentRaw](docs/paymentinitiationservicepis/README.md#initiatepaymentraw) - Payment initiation request
* [startPaymentAuthorisation](docs/paymentinitiationservicepis/README.md#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [startPaymentInitiationCancellationAuthorisation](docs/paymentinitiationservicepis/README.md#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [updatePaymentCancellationPsuData](docs/paymentinitiationservicepis/README.md#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [updatePaymentPsuData](docs/paymentinitiationservicepis/README.md#updatepaymentpsudata) - Update PSU data for payment initiation

### [signingBasketsServiceSBS](docs/signingbasketsservicesbs/README.md)

* [createSigningBasket](docs/signingbasketsservicesbs/README.md#createsigningbasket) - Create a signing basket resource
* [deleteSigningBasket](docs/signingbasketsservicesbs/README.md#deletesigningbasket) - Delete the signing basket
* [getSigningBasket](docs/signingbasketsservicesbs/README.md#getsigningbasket) - Returns the content of an signing basket object
* [getSigningBasketAuthorisation](docs/signingbasketsservicesbs/README.md#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [getSigningBasketScaStatus](docs/signingbasketsservicesbs/README.md#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [getSigningBasketStatus](docs/signingbasketsservicesbs/README.md#getsigningbasketstatus) - Read the status of the signing basket
* [startSigningBasketAuthorisation](docs/signingbasketsservicesbs/README.md#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [updateSigningBasketPsuData](docs/signingbasketsservicesbs/README.md#updatesigningbasketpsudata) - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
