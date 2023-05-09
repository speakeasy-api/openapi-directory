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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4Data;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentConsentsJsonRequest req = new CreateDomesticPaymentConsentsJsonRequest("corrupti",                 new OBWriteDomesticConsent4(                new OBWriteDomesticConsent4Data(                new OBWriteDomesticConsent4DataInitiation(                new OBWriteDomesticConsent4DataInitiationCreditorAccount("provident", "distinctio", "quibusdam") {{
                                                                                secondaryIdentification = "unde";
                                                                            }};, "nulla",                 new OBWriteDomesticConsent4DataInitiationInstructedAmount("corrupti", "illum");, "vel") {{
                                                                creditorPostalAddress = new OBPostalAddress6() {{
                                                                    addressLine = new String[]{{
                                                                        add("deserunt"),
                                                                        add("suscipit"),
                                                                        add("iure"),
                                                                    }};
                                                                    addressType = OBAddressTypeCodeEnum.DELIVERY_TO;
                                                                    buildingNumber = "debitis";
                                                                    country = "Austria";
                                                                    countrySubDivision = "delectus";
                                                                    department = "tempora";
                                                                    postCode = "47854";
                                                                    streetName = "excepturi";
                                                                    subDepartment = "nisi";
                                                                    townName = "recusandae";
                                                                }};;
                                                                debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount("temporibus", "ab") {{
                                                                    name = "Mrs. Marie O'Connell";
                                                                    secondaryIdentification = "sapiente";
                                                                }};;
                                                                localInstrument = "quo";
                                                                remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                                                    reference = "odit";
                                                                    unstructured = "at";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("maiores", "molestiae");
                                                                    put("quod", "quod");
                                                                    put("esse", "totam");
                                                                    put("porro", "dolorum");
                                                                }};
                                                            }};) {{
                                                authorisation = new OBWriteDomesticConsent4DataAuthorisation(OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum.ANY) {{
                                                    completionDateTime = OffsetDateTime.parse("2021-09-20T20:35:01.256Z");
                                                }};;
                                                readRefundAccount = OBWriteDomesticConsent4DataReadRefundAccountEnum.YES;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.CA;
                                                    referencePaymentOrderId = "deleniti";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.PARTY_TO_PARTY;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("optio", "totam") {{
                                                    addressLine = new String[]{{
                                                        add("commodi"),
                                                    }};
                                                    buildingNumber = "molestiae";
                                                    countrySubDivision = "modi";
                                                    postCode = "77425";
                                                    streetName = "aspernatur";
                                                }};;
                                                merchantCategoryCode = "perferendis";
                                                merchantCustomerIdentification = "ad";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.OTHER;
                                            }};);, "sed", "iste") {{
                xCustomerUserAgent = "dolor";
                xFapiAuthDate = "natus";
                xFapiCustomerIpAddress = "laboriosam";
                xFapiInteractionId = "hic";
            }};            

            CreateDomesticPaymentConsentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentConsentsJson(req, new CreateDomesticPaymentConsentsJsonSecurity("saepe") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
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


### [domesticPayments](docs/domesticpayments/README.md)

* [createDomesticPaymentConsentsJson](docs/domesticpayments/README.md#createdomesticpaymentconsentsjson) - Create Domestic Payment Consents
* [createDomesticPaymentConsentsRaw](docs/domesticpayments/README.md#createdomesticpaymentconsentsraw) - Create Domestic Payment Consents
* [createDomesticPaymentsJson](docs/domesticpayments/README.md#createdomesticpaymentsjson) - Create Domestic Payments
* [createDomesticPaymentsRaw](docs/domesticpayments/README.md#createdomesticpaymentsraw) - Create Domestic Payments
* [getDomesticPaymentConsentsConsentId](docs/domesticpayments/README.md#getdomesticpaymentconsentsconsentid) - Get Domestic Payment Consents
* [getDomesticPaymentConsentsConsentIdFundsConfirmation](docs/domesticpayments/README.md#getdomesticpaymentconsentsconsentidfundsconfirmation) - Get Domestic Payment Consents Funds Confirmation
* [getDomesticPaymentsDomesticPaymentId](docs/domesticpayments/README.md#getdomesticpaymentsdomesticpaymentid) - Get Domestic Payments

### [domesticScheduledPayments](docs/domesticscheduledpayments/README.md)

* [createDomesticScheduledPaymentConsentsJson](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentconsentsjson) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentConsentsRaw](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentconsentsraw) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentsJson](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentsjson) - Create Domestic Scheduled Payments
* [createDomesticScheduledPaymentsRaw](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentsraw) - Create Domestic Scheduled Payments
* [getDomesticScheduledPaymentConsentsConsentId](docs/domesticscheduledpayments/README.md#getdomesticscheduledpaymentconsentsconsentid) - Get Domestic Scheduled Payment Consents
* [getDomesticScheduledPaymentsDomesticScheduledPaymentId](docs/domesticscheduledpayments/README.md#getdomesticscheduledpaymentsdomesticscheduledpaymentid) - Get Domestic Scheduled Payments

### [domesticStandingOrders](docs/domesticstandingorders/README.md)

* [createDomesticStandingOrderConsentsJson](docs/domesticstandingorders/README.md#createdomesticstandingorderconsentsjson) - Create Domestic Standing Order Consents
* [createDomesticStandingOrderConsentsRaw](docs/domesticstandingorders/README.md#createdomesticstandingorderconsentsraw) - Create Domestic Standing Order Consents
* [createDomesticStandingOrdersJson](docs/domesticstandingorders/README.md#createdomesticstandingordersjson) - Create Domestic Standing Orders
* [createDomesticStandingOrdersRaw](docs/domesticstandingorders/README.md#createdomesticstandingordersraw) - Create Domestic Standing Orders
* [getDomesticStandingOrderConsentsConsentId](docs/domesticstandingorders/README.md#getdomesticstandingorderconsentsconsentid) - Get Domestic Standing Order Consents
* [getDomesticStandingOrdersDomesticStandingOrderId](docs/domesticstandingorders/README.md#getdomesticstandingordersdomesticstandingorderid) - Get Domestic Standing Orders

### [filePayments](docs/filepayments/README.md)

* [createFilePaymentConsentsConsentIdFileJson](docs/filepayments/README.md#createfilepaymentconsentsconsentidfilejson) - Create File Payment Consents
* [createFilePaymentConsentsConsentIdFileRaw](docs/filepayments/README.md#createfilepaymentconsentsconsentidfileraw) - Create File Payment Consents
* [createFilePaymentConsentsJson](docs/filepayments/README.md#createfilepaymentconsentsjson) - Create File Payment Consents
* [createFilePaymentConsentsRaw](docs/filepayments/README.md#createfilepaymentconsentsraw) - Create File Payment Consents
* [createFilePaymentsJson](docs/filepayments/README.md#createfilepaymentsjson) - Create File Payments
* [createFilePaymentsRaw](docs/filepayments/README.md#createfilepaymentsraw) - Create File Payments
* [getFilePaymentConsentsConsentId](docs/filepayments/README.md#getfilepaymentconsentsconsentid) - Get File Payment Consents
* [getFilePaymentConsentsConsentIdFile](docs/filepayments/README.md#getfilepaymentconsentsconsentidfile) - Get File Payment Consents
* [getFilePaymentsFilePaymentId](docs/filepayments/README.md#getfilepaymentsfilepaymentid) - Get File Payments
* [getFilePaymentsFilePaymentIdReportFile](docs/filepayments/README.md#getfilepaymentsfilepaymentidreportfile) - Get File Payments

### [internationalPayments](docs/internationalpayments/README.md)

* [createInternationalPaymentConsentsJson](docs/internationalpayments/README.md#createinternationalpaymentconsentsjson) - Create International Payment Consents
* [createInternationalPaymentConsentsRaw](docs/internationalpayments/README.md#createinternationalpaymentconsentsraw) - Create International Payment Consents
* [createInternationalPaymentsJson](docs/internationalpayments/README.md#createinternationalpaymentsjson) - Create International Payments
* [createInternationalPaymentsRaw](docs/internationalpayments/README.md#createinternationalpaymentsraw) - Create International Payments
* [getInternationalPaymentConsentsConsentId](docs/internationalpayments/README.md#getinternationalpaymentconsentsconsentid) - Get International Payment Consents
* [getInternationalPaymentConsentsConsentIdFundsConfirmation](docs/internationalpayments/README.md#getinternationalpaymentconsentsconsentidfundsconfirmation) - Get International Payment Consents Funds Confirmation
* [getInternationalPaymentsInternationalPaymentId](docs/internationalpayments/README.md#getinternationalpaymentsinternationalpaymentid) - Get International Payments

### [internationalScheduledPayments](docs/internationalscheduledpayments/README.md)

* [createInternationalScheduledPaymentConsentsJson](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentconsentsjson) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentConsentsRaw](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentconsentsraw) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentsJson](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentsjson) - Create International Scheduled Payments
* [createInternationalScheduledPaymentsRaw](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentsraw) - Create International Scheduled Payments
* [getInternationalScheduledPaymentConsentsConsentId](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentconsentsconsentid) - Get International Scheduled Payment Consents
* [getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentconsentsconsentidfundsconfirmation) - Get International Scheduled Payment Consents Funds Confirmation
* [getInternationalScheduledPaymentsInternationalScheduledPaymentId](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentsinternationalscheduledpaymentid) - Get International Scheduled Payments

### [internationalStandingOrders](docs/internationalstandingorders/README.md)

* [createInternationalStandingOrderConsentsJson](docs/internationalstandingorders/README.md#createinternationalstandingorderconsentsjson) - Create International Standing Order Consents
* [createInternationalStandingOrderConsentsRaw](docs/internationalstandingorders/README.md#createinternationalstandingorderconsentsraw) - Create International Standing Order Consents
* [createInternationalStandingOrdersJson](docs/internationalstandingorders/README.md#createinternationalstandingordersjson) - Create International Standing Orders
* [createInternationalStandingOrdersRaw](docs/internationalstandingorders/README.md#createinternationalstandingordersraw) - Create International Standing Orders
* [getInternationalStandingOrderConsentsConsentId](docs/internationalstandingorders/README.md#getinternationalstandingorderconsentsconsentid) - Get International Standing Order Consents
* [getInternationalStandingOrdersInternationalStandingOrderPaymentId](docs/internationalstandingorders/README.md#getinternationalstandingordersinternationalstandingorderpaymentid) - Get International Standing Orders

### [paymentDetails](docs/paymentdetails/README.md)

* [getDomesticPaymentsDomesticPaymentIdPaymentDetails](docs/paymentdetails/README.md#getdomesticpaymentsdomesticpaymentidpaymentdetails) - Get Payment Details
* [getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails](docs/paymentdetails/README.md#getdomesticscheduledpaymentsdomesticscheduledpaymentidpaymentdetails) - Get Payment Details
* [getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails](docs/paymentdetails/README.md#getdomesticstandingordersdomesticstandingorderidpaymentdetails) - Get Payment Details
* [getFilePaymentsFilePaymentIdPaymentDetails](docs/paymentdetails/README.md#getfilepaymentsfilepaymentidpaymentdetails) - Get Payment Details
* [getInternationalPaymentsInternationalPaymentIdPaymentDetails](docs/paymentdetails/README.md#getinternationalpaymentsinternationalpaymentidpaymentdetails) - Get Payment Details
* [getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails](docs/paymentdetails/README.md#getinternationalscheduledpaymentsinternationalscheduledpaymentidpaymentdetails) - Get Payment Details
* [getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails](docs/paymentdetails/README.md#getinternationalstandingordersinternationalstandingorderpaymentidpaymentdetails) - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
