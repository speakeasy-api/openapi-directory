# domesticScheduledPayments

### Available Operations

* [createDomesticScheduledPaymentConsentsJson](#createdomesticscheduledpaymentconsentsjson) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentConsentsRaw](#createdomesticscheduledpaymentconsentsraw) - Create Domestic Scheduled Payment Consents
* [createDomesticScheduledPaymentsJson](#createdomesticscheduledpaymentsjson) - Create Domestic Scheduled Payments
* [createDomesticScheduledPaymentsRaw](#createdomesticscheduledpaymentsraw) - Create Domestic Scheduled Payments
* [getDomesticScheduledPaymentConsentsConsentId](#getdomesticscheduledpaymentconsentsconsentid) - Get Domestic Scheduled Payment Consents
* [getDomesticScheduledPaymentsDomesticScheduledPaymentId](#getdomesticscheduledpaymentsdomesticscheduledpaymentid) - Get Domestic Scheduled Payments

## createDomesticScheduledPaymentConsentsJson

Create Domestic Scheduled Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4Data;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticScheduledPaymentConsentsJsonRequest req = new CreateDomesticScheduledPaymentConsentsJsonRequest("et",                 new OBWriteDomesticScheduledConsent4(                new OBWriteDomesticScheduledConsent4Data(                new OBWriteDomesticScheduledConsent4DataInitiation(                new OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount("excepturi", "ullam", "provident") {{
                                                                                secondaryIdentification = "quos";
                                                                            }};,                 new OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount("sint", "accusantium");, "mollitia", OffsetDateTime.parse("2021-01-16T22:43:33.071Z")) {{
                                                                creditorPostalAddress = new OBPostalAddress6() {{
                                                                    addressLine = new String[]{{
                                                                        add("eum"),
                                                                        add("dolor"),
                                                                    }};
                                                                    addressType = OBAddressTypeCodeEnum.STATEMENT;
                                                                    buildingNumber = "odit";
                                                                    country = "Guinea-Bissau";
                                                                    countrySubDivision = "quasi";
                                                                    department = "iure";
                                                                    postCode = "82857-4109";
                                                                    streetName = "ullam";
                                                                    subDepartment = "expedita";
                                                                    townName = "nihil";
                                                                }};;
                                                                debtorAccount = new OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount("repellat", "quibusdam") {{
                                                                    name = "Mr. Jenna Stroman";
                                                                    secondaryIdentification = "natus";
                                                                }};;
                                                                endToEndIdentification = "magni";
                                                                localInstrument = "sunt";
                                                                remittanceInformation = new OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation() {{
                                                                    reference = "quo";
                                                                    unstructured = "illum";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("maxime", "ea");
                                                                    put("excepturi", "odit");
                                                                    put("ea", "accusantium");
                                                                    put("ab", "maiores");
                                                                }};
                                                            }};, OBWriteDomesticScheduledConsent4DataPermissionEnum.CREATE) {{
                                                authorisation = new OBWriteDomesticScheduledConsent4DataAuthorisation(OBWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum.SINGLE) {{
                                                    completionDateTime = OffsetDateTime.parse("2022-07-19T10:57:57.489Z");
                                                }};;
                                                readRefundAccount = OBWriteDomesticScheduledConsent4DataReadRefundAccountEnum.NO;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.SCA;
                                                    referencePaymentOrderId = "eaque";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.PARTY_TO_PARTY;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("nemo", "voluptatibus") {{
                                                    addressLine = new String[]{{
                                                        add("fugiat"),
                                                    }};
                                                    buildingNumber = "amet";
                                                    countrySubDivision = "aut";
                                                    postCode = "39771-3540";
                                                    streetName = "quis";
                                                }};;
                                                merchantCategoryCode = "nesciunt";
                                                merchantCustomerIdentification = "eos";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.BILL_PAYMENT;
                                            }};);, "dolores", "minus") {{
                xCustomerUserAgent = "quam";
                xFapiAuthDate = "dolor";
                xFapiCustomerIpAddress = "vero";
                xFapiInteractionId = "nostrum";
            }};            

            CreateDomesticScheduledPaymentConsentsJsonResponse res = sdk.domesticScheduledPayments.createDomesticScheduledPaymentConsentsJson(req, new CreateDomesticScheduledPaymentConsentsJsonSecurity("hic") {{
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

## createDomesticScheduledPaymentConsentsRaw

Create Domestic Scheduled Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentConsentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4Data;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduledConsent4DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticScheduledPaymentConsentsRawRequest req = new CreateDomesticScheduledPaymentConsentsRawRequest("recusandae", "omnis".getBytes(), "facilis", "perspiciatis") {{
                xCustomerUserAgent = "voluptatem";
                xFapiAuthDate = "porro";
                xFapiCustomerIpAddress = "consequuntur";
                xFapiInteractionId = "blanditiis";
            }};            

            CreateDomesticScheduledPaymentConsentsRawResponse res = sdk.domesticScheduledPayments.createDomesticScheduledPaymentConsentsRaw(req, new CreateDomesticScheduledPaymentConsentsRawSecurity("error") {{
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

## createDomesticScheduledPaymentsJson

Create Domestic Scheduled Payments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentsJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2Data;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticScheduledPaymentsJsonRequest req = new CreateDomesticScheduledPaymentsJsonRequest("eaque",                 new OBWriteDomesticScheduled2(                new OBWriteDomesticScheduled2Data("occaecati",                 new OBWriteDomesticScheduled2DataInitiation(                new OBWriteDomesticScheduled2DataInitiationCreditorAccount("rerum", "adipisci", "asperiores") {{
                                                                                secondaryIdentification = "earum";
                                                                            }};,                 new OBWriteDomesticScheduled2DataInitiationInstructedAmount("modi", "iste");, "dolorum", OffsetDateTime.parse("2021-04-10T01:47:20.724Z")) {{
                                                                creditorPostalAddress = new OBPostalAddress6() {{
                                                                    addressLine = new String[]{{
                                                                        add("nobis"),
                                                                        add("libero"),
                                                                        add("delectus"),
                                                                    }};
                                                                    addressType = OBAddressTypeCodeEnum.DELIVERY_TO;
                                                                    buildingNumber = "quos";
                                                                    country = "Iceland";
                                                                    countrySubDivision = "dolorem";
                                                                    department = "dolorem";
                                                                    postCode = "12957";
                                                                    streetName = "voluptate";
                                                                    subDepartment = "dignissimos";
                                                                    townName = "reiciendis";
                                                                }};;
                                                                debtorAccount = new OBWriteDomesticScheduled2DataInitiationDebtorAccount("amet", "dolorum") {{
                                                                    name = "Ms. Christine Beer";
                                                                    secondaryIdentification = "quaerat";
                                                                }};;
                                                                endToEndIdentification = "accusamus";
                                                                localInstrument = "quidem";
                                                                remittanceInformation = new OBWriteDomesticScheduled2DataInitiationRemittanceInformation() {{
                                                                    reference = "voluptatibus";
                                                                    unstructured = "voluptas";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("eos", "atque");
                                                                    put("sit", "fugiat");
                                                                    put("ab", "soluta");
                                                                }};
                                                            }};);,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("dolorum", "iusto") {{
                                                    addressLine = new String[]{{
                                                        add("dolorum"),
                                                        add("deleniti"),
                                                    }};
                                                    buildingNumber = "omnis";
                                                    countrySubDivision = "necessitatibus";
                                                    postCode = "94246-9210";
                                                    streetName = "amet";
                                                }};;
                                                merchantCategoryCode = "optio";
                                                merchantCustomerIdentification = "accusamus";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.ECOMMERCE_GOODS;
                                            }};);, "saepe", "suscipit") {{
                xCustomerUserAgent = "deserunt";
                xFapiAuthDate = "provident";
                xFapiCustomerIpAddress = "minima";
                xFapiInteractionId = "repellendus";
            }};            

            CreateDomesticScheduledPaymentsJsonResponse res = sdk.domesticScheduledPayments.createDomesticScheduledPaymentsJson(req, new CreateDomesticScheduledPaymentsJsonSecurity("totam") {{
                psuoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## createDomesticScheduledPaymentsRaw

Create Domestic Scheduled Payments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentsRawRequest;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentsRawResponse;
import org.openapis.openapi.models.operations.CreateDomesticScheduledPaymentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2Data;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticScheduled2DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticScheduledPaymentsRawRequest req = new CreateDomesticScheduledPaymentsRawRequest("similique", "alias".getBytes(), "at", "quaerat") {{
                xCustomerUserAgent = "tempora";
                xFapiAuthDate = "vel";
                xFapiCustomerIpAddress = "quod";
                xFapiInteractionId = "officiis";
            }};            

            CreateDomesticScheduledPaymentsRawResponse res = sdk.domesticScheduledPayments.createDomesticScheduledPaymentsRaw(req, new CreateDomesticScheduledPaymentsRawSecurity("qui") {{
                psuoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getDomesticScheduledPaymentConsentsConsentId

Get Domestic Scheduled Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticScheduledPaymentConsentsConsentIdRequest req = new GetDomesticScheduledPaymentConsentsConsentIdRequest("dolorum", "a") {{
                xCustomerUserAgent = "esse";
                xFapiAuthDate = "harum";
                xFapiCustomerIpAddress = "iusto";
                xFapiInteractionId = "ipsum";
            }};            

            GetDomesticScheduledPaymentConsentsConsentIdResponse res = sdk.domesticScheduledPayments.getDomesticScheduledPaymentConsentsConsentId(req, new GetDomesticScheduledPaymentConsentsConsentIdSecurity("quisquam") {{
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

## getDomesticScheduledPaymentsDomesticScheduledPaymentId

Get Domestic Scheduled Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest req = new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest("tenetur", "amet") {{
                xCustomerUserAgent = "tempore";
                xFapiAuthDate = "accusamus";
                xFapiCustomerIpAddress = "numquam";
                xFapiInteractionId = "enim";
            }};            

            GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse res = sdk.domesticScheduledPayments.getDomesticScheduledPaymentsDomesticScheduledPaymentId(req, new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity("dolorem") {{
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
