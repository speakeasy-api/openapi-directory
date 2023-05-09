# webhooks

## Overview

Webhooks provide a mechanism for a configured URL to receive
events when transaction activity occurs on Up. You can think of
webhooks as being like push notifications for your server-side
application.


### Available Operations

* [deleteWebhooksId](#deletewebhooksid) - Delete webhook
* [getWebhooks](#getwebhooks) - List webhooks
* [getWebhooksId](#getwebhooksid) - Retrieve webhook
* [getWebhooksWebhookIdLogs](#getwebhookswebhookidlogs) - List webhook logs
* [postWebhooks](#postwebhooks) - Create webhook
* [postWebhooksWebhookIdPing](#postwebhookswebhookidping) - Ping webhook

## deleteWebhooksId

Delete a specific webhook by providing its unique identifier. Once
deleted, webhook events will no longer be sent to the configured URL.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksIdRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteWebhooksIdRequest req = new DeleteWebhooksIdRequest("ipsam");            

            DeleteWebhooksIdResponse res = sdk.webhooks.deleteWebhooksId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooks

Retrieve a list of configured webhooks. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered oldest first to
newest last.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksRequest;
import org.openapis.openapi.models.operations.GetWebhooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWebhooksRequest req = new GetWebhooksRequest() {{
                pageSize = 420075L;
            }};            

            GetWebhooksResponse res = sdk.webhooks.getWebhooks(req);

            if (res.listWebhooksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksId

Retrieve a specific webhook by providing its unique identifier.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksIdRequest;
import org.openapis.openapi.models.operations.GetWebhooksIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWebhooksIdRequest req = new GetWebhooksIdRequest("eaque");            

            GetWebhooksIdResponse res = sdk.webhooks.getWebhooksId(req);

            if (res.getWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksWebhookIdLogs

Retrieve a list of delivery logs for a webhook by providing its unique
identifier. This is useful for analysis and debugging purposes. The
returned list is [paginated](#pagination) and can be scrolled by
following the `next` and `prev` links where present. Results are ordered
newest first to oldest last. Logs may be automatically purged after a
period of time.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksWebhookIdLogsRequest;
import org.openapis.openapi.models.operations.GetWebhooksWebhookIdLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWebhooksWebhookIdLogsRequest req = new GetWebhooksWebhookIdLogsRequest("nemo") {{
                pageSize = 975522L;
            }};            

            GetWebhooksWebhookIdLogsResponse res = sdk.webhooks.getWebhooksWebhookIdLogs(req);

            if (res.listWebhookDeliveryLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooks

Create a new webhook with a given URL. The URL will receive webhook
events as JSON-encoded `POST` requests. The URL must respond with a HTTP
`200` status on success.

There is currently a limit of 10 webhooks at any given time. Once this
limit is reached, existing webhooks will need to be deleted before new
webhooks can be created.

Event delivery is retried with exponential backoff if the URL is
unreachable or it does not respond with a `200` status. The response
includes a `secretKey` attribute, which is used to sign requests sent to
the webhook URL. It will not be returned from any other endpoints within
the Up API. If the `secretKey` is lost, simply create a new webhook with
the same URL, capture its `secretKey` and then delete the original
webhook. See [Handling webhook events](#callback_post_webhookURL) for
details on how to process webhook events.

It is probably a good idea to test the webhook by
[sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
it.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.callbacks.PostWebhooksEventRequest;
import org.openapis.openapi.models.callbacks.PostWebhooksEventResponse;
import org.openapis.openapi.models.operations.PostWebhooksResponse;
import org.openapis.openapi.models.shared.CreateWebhookRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookEventCallback;
import org.openapis.openapi.models.shared.WebhookEventResource;
import org.openapis.openapi.models.shared.WebhookEventResourceAttributes;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationships;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationshipsTransaction;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationshipsTransactionData;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationshipsTransactionLinks;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationshipsWebhook;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationshipsWebhookData;
import org.openapis.openapi.models.shared.WebhookEventResourceRelationshipsWebhookLinks;
import org.openapis.openapi.models.shared.WebhookEventTypeEnumEnum;
import org.openapis.openapi.models.shared.WebhookInputResource;
import org.openapis.openapi.models.shared.WebhookInputResourceAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateWebhookRequest req = new CreateWebhookRequest(                new WebhookInputResource(                new WebhookInputResourceAttributes("https://embarrassed-advent.net") {{
                                                description = "corporis";
                                            }};););            

            PostWebhooksResponse res = sdk.webhooks.postWebhooks(req);

            if (res.createWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksWebhookIdPing

Send a `PING` event to a webhook by providing its unique identifier.
This is useful for testing and debugging purposes. The event is delivered
asynchronously and its data is returned in the response to this request.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksWebhookIdPingRequest;
import org.openapis.openapi.models.operations.PostWebhooksWebhookIdPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostWebhooksWebhookIdPingRequest req = new PostWebhooksWebhookIdPingRequest("libero");            

            PostWebhooksWebhookIdPingResponse res = sdk.webhooks.postWebhooksWebhookIdPing(req);

            if (res.webhookEventCallback != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
