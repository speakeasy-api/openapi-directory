# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearerAuthOAuth = new SchemeBearerAuthOAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateConsentRequest req = new CreateConsentRequest() {{
                security = new CreateConsentSecurity() {{
                    bearerAuthOAuth = new SchemeBearerAuthOAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                headers = new CreateConsentHeaders() {{
                    digest = "sit";
                    psuAccept = "voluptas";
                    psuAcceptCharset = "culpa";
                    psuAcceptEncoding = "expedita";
                    psuAcceptLanguage = "consequuntur";
                    psuCorporateID = "dolor";
                    psuCorporateIDType = "expedita";
                    psuDeviceID = "voluptas";
                    psuGeoLocation = "fugit";
                    psuHttpMethod = "PATCH";
                    psuID = "nihil";
                    psuIDType = "rerum";
                    psuIPAddress = "dicta";
                    psuIPPort = "debitis";
                    psuUserAgent = "voluptatum";
                    signature = "et";
                    tppBrandLoggingInformation = "ut";
                    tppExplicitAuthorisationPreferred = true;
                    tppNokRedirectURI = "et";
                    tppNotificationContentPreferred = "voluptate";
                    tppNotificationURI = "iste";
                    tppRedirectPreferred = true;
                    tppRedirectURI = "totam";
                    tppSignatureCertificate = "dolores";
                    xRequestID = "illum";
                }};
                request = new Consents() {{
                    access = new AccountAccess() {{
                        accounts = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "vel";
                                currency = "odio";
                                iban = "dolore";
                                otherAccountIdentification = "id";
                            }}),
                        }};
                        additionalInformation = new AdditionalInformationAccess() {{
                            ownerName = new openapisdk.models.shared.AccountReference16Ch[]() {{
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "accusantium";
                                    currency = "totam";
                                    iban = "commodi";
                                    otherAccountIdentification = "quis";
                                }}),
                            }};
                            trustedBeneficiaries = new openapisdk.models.shared.AccountReference16Ch[]() {{
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "aut";
                                    currency = "odit";
                                    iban = "non";
                                    otherAccountIdentification = "voluptas";
                                }}),
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "omnis";
                                    currency = "aut";
                                    iban = "illo";
                                    otherAccountIdentification = "sed";
                                }}),
                            }};
                        }};
                        allPsd2 = "allAccountsWithOwnerName";
                        availableAccounts = "allAccountsWithOwnerName";
                        availableAccountsWithBalance = "allAccounts";
                        balances = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "odio";
                                currency = "qui";
                                iban = "recusandae";
                                otherAccountIdentification = "at";
                            }}),
                        }};
                        restrictedTo = new String[]() {{
                            add("eveniet"),
                        }};
                        transactions = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "sint";
                                currency = "inventore";
                                iban = "ut";
                                otherAccountIdentification = "exercitationem";
                            }}),
                            add(new AccountReference16Ch() {{
                                cashAccountType = "aut";
                                currency = "reprehenderit";
                                iban = "tempore";
                                otherAccountIdentification = "maiores";
                            }}),
                        }};
                    }};
                    combinedServiceIndicator = false;
                    frequencyPerDay = 7242748068272024738;
                    recurringIndicator = false;
                    validUntil = "1992-08-27";
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

### Account Information Service (AIS)

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

### Common Services

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

### Confirmation of Funds Service (PIIS)

* `checkAvailabilityOfFunds` - Confirmation of funds request

### Payment Initiation Service (PIS)

* `cancelPayment` - Payment cancellation request
* `getPaymentCancellationScaStatus` - Read the SCA status of the payment cancellation's authorisation
* `getPaymentInformation` - Get payment information
* `getPaymentInitiationAuthorisation` - Get payment initiation authorisation sub-resources request
* `getPaymentInitiationCancellationAuthorisationInformation` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `getPaymentInitiationScaStatus` - Read the SCA status of the payment authorisation
* `getPaymentInitiationStatus` - Payment initiation status request
* `initiatePayment` - Payment initiation request
* `startPaymentAuthorisation` - Start the authorisation process for a payment initiation
* `startPaymentInitiationCancellationAuthorisation` - Start the authorisation process for the cancellation of the addressed payment
* `updatePaymentCancellationPsuData` - Update PSU data for payment initiation cancellation
* `updatePaymentPsuData` - Update PSU data for payment initiation

### Signing Baskets Service (SBS)

* `createSigningBasket` - Create a signing basket resource
* `deleteSigningBasket` - Delete the signing basket
* `getSigningBasket` - Returns the content of an signing basket object
* `getSigningBasketAuthorisation` - Get signing basket authorisation sub-resources request
* `getSigningBasketScaStatus` - Read the SCA status of the signing basket authorisation
* `getSigningBasketStatus` - Read the status of the signing basket
* `startSigningBasketAuthorisation` - Start the authorisation process for a signing basket
* `updateSigningBasketPsuData` - Update PSU data for signing basket

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
