# networks

### Available Operations

* [computeNetworksAddPeering](#computenetworksaddpeering) - Adds a peering to the specified network.
* [computeNetworksDelete](#computenetworksdelete) - Deletes the specified network.
* [computeNetworksGet](#computenetworksget) - Returns the specified network.
* [computeNetworksGetEffectiveFirewalls](#computenetworksgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeNetworksInsert](#computenetworksinsert) - Creates a network in the specified project using the data included in the request.
* [computeNetworksList](#computenetworkslist) - Retrieves the list of networks available to the specified project.
* [computeNetworksListIpAddresses](#computenetworkslistipaddresses) - Lists the internal IP addresses in the specified network.
* [computeNetworksListIpOwners](#computenetworkslistipowners) - Lists the internal IP owners in the specified network.
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

            ComputeNetworksAddPeeringRequest req = new ComputeNetworksAddPeeringRequest("sed", "eos") {{
                dollarXgafv = XgafvEnum.ONE;
                networksAddPeeringRequest = new NetworksAddPeeringRequest() {{
                    autoCreateRoutes = false;
                    exportCustomRoutes = false;
                    importCustomRoutes = false;
                    name = "Clay Feeney I";
                    networkPeering = new NetworkPeering() {{
                        advertisePeerSubnetsViaRouters = false;
                        autoCreateRoutes = false;
                        exchangeSubnetRoutes = false;
                        exportCustomRoutes = false;
                        exportSubnetRoutesWithPublicIp = false;
                        importCustomRoutes = false;
                        importSubnetRoutesWithPublicIp = false;
                        name = "Ernest Bechtelar";
                        network = "asperiores";
                        peerMtu = 782374;
                        stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                        state = NetworkPeeringStateEnum.ACTIVE;
                        stateDetails = "corporis";
                    }};;
                    peerNetwork = "doloribus";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "illo";
                key = "eius";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "accusamus";
                uploadType = "repellendus";
                uploadProtocol = "maiores";
                userIp = "aliquid";
            }};            

            ComputeNetworksAddPeeringResponse res = sdk.networks.computeNetworksAddPeering(req, new ComputeNetworksAddPeeringSecurity() {{
                option1 = new ComputeNetworksAddPeeringSecurityOption1("saepe", "incidunt") {{
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

            ComputeNetworksDeleteRequest req = new ComputeNetworksDeleteRequest("quas", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "accusamus";
                key = "exercitationem";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "quaerat";
                uploadType = "et";
                uploadProtocol = "maiores";
                userIp = "accusantium";
            }};            

            ComputeNetworksDeleteResponse res = sdk.networks.computeNetworksDelete(req, new ComputeNetworksDeleteSecurity() {{
                option1 = new ComputeNetworksDeleteSecurityOption1("consectetur", "expedita") {{
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

            ComputeNetworksGetRequest req = new ComputeNetworksGetRequest("quibusdam", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "accusantium";
                key = "provident";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "veritatis";
                uploadProtocol = "earum";
                userIp = "ducimus";
            }};            

            ComputeNetworksGetResponse res = sdk.networks.computeNetworksGet(req, new ComputeNetworksGetSecurity() {{
                option1 = new ComputeNetworksGetSecurityOption1("quisquam", "laboriosam") {{
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

            ComputeNetworksGetEffectiveFirewallsRequest req = new ComputeNetworksGetEffectiveFirewallsRequest("quaerat", "quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "nisi";
                key = "cupiditate";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "cum";
                uploadProtocol = "recusandae";
                userIp = "voluptate";
            }};            

            ComputeNetworksGetEffectiveFirewallsResponse res = sdk.networks.computeNetworksGetEffectiveFirewalls(req, new ComputeNetworksGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeNetworksGetEffectiveFirewallsSecurityOption1("dicta", "tempore") {{
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

            ComputeNetworksInsertRequest req = new ComputeNetworksInsertRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                network = new Network() {{
                    iPv4Range = "dignissimos";
                    autoCreateSubnetworks = false;
                    creationTimestamp = "aut";
                    description = "totam";
                    enableUlaInternalIpv6 = false;
                    firewallPolicy = "at";
                    gatewayIPv4 = "laborum";
                    id = "repudiandae";
                    internalIpv6Range = "perferendis";
                    kind = "unde";
                    mtu = 130101;
                    name = "Cory Beier";
                    networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum.AFTER_CLASSIC_FIREWALL;
                    peerings = new org.openapis.openapi.models.shared.NetworkPeering[]{{
                        add(new NetworkPeering() {{
                            advertisePeerSubnetsViaRouters = false;
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Tommy Mraz";
                            network = "quibusdam";
                            peerMtu = 775822;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "quae";
                        }}),
                    }};
                    region = "illo";
                    routingConfig = new NetworkRoutingConfig() {{
                        routingMode = NetworkRoutingConfigRoutingModeEnum.GLOBAL;
                    }};;
                    selfLink = "necessitatibus";
                    selfLinkWithId = "reprehenderit";
                    subnetworks = new String[]{{
                        add("tenetur"),
                        add("laboriosam"),
                        add("adipisci"),
                        add("aliquid"),
                    }};
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "dolores";
                fields = "tempore";
                key = "officia";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "eius";
                uploadType = "impedit";
                uploadProtocol = "deserunt";
                userIp = "atque";
            }};            

            ComputeNetworksInsertResponse res = sdk.networks.computeNetworksInsert(req, new ComputeNetworksInsertSecurity() {{
                option1 = new ComputeNetworksInsertSecurityOption1("error", "debitis") {{
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

            ComputeNetworksListRequest req = new ComputeNetworksListRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "cumque";
                filter = "recusandae";
                key = "quis";
                maxResults = 654812L;
                oauthToken = "ab";
                orderBy = "ipsum";
                pageToken = "rerum";
                prettyPrint = false;
                quotaUser = "fugiat";
                returnPartialSuccess = false;
                uploadType = "aspernatur";
                uploadProtocol = "dolor";
                userIp = "dicta";
            }};            

            ComputeNetworksListResponse res = sdk.networks.computeNetworksList(req, new ComputeNetworksListSecurity() {{
                option1 = new ComputeNetworksListSecurityOption1("maxime", "blanditiis") {{
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

## computeNetworksListIpAddresses

Lists the internal IP addresses in the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksListIpAddressesRequest;
import org.openapis.openapi.models.operations.ComputeNetworksListIpAddressesResponse;
import org.openapis.openapi.models.operations.ComputeNetworksListIpAddressesSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksListIpAddressesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksListIpAddressesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksListIpAddressesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksListIpAddressesRequest req = new ComputeNetworksListIpAddressesRequest("vero", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "totam";
                filter = "commodi";
                key = "earum";
                maxResults = 685160L;
                oauthToken = "sint";
                orderBy = "suscipit";
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "assumenda";
                returnPartialSuccess = false;
                types = "repellat";
                uploadType = "sint";
                uploadProtocol = "porro";
                userIp = "placeat";
            }};            

            ComputeNetworksListIpAddressesResponse res = sdk.networks.computeNetworksListIpAddresses(req, new ComputeNetworksListIpAddressesSecurity() {{
                option1 = new ComputeNetworksListIpAddressesSecurityOption1("animi", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ipAddressesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworksListIpOwners

Lists the internal IP owners in the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworksListIpOwnersRequest;
import org.openapis.openapi.models.operations.ComputeNetworksListIpOwnersResponse;
import org.openapis.openapi.models.operations.ComputeNetworksListIpOwnersSecurity;
import org.openapis.openapi.models.operations.ComputeNetworksListIpOwnersSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworksListIpOwnersSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworksListIpOwnersSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworksListIpOwnersRequest req = new ComputeNetworksListIpOwnersRequest("nihil", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "dolores";
                filter = "voluptatem";
                ipCidrRange = "aperiam";
                key = "dolores";
                maxResults = 473330L;
                oauthToken = "similique";
                orderBy = "minus";
                ownerProjects = "soluta";
                ownerTypes = "provident";
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ratione";
                returnPartialSuccess = false;
                subnetName = "impedit";
                subnetRegion = "tempore";
                uploadType = "maiores";
                uploadProtocol = "eveniet";
                userIp = "repudiandae";
            }};            

            ComputeNetworksListIpOwnersResponse res = sdk.networks.computeNetworksListIpOwners(req, new ComputeNetworksListIpOwnersSecurity() {{
                option1 = new ComputeNetworksListIpOwnersSecurityOption1("illum", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ipOwnerList != null) {
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

            ComputeNetworksListPeeringRoutesRequest req = new ComputeNetworksListPeeringRoutesRequest("nesciunt", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "itaque";
                direction = ComputeNetworksListPeeringRoutesDirectionEnum.INCOMING;
                fields = "repellat";
                filter = "maiores";
                key = "tempore";
                maxResults = 478665L;
                oauthToken = "veniam";
                orderBy = "repellat";
                pageToken = "delectus";
                peeringName = "architecto";
                prettyPrint = false;
                quotaUser = "doloremque";
                region = "dolores";
                returnPartialSuccess = false;
                uploadType = "ea";
                uploadProtocol = "explicabo";
                userIp = "praesentium";
            }};            

            ComputeNetworksListPeeringRoutesResponse res = sdk.networks.computeNetworksListPeeringRoutes(req, new ComputeNetworksListPeeringRoutesSecurity() {{
                option1 = new ComputeNetworksListPeeringRoutesSecurityOption1("ea", "laudantium") {{
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

            ComputeNetworksPatchRequest req = new ComputeNetworksPatchRequest("cum", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                network1 = new Network() {{
                    iPv4Range = "ex";
                    autoCreateSubnetworks = false;
                    creationTimestamp = "totam";
                    description = "expedita";
                    enableUlaInternalIpv6 = false;
                    firewallPolicy = "fugiat";
                    gatewayIPv4 = "quo";
                    id = "a";
                    internalIpv6Range = "distinctio";
                    kind = "alias";
                    mtu = 16754;
                    name = "Kayla Davis";
                    networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum.BEFORE_CLASSIC_FIREWALL;
                    peerings = new org.openapis.openapi.models.shared.NetworkPeering[]{{
                        add(new NetworkPeering() {{
                            advertisePeerSubnetsViaRouters = false;
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Heather Marvin";
                            network = "eos";
                            peerMtu = 677383;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "debitis";
                        }}),
                        add(new NetworkPeering() {{
                            advertisePeerSubnetsViaRouters = false;
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Lisa Bergnaum";
                            network = "esse";
                            peerMtu = 549045;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.INACTIVE;
                            stateDetails = "fuga";
                        }}),
                        add(new NetworkPeering() {{
                            advertisePeerSubnetsViaRouters = false;
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Joe Swift";
                            network = "necessitatibus";
                            peerMtu = 977311;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_IPV6;
                            state = NetworkPeeringStateEnum.ACTIVE;
                            stateDetails = "doloremque";
                        }}),
                        add(new NetworkPeering() {{
                            advertisePeerSubnetsViaRouters = false;
                            autoCreateRoutes = false;
                            exchangeSubnetRoutes = false;
                            exportCustomRoutes = false;
                            exportSubnetRoutesWithPublicIp = false;
                            importCustomRoutes = false;
                            importSubnetRoutesWithPublicIp = false;
                            name = "Dr. Eula Stroman";
                            network = "ipsa";
                            peerMtu = 633301;
                            stackType = NetworkPeeringStackTypeEnum.IPV4_ONLY;
                            state = NetworkPeeringStateEnum.ACTIVE;
                            stateDetails = "veniam";
                        }}),
                    }};
                    region = "quis";
                    routingConfig = new NetworkRoutingConfig() {{
                        routingMode = NetworkRoutingConfigRoutingModeEnum.REGIONAL;
                    }};;
                    selfLink = "cum";
                    selfLinkWithId = "velit";
                    subnetworks = new String[]{{
                        add("occaecati"),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "accusamus";
                key = "accusantium";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "deserunt";
                uploadType = "minima";
                uploadProtocol = "amet";
                userIp = "incidunt";
            }};            

            ComputeNetworksPatchResponse res = sdk.networks.computeNetworksPatch(req, new ComputeNetworksPatchSecurity() {{
                option1 = new ComputeNetworksPatchSecurityOption1("eligendi", "debitis") {{
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

            ComputeNetworksRemovePeeringRequest req = new ComputeNetworksRemovePeeringRequest("qui", "dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                networksRemovePeeringRequest = new NetworksRemovePeeringRequest() {{
                    name = "Terry Buckridge IV";
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "omnis";
                key = "impedit";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "sint";
                uploadType = "repellendus";
                uploadProtocol = "modi";
                userIp = "quam";
            }};            

            ComputeNetworksRemovePeeringResponse res = sdk.networks.computeNetworksRemovePeering(req, new ComputeNetworksRemovePeeringSecurity() {{
                option1 = new ComputeNetworksRemovePeeringSecurityOption1("magnam", "voluptates") {{
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

            ComputeNetworksSwitchToCustomModeRequest req = new ComputeNetworksSwitchToCustomModeRequest("ducimus", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "magnam";
                key = "et";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "necessitatibus";
                uploadType = "nihil";
                uploadProtocol = "iure";
                userIp = "iusto";
            }};            

            ComputeNetworksSwitchToCustomModeResponse res = sdk.networks.computeNetworksSwitchToCustomMode(req, new ComputeNetworksSwitchToCustomModeSecurity() {{
                option1 = new ComputeNetworksSwitchToCustomModeSecurityOption1("hic", "natus") {{
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

            ComputeNetworksTestIamPermissionsRequest req = new ComputeNetworksTestIamPermissionsRequest("commodi", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nesciunt"),
                        add("rerum"),
                        add("temporibus"),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "illum";
                key = "quos";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "magnam";
                uploadProtocol = "voluptatem";
                userIp = "quod";
            }};            

            ComputeNetworksTestIamPermissionsResponse res = sdk.networks.computeNetworksTestIamPermissions(req, new ComputeNetworksTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworksTestIamPermissionsSecurityOption1("cumque", "illo") {{
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

            ComputeNetworksUpdatePeeringRequest req = new ComputeNetworksUpdatePeeringRequest("ad", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                networksUpdatePeeringRequest = new NetworksUpdatePeeringRequest() {{
                    networkPeering = new NetworkPeering() {{
                        advertisePeerSubnetsViaRouters = false;
                        autoCreateRoutes = false;
                        exchangeSubnetRoutes = false;
                        exportCustomRoutes = false;
                        exportSubnetRoutesWithPublicIp = false;
                        importCustomRoutes = false;
                        importSubnetRoutesWithPublicIp = false;
                        name = "Sophia Harber";
                        network = "aut";
                        peerMtu = 594407;
                        stackType = NetworkPeeringStackTypeEnum.IPV4_ONLY;
                        state = NetworkPeeringStateEnum.INACTIVE;
                        stateDetails = "optio";
                    }};;
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "sapiente";
                key = "non";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "maxime";
                uploadType = "adipisci";
                uploadProtocol = "reiciendis";
                userIp = "deserunt";
            }};            

            ComputeNetworksUpdatePeeringResponse res = sdk.networks.computeNetworksUpdatePeering(req, new ComputeNetworksUpdatePeeringSecurity() {{
                option1 = new ComputeNetworksUpdatePeeringSecurityOption1("fugit", "expedita") {{
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
