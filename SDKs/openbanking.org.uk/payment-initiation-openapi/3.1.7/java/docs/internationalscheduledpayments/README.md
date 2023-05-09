# internationalScheduledPayments

### Available Operations

* [createInternationalScheduledPaymentConsentsJson](#createinternationalscheduledpaymentconsentsjson) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentConsentsRaw](#createinternationalscheduledpaymentconsentsraw) - Create International Scheduled Payment Consents
* [createInternationalScheduledPaymentsJson](#createinternationalscheduledpaymentsjson) - Create International Scheduled Payments
* [createInternationalScheduledPaymentsRaw](#createinternationalscheduledpaymentsraw) - Create International Scheduled Payments
* [getInternationalScheduledPaymentConsentsConsentId](#getinternationalscheduledpaymentconsentsconsentid) - Get International Scheduled Payment Consents
* [getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation](#getinternationalscheduledpaymentconsentsconsentidfundsconfirmation) - Get International Scheduled Payment Consents Funds Confirmation
* [getInternationalScheduledPaymentsInternationalScheduledPaymentId](#getinternationalscheduledpaymentsinternationalscheduledpaymentid) - Get International Scheduled Payments

## createInternationalScheduledPaymentConsentsJson

Create International Scheduled Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5Data;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalScheduledPaymentConsentsJsonRequest req = new CreateInternationalScheduledPaymentConsentsJsonRequest("voluptatem",                 new OBWriteInternationalScheduledConsent5(                new OBWriteInternationalScheduledConsent5Data(                new OBWriteInternationalScheduledConsent5DataInitiation(                new OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount("culpa", "expedita", "magnam") {{
                                                                                secondaryIdentification = "consequatur";
                                                                            }};, "esse",                 new OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount("ipsam", "sit");, "voluptatum", OffsetDateTime.parse("2021-02-26T20:36:25.696Z")) {{
                                                                chargeBearer = OBChargeBearerType1CodeEnum.BORNE_BY_DEBTOR;
                                                                creditor = new OBWriteInternationalScheduledConsent5DataInitiationCreditor() {{
                                                                    name = "Mattie Jaskolski III";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("saepe"),
                                                                            add("error"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.BUSINESS;
                                                                        buildingNumber = "incidunt";
                                                                        country = "Vietnam";
                                                                        countrySubDivision = "dolorem";
                                                                        department = "harum";
                                                                        postCode = "05265";
                                                                        streetName = "laborum";
                                                                        subDepartment = "nam";
                                                                        townName = "tenetur";
                                                                    }};;
                                                                }};;
                                                                creditorAgent = new OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent() {{
                                                                    identification = "laboriosam";
                                                                    name = "Grace O'Connell";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("provident"),
                                                                            add("repellendus"),
                                                                            add("delectus"),
                                                                            add("voluptates"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.BUSINESS;
                                                                        buildingNumber = "est";
                                                                        country = "Paraguay";
                                                                        countrySubDivision = "reprehenderit";
                                                                        department = "facere";
                                                                        postCode = "56307-9054";
                                                                        streetName = "asperiores";
                                                                        subDepartment = "totam";
                                                                        townName = "suscipit";
                                                                    }};;
                                                                    schemeName = "quidem";
                                                                }};;
                                                                debtorAccount = new OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount("maxime", "et") {{
                                                                    name = "Grace Shields";
                                                                    secondaryIdentification = "error";
                                                                }};;
                                                                destinationCountryCode = "officiis";
                                                                endToEndIdentification = "officiis";
                                                                exchangeRateInformation = new OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation(OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum.INDICATIVE, "natus") {{
                                                                    contractIdentification = "minima";
                                                                    exchangeRate = 1334.61;
                                                                }};;
                                                                extendedPurpose = "ex";
                                                                instructionPriority = OBWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum.URGENT;
                                                                localInstrument = "corrupti";
                                                                purpose = "at";
                                                                remittanceInformation = new OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation() {{
                                                                    reference = "error";
                                                                    unstructured = "blanditiis";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("repudiandae", "atque");
                                                                    put("atque", "sunt");
                                                                }};
                                                            }};, OBWriteInternationalScheduledConsent5DataPermissionEnum.CREATE) {{
                                                authorisation = new OBWriteInternationalScheduledConsent5DataAuthorisation(OBWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum.SINGLE) {{
                                                    completionDateTime = OffsetDateTime.parse("2021-05-05T04:11:52.897Z");
                                                }};;
                                                readRefundAccount = OBWriteInternationalScheduledConsent5DataReadRefundAccountEnum.NO;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.SCA;
                                                    referencePaymentOrderId = "doloremque";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.PARTY_TO_PARTY;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("dicta", "accusantium") {{
                                                    addressLine = new String[]{{
                                                        add("dolores"),
                                                    }};
                                                    buildingNumber = "enim";
                                                    countrySubDivision = "laboriosam";
                                                    postCode = "95391";
                                                    streetName = "occaecati";
                                                }};;
                                                merchantCategoryCode = "officiis";
                                                merchantCustomerIdentification = "perspiciatis";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.ECOMMERCE_SERVICES;
                                            }};);, "adipisci", "eveniet") {{
                xCustomerUserAgent = "occaecati";
                xFapiAuthDate = "consequuntur";
                xFapiCustomerIpAddress = "fugit";
                xFapiInteractionId = "id";
            }};            

            CreateInternationalScheduledPaymentConsentsJsonResponse res = sdk.internationalScheduledPayments.createInternationalScheduledPaymentConsentsJson(req, new CreateInternationalScheduledPaymentConsentsJsonSecurity("quis") {{
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

## createInternationalScheduledPaymentConsentsRaw

Create International Scheduled Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentConsentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5Data;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduledConsent5DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalScheduledPaymentConsentsRawRequest req = new CreateInternationalScheduledPaymentConsentsRawRequest("reprehenderit", "error".getBytes(), "illo", "corporis") {{
                xCustomerUserAgent = "quidem";
                xFapiAuthDate = "eveniet";
                xFapiCustomerIpAddress = "non";
                xFapiInteractionId = "vero";
            }};            

            CreateInternationalScheduledPaymentConsentsRawResponse res = sdk.internationalScheduledPayments.createInternationalScheduledPaymentConsentsRaw(req, new CreateInternationalScheduledPaymentConsentsRawSecurity("doloremque") {{
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

## createInternationalScheduledPaymentsJson

Create International Scheduled Payments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentsJsonRequest;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentsJsonResponse;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3Data;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalScheduledPaymentsJsonRequest req = new CreateInternationalScheduledPaymentsJsonRequest("iure",                 new OBWriteInternationalScheduled3(                new OBWriteInternationalScheduled3Data("ipsa",                 new OBWriteInternationalScheduled3DataInitiation(                new OBWriteInternationalScheduled3DataInitiationCreditorAccount("totam", "quae", "molestiae") {{
                                                                                secondaryIdentification = "eveniet";
                                                                            }};, "qui",                 new OBWriteInternationalScheduled3DataInitiationInstructedAmount("cum", "iure");, "necessitatibus", OffsetDateTime.parse("2022-04-30T12:10:44.049Z")) {{
                                                                chargeBearer = OBChargeBearerType1CodeEnum.FOLLOWING_SERVICE_LEVEL;
                                                                creditor = new OBWriteInternationalScheduled3DataInitiationCreditor() {{
                                                                    name = "Jordan Haag";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("corporis"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.PO_BOX;
                                                                        buildingNumber = "nihil";
                                                                        country = "Nigeria";
                                                                        countrySubDivision = "voluptas";
                                                                        department = "alias";
                                                                        postCode = "91632-6209";
                                                                        streetName = "omnis";
                                                                        subDepartment = "quaerat";
                                                                        townName = "molestiae";
                                                                    }};;
                                                                }};;
                                                                creditorAgent = new OBWriteInternationalScheduled3DataInitiationCreditorAgent() {{
                                                                    identification = "ex";
                                                                    name = "Molly Ferry";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("nemo"),
                                                                            add("recusandae"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.MAIL_TO;
                                                                        buildingNumber = "provident";
                                                                        country = "Greenland";
                                                                        countrySubDivision = "eum";
                                                                        department = "reiciendis";
                                                                        postCode = "13063-6586";
                                                                        streetName = "ex";
                                                                        subDepartment = "aliquid";
                                                                        townName = "accusantium";
                                                                    }};;
                                                                    schemeName = "repellat";
                                                                }};;
                                                                debtorAccount = new OBWriteInternationalScheduled3DataInitiationDebtorAccount("doloribus", "ullam") {{
                                                                    name = "Antoinette Wehner";
                                                                    secondaryIdentification = "placeat";
                                                                }};;
                                                                destinationCountryCode = "modi";
                                                                endToEndIdentification = "voluptatibus";
                                                                exchangeRateInformation = new OBWriteInternationalScheduled3DataInitiationExchangeRateInformation(OBWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum.AGREED, "officiis") {{
                                                                    contractIdentification = "sapiente";
                                                                    exchangeRate = 7645.62;
                                                                }};;
                                                                extendedPurpose = "vitae";
                                                                instructionPriority = OBWriteInternationalScheduled3DataInitiationInstructionPriorityEnum.URGENT;
                                                                localInstrument = "tempora";
                                                                purpose = "quis";
                                                                remittanceInformation = new OBWriteInternationalScheduled3DataInitiationRemittanceInformation() {{
                                                                    reference = "inventore";
                                                                    unstructured = "fugit";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("quae", "perferendis");
                                                                    put("velit", "aspernatur");
                                                                    put("eum", "eius");
                                                                    put("rem", "at");
                                                                }};
                                                            }};);,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("impedit", "eos") {{
                                                    addressLine = new String[]{{
                                                        add("eum"),
                                                        add("dicta"),
                                                        add("minima"),
                                                        add("beatae"),
                                                    }};
                                                    buildingNumber = "cupiditate";
                                                    countrySubDivision = "provident";
                                                    postCode = "79809-5983";
                                                    streetName = "porro";
                                                }};;
                                                merchantCategoryCode = "suscipit";
                                                merchantCustomerIdentification = "dolorem";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.BILL_PAYMENT;
                                            }};);, "cumque", "fuga") {{
                xCustomerUserAgent = "ratione";
                xFapiAuthDate = "animi";
                xFapiCustomerIpAddress = "necessitatibus";
                xFapiInteractionId = "nulla";
            }};            

            CreateInternationalScheduledPaymentsJsonResponse res = sdk.internationalScheduledPayments.createInternationalScheduledPaymentsJson(req, new CreateInternationalScheduledPaymentsJsonSecurity("consequatur") {{
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

## createInternationalScheduledPaymentsRaw

Create International Scheduled Payments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentsRawRequest;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentsRawResponse;
import org.openapis.openapi.models.operations.CreateInternationalScheduledPaymentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3Data;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalScheduled3DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalScheduledPaymentsRawRequest req = new CreateInternationalScheduledPaymentsRawRequest("quasi", "et".getBytes(), "ducimus", "natus") {{
                xCustomerUserAgent = "occaecati";
                xFapiAuthDate = "suscipit";
                xFapiCustomerIpAddress = "adipisci";
                xFapiInteractionId = "quasi";
            }};            

            CreateInternationalScheduledPaymentsRawResponse res = sdk.internationalScheduledPayments.createInternationalScheduledPaymentsRaw(req, new CreateInternationalScheduledPaymentsRawSecurity("magni") {{
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

## getInternationalScheduledPaymentConsentsConsentId

Get International Scheduled Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalScheduledPaymentConsentsConsentIdRequest req = new GetInternationalScheduledPaymentConsentsConsentIdRequest("doloribus", "nulla") {{
                xCustomerUserAgent = "necessitatibus";
                xFapiAuthDate = "ipsa";
                xFapiCustomerIpAddress = "tempora";
                xFapiInteractionId = "nihil";
            }};            

            GetInternationalScheduledPaymentConsentsConsentIdResponse res = sdk.internationalScheduledPayments.getInternationalScheduledPaymentConsentsConsentId(req, new GetInternationalScheduledPaymentConsentsConsentIdSecurity("molestiae") {{
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

## getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation

Get International Scheduled Payment Consents Funds Confirmation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest req = new GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest("dicta", "iusto") {{
                xCustomerUserAgent = "esse";
                xFapiAuthDate = "praesentium";
                xFapiCustomerIpAddress = "maiores";
                xFapiInteractionId = "reiciendis";
            }};            

            GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse res = sdk.internationalScheduledPayments.getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation(req, new GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity("vel") {{
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

## getInternationalScheduledPaymentsInternationalScheduledPaymentId

Get International Scheduled Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest req = new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest("architecto", "fugiat") {{
                xCustomerUserAgent = "doloremque";
                xFapiAuthDate = "dicta";
                xFapiCustomerIpAddress = "odio";
                xFapiInteractionId = "tempora";
            }};            

            GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse res = sdk.internationalScheduledPayments.getInternationalScheduledPaymentsInternationalScheduledPaymentId(req, new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity("esse") {{
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
