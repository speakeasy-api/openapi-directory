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
* [computeNetworksTestIamPermissions](#computenetworkstestiampermissions) - Returns permissions that a caller has on the specified resource.
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

            ComputeNetworksAddPeeringRequest req = new ComputeNetworksAddPeeringRequest("reprehenderit", "quae") {{
                dollarXgafv = XgafvEnum.ONE;
                networksAddPeeringRequest = new NetworksAddPeeringRequest() {{
                    autoCreateRoutes = false;
                    name = "Rosie Friesen";
                    networkPeering = new NetworkPeering() {{
                        autoCreateRoutes = false;
                        exchangeSubnetRoutes = false;
                        exportCustomRoutes = false;
                        exportSubnetRoutesWithPublicIp = false;
                        importCustomRoutes = false;
                        importSubnetRoutesWithPublicIp = false;
                        name = "Lorenzo Bergstrom";
                        network = "at";
                        peerMtu = 456056;
                        stackType = NetworkPeeringStackTypeEnum.IPV4_ONLY;
                        state = NetworkPeeringStateEnum.INACTIVE;
                        stateDetails = "quisquam";
                    }};;
                    peerNetwork = "nesciunt";
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "nihil";
                key = "harum";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "aliquam";
                requestId = "non";
                uploadType = "porro";
                uploadProtocol = "rem";
                userIp = "nemo";
            }};            

            ComputeNetworksAddPeeringResponse res = sdk.networks.computeNetworksAddPeering(req, new ComputeNetworksAddPeeringSecurity() {{
                option1 = new ComputeNetworksAddPeeringSecurityOption1("aut", "aspernatur") {{
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

            ComputeNetworksDeleteRequest req = new ComputeNetworksDeleteRequest("officia", "omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "maiores";
                key = "dolore";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "laboriosam";
                uploadType = "porro";
                uploadProtocol = "est";
                userIp = "sed";
            }};            

            ComputeNetworksDeleteResponse res = sdk.networks.computeNetworksDelete(req, new ComputeNetworksDeleteSecurity() {{
                option1 = new ComputeNetworksDeleteSecurityOption1("nulla", "reprehenderit") {{
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

            ComputeNetworksGetRequest req = new ComputeNetworksGetRequest("odit", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "autem";
                key = "non";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "eos";
                uploadProtocol = "odio";
                userIp = "odit";
            }};            

            ComputeNetworksGetResponse res = sdk.networks.computeNetworksGet(req, new ComputeNetworksGetSecurity() {{
                option1 = new ComputeNetworksGetSecurityOption1("non", "officia") {{
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

            ComputeNetworksGetEffectiveFirewallsRequest req = new ComputeNetworksGetEffectiveFirewallsRequest("fuga", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "culpa";
                key = "illo";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "saepe";
                uploadProtocol = "quam";
                userIp = "est";
            }};            

            ComputeNetworksGetEffectiveFirewallsResponse res = sdk.networks.computeNetworksGetEffectiveFirewalls(req, new ComputeNetworksGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeNetworksGetEffectiveFirewallsSecurityOption1("quidem", "dolorem") {{
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

            ComputeNetworksInsertRequest req = new ComputeNetworksInsertRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                network = new Network() {{
                    iPv4Range = "esse";
                    autoCreateSubnetworks = false;
                    creationTimestamp = "nobis";
                    description = "ipsa";
                    enableUlaInternalIpv6 = false;
                    firewallPolicy = "corporis";
                    gatewayIPv4 = "officiis";
                    id = "dicta";
                    internalIpv6Range = "nesciunt";
                    kind = "temporibus";
                    mtu = 707891;
                    name = "Ian White";
                    networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum.AFTER_CLASSIC_FIREWALL;
                    peerings = new org.openapis.openapi.models.shared.NetworkPeering[]{{
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Byron Ernser";
                            network = "delectus";
                            peerMtu = 619943;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "qui";
                        }}),
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Jaime Kozey";
                            network = "quibusdam";
                            peerMtu = 4619;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "voluptas";
                        }}),
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Mr. Anita Herzog MD";
                            network = "minima";
                            peerMtu = 749875;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.ACTIVE;
                            stateDetails = "est";
                        }}),
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Anne Cassin";
                            network = "reiciendis";
                            peerMtu = 994063;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.ACTIVE;
                            stateDetails = "eaque";
                        }}),
                    }};
                    routingConfig = new NetworkRoutingConfig() {{
                        routingMode = NetworkRoutingConfigRoutingModeEnum.REGIONAL;
                    }};;
                    selfLink = "dolores";
                    selfLinkWithId = "facilis";
                    subnetworks = new String[]{{
                        add("aspernatur"),
                        add("vero"),
                    }};
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "delectus";
                key = "ea";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "error";
                requestId = "dolores";
                uploadType = "deserunt";
                uploadProtocol = "rem";
                userIp = "quam";
            }};            

            ComputeNetworksInsertResponse res = sdk.networks.computeNetworksInsert(req, new ComputeNetworksInsertSecurity() {{
                option1 = new ComputeNetworksInsertSecurityOption1("nostrum", "optio") {{
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

            ComputeNetworksListRequest req = new ComputeNetworksListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "saepe";
                filter = "minima";
                key = "numquam";
                maxResults = 743213L;
                oauthToken = "quaerat";
                orderBy = "iusto";
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "cumque";
                returnPartialSuccess = false;
                uploadType = "nisi";
                uploadProtocol = "laborum";
                userIp = "mollitia";
            }};            

            ComputeNetworksListResponse res = sdk.networks.computeNetworksList(req, new ComputeNetworksListSecurity() {{
                option1 = new ComputeNetworksListSecurityOption1("hic", "molestias") {{
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

            ComputeNetworksListPeeringRoutesRequest req = new ComputeNetworksListPeeringRoutesRequest("harum", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "molestiae";
                direction = ComputeNetworksListPeeringRoutesDirectionEnum.OUTGOING;
                fields = "rem";
                filter = "repellat";
                key = "esse";
                maxResults = 842478L;
                oauthToken = "non";
                orderBy = "quasi";
                pageToken = "nisi";
                peeringName = "vitae";
                prettyPrint = false;
                quotaUser = "incidunt";
                region = "nemo";
                returnPartialSuccess = false;
                uploadType = "recusandae";
                uploadProtocol = "quidem";
                userIp = "vero";
            }};            

            ComputeNetworksListPeeringRoutesResponse res = sdk.networks.computeNetworksListPeeringRoutes(req, new ComputeNetworksListPeeringRoutesSecurity() {{
                option1 = new ComputeNetworksListPeeringRoutesSecurityOption1("assumenda", "praesentium") {{
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

            ComputeNetworksPatchRequest req = new ComputeNetworksPatchRequest("eos", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                network1 = new Network() {{
                    iPv4Range = "a";
                    autoCreateSubnetworks = false;
                    creationTimestamp = "consequuntur";
                    description = "optio";
                    enableUlaInternalIpv6 = false;
                    firewallPolicy = "vitae";
                    gatewayIPv4 = "iure";
                    id = "nihil";
                    internalIpv6Range = "excepturi";
                    kind = "nulla";
                    mtu = 536819;
                    name = "Daniel Parker";
                    networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum.AFTER_CLASSIC_FIREWALL;
                    peerings = new org.openapis.openapi.models.shared.NetworkPeering[]{{
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Kellie Schimmel";
                            network = "laudantium";
                            peerMtu = 912420;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "ab";
                        }}),
                        add(new NetworkPeering() {{
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Marianne Stehr MD";
                            network = "recusandae";
                            peerMtu = 900046;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_ONLY;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "reprehenderit";
                        }}),
                    }};
                    routingConfig = new NetworkRoutingConfig() {{
                        routingMode = NetworkRoutingConfigRoutingModeEnum.GLOBAL;
                    }};;
                    selfLink = "aspernatur";
                    selfLinkWithId = "ab";
                    subnetworks = new String[]{{
                        add("hic"),
                    }};
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "similique";
                key = "eaque";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "laudantium";
                uploadType = "tempore";
                uploadProtocol = "odio";
                userIp = "inventore";
            }};            

            ComputeNetworksPatchResponse res = sdk.networks.computeNetworksPatch(req, new ComputeNetworksPatchSecurity() {{
                option1 = new ComputeNetworksPatchSecurityOption1("distinctio", "neque") {{
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

            ComputeNetworksRemovePeeringRequest req = new ComputeNetworksRemovePeeringRequest("possimus", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                networksRemovePeeringRequest = new NetworksRemovePeeringRequest() {{
                    name = "Mike Prosacco";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "dignissimos";
                key = "adipisci";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "corrupti";
                requestId = "corrupti";
                uploadType = "vero";
                uploadProtocol = "voluptate";
                userIp = "enim";
            }};            

            ComputeNetworksRemovePeeringResponse res = sdk.networks.computeNetworksRemovePeering(req, new ComputeNetworksRemovePeeringSecurity() {{
                option1 = new ComputeNetworksRemovePeeringSecurityOption1("officia", "rerum") {{
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

            ComputeNetworksSwitchToCustomModeRequest req = new ComputeNetworksSwitchToCustomModeRequest("voluptate", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "magni";
                key = "doloribus";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "eaque";
                requestId = "reprehenderit";
                uploadType = "ut";
                uploadProtocol = "quod";
                userIp = "at";
            }};            

            ComputeNetworksSwitchToCustomModeResponse res = sdk.networks.computeNetworksSwitchToCustomMode(req, new ComputeNetworksSwitchToCustomModeSecurity() {{
                option1 = new ComputeNetworksSwitchToCustomModeSecurityOption1("aliquam", "incidunt") {{
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

## computeNetworksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNetworksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNetworksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksTestIamPermissionsRequest req = new ComputeNetworksTestIamPermissionsRequest("quisquam", "dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("perferendis"),
                        add("libero"),
                        add("sunt"),
                        add("beatae"),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "debitis";
                key = "pariatur";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "dolor";
                uploadProtocol = "corporis";
                userIp = "quidem";
            }};            

            ComputeNetworksTestIamPermissionsResponse res = sdk.networks.computeNetworksTestIamPermissions(req, new ComputeNetworksTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworksTestIamPermissionsSecurityOption1("iste", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
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

            ComputeNetworksUpdatePeeringRequest req = new ComputeNetworksUpdatePeeringRequest("quisquam", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                networksUpdatePeeringRequest = new NetworksUpdatePeeringRequest() {{
                    networkPeering = new NetworkPeering() {{
                        autoCreateRoutes = false;
                        exchangeSubnetRoutes = false;
                        exportCustomRoutes = false;
                        exportSubnetRoutesWithPublicIp = false;
                        importCustomRoutes = false;
                        importSubnetRoutesWithPublicIp = false;
                        name = "Leona Kuhlman";
                        network = "eius";
                        peerMtu = 359516;
                        stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                        state = NetworkPeeringStateEnum.INACTIVE;
                        stateDetails = "dolore";
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "tempora";
                key = "laboriosam";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "porro";
                requestId = "ducimus";
                uploadType = "placeat";
                uploadProtocol = "expedita";
                userIp = "error";
            }};            

            ComputeNetworksUpdatePeeringResponse res = sdk.networks.computeNetworksUpdatePeering(req, new ComputeNetworksUpdatePeeringSecurity() {{
                option1 = new ComputeNetworksUpdatePeeringSecurityOption1("sunt", "placeat") {{
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
