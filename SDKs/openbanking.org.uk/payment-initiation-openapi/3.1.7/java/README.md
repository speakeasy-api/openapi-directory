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

import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonHeaders;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonResponse;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataReadRefundAccountEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4Data;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.SchemeTppoAuth2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentConsentsJsonRequest req = new CreateDomesticPaymentConsentsJsonRequest() {{
                security = new CreateDomesticPaymentConsentsJsonSecurity() {{
                    tppoAuth2Security = new SchemeTppoAuth2Security() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateDomesticPaymentConsentsJsonHeaders() {{
                    authorization = "corrupti";
                    xCustomerUserAgent = "provident";
                    xFapiAuthDate = "distinctio";
                    xFapiCustomerIpAddress = "quibusdam";
                    xFapiInteractionId = "unde";
                    xIdempotencyKey = "nulla";
                    xJwsSignature = "corrupti";
                }};
                request = new OBWriteDomesticConsent4() {{
                    data = new OBWriteDomesticConsent4Data() {{
                        authorisation = new OBWriteDomesticConsent4DataAuthorisation() {{
                            authorisationType = "Single";
                            completionDateTime = "2022-05-18T09:34:54.894Z";
                        }};
                        initiation = new OBWriteDomesticConsent4DataInitiation() {{
                            creditorAccount = new OBWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                identification = "deserunt";
                                name = "suscipit";
                                schemeName = "iure";
                                secondaryIdentification = "magnam";
                            }};
                            creditorPostalAddress = new OBPostalAddress6() {{
                                addressLine = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                addressType = "MailTo";
                                buildingNumber = "minus";
                                country = "Slovenia";
                                countrySubDivision = "voluptatum";
                                department = "iusto";
                                postCode = "39803-0603";
                                streetName = "repellendus";
                                subDepartment = "sapiente";
                                townName = "quo";
                            }};
                            debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                identification = "odit";
                                name = "at";
                                schemeName = "at";
                                secondaryIdentification = "maiores";
                            }};
                            endToEndIdentification = "molestiae";
                            instructedAmount = new OBWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                amount = "quod";
                                currency = "quod";
                            }};
                            instructionIdentification = "esse";
                            localInstrument = "totam";
                            remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                reference = "porro";
                                unstructured = "dolorum";
                            }};
                            supplementaryData = new java.util.HashMap<String, Object>() {{
                                put("nam", "officia");
                            }};
                        }};
                        readRefundAccount = "Yes";
                        scaSupportData = new OBSCASupportData1() {{
                            appliedAuthenticationApproach = "CA";
                            referencePaymentOrderId = "deleniti";
                            requestedSCAExemptionType = "PartyToParty";
                        }};
                    }};
                    risk = new OBRisk1() {{
                        deliveryAddress = new OBRisk1DeliveryAddress() {{
                            addressLine = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                            buildingNumber = "modi";
                            country = "Cocos (Keeling) Islands";
                            countrySubDivision = "impedit";
                            postCode = "42510-3616";
                            streetName = "dolor";
                            townName = "natus";
                        }};
                        merchantCategoryCode = "laboriosam";
                        merchantCustomerIdentification = "hic";
                        paymentContextCode = "PartyToParty";
                    }};
                }};
            }};            

            CreateDomesticPaymentConsentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentConsentsJson(req);

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


### domesticPayments

* `createDomesticPaymentConsentsJson` - Create Domestic Payment Consents
* `createDomesticPaymentConsentsRaw` - Create Domestic Payment Consents
* `createDomesticPaymentsJson` - Create Domestic Payments
* `createDomesticPaymentsRaw` - Create Domestic Payments
* `getDomesticPaymentConsentsConsentId` - Get Domestic Payment Consents
* `getDomesticPaymentConsentsConsentIdFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `getDomesticPaymentsDomesticPaymentId` - Get Domestic Payments

### domesticScheduledPayments

* `createDomesticScheduledPaymentConsentsJson` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPaymentConsentsRaw` - Create Domestic Scheduled Payment Consents
* `createDomesticScheduledPaymentsJson` - Create Domestic Scheduled Payments
* `createDomesticScheduledPaymentsRaw` - Create Domestic Scheduled Payments
* `getDomesticScheduledPaymentConsentsConsentId` - Get Domestic Scheduled Payment Consents
* `getDomesticScheduledPaymentsDomesticScheduledPaymentId` - Get Domestic Scheduled Payments

### domesticStandingOrders

* `createDomesticStandingOrderConsentsJson` - Create Domestic Standing Order Consents
* `createDomesticStandingOrderConsentsRaw` - Create Domestic Standing Order Consents
* `createDomesticStandingOrdersJson` - Create Domestic Standing Orders
* `createDomesticStandingOrdersRaw` - Create Domestic Standing Orders
* `getDomesticStandingOrderConsentsConsentId` - Get Domestic Standing Order Consents
* `getDomesticStandingOrdersDomesticStandingOrderId` - Get Domestic Standing Orders

### filePayments

* `createFilePaymentConsentsConsentIdFileJson` - Create File Payment Consents
* `createFilePaymentConsentsConsentIdFileRaw` - Create File Payment Consents
* `createFilePaymentConsentsJson` - Create File Payment Consents
* `createFilePaymentConsentsRaw` - Create File Payment Consents
* `createFilePaymentsJson` - Create File Payments
* `createFilePaymentsRaw` - Create File Payments
* `getFilePaymentConsentsConsentId` - Get File Payment Consents
* `getFilePaymentConsentsConsentIdFile` - Get File Payment Consents
* `getFilePaymentsFilePaymentId` - Get File Payments
* `getFilePaymentsFilePaymentIdReportFile` - Get File Payments

### internationalPayments

* `createInternationalPaymentConsentsJson` - Create International Payment Consents
* `createInternationalPaymentConsentsRaw` - Create International Payment Consents
* `createInternationalPaymentsJson` - Create International Payments
* `createInternationalPaymentsRaw` - Create International Payments
* `getInternationalPaymentConsentsConsentId` - Get International Payment Consents
* `getInternationalPaymentConsentsConsentIdFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `getInternationalPaymentsInternationalPaymentId` - Get International Payments

### internationalScheduledPayments

* `createInternationalScheduledPaymentConsentsJson` - Create International Scheduled Payment Consents
* `createInternationalScheduledPaymentConsentsRaw` - Create International Scheduled Payment Consents
* `createInternationalScheduledPaymentsJson` - Create International Scheduled Payments
* `createInternationalScheduledPaymentsRaw` - Create International Scheduled Payments
* `getInternationalScheduledPaymentConsentsConsentId` - Get International Scheduled Payment Consents
* `getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `getInternationalScheduledPaymentsInternationalScheduledPaymentId` - Get International Scheduled Payments

### internationalStandingOrders

* `createInternationalStandingOrderConsentsJson` - Create International Standing Order Consents
* `createInternationalStandingOrderConsentsRaw` - Create International Standing Order Consents
* `createInternationalStandingOrdersJson` - Create International Standing Orders
* `createInternationalStandingOrdersRaw` - Create International Standing Orders
* `getInternationalStandingOrderConsentsConsentId` - Get International Standing Order Consents
* `getInternationalStandingOrdersInternationalStandingOrderPaymentId` - Get International Standing Orders

### paymentDetails

* `getDomesticPaymentsDomesticPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails` - Get Payment Details
* `getFilePaymentsFilePaymentIdPaymentDetails` - Get Payment Details
* `getInternationalPaymentsInternationalPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails` - Get Payment Details
* `getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails` - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
