# interfaces

### Available Operations

* [createDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [deleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [getDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [updateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

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
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceSwitchRoutingInterfaceRequest req = new CreateDeviceSwitchRoutingInterfaceRequest("aliquam") {{
                requestBody = new CreateDeviceSwitchRoutingInterfaceRequestBody() {{
                    defaultGateway = "velit";
                    interfaceIp = "voluptatem";
                    ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6() {{
                        address = "33384 Quitzon Haven";
                        assignmentMode = "fugit";
                        gateway = "sed";
                        prefix = "iusto";
                    }};;
                    multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum.IGMP_SNOOPING_QUERIER;
                    name = "Emmett Franey";
                    ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "earum";
                        cost = 932960L;
                        isPassiveEnabled = false;
                    }};;
                    ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3() {{
                        area = "sint";
                        cost = 112839L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "sapiente";
                    vlanId = 115700L;
                }};;
            }};            

            CreateDeviceSwitchRoutingInterfaceResponse res = sdk.interfaces.createDeviceSwitchRoutingInterface(req);

            if (res.createDeviceSwitchRoutingInterface201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchStackRoutingInterfaceRequest req = new CreateNetworkSwitchStackRoutingInterfaceRequest(                new CreateNetworkSwitchStackRoutingInterfaceRequestBody("deserunt", 41566L) {{
                                defaultGateway = "totam";
                                interfaceIp = "dolor";
                                ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                                    address = "086 Heidenreich Center";
                                    assignmentMode = "accusantium";
                                    gateway = "quasi";
                                    prefix = "voluptatibus";
                                }};;
                                multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.DISABLED;
                                ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                                    area = "blanditiis";
                                    cost = 304571L;
                                    isPassiveEnabled = false;
                                }};;
                                subnet = "distinctio";
                            }};, "hic", "non");            

            CreateNetworkSwitchStackRoutingInterfaceResponse res = sdk.interfaces.createNetworkSwitchStackRoutingInterface(req);

            if (res.createNetworkSwitchStackRoutingInterface201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceSwitchRoutingInterfaceRequest req = new DeleteDeviceSwitchRoutingInterfaceRequest("quam", "tempora");            

            DeleteDeviceSwitchRoutingInterfaceResponse res = sdk.interfaces.deleteDeviceSwitchRoutingInterface(req);

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
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchStackRoutingInterfaceRequest req = new DeleteNetworkSwitchStackRoutingInterfaceRequest("ullam", "ut", "inventore");            

            DeleteNetworkSwitchStackRoutingInterfaceResponse res = sdk.interfaces.deleteNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceRequest req = new GetDeviceSwitchRoutingInterfaceRequest("non", "doloremque");            

            GetDeviceSwitchRoutingInterfaceResponse res = sdk.interfaces.getDeviceSwitchRoutingInterface(req);

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
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceDhcpRequest req = new GetDeviceSwitchRoutingInterfaceDhcpRequest("vitae", "officia");            

            GetDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.interfaces.getDeviceSwitchRoutingInterfaceDhcp(req);

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
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfacesRequest req = new GetDeviceSwitchRoutingInterfacesRequest("dolores");            

            GetDeviceSwitchRoutingInterfacesResponse res = sdk.interfaces.getDeviceSwitchRoutingInterfaces(req);

            if (res.getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceRequest req = new GetNetworkSwitchStackRoutingInterfaceRequest("dolorum", "sint", "dicta");            

            GetNetworkSwitchStackRoutingInterfaceResponse res = sdk.interfaces.getNetworkSwitchStackRoutingInterface(req);

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

            GetNetworkSwitchStackRoutingInterfaceDhcpRequest req = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest("debitis", "sunt", "similique");            

            GetNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.interfaces.getNetworkSwitchStackRoutingInterfaceDhcp(req);

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
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfacesRequest req = new GetNetworkSwitchStackRoutingInterfacesRequest("occaecati", "eaque");            

            GetNetworkSwitchStackRoutingInterfacesResponse res = sdk.interfaces.getNetworkSwitchStackRoutingInterfaces(req);

            if (res.getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceRequest req = new UpdateDeviceSwitchRoutingInterfaceRequest("distinctio", "cum") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceRequestBody() {{
                    defaultGateway = "molestiae";
                    interfaceIp = "consectetur";
                    ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6() {{
                        address = "797 Weimann Pike";
                        assignmentMode = "porro";
                        gateway = "numquam";
                        prefix = "nemo";
                    }};;
                    multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum.DISABLED;
                    name = "Tom Murazik";
                    ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "officiis";
                        cost = 800052L;
                        isPassiveEnabled = false;
                    }};;
                    ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3() {{
                        area = "odio";
                        cost = 329098L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "voluptatum";
                    vlanId = 130136L;
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceResponse res = sdk.interfaces.updateDeviceSwitchRoutingInterface(req);

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
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceDhcpRequest req = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest("ipsa", "at") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "id";
                    bootNextServer = "sint";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.ONE_HOUR;
                    dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_RELAY;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("vitae", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "quas") {{
                            code = "quam";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "nobis";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("assumenda", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "at") {{
                            code = "possimus";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "in";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("libero", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "quis") {{
                            code = "occaecati";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "amet";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("architecto", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "fuga") {{
                            code = "suscipit";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "amet";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("deserunt"),
                        add("quas"),
                        add("eius"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("culpa"),
                        add("voluptatibus"),
                        add("eveniet"),
                    }};
                    dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.GOOGLE_PUBLIC_DNS;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("quaerat", "reiciendis", "fuga") {{
                            ip = "voluptatem";
                            mac = "qui";
                            name = "Tom Littel";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("quod", "voluptas", "distinctio") {{
                            ip = "ipsum";
                            mac = "tenetur";
                            name = "Guy Ferry DVM";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("modi", "corrupti", "facilis") {{
                            ip = "aperiam";
                            mac = "est";
                            name = "Mrs. Al Rice";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("molestiae", "nulla") {{
                            comment = "quia";
                            end = "dignissimos";
                            start = "quibusdam";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("ipsum", "tenetur") {{
                            comment = "accusamus";
                            end = "excepturi";
                            start = "voluptas";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.interfaces.updateDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceRequest req = new UpdateNetworkSwitchStackRoutingInterfaceRequest("doloremque", "consectetur", "eveniet") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody() {{
                    defaultGateway = "quaerat";
                    interfaceIp = "cupiditate";
                    ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6() {{
                        address = "8554 Aaliyah Crest";
                        assignmentMode = "nulla";
                        gateway = "eveniet";
                        prefix = "sit";
                    }};;
                    multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum.ENABLED;
                    name = "Emilio Senger";
                    ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings() {{
                        area = "inventore";
                        cost = 313963L;
                        isPassiveEnabled = false;
                    }};;
                    subnet = "sapiente";
                    vlanId = 179707L;
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceResponse res = sdk.interfaces.updateNetworkSwitchStackRoutingInterface(req);

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
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest req = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest("eaque", "dolorem", "harum") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "amet";
                    bootNextServer = "quia";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.ONE_WEEK;
                    dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_DISABLED;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("quae", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX, "adipisci") {{
                            code = "amet";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "incidunt";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("id", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP, "a") {{
                            code = "omnis";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "laudantium";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("dolorum", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX, "odit") {{
                            code = "officia";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "fugiat";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("debitis"),
                        add("laboriosam"),
                        add("veniam"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("fugit"),
                        add("amet"),
                        add("sit"),
                        add("omnis"),
                    }};
                    dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.CUSTOM;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("distinctio", "accusamus", "maiores") {{
                            ip = "fugiat";
                            mac = "consectetur";
                            name = "Miss Joann Green";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("fuga", "dignissimos", "autem") {{
                            ip = "perferendis";
                            mac = "maxime";
                            name = "Dr. Jackie Maggio";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("eaque", "consequuntur") {{
                            comment = "occaecati";
                            end = "nemo";
                            start = "explicabo";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("iusto", "nulla") {{
                            comment = "tempore";
                            end = "dolor";
                            start = "voluptas";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.interfaces.updateNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
