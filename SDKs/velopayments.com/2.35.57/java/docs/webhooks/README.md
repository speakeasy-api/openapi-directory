# webhooks

### Available Operations

* [createWebhookV1](#createwebhookv1) - Create Webhook
* [getWebhookV1](#getwebhookv1) - Get details about the given webhook.
* [listWebhooksV1](#listwebhooksv1) - List the details about the webhooks for the given payor.
* [pingWebhookV1](#pingwebhookv1)
* [updateWebhookV1](#updatewebhookv1) - Update Webhook

## createWebhookV1

Create Webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookV1Response;
import org.openapis.openapi.models.shared.CategoryEnum;
import org.openapis.openapi.models.shared.CreateWebhookRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateWebhookRequest req = new CreateWebhookRequest(false, "a87cf535-a6fa-4e54-abf6-0c321f023b75", "temporibus") {{
                authorizationHeader = "ratione";
                categories = new org.openapis.openapi.models.shared.CategoryEnum[]{{
                    add(CategoryEnum.PAYEE),
                }};
            }};            

            CreateWebhookV1Response res = sdk.webhooks.createWebhookV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhookV1

Get details about the given webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookV1Request;
import org.openapis.openapi.models.operations.GetWebhookV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWebhookV1Request req = new GetWebhookV1Request("fe1a0cc8-df79-4f0a-b96d-90c364b7c15d");            

            GetWebhookV1Response res = sdk.webhooks.getWebhookV1(req);

            if (res.webhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhooksV1

List the details about the webhooks for the given payor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhooksV1Request;
import org.openapis.openapi.models.operations.ListWebhooksV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListWebhooksV1Request req = new ListWebhooksV1Request("bace188b-1c4e-4e2c-8c6c-e611feeb1c7c") {{
                page = 717560;
                pageSize = 823341;
            }};            

            ListWebhooksV1Response res = sdk.webhooks.listWebhooksV1(req);

            if (res.webhooksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pingWebhookV1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PingWebhookV1Request;
import org.openapis.openapi.models.operations.PingWebhookV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PingWebhookV1Request req = new PingWebhookV1Request("6eec7437-8ba2-4531-b747-dc915ad2caf5");            

            PingWebhookV1Response res = sdk.webhooks.pingWebhookV1(req);

            if (res.pingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhookV1

Update Webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookV1Request;
import org.openapis.openapi.models.operations.UpdateWebhookV1Response;
import org.openapis.openapi.models.shared.CategoryEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWebhookRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateWebhookV1Request req = new UpdateWebhookV1Request("d6723dc0-f5ae-42f3-a6b7-00878756143f") {{
                updateWebhookRequest = new UpdateWebhookRequest() {{
                    authorizationHeader = "corporis";
                    categories = new org.openapis.openapi.models.shared.CategoryEnum[]{{
                        add(CategoryEnum.PAYEE),
                        add(CategoryEnum.DEBIT),
                        add(CategoryEnum.PAYEE),
                    }};
                    enabled = false;
                    webhookUrl = "laudantium";
                }};;
            }};            

            UpdateWebhookV1Response res = sdk.webhooks.updateWebhookV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
