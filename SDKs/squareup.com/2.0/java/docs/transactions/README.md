# transactions

### Available Operations

* [captureTransaction](#capturetransaction) - CaptureTransaction
* [charge](#charge) - Charge
* [listTransactions](#listtransactions) - ListTransactions
* [retrieveTransaction](#retrievetransaction) - RetrieveTransaction
* [voidTransaction](#voidtransaction) - VoidTransaction
* [getV2LocationsLocationIdRefunds](#getv2locationslocationidrefunds) - ListRefunds
* [postV2LocationsLocationIdTransactionsTransactionIdRefund](#postv2locationslocationidtransactionstransactionidrefund) - CreateRefund

## captureTransaction

Captures a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CaptureTransactionRequest;
import org.openapis.openapi.models.operations.CaptureTransactionResponse;
import org.openapis.openapi.models.operations.CaptureTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CaptureTransactionRequest req = new CaptureTransactionRequest("voluptatibus", "nulla");            

            CaptureTransactionResponse res = sdk.transactions.captureTransaction(req, new CaptureTransactionSecurity("eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.captureTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## charge

Charges a card represented by a card nonce or a customer's card on file.

Your request to this endpoint must include _either_:

- A value for the `card_nonce` parameter (to charge a card payment token generated
with the Web Payments SDK)
- Values for the `customer_card_id` and `customer_id` parameters (to charge
a customer's card on file)

In order for an eCommerce payment to potentially qualify for
[Square chargeback protection](https://squareup.com/help/article/5394), you
_must_ provide values for the following parameters in your request:

- `buyer_email_address`
- At least one of `billing_address` or `shipping_address`

When this response is returned, the amount of Square's processing fee might not yet be
calculated. To obtain the processing fee, wait about ten seconds and call
[RetrieveTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/retrieve-transaction). See the `processing_fee_money`
field of each [Tender included](https://developer.squareup.com/reference/square_2021-08-18/objects/Tender) in the transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChargeRequest;
import org.openapis.openapi.models.operations.ChargeResponse;
import org.openapis.openapi.models.operations.ChargeSecurity;
import org.openapis.openapi.models.shared.AdditionalRecipient;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.ChargeRequest;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChargeRequest req = new ChargeRequest(                new ChargeRequest(                new Money() {{
                                                amount = 242384L;
                                                currency = "molestiae";
                                            }};, "molestiae") {{
                                additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                    add(new AdditionalRecipient(                new Money() {{
                                                        amount = 872276L;
                                                        currency = "deleniti";
                                                    }};, "nemo") {{
                                        amountMoney = new Money() {{
                                            amount = 278284L;
                                            currency = "consectetur";
                                        }};
                                        description = "exercitationem";
                                        locationId = "aut";
                                        receivableId = "officiis";
                                    }}),
                                }};
                                billingAddress = new Address() {{
                                    addressLine1 = "dolorum";
                                    addressLine2 = "odio";
                                    addressLine3 = "delectus";
                                    administrativeDistrictLevel1 = "rem";
                                    administrativeDistrictLevel2 = "placeat";
                                    administrativeDistrictLevel3 = "minus";
                                    country = "Cayman Islands";
                                    firstName = "Letitia";
                                    lastName = "Bogan";
                                    locality = "ab";
                                    organization = "dolorum";
                                    postalCode = "64878";
                                    sublocality = "porro";
                                    sublocality2 = "commodi";
                                    sublocality3 = "alias";
                                }};;
                                buyerEmailAddress = "doloremque";
                                cardNonce = "perspiciatis";
                                customerCardId = "sapiente";
                                customerId = "voluptatem";
                                delayCapture = false;
                                note = "sunt";
                                orderId = "temporibus";
                                referenceId = "illum";
                                shippingAddress = new Address() {{
                                    addressLine1 = "adipisci";
                                    addressLine2 = "atque";
                                    addressLine3 = "veniam";
                                    administrativeDistrictLevel1 = "sed";
                                    administrativeDistrictLevel2 = "consectetur";
                                    administrativeDistrictLevel3 = "quo";
                                    country = "Syrian Arab Republic";
                                    firstName = "Maeve";
                                    lastName = "Gutkowski";
                                    locality = "officiis";
                                    organization = "soluta";
                                    postalCode = "69851-9528";
                                    sublocality = "asperiores";
                                    sublocality2 = "iste";
                                    sublocality3 = "quidem";
                                }};;
                                verificationToken = "aut";
                            }};, "minus");            

            ChargeResponse res = sdk.transactions.charge(req, new ChargeSecurity("numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.chargeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTransactions

Lists transactions for a particular location.

Transactions include payment information from sales and exchanges and refund
information from returns and exchanges.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTransactionsRequest;
import org.openapis.openapi.models.operations.ListTransactionsResponse;
import org.openapis.openapi.models.operations.ListTransactionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTransactionsRequest req = new ListTransactionsRequest("vel") {{
                beginTime = "fuga";
                cursor = "eaque";
                endTime = "iste";
                sortOrder = "tempora";
            }};            

            ListTransactionsResponse res = sdk.transactions.listTransactions(req, new ListTransactionsSecurity("necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveTransaction

Retrieves details for a single transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveTransactionRequest;
import org.openapis.openapi.models.operations.RetrieveTransactionResponse;
import org.openapis.openapi.models.operations.RetrieveTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveTransactionRequest req = new RetrieveTransactionRequest("fugit", "recusandae");            

            RetrieveTransactionResponse res = sdk.transactions.retrieveTransaction(req, new RetrieveTransactionSecurity("provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## voidTransaction

Cancels a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VoidTransactionRequest;
import org.openapis.openapi.models.operations.VoidTransactionResponse;
import org.openapis.openapi.models.operations.VoidTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VoidTransactionRequest req = new VoidTransactionRequest("quod", "explicabo");            

            VoidTransactionResponse res = sdk.transactions.voidTransaction(req, new VoidTransactionSecurity("qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.voidTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2LocationsLocationIdRefunds

Lists refunds for one of a business's locations.

In addition to full or partial tender refunds processed through Square APIs,
refunds may result from itemized returns or exchanges through Square's
Point of Sale applications.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2LocationsLocationIdRefundsRequest;
import org.openapis.openapi.models.operations.GetV2LocationsLocationIdRefundsResponse;
import org.openapis.openapi.models.operations.GetV2LocationsLocationIdRefundsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2LocationsLocationIdRefundsRequest req = new GetV2LocationsLocationIdRefundsRequest("aut") {{
                beginTime = "ipsam";
                cursor = "nulla";
                endTime = "delectus";
                sortOrder = "saepe";
            }};            

            GetV2LocationsLocationIdRefundsResponse res = sdk.transactions.getV2LocationsLocationIdRefunds(req, new GetV2LocationsLocationIdRefundsSecurity("odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRefundsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2LocationsLocationIdTransactionsTransactionIdRefund

Initiates a refund for a previously charged tender.

You must issue a refund within 120 days of the associated payment. See
[this article](https://squareup.com/help/us/en/article/5060) for more information
on refund behavior.

NOTE: Card-present transactions with Interac credit cards **cannot be
refunded using the Connect API**. Interac transactions must refunded
in-person (e.g., dipping the card using POS app).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest;
import org.openapis.openapi.models.operations.PostV2LocationsLocationIdTransactionsTransactionIdRefundResponse;
import org.openapis.openapi.models.operations.PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity;
import org.openapis.openapi.models.shared.CreateRefundRequest;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest req = new PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest(                new CreateRefundRequest(                new Money() {{
                                                amount = 385231L;
                                                currency = "veniam";
                                            }};, "libero", "delectus") {{
                                reason = "a";
                            }};, "rerum", "eligendi");            

            PostV2LocationsLocationIdTransactionsTransactionIdRefundResponse res = sdk.transactions.postV2LocationsLocationIdTransactionsTransactionIdRefund(req, new PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity("quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createRefundResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
