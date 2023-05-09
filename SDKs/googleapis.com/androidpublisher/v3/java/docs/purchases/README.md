# purchases

### Available Operations

* [androidpublisherPurchasesProductsAcknowledge](#androidpublisherpurchasesproductsacknowledge) - Acknowledges a purchase of an inapp item.
* [androidpublisherPurchasesProductsConsume](#androidpublisherpurchasesproductsconsume) - Consumes a purchase for an inapp item.
* [androidpublisherPurchasesProductsGet](#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [androidpublisherPurchasesSubscriptionsAcknowledge](#androidpublisherpurchasessubscriptionsacknowledge) - Acknowledges a subscription purchase.
* [androidpublisherPurchasesSubscriptionsCancel](#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesSubscriptionsDefer](#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [androidpublisherPurchasesSubscriptionsGet](#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [androidpublisherPurchasesSubscriptionsRefund](#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [androidpublisherPurchasesSubscriptionsRevoke](#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [androidpublisherPurchasesSubscriptionsv2Get](#androidpublisherpurchasessubscriptionsv2get) - Get metadata about a subscription
* [androidpublisherPurchasesVoidedpurchasesList](#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

## androidpublisherPurchasesProductsAcknowledge

Acknowledges a purchase of an inapp item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsAcknowledgeRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsAcknowledgeResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsAcknowledgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProductPurchasesAcknowledgeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesProductsAcknowledgeRequest req = new AndroidpublisherPurchasesProductsAcknowledgeRequest("quasi", "blanditiis", "eius") {{
                dollarXgafv = XgafvEnum.TWO;
                productPurchasesAcknowledgeRequest = new ProductPurchasesAcknowledgeRequest() {{
                    developerPayload = "eos";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "quia";
                key = "magnam";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quos";
                uploadProtocol = "corrupti";
            }};            

            AndroidpublisherPurchasesProductsAcknowledgeResponse res = sdk.purchases.androidpublisherPurchasesProductsAcknowledge(req, new AndroidpublisherPurchasesProductsAcknowledgeSecurity("amet", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherPurchasesProductsConsume

Consumes a purchase for an inapp item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsConsumeRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsConsumeResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsConsumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesProductsConsumeRequest req = new AndroidpublisherPurchasesProductsConsumeRequest("amet", "laborum", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "dolore";
                key = "sunt";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "odit";
                uploadProtocol = "earum";
            }};            

            AndroidpublisherPurchasesProductsConsumeResponse res = sdk.purchases.androidpublisherPurchasesProductsConsume(req, new AndroidpublisherPurchasesProductsConsumeSecurity("veniam", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherPurchasesProductsGet

Checks the purchase and consumption status of an inapp item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesProductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesProductsGetRequest req = new AndroidpublisherPurchasesProductsGetRequest("eaque", "exercitationem", "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "tenetur";
                fields = "quis";
                key = "quibusdam";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "pariatur";
                uploadProtocol = "sit";
            }};            

            AndroidpublisherPurchasesProductsGetResponse res = sdk.purchases.androidpublisherPurchasesProductsGet(req, new AndroidpublisherPurchasesProductsGetSecurity("quidem", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productPurchase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherPurchasesSubscriptionsAcknowledge

Acknowledges a subscription purchase.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubscriptionPurchasesAcknowledgeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest req = new AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest("perferendis", "id", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                subscriptionPurchasesAcknowledgeRequest = new SubscriptionPurchasesAcknowledgeRequest() {{
                    developerPayload = "possimus";
                }};;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "adipisci";
                key = "pariatur";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "voluptatibus";
                uploadProtocol = "iure";
            }};            

            AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsAcknowledge(req, new AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity("explicabo", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherPurchasesSubscriptionsCancel

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsCancelRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsCancelResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsCancelRequest req = new AndroidpublisherPurchasesSubscriptionsCancelRequest("soluta", "dolorum", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "quasi";
                key = "mollitia";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "cumque";
                uploadProtocol = "doloremque";
            }};            

            AndroidpublisherPurchasesSubscriptionsCancelResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsCancel(req, new AndroidpublisherPurchasesSubscriptionsCancelSecurity("expedita", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherPurchasesSubscriptionsDefer

Defers a user's subscription purchase until a specified future expiration time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsDeferRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsDeferResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsDeferSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubscriptionDeferralInfo;
import org.openapis.openapi.models.shared.SubscriptionPurchasesDeferRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsDeferRequest req = new AndroidpublisherPurchasesSubscriptionsDeferRequest("eaque", "deserunt", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                subscriptionPurchasesDeferRequest = new SubscriptionPurchasesDeferRequest() {{
                    deferralInfo = new SubscriptionDeferralInfo() {{
                        desiredExpiryTimeMillis = "magni";
                        expectedExpiryTimeMillis = "tempora";
                    }};;
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "sed";
                key = "accusamus";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "minus";
                uploadProtocol = "quo";
            }};            

            AndroidpublisherPurchasesSubscriptionsDeferResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsDefer(req, new AndroidpublisherPurchasesSubscriptionsDeferSecurity("quos", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionPurchasesDeferResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherPurchasesSubscriptionsGet

Checks whether a user's subscription purchase is valid and returns its expiry time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsGetRequest req = new AndroidpublisherPurchasesSubscriptionsGetRequest("voluptatum", "iste", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "nostrum";
                key = "at";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "pariatur";
                uploadProtocol = "vel";
            }};            

            AndroidpublisherPurchasesSubscriptionsGetResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsGet(req, new AndroidpublisherPurchasesSubscriptionsGetSecurity("sapiente", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionPurchase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherPurchasesSubscriptionsRefund

Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsRefundRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsRefundResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsRefundSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsRefundRequest req = new AndroidpublisherPurchasesSubscriptionsRefundRequest("quae", "quos", "aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "quisquam";
                key = "quas";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "inventore";
                uploadProtocol = "aliquid";
            }};            

            AndroidpublisherPurchasesSubscriptionsRefundResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsRefund(req, new AndroidpublisherPurchasesSubscriptionsRefundSecurity("laudantium", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherPurchasesSubscriptionsRevoke

Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsRevokeRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsRevokeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsRevokeRequest req = new AndroidpublisherPurchasesSubscriptionsRevokeRequest("dolor", "aliquid", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "adipisci";
                key = "recusandae";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "numquam";
                uploadProtocol = "sequi";
            }};            

            AndroidpublisherPurchasesSubscriptionsRevokeResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsRevoke(req, new AndroidpublisherPurchasesSubscriptionsRevokeSecurity("voluptatum", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherPurchasesSubscriptionsv2Get

Get metadata about a subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsv2GetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsv2GetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesSubscriptionsv2GetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsv2GetRequest req = new AndroidpublisherPurchasesSubscriptionsv2GetRequest("rerum", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "porro";
                key = "deserunt";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "voluptas";
                uploadProtocol = "animi";
            }};            

            AndroidpublisherPurchasesSubscriptionsv2GetResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsv2Get(req, new AndroidpublisherPurchasesSubscriptionsv2GetSecurity("commodi", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionPurchaseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherPurchasesVoidedpurchasesList

Lists the purchases that were canceled, refunded or charged-back.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesVoidedpurchasesListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesVoidedpurchasesListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesVoidedpurchasesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesVoidedpurchasesListRequest req = new AndroidpublisherPurchasesVoidedpurchasesListRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                endTime = "iste";
                fields = "ullam";
                key = "eligendi";
                maxResults = 810302L;
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "occaecati";
                startIndex = 600934L;
                startTime = "illo";
                token = "nihil";
                type = 78246L;
                uploadType = "libero";
                uploadProtocol = "ipsam";
            }};            

            AndroidpublisherPurchasesVoidedpurchasesListResponse res = sdk.purchases.androidpublisherPurchasesVoidedpurchasesList(req, new AndroidpublisherPurchasesVoidedpurchasesListSecurity("quasi", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.voidedPurchasesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
