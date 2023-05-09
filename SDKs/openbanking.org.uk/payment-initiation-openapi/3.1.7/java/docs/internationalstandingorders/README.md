# internationalStandingOrders

### Available Operations

* [createInternationalStandingOrderConsentsJson](#createinternationalstandingorderconsentsjson) - Create International Standing Order Consents
* [createInternationalStandingOrderConsentsRaw](#createinternationalstandingorderconsentsraw) - Create International Standing Order Consents
* [createInternationalStandingOrdersJson](#createinternationalstandingordersjson) - Create International Standing Orders
* [createInternationalStandingOrdersRaw](#createinternationalstandingordersraw) - Create International Standing Orders
* [getInternationalStandingOrderConsentsConsentId](#getinternationalstandingorderconsentsconsentid) - Get International Standing Order Consents
* [getInternationalStandingOrdersInternationalStandingOrderPaymentId](#getinternationalstandingordersinternationalstandingorderpaymentid) - Get International Standing Orders

## createInternationalStandingOrderConsentsJson

Create International Standing Order Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrderConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrderConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrderConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6Data;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalStandingOrderConsentsJsonRequest req = new CreateInternationalStandingOrderConsentsJsonRequest("ex",                 new OBWriteInternationalStandingOrderConsent6(                new OBWriteInternationalStandingOrderConsent6Data(                new OBWriteInternationalStandingOrderConsent6DataInitiation(                new OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount("consectetur", "aliquid", "ipsa") {{
                                                                                secondaryIdentification = "laborum";
                                                                            }};, "sunt", OffsetDateTime.parse("2022-02-22T06:49:26.369Z"), "expedita",                 new OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount("aliquid", "officia");) {{
                                                                chargeBearer = OBChargeBearerType1CodeEnum.BORNE_BY_DEBTOR;
                                                                creditor = new OBWriteInternationalStandingOrderConsent6DataInitiationCreditor() {{
                                                                    name = "Lisa Kemmer";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("ab"),
                                                                            add("error"),
                                                                            add("possimus"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.STATEMENT;
                                                                        buildingNumber = "mollitia";
                                                                        country = "Oman";
                                                                        countrySubDivision = "libero";
                                                                        department = "ad";
                                                                        postCode = "31847-4237";
                                                                        streetName = "voluptatem";
                                                                        subDepartment = "molestias";
                                                                        townName = "cum";
                                                                    }};;
                                                                }};;
                                                                creditorAgent = new OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent() {{
                                                                    identification = "aliquid";
                                                                    name = "Miss Nora Moen";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("voluptatem"),
                                                                            add("sapiente"),
                                                                            add("officiis"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.BUSINESS;
                                                                        buildingNumber = "fuga";
                                                                        country = "Syrian Arab Republic";
                                                                        countrySubDivision = "debitis";
                                                                        department = "voluptatem";
                                                                        postCode = "59495";
                                                                        streetName = "minus";
                                                                        subDepartment = "nemo";
                                                                        townName = "asperiores";
                                                                    }};;
                                                                    schemeName = "ratione";
                                                                }};;
                                                                debtorAccount = new OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount("ullam", "perferendis") {{
                                                                    name = "Jimmie Russel";
                                                                    secondaryIdentification = "ipsam";
                                                                }};;
                                                                destinationCountryCode = "culpa";
                                                                extendedPurpose = "dolor";
                                                                finalPaymentDateTime = OffsetDateTime.parse("2022-12-02T14:32:21.843Z");
                                                                numberOfPayments = "deleniti";
                                                                purpose = "veritatis";
                                                                reference = "tempora";
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("consequatur", "architecto");
                                                                }};
                                                            }};, OBWriteInternationalStandingOrderConsent6DataPermissionEnum.CREATE) {{
                                                authorisation = new OBWriteInternationalStandingOrderConsent6DataAuthorisation(OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum.ANY) {{
                                                    completionDateTime = OffsetDateTime.parse("2022-11-09T08:03:12.737Z");
                                                }};;
                                                readRefundAccount = OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum.NO;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.SCA;
                                                    referencePaymentOrderId = "quae";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.CONTACTLESS_TRAVEL;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("fugiat", "ipsam") {{
                                                    addressLine = new String[]{{
                                                        add("ipsa"),
                                                    }};
                                                    buildingNumber = "quas";
                                                    countrySubDivision = "eveniet";
                                                    postCode = "84813-1744";
                                                    streetName = "voluptatum";
                                                }};;
                                                merchantCategoryCode = "magnam";
                                                merchantCustomerIdentification = "exercitationem";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.BILL_PAYMENT;
                                            }};);, "porro", "autem") {{
                xCustomerUserAgent = "nobis";
                xFapiAuthDate = "laboriosam";
                xFapiCustomerIpAddress = "recusandae";
                xFapiInteractionId = "consequuntur";
            }};            

            CreateInternationalStandingOrderConsentsJsonResponse res = sdk.internationalStandingOrders.createInternationalStandingOrderConsentsJson(req, new CreateInternationalStandingOrderConsentsJsonSecurity("voluptatem") {{
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

## createInternationalStandingOrderConsentsRaw

Create International Standing Order Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrderConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrderConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrderConsentsRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6Data;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataPermissionEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalStandingOrderConsentsRawRequest req = new CreateInternationalStandingOrderConsentsRawRequest("exercitationem", "necessitatibus".getBytes(), "quasi", "nisi") {{
                xCustomerUserAgent = "at";
                xFapiAuthDate = "vero";
                xFapiCustomerIpAddress = "est";
                xFapiInteractionId = "harum";
            }};            

            CreateInternationalStandingOrderConsentsRawResponse res = sdk.internationalStandingOrders.createInternationalStandingOrderConsentsRaw(req, new CreateInternationalStandingOrderConsentsRawSecurity("sequi") {{
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

## createInternationalStandingOrdersJson

Create International Standing Orders

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrdersJsonRequest;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrdersJsonResponse;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrdersJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4Data;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationInstructedAmount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalStandingOrdersJsonRequest req = new CreateInternationalStandingOrdersJsonRequest("doloribus",                 new OBWriteInternationalStandingOrder4(                new OBWriteInternationalStandingOrder4Data("repudiandae",                 new OBWriteInternationalStandingOrder4DataInitiation(                new OBWriteInternationalStandingOrder4DataInitiationCreditorAccount("optio", "occaecati", "nemo") {{
                                                                                secondaryIdentification = "voluptate";
                                                                            }};, "blanditiis", OffsetDateTime.parse("2022-04-01T05:39:42.685Z"), "numquam",                 new OBWriteInternationalStandingOrder4DataInitiationInstructedAmount("nemo", "quos");) {{
                                                                chargeBearer = OBChargeBearerType1CodeEnum.BORNE_BY_DEBTOR;
                                                                creditor = new OBWriteInternationalStandingOrder4DataInitiationCreditor() {{
                                                                    name = "Caroline Dooley";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("quasi"),
                                                                            add("rem"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.RESIDENTIAL;
                                                                        buildingNumber = "dicta";
                                                                        country = "Hungary";
                                                                        countrySubDivision = "consequuntur";
                                                                        department = "consectetur";
                                                                        postCode = "59706";
                                                                        streetName = "eos";
                                                                        subDepartment = "occaecati";
                                                                        townName = "iste";
                                                                    }};;
                                                                }};;
                                                                creditorAgent = new OBWriteInternationalStandingOrder4DataInitiationCreditorAgent() {{
                                                                    identification = "magni";
                                                                    name = "Fannie Tillman";
                                                                    postalAddress = new OBPostalAddress6() {{
                                                                        addressLine = new String[]{{
                                                                            add("delectus"),
                                                                            add("minima"),
                                                                            add("praesentium"),
                                                                        }};
                                                                        addressType = OBAddressTypeCodeEnum.RESIDENTIAL;
                                                                        buildingNumber = "magnam";
                                                                        country = "Sri Lanka";
                                                                        countrySubDivision = "quos";
                                                                        department = "commodi";
                                                                        postCode = "45927-8034";
                                                                        streetName = "alias";
                                                                        subDepartment = "quasi";
                                                                        townName = "non";
                                                                    }};;
                                                                    schemeName = "maiores";
                                                                }};;
                                                                debtorAccount = new OBWriteInternationalStandingOrder4DataInitiationDebtorAccount("enim", "sint") {{
                                                                    name = "Gerard Koch";
                                                                    secondaryIdentification = "est";
                                                                }};;
                                                                destinationCountryCode = "quis";
                                                                extendedPurpose = "sint";
                                                                finalPaymentDateTime = OffsetDateTime.parse("2020-09-04T17:19:05.591Z");
                                                                numberOfPayments = "hic";
                                                                purpose = "necessitatibus";
                                                                reference = "asperiores";
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("voluptas", "debitis");
                                                                    put("delectus", "quae");
                                                                }};
                                                            }};);,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("minus", "fuga") {{
                                                    addressLine = new String[]{{
                                                        add("consectetur"),
                                                        add("velit"),
                                                        add("atque"),
                                                    }};
                                                    buildingNumber = "ipsum";
                                                    countrySubDivision = "impedit";
                                                    postCode = "79724";
                                                    streetName = "voluptate";
                                                }};;
                                                merchantCategoryCode = "sequi";
                                                merchantCustomerIdentification = "dignissimos";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.ECOMMERCE_GOODS;
                                            }};);, "quo", "deleniti") {{
                xCustomerUserAgent = "quibusdam";
                xFapiAuthDate = "iure";
                xFapiCustomerIpAddress = "odit";
                xFapiInteractionId = "voluptatibus";
            }};            

            CreateInternationalStandingOrdersJsonResponse res = sdk.internationalStandingOrders.createInternationalStandingOrdersJson(req, new CreateInternationalStandingOrdersJsonSecurity("vel") {{
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

## createInternationalStandingOrdersRaw

Create International Standing Orders

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrdersRawRequest;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrdersRawResponse;
import org.openapis.openapi.models.operations.CreateInternationalStandingOrdersRawSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBChargeBearerType1CodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4Data;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationCreditor;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationCreditorAgent;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteInternationalStandingOrder4DataInitiationInstructedAmount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInternationalStandingOrdersRawRequest req = new CreateInternationalStandingOrdersRawRequest("magnam", "quibusdam".getBytes(), "inventore", "facere") {{
                xCustomerUserAgent = "libero";
                xFapiAuthDate = "architecto";
                xFapiCustomerIpAddress = "voluptatibus";
                xFapiInteractionId = "quia";
            }};            

            CreateInternationalStandingOrdersRawResponse res = sdk.internationalStandingOrders.createInternationalStandingOrdersRaw(req, new CreateInternationalStandingOrdersRawSecurity("porro") {{
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

## getInternationalStandingOrderConsentsConsentId

Get International Standing Order Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalStandingOrderConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetInternationalStandingOrderConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetInternationalStandingOrderConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalStandingOrderConsentsConsentIdRequest req = new GetInternationalStandingOrderConsentsConsentIdRequest("aliquam", "velit") {{
                xCustomerUserAgent = "illo";
                xFapiAuthDate = "accusantium";
                xFapiCustomerIpAddress = "vel";
                xFapiInteractionId = "ea";
            }};            

            GetInternationalStandingOrderConsentsConsentIdResponse res = sdk.internationalStandingOrders.getInternationalStandingOrderConsentsConsentId(req, new GetInternationalStandingOrderConsentsConsentIdSecurity("beatae") {{
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

## getInternationalStandingOrdersInternationalStandingOrderPaymentId

Get International Standing Orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest;
import org.openapis.openapi.models.operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse;
import org.openapis.openapi.models.operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest req = new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest("vero", "excepturi") {{
                xCustomerUserAgent = "eum";
                xFapiAuthDate = "velit";
                xFapiCustomerIpAddress = "ut";
                xFapiInteractionId = "perspiciatis";
            }};            

            GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse res = sdk.internationalStandingOrders.getInternationalStandingOrdersInternationalStandingOrderPaymentId(req, new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity("earum") {{
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
