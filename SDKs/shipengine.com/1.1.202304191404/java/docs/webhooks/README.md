# webhooks

## Overview

[Webhooks](https://www.shipengine.com/docs/tracking/webhooks/) are a powerful feature of ShipEngine that can save you from sending repeated polling requests to check on the state of something.  With webhooks, ShipEngine will automatically contact your servers when the stage changes.  This can include [parcel tracking](https://www.shipengine.com/docs/tracking/) events, notification of the completion of a [batch operation](https://www.shipengine.com/docs/labels/bulk/),  or new [salses orders](https://www.shipengine.com/docs/orders/).


Learn how to setup webhooks and start listening to ShipEngine events.
<https://www.shipengine.com/docs/tracking/webhooks/>
### Available Operations

* [createWebhook](#createwebhook) - Create a Webhook
* [deleteWebhook](#deletewebhook) - Delete Webhook By ID
* [getWebhookById](#getwebhookbyid) - Get Webhook By ID
* [listWebhooks](#listwebhooks) - List Webhooks
* [updateWebhook](#updatewebhook) - Update a Webhook

## createWebhook

Create a webook for specific events in the environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.shared.CreateWebhookRequestBody;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookEventEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateWebhookRequestBody req = new CreateWebhookRequestBody(WebhookEventEnum.BATCH, "http://api.shipengine.com/v1/labels/se-28529731");            

            CreateWebhookResponse res = sdk.webhooks.createWebhook(req);

            if (res.createWebhookResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhook

Delete a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest("se-28529731");            

            DeleteWebhookResponse res = sdk.webhooks.deleteWebhook(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhookById

Retrieve individual webhook by an ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookByIdRequest;
import org.openapis.openapi.models.operations.GetWebhookByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWebhookByIdRequest req = new GetWebhookByIdRequest("se-28529731");            

            GetWebhookByIdResponse res = sdk.webhooks.getWebhookById(req);

            if (res.getWebhookByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhooks

List all webhooks currently enabled for the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWebhooksResponse res = sdk.webhooks.listWebhooks();

            if (res.listWebhooksResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

Update the webhook url property

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWebhookRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest(                new UpdateWebhookRequestBody() {{
                                url = "http://api.shipengine.com/v1/labels/se-28529731";
                            }};, "se-28529731");            

            UpdateWebhookResponse res = sdk.webhooks.updateWebhook(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
