# payloadTemplates

### Available Operations

* [createNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [deleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [updateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

## createNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksPayloadTemplateRequest req = new CreateNetworkWebhooksPayloadTemplateRequest(                new CreateNetworkWebhooksPayloadTemplateRequestBody("itaque") {{
                                body = "velit";
                                bodyFile = "itaque";
                                headers = new org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders[]{{
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Dr. Maureen Crooks";
                                        template = "quibusdam";
                                    }}),
                                }};
                                headersFile = "non";
                            }};, "doloremque");            

            CreateNetworkWebhooksPayloadTemplateResponse res = sdk.payloadTemplates.createNetworkWebhooksPayloadTemplate(req);

            if (res.createNetworkWebhooksPayloadTemplate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWebhooksPayloadTemplateRequest req = new DeleteNetworkWebhooksPayloadTemplateRequest("nam", "sit");            

            DeleteNetworkWebhooksPayloadTemplateResponse res = sdk.payloadTemplates.deleteNetworkWebhooksPayloadTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksPayloadTemplateRequest req = new GetNetworkWebhooksPayloadTemplateRequest("laboriosam", "autem");            

            GetNetworkWebhooksPayloadTemplateResponse res = sdk.payloadTemplates.getNetworkWebhooksPayloadTemplate(req);

            if (res.getNetworkWebhooksPayloadTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplatesRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksPayloadTemplatesRequest req = new GetNetworkWebhooksPayloadTemplatesRequest("occaecati");            

            GetNetworkWebhooksPayloadTemplatesResponse res = sdk.payloadTemplates.getNetworkWebhooksPayloadTemplates(req);

            if (res.getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWebhooksPayloadTemplateRequest req = new UpdateNetworkWebhooksPayloadTemplateRequest("ipsam", "aliquid") {{
                requestBody = new UpdateNetworkWebhooksPayloadTemplateRequestBody() {{
                    body = "laudantium";
                    bodyFile = "harum";
                    headers = new org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders[]{{
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Constance Lind";
                            template = "inventore";
                        }}),
                    }};
                    headersFile = "non";
                    name = "Julio Fritsch";
                }};;
            }};            

            UpdateNetworkWebhooksPayloadTemplateResponse res = sdk.payloadTemplates.updateNetworkWebhooksPayloadTemplate(req);

            if (res.updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
