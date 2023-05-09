# dhcp

### Available Operations

* [getDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceDhcpSubnetsRequest req = new GetDeviceApplianceDhcpSubnetsRequest("fugit");            

            GetDeviceApplianceDhcpSubnetsResponse res = sdk.dhcp.getDeviceApplianceDhcpSubnets(req);

            if (res.getDeviceApplianceDhcpSubnets200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchRoutingInterfaceDhcpRequest req = new GetDeviceSwitchRoutingInterfaceDhcpRequest("doloribus", "aliquid");            

            GetDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.dhcp.getDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCellularGatewayDhcp

List common DHCP settings of MGs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayDhcpRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewayDhcpRequest req = new GetNetworkCellularGatewayDhcpRequest("et");            

            GetNetworkCellularGatewayDhcpResponse res = sdk.dhcp.getNetworkCellularGatewayDhcp(req);

            if (res.getNetworkCellularGatewayDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpV4ServersSeenRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpV4ServersSeenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpV4ServersSeenRequest req = new GetNetworkSwitchDhcpV4ServersSeenRequest("minima") {{
                endingBefore = "dignissimos";
                perPage = 540977L;
                startingAfter = "alias";
                t0 = "ratione";
                timespan = 296.07;
            }};            

            GetNetworkSwitchDhcpV4ServersSeenResponse res = sdk.dhcp.getNetworkSwitchDhcpV4ServersSeen(req);

            if (res.getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStackRoutingInterfaceDhcpRequest req = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest("maxime", "tempora", "aperiam");            

            GetNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.dhcp.getNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchRoutingInterfaceDhcpRequest req = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest("impedit", "magni") {{
                requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "expedita";
                    bootNextServer = "magnam";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.THIRTY_MINUTES;
                    dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_SERVER;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("voluptatibus", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT, "eveniet") {{
                            code = "eos";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "ut";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("dolores", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "consectetur") {{
                            code = "velit";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "molestiae";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions("at", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP, "nemo") {{
                            code = "exercitationem";
                            type = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX;
                            value = "officiis";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("odio"),
                        add("delectus"),
                        add("rem"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("minus"),
                        add("consequuntur"),
                        add("iste"),
                        add("veritatis"),
                    }};
                    dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.CUSTOM;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("commodi", "alias", "doloremque") {{
                            ip = "voluptas";
                            mac = "quidem";
                            name = "Raquel Raynor";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("atque", "veniam", "sed") {{
                            ip = "perspiciatis";
                            mac = "sapiente";
                            name = "Katherine Smith";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments("distinctio", "iste", "asperiores") {{
                            ip = "consectetur";
                            mac = "quo";
                            name = "Lynn Gutkowski";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("totam", "neque") {{
                            comment = "laudantium";
                            end = "sequi";
                            start = "repellat";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("quidem", "aut") {{
                            comment = "repellendus";
                            end = "asperiores";
                            start = "iste";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("fuga", "eaque") {{
                            comment = "minus";
                            end = "numquam";
                            start = "vel";
                        }}),
                        add(new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges("fugit", "recusandae") {{
                            comment = "iste";
                            end = "tempora";
                            start = "necessitatibus";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceSwitchRoutingInterfaceDhcpResponse res = sdk.dhcp.updateDeviceSwitchRoutingInterfaceDhcp(req);

            if (res.updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewayDhcp

Update common DHCP settings of MGs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayDhcpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayDhcpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayDhcpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewayDhcpRequest req = new UpdateNetworkCellularGatewayDhcpRequest("quod") {{
                requestBody = new UpdateNetworkCellularGatewayDhcpRequestBody() {{
                    dhcpLeaseTime = "explicabo";
                    dnsCustomNameservers = new String[]{{
                        add("aut"),
                    }};
                    dnsNameservers = "ipsam";
                }};;
            }};            

            UpdateNetworkCellularGatewayDhcpResponse res = sdk.dhcp.updateNetworkCellularGatewayDhcp(req);

            if (res.updateNetworkCellularGatewayDhcp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest req = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest("delectus", "saepe", "odio") {{
                requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody() {{
                    bootFileName = "laboriosam";
                    bootNextServer = "veniam";
                    bootOptionsEnabled = false;
                    dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum.THIRTY_MINUTES;
                    dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum.DHCP_SERVER;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("rem", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "aperiam") {{
                            code = "rerum";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "quidem";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("magni", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX, "aliquid") {{
                            code = "quasi";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "maiores";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("magnam", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.HEX, "esse") {{
                            code = "est";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.IP;
                            value = "eaque";
                        }}),
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions("dolorum", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER, "amet") {{
                            code = "consequatur";
                            type = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum.INTEGER;
                            value = "hic";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("corrupti"),
                        add("odit"),
                        add("modi"),
                    }};
                    dnsCustomNameservers = new String[]{{
                        add("officia"),
                        add("totam"),
                    }};
                    dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum.GOOGLE_PUBLIC_DNS;
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments("qui", "possimus", "a") {{
                            ip = "beatae";
                            mac = "esse";
                            name = "Frankie Stark";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges("dignissimos", "porro") {{
                            comment = "debitis";
                            end = "itaque";
                            start = "recusandae";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse res = sdk.dhcp.updateNetworkSwitchStackRoutingInterfaceDhcp(req);

            if (res.updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
