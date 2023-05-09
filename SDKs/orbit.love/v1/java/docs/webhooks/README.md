# webhooks

### Available Operations

* [deleteWorkspaceSlugWebhooksId](#deleteworkspaceslugwebhooksid) - Delete a webhook
* [getWorkspaceSlugWebhooks](#getworkspaceslugwebhooks) - List webhooks in a workspace
* [getWorkspaceSlugWebhooksId](#getworkspaceslugwebhooksid) - Get a webhook
* [postWorkspaceSlugWebhooks](#postworkspaceslugwebhooks) - Create a webhook
* [putWorkspaceSlugWebhooksId](#putworkspaceslugwebhooksid) - Update a webhook

## deleteWorkspaceSlugWebhooksId

Delete a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugWebhooksIdRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugWebhooksIdResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugWebhooksIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugWebhooksIdRequest req = new DeleteWorkspaceSlugWebhooksIdRequest("quis", "nesciunt");            

            DeleteWorkspaceSlugWebhooksIdResponse res = sdk.webhooks.deleteWorkspaceSlugWebhooksId(req, new DeleteWorkspaceSlugWebhooksIdSecurity("eos") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## getWorkspaceSlugWebhooks

List webhooks in a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugWebhooksRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugWebhooksResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugWebhooksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugWebhooksRequest req = new GetWorkspaceSlugWebhooksRequest("perferendis");            

            GetWorkspaceSlugWebhooksResponse res = sdk.webhooks.getWorkspaceSlugWebhooks(req, new GetWorkspaceSlugWebhooksSecurity("dolores") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## getWorkspaceSlugWebhooksId

Get a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugWebhooksIdRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugWebhooksIdResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugWebhooksIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugWebhooksIdRequest req = new GetWorkspaceSlugWebhooksIdRequest("minus", "quam");            

            GetWorkspaceSlugWebhooksIdResponse res = sdk.webhooks.getWorkspaceSlugWebhooksId(req, new GetWorkspaceSlugWebhooksIdSecurity("dolor") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## postWorkspaceSlugWebhooks

Create a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspaceSlugWebhooksRequest;
import org.openapis.openapi.models.operations.PostWorkspaceSlugWebhooksResponse;
import org.openapis.openapi.models.operations.PostWorkspaceSlugWebhooksSecurity;
import org.openapis.openapi.models.shared.WebhookSubscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspaceSlugWebhooksRequest req = new PostWorkspaceSlugWebhooksRequest("vero") {{
                webhookSubscription = new WebhookSubscription("nostrum", "hic", "recusandae") {{
                    activityTags = new String[]{{
                        add("facilis"),
                        add("perspiciatis"),
                        add("voluptatem"),
                    }};
                    activityTypes = new String[]{{
                        add("consequuntur"),
                        add("blanditiis"),
                        add("error"),
                        add("eaque"),
                    }};
                    memberTags = new String[]{{
                        add("rerum"),
                        add("adipisci"),
                        add("asperiores"),
                    }};
                    secret = "earum";
                }};;
            }};            

            PostWorkspaceSlugWebhooksResponse res = sdk.webhooks.postWorkspaceSlugWebhooks(req, new PostWorkspaceSlugWebhooksSecurity("modi") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## putWorkspaceSlugWebhooksId

Update a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspaceSlugWebhooksIdRequest;
import org.openapis.openapi.models.operations.PutWorkspaceSlugWebhooksIdResponse;
import org.openapis.openapi.models.operations.PutWorkspaceSlugWebhooksIdSecurity;
import org.openapis.openapi.models.shared.WebhookSubscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspaceSlugWebhooksIdRequest req = new PutWorkspaceSlugWebhooksIdRequest("iste", "dolorum") {{
                webhookSubscription = new WebhookSubscription("deleniti", "pariatur", "provident") {{
                    activityTags = new String[]{{
                        add("libero"),
                        add("delectus"),
                        add("quaerat"),
                        add("quos"),
                    }};
                    activityTypes = new String[]{{
                        add("dolorem"),
                        add("dolorem"),
                    }};
                    memberTags = new String[]{{
                        add("qui"),
                    }};
                    secret = "ipsum";
                }};;
            }};            

            PutWorkspaceSlugWebhooksIdResponse res = sdk.webhooks.putWorkspaceSlugWebhooksId(req, new PutWorkspaceSlugWebhooksIdSecurity("hic") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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
