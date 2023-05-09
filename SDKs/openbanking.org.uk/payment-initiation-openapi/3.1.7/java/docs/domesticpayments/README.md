# domesticPayments

### Available Operations

* [createDomesticPaymentConsentsJson](#createdomesticpaymentconsentsjson) - Create Domestic Payment Consents
* [createDomesticPaymentConsentsRaw](#createdomesticpaymentconsentsraw) - Create Domestic Payment Consents
* [createDomesticPaymentsJson](#createdomesticpaymentsjson) - Create Domestic Payments
* [createDomesticPaymentsRaw](#createdomesticpaymentsraw) - Create Domestic Payments
* [getDomesticPaymentConsentsConsentId](#getdomesticpaymentconsentsconsentid) - Get Domestic Payment Consents
* [getDomesticPaymentConsentsConsentIdFundsConfirmation](#getdomesticpaymentconsentsconsentidfundsconfirmation) - Get Domestic Payment Consents Funds Confirmation
* [getDomesticPaymentsDomesticPaymentId](#getdomesticpaymentsdomesticpaymentid) - Get Domestic Payments

## createDomesticPaymentConsentsJson

Create Domestic Payment Consents

### Example Usage

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

            CreateDomesticPaymentConsentsJsonRequest req = new CreateDomesticPaymentConsentsJsonRequest("fuga",                 new OBWriteDomesticConsent4(                new OBWriteDomesticConsent4Data(                new OBWriteDomesticConsent4DataInitiation(                new OBWriteDomesticConsent4DataInitiationCreditorAccount("in", "corporis", "iste") {{
                                                                                secondaryIdentification = "iure";
                                                                            }};, "saepe",                 new OBWriteDomesticConsent4DataInitiationInstructedAmount("quidem", "architecto");, "ipsa") {{
                                                                creditorPostalAddress = new OBPostalAddress6() {{
                                                                    addressLine = new String[]{{
                                                                        add("est"),
                                                                        add("mollitia"),
                                                                        add("laborum"),
                                                                        add("dolores"),
                                                                    }};
                                                                    addressType = OBAddressTypeCodeEnum.CORRESPONDENCE;
                                                                    buildingNumber = "corporis";
                                                                    country = "Brunei Darussalam";
                                                                    countrySubDivision = "nobis";
                                                                    department = "enim";
                                                                    postCode = "33504-6991";
                                                                    streetName = "mollitia";
                                                                    subDepartment = "dolorem";
                                                                    townName = "culpa";
                                                                }};;
                                                                debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount("consequuntur", "repellat") {{
                                                                    name = "Tracy Fritsch";
                                                                    secondaryIdentification = "molestiae";
                                                                }};;
                                                                localInstrument = "velit";
                                                                remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                                                    reference = "error";
                                                                    unstructured = "quia";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("vitae", "laborum");
                                                                    put("animi", "enim");
                                                                }};
                                                            }};) {{
                                                authorisation = new OBWriteDomesticConsent4DataAuthorisation(OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum.ANY) {{
                                                    completionDateTime = OffsetDateTime.parse("2022-05-30T17:48:55.594Z");
                                                }};;
                                                readRefundAccount = OBWriteDomesticConsent4DataReadRefundAccountEnum.YES;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.CA;
                                                    referencePaymentOrderId = "id";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.PARKING;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("aut", "quasi") {{
                                                    addressLine = new String[]{{
                                                        add("temporibus"),
                                                        add("laborum"),
                                                        add("quasi"),
                                                    }};
                                                    buildingNumber = "reiciendis";
                                                    countrySubDivision = "voluptatibus";
                                                    postCode = "45906-4700";
                                                    streetName = "reprehenderit";
                                                }};;
                                                merchantCategoryCode = "ut";
                                                merchantCustomerIdentification = "maiores";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.BILL_PAYMENT;
                                            }};);, "corporis", "dolore") {{
                xCustomerUserAgent = "iusto";
                xFapiAuthDate = "dicta";
                xFapiCustomerIpAddress = "harum";
                xFapiInteractionId = "enim";
            }};            

            CreateDomesticPaymentConsentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentConsentsJson(req, new CreateDomesticPaymentConsentsJsonSecurity("accusamus") {{
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

## createDomesticPaymentConsentsRaw

Create Domestic Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsRawSecurity;
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

            CreateDomesticPaymentConsentsRawRequest req = new CreateDomesticPaymentConsentsRawRequest("commodi", "repudiandae".getBytes(), "quae", "ipsum") {{
                xCustomerUserAgent = "quidem";
                xFapiAuthDate = "molestias";
                xFapiCustomerIpAddress = "excepturi";
                xFapiInteractionId = "pariatur";
            }};            

            CreateDomesticPaymentConsentsRawResponse res = sdk.domesticPayments.createDomesticPaymentConsentsRaw(req, new CreateDomesticPaymentConsentsRawSecurity("modi") {{
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

## createDomesticPaymentsJson

Create Domestic Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticPaymentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentsJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticPaymentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteDomestic2;
import org.openapis.openapi.models.shared.OBWriteDomestic2Data;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentsJsonRequest req = new CreateDomesticPaymentsJsonRequest("praesentium",                 new OBWriteDomestic2(                new OBWriteDomestic2Data("rem",                 new OBWriteDomestic2DataInitiation(                new OBWriteDomestic2DataInitiationCreditorAccount("voluptates", "quasi", "repudiandae") {{
                                                                                secondaryIdentification = "sint";
                                                                            }};, "veritatis",                 new OBWriteDomestic2DataInitiationInstructedAmount("itaque", "incidunt");, "enim") {{
                                                                creditorPostalAddress = new OBPostalAddress6() {{
                                                                    addressLine = new String[]{{
                                                                        add("est"),
                                                                    }};
                                                                    addressType = OBAddressTypeCodeEnum.RESIDENTIAL;
                                                                    buildingNumber = "explicabo";
                                                                    country = "Niger";
                                                                    countrySubDivision = "distinctio";
                                                                    department = "quibusdam";
                                                                    postCode = "21355";
                                                                    streetName = "perferendis";
                                                                    subDepartment = "magni";
                                                                    townName = "assumenda";
                                                                }};;
                                                                debtorAccount = new OBWriteDomestic2DataInitiationDebtorAccount("ipsam", "alias") {{
                                                                    name = "Sonya Marks";
                                                                    secondaryIdentification = "tempore";
                                                                }};;
                                                                localInstrument = "labore";
                                                                remittanceInformation = new OBWriteDomestic2DataInitiationRemittanceInformation() {{
                                                                    reference = "delectus";
                                                                    unstructured = "eum";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("eligendi", "sint");
                                                                }};
                                                            }};);,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("aliquid", "provident") {{
                                                    addressLine = new String[]{{
                                                        add("sint"),
                                                        add("officia"),
                                                        add("dolor"),
                                                        add("debitis"),
                                                    }};
                                                    buildingNumber = "a";
                                                    countrySubDivision = "dolorum";
                                                    postCode = "48961";
                                                    streetName = "magnam";
                                                }};;
                                                merchantCategoryCode = "cumque";
                                                merchantCustomerIdentification = "facere";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.ECOMMERCE_SERVICES;
                                            }};);, "aliquid", "laborum") {{
                xCustomerUserAgent = "accusamus";
                xFapiAuthDate = "non";
                xFapiCustomerIpAddress = "occaecati";
                xFapiInteractionId = "enim";
            }};            

            CreateDomesticPaymentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentsJson(req, new CreateDomesticPaymentsJsonSecurity("accusamus") {{
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

## createDomesticPaymentsRaw

Create Domestic Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticPaymentsRawRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentsRawResponse;
import org.openapis.openapi.models.operations.CreateDomesticPaymentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteDomestic2;
import org.openapis.openapi.models.shared.OBWriteDomestic2Data;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomestic2DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentsRawRequest req = new CreateDomesticPaymentsRawRequest("delectus", "quidem".getBytes(), "provident", "nam") {{
                xCustomerUserAgent = "id";
                xFapiAuthDate = "blanditiis";
                xFapiCustomerIpAddress = "deleniti";
                xFapiInteractionId = "sapiente";
            }};            

            CreateDomesticPaymentsRawResponse res = sdk.domesticPayments.createDomesticPaymentsRaw(req, new CreateDomesticPaymentsRawSecurity("amet") {{
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

## getDomesticPaymentConsentsConsentId

Get Domestic Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticPaymentConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetDomesticPaymentConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetDomesticPaymentConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticPaymentConsentsConsentIdRequest req = new GetDomesticPaymentConsentsConsentIdRequest("deserunt", "nisi") {{
                xCustomerUserAgent = "vel";
                xFapiAuthDate = "natus";
                xFapiCustomerIpAddress = "omnis";
                xFapiInteractionId = "molestiae";
            }};            

            GetDomesticPaymentConsentsConsentIdResponse res = sdk.domesticPayments.getDomesticPaymentConsentsConsentId(req, new GetDomesticPaymentConsentsConsentIdSecurity("perferendis") {{
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

## getDomesticPaymentConsentsConsentIdFundsConfirmation

Get Domestic Payment Consents Funds Confirmation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest;
import org.openapis.openapi.models.operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse;
import org.openapis.openapi.models.operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest req = new GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest("nihil", "magnam") {{
                xCustomerUserAgent = "distinctio";
                xFapiAuthDate = "id";
                xFapiCustomerIpAddress = "labore";
                xFapiInteractionId = "labore";
            }};            

            GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse res = sdk.domesticPayments.getDomesticPaymentConsentsConsentIdFundsConfirmation(req, new GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity("suscipit") {{
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

## getDomesticPaymentsDomesticPaymentId

Get Domestic Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticPaymentsDomesticPaymentIdRequest;
import org.openapis.openapi.models.operations.GetDomesticPaymentsDomesticPaymentIdResponse;
import org.openapis.openapi.models.operations.GetDomesticPaymentsDomesticPaymentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticPaymentsDomesticPaymentIdRequest req = new GetDomesticPaymentsDomesticPaymentIdRequest("natus", "nobis") {{
                xCustomerUserAgent = "eum";
                xFapiAuthDate = "vero";
                xFapiCustomerIpAddress = "aspernatur";
                xFapiInteractionId = "architecto";
            }};            

            GetDomesticPaymentsDomesticPaymentIdResponse res = sdk.domesticPayments.getDomesticPaymentsDomesticPaymentId(req, new GetDomesticPaymentsDomesticPaymentIdSecurity("magnam") {{
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
