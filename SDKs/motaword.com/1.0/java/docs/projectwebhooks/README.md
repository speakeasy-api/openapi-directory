# projectWebhooks

### Available Operations

* [deleteProjectWebhook](#deleteprojectwebhook) - Delete project webhooks
* [getProjectWebhooks](#getprojectwebhooks) - View project webhooks
* [postProjectWebhook](#postprojectwebhook) - Update project webhook
* [updateProjectWebhook](#updateprojectwebhook) - Update project webhook

## deleteProjectWebhook

Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectWebhookRequest;
import org.openapis.openapi.models.operations.DeleteProjectWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteProjectWebhookRequest req = new DeleteProjectWebhookRequest(981640L);            

            DeleteProjectWebhookResponse res = sdk.projectWebhooks.deleteProjectWebhook(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectWebhooks

This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectWebhooksRequest;
import org.openapis.openapi.models.operations.GetProjectWebhooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectWebhooksRequest req = new GetProjectWebhooksRequest(244651L);            

            GetProjectWebhooksResponse res = sdk.projectWebhooks.getProjectWebhooks(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProjectWebhook

Update project webhook URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProjectWebhookRequest;
import org.openapis.openapi.models.operations.PostProjectWebhookResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Webhook;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostProjectWebhookRequest req = new PostProjectWebhookRequest(374323L) {{
                webhook = new Webhook() {{
                    callbackUrl = "asperiores";
                }};;
            }};            

            PostProjectWebhookResponse res = sdk.projectWebhooks.postProjectWebhook(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectWebhook

Update project webhook URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectWebhookRequest;
import org.openapis.openapi.models.operations.UpdateProjectWebhookResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Webhook;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateProjectWebhookRequest req = new UpdateProjectWebhookRequest(409054L) {{
                webhook = new Webhook() {{
                    callbackUrl = "quaerat";
                }};;
            }};            

            UpdateProjectWebhookResponse res = sdk.projectWebhooks.updateProjectWebhook(req);

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
