# externaltransactions

### Available Operations

* [androidpublisherExternaltransactionsCreateexternaltransaction](#androidpublisherexternaltransactionscreateexternaltransaction) - Creates a new external transaction.
* [androidpublisherExternaltransactionsGetexternaltransaction](#androidpublisherexternaltransactionsgetexternaltransaction) - Gets an existing external transaction.
* [androidpublisherExternaltransactionsRefundexternaltransaction](#androidpublisherexternaltransactionsrefundexternaltransaction) - Refunds or partially refunds an existing external transaction.

## androidpublisherExternaltransactionsCreateexternaltransaction

Creates a new external transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsCreateexternaltransactionRequest;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsCreateexternaltransactionResponse;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsCreateexternaltransactionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExternalSubscription;
import org.openapis.openapi.models.shared.ExternalSubscriptionSubscriptionTypeEnum;
import org.openapis.openapi.models.shared.ExternalTransactionAddress;
import org.openapis.openapi.models.shared.ExternalTransactionInput;
import org.openapis.openapi.models.shared.OneTimeExternalTransaction;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RecurringExternalTransaction;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherExternaltransactionsCreateexternaltransactionRequest req = new AndroidpublisherExternaltransactionsCreateexternaltransactionRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                externalTransactionInput = new ExternalTransactionInput() {{
                    currentPreTaxAmount = new Price() {{
                        currency = "sapiente";
                        priceMicros = "officiis";
                    }};;
                    currentTaxAmount = new Price() {{
                        currency = "architecto";
                        priceMicros = "fuga";
                    }};;
                    oneTimeTransaction = new OneTimeExternalTransaction() {{
                        externalTransactionToken = "pariatur";
                    }};;
                    originalPreTaxAmount = new Price() {{
                        currency = "debitis";
                        priceMicros = "voluptatem";
                    }};;
                    originalTaxAmount = new Price() {{
                        currency = "alias";
                        priceMicros = "deleniti";
                    }};;
                    recurringTransaction = new RecurringExternalTransaction() {{
                        externalSubscription = new ExternalSubscription() {{
                            subscriptionType = ExternalSubscriptionSubscriptionTypeEnum.PREPAID;
                        }};;
                        externalTransactionToken = "ex";
                        initialExternalTransactionId = "sapiente";
                    }};;
                    testPurchase = new java.util.HashMap<String, Object>() {{
                        put("minus", "nemo");
                        put("asperiores", "ratione");
                        put("ullam", "perferendis");
                    }};
                    transactionTime = "illum";
                    userTaxAddress = new ExternalTransactionAddress() {{
                        regionCode = "totam";
                    }};;
                }};;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "nam";
                externalTransactionId = "ipsam";
                fields = "culpa";
                key = "dolor";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "deleniti";
                uploadProtocol = "veritatis";
            }};            

            AndroidpublisherExternaltransactionsCreateexternaltransactionResponse res = sdk.externaltransactions.androidpublisherExternaltransactionsCreateexternaltransaction(req, new AndroidpublisherExternaltransactionsCreateexternaltransactionSecurity("tempora", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.externalTransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherExternaltransactionsGetexternaltransaction

Gets an existing external transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsGetexternaltransactionRequest;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsGetexternaltransactionResponse;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsGetexternaltransactionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherExternaltransactionsGetexternaltransactionRequest req = new AndroidpublisherExternaltransactionsGetexternaltransactionRequest("consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "ab";
                key = "laudantium";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "fugiat";
                uploadProtocol = "ipsam";
            }};            

            AndroidpublisherExternaltransactionsGetexternaltransactionResponse res = sdk.externaltransactions.androidpublisherExternaltransactionsGetexternaltransaction(req, new AndroidpublisherExternaltransactionsGetexternaltransactionSecurity("consequuntur", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.externalTransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherExternaltransactionsRefundexternaltransaction

Refunds or partially refunds an existing external transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsRefundexternaltransactionRequest;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsRefundexternaltransactionResponse;
import org.openapis.openapi.models.operations.AndroidpublisherExternaltransactionsRefundexternaltransactionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PartialRefund;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RefundExternalTransactionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherExternaltransactionsRefundexternaltransactionRequest req = new AndroidpublisherExternaltransactionsRefundexternaltransactionRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                refundExternalTransactionRequest = new RefundExternalTransactionRequest() {{
                    fullRefund = new java.util.HashMap<String, Object>() {{
                        put("officiis", "esse");
                        put("necessitatibus", "sed");
                        put("veniam", "nesciunt");
                        put("expedita", "eum");
                    }};
                    partialRefund = new PartialRefund() {{
                        refundId = "vel";
                        refundPreTaxAmount = new Price() {{
                            currency = "voluptatum";
                            priceMicros = "magnam";
                        }};;
                    }};;
                    refundTime = "exercitationem";
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "nobis";
                key = "laboriosam";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "voluptatem";
                uploadProtocol = "exercitationem";
            }};            

            AndroidpublisherExternaltransactionsRefundexternaltransactionResponse res = sdk.externaltransactions.androidpublisherExternaltransactionsRefundexternaltransaction(req, new AndroidpublisherExternaltransactionsRefundexternaltransactionSecurity("necessitatibus", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.externalTransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
