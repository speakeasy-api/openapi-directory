# routing

### Available Operations

* [createDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [updateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

## createDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;
import org.openapis.openapi.models.operations.CreateDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceSwitchRoutingInterfaceRequest req = new CreateDeviceSwitchRoutingInterfaceRequest("eius") {{
                requestBody = new CreateDeviceSwitchRoutingInterfaceRequestBody() {{
                    defaultGateway = "sapiente";
                    interfaceIp = "beatae";
                    ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6() {{
                        address = "26478 Dare Forge";
                        assignmentMode = "officia";
                        gateway = "exercitationem";
                        prefix = "deleniti";
                    }};;
                    multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum.DISABLED;
                    name = "Jonathan Gutmann";
                    ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "ab";
                        cost = 279471L;
                        isPassiveEnabled = false;
                    }};;
                    ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3() {{
                        area = "voluptate";
                        cost = 236738L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "adipisci";
                    vlanId = 435435L;
                }};;
            }};            

            CreateDeviceSwitchRoutingInterfaceResponse res = sdk.routing.createDeviceSwitchRoutingInterface(req);

            if (res.createDeviceSwitchRoutingInterface201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceSwitchRoutingStaticRouteRequest req = new CreateDeviceSwitchRoutingStaticRouteRequest(                new CreateDeviceSwitchRoutingStaticRouteRequestBody("fuga", "pariatur") {{
                                advertiseViaOspfEnabled = false;
                                name = "Robin Runte";
                                preferOverOspfRoutesEnabled = false;
                            }};, "explicabo");            

            CreateDeviceSwitchRoutingStaticRouteResponse res = sdk.routing.createDeviceSwitchRoutingStaticRoute(req);

            if (res.createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("odio", "distinctio");, "nihil");            

            CreateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.routing.createNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingInterfaceRequest req = new CreateNetworkSwitchStackRoutingInterfaceRequest(                new CreateNetworkSwitchStackRoutingInterfaceRequestBody("iusto", 730735L) {{
                                defaultGateway = "doloribus";
                                interfaceIp = "aspernatur";
                                ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                                    address = "73363 Ofelia Rapids";
                                    assignmentMode = "sunt";
                                    gateway = "explicabo";
                                    prefix = "quis";
                                }};;
                                multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.DISABLED;
                                ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                                    area = "pariatur";
                                    cost = 668612L;
                                    isPassiveEnabled = false;
                                }};;
                                subnet = "ullam";
                            }};, "dicta", "repellat");            

            CreateNetworkSwitchStackRoutingInterfaceResponse res = sdk.routing.createNetworkSwitchStackRoutingInterface(req);

            if (res.createNetworkSwitchStackRoutingInterface201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingStaticRouteRequest req = new CreateNetworkSwitchStackRoutingStaticRouteRequest(                new CreateNetworkSwitchStackRoutingStaticRouteRequestBody("minima", "ullam") {{
                                advertiseViaOspfEnabled = false;
                                name = "Caleb Rodriguez";
                                preferOverOspfRoutesEnabled = false;
                            }};, "dolores", "nemo");            

            CreateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.routing.createNetworkSwitchStackRoutingStaticRoute(req);

            if (res.createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.DeleteDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceSwitchRoutingInterfaceRequest req = new DeleteDeviceSwitchRoutingInterfaceRequest("accusamus", "enim");            

            DeleteDeviceSwitchRoutingInterfaceResponse res = sdk.routing.deleteDeviceSwitchRoutingInterface(req);

            if (res.statusCode == 200) {
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
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceSwitchRoutingStaticRouteRequest req = new DeleteDeviceSwitchRoutingStaticRouteRequest("dignissimos", "aut");            

            DeleteDeviceSwitchRoutingStaticRouteResponse res = sdk.routing.deleteDeviceSwitchRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest req = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest("voluptatem", "itaque");            

            DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.routing.deleteNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingInterfaceRequest req = new DeleteNetworkSwitchStackRoutingInterfaceRequest("enim", "earum", "vero");            

            DeleteNetworkSwitchStackRoutingInterfaceResponse res = sdk.routing.deleteNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingStaticRouteRequest req = new DeleteNetworkSwitchStackRoutingStaticRouteRequest("fugit", "ad", "accusamus");            

            DeleteNetworkSwitchStackRoutingStaticRouteResponse res = sdk.routing.deleteNetworkSwitchStackRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceRequest req = new GetDeviceSwitchRoutingInterfaceRequest("quod", "rerum");            

            GetDeviceSwitchRoutingInterfaceResponse res = sdk.routing.getDeviceSwitchRoutingInterface(req);

            if (res.getDeviceSwitchRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceDhcpRequest req = new GetDeviceSwitchRoutingInterfaceDhcpRequest("commodi", "labore");            

            GetDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.routing.getDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfacesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchRoutingInterfacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfacesRequest req = new GetDeviceSwitchRoutingInterfacesRequest("nobis");            

            GetDeviceSwitchRoutingInterfacesResponse res = sdk.routing.getDeviceSwitchRoutingInterfaces(req);

            if (res.getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingStaticRouteRequest req = new GetDeviceSwitchRoutingStaticRouteRequest("ad", "ducimus");            

            GetDeviceSwitchRoutingStaticRouteResponse res = sdk.routing.getDeviceSwitchRoutingStaticRoute(req);

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
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingStaticRoutesRequest req = new GetDeviceSwitchRoutingStaticRoutesRequest("debitis");            

            GetDeviceSwitchRoutingStaticRoutesResponse res = sdk.routing.getDeviceSwitchRoutingStaticRoutes(req);

            if (res.getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRequest req = new GetNetworkSwitchRoutingMulticastRequest("accusamus");            

            GetNetworkSwitchRoutingMulticastResponse res = sdk.routing.getNetworkSwitchRoutingMulticast(req);

            if (res.getNetworkSwitchRoutingMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest("nemo", "ut");            

            GetNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.routing.getNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointsRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest("deserunt");            

            GetNetworkSwitchRoutingMulticastRendezvousPointsResponse res = sdk.routing.getNetworkSwitchRoutingMulticastRendezvousPoints(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingOspfRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingOspfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingOspfRequest req = new GetNetworkSwitchRoutingOspfRequest("totam");            

            GetNetworkSwitchRoutingOspfResponse res = sdk.routing.getNetworkSwitchRoutingOspf(req);

            if (res.getNetworkSwitchRoutingOspf200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceRequest req = new GetNetworkSwitchStackRoutingInterfaceRequest("sit", "saepe", "eveniet");            

            GetNetworkSwitchStackRoutingInterfaceResponse res = sdk.routing.getNetworkSwitchStackRoutingInterface(req);

            if (res.getNetworkSwitchStackRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceDhcpRequest req = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest("odio", "quisquam", "vero");            

            GetNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.routing.getNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfacesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRoutingInterfacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfacesRequest req = new GetNetworkSwitchStackRoutingInterfacesRequest("perferendis", "hic");            

            GetNetworkSwitchStackRoutingInterfacesResponse res = sdk.routing.getNetworkSwitchStackRoutingInterfaces(req);

            if (res.getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRouteRequest req = new GetNetworkSwitchStackRoutingStaticRouteRequest("incidunt", "a", "corrupti");            

            GetNetworkSwitchStackRoutingStaticRouteResponse res = sdk.routing.getNetworkSwitchStackRoutingStaticRoute(req);

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
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRoutesRequest req = new GetNetworkSwitchStackRoutingStaticRoutesRequest("officiis", "omnis");            

            GetNetworkSwitchStackRoutingStaticRoutesResponse res = sdk.routing.getNetworkSwitchStackRoutingStaticRoutes(req);

            if (res.getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceRequest req = new UpdateDeviceSwitchRoutingInterfaceRequest("alias", "qui") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceRequestBody() {{
                    defaultGateway = "nemo";
                    interfaceIp = "non";
                    ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6() {{
                        address = "8983 Runte Course";
                        assignmentMode = "accusamus";
                        gateway = "cumque";
                        prefix = "debitis";
                    }};;
                    multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum.ENABLED;
                    name = "Patty Windler";
                    ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "est";
                        cost = 824871L;
                        isPassiveEnabled = false;
                    }};;
                    ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3() {{
                        area = "dolorum";
                        cost = 892893L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "minus";
                    vlanId = 84527L;
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceResponse res = sdk.routing.updateDeviceSwitchRoutingInterface(req);

            if (res.updateDeviceSwitchRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceDhcpRequest req = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest("eum", "perferendis") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "laboriosam";
                    bootNextServer = "repellendus";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.ONE_HOUR;
                    dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_DISABLED;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("officia", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "quaerat") {{
                            code = "esse";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "recusandae";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("dolores", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "velit") {{
                            code = "omnis";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "amet";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("perspiciatis"),
                        add("ducimus"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("eos"),
                        add("autem"),
                        add("dolorum"),
                    }};
                    dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.OPEN_DNS;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("dolores", "rem", "adipisci") {{
                            ip = "magni";
                            mac = "placeat";
                            name = "Marshall Orn";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("vitae", "nesciunt", "amet") {{
                            ip = "sunt";
                            mac = "quos";
                            name = "Gayle Harber";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("dignissimos", "molestiae", "expedita") {{
                            ip = "velit";
                            mac = "est";
                            name = "Rose Cruickshank V";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("quam", "modi") {{
                            comment = "quod";
                            end = "ullam";
                            start = "deserunt";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("ducimus", "ducimus") {{
                            comment = "reiciendis";
                            end = "nisi";
                            start = "ipsam";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("inventore", "dignissimos") {{
                            comment = "dolore";
                            end = "quod";
                            start = "cupiditate";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("saepe", "quidem") {{
                            comment = "soluta";
                            end = "minus";
                            start = "reiciendis";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.routing.updateDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingStaticRouteRequest req = new UpdateDeviceSwitchRoutingStaticRouteRequest("ex", "vero") {{
                requestBody = new UpdateDeviceSwitchRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Cassandra Bogan";
                    nextHopIp = "vero";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "dolores";
                }};;
            }};            

            UpdateDeviceSwitchRoutingStaticRouteResponse res = sdk.routing.updateDeviceSwitchRoutingStaticRoute(req);

            if (res.updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRequest req = new UpdateNetworkSwitchRoutingMulticastRequest("illo") {{
                requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody() {{
                    defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings() {{
                        floodUnknownMulticastTrafficEnabled = false;
                        igmpSnoopingEnabled = false;
                    }};;
                    overrides = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[]{{
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("in"),
                            }};
                            switchProfiles = new String[]{{
                                add("atque"),
                                add("iure"),
                            }};
                            switches = new String[]{{
                                add("possimus"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("perspiciatis"),
                                add("accusantium"),
                                add("blanditiis"),
                                add("possimus"),
                            }};
                            switchProfiles = new String[]{{
                                add("nesciunt"),
                            }};
                            switches = new String[]{{
                                add("enim"),
                                add("ratione"),
                                add("distinctio"),
                                add("maxime"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("architecto"),
                            }};
                            switchProfiles = new String[]{{
                                add("officia"),
                                add("eaque"),
                                add("ratione"),
                                add("assumenda"),
                            }};
                            switches = new String[]{{
                                add("blanditiis"),
                                add("expedita"),
                                add("repudiandae"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("quas"),
                                add("similique"),
                                add("ipsum"),
                            }};
                            switchProfiles = new String[]{{
                                add("consectetur"),
                                add("architecto"),
                                add("nihil"),
                            }};
                            switches = new String[]{{
                                add("asperiores"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchRoutingMulticastResponse res = sdk.routing.updateNetworkSwitchRoutingMulticast(req);

            if (res.updateNetworkSwitchRoutingMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("nemo", "tempora");, "placeat", "provident");            

            UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.routing.updateNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingOspfRequest req = new UpdateNetworkSwitchRoutingOspfRequest("voluptas") {{
                requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody() {{
                    areas = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas[]{{
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("perferendis", "illo", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL) {{
                            areaId = "quaerat";
                            areaName = "nobis";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NSSA;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("odio", "ullam", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB) {{
                            areaId = "impedit";
                            areaName = "magni";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("rem", "soluta", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NSSA) {{
                            areaId = "nostrum";
                            areaName = "pariatur";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NSSA;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("inventore", "quisquam", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL) {{
                            areaId = "at";
                            areaName = "amet";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NSSA;
                        }}),
                    }};
                    deadTimerInSeconds = 929307L;
                    enabled = false;
                    helloTimerInSeconds = 105978L;
                    md5AuthenticationEnabled = false;
                    md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey() {{
                        id = 399755L;
                        passphrase = "quaerat";
                    }};;
                    v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3() {{
                        areas = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas[]{{
                            add(new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas("aliquid", "itaque", UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.NORMAL) {{
                                areaId = "nemo";
                                areaName = "aliquid";
                                areaType = UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.STUB;
                            }}),
                        }};
                        deadTimerInSeconds = 156128L;
                        enabled = false;
                        helloTimerInSeconds = 324750L;
                    }};;
                }};;
            }};            

            UpdateNetworkSwitchRoutingOspfResponse res = sdk.routing.updateNetworkSwitchRoutingOspf(req);

            if (res.updateNetworkSwitchRoutingOspf200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceRequest req = new UpdateNetworkSwitchStackRoutingInterfaceRequest("repellat", "excepturi", "mollitia") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody() {{
                    defaultGateway = "molestias";
                    interfaceIp = "excepturi";
                    ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                        address = "3011 Heaney Shores";
                        assignmentMode = "ea";
                        gateway = "corrupti";
                        prefix = "perferendis";
                    }};;
                    multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.IGMP_SNOOPING_QUERIER;
                    name = "Mamie Botsford I";
                    ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "itaque";
                        cost = 897711L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "ipsum";
                    vlanId = 434737L;
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceResponse res = sdk.routing.updateNetworkSwitchStackRoutingInterface(req);

            if (res.updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest req = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest("commodi", "illo", "qui") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "repellendus";
                    bootNextServer = "eveniet";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.TWELVE_HOURS;
                    dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_RELAY;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("asperiores", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "fugit") {{
                            code = "repellat";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "aliquam";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("asperiores", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP, "deserunt") {{
                            code = "exercitationem";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "veniam";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("asperiores"),
                        add("dolores"),
                        add("vitae"),
                        add("commodi"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("possimus"),
                    }};
                    dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.CUSTOM;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("dolor", "optio", "reprehenderit") {{
                            ip = "similique";
                            mac = "sequi";
                            name = "Sheila Murphy PhD";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("voluptatum", "saepe", "sapiente") {{
                            ip = "reprehenderit";
                            mac = "molestiae";
                            name = "Allison Crooks III";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("possimus", "maxime") {{
                            comment = "a";
                            end = "autem";
                            start = "quidem";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("doloremque", "excepturi") {{
                            comment = "porro";
                            end = "a";
                            start = "deleniti";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("quos", "optio") {{
                            comment = "sapiente";
                            end = "iusto";
                            start = "repellendus";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("optio", "quis") {{
                            comment = "praesentium";
                            end = "impedit";
                            start = "incidunt";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.routing.updateNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingStaticRouteRequest req = new UpdateNetworkSwitchStackRoutingStaticRouteRequest("voluptatibus", "facere", "voluptatibus") {{
                requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Martha Smith";
                    nextHopIp = "quibusdam";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "minus";
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.routing.updateNetworkSwitchStackRoutingStaticRoute(req);

            if (res.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
