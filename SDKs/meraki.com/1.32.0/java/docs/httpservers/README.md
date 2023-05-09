# httpServers

### Available Operations

* [createNetworkWebhooksHttpServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [deleteNetworkWebhooksHttpServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [getNetworkWebhooksHttpServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [updateNetworkWebhooksHttpServer](#updatenetworkwebhookshttpserver) - Update an HTTP server

## createNetworkWebhooksHttpServer

Add an HTTP server to a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksHttpServerRequest req = new CreateNetworkWebhooksHttpServerRequest(                new CreateNetworkWebhooksHttpServerRequestBody("quasi", "deleniti") {{
                                payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate() {{
                                    name = "Dr. Michele Langosh DDS";
                                    payloadTemplateId = "sint";
                                }};;
                                sharedSecret = "unde";
                            }};, "illo");            

            CreateNetworkWebhooksHttpServerResponse res = sdk.httpServers.createNetworkWebhooksHttpServer(req);

            if (res.createNetworkWebhooksHttpServer201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWebhooksHttpServer

Delete an HTTP server from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWebhooksHttpServerRequest req = new DeleteNetworkWebhooksHttpServerRequest("voluptate", "ab");            

            DeleteNetworkWebhooksHttpServerResponse res = sdk.httpServers.deleteNetworkWebhooksHttpServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksHttpServer

Return an HTTP server for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksHttpServerRequest req = new GetNetworkWebhooksHttpServerRequest("ipsam", "cupiditate");            

            GetNetworkWebhooksHttpServerResponse res = sdk.httpServers.getNetworkWebhooksHttpServer(req);

            if (res.getNetworkWebhooksHttpServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksHttpServers

List the HTTP servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServersRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksHttpServersRequest req = new GetNetworkWebhooksHttpServersRequest("voluptatibus");            

            GetNetworkWebhooksHttpServersResponse res = sdk.httpServers.getNetworkWebhooksHttpServers(req);

            if (res.getNetworkWebhooksHttpServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWebhooksHttpServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWebhooksHttpServerRequest req = new UpdateNetworkWebhooksHttpServerRequest("labore", "maiores") {{
                requestBody = new UpdateNetworkWebhooksHttpServerRequestBody() {{
                    name = "Gabriel Weber";
                    payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate() {{
                        payloadTemplateId = "hic";
                    }};;
                    sharedSecret = "deleniti";
                }};;
            }};            

            UpdateNetworkWebhooksHttpServerResponse res = sdk.httpServers.updateNetworkWebhooksHttpServer(req);

            if (res.updateNetworkWebhooksHttpServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
