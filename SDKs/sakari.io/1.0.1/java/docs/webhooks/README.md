# webhooks

## Overview

Webhooks allow your own system to be automatically notified upon certin events, such as a new message received from one of your contacts or a status change notification for your messages

### Available Operations

* [webhooksFetchAll](#webhooksfetchall) - Fetch active webhooks
* [webhooksSubscribe](#webhookssubscribe) - Subscribe to message events
* [webhooksUnsubscribe](#webhooksunsubscribe) - Unsubscribe to message events

## webhooksFetchAll

When messages are acknowledge by carriers, a notification is sent to the specified URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksFetchAllRequest;
import org.openapis.openapi.models.operations.WebhooksFetchAllResponse;
import org.openapis.openapi.models.operations.WebhooksFetchAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksFetchAllRequest req = new WebhooksFetchAllRequest("pariatur");            

            WebhooksFetchAllResponse res = sdk.webhooks.webhooksFetchAll(req, new WebhooksFetchAllSecurity("maxime") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webhooksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksSubscribe

When messages are acknowledge by carriers, a notification is sent to the specified URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksSubscribeRequest;
import org.openapis.openapi.models.operations.WebhooksSubscribeRequestBody;
import org.openapis.openapi.models.operations.WebhooksSubscribeRequestBodyEventTypesEnum;
import org.openapis.openapi.models.operations.WebhooksSubscribeResponse;
import org.openapis.openapi.models.operations.WebhooksSubscribeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksSubscribeRequest req = new WebhooksSubscribeRequest(                new WebhooksSubscribeRequestBody() {{
                                eventTypes = new org.openapis.openapi.models.operations.WebhooksSubscribeRequestBodyEventTypesEnum[]{{
                                    add(WebhooksSubscribeRequestBodyEventTypesEnum.CONVERSATION_STARTED),
                                    add(WebhooksSubscribeRequestBodyEventTypesEnum.CONTACT_UPDATED),
                                }};
                                url = "https://myserver.com/send/callback/here";
                            }};, "ea");            

            WebhooksSubscribeResponse res = sdk.webhooks.webhooksSubscribe(req, new WebhooksSubscribeSecurity("accusantium") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksUnsubscribe

Delete subscription for receiving notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.callbacks.WebhooksUnsubscribeEventResponse;
import org.openapis.openapi.models.operations.WebhooksUnsubscribeRequest;
import org.openapis.openapi.models.operations.WebhooksUnsubscribeResponse;
import org.openapis.openapi.models.operations.WebhooksUnsubscribeSecurity;
import org.openapis.openapi.models.shared.AccountEventPayload;
import org.openapis.openapi.models.shared.ContactIdentifiers;
import org.openapis.openapi.models.shared.ContactIdentifiersMobile;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.MessageEventPayload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksUnsubscribeRequest req = new WebhooksUnsubscribeRequest("ab", "maiores");            

            WebhooksUnsubscribeResponse res = sdk.webhooks.webhooksUnsubscribe(req, new WebhooksUnsubscribeSecurity("quidem") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
