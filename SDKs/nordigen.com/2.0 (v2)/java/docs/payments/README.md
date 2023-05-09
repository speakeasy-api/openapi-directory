# payments

### Available Operations

* [createPaymentForm](#createpaymentform) - Create payment
* [createPaymentJson](#createpaymentjson) - Create payment
* [createPaymentMultipart](#createpaymentmultipart) - Create payment
* [deletePeriodicPayment](#deleteperiodicpayment) - Delete periodic payment
* [listMinimumRequiredFieldsForInstitution](#listminimumrequiredfieldsforinstitution) - List minimum required fields for institution
* [listPayments](#listpayments) - Retrieve all payments belonging to the company
* [paymentsCreditorsCreateForm](#paymentscreditorscreateform) - API endpoints related to creditor accounts.
* [paymentsCreditorsCreateJson](#paymentscreditorscreatejson) - API endpoints related to creditor accounts.
* [paymentsCreditorsCreateMultipart](#paymentscreditorscreatemultipart) - API endpoints related to creditor accounts.
* [paymentsCreditorsDestroy](#paymentscreditorsdestroy) - API endpoints related to creditor accounts.
* [paymentsCreditorsList](#paymentscreditorslist) - API endpoints related to creditor accounts.
* [paymentsCreditorsRetrieve](#paymentscreditorsretrieve) - API endpoints related to creditor accounts.
* [paymentsSubmitCreateForm](#paymentssubmitcreateform) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [paymentsSubmitCreateJson](#paymentssubmitcreatejson) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [paymentsSubmitCreateMultipart](#paymentssubmitcreatemultipart) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [retrieveAllPaymentCreditorAccounts](#retrieveallpaymentcreditoraccounts) - Retrieve all payment creditor accounts
* [retrievePayment](#retrievepayment) - Retrieve payment

## createPaymentForm

Create payment

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentFormResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.InstructedAmountRequest;
import org.openapis.openapi.models.shared.PaymentWriteRequest2;
import org.openapis.openapi.models.shared.PeriodicPaymentRequest;
import org.openapis.openapi.models.shared.PeriodicPaymentRequestExecutionRuleEnum;
import org.openapis.openapi.models.shared.PeriodicPaymentRequestFrequencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentWriteRequest2 req = new PaymentWriteRequest2(                new InstructedAmountRequest("doloribus", "debitis");, "http://straight-manager.net") {{
                creditorAccount = "711e5b7f-d2ed-4028-921c-ddc692601fb5";
                creditorObject = new CreditorAccountWriteRequest("voluptate", "autem", "nam") {{
                    addressCountry = AddressCountryEnumEnum.BE;
                    addressStreet = "pariatur";
                    agent = "nemo";
                    agentName = "voluptatibus";
                    institutionId = "perferendis";
                    postCode = "20739-7713";
                    type = CreditorAccountWriteRequestTypeEnum.SCAN;
                }};;
                customPaymentId = "dignissimos";
                debtorAccount = "eaque";
                description = "quis";
                institutionId = "nesciunt";
                paymentProduct = "eos";
                periodicPayment = new PeriodicPaymentRequest(LocalDate.parse("2022-10-30")) {{
                    dayOfExecution = "minus";
                    endDate = LocalDate.parse("2022-10-11");
                    executionRule = PeriodicPaymentRequestExecutionRuleEnum.PRECEDING;
                    frequency = PeriodicPaymentRequestFrequencyEnum.MONTHLY;
                }};;
                requestedExecutionDate = LocalDate.parse("2020-03-20");
                submitPayment = false;
            }};            

            CreatePaymentFormResponse res = sdk.payments.createPaymentForm(req);

            if (res.paymentWrite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPaymentJson

Create payment

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentJsonResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.InstructedAmountRequest;
import org.openapis.openapi.models.shared.PaymentWriteRequest;
import org.openapis.openapi.models.shared.PaymentWriteRequestDebtorAccount;
import org.openapis.openapi.models.shared.PaymentWriteRequestDebtorAccountTypeEnum;
import org.openapis.openapi.models.shared.PaymentWriteRequestPaymentProductEnum;
import org.openapis.openapi.models.shared.PeriodicPaymentRequest;
import org.openapis.openapi.models.shared.PeriodicPaymentRequestExecutionRuleEnum;
import org.openapis.openapi.models.shared.PeriodicPaymentRequestFrequencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentWriteRequest req = new PaymentWriteRequest(                new InstructedAmountRequest("facilis", "perspiciatis");, "http://sparkling-clam.name") {{
                creditorAccount = "909b3fe4-9a8d-49cb-b486-33323f9b77f3";
                creditorObject = new CreditorAccountWriteRequest("dolorum", "numquam", "veritatis") {{
                    addressCountry = AddressCountryEnumEnum.BE;
                    addressStreet = "ipsa";
                    agent = "iure";
                    agentName = "odio";
                    institutionId = "quaerat";
                    postCode = "69361-5080";
                    type = CreditorAccountWriteRequestTypeEnum.SCAN;
                }};;
                customPaymentId = "dolorum";
                debtorAccount = new PaymentWriteRequestDebtorAccount("iusto") {{
                    account = "voluptate";
                    addressCountry = "dolorum";
                    addressStreet = "deleniti";
                    currency = "omnis";
                    postCode = "79424-6921";
                    type = PaymentWriteRequestDebtorAccountTypeEnum.IBAN;
                    typeNumber = "amet";
                }};;
                description = "optio";
                institutionId = "accusamus";
                paymentProduct = PaymentWriteRequestPaymentProductEnum.CBCT;
                periodicPayment = new PeriodicPaymentRequest(LocalDate.parse("2021-11-07")) {{
                    dayOfExecution = "deserunt";
                    endDate = LocalDate.parse("2022-05-08");
                    executionRule = PeriodicPaymentRequestExecutionRuleEnum.PRECEDING;
                    frequency = PeriodicPaymentRequestFrequencyEnum.EVERY_TWO_MONTHS;
                }};;
                requestedExecutionDate = LocalDate.parse("2022-12-31");
                submitPayment = false;
            }};            

            CreatePaymentJsonResponse res = sdk.payments.createPaymentJson(req);

            if (res.paymentWrite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPaymentMultipart

Create payment

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentMultipartResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.InstructedAmountRequest;
import org.openapis.openapi.models.shared.PaymentWriteRequest2;
import org.openapis.openapi.models.shared.PeriodicPaymentRequest;
import org.openapis.openapi.models.shared.PeriodicPaymentRequestExecutionRuleEnum;
import org.openapis.openapi.models.shared.PeriodicPaymentRequestFrequencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PaymentWriteRequest2 req = new PaymentWriteRequest2(                new InstructedAmountRequest("quaerat", "tempora");, "http://stale-talk.biz") {{
                creditorAccount = "af7a73cf-3be4-453f-870b-326b5a73429c";
                creditorObject = new CreditorAccountWriteRequest("pariatur", "soluta", "dicta") {{
                    addressCountry = AddressCountryEnumEnum.NL;
                    addressStreet = "totam";
                    agent = "incidunt";
                    agentName = "aspernatur";
                    institutionId = "dolores";
                    postCode = "73458-1211";
                    type = CreditorAccountWriteRequestTypeEnum.IBAN;
                }};;
                customPaymentId = "sunt";
                debtorAccount = "ullam";
                description = "nam";
                institutionId = "hic";
                paymentProduct = "voluptatem";
                periodicPayment = new PeriodicPaymentRequest(LocalDate.parse("2020-10-05")) {{
                    dayOfExecution = "nobis";
                    endDate = LocalDate.parse("2022-02-05");
                    executionRule = PeriodicPaymentRequestExecutionRuleEnum.FOLLOWING;
                    frequency = PeriodicPaymentRequestFrequencyEnum.DAILY;
                }};;
                requestedExecutionDate = LocalDate.parse("2021-11-23");
                submitPayment = false;
            }};            

            CreatePaymentMultipartResponse res = sdk.payments.createPaymentMultipart(req);

            if (res.paymentWrite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePeriodicPayment

Delete periodic payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePeriodicPaymentRequest;
import org.openapis.openapi.models.operations.DeletePeriodicPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeletePeriodicPaymentRequest req = new DeletePeriodicPaymentRequest("90f3443a-1108-4e0a-9cf4-b921879fce95");            

            DeletePeriodicPaymentResponse res = sdk.payments.deletePeriodicPayment(req);

            if (res.deletePeriodicPayment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMinimumRequiredFieldsForInstitution

List minimum required fields for institution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMinimumRequiredFieldsForInstitutionRequest;
import org.openapis.openapi.models.operations.ListMinimumRequiredFieldsForInstitutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ListMinimumRequiredFieldsForInstitutionRequest req = new ListMinimumRequiredFieldsForInstitutionRequest("delectus");            

            ListMinimumRequiredFieldsForInstitutionResponse res = sdk.payments.listMinimumRequiredFieldsForInstitution(req);

            if (res.listMinimumRequiredFieldsForInstitution200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPayments

Retrieve all payments belonging to the company

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentsRequest;
import org.openapis.openapi.models.operations.ListPaymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ListPaymentsRequest req = new ListPaymentsRequest() {{
                limit = 231701L;
                offset = 878870L;
            }};            

            ListPaymentsResponse res = sdk.payments.listPayments(req);

            if (res.paginatedPaymentReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsCreditorsCreateForm

API endpoints related to creditor accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsCreditorsCreateFormResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditorAccountWriteRequest1 req = new CreditorAccountWriteRequest1("dignissimos", "hic", "distinctio") {{
                addressCountry = AddressCountryEnumEnum.RO;
                addressStreet = "odio";
                agent = "similique";
                agentName = "facilis";
                institutionId = "vero";
                postCode = "28816";
                type = "impedit";
            }};            

            PaymentsCreditorsCreateFormResponse res = sdk.payments.paymentsCreditorsCreateForm(req);

            if (res.creditorAccountWrite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsCreditorsCreateJson

API endpoints related to creditor accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsCreditorsCreateJsonResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditorAccountWriteRequest req = new CreditorAccountWriteRequest("voluptatibus", "exercitationem", "nulla") {{
                addressCountry = AddressCountryEnumEnum.CY;
                addressStreet = "porro";
                agent = "maiores";
                agentName = "doloribus";
                institutionId = "iusto";
                postCode = "40623-4148";
                type = CreditorAccountWriteRequestTypeEnum.IBAN;
            }};            

            PaymentsCreditorsCreateJsonResponse res = sdk.payments.paymentsCreditorsCreateJson(req);

            if (res.creditorAccountWrite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsCreditorsCreateMultipart

API endpoints related to creditor accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsCreditorsCreateMultipartResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreditorAccountWriteRequest1 req = new CreditorAccountWriteRequest1("ex", "laudantium", "dicta") {{
                addressCountry = AddressCountryEnumEnum.EE;
                addressStreet = "maiores";
                agent = "quasi";
                agentName = "ex";
                institutionId = "nulla";
                postCode = "93979-4733";
                type = "aliquid";
            }};            

            PaymentsCreditorsCreateMultipartResponse res = sdk.payments.paymentsCreditorsCreateMultipart(req);

            if (res.creditorAccountWrite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsCreditorsDestroy

API endpoints related to creditor accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsCreditorsDestroyRequest;
import org.openapis.openapi.models.operations.PaymentsCreditorsDestroyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PaymentsCreditorsDestroyRequest req = new PaymentsCreditorsDestroyRequest("46c3e250-fb00-48c4-ae14-1aac366c8dd6");            

            PaymentsCreditorsDestroyResponse res = sdk.payments.paymentsCreditorsDestroy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsCreditorsList

API endpoints related to creditor accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsCreditorsListRequest;
import org.openapis.openapi.models.operations.PaymentsCreditorsListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PaymentsCreditorsListRequest req = new PaymentsCreditorsListRequest() {{
                account = "quasi";
                addressCountry = "tempora";
                agent = "numquam";
                currency = "explicabo";
                limit = 591935L;
                name = "Minnie Gutkowski";
                offset = 458515L;
                type = "esse";
            }};            

            PaymentsCreditorsListResponse res = sdk.payments.paymentsCreditorsList(req);

            if (res.paginatedCreditorAccountList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsCreditorsRetrieve

API endpoints related to creditor accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsCreditorsRetrieveRequest;
import org.openapis.openapi.models.operations.PaymentsCreditorsRetrieveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PaymentsCreditorsRetrieveRequest req = new PaymentsCreditorsRetrieveRequest("a7bd466d-28c1-40ab-bcdc-a4251904e523");            

            PaymentsCreditorsRetrieveResponse res = sdk.payments.paymentsCreditorsRetrieve(req);

            if (res.creditorAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsSubmitCreateForm

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsSubmitCreateFormRequest;
import org.openapis.openapi.models.operations.PaymentsSubmitCreateFormResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.DebtorAccountWriteRequest;
import org.openapis.openapi.models.shared.DebtorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.InstructedAmountRequest;
import org.openapis.openapi.models.shared.PaymentReadRequest1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PaymentsSubmitCreateFormRequest req = new PaymentsSubmitCreateFormRequest(                new PaymentReadRequest1(                new DebtorAccountWriteRequest("esse") {{
                                                account = "recusandae";
                                                addressCountry = "aperiam";
                                                addressStreet = "distinctio";
                                                currency = "quod";
                                                postCode = "04583";
                                                type = DebtorAccountWriteRequestTypeEnum.IBAN;
                                                typeNumber = "occaecati";
                                            }};,                 new InstructedAmountRequest("commodi", "sapiente");, "http://present-island.com") {{
                                creditorAccount = "c688282a-a482-4562-b222-e9817ee17cbe";
                                creditorObject = new CreditorAccountWriteRequest("aliquid", "quasi", "saepe") {{
                                    addressCountry = AddressCountryEnumEnum.IS;
                                    addressStreet = "harum";
                                    agent = "molestiae";
                                    agentName = "rerum";
                                    institutionId = "occaecati";
                                    postCode = "77067";
                                    type = CreditorAccountWriteRequestTypeEnum.IBAN;
                                }};;
                                customPaymentId = "cumque";
                                description = "consequuntur";
                                institutionId = "consequatur";
                                paymentProduct = "minus";
                            }};, "4f3789fd-871f-499d-92ef-d121aa6f1e67");            

            PaymentsSubmitCreateFormResponse res = sdk.payments.paymentsSubmitCreateForm(req);

            if (res.paymentRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsSubmitCreateJson

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsSubmitCreateJsonRequest;
import org.openapis.openapi.models.operations.PaymentsSubmitCreateJsonResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.DebtorAccountWriteRequest;
import org.openapis.openapi.models.shared.DebtorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.InstructedAmountRequest;
import org.openapis.openapi.models.shared.PaymentReadRequest;
import org.openapis.openapi.models.shared.PaymentReadRequestPaymentProductEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PaymentsSubmitCreateJsonRequest req = new PaymentsSubmitCreateJsonRequest(                new PaymentReadRequest(                new DebtorAccountWriteRequest("libero") {{
                                                account = "illum";
                                                addressCountry = "soluta";
                                                addressStreet = "accusantium";
                                                currency = "aliquam";
                                                postCode = "13433-0518";
                                                type = DebtorAccountWriteRequestTypeEnum.IBAN;
                                                typeNumber = "deleniti";
                                            }};,                 new InstructedAmountRequest("itaque", "dolorum");, "http://paltry-utensil.com") {{
                                creditorAccount = "d1705133-9d08-4086-a184-0394c26071f9";
                                creditorObject = new CreditorAccountWriteRequest("velit", "voluptatibus", "voluptas") {{
                                    addressCountry = AddressCountryEnumEnum.US;
                                    addressStreet = "aperiam";
                                    agent = "ea";
                                    agentName = "quaerat";
                                    institutionId = "consequuntur";
                                    postCode = "68469-3037";
                                    type = CreditorAccountWriteRequestTypeEnum.SCAN;
                                }};;
                                customPaymentId = "labore";
                                description = "ab";
                                institutionId = "adipisci";
                                paymentProduct = PaymentReadRequestPaymentProductEnum.FPS;
                            }};, "a63aae8d-6786-44db-b675-fd5e60b375ed");            

            PaymentsSubmitCreateJsonResponse res = sdk.payments.paymentsSubmitCreateJson(req);

            if (res.paymentRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsSubmitCreateMultipart

Initiate the payment on bank's side.

Complete the payment and return payment details as a response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsSubmitCreateMultipartRequest;
import org.openapis.openapi.models.operations.PaymentsSubmitCreateMultipartResponse;
import org.openapis.openapi.models.shared.AddressCountryEnumEnum;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequest;
import org.openapis.openapi.models.shared.CreditorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.DebtorAccountWriteRequest;
import org.openapis.openapi.models.shared.DebtorAccountWriteRequestTypeEnum;
import org.openapis.openapi.models.shared.InstructedAmountRequest;
import org.openapis.openapi.models.shared.PaymentReadRequest1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PaymentsSubmitCreateMultipartRequest req = new PaymentsSubmitCreateMultipartRequest(                new PaymentReadRequest1(                new DebtorAccountWriteRequest("doloribus") {{
                                                account = "suscipit";
                                                addressCountry = "reiciendis";
                                                addressStreet = "quidem";
                                                currency = "saepe";
                                                postCode = "21922-2149";
                                                type = DebtorAccountWriteRequestTypeEnum.SCAN;
                                                typeNumber = "consectetur";
                                            }};,                 new InstructedAmountRequest("corporis", "harum");, "http://babyish-tortoise.net") {{
                                creditorAccount = "1ea42655-5ba3-4c28-b44e-d53b88f3a8d8";
                                creditorObject = new CreditorAccountWriteRequest("hic", "exercitationem", "nobis") {{
                                    addressCountry = AddressCountryEnumEnum.AT;
                                    addressStreet = "rerum";
                                    agent = "sed";
                                    agentName = "reiciendis";
                                    institutionId = "explicabo";
                                    postCode = "74706-2614";
                                    type = CreditorAccountWriteRequestTypeEnum.IBAN;
                                }};;
                                customPaymentId = "quidem";
                                description = "explicabo";
                                institutionId = "voluptas";
                                paymentProduct = "unde";
                            }};, "16fe1f08-f429-44e3-a98f-447f603e8b44");            

            PaymentsSubmitCreateMultipartResponse res = sdk.payments.paymentsSubmitCreateMultipart(req);

            if (res.paymentRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAllPaymentCreditorAccounts

Retrieve all payment creditor accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAllPaymentCreditorAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAllPaymentCreditorAccountsResponse res = sdk.payments.retrieveAllPaymentCreditorAccounts();

            if (res.creditorAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrievePayment

Retrieve payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievePaymentRequest;
import org.openapis.openapi.models.operations.RetrievePaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrievePaymentRequest req = new RetrievePaymentRequest("80ca55ef-d20e-4457-a185-8b6a89fbe3a5");            

            RetrievePaymentResponse res = sdk.payments.retrievePayment(req);

            if (res.paymentRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
