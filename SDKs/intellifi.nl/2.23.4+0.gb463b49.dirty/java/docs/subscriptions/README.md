# subscriptions

## Overview

The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.

See also the `events` resource.


<https://intellifi.zendesk.com/hc/en-us/sections/360001588534>
### Available Operations

* [addSubscription](#addsubscription) - Create subscription
* [deleteSubscription](#deletesubscription) - Delete subscription
* [getEventsForSubscriptionById](#geteventsforsubscriptionbyid) - Get subscription events
* [getSubscriptionById](#getsubscriptionbyid) - Get subscription
* [getSubscriptions](#getsubscriptions) - Get all subscriptions
* [updateSubscription](#updatesubscription) - Update existing subscription

## addSubscription

Create subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SubscriptionInput req = new SubscriptionInput() {{
                custom = "quos";
                databaseHoldTimeH = 2L;
                description = "Item events";
                populateEvents = false;
                targetRetry = false;
                targetUrl = "aliquid";
                topicFilter = "items/#";
                verifyTargetCertificate = false;
            }};            

            AddSubscriptionResponse res = sdk.subscriptions.addSubscription(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscription

Delete subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriptionRequest req = new DeleteSubscriptionRequest("dolorem");            

            DeleteSubscriptionResponse res = sdk.subscriptions.deleteSubscription(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsForSubscriptionById

Get subscription events

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsForSubscriptionByIdRequest;
import org.openapis.openapi.models.operations.GetEventsForSubscriptionByIdResponse;
import org.openapis.openapi.models.shared.EventTopicActionEnum;
import org.openapis.openapi.models.shared.EventTopicResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventsForSubscriptionByIdRequest req = new GetEventsForSubscriptionByIdRequest("dolorem") {{
                after = OffsetDateTime.parse("2022-10-25T00:56:56.568Z");
                afterId = "ipsum";
                before = "hic";
                beforeId = "excepturi";
                from = "cum";
                fromId = "voluptate";
                idQueryParameter = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                limit = 490459L;
                populate = "reiciendis";
                resultsOnly = false;
                select = "amet";
                sort = "dolorum";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeEvent = "2018-08-30T09:51:59.737Z";
                timeExpire = "2018-08-30T09:51:59.737Z";
                timeoutS = 2543.56;
                topicAction = EventTopicActionEnum.CREATED;
                topicResource = "5b7d6cbd7503c445552a1664";
                topicResourceType = EventTopicResourceTypeEnum.ITEMS;
                until = "veritatis";
                untilId = "ipsa";
            }};            

            GetEventsForSubscriptionByIdResponse res = sdk.subscriptions.getEventsForSubscriptionById(req);

            if (res.getEventsForSubscriptionById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionById

Get subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionByIdRequest;
import org.openapis.openapi.models.operations.GetSubscriptionByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionByIdRequest req = new GetSubscriptionByIdRequest("ipsa");            

            GetSubscriptionByIdResponse res = sdk.subscriptions.getSubscriptionById(req);

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptions

Get all subscriptions

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionsRequest;
import org.openapis.openapi.models.operations.GetSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionsRequest req = new GetSubscriptionsRequest() {{
                after = OffsetDateTime.parse("2022-07-06T22:32:29.592Z");
                afterId = "quaerat";
                before = "accusamus";
                beforeId = "quidem";
                databaseHoldTimeH = 976405L;
                description = "voluptas";
                from = "natus";
                fromId = "eos";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                limit = 542499L;
                populate = "sit";
                populateEvents = false;
                resultsOnly = false;
                select = "fugiat";
                sort = "ab";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 7438.35;
                topicFilter = "dolorum";
                until = "iusto";
                untilId = "voluptate";
                verifyTargetCertificate = false;
            }};            

            GetSubscriptionsResponse res = sdk.subscriptions.getSubscriptions(req);

            if (res.getSubscriptions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscription

Update existing subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionRequest req = new UpdateSubscriptionRequest(                new SubscriptionInput() {{
                                custom = "dolorum";
                                databaseHoldTimeH = 2L;
                                description = "Item events";
                                populateEvents = false;
                                targetRetry = false;
                                targetUrl = "deleniti";
                                topicFilter = "items/#";
                                verifyTargetCertificate = false;
                            }};, "omnis");            

            UpdateSubscriptionResponse res = sdk.subscriptions.updateSubscription(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
