# staticRoutes

### Available Operations

* [createDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [updateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

## createDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceSwitchRoutingStaticRouteRequest req = new CreateDeviceSwitchRoutingStaticRouteRequest(                new CreateDeviceSwitchRoutingStaticRouteRequestBody("est", "officiis") {{
                                advertiseViaOspfEnabled = false;
                                name = "Yvette Bogisich";
                                preferOverOspfRoutesEnabled = false;
                            }};, "aliquam");            

            CreateDeviceSwitchRoutingStaticRouteResponse res = sdk.staticRoutes.createDeviceSwitchRoutingStaticRoute(req);

            if (res.createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceStaticRouteRequest req = new CreateNetworkApplianceStaticRouteRequest(                new CreateNetworkApplianceStaticRouteRequestBody("animi", "accusamus", "culpa") {{
                                gatewayVlanId = "iusto";
                            }};, "accusantium");            

            CreateNetworkApplianceStaticRouteResponse res = sdk.staticRoutes.createNetworkApplianceStaticRoute(req);

            if (res.createNetworkApplianceStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingStaticRouteRequest req = new CreateNetworkSwitchStackRoutingStaticRouteRequest(                new CreateNetworkSwitchStackRoutingStaticRouteRequestBody("omnis", "perferendis") {{
                                advertiseViaOspfEnabled = false;
                                name = "Abraham Cormier";
                                preferOverOspfRoutesEnabled = false;
                            }};, "quia", "velit");            

            CreateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.staticRoutes.createNetworkSwitchStackRoutingStaticRoute(req);

            if (res.createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceSwitchRoutingStaticRouteRequest req = new DeleteDeviceSwitchRoutingStaticRouteRequest("porro", "dignissimos");            

            DeleteDeviceSwitchRoutingStaticRouteResponse res = sdk.staticRoutes.deleteDeviceSwitchRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceStaticRouteRequest req = new DeleteNetworkApplianceStaticRouteRequest("veritatis", "aliquid");            

            DeleteNetworkApplianceStaticRouteResponse res = sdk.staticRoutes.deleteNetworkApplianceStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingStaticRouteRequest req = new DeleteNetworkSwitchStackRoutingStaticRouteRequest("nesciunt", "dolorum", "dolor");            

            DeleteNetworkSwitchStackRoutingStaticRouteResponse res = sdk.staticRoutes.deleteNetworkSwitchStackRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingStaticRouteRequest req = new GetDeviceSwitchRoutingStaticRouteRequest("suscipit", "eaque");            

            GetDeviceSwitchRoutingStaticRouteResponse res = sdk.staticRoutes.getDeviceSwitchRoutingStaticRoute(req);

            if (res.getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingStaticRoutesRequest req = new GetDeviceSwitchRoutingStaticRoutesRequest("commodi");            

            GetDeviceSwitchRoutingStaticRoutesResponse res = sdk.staticRoutes.getDeviceSwitchRoutingStaticRoutes(req);

            if (res.getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceStaticRouteRequest req = new GetNetworkApplianceStaticRouteRequest("adipisci", "rerum");            

            GetNetworkApplianceStaticRouteResponse res = sdk.staticRoutes.getNetworkApplianceStaticRoute(req);

            if (res.getNetworkApplianceStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceStaticRoutesRequest req = new GetNetworkApplianceStaticRoutesRequest("id");            

            GetNetworkApplianceStaticRoutesResponse res = sdk.staticRoutes.getNetworkApplianceStaticRoutes(req);

            if (res.getNetworkApplianceStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRouteRequest req = new GetNetworkSwitchStackRoutingStaticRouteRequest("accusamus", "quibusdam", "architecto");            

            GetNetworkSwitchStackRoutingStaticRouteResponse res = sdk.staticRoutes.getNetworkSwitchStackRoutingStaticRoute(req);

            if (res.getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRoutesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingStaticRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRoutesRequest req = new GetNetworkSwitchStackRoutingStaticRoutesRequest("totam", "in");            

            GetNetworkSwitchStackRoutingStaticRoutesResponse res = sdk.staticRoutes.getNetworkSwitchStackRoutingStaticRoutes(req);

            if (res.getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingStaticRouteRequest req = new UpdateDeviceSwitchRoutingStaticRouteRequest("accusantium", "quibusdam") {{
                requestBody = new UpdateDeviceSwitchRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Angelica Corwin";
                    nextHopIp = "placeat";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "natus";
                }};;
            }};            

            UpdateDeviceSwitchRoutingStaticRouteResponse res = sdk.staticRoutes.updateDeviceSwitchRoutingStaticRoute(req);

            if (res.updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceStaticRouteRequest req = new UpdateNetworkApplianceStaticRouteRequest("deserunt", "suscipit") {{
                requestBody = new UpdateNetworkApplianceStaticRouteRequestBody() {{
                    enabled = false;
                    fixedIpAssignments = new java.util.HashMap<String, Object>() {{
                        put("aut", "earum");
                        put("temporibus", "maxime");
                        put("veniam", "magni");
                        put("officiis", "voluptate");
                    }};
                    gatewayIp = "expedita";
                    gatewayVlanId = "dolore";
                    name = "Adam Lakin";
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("nulla", "nihil", "soluta") {{
                            comment = "neque";
                            end = "maxime";
                            start = "voluptas";
                        }}),
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("in", "quod", "cupiditate") {{
                            comment = "esse";
                            end = "neque";
                            start = "assumenda";
                        }}),
                        add(new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges("repellat", "culpa", "dolor") {{
                            comment = "repudiandae";
                            end = "voluptatem";
                            start = "dolorem";
                        }}),
                    }};
                    subnet = "rem";
                }};;
            }};            

            UpdateNetworkApplianceStaticRouteResponse res = sdk.staticRoutes.updateNetworkApplianceStaticRoute(req);

            if (res.updateNetworkApplianceStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingStaticRouteRequest req = new UpdateNetworkSwitchStackRoutingStaticRouteRequest("quos", "molestias", "iure") {{
                requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Geneva Corwin";
                    nextHopIp = "ex";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "sequi";
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.staticRoutes.updateNetworkSwitchStackRoutingStaticRoute(req);

            if (res.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
