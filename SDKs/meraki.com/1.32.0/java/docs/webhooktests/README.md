# webhookTests

### Available Operations

* [createNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [getNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network

## createNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksWebhookTestRequest req = new CreateNetworkWebhooksWebhookTestRequest(                new CreateNetworkWebhooksWebhookTestRequestBody("qui") {{
                                alertTypeId = "molestias";
                                payloadTemplateId = "excepturi";
                                payloadTemplateName = "enim";
                                sharedSecret = "blanditiis";
                            }};, "ullam");            

            CreateNetworkWebhooksWebhookTestResponse res = sdk.webhookTests.createNetworkWebhooksWebhookTest(req);

            if (res.createNetworkWebhooksWebhookTest201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksWebhookTestRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksWebhookTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksWebhookTestRequest req = new GetNetworkWebhooksWebhookTestRequest("fuga", "repudiandae");            

            GetNetworkWebhooksWebhookTestResponse res = sdk.webhookTests.getNetworkWebhooksWebhookTest(req);

            if (res.getNetworkWebhooksWebhookTest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
