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

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateConsentSecurity;
import org.openapis.openapi.models.operations.CreateConsentHeaders;
import org.openapis.openapi.models.operations.CreateConsentRequest;
import org.openapis.openapi.models.operations.CreateConsentResponse;
import org.openapis.openapi.models.shared.Consents;
import org.openapis.openapi.models.shared.AccountAccessAllPsd2Enum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsEnum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsWithBalanceEnum;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.AdditionalInformationAccess;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.SchemeBearerAuthOAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConsentRequest req = new CreateConsentRequest() {{
                security = new CreateConsentSecurity() {{
                    bearerAuthOAuth = new SchemeBearerAuthOAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                headers = new CreateConsentHeaders() {{
                    digest = "corrupti";
                    psuAccept = "provident";
                    psuAcceptCharset = "distinctio";
                    psuAcceptEncoding = "quibusdam";
                    psuAcceptLanguage = "unde";
                    psuCorporateID = "nulla";
                    psuCorporateIDType = "corrupti";
                    psuDeviceID = "illum";
                    psuGeoLocation = "vel";
                    psuHttpMethod = "PATCH";
                    psuId = "deserunt";
                    psuIDType = "suscipit";
                    psuIPAddress = "112.76.228.14";
                    psuIPPort = "delectus";
                    psuUserAgent = "tempora";
                    signature = "suscipit";
                    tppBrandLoggingInformation = "molestiae";
                    tppExplicitAuthorisationPreferred = false;
                    tppNokRedirectURI = "https://studious-lynx.info";
                    tppNotificationContentPreferred = "excepturi";
                    tppNotificationURI = "nisi";
                    tppRedirectPreferred = false;
                    tppRedirectURI = "https://tangible-bathroom.info";
                    tppSignatureCertificate = "veritatis";
                    xRequestID = "deserunt";
                }};
                request = new Consents() {{
                    access = new AccountAccess() {{
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
                        }};
                        allPsd2 = "allAccounts";
                        availableAccounts = "allAccountsWithOwnerName";
                        availableAccountsWithBalance = "allAccountsWithOwnerName";
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
                    }};
                    combinedServiceIndicator = false;
                    frequencyPerDay = 4;
                    recurringIndicator = false;
                    validUntil = "2020-12-31";
                }};
            }};            

            CreateConsentResponse res = sdk.accountInformationServiceAIS.createConsent(req);

            if (res.consentsResponse201.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountInformationServiceAIS

* `createConsent` - Create consent
* `deleteConsent` - Delete Consent
* `getAccountList` - Read account list
* `getBalances` - Read balance
* `getConsentAuthorisation` - Get consent authorisation sub-resources request
* `getConsentInformation` - Get consent request
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getConsentStatus` - Consent status request
* `getTransactionDetails` - Read transaction details
* `getTransactionList` - Read transaction list of an account
* `readAccountDetails` - Read account details
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `updateConsentsPsuData` - Update PSU Data for consents

### commonServices

* `deleteSigningBasket` - Delete the signing basket
* `getConsentScaStatus` - Read the SCA status of the consent authorisation
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startConsentAuthorisation` - Start the authorisation process for a consent
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateConsentsPsuData` - Update PSU Data for consents
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation
* `updateSigningBasketPsuData` - Update PSU data for signing basket

### confirmationOfFundsServicePIIS

* `checkAvailabilityOfFunds` - Confirmation of funds request

### paymentInitiationServicePIS

* `cancelPayment` - Payment cancellation request
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInformation` - Get payment information
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getPaymentInitiationStatus` - Payment initiation status request
* `initiatePaymentJson` - Payment initiation request
* `initiatePaymentMultipart` - Payment initiation request
* `initiatePaymentRaw` - Payment initiation request
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation

### signingBasketsServiceSBS

* `createSigningBasket` - Create a signing basket resource
* `deleteSigningBasket` - Delete the signing basket
* `getSigningBasket` - Returns the content of an signing basket object
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateSigningBasketPsuData` - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
