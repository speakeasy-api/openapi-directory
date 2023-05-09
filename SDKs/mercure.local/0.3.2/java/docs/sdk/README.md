# SDK

## Overview

[Mercure](https://mercure.rocks) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.

The Mercure protocol specification
<https://mercure.rocks/spec>
### Available Operations

* [getWellKnownMercure](#getwellknownmercure) - Subscribe to updates
* [getWellKnownMercureSubscriptions](#getwellknownmercuresubscriptions) - Active subscriptions
* [getWellKnownMercureSubscriptionsTopic](#getwellknownmercuresubscriptionstopic) - Active subscriptions for the given topic
* [getWellKnownMercureSubscriptionsTopicSubscriber](#getwellknownmercuresubscriptionstopicsubscriber) - Active subscription for the given topic and subscriber
* [postWellKnownMercure](#postwellknownmercure) - Publish an update

## getWellKnownMercure

Subscribe to updates

Subscription specification
<https://mercure.rocks/spec#subscription>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWellKnownMercureRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWellKnownMercureRequest req = new GetWellKnownMercureRequest(                new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }}) {{
                lastEventID = "deserunt";
                lastEventIDQueryParameter = "suscipit";
            }};            

            GetWellKnownMercureResponse res = sdk.sdk.getWellKnownMercure(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWellKnownMercureSubscriptions

Active subscriptions

Subscription API
<https://mercure.rocks/spec#subscription-api>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWellKnownMercureSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWellKnownMercureSubscriptionsResponse res = sdk.sdk.getWellKnownMercureSubscriptions();

            if (res.subscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWellKnownMercureSubscriptionsTopic

Active subscriptions for the given topic

Subscription API
<https://mercure.rocks/spec#subscription-api>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWellKnownMercureSubscriptionsTopicRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureSubscriptionsTopicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWellKnownMercureSubscriptionsTopicRequest req = new GetWellKnownMercureSubscriptionsTopicRequest("iure");            

            GetWellKnownMercureSubscriptionsTopicResponse res = sdk.sdk.getWellKnownMercureSubscriptionsTopic(req);

            if (res.subscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWellKnownMercureSubscriptionsTopicSubscriber

Active subscription for the given topic and subscriber

Subscription API
<https://mercure.rocks/spec#active-subscriptions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWellKnownMercureSubscriptionsTopicSubscriberRequest req = new GetWellKnownMercureSubscriptionsTopicSubscriberRequest("magnam", "debitis");            

            GetWellKnownMercureSubscriptionsTopicSubscriberResponse res = sdk.sdk.getWellKnownMercureSubscriptionsTopicSubscriber(req);

            if (res.subscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWellKnownMercure

Publish an update

Publishing specification
<https://mercure.rocks/spec#publication>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWellKnownMercureRequestBody;
import org.openapis.openapi.models.operations.PostWellKnownMercureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostWellKnownMercureRequestBody req = new PostWellKnownMercureRequestBody("ipsa",                 new String[]{{
                                add("tempora"),
                                add("suscipit"),
                                add("molestiae"),
                                add("minus"),
                            }}) {{
                id = "c8796ed1-51a0-45df-82dd-f7cc78ca1ba9";
                private_ = false;
                retry = 143353L;
                type = "deleniti";
            }};            

            PostWellKnownMercureResponse res = sdk.sdk.postWellKnownMercure(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
