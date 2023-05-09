# mqttBrokers

### Available Operations

* [createNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [deleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [getNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [updateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker

## createNetworkMqttBroker

Add an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequestBodySecurity;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequestBodySecuritySecurity;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkMqttBrokerRequest req = new CreateNetworkMqttBrokerRequest(                new CreateNetworkMqttBrokerRequestBody("beatae", "labore", 700115L) {{
                                authentication = new java.util.HashMap<String, Object>() {{
                                    put("ipsa", "ea");
                                    put("voluptates", "laudantium");
                                }};
                                security = new CreateNetworkMqttBrokerRequestBodySecurity() {{
                                    mode = "reprehenderit";
                                    security = new CreateNetworkMqttBrokerRequestBodySecuritySecurity() {{
                                        caCertificate = "expedita";
                                        verifyHostnames = false;
                                    }};;
                                }};;
                            }};, "a");            

            CreateNetworkMqttBrokerResponse res = sdk.mqttBrokers.createNetworkMqttBroker(req);

            if (res.createNetworkMqttBroker201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkMqttBrokerRequest req = new DeleteNetworkMqttBrokerRequest("temporibus", "et");            

            DeleteNetworkMqttBrokerResponse res = sdk.mqttBrokers.deleteNetworkMqttBroker(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMqttBroker

Return an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMqttBrokerRequest req = new GetNetworkMqttBrokerRequest("quia", "esse");            

            GetNetworkMqttBrokerResponse res = sdk.mqttBrokers.getNetworkMqttBroker(req);

            if (res.getNetworkMqttBroker200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokersRequest;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMqttBrokersRequest req = new GetNetworkMqttBrokersRequest("laudantium");            

            GetNetworkMqttBrokersResponse res = sdk.mqttBrokers.getNetworkMqttBrokers(req);

            if (res.getNetworkMqttBrokers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkMqttBroker

Update an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequestBodySecurity;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequestBodySecuritySecurity;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkMqttBrokerRequest req = new UpdateNetworkMqttBrokerRequest("hic", "voluptatem") {{
                requestBody = new UpdateNetworkMqttBrokerRequestBody() {{
                    authentication = new java.util.HashMap<String, Object>() {{
                        put("assumenda", "nesciunt");
                        put("quod", "ad");
                    }};
                    host = "sit";
                    name = "Derek Ondricka";
                    port = 153222L;
                    security = new UpdateNetworkMqttBrokerRequestBodySecurity() {{
                        mode = "perferendis";
                        security = new UpdateNetworkMqttBrokerRequestBodySecuritySecurity() {{
                            caCertificate = "dolores";
                            verifyHostnames = false;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkMqttBrokerResponse res = sdk.mqttBrokers.updateNetworkMqttBroker(req);

            if (res.updateNetworkMqttBroker200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
