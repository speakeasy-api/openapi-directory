# webhookSubscriptions

## Overview

Webhook Subscriptions

### Available Operations

* [deleteV2WebhookSubscriptionsId](#deletev2webhooksubscriptionsid) - Delete a webhook subscription
* [getV2WebhookSubscriptions](#getv2webhooksubscriptions) - List webhook subscriptions
* [getV2WebhookSubscriptionsId](#getv2webhooksubscriptionsid) - Fetch a webhook subscription
* [postV2WebhookSubscriptions](#postv2webhooksubscriptions) - Create a webhook subscription
* [putV2WebhookSubscriptionsId](#putv2webhooksubscriptionsid) - Update a webhook subscription

## deleteV2WebhookSubscriptionsId

Deletes a webhook subscription. This operation is not reversible without contacting support. This operation can be called multiple times successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2WebhookSubscriptionsIdRequest;
import org.openapis.openapi.models.operations.DeleteV2WebhookSubscriptionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2WebhookSubscriptionsIdRequest req = new DeleteV2WebhookSubscriptionsIdRequest(671794L);            

            DeleteV2WebhookSubscriptionsIdResponse res = sdk.webhookSubscriptions.deleteV2WebhookSubscriptionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2WebhookSubscriptions

Fetches all of the customer's webhook subscriptions for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2WebhookSubscriptionsRequest;
import org.openapis.openapi.models.operations.GetV2WebhookSubscriptionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2WebhookSubscriptionsRequest req = new GetV2WebhookSubscriptionsRequest() {{
                enabled = false;
            }};            

            GetV2WebhookSubscriptionsResponse res = sdk.webhookSubscriptions.getV2WebhookSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2WebhookSubscriptionsId

Fetches a webhook subscription, by ID only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2WebhookSubscriptionsIdRequest;
import org.openapis.openapi.models.operations.GetV2WebhookSubscriptionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2WebhookSubscriptionsIdRequest req = new GetV2WebhookSubscriptionsIdRequest(726343L);            

            GetV2WebhookSubscriptionsIdResponse res = sdk.webhookSubscriptions.getV2WebhookSubscriptionsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2WebhookSubscriptions

Creates a webhook subscription. Visit the <a href="/webhooks.html" target="_blank" rel="noopener noreferrer">webhooks page</a> for additional details and a list of available webhooks.
Request must be made with a valid Oauth token or API key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2WebhookSubscriptionsRequestBody;
import org.openapis.openapi.models.operations.PostV2WebhookSubscriptionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2WebhookSubscriptionsRequestBody req = new PostV2WebhookSubscriptionsRequestBody("ad", "deleniti", "enim");            

            PostV2WebhookSubscriptionsResponse res = sdk.webhookSubscriptions.postV2WebhookSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2WebhookSubscriptionsId

Updates a webhook subscription.
Request must be made with a valid Oauth token or API key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2WebhookSubscriptionsIdRequest;
import org.openapis.openapi.models.operations.PutV2WebhookSubscriptionsIdRequestBody;
import org.openapis.openapi.models.operations.PutV2WebhookSubscriptionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2WebhookSubscriptionsIdRequest req = new PutV2WebhookSubscriptionsIdRequest(110477L) {{
                requestBody = new PutV2WebhookSubscriptionsIdRequestBody() {{
                    enabled = false;
                }};;
            }};            

            PutV2WebhookSubscriptionsIdResponse res = sdk.webhookSubscriptions.putV2WebhookSubscriptionsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
