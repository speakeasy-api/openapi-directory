# payments

### Available Operations

* [cancelPayment](#cancelpayment) - CancelPayment
* [cancelPaymentByIdempotencyKey](#cancelpaymentbyidempotencykey) - CancelPaymentByIdempotencyKey
* [completePayment](#completepayment) - CompletePayment
* [createPayment](#createpayment) - CreatePayment
* [getPayment](#getpayment) - GetPayment
* [updatePayment](#updatepayment) - UpdatePayment
* [getV2Payments](#getv2payments) - ListPayments

## cancelPayment

Cancels (voids) a payment. You can use this endpoint to cancel a payment with 
the APPROVED `status`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelPaymentRequest;
import org.openapis.openapi.models.operations.CancelPaymentResponse;
import org.openapis.openapi.models.operations.CancelPaymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelPaymentRequest req = new CancelPaymentRequest("natus");            

            CancelPaymentResponse res = sdk.payments.cancelPayment(req, new CancelPaymentSecurity("eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelPaymentByIdempotencyKey

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
`CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
returns successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelPaymentByIdempotencyKeyResponse;
import org.openapis.openapi.models.operations.CancelPaymentByIdempotencyKeySecurity;
import org.openapis.openapi.models.shared.CancelPaymentByIdempotencyKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CancelPaymentByIdempotencyKeyRequest req = new CancelPaymentByIdempotencyKeyRequest("alias");            

            CancelPaymentByIdempotencyKeyResponse res = sdk.payments.cancelPaymentByIdempotencyKey(req, new CancelPaymentByIdempotencyKeySecurity("autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelPaymentByIdempotencyKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## completePayment

Completes (captures) a payment.
By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompletePaymentRequest;
import org.openapis.openapi.models.operations.CompletePaymentResponse;
import org.openapis.openapi.models.operations.CompletePaymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompletePaymentRequest req = new CompletePaymentRequest("eligendi");            

            CompletePaymentResponse res = sdk.payments.completePayment(req, new CompletePaymentSecurity("doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.completePaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayment

Creates a payment using the provided source. You can use this endpoint 
to charge a card (credit/debit card or    
Square gift card) or record a payment that the seller received outside of Square 
(cash payment from a buyer or a payment that an external entity 
processed on behalf of the seller).

The endpoint creates a 
`Payment` object and returns it in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentResponse;
import org.openapis.openapi.models.operations.CreatePaymentSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CashPaymentDetails;
import org.openapis.openapi.models.shared.CreatePaymentRequest;
import org.openapis.openapi.models.shared.ExternalPaymentDetails;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePaymentRequest req = new CreatePaymentRequest(                new Money() {{
                                amount = 583013L;
                                currency = "aut";
                            }};, "laborum", "facere") {{
                acceptPartialAuthorization = false;
                appFeeMoney = new Money() {{
                    amount = 624241L;
                    currency = "atque";
                }};;
                autocomplete = false;
                billingAddress = new Address() {{
                    addressLine1 = "unde";
                    addressLine2 = "recusandae";
                    addressLine3 = "architecto";
                    administrativeDistrictLevel1 = "officia";
                    administrativeDistrictLevel2 = "consectetur";
                    administrativeDistrictLevel3 = "tempora";
                    country = "Democratic People's Republic of Korea";
                    firstName = "Audra";
                    lastName = "Harvey";
                    locality = "culpa";
                    organization = "porro";
                    postalCode = "60329-6698";
                    sublocality = "ex";
                    sublocality2 = "saepe";
                    sublocality3 = "dicta";
                }};;
                buyerEmailAddress = "sequi";
                cashDetails = new CashPaymentDetails(                new Money() {{
                                    amount = 648467L;
                                    currency = "aliquid";
                                }};) {{
                    changeBackMoney = new Money() {{
                        amount = 163726L;
                        currency = "quae";
                    }};;
                }};;
                customerId = "saepe";
                delayDuration = "fugit";
                externalDetails = new ExternalPaymentDetails("accusamus", "cupiditate") {{
                    sourceFeeMoney = new Money() {{
                        amount = 73561L;
                        currency = "totam";
                    }};;
                    sourceId = "eligendi";
                }};;
                locationId = "iure";
                note = "quis";
                orderId = "distinctio";
                referenceId = "alias";
                shippingAddress = new Address() {{
                    addressLine1 = "modi";
                    addressLine2 = "rem";
                    addressLine3 = "commodi";
                    administrativeDistrictLevel1 = "minus";
                    administrativeDistrictLevel2 = "earum";
                    administrativeDistrictLevel3 = "amet";
                    country = "Mayotte";
                    firstName = "Jose";
                    lastName = "Parker";
                    locality = "voluptatem";
                    organization = "soluta";
                    postalCode = "42414";
                    sublocality = "quibusdam";
                    sublocality2 = "nulla";
                    sublocality3 = "sint";
                }};;
                statementDescriptionIdentifier = "nemo";
                tipMoney = new Money() {{
                    amount = 793945L;
                    currency = "officiis";
                }};;
                verificationToken = "ipsum";
            }};            

            CreatePaymentResponse res = sdk.payments.createPayment(req, new CreatePaymentSecurity("doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayment

Retrieves details for a specific payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentRequest;
import org.openapis.openapi.models.operations.GetPaymentResponse;
import org.openapis.openapi.models.operations.GetPaymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentRequest req = new GetPaymentRequest("ut");            

            GetPaymentResponse res = sdk.payments.getPayment(req, new GetPaymentSecurity("numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayment

Updates a payment with the APPROVED status.
You can update the `amount_money` and `tip_money` using this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentRequest;
import org.openapis.openapi.models.operations.UpdatePaymentResponse;
import org.openapis.openapi.models.operations.UpdatePaymentSecurity;
import org.openapis.openapi.models.shared.ACHDetails;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BankAccountPaymentDetails;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.CardPaymentDetails;
import org.openapis.openapi.models.shared.CardPaymentTimeline;
import org.openapis.openapi.models.shared.CashPaymentDetails;
import org.openapis.openapi.models.shared.DeviceDetails;
import org.openapis.openapi.models.shared.DigitalWalletDetails;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ExternalPaymentDetails;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.ProcessingFee;
import org.openapis.openapi.models.shared.RiskEvaluation;
import org.openapis.openapi.models.shared.UpdatePaymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentRequest req = new UpdatePaymentRequest(                new UpdatePaymentRequest("distinctio") {{
                                payment = new Payment() {{
                                    amountMoney = new Money() {{
                                        amount = 897389L;
                                        currency = "eius";
                                    }};;
                                    appFeeMoney = new Money() {{
                                        amount = 932771L;
                                        currency = "expedita";
                                    }};;
                                    approvedMoney = new Money() {{
                                        amount = 207675L;
                                        currency = "cum";
                                    }};;
                                    bankAccountDetails = new BankAccountPaymentDetails() {{
                                        accountOwnershipType = "ipsum";
                                        achDetails = new ACHDetails() {{
                                            accountNumberSuffix = "quasi";
                                            accountType = "eligendi";
                                            routingNumber = "cum";
                                        }};;
                                        bankName = "corporis";
                                        country = "Antarctica (the territory South of 60 deg S)";
                                        errors = new org.openapis.openapi.models.shared.Error[]{{
                                            add(new Error("aperiam", "repellendus") {{
                                                category = "quo";
                                                code = "amet";
                                                detail = "et";
                                                field = "aliquam";
                                            }}),
                                        }};
                                        fingerprint = "deleniti";
                                        statementDescription = "esse";
                                        transferType = "iusto";
                                    }};;
                                    billingAddress = new Address() {{
                                        addressLine1 = "explicabo";
                                        addressLine2 = "cumque";
                                        addressLine3 = "ipsam";
                                        administrativeDistrictLevel1 = "consectetur";
                                        administrativeDistrictLevel2 = "ad";
                                        administrativeDistrictLevel3 = "itaque";
                                        country = "Barbados";
                                        firstName = "Reese";
                                        lastName = "Senger";
                                        locality = "ea";
                                        organization = "tempore";
                                        postalCode = "42723-2965";
                                        sublocality = "sequi";
                                        sublocality2 = "vitae";
                                        sublocality3 = "accusamus";
                                    }};;
                                    buyerEmailAddress = "molestiae";
                                    capabilities = new String[]{{
                                        add("corporis"),
                                        add("tenetur"),
                                        add("accusantium"),
                                    }};
                                    cardDetails = new CardPaymentDetails() {{
                                        applicationCryptogram = "debitis";
                                        applicationIdentifier = "exercitationem";
                                        applicationName = "ducimus";
                                        authResultCode = "voluptatibus";
                                        avsStatus = "enim";
                                        card = new Card() {{
                                            billingAddress = new Address() {{
                                                addressLine1 = "eius";
                                                addressLine2 = "necessitatibus";
                                                addressLine3 = "nam";
                                                administrativeDistrictLevel1 = "delectus";
                                                administrativeDistrictLevel2 = "quia";
                                                administrativeDistrictLevel3 = "pariatur";
                                                country = "Chad";
                                                firstName = "Mozelle";
                                                lastName = "Gulgowski";
                                                locality = "laboriosam";
                                                organization = "aut";
                                                postalCode = "49962-2658";
                                                sublocality = "reiciendis";
                                                sublocality2 = "earum";
                                                sublocality3 = "incidunt";
                                            }};;
                                            bin = "sit";
                                            cardBrand = "cumque";
                                            cardType = "quibusdam";
                                            cardholderName = "quibusdam";
                                            customerId = "inventore";
                                            enabled = false;
                                            expMonth = 529353L;
                                            expYear = 313386L;
                                            fingerprint = "perferendis";
                                            id = "bf5a0cbc-8b78-460a-bea6-c635132d5308";
                                            last4 = "voluptas";
                                            prepaidType = "porro";
                                            referenceId = "illo";
                                            version = 25794L;
                                        }};;
                                        cardPaymentTimeline = new CardPaymentTimeline() {{
                                            authorizedAt = "culpa";
                                            capturedAt = "blanditiis";
                                            voidedAt = "quaerat";
                                        }};;
                                        cvvStatus = "ex";
                                        deviceDetails = new DeviceDetails() {{
                                            deviceId = "dolorum";
                                            deviceInstallationId = "illo";
                                            deviceName = "perspiciatis";
                                        }};;
                                        entryMethod = "possimus";
                                        errors = new org.openapis.openapi.models.shared.Error[]{{
                                            add(new Error("laborum", "omnis") {{
                                                category = "ex";
                                                code = "nisi";
                                                detail = "ipsam";
                                                field = "facilis";
                                            }}),
                                            add(new Error("molestias", "reprehenderit") {{
                                                category = "reprehenderit";
                                                code = "qui";
                                                detail = "ipsam";
                                                field = "perspiciatis";
                                            }}),
                                        }};
                                        refundRequiresCardPresence = false;
                                        statementDescription = "corporis";
                                        status = "at";
                                        verificationMethod = "eligendi";
                                        verificationResults = "consequatur";
                                    }};;
                                    cashDetails = new CashPaymentDetails(                new Money() {{
                                                        amount = 758285L;
                                                        currency = "vero";
                                                    }};) {{
                                        changeBackMoney = new Money() {{
                                            amount = 755041L;
                                            currency = "facilis";
                                        }};;
                                    }};;
                                    createdAt = "quisquam";
                                    customerId = "in";
                                    delayAction = "atque";
                                    delayDuration = "libero";
                                    delayedUntil = "possimus";
                                    employeeId = "fugit";
                                    externalDetails = new ExternalPaymentDetails("modi", "rem") {{
                                        sourceFeeMoney = new Money() {{
                                            amount = 914395L;
                                            currency = "cumque";
                                        }};;
                                        sourceId = "ex";
                                    }};;
                                    id = "e8b240b1-c06c-49c0-a49d-2bdd9e58ddb1";
                                    locationId = "autem";
                                    note = "voluptas";
                                    orderId = "nemo";
                                    processingFee = new org.openapis.openapi.models.shared.ProcessingFee[]{{
                                        add(new ProcessingFee() {{
                                            amountMoney = new Money() {{
                                                amount = 201515L;
                                                currency = "illo";
                                            }};
                                            effectiveAt = "dolores";
                                            type = "cumque";
                                        }}),
                                        add(new ProcessingFee() {{
                                            amountMoney = new Money() {{
                                                amount = 451484L;
                                                currency = "delectus";
                                            }};
                                            effectiveAt = "ipsam";
                                            type = "ullam";
                                        }}),
                                        add(new ProcessingFee() {{
                                            amountMoney = new Money() {{
                                                amount = 61387L;
                                                currency = "at";
                                            }};
                                            effectiveAt = "quaerat";
                                            type = "iusto";
                                        }}),
                                        add(new ProcessingFee() {{
                                            amountMoney = new Money() {{
                                                amount = 133739L;
                                                currency = "sunt";
                                            }};
                                            effectiveAt = "quod";
                                            type = "veritatis";
                                        }}),
                                    }};
                                    receiptNumber = "iusto";
                                    receiptUrl = "aliquid";
                                    referenceId = "qui";
                                    refundIds = new String[]{{
                                        add("consequuntur"),
                                        add("nulla"),
                                        add("facere"),
                                    }};
                                    refundedMoney = new Money() {{
                                        amount = 451304L;
                                        currency = "quas";
                                    }};;
                                    riskEvaluation = new RiskEvaluation() {{
                                        createdAt = "molestiae";
                                        riskLevel = "blanditiis";
                                    }};;
                                    shippingAddress = new Address() {{
                                        addressLine1 = "necessitatibus";
                                        addressLine2 = "in";
                                        addressLine3 = "dicta";
                                        administrativeDistrictLevel1 = "soluta";
                                        administrativeDistrictLevel2 = "delectus";
                                        administrativeDistrictLevel3 = "quos";
                                        country = "Sao Tome and Principe";
                                        firstName = "Blaise";
                                        lastName = "Funk";
                                        locality = "ab";
                                        organization = "quos";
                                        postalCode = "19809";
                                        sublocality = "deleniti";
                                        sublocality2 = "voluptate";
                                        sublocality3 = "repudiandae";
                                    }};;
                                    sourceType = "id";
                                    statementDescriptionIdentifier = "illo";
                                    status = "aut";
                                    tipMoney = new Money() {{
                                        amount = 190258L;
                                        currency = "deserunt";
                                    }};;
                                    totalMoney = new Money() {{
                                        amount = 620988L;
                                        currency = "voluptatum";
                                    }};;
                                    updatedAt = "aut";
                                    versionToken = "laboriosam";
                                    walletDetails = new DigitalWalletDetails() {{
                                        status = "recusandae";
                                    }};;
                                }};;
                            }};, "laborum");            

            UpdatePaymentResponse res = sdk.payments.updatePayment(req, new UpdatePaymentSecurity("beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updatePaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Payments

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several
seconds to appear.

The maximum results per page is 100.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PaymentsRequest;
import org.openapis.openapi.models.operations.GetV2PaymentsResponse;
import org.openapis.openapi.models.operations.GetV2PaymentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PaymentsRequest req = new GetV2PaymentsRequest() {{
                beginTime = "commodi";
                cardBrand = "ipsa";
                cursor = "suscipit";
                endTime = "ratione";
                last4 = "cupiditate";
                limit = 610345L;
                locationId = "accusamus";
                sortOrder = "hic";
                total = 104728L;
            }};            

            GetV2PaymentsResponse res = sdk.payments.getV2Payments(req, new GetV2PaymentsSecurity("iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPaymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
