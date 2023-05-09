# domesticStandingOrders

### Available Operations

* [createDomesticStandingOrderConsentsJson](#createdomesticstandingorderconsentsjson) - Create Domestic Standing Order Consents
* [createDomesticStandingOrderConsentsRaw](#createdomesticstandingorderconsentsraw) - Create Domestic Standing Order Consents
* [createDomesticStandingOrdersJson](#createdomesticstandingordersjson) - Create Domestic Standing Orders
* [createDomesticStandingOrdersRaw](#createdomesticstandingordersraw) - Create Domestic Standing Orders
* [getDomesticStandingOrderConsentsConsentId](#getdomesticstandingorderconsentsconsentid) - Get Domestic Standing Order Consents
* [getDomesticStandingOrdersDomesticStandingOrderId](#getdomesticstandingordersdomesticstandingorderid) - Get Domestic Standing Orders

## createDomesticStandingOrderConsentsJson

Create Domestic Standing Order Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrderConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrderConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrderConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5Data;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticStandingOrderConsentsJsonRequest req = new CreateDomesticStandingOrderConsentsJsonRequest("sapiente",                 new OBWriteDomesticStandingOrderConsent5(                new OBWriteDomesticStandingOrderConsent5Data(                new OBWriteDomesticStandingOrderConsent5DataInitiation(                new OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount("totam", "nihil", "sit") {{
                                                                                secondaryIdentification = "expedita";
                                                                            }};,                 new OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount("neque", "sed");, OffsetDateTime.parse("2022-04-09T09:19:35.125Z"), "voluptas") {{
                                                                debtorAccount = new OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount("deserunt", "quam") {{
                                                                    name = "Amber Dibbert";
                                                                    secondaryIdentification = "pariatur";
                                                                }};;
                                                                finalPaymentAmount = new OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount("soluta", "dicta");;
                                                                finalPaymentDateTime = OffsetDateTime.parse("2021-12-19T07:31:04.219Z");
                                                                numberOfPayments = "incidunt";
                                                                recurringPaymentAmount = new OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount("aspernatur", "dolores");;
                                                                recurringPaymentDateTime = OffsetDateTime.parse("2021-08-04T17:36:39.068Z");
                                                                reference = "aliquid";
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("molestias", "temporibus");
                                                                    put("qui", "neque");
                                                                }};
                                                            }};, OBWriteDomesticStandingOrderConsent5DataPermissionEnum.CREATE) {{
                                                authorisation = new OBWriteDomesticStandingOrderConsent5DataAuthorisation(OBWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum.ANY) {{
                                                    completionDateTime = OffsetDateTime.parse("2022-07-06T20:37:36.497Z");
                                                }};;
                                                readRefundAccount = OBWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum.NO;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.CA;
                                                    referencePaymentOrderId = "nam";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.PARTY_TO_PARTY;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("voluptatem", "cumque") {{
                                                    addressLine = new String[]{{
                                                        add("nobis"),
                                                        add("et"),
                                                        add("saepe"),
                                                    }};
                                                    buildingNumber = "ipsum";
                                                    countrySubDivision = "veritatis";
                                                    postCode = "57509-2222";
                                                    streetName = "dolorum";
                                                }};;
                                                merchantCategoryCode = "architecto";
                                                merchantCustomerIdentification = "quae";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.BILL_PAYMENT;
                                            }};);, "quas", "itaque") {{
                xCustomerUserAgent = "consequatur";
                xFapiAuthDate = "est";
                xFapiCustomerIpAddress = "repellendus";
                xFapiInteractionId = "porro";
            }};            

            CreateDomesticStandingOrderConsentsJsonResponse res = sdk.domesticStandingOrders.createDomesticStandingOrderConsentsJson(req, new CreateDomesticStandingOrderConsentsJsonSecurity("doloribus") {{
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

## createDomesticStandingOrderConsentsRaw

Create Domestic Standing Order Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrderConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrderConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrderConsentsRawSecurity;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5Data;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticStandingOrderConsentsRawRequest req = new CreateDomesticStandingOrderConsentsRawRequest("ut", "facilis".getBytes(), "cupiditate", "qui") {{
                xCustomerUserAgent = "quae";
                xFapiAuthDate = "laudantium";
                xFapiCustomerIpAddress = "odio";
                xFapiInteractionId = "occaecati";
            }};            

            CreateDomesticStandingOrderConsentsRawResponse res = sdk.domesticStandingOrders.createDomesticStandingOrderConsentsRaw(req, new CreateDomesticStandingOrderConsentsRawSecurity("voluptatibus") {{
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

## createDomesticStandingOrdersJson

Create Domestic Standing Orders

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrdersJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrdersJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrdersJsonSecurity;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3Data;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticStandingOrdersJsonRequest req = new CreateDomesticStandingOrdersJsonRequest("quisquam",                 new OBWriteDomesticStandingOrder3(                new OBWriteDomesticStandingOrder3Data("vero",                 new OBWriteDomesticStandingOrder3DataInitiation(                new OBWriteDomesticStandingOrder3DataInitiationCreditorAccount("omnis", "quis", "ipsum") {{
                                                                                secondaryIdentification = "delectus";
                                                                            }};,                 new OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount("voluptate", "consectetur");, OffsetDateTime.parse("2020-02-26T11:54:04.858Z"), "dignissimos") {{
                                                                debtorAccount = new OBWriteDomesticStandingOrder3DataInitiationDebtorAccount("hic", "distinctio") {{
                                                                    name = "Lonnie Murray";
                                                                    secondaryIdentification = "ducimus";
                                                                }};;
                                                                finalPaymentAmount = new OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount("dolore", "quibusdam");;
                                                                finalPaymentDateTime = OffsetDateTime.parse("2022-06-02T04:41:10.492Z");
                                                                numberOfPayments = "natus";
                                                                recurringPaymentAmount = new OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount("impedit", "aut");;
                                                                recurringPaymentDateTime = OffsetDateTime.parse("2021-12-16T18:42:11.269Z");
                                                                reference = "nulla";
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("porro", "maiores");
                                                                }};
                                                            }};);,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("doloribus", "iusto") {{
                                                    addressLine = new String[]{{
                                                        add("ducimus"),
                                                        add("alias"),
                                                        add("officia"),
                                                        add("tempora"),
                                                    }};
                                                    buildingNumber = "ipsam";
                                                    countrySubDivision = "ea";
                                                    postCode = "48214";
                                                    streetName = "laudantium";
                                                }};;
                                                merchantCategoryCode = "dicta";
                                                merchantCustomerIdentification = "dolor";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.PARTY_TO_PARTY;
                                            }};);, "quasi", "ex") {{
                xCustomerUserAgent = "nulla";
                xFapiAuthDate = "excepturi";
                xFapiCustomerIpAddress = "voluptatibus";
                xFapiInteractionId = "nostrum";
            }};            

            CreateDomesticStandingOrdersJsonResponse res = sdk.domesticStandingOrders.createDomesticStandingOrdersJson(req, new CreateDomesticStandingOrdersJsonSecurity("sapiente") {{
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

## createDomesticStandingOrdersRaw

Create Domestic Standing Orders

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrdersRawRequest;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrdersRawResponse;
import org.openapis.openapi.models.operations.CreateDomesticStandingOrdersRawSecurity;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3Data;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticStandingOrdersRawRequest req = new CreateDomesticStandingOrdersRawRequest("quisquam", "saepe".getBytes(), "ea", "impedit") {{
                xCustomerUserAgent = "corporis";
                xFapiAuthDate = "veniam";
                xFapiCustomerIpAddress = "aliquid";
                xFapiInteractionId = "inventore";
            }};            

            CreateDomesticStandingOrdersRawResponse res = sdk.domesticStandingOrders.createDomesticStandingOrdersRaw(req, new CreateDomesticStandingOrdersRawSecurity("magnam") {{
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

## getDomesticStandingOrderConsentsConsentId

Get Domestic Standing Order Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticStandingOrderConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetDomesticStandingOrderConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetDomesticStandingOrderConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticStandingOrderConsentsConsentIdRequest req = new GetDomesticStandingOrderConsentsConsentIdRequest("ea", "quo") {{
                xCustomerUserAgent = "consectetur";
                xFapiAuthDate = "recusandae";
                xFapiCustomerIpAddress = "aspernatur";
                xFapiInteractionId = "minima";
            }};            

            GetDomesticStandingOrderConsentsConsentIdResponse res = sdk.domesticStandingOrders.getDomesticStandingOrderConsentsConsentId(req, new GetDomesticStandingOrderConsentsConsentIdSecurity("eaque") {{
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

## getDomesticStandingOrdersDomesticStandingOrderId

Get Domestic Standing Orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticStandingOrdersDomesticStandingOrderIdRequest;
import org.openapis.openapi.models.operations.GetDomesticStandingOrdersDomesticStandingOrderIdResponse;
import org.openapis.openapi.models.operations.GetDomesticStandingOrdersDomesticStandingOrderIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticStandingOrdersDomesticStandingOrderIdRequest req = new GetDomesticStandingOrdersDomesticStandingOrderIdRequest("a", "libero") {{
                xCustomerUserAgent = "aut";
                xFapiAuthDate = "aut";
                xFapiCustomerIpAddress = "deleniti";
                xFapiInteractionId = "impedit";
            }};            

            GetDomesticStandingOrdersDomesticStandingOrderIdResponse res = sdk.domesticStandingOrders.getDomesticStandingOrdersDomesticStandingOrderId(req, new GetDomesticStandingOrdersDomesticStandingOrderIdSecurity("aliquam") {{
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
