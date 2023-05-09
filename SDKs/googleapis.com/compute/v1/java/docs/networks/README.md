# networks

### Available Operations

* [computeNetworksAddPeering](#computenetworksaddpeering) - Adds a peering to the specified network.
* [computeNetworksDelete](#computenetworksdelete) - Deletes the specified network.
* [computeNetworksGet](#computenetworksget) - Returns the specified network.
* [computeNetworksGetEffectiveFirewalls](#computenetworksgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeNetworksInsert](#computenetworksinsert) - Creates a network in the specified project using the data included in the request.
* [computeNetworksList](#computenetworkslist) - Retrieves the list of networks available to the specified project.
* [computeNetworksListPeeringRoutes](#computenetworkslistpeeringroutes) - Lists the peering routes exchanged over peering connection.
* [computeNetworksPatch](#computenetworkspatch) - Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.
* [computeNetworksRemovePeering](#computenetworksremovepeering) - Removes a peering from the specified network.
* [computeNetworksSwitchToCustomMode](#computenetworksswitchtocustommode) - Switches the network mode from auto subnet mode to custom subnet mode.
* [computeNetworksUpdatePeering](#computenetworksupdatepeering) - Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

## computeNetworksAddPeering

Adds a peering to the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksAddPeeringRequest;
import org.openapis.openapi.models.operations.ComputeNetworksAddPeeringResponse;
import org.openapis.openapi.models.operations.ComputeNetworksAddPeeringSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksAddPeeringSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksAddPeeringSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkPeering;
import org.openapis.openapi.models.shared.NetworkPeeringStackTypeEnum;
import org.openapis.openapi.models.shared.NetworkPeeringStateEnum;
import org.openapis.openapi.models.shared.NetworksAddPeeringRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksAddPeeringRequest req = new ComputeNetworksAddPeeringRequest("minima", "placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                networksAddPeeringRequest = new NetworksAddPeeringRequest() {{
                    autoCreateRoutes = false;
                    name = "Arturo Ward PhD";
                    networkPeering = new NetworkPeering() {{
                        autoCreateRoutes = false;
                        exchangeSubnetRoutes = false;
                        exportCustomRoutes = false;
                        exportSubnetRoutesWithPublicIp = false;
                        importCustomRoutes = false;
                        importSubnetRoutesWithPublicIp = false;
                        name = "Mark Weimann";
                        network = "ipsum";
                        peerMtu = 458686;
                        stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                        state = NetworkPeeringStateEnum.ACTIVE;
                        stateDetails = "libero";
                    }};;
                    peerNetwork = "repellat";
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "molestiae";
                key = "ducimus";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "doloribus";
                uploadType = "nostrum";
                uploadProtocol = "doloremque";
                userIp = "eius";
            }};            

            ComputeNetworksAddPeeringResponse res = sdk.networks.computeNetworksAddPeering(req, new ComputeNetworksAddPeeringSecurity() {{
                option1 = new ComputeNetworksAddPeeringSecurityOption1("mollitia", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksDelete

Deletes the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNetworksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNetworksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksDeleteRequest req = new ComputeNetworksDeleteRequest("debitis", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "nam";
                key = "eum";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "officia";
                requestId = "repudiandae";
                uploadType = "recusandae";
                uploadProtocol = "architecto";
                userIp = "sint";
            }};            

            ComputeNetworksDeleteResponse res = sdk.networks.computeNetworksDelete(req, new ComputeNetworksDeleteSecurity() {{
                option1 = new ComputeNetworksDeleteSecurityOption1("cumque", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksGet

Returns the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksGetRequest;
import org.openapis.openapi.models.operations.ComputeNetworksGetResponse;
import org.openapis.openapi.models.operations.ComputeNetworksGetSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksGetRequest req = new ComputeNetworksGetRequest("nisi", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "quasi";
                key = "atque";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "neque";
                uploadProtocol = "dolor";
                userIp = "vitae";
            }};            

            ComputeNetworksGetResponse res = sdk.networks.computeNetworksGet(req, new ComputeNetworksGetSecurity() {{
                option1 = new ComputeNetworksGetSecurityOption1("optio", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.network != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksGetEffectiveFirewalls

Returns the effective firewalls on a given network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksGetEffectiveFirewallsRequest;
import org.openapis.openapi.models.operations.ComputeNetworksGetEffectiveFirewallsResponse;
import org.openapis.openapi.models.operations.ComputeNetworksGetEffectiveFirewallsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksGetEffectiveFirewallsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksGetEffectiveFirewallsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksGetEffectiveFirewallsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksGetEffectiveFirewallsRequest req = new ComputeNetworksGetEffectiveFirewallsRequest("soluta", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "quam";
                key = "est";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "modi";
                uploadProtocol = "facere";
                userIp = "illum";
            }};            

            ComputeNetworksGetEffectiveFirewallsResponse res = sdk.networks.computeNetworksGetEffectiveFirewalls(req, new ComputeNetworksGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeNetworksGetEffectiveFirewallsSecurityOption1("perferendis", "nulla") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networksGetEffectiveFirewallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksInsert

Creates a network in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksInsertRequest;
import org.openapis.openapi.models.operations.ComputeNetworksInsertResponse;
import org.openapis.openapi.models.operations.ComputeNetworksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.NetworkNetworkFirewallPolicyEnforcementOrderEnum;
import org.openapis.openapi.models.shared.NetworkPeering;
import org.openapis.openapi.models.shared.NetworkPeeringStackTypeEnum;
import org.openapis.openapi.models.shared.NetworkPeeringStateEnum;
import org.openapis.openapi.models.shared.NetworkRoutingConfig;
import org.openapis.openapi.models.shared.NetworkRoutingConfigRoutingModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksInsertRequest req = new ComputeNetworksInsertRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                network = new Network() {{
                    iPv4Range = "animi";
                    autoCreateSubnetworks = false;
                    creationTimestamp = "distinctio";
                    description = "itaque";
                    enableUlaInternalIpv6 = false;
                    firewallPolicy = "veniam";
                    gatewayIPv4 = "totam";
                    id = "repudiandae";
                    internalIpv6Range = "expedita";
                    kind = "velit";
                    mtu = 861901;
                    name = "Clara Rogahn DDS";
                    networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum.BEFORE_CLASSIC_FIREWALL;
                    peerings = new org.openapis.openapi.models.shared.NetworkPeering[]{{
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Taylor Gutmann";
                            network = "molestias";
                            peerMtu = 902925;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "quasi";
                        }}),
                    }};
                    routingConfig = new NetworkRoutingConfig() {{
                        routingMode = NetworkRoutingConfigRoutingModeEnum.REGIONAL;
                    }};;
                    selfLink = "harum";
                    selfLinkWithId = "aspernatur";
                    subnetworks = new String[]{{
                        add("debitis"),
                        add("rem"),
                    }};
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "incidunt";
                key = "corrupti";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolorem";
                requestId = "odit";
                uploadType = "quis";
                uploadProtocol = "voluptas";
                userIp = "tempore";
            }};            

            ComputeNetworksInsertResponse res = sdk.networks.computeNetworksInsert(req, new ComputeNetworksInsertSecurity() {{
                option1 = new ComputeNetworksInsertSecurityOption1("repudiandae", "molestias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksList

Retrieves the list of networks available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksListRequest;
import org.openapis.openapi.models.operations.ComputeNetworksListResponse;
import org.openapis.openapi.models.operations.ComputeNetworksListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksListRequest req = new ComputeNetworksListRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "eligendi";
                filter = "tempore";
                key = "fugit";
                maxResults = 798996L;
                oauthToken = "mollitia";
                orderBy = "laudantium";
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "sint";
                returnPartialSuccess = false;
                uploadType = "quae";
                uploadProtocol = "quos";
                userIp = "repellendus";
            }};            

            ComputeNetworksListResponse res = sdk.networks.computeNetworksList(req, new ComputeNetworksListSecurity() {{
                option1 = new ComputeNetworksListSecurityOption1("in", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksListPeeringRoutes

Lists the peering routes exchanged over peering connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesDirectionEnum;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesRequest;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesResponse;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksListPeeringRoutesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksListPeeringRoutesRequest req = new ComputeNetworksListPeeringRoutesRequest("corrupti", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "dolores";
                direction = ComputeNetworksListPeeringRoutesDirectionEnum.OUTGOING;
                fields = "quae";
                filter = "eum";
                key = "itaque";
                maxResults = 600299L;
                oauthToken = "sed";
                orderBy = "qui";
                pageToken = "totam";
                peeringName = "cum";
                prettyPrint = false;
                quotaUser = "nemo";
                region = "ex";
                returnPartialSuccess = false;
                uploadType = "aperiam";
                uploadProtocol = "nisi";
                userIp = "enim";
            }};            

            ComputeNetworksListPeeringRoutesResponse res = sdk.networks.computeNetworksListPeeringRoutes(req, new ComputeNetworksListPeeringRoutesSecurity() {{
                option1 = new ComputeNetworksListPeeringRoutesSecurityOption1("similique", "exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.exchangedPeeringRoutesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksPatch

Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksPatchRequest;
import org.openapis.openapi.models.operations.ComputeNetworksPatchResponse;
import org.openapis.openapi.models.operations.ComputeNetworksPatchSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.NetworkNetworkFirewallPolicyEnforcementOrderEnum;
import org.openapis.openapi.models.shared.NetworkPeering;
import org.openapis.openapi.models.shared.NetworkPeeringStackTypeEnum;
import org.openapis.openapi.models.shared.NetworkPeeringStateEnum;
import org.openapis.openapi.models.shared.NetworkRoutingConfig;
import org.openapis.openapi.models.shared.NetworkRoutingConfigRoutingModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksPatchRequest req = new ComputeNetworksPatchRequest("voluptatem", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                network1 = new Network() {{
                    iPv4Range = "facilis";
                    autoCreateSubnetworks = false;
                    creationTimestamp = "officiis";
                    description = "repellat";
                    enableUlaInternalIpv6 = false;
                    firewallPolicy = "cum";
                    gatewayIPv4 = "totam";
                    id = "laborum";
                    internalIpv6Range = "hic";
                    kind = "eum";
                    mtu = 527451;
                    name = "Sherri Schuppe";
                    networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum.BEFORE_CLASSIC_FIREWALL;
                    peerings = new org.openapis.openapi.models.shared.NetworkPeering[]{{
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Elizabeth Goodwin";
                            network = "adipisci";
                            peerMtu = 653738;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "nisi";
                        }}),
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Leticia Barrows";
                            network = "praesentium";
                            peerMtu = 452831;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "ratione";
                        }}),
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Clint Thiel";
                            network = "quisquam";
                            peerMtu = 443167;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.ACTIVE;
                            stateDetails = "temporibus";
                        }}),
                    }};
                    routingConfig = new NetworkRoutingConfig() {{
                        routingMode = NetworkRoutingConfigRoutingModeEnum.REGIONAL;
                    }};;
                    selfLink = "fugiat";
                    selfLinkWithId = "iusto";
                    subnetworks = new String[]{{
                        add("corporis"),
                    }};
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "placeat";
                key = "nam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "excepturi";
                uploadType = "reprehenderit";
                uploadProtocol = "ducimus";
                userIp = "voluptatem";
            }};            

            ComputeNetworksPatchResponse res = sdk.networks.computeNetworksPatch(req, new ComputeNetworksPatchSecurity() {{
                option1 = new ComputeNetworksPatchSecurityOption1("quasi", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksRemovePeering

Removes a peering from the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksRemovePeeringRequest;
import org.openapis.openapi.models.operations.ComputeNetworksRemovePeeringResponse;
import org.openapis.openapi.models.operations.ComputeNetworksRemovePeeringSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksRemovePeeringSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksRemovePeeringSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworksRemovePeeringRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksRemovePeeringRequest req = new ComputeNetworksRemovePeeringRequest("harum", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                networksRemovePeeringRequest = new NetworksRemovePeeringRequest() {{
                    name = "Margaret Gibson";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "laborum";
                key = "eius";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "cupiditate";
                requestId = "natus";
                uploadType = "excepturi";
                uploadProtocol = "quos";
                userIp = "eos";
            }};            

            ComputeNetworksRemovePeeringResponse res = sdk.networks.computeNetworksRemovePeering(req, new ComputeNetworksRemovePeeringSecurity() {{
                option1 = new ComputeNetworksRemovePeeringSecurityOption1("voluptatum", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksSwitchToCustomMode

Switches the network mode from auto subnet mode to custom subnet mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksSwitchToCustomModeRequest;
import org.openapis.openapi.models.operations.ComputeNetworksSwitchToCustomModeResponse;
import org.openapis.openapi.models.operations.ComputeNetworksSwitchToCustomModeSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksSwitchToCustomModeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksSwitchToCustomModeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksSwitchToCustomModeRequest req = new ComputeNetworksSwitchToCustomModeRequest("iste", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "harum";
                key = "fugit";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "eum";
                uploadType = "alias";
                uploadProtocol = "autem";
                userIp = "eligendi";
            }};            

            ComputeNetworksSwitchToCustomModeResponse res = sdk.networks.computeNetworksSwitchToCustomMode(req, new ComputeNetworksSwitchToCustomModeSecurity() {{
                option1 = new ComputeNetworksSwitchToCustomModeSecurityOption1("doloribus", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksUpdatePeering

Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksUpdatePeeringRequest;
import org.openapis.openapi.models.operations.ComputeNetworksUpdatePeeringResponse;
import org.openapis.openapi.models.operations.ComputeNetworksUpdatePeeringSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksUpdatePeeringSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksUpdatePeeringSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkPeering;
import org.openapis.openapi.models.shared.NetworkPeeringStackTypeEnum;
import org.openapis.openapi.models.shared.NetworkPeeringStateEnum;
import org.openapis.openapi.models.shared.NetworksUpdatePeeringRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksUpdatePeeringRequest req = new ComputeNetworksUpdatePeeringRequest("aut", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                networksUpdatePeeringRequest = new NetworksUpdatePeeringRequest() {{
                    networkPeering = new NetworkPeering() {{
                        autoCreateRoutes = false;
                        exchangeSubnetRoutes = false;
                        exportCustomRoutes = false;
                        exportSubnetRoutesWithPublicIp = false;
                        importCustomRoutes = false;
                        importSubnetRoutesWithPublicIp = false;
                        name = "Alberto Miller MD";
                        network = "consectetur";
                        peerMtu = 271164;
                        stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                        state = NetworkPeeringStateEnum.ACTIVE;
                        stateDetails = "veniam";
                    }};;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "laborum";
                key = "voluptatem";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "a";
                uploadType = "officia";
                uploadProtocol = "deserunt";
                userIp = "saepe";
            }};            

            ComputeNetworksUpdatePeeringResponse res = sdk.networks.computeNetworksUpdatePeering(req, new ComputeNetworksUpdatePeeringSecurity() {{
                option1 = new ComputeNetworksUpdatePeeringSecurityOption1("illum", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
