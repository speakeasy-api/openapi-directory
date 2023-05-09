# customPerformanceClasses

### Available Operations

* [createNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest(                new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody("iste") {{
                                maxJitter = 819038L;
                                maxLatency = 891740L;
                                maxLossPercentage = 971980L;
                            }};, "optio");            

            CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.customPerformanceClasses.createNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest("harum", "fugit");            

            DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.customPerformanceClasses.deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest("natus", "eum");            

            GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.customPerformanceClasses.getNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest req = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest("autem");            

            GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse res = sdk.customPerformanceClasses.getNetworkApplianceTrafficShapingCustomPerformanceClasses(req);

            if (res.getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest("doloribus", "cupiditate") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody() {{
                    maxJitter = 11675L;
                    maxLatency = 672865L;
                    maxLossPercentage = 816137L;
                    name = "Alberto Miller MD";
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.customPerformanceClasses.updateNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
