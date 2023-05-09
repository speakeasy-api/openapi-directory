# purchases

### Available Operations

* [androidpublisherPurchasesProductsGet](#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [androidpublisherPurchasesSubscriptionsCancel](#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesSubscriptionsDefer](#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [androidpublisherPurchasesSubscriptionsGet](#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [androidpublisherPurchasesSubscriptionsRefund](#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [androidpublisherPurchasesSubscriptionsRevoke](#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [androidpublisherPurchasesVoidedpurchasesList](#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesProductsGetRequest req = new AndroidpublisherPurchasesProductsGetRequest("occaecati", "commodi", "sapiente") {{
                alt = AltEnum.JSON;
                fields = "dolores";
                key = "deserunt";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "accusantium";
                userIp = "porro";
            }};            

            AndroidpublisherPurchasesProductsGetResponse res = sdk.purchases.androidpublisherPurchasesProductsGet(req, new AndroidpublisherPurchasesProductsGetSecurity("eum", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsCancelRequest req = new AndroidpublisherPurchasesSubscriptionsCancelRequest("praesentium", "consequuntur", "deleniti") {{
                alt = AltEnum.JSON;
                fields = "fugit";
                key = "fuga";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "incidunt";
                userIp = "atque";
            }};            

            AndroidpublisherPurchasesSubscriptionsCancelResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsCancel(req, new AndroidpublisherPurchasesSubscriptionsCancelSecurity("explicabo", "minima") {{
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsDeferRequest req = new AndroidpublisherPurchasesSubscriptionsDeferRequest("nisi", "fugit", "sapiente") {{
                subscriptionPurchasesDeferRequest = new SubscriptionPurchasesDeferRequest() {{
                    deferralInfo = new SubscriptionDeferralInfo() {{
                        desiredExpiryTimeMillis = "consequuntur";
                        expectedExpiryTimeMillis = "ratione";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "explicabo";
                key = "saepe";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "atque";
                userIp = "et";
            }};            

            AndroidpublisherPurchasesSubscriptionsDeferResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsDefer(req, new AndroidpublisherPurchasesSubscriptionsDeferSecurity("esse", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsGetRequest req = new AndroidpublisherPurchasesSubscriptionsGetRequest("accusamus", "veritatis", "esse") {{
                alt = AltEnum.JSON;
                fields = "quod";
                key = "nam";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "quasi";
            }};            

            AndroidpublisherPurchasesSubscriptionsGetResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsGet(req, new AndroidpublisherPurchasesSubscriptionsGetSecurity("saepe", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsRefundRequest req = new AndroidpublisherPurchasesSubscriptionsRefundRequest("harum", "molestiae", "rerum") {{
                alt = AltEnum.JSON;
                fields = "occaecati";
                key = "minima";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eligendi";
                userIp = "sit";
            }};            

            AndroidpublisherPurchasesSubscriptionsRefundResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsRefund(req, new AndroidpublisherPurchasesSubscriptionsRefundSecurity("culpa", "tempore") {{
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesSubscriptionsRevokeRequest req = new AndroidpublisherPurchasesSubscriptionsRevokeRequest("adipisci", "cumque", "consequuntur") {{
                alt = AltEnum.JSON;
                fields = "consequatur";
                key = "minus";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "sapiente";
                userIp = "consectetur";
            }};            

            AndroidpublisherPurchasesSubscriptionsRevokeResponse res = sdk.purchases.androidpublisherPurchasesSubscriptionsRevoke(req, new AndroidpublisherPurchasesSubscriptionsRevokeSecurity("esse", "blanditiis") {{
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesVoidedpurchasesListRequest req = new AndroidpublisherPurchasesVoidedpurchasesListRequest("provident") {{
                alt = AltEnum.JSON;
                endTime = "a";
                fields = "nulla";
                key = "quas";
                maxResults = 457223L;
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "a";
                startIndex = 621679L;
                startTime = "sint";
                token = "pariatur";
                userIp = "possimus";
            }};            

            AndroidpublisherPurchasesVoidedpurchasesListResponse res = sdk.purchases.androidpublisherPurchasesVoidedpurchasesList(req, new AndroidpublisherPurchasesVoidedpurchasesListSecurity("quia", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
