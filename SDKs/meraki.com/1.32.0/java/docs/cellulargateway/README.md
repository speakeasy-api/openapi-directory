# cellularGateway

### Available Operations

* [getDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [getDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [getNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [getNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [updateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [updateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [updateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [updateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

## getDeviceCellularGatewayLan

Show the LAN Settings of a MG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayLanRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularGatewayLanRequest req = new GetDeviceCellularGatewayLanRequest("pariatur");            

            GetDeviceCellularGatewayLanResponse res = sdk.cellularGateway.getDeviceCellularGatewayLan(req);

            if (res.getDeviceCellularGatewayLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularGatewayPortForwardingRulesRequest req = new GetDeviceCellularGatewayPortForwardingRulesRequest("rerum");            

            GetDeviceCellularGatewayPortForwardingRulesResponse res = sdk.cellularGateway.getDeviceCellularGatewayPortForwardingRules(req);

            if (res.getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest req = new GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest("illum");            

            GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = sdk.cellularGateway.getNetworkCellularGatewayConnectivityMonitoringDestinations(req);

            if (res.getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewayDhcpRequest req = new GetNetworkCellularGatewayDhcpRequest("amet");            

            GetNetworkCellularGatewayDhcpResponse res = sdk.cellularGateway.getNetworkCellularGatewayDhcp(req);

            if (res.getNetworkCellularGatewayDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewaySubnetPoolRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewaySubnetPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewaySubnetPoolRequest req = new GetNetworkCellularGatewaySubnetPoolRequest("libero");            

            GetNetworkCellularGatewaySubnetPoolResponse res = sdk.cellularGateway.getNetworkCellularGatewaySubnetPool(req);

            if (res.getNetworkCellularGatewaySubnetPool200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayUplinkRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayUplinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewayUplinkRequest req = new GetNetworkCellularGatewayUplinkRequest("repudiandae");            

            GetNetworkCellularGatewayUplinkResponse res = sdk.cellularGateway.getNetworkCellularGatewayUplink(req);

            if (res.getNetworkCellularGatewayUplink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCellularGatewayUplinkStatusesRequest req = new GetOrganizationCellularGatewayUplinkStatusesRequest("ut") {{
                endingBefore = "nihil";
                iccids = new String[]{{
                    add("voluptate"),
                    add("aliquid"),
                    add("blanditiis"),
                }};
                networkIds = new String[]{{
                    add("repudiandae"),
                    add("reiciendis"),
                }};
                perPage = 991688L;
                serials = new String[]{{
                    add("voluptatem"),
                    add("beatae"),
                }};
                startingAfter = "qui";
            }};            

            GetOrganizationCellularGatewayUplinkStatusesResponse res = sdk.cellularGateway.getOrganizationCellularGatewayUplinkStatuses(req);

            if (res.getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularGatewayLanRequest req = new UpdateDeviceCellularGatewayLanRequest("temporibus") {{
                requestBody = new UpdateDeviceCellularGatewayLanRequestBody() {{
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments("rerum", "molestiae") {{
                            ip = "veritatis";
                            mac = "nobis";
                            name = "Roman Purdy DVM";
                        }}),
                        add(new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments("dolorem", "rerum") {{
                            ip = "quaerat";
                            mac = "distinctio";
                            name = "Miss Calvin Connelly";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges("nesciunt", "quisquam", "labore") {{
                            comment = "tempora";
                            end = "quidem";
                            start = "nulla";
                        }}),
                        add(new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges("unde", "assumenda", "adipisci") {{
                            comment = "sequi";
                            end = "veritatis";
                            start = "veniam";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularGatewayLanResponse res = sdk.cellularGateway.updateDeviceCellularGatewayLan(req);

            if (res.updateDeviceCellularGatewayLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularGatewayPortForwardingRulesRequest req = new UpdateDeviceCellularGatewayPortForwardingRulesRequest("accusamus") {{
                requestBody = new UpdateDeviceCellularGatewayPortForwardingRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[]{{
                        add(new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules("culpa", "fuga", "modi", "et", "eveniet") {{
                            access = "provident";
                            allowedIps = new String[]{{
                                add("dolor"),
                                add("quod"),
                            }};
                            lanIp = "consequatur";
                            localPort = "accusantium";
                            name = "Pamela Feeney";
                            protocol = "aliquid";
                            publicPort = "sequi";
                        }}),
                        add(new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules("sint", "id", "ut", "et", "reiciendis") {{
                            access = "aliquid";
                            allowedIps = new String[]{{
                                add("adipisci"),
                                add("ab"),
                                add("maxime"),
                                add("porro"),
                            }};
                            lanIp = "explicabo";
                            localPort = "reiciendis";
                            name = "May Sauer";
                            protocol = "sunt";
                            publicPort = "quisquam";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularGatewayPortForwardingRulesResponse res = sdk.cellularGateway.updateDeviceCellularGatewayPortForwardingRules(req);

            if (res.updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest req = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest("distinctio") {{
                requestBody = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody() {{
                    destinations = new org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[]{{
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("quidem") {{
                            default_ = false;
                            description = "iste";
                            ip = "quod";
                        }}),
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("natus") {{
                            default_ = false;
                            description = "temporibus";
                            ip = "iure";
                        }}),
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("earum") {{
                            default_ = false;
                            description = "ipsam";
                            ip = "repudiandae";
                        }}),
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("debitis") {{
                            default_ = false;
                            description = "commodi";
                            ip = "veniam";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = sdk.cellularGateway.updateNetworkCellularGatewayConnectivityMonitoringDestinations(req);

            if (res.updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewayDhcpRequest req = new UpdateNetworkCellularGatewayDhcpRequest("esse") {{
                requestBody = new UpdateNetworkCellularGatewayDhcpRequestBody() {{
                    dhcpLeaseTime = "aliquid";
                    dnsCustomNameservers = new String[]{{
                        add("quisquam"),
                        add("molestiae"),
                        add("mollitia"),
                        add("quidem"),
                    }};
                    dnsNameservers = "delectus";
                }};;
            }};            

            UpdateNetworkCellularGatewayDhcpResponse res = sdk.cellularGateway.updateNetworkCellularGatewayDhcp(req);

            if (res.updateNetworkCellularGatewayDhcp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewaySubnetPoolRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewaySubnetPoolRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewaySubnetPoolRequest req = new UpdateNetworkCellularGatewaySubnetPoolRequest("beatae") {{
                requestBody = new UpdateNetworkCellularGatewaySubnetPoolRequestBody() {{
                    cidr = "suscipit";
                    mask = 911547L;
                }};;
            }};            

            UpdateNetworkCellularGatewaySubnetPoolResponse res = sdk.cellularGateway.updateNetworkCellularGatewaySubnetPool(req);

            if (res.updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewayUplinkRequest req = new UpdateNetworkCellularGatewayUplinkRequest("ipsam") {{
                requestBody = new UpdateNetworkCellularGatewayUplinkRequestBody() {{
                    bandwidthLimits = new UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits() {{
                        limitDown = 781777L;
                        limitUp = 474003L;
                    }};;
                }};;
            }};            

            UpdateNetworkCellularGatewayUplinkResponse res = sdk.cellularGateway.updateNetworkCellularGatewayUplink(req);

            if (res.updateNetworkCellularGatewayUplink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
