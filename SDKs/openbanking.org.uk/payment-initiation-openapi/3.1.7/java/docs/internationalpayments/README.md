# internationalPayments

### Available Operations

* [createInternationalPaymentConsentsJson](#createinternationalpaymentconsentsjson) - Create International Payment Consents
* [createInternationalPaymentConsentsRaw](#createinternationalpaymentconsentsraw) - Create International Payment Consents
* [createInternationalPaymentsJson](#createinternationalpaymentsjson) - Create International Payments
* [createInternationalPaymentsRaw](#createinternationalpaymentsraw) - Create International Payments
* [getInternationalPaymentConsentsConsentId](#getinternationalpaymentconsentsconsentid) - Get International Payment Consents
* [getInternationalPaymentConsentsConsentIdFundsConfirmation](#getinternationalpaymentconsentsconsentidfundsconfirmation) - Get International Payment Consents Funds Confirmation
* [getInternationalPaymentsInternationalPaymentId](#getinternationalpaymentsinternationalpaymentid) - Get International Payments

## createInternationalPaymentConsentsJson

Create International Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateInternationalPaymentConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateInternationalPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5Data;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalPaymentConsentsJsonRequest req = new CreateInternationalPaymentConsentsJsonRequest("a",                 new OBWriteInternationalConsent5(                new OBWriteInternationalConsent5Data(                new OBWriteInternationalConsent5DataInitiation(                new OBWriteInternationalConsent5DataInitiationCreditorAccount("nulla", "quas", "esse") {{
                                                                                secondaryIdentification = "quasi";
                                                                            }};, "a", "error",                 new OBWriteInternationalConsent5DataInitiationInstructedAmount("sint", "pariatur");, "possimus") {{
                                                                chargeBearer = OBChargeBearerType1CodeEnum.BORNE_BY_CREDITOR;
                                                                creditor = new OBWriteInternationalConsent5DataInitiationCreditor() {{
                                                                    name = "Mr. Marlon Schultz V";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("aliquid"),
                                                                            add("tenetur"),
                                                                            add("quae"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.STATEMENT;
                                                                        buildingNumber = "vel";
                                                                        country = "Jordan";
                                                                        countrySubDivision = "eius";
                                                                        department = "libero";
                                                                        postCode = "70391-3433";
                                                                        streetName = "aut";
                                                                        subDepartment = "voluptatum";
                                                                        townName = "qui";
                                                                    }};;
                                                                }};;
                                                                creditorAgent = new OBWriteInternationalConsent5DataInitiationCreditorAgent() {{
                                                                    identification = "quibusdam";
                                                                    name = "Cassandra Ward V";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("quasi"),
                                                                            add("at"),
                                                                            add("et"),
                                                                            add("voluptate"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.BUSINESS;
                                                                        buildingNumber = "minima";
                                                                        country = "Belize";
                                                                        countrySubDivision = "consectetur";
                                                                        department = "adipisci";
                                                                        postCode = "80505-4605";
                                                                        streetName = "non";
                                                                        subDepartment = "voluptatem";
                                                                        townName = "dolor";
                                                                    }};;
                                                                    schemeName = "occaecati";
                                                                }};;
                                                                debtorAccount = new OBWriteInternationalConsent5DataInitiationDebtorAccount("numquam", "impedit") {{
                                                                    name = "Loretta Anderson DVM";
                                                                    secondaryIdentification = "natus";
                                                                }};;
                                                                destinationCountryCode = "velit";
                                                                exchangeRateInformation = new OBWriteInternationalConsent5DataInitiationExchangeRateInformation(OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum.INDICATIVE, "voluptas") {{
                                                                    contractIdentification = "asperiores";
                                                                    exchangeRate = 456.59;
                                                                }};;
                                                                extendedPurpose = "ea";
                                                                instructionPriority = OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum.NORMAL;
                                                                localInstrument = "consequuntur";
                                                                purpose = "repellendus";
                                                                remittanceInformation = new OBWriteInternationalConsent5DataInitiationRemittanceInformation() {{
                                                                    reference = "officia";
                                                                    unstructured = "maxime";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("officia", "asperiores");
                                                                    put("nemo", "quae");
                                                                }};
                                                            }};) {{
                                                authorisation = new OBWriteInternationalConsent5DataAuthorisation(OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum.ANY) {{
                                                    completionDateTime = OffsetDateTime.parse("2020-08-05T23:44:45.300Z");
                                                }};;
                                                readRefundAccount = OBWriteInternationalConsent5DataReadRefundAccountEnum.NO;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.CA;
                                                    referencePaymentOrderId = "adipisci";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.KIOSK;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("id", "suscipit") {{
                                                    addressLine = new String[]{{
                                                        add("culpa"),
                                                    }};
                                                    buildingNumber = "est";
                                                    countrySubDivision = "recusandae";
                                                    postCode = "84454-2877";
                                                    streetName = "commodi";
                                                }};;
                                                merchantCategoryCode = "in";
                                                merchantCustomerIdentification = "corporis";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.PARTY_TO_PARTY;
                                            }};);, "assumenda", "nemo") {{
                xCustomerUserAgent = "recusandae";
                xFapiAuthDate = "aliquid";
                xFapiCustomerIpAddress = "aperiam";
                xFapiInteractionId = "cum";
            }};            

            CreateInternationalPaymentConsentsJsonResponse res = sdk.internationalPayments.createInternationalPaymentConsentsJson(req, new CreateInternationalPaymentConsentsJsonSecurity("consectetur") {{
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

## createInternationalPaymentConsentsRaw

Create International Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalPaymentConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateInternationalPaymentConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateInternationalPaymentConsentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5Data;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteInternationalConsent5DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalPaymentConsentsRawRequest req = new CreateInternationalPaymentConsentsRawRequest("in", "exercitationem".getBytes(), "earum", "facere") {{
                xCustomerUserAgent = "numquam";
                xFapiAuthDate = "doloribus";
                xFapiCustomerIpAddress = "suscipit";
                xFapiInteractionId = "reiciendis";
            }};            

            CreateInternationalPaymentConsentsRawResponse res = sdk.internationalPayments.createInternationalPaymentConsentsRaw(req, new CreateInternationalPaymentConsentsRawSecurity("quidem") {{
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

## createInternationalPaymentsJson

Create International Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalPaymentsJsonRequest;
import org.openapis.openapi.models.operations.CreateInternationalPaymentsJsonResponse;
import org.openapis.openapi.models.operations.CreateInternationalPaymentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteInternational3;
import org.openapis.openapi.models.shared.OBWriteInternational3Data;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalPaymentsJsonRequest req = new CreateInternationalPaymentsJsonRequest("saepe",                 new OBWriteInternational3(                new OBWriteInternational3Data("necessitatibus",                 new OBWriteInternational3DataInitiation(                new OBWriteInternational3DataInitiationCreditorAccount("dolore", "sunt", "asperiores") {{
                                                                                secondaryIdentification = "adipisci";
                                                                            }};, "non", "amet",                 new OBWriteInternational3DataInitiationInstructedAmount("beatae", "dignissimos");, "a") {{
                                                                chargeBearer = OBChargeBearerType1CodeEnum.SHARED;
                                                                creditor = new OBWriteInternational3DataInitiationCreditor() {{
                                                                    name = "Stacy Pollich DVM";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("vitae"),
                                                                            add("accusamus"),
                                                                            add("similique"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.DELIVERY_TO;
                                                                        buildingNumber = "aspernatur";
                                                                        country = "Heard Island and McDonald Islands";
                                                                        countrySubDivision = "voluptas";
                                                                        department = "voluptas";
                                                                        postCode = "76271";
                                                                        streetName = "blanditiis";
                                                                        subDepartment = "in";
                                                                        townName = "dolore";
                                                                    }};;
                                                                }};;
                                                                creditorAgent = new OBWriteInternational3DataInitiationCreditorAgent() {{
                                                                    identification = "aliquam";
                                                                    name = "Lionel Herman";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("quas"),
                                                                            add("hic"),
                                                                            add("nesciunt"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.POSTAL;
                                                                        buildingNumber = "corrupti";
                                                                        country = "Syrian Arab Republic";
                                                                        countrySubDivision = "totam";
                                                                        department = "hic";
                                                                        postCode = "70619";
                                                                        streetName = "explicabo";
                                                                        subDepartment = "asperiores";
                                                                        townName = "facilis";
                                                                    }};;
                                                                    schemeName = "voluptate";
                                                                }};;
                                                                debtorAccount = new OBWriteInternational3DataInitiationDebtorAccount("expedita", "ab") {{
                                                                    name = "Micheal Osinski";
                                                                    secondaryIdentification = "commodi";
                                                                }};;
                                                                destinationCountryCode = "quidem";
                                                                exchangeRateInformation = new OBWriteInternational3DataInitiationExchangeRateInformation(OBWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum.ACTUAL, "voluptas") {{
                                                                    contractIdentification = "unde";
                                                                    exchangeRate = 1000.32;
                                                                }};;
                                                                extendedPurpose = "suscipit";
                                                                instructionPriority = OBWriteInternational3DataInitiationInstructionPriorityEnum.URGENT;
                                                                localInstrument = "debitis";
                                                                purpose = "illo";
                                                                remittanceInformation = new OBWriteInternational3DataInitiationRemittanceInformation() {{
                                                                    reference = "reiciendis";
                                                                    unstructured = "perferendis";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("maiores", "incidunt");
                                                                    put("sed", "provident");
                                                                    put("eius", "necessitatibus");
                                                                }};
                                                            }};);,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("ipsum", "ea") {{
                                                    addressLine = new String[]{{
                                                        add("quos"),
                                                        add("voluptatibus"),
                                                        add("tempora"),
                                                    }};
                                                    buildingNumber = "tempora";
                                                    countrySubDivision = "voluptate";
                                                    postCode = "40285-7323";
                                                    streetName = "debitis";
                                                }};;
                                                merchantCategoryCode = "rem";
                                                merchantCustomerIdentification = "sit";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.OTHER;
                                            }};);, "error", "veniam") {{
                xCustomerUserAgent = "minima";
                xFapiAuthDate = "recusandae";
                xFapiCustomerIpAddress = "reiciendis";
                xFapiInteractionId = "nulla";
            }};            

            CreateInternationalPaymentsJsonResponse res = sdk.internationalPayments.createInternationalPaymentsJson(req, new CreateInternationalPaymentsJsonSecurity("magni") {{
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

## createInternationalPaymentsRaw

Create International Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalPaymentsRawRequest;
import org.openapis.openapi.models.operations.CreateInternationalPaymentsRawResponse;
import org.openapis.openapi.models.operations.CreateInternationalPaymentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteInternational3;
import org.openapis.openapi.models.shared.OBWriteInternational3Data;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationExchangeRateInformation;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationInstructionPriorityEnum;
import org.openapis.openapi.models.shared.OBWriteInternational3DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalPaymentsRawRequest req = new CreateInternationalPaymentsRawRequest("aperiam", "saepe".getBytes(), "numquam", "veniam") {{
                xCustomerUserAgent = "in";
                xFapiAuthDate = "officiis";
                xFapiCustomerIpAddress = "beatae";
                xFapiInteractionId = "laudantium";
            }};            

            CreateInternationalPaymentsRawResponse res = sdk.internationalPayments.createInternationalPaymentsRaw(req, new CreateInternationalPaymentsRawSecurity("exercitationem") {{
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

## getInternationalPaymentConsentsConsentId

Get International Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalPaymentConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetInternationalPaymentConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetInternationalPaymentConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalPaymentConsentsConsentIdRequest req = new GetInternationalPaymentConsentsConsentIdRequest("praesentium", "cum") {{
                xCustomerUserAgent = "laboriosam";
                xFapiAuthDate = "dolorum";
                xFapiCustomerIpAddress = "voluptatum";
                xFapiInteractionId = "error";
            }};            

            GetInternationalPaymentConsentsConsentIdResponse res = sdk.internationalPayments.getInternationalPaymentConsentsConsentId(req, new GetInternationalPaymentConsentsConsentIdSecurity("hic") {{
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

## getInternationalPaymentConsentsConsentIdFundsConfirmation

Get International Payment Consents Funds Confirmation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest;
import org.openapis.openapi.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse;
import org.openapis.openapi.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest req = new GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest("expedita", "debitis") {{
                xCustomerUserAgent = "neque";
                xFapiAuthDate = "dolorum";
                xFapiCustomerIpAddress = "nostrum";
                xFapiInteractionId = "officia";
            }};            

            GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse res = sdk.internationalPayments.getInternationalPaymentConsentsConsentIdFundsConfirmation(req, new GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity("dolorum") {{
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

## getInternationalPaymentsInternationalPaymentId

Get International Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalPaymentsInternationalPaymentIdRequest;
import org.openapis.openapi.models.operations.GetInternationalPaymentsInternationalPaymentIdResponse;
import org.openapis.openapi.models.operations.GetInternationalPaymentsInternationalPaymentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalPaymentsInternationalPaymentIdRequest req = new GetInternationalPaymentsInternationalPaymentIdRequest("corrupti", "accusamus") {{
                xCustomerUserAgent = "tempora";
                xFapiAuthDate = "atque";
                xFapiCustomerIpAddress = "fugit";
                xFapiInteractionId = "ut";
            }};            

            GetInternationalPaymentsInternationalPaymentIdResponse res = sdk.internationalPayments.getInternationalPaymentsInternationalPaymentId(req, new GetInternationalPaymentsInternationalPaymentIdSecurity("fugiat") {{
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
