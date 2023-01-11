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

            SDK sdk = builder.build();

            CreateDomesticPaymentConsentsRequest req = new CreateDomesticPaymentConsentsRequest() {{
                security = new CreateDomesticPaymentConsentsSecurity() {{
                    tppoAuth2Security = new SchemeTppoAuth2Security() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateDomesticPaymentConsentsHeaders() {{
                    authorization = "sit";
                    xCustomerUserAgent = "voluptas";
                    xFapiAuthDate = "culpa";
                    xFapiCustomerIpAddress = "expedita";
                    xFapiInteractionId = "consequuntur";
                    xIdempotencyKey = "dolor";
                    xJwsSignature = "expedita";
                }};
                request = new CreateDomesticPaymentConsentsRequests() {{
                    applicationJosePlusJwe = "voluptas".getBytes();
                    obWriteDomesticConsent4 = new ObWriteDomesticConsent4() {{
                        data = new ObWriteDomesticConsent4Data() {{
                            authorisation = new ObWriteDomesticConsent4DataAuthorisation() {{
                                authorisationType = "Any";
                                completionDateTime = "2011-08-12T10:11:12Z";
                            }};
                            initiation = new ObWriteDomesticConsent4DataInitiation() {{
                                creditorAccount = new ObWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                    identification = "nihil";
                                    name = "rerum";
                                    schemeName = "dicta";
                                    secondaryIdentification = "debitis";
                                }};
                                creditorPostalAddress = new ObPostalAddress6() {{
                                    addressLine = new String[]() {{
                                        add("et"),
                                    }};
                                    addressType = "Statement";
                                    buildingNumber = "dolorem";
                                    country = "et";
                                    countrySubDivision = "voluptate";
                                    department = "iste";
                                    postCode = "vitae";
                                    streetName = "totam";
                                    subDepartment = "dolores";
                                    townName = "illum";
                                }};
                                debtorAccount = new ObWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                    identification = "debitis";
                                    name = "vel";
                                    schemeName = "odio";
                                    secondaryIdentification = "dolore";
                                }};
                                endToEndIdentification = "id";
                                instructedAmount = new ObWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                    amount = "aspernatur";
                                    currency = "accusantium";
                                }};
                                instructionIdentification = "totam";
                                localInstrument = "commodi";
                                remittanceInformation = new ObWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                    reference = "quis";
                                    unstructured = "est";
                                }};
                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                    put("odit", "non");
                                    put("voluptas", "omnis");
                                    put("aut", "illo");
                                }};
                            }};
                            readRefundAccount = "No";
                            scaSupportData = new ObscaSupportData1() {{
                                appliedAuthenticationApproach = "SCA";
                                referencePaymentOrderId = "autem";
                                requestedSCAExemptionType = "PartyToParty";
                            }};
                        }};
                        risk = new ObRisk1() {{
                            deliveryAddress = new ObRisk1DeliveryAddress() {{
                                addressLine = new String[]() {{
                                    add("odio"),
                                }};
                                buildingNumber = "qui";
                                country = "recusandae";
                                countrySubDivision = "at";
                                postCode = "ipsum";
                                streetName = "eveniet";
                                townName = "modi";
                            }};
                            merchantCategoryCode = "sint";
                            merchantCustomerIdentification = "inventore";
                            paymentContextCode = "PartyToParty";
                        }};
                    }};
                    obWriteDomesticConsent5 = new ObWriteDomesticConsent4() {{
                        data = new ObWriteDomesticConsent4Data() {{
                            authorisation = new ObWriteDomesticConsent4DataAuthorisation() {{
                                authorisationType = "Any";
                                completionDateTime = "1987-11-29T05:58:16Z";
                            }};
                            initiation = new ObWriteDomesticConsent4DataInitiation() {{
                                creditorAccount = new ObWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                    identification = "reprehenderit";
                                    name = "tempore";
                                    schemeName = "maiores";
                                    secondaryIdentification = "incidunt";
                                }};
                                creditorPostalAddress = new ObPostalAddress6() {{
                                    addressLine = new String[]() {{
                                        add("beatae"),
                                        add("veritatis"),
                                    }};
                                    addressType = "Business";
                                    buildingNumber = "et";
                                    country = "omnis";
                                    countrySubDivision = "ipsum";
                                    department = "ex";
                                    postCode = "dolores";
                                    streetName = "placeat";
                                    subDepartment = "vel";
                                    townName = "rerum";
                                }};
                                debtorAccount = new ObWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                    identification = "mollitia";
                                    name = "voluptas";
                                    schemeName = "quam";
                                    secondaryIdentification = "reprehenderit";
                                }};
                                endToEndIdentification = "qui";
                                instructedAmount = new ObWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                    amount = "qui";
                                    currency = "unde";
                                }};
                                instructionIdentification = "in";
                                localInstrument = "autem";
                                remittanceInformation = new ObWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                    reference = "qui";
                                    unstructured = "ut";
                                }};
                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                    put("ab", "neque");
                                    put("ullam", "et");
                                    put("accusantium", "esse");
                                }};
                            }};
                            readRefundAccount = "No";
                            scaSupportData = new ObscaSupportData1() {{
                                appliedAuthenticationApproach = "CA";
                                referencePaymentOrderId = "velit";
                                requestedSCAExemptionType = "PartyToParty";
                            }};
                        }};
                        risk = new ObRisk1() {{
                            deliveryAddress = new ObRisk1DeliveryAddress() {{
                                addressLine = new String[]() {{
                                    add("sunt"),
                                }};
                                buildingNumber = "voluptates";
                                country = "magni";
                                countrySubDivision = "et";
                                postCode = "optio";
                                streetName = "qui";
                                townName = "earum";
                            }};
                            merchantCategoryCode = "illo";
                            merchantCustomerIdentification = "omnis";
                            paymentContextCode = "PartyToParty";
                        }};
                    }};
                }};
            }};

            CreateDomesticPaymentConsentsResponse res = sdk.domesticPayments.createDomesticPaymentConsents(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Domestic Payments

* `createDomesticPaymentConsents` - Create Domestic Payment Consents
* `createDomesticPayments` - Create Domestic Payments
* `getDomesticPaymentConsentsConsentId` - Get Domestic Payment Consents
* `getDomesticPaymentConsentsConsentIdFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `getDomesticPaymentsDomesticPaymentId` - Get Domestic Payments

### Domestic Scheduled Payments

* `createDomesticScheduledPaymentConsents` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPayments` - Create Domestic Scheduled Payments
* `getDomesticScheduledPaymentConsentsConsentId` - Get Domestic Scheduled Payment Consents
* `getDomesticScheduledPaymentsDomesticScheduledPaymentId` - Get Domestic Scheduled Payments

### Domestic Standing Orders

* `createDomesticStandingOrderConsents` - Create Domestic Standing Order Consents
* `createDomesticStandingOrders` - Create Domestic Standing Orders
* `getDomesticStandingOrderConsentsConsentId` - Get Domestic Standing Order Consents
* `getDomesticStandingOrdersDomesticStandingOrderId` - Get Domestic Standing Orders

### File Payments

* `createFilePaymentConsents` - Create File Payment Consents
* `createFilePaymentConsentsConsentIdFile` - Create File Payment Consents
* `createFilePayments` - Create File Payments
* `getFilePaymentConsentsConsentId` - Get File Payment Consents
* `getFilePaymentConsentsConsentIdFile` - Get File Payment Consents
* `getFilePaymentsFilePaymentId` - Get File Payments
* `getFilePaymentsFilePaymentIdReportFile` - Get File Payments

### International Payments

* `createInternationalPaymentConsents` - Create International Payment Consents
* `createInternationalPayments` - Create International Payments
* `getInternationalPaymentConsentsConsentId` - Get International Payment Consents
* `getInternationalPaymentConsentsConsentIdFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `getInternationalPaymentsInternationalPaymentId` - Get International Payments

### International Scheduled Payments

* `createInternationalScheduledPaymentConsents` - Create International Scheduled Payment Consents
* `createInternationalScheduledPayments` - Create International Scheduled Payments
* `getInternationalScheduledPaymentConsentsConsentId` - Get International Scheduled Payment Consents
* `getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `getInternationalScheduledPaymentsInternationalScheduledPaymentId` - Get International Scheduled Payments

### International Standing Orders

* `createInternationalStandingOrderConsents` - Create International Standing Order Consents
* `createInternationalStandingOrders` - Create International Standing Orders
* `getInternationalStandingOrderConsentsConsentId` - Get International Standing Order Consents
* `getInternationalStandingOrdersInternationalStandingOrderPaymentId` - Get International Standing Orders

### Payment Details

* `getDomesticPaymentsDomesticPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails` - Get Payment Details
* `getFilePaymentsFilePaymentIdPaymentDetails` - Get Payment Details
* `getInternationalPaymentsInternationalPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails` - Get Payment Details

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
