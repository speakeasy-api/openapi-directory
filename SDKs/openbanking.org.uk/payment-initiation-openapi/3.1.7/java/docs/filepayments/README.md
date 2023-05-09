# filePayments

### Available Operations

* [createFilePaymentConsentsConsentIdFileJson](#createfilepaymentconsentsconsentidfilejson) - Create File Payment Consents
* [createFilePaymentConsentsConsentIdFileRaw](#createfilepaymentconsentsconsentidfileraw) - Create File Payment Consents
* [createFilePaymentConsentsJson](#createfilepaymentconsentsjson) - Create File Payment Consents
* [createFilePaymentConsentsRaw](#createfilepaymentconsentsraw) - Create File Payment Consents
* [createFilePaymentsJson](#createfilepaymentsjson) - Create File Payments
* [createFilePaymentsRaw](#createfilepaymentsraw) - Create File Payments
* [getFilePaymentConsentsConsentId](#getfilepaymentconsentsconsentid) - Get File Payment Consents
* [getFilePaymentConsentsConsentIdFile](#getfilepaymentconsentsconsentidfile) - Get File Payment Consents
* [getFilePaymentsFilePaymentId](#getfilepaymentsfilepaymentid) - Get File Payments
* [getFilePaymentsFilePaymentIdReportFile](#getfilepaymentsfilepaymentidreportfile) - Get File Payments

## createFilePaymentConsentsConsentIdFileJson

Create File Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsConsentIdFileJsonRequest;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsConsentIdFileJsonResponse;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsConsentIdFileJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFilePaymentConsentsConsentIdFileJsonRequest req = new CreateFilePaymentConsentsConsentIdFileJsonRequest("fugit", "accusamus",                 new java.util.HashMap<String, Object>() {{
                                put("non", "et");
                            }}, "dolorum", "laborum") {{
                xCustomerUserAgent = "placeat";
                xFapiAuthDate = "velit";
                xFapiCustomerIpAddress = "eum";
                xFapiInteractionId = "autem";
            }};            

            CreateFilePaymentConsentsConsentIdFileJsonResponse res = sdk.filePayments.createFilePaymentConsentsConsentIdFileJson(req, new CreateFilePaymentConsentsConsentIdFileJsonSecurity("nobis") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilePaymentConsentsConsentIdFileRaw

Create File Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsConsentIdFileRawRequest;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsConsentIdFileRawResponse;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsConsentIdFileRawSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFilePaymentConsentsConsentIdFileRawRequest req = new CreateFilePaymentConsentsConsentIdFileRawRequest("quas", "assumenda", "nulla".getBytes(), "voluptas", "libero") {{
                xCustomerUserAgent = "quasi";
                xFapiAuthDate = "tempora";
                xFapiCustomerIpAddress = "numquam";
                xFapiInteractionId = "explicabo";
            }};            

            CreateFilePaymentConsentsConsentIdFileRawResponse res = sdk.filePayments.createFilePaymentConsentsConsentIdFileRaw(req, new CreateFilePaymentConsentsConsentIdFileRawSecurity("provident") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilePaymentConsentsJson

Create File Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteFileConsent3;
import org.openapis.openapi.models.shared.OBWriteFileConsent3Data;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFilePaymentConsentsJsonRequest req = new CreateFilePaymentConsentsJsonRequest("ipsa",                 new OBWriteFileConsent3(                new OBWriteFileConsent3Data(                new OBWriteFileConsent3DataInitiation("molestiae", "magnam") {{
                                                                controlSum = 4879.35;
                                                                debtorAccount = new OBWriteFileConsent3DataInitiationDebtorAccount("eius", "esse") {{
                                                                    name = "Hilda Paucek";
                                                                    secondaryIdentification = "fugiat";
                                                                }};;
                                                                fileReference = "ut";
                                                                localInstrument = "eum";
                                                                numberOfTransactions = "suscipit";
                                                                remittanceInformation = new OBWriteFileConsent3DataInitiationRemittanceInformation() {{
                                                                    reference = "assumenda";
                                                                    unstructured = "eos";
                                                                }};;
                                                                requestedExecutionDateTime = OffsetDateTime.parse("2021-06-04T08:40:57.100Z");
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("ipsa", "id");
                                                                }};
                                                            }};) {{
                                                authorisation = new OBWriteFileConsent3DataAuthorisation(OBWriteFileConsent3DataAuthorisationAuthorisationTypeEnum.SINGLE) {{
                                                    completionDateTime = OffsetDateTime.parse("2022-03-22T18:37:41.743Z");
                                                }};;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.SCA;
                                                    referencePaymentOrderId = "quo";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.KIOSK;
                                                }};;
                                            }};);, "eius", "eos") {{
                xCustomerUserAgent = "voluptas";
                xFapiAuthDate = "ab";
                xFapiCustomerIpAddress = "cupiditate";
                xFapiInteractionId = "consequatur";
            }};            

            CreateFilePaymentConsentsJsonResponse res = sdk.filePayments.createFilePaymentConsentsJson(req, new CreateFilePaymentConsentsJsonSecurity("tempora") {{
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

## createFilePaymentConsentsRaw

Create File Payment Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsRawRequest;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsRawResponse;
import org.openapis.openapi.models.operations.CreateFilePaymentConsentsRawSecurity;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteFileConsent3;
import org.openapis.openapi.models.shared.OBWriteFileConsent3Data;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataInitiation;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteFileConsent3DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFilePaymentConsentsRawRequest req = new CreateFilePaymentConsentsRawRequest("debitis", "ipsam".getBytes(), "aspernatur", "sequi") {{
                xCustomerUserAgent = "quo";
                xFapiAuthDate = "esse";
                xFapiCustomerIpAddress = "recusandae";
                xFapiInteractionId = "aperiam";
            }};            

            CreateFilePaymentConsentsRawResponse res = sdk.filePayments.createFilePaymentConsentsRaw(req, new CreateFilePaymentConsentsRawSecurity("distinctio") {{
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

## createFilePaymentsJson

Create File Payments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilePaymentsJsonRequest;
import org.openapis.openapi.models.operations.CreateFilePaymentsJsonResponse;
import org.openapis.openapi.models.operations.CreateFilePaymentsJsonSecurity;
import org.openapis.openapi.models.shared.OBWriteFile2;
import org.openapis.openapi.models.shared.OBWriteFile2Data;
import org.openapis.openapi.models.shared.OBWriteFile2DataInitiation;
import org.openapis.openapi.models.shared.OBWriteFile2DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteFile2DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFilePaymentsJsonRequest req = new CreateFilePaymentsJsonRequest("quod",                 new OBWriteFile2(                new OBWriteFile2Data("dignissimos",                 new OBWriteFile2DataInitiation("inventore", "nihil") {{
                                                                controlSum = 5188.35;
                                                                debtorAccount = new OBWriteFile2DataInitiationDebtorAccount("accusamus", "aliquam") {{
                                                                    name = "Violet Johns";
                                                                    secondaryIdentification = "deserunt";
                                                                }};;
                                                                fileReference = "molestiae";
                                                                localInstrument = "accusantium";
                                                                numberOfTransactions = "porro";
                                                                remittanceInformation = new OBWriteFile2DataInitiationRemittanceInformation() {{
                                                                    reference = "eum";
                                                                    unstructured = "quas";
                                                                }};;
                                                                requestedExecutionDateTime = OffsetDateTime.parse("2022-09-06T07:07:42.754Z");
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("fugit", "fuga");
                                                                    put("mollitia", "incidunt");
                                                                    put("atque", "explicabo");
                                                                }};
                                                            }};););, "minima", "nisi") {{
                xCustomerUserAgent = "fugit";
                xFapiAuthDate = "sapiente";
                xFapiCustomerIpAddress = "consequuntur";
                xFapiInteractionId = "ratione";
            }};            

            CreateFilePaymentsJsonResponse res = sdk.filePayments.createFilePaymentsJson(req, new CreateFilePaymentsJsonSecurity("explicabo") {{
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

## createFilePaymentsRaw

Create File Payments

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilePaymentsRawRequest;
import org.openapis.openapi.models.operations.CreateFilePaymentsRawResponse;
import org.openapis.openapi.models.operations.CreateFilePaymentsRawSecurity;
import org.openapis.openapi.models.shared.OBWriteFile2;
import org.openapis.openapi.models.shared.OBWriteFile2Data;
import org.openapis.openapi.models.shared.OBWriteFile2DataInitiation;
import org.openapis.openapi.models.shared.OBWriteFile2DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteFile2DataInitiationRemittanceInformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFilePaymentsRawRequest req = new CreateFilePaymentsRawRequest("saepe", "occaecati".getBytes(), "atque", "et") {{
                xCustomerUserAgent = "esse";
                xFapiAuthDate = "eveniet";
                xFapiCustomerIpAddress = "accusamus";
                xFapiInteractionId = "veritatis";
            }};            

            CreateFilePaymentsRawResponse res = sdk.filePayments.createFilePaymentsRaw(req, new CreateFilePaymentsRawSecurity("esse") {{
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

## getFilePaymentConsentsConsentId

Get File Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilePaymentConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetFilePaymentConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetFilePaymentConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilePaymentConsentsConsentIdRequest req = new GetFilePaymentConsentsConsentIdRequest("quod", "nam") {{
                xCustomerUserAgent = "vero";
                xFapiAuthDate = "aliquid";
                xFapiCustomerIpAddress = "quasi";
                xFapiInteractionId = "saepe";
            }};            

            GetFilePaymentConsentsConsentIdResponse res = sdk.filePayments.getFilePaymentConsentsConsentId(req, new GetFilePaymentConsentsConsentIdSecurity("vel") {{
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

## getFilePaymentConsentsConsentIdFile

Get File Payment Consents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilePaymentConsentsConsentIdFileRequest;
import org.openapis.openapi.models.operations.GetFilePaymentConsentsConsentIdFileResponse;
import org.openapis.openapi.models.operations.GetFilePaymentConsentsConsentIdFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilePaymentConsentsConsentIdFileRequest req = new GetFilePaymentConsentsConsentIdFileRequest("harum", "molestiae") {{
                xCustomerUserAgent = "rerum";
                xFapiAuthDate = "occaecati";
                xFapiCustomerIpAddress = "minima";
                xFapiInteractionId = "distinctio";
            }};            

            GetFilePaymentConsentsConsentIdFileResponse res = sdk.filePayments.getFilePaymentConsentsConsentIdFile(req, new GetFilePaymentConsentsConsentIdFileSecurity("eligendi") {{
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

## getFilePaymentsFilePaymentId

Get File Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdRequest;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdResponse;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilePaymentsFilePaymentIdRequest req = new GetFilePaymentsFilePaymentIdRequest("sit", "culpa") {{
                xCustomerUserAgent = "tempore";
                xFapiAuthDate = "adipisci";
                xFapiCustomerIpAddress = "cumque";
                xFapiInteractionId = "consequuntur";
            }};            

            GetFilePaymentsFilePaymentIdResponse res = sdk.filePayments.getFilePaymentsFilePaymentId(req, new GetFilePaymentsFilePaymentIdSecurity("consequatur") {{
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

## getFilePaymentsFilePaymentIdReportFile

Get File Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdReportFileRequest;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdReportFileResponse;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdReportFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilePaymentsFilePaymentIdReportFileRequest req = new GetFilePaymentsFilePaymentIdReportFileRequest("minus", "quaerat") {{
                xCustomerUserAgent = "sapiente";
                xFapiAuthDate = "consectetur";
                xFapiCustomerIpAddress = "esse";
                xFapiInteractionId = "blanditiis";
            }};            

            GetFilePaymentsFilePaymentIdReportFileResponse res = sdk.filePayments.getFilePaymentsFilePaymentIdReportFile(req, new GetFilePaymentsFilePaymentIdReportFileSecurity("provident") {{
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
