# stacks

### Available Operations

* [addNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [createNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [removeNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

## addNetworkSwitchStack

Add a switch to a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.AddNetworkSwitchStackRequestBody;
import org.openapis.openapi.models.operations.AddNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNetworkSwitchStackRequest req = new AddNetworkSwitchStackRequest(                new AddNetworkSwitchStackRequestBody("quaerat");, "accusantium", "iste");            

            AddNetworkSwitchStackResponse res = sdk.stacks.addNetworkSwitchStack(req);

            if (res.addNetworkSwitchStack200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSwitchStack

Create a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRequest req = new CreateNetworkSwitchStackRequest(                new CreateNetworkSwitchStackRequestBody("ex",                 new String[]{{
                                                add("iste"),
                                                add("doloribus"),
                                                add("vitae"),
                                                add("dolores"),
                                            }});, "tempore");            

            CreateNetworkSwitchStackResponse res = sdk.stacks.createNetworkSwitchStack(req);

            if (res.createNetworkSwitchStack201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingInterfaceRequest req = new CreateNetworkSwitchStackRoutingInterfaceRequest(                new CreateNetworkSwitchStackRoutingInterfaceRequestBody("labore", 170387L) {{
                                defaultGateway = "possimus";
                                interfaceIp = "ad";
                                ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                                    address = "6637 Ryan Field";
                                    assignmentMode = "recusandae";
                                    gateway = "illum";
                                    prefix = "fuga";
                                }};;
                                multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.DISABLED;
                                ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                                    area = "blanditiis";
                                    cost = 448699L;
                                    isPassiveEnabled = false;
                                }};;
                                subnet = "eveniet";
                            }};, "tenetur", "veniam");            

            CreateNetworkSwitchStackRoutingInterfaceResponse res = sdk.stacks.createNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingStaticRouteRequest req = new CreateNetworkSwitchStackRoutingStaticRouteRequest(                new CreateNetworkSwitchStackRoutingStaticRouteRequestBody("a", "illum") {{
                                advertiseViaOspfEnabled = false;
                                name = "Rebecca Lind";
                                preferOverOspfRoutesEnabled = false;
                            }};, "accusamus", "excepturi");            

            CreateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.stacks.createNetworkSwitchStackRoutingStaticRoute(req);

            if (res.createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchStack

Delete a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRequest req = new DeleteNetworkSwitchStackRequest("neque", "porro");            

            DeleteNetworkSwitchStackResponse res = sdk.stacks.deleteNetworkSwitchStack(req);

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
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingInterfaceRequest req = new DeleteNetworkSwitchStackRoutingInterfaceRequest("quia", "in", "officia");            

            DeleteNetworkSwitchStackRoutingInterfaceResponse res = sdk.stacks.deleteNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingStaticRouteRequest req = new DeleteNetworkSwitchStackRoutingStaticRouteRequest("ipsam", "recusandae", "modi");            

            DeleteNetworkSwitchStackRoutingStaticRouteResponse res = sdk.stacks.deleteNetworkSwitchStackRoutingStaticRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStack

Show a switch stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRequest req = new GetNetworkSwitchStackRequest("aut", "vitae");            

            GetNetworkSwitchStackResponse res = sdk.stacks.getNetworkSwitchStack(req);

            if (res.getNetworkSwitchStack200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceRequest req = new GetNetworkSwitchStackRoutingInterfaceRequest("perferendis", "molestias", "omnis");            

            GetNetworkSwitchStackRoutingInterfaceResponse res = sdk.stacks.getNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceDhcpRequest req = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest("repellat", "laudantium", "deleniti");            

            GetNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.stacks.getNetworkSwitchStackRoutingInterfaceDhcp(req);

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
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfacesRequest req = new GetNetworkSwitchStackRoutingInterfacesRequest("quasi", "laborum");            

            GetNetworkSwitchStackRoutingInterfacesResponse res = sdk.stacks.getNetworkSwitchStackRoutingInterfaces(req);

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
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRouteRequest req = new GetNetworkSwitchStackRoutingStaticRouteRequest("provident", "minima", "architecto");            

            GetNetworkSwitchStackRoutingStaticRouteResponse res = sdk.stacks.getNetworkSwitchStackRoutingStaticRoute(req);

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
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingStaticRoutesRequest req = new GetNetworkSwitchStackRoutingStaticRoutesRequest("ipsum", "odio");            

            GetNetworkSwitchStackRoutingStaticRoutesResponse res = sdk.stacks.getNetworkSwitchStackRoutingStaticRoutes(req);

            if (res.getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStacksRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStacksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStacksRequest req = new GetNetworkSwitchStacksRequest("minima");            

            GetNetworkSwitchStacksResponse res = sdk.stacks.getNetworkSwitchStacks(req);

            if (res.getNetworkSwitchStacks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNetworkSwitchStack

Remove a switch from a stack

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNetworkSwitchStackRequest;
import org.openapis.openapi.models.operations.RemoveNetworkSwitchStackRequestBody;
import org.openapis.openapi.models.operations.RemoveNetworkSwitchStackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNetworkSwitchStackRequest req = new RemoveNetworkSwitchStackRequest(                new RemoveNetworkSwitchStackRequestBody("nisi");, "placeat", "ullam");            

            RemoveNetworkSwitchStackResponse res = sdk.stacks.removeNetworkSwitchStack(req);

            if (res.removeNetworkSwitchStack200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceRequest req = new UpdateNetworkSwitchStackRoutingInterfaceRequest("veritatis", "veniam", "aperiam") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody() {{
                    defaultGateway = "deleniti";
                    interfaceIp = "sequi";
                    ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                        address = "8435 Zackary Ramp";
                        assignmentMode = "ullam";
                        gateway = "doloremque";
                        prefix = "atque";
                    }};;
                    multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.ENABLED;
                    name = "Mrs. Rosalie Quitzon";
                    ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "minus";
                        cost = 429567L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "quo";
                    vlanId = 559090L;
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceResponse res = sdk.stacks.updateNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest req = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest("odit", "quam", "accusamus") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "et";
                    bootNextServer = "minus";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.THIRTY_MINUTES;
                    dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_RELAY;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("ratione", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "laboriosam") {{
                            code = "adipisci";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "aliquid";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("veniam", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP, "nisi") {{
                            code = "tempora";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "minus";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("sed", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "aliquam") {{
                            code = "quasi";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "voluptates";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("exercitationem", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "consequatur") {{
                            code = "cupiditate";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX;
                            value = "quisquam";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("dignissimos"),
                        add("veritatis"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("labore"),
                        add("a"),
                        add("quaerat"),
                        add("nihil"),
                    }};
                    dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.CUSTOM;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("soluta", "consequuntur", "eos") {{
                            ip = "nesciunt";
                            mac = "commodi";
                            name = "Ms. Wm Tremblay";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("repellendus", "sed", "vitae") {{
                            ip = "voluptate";
                            mac = "eum";
                            name = "Clifton Bailey";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("sit", "corporis", "excepturi") {{
                            ip = "nulla";
                            mac = "pariatur";
                            name = "Miss Terrance Zieme I";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("blanditiis", "doloribus") {{
                            comment = "nisi";
                            end = "rem";
                            start = "saepe";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("aut", "necessitatibus") {{
                            comment = "repellendus";
                            end = "itaque";
                            start = "autem";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.stacks.updateNetworkSwitchStackRoutingInterfaceDhcp(req);

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
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingStaticRouteRequest req = new UpdateNetworkSwitchStackRoutingStaticRouteRequest("cum", "necessitatibus", "veniam") {{
                requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody() {{
                    advertiseViaOspfEnabled = false;
                    name = "Clayton Hettinger";
                    nextHopIp = "cumque";
                    preferOverOspfRoutesEnabled = false;
                    subnet = "autem";
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingStaticRouteResponse res = sdk.stacks.updateNetworkSwitchStackRoutingStaticRoute(req);

            if (res.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
