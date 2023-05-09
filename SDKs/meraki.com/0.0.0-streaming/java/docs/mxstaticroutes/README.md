# mxStaticRoutes

### Available Operations

* [createNetworkStaticRoute](#createnetworkstaticroute) - Add a static route for an MX or teleworker network
* [deleteNetworkStaticRoute](#deletenetworkstaticroute) - Delete a static route from an MX or teleworker network
* [getNetworkStaticRoute](#getnetworkstaticroute) - Return a static route for an MX or teleworker network
* [getNetworkStaticRoutes](#getnetworkstaticroutes) - List the static routes for an MX or teleworker network
* [updateNetworkStaticRoute](#updatenetworkstaticroute) - Update a static route for an MX or teleworker network

## createNetworkStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateNetworkStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkStaticRouteRequest req = new CreateNetworkStaticRouteRequest(                new CreateNetworkStaticRouteRequestBody("veniam", "nesciunt", "expedita");, "eum");            

            CreateNetworkStaticRouteResponse res = sdk.mxStaticRoutes.createNetworkStaticRoute(req);

            if (res.createNetworkStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteNetworkStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkStaticRouteRequest req = new DeleteNetworkStaticRouteRequest("voluptatum", "magnam");            

            DeleteNetworkStaticRouteResponse res = sdk.mxStaticRoutes.deleteNetworkStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkStaticRouteRequest;
import org.openapis.openapi.models.operations.GetNetworkStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkStaticRouteRequest req = new GetNetworkStaticRouteRequest("ab", "porro");            

            GetNetworkStaticRouteResponse res = sdk.mxStaticRoutes.getNetworkStaticRoute(req);

            if (res.getNetworkStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetNetworkStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkStaticRoutesRequest req = new GetNetworkStaticRoutesRequest("nobis");            

            GetNetworkStaticRoutesResponse res = sdk.mxStaticRoutes.getNetworkStaticRoutes(req);

            if (res.getNetworkStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateNetworkStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkStaticRouteRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkStaticRouteRequest req = new UpdateNetworkStaticRouteRequest("recusandae", "consequuntur") {{
                requestBody = new UpdateNetworkStaticRouteRequestBody() {{
                    enabled = false;
                    fixedIpAssignments = new java.util.HashMap<String, Object>() {{
                        put("exercitationem", "necessitatibus");
                    }};
                    gatewayIp = "quasi";
                    name = "Teri Thiel";
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkStaticRouteRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkStaticRouteRequestBodyReservedIpRanges("occaecati", "nemo", "voluptate") {{
                            comment = "doloribus";
                            end = "repudiandae";
                            start = "optio";
                        }}),
                    }};
                    subnet = "blanditiis";
                }};;
            }};            

            UpdateNetworkStaticRouteResponse res = sdk.mxStaticRoutes.updateNetworkStaticRoute(req);

            if (res.updateNetworkStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
