# routers

### Available Operations

* [computeRoutersAggregatedList](#computeroutersaggregatedlist) - Retrieves an aggregated list of routers.
* [computeRoutersDelete](#computeroutersdelete) - Deletes the specified Router resource.
* [computeRoutersGet](#computeroutersget) - Returns the specified Router resource.
* [computeRoutersGetNatMappingInfo](#computeroutersgetnatmappinginfo) - Retrieves runtime Nat mapping information of VM endpoints.
* [computeRoutersGetRouterStatus](#computeroutersgetrouterstatus) - Retrieves runtime information of the specified router.
* [computeRoutersInsert](#computeroutersinsert) - Creates a Router resource in the specified project and region using the data included in the request.
* [computeRoutersList](#computerouterslist) - Retrieves a list of Router resources available to the specified project.
* [computeRoutersPatch](#computerouterspatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRoutersPreview](#computerouterspreview) - Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
* [computeRoutersTestIamPermissions](#computerouterstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRoutersUpdate](#computeroutersupdate) - Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.

## computeRoutersAggregatedList

Retrieves an aggregated list of routers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeRoutersAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeRoutersAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersAggregatedListRequest req = new ComputeRoutersAggregatedListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "est";
                filter = "ipsam";
                includeAllScopes = false;
                key = "odit";
                maxResults = 789306L;
                oauthToken = "dolorum";
                orderBy = "nihil";
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "quod";
                returnPartialSuccess = false;
                uploadType = "quod";
                uploadProtocol = "maiores";
                userIp = "eveniet";
            }};            

            ComputeRoutersAggregatedListResponse res = sdk.routers.computeRoutersAggregatedList(req, new ComputeRoutersAggregatedListSecurity() {{
                option1 = new ComputeRoutersAggregatedListSecurityOption1("debitis", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.routerAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutersDelete

Deletes the specified Router resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRoutersDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRoutersDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersDeleteRequest req = new ComputeRoutersDeleteRequest("alias", "delectus", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "asperiores";
                key = "in";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "esse";
                uploadType = "debitis";
                uploadProtocol = "perspiciatis";
                userIp = "culpa";
            }};            

            ComputeRoutersDeleteResponse res = sdk.routers.computeRoutersDelete(req, new ComputeRoutersDeleteSecurity() {{
                option1 = new ComputeRoutersDeleteSecurityOption1("mollitia", "iste") {{
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

## computeRoutersGet

Returns the specified Router resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersGetRequest;
import org.openapis.openapi.models.operations.ComputeRoutersGetResponse;
import org.openapis.openapi.models.operations.ComputeRoutersGetSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersGetRequest req = new ComputeRoutersGetRequest("quaerat", "ratione", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "repellendus";
                key = "fugit";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "commodi";
                uploadProtocol = "voluptatum";
                userIp = "quasi";
            }};            

            ComputeRoutersGetResponse res = sdk.routers.computeRoutersGet(req, new ComputeRoutersGetSecurity() {{
                option1 = new ComputeRoutersGetSecurityOption1("corporis", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.router != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutersGetNatMappingInfo

Retrieves runtime Nat mapping information of VM endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersGetNatMappingInfoRequest;
import org.openapis.openapi.models.operations.ComputeRoutersGetNatMappingInfoResponse;
import org.openapis.openapi.models.operations.ComputeRoutersGetNatMappingInfoSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersGetNatMappingInfoSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersGetNatMappingInfoSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersGetNatMappingInfoSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersGetNatMappingInfoRequest req = new ComputeRoutersGetNatMappingInfoRequest("provident", "tempore", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "eum";
                filter = "soluta";
                key = "aperiam";
                maxResults = 824331L;
                natName = "placeat";
                oauthToken = "culpa";
                orderBy = "et";
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "asperiores";
                returnPartialSuccess = false;
                uploadType = "aliquid";
                uploadProtocol = "quas";
                userIp = "dolorum";
            }};            

            ComputeRoutersGetNatMappingInfoResponse res = sdk.routers.computeRoutersGetNatMappingInfo(req, new ComputeRoutersGetNatMappingInfoSecurity() {{
                option1 = new ComputeRoutersGetNatMappingInfoSecurityOption1("at", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vmEndpointNatMappingsList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutersGetRouterStatus

Retrieves runtime information of the specified router.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersGetRouterStatusRequest;
import org.openapis.openapi.models.operations.ComputeRoutersGetRouterStatusResponse;
import org.openapis.openapi.models.operations.ComputeRoutersGetRouterStatusSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersGetRouterStatusSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersGetRouterStatusSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersGetRouterStatusSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersGetRouterStatusRequest req = new ComputeRoutersGetRouterStatusRequest("sit", "occaecati", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "deleniti";
                key = "ipsam";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "delectus";
                uploadProtocol = "odit";
                userIp = "amet";
            }};            

            ComputeRoutersGetRouterStatusResponse res = sdk.routers.computeRoutersGetRouterStatus(req, new ComputeRoutersGetRouterStatusSecurity() {{
                option1 = new ComputeRoutersGetRouterStatusSecurityOption1("vitae", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.routerStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutersInsert

Creates a Router resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersInsertRequest;
import org.openapis.openapi.models.operations.ComputeRoutersInsertResponse;
import org.openapis.openapi.models.operations.ComputeRoutersInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Router;
import org.openapis.openapi.models.shared.RouterAdvertisedIpRange;
import org.openapis.openapi.models.shared.RouterBgp;
import org.openapis.openapi.models.shared.RouterBgpAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeer;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfd;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdPacketModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdSessionInitializationModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange;
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
import org.openapis.openapi.models.shared.RouterNatAutoNetworkTierEnum;
import org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum;
import org.openapis.openapi.models.shared.RouterNatLogConfig;
import org.openapis.openapi.models.shared.RouterNatLogConfigFilterEnum;
import org.openapis.openapi.models.shared.RouterNatNatIpAllocateOptionEnum;
import org.openapis.openapi.models.shared.RouterNatRule;
import org.openapis.openapi.models.shared.RouterNatRuleAction;
import org.openapis.openapi.models.shared.RouterNatSourceSubnetworkIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNat;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersInsertRequest req = new ComputeRoutersInsertRequest("quibusdam", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                router = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.DEFAULT_;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "exercitationem";
                                range = "deserunt";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "dolor";
                                range = "aspernatur";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "cupiditate";
                                range = "minus";
                            }}),
                        }};
                        asn = 490949L;
                        keepaliveInterval = 441062L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "aliquid";
                                    range = "sunt";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "voluptas";
                                    range = "rem";
                                }}),
                            }};
                            advertisedRoutePriority = 457279L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 803303L;
                                minTransmitInterval = 362566L;
                                mode = RouterBgpPeerBfdModeEnum.PASSIVE;
                                multiplier = 231604L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                                slowTimerInterval = 112481L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quia";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "et";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "officia";
                                }}),
                            }};
                            customLearnedRoutePriority = 657655;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "illo";
                            ipAddress = "a";
                            ipv6NexthopAddress = "eveniet";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "ipsum";
                            name = "Isaac Cruickshank IV";
                            peerAsn = 539024L;
                            peerIpAddress = "explicabo";
                            peerIpv6NexthopAddress = "fugit";
                            routerApplianceInstance = "consequuntur";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "ex";
                                    range = "illo";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "totam";
                                    range = "recusandae";
                                }}),
                            }};
                            advertisedRoutePriority = 971767L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 914710L;
                                minTransmitInterval = 5968L;
                                mode = RouterBgpPeerBfdModeEnum.ACTIVE;
                                multiplier = 684643L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                                slowTimerInterval = 829975L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quod";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "consequuntur";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "excepturi";
                                }}),
                            }};
                            customLearnedRoutePriority = 318489;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "repudiandae";
                            ipAddress = "fugiat";
                            ipv6NexthopAddress = "exercitationem";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "nam";
                            name = "Jorge Johns";
                            peerAsn = 986012L;
                            peerIpAddress = "doloremque";
                            peerIpv6NexthopAddress = "officia";
                            routerApplianceInstance = "minima";
                        }}),
                    }};
                    creationTimestamp = "soluta";
                    description = "odio";
                    encryptedInterconnectRouter = false;
                    id = "earum";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "temporibus";
                            linkedInterconnectAttachment = "magni";
                            linkedVpnTunnel = "labore";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Mr. Rita Skiles";
                            privateIpAddress = "illo";
                            redundantInterface = "quia";
                            subnetwork = "veritatis";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "cumque";
                            linkedInterconnectAttachment = "dolores";
                            linkedVpnTunnel = "dignissimos";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Miss Cornelius Gottlieb DDS";
                            privateIpAddress = "reprehenderit";
                            redundantInterface = "ut";
                            subnetwork = "fugiat";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "eveniet";
                            linkedInterconnectAttachment = "accusantium";
                            linkedVpnTunnel = "similique";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Lena Mosciski PhD";
                            privateIpAddress = "doloribus";
                            redundantInterface = "officiis";
                            subnetwork = "libero";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "tempore";
                            linkedInterconnectAttachment = "sunt";
                            linkedVpnTunnel = "voluptas";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Manuel Schuster";
                            privateIpAddress = "molestias";
                            redundantInterface = "minima";
                            subnetwork = "laboriosam";
                        }}),
                    }};
                    kind = "esse";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "explicabo";
                            name = "Claude Corwin";
                        }}),
                    }};
                    name = "Toby Bosco Sr.";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("ipsum"),
                                add("cupiditate"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 723128;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 933963;
                            minPortsPerVm = 486409;
                            name = "Kenny Corkery II";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("impedit"),
                                add("ipsum"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("ipsum"),
                                            add("sapiente"),
                                            add("quaerat"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("mollitia"),
                                            add("odio"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("at"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("odio"),
                                            add("alias"),
                                        }};
                                    }};
                                    description = "provident";
                                    match = "iure";
                                    ruleNumber = 774163L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Mr. Vickie Shanahan Jr.";
                                    secondaryIpRangeNames = new String[]{{
                                        add("nemo"),
                                        add("fuga"),
                                        add("sed"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Blanca Stokes";
                                    secondaryIpRangeNames = new String[]{{
                                        add("nostrum"),
                                        add("nam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Darin Wiegand";
                                    secondaryIpRangeNames = new String[]{{
                                        add("accusantium"),
                                        add("ea"),
                                        add("occaecati"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 516744;
                            tcpTimeWaitTimeoutSec = 657577;
                            tcpTransitoryIdleTimeoutSec = 395668;
                            type = RouterNatTypeEnum.PUBLIC_;
                            udpIdleTimeoutSec = 730855;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.PREMIUM;
                            drainNatIps = new String[]{{
                                add("explicabo"),
                                add("possimus"),
                                add("amet"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_MANAGED_PROXY_LB),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_MANAGED_PROXY_LB),
                            }};
                            icmpIdleTimeoutSec = 320815;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 308292;
                            minPortsPerVm = 615145;
                            name = "Irving Considine";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("consequuntur"),
                                add("ea"),
                                add("molestias"),
                                add("tenetur"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("vitae"),
                                            add("enim"),
                                            add("quas"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("atque"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("natus"),
                                            add("temporibus"),
                                            add("eligendi"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("a"),
                                            add("doloribus"),
                                            add("recusandae"),
                                        }};
                                    }};
                                    description = "omnis";
                                    match = "beatae";
                                    ruleNumber = 333248L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("in"),
                                            add("eaque"),
                                            add("expedita"),
                                            add("adipisci"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("cupiditate"),
                                            add("ducimus"),
                                            add("pariatur"),
                                            add("iste"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("error"),
                                            add("ex"),
                                            add("exercitationem"),
                                            add("in"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("nobis"),
                                            add("quae"),
                                            add("at"),
                                            add("laboriosam"),
                                        }};
                                    }};
                                    description = "blanditiis";
                                    match = "et";
                                    ruleNumber = 906137L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("corrupti"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("rerum"),
                                            add("ipsam"),
                                            add("nihil"),
                                            add("neque"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("facilis"),
                                            add("magnam"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("vel"),
                                            add("consequuntur"),
                                        }};
                                    }};
                                    description = "recusandae";
                                    match = "laudantium";
                                    ruleNumber = 578592L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Lynn Schiller";
                                    secondaryIpRangeNames = new String[]{{
                                        add("beatae"),
                                        add("vel"),
                                        add("quaerat"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Rick Homenick";
                                    secondaryIpRangeNames = new String[]{{
                                        add("officiis"),
                                        add("aliquid"),
                                        add("natus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Winston Farrell";
                                    secondaryIpRangeNames = new String[]{{
                                        add("ex"),
                                        add("doloribus"),
                                        add("nostrum"),
                                        add("aperiam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 367810;
                            tcpTimeWaitTimeoutSec = 750604;
                            tcpTransitoryIdleTimeoutSec = 971911;
                            type = RouterNatTypeEnum.PUBLIC_;
                            udpIdleTimeoutSec = 856468;
                        }}),
                    }};
                    network = "exercitationem";
                    region = "neque";
                    selfLink = "nulla";
                    selfLinkWithId = "odio";
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "perferendis";
                key = "ab";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "occaecati";
                requestId = "maxime";
                uploadType = "sed";
                uploadProtocol = "nostrum";
                userIp = "explicabo";
            }};            

            ComputeRoutersInsertResponse res = sdk.routers.computeRoutersInsert(req, new ComputeRoutersInsertSecurity() {{
                option1 = new ComputeRoutersInsertSecurityOption1("ab", "minima") {{
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

## computeRoutersList

Retrieves a list of Router resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersListRequest;
import org.openapis.openapi.models.operations.ComputeRoutersListResponse;
import org.openapis.openapi.models.operations.ComputeRoutersListSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersListRequest req = new ComputeRoutersListRequest("doloribus", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "reprehenderit";
                filter = "rem";
                key = "esse";
                maxResults = 364627L;
                oauthToken = "ex";
                orderBy = "natus";
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "adipisci";
                returnPartialSuccess = false;
                uploadType = "ut";
                uploadProtocol = "esse";
                userIp = "hic";
            }};            

            ComputeRoutersListResponse res = sdk.routers.computeRoutersList(req, new ComputeRoutersListSecurity() {{
                option1 = new ComputeRoutersListSecurityOption1("quasi", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.routerList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutersPatch

Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersPatchRequest;
import org.openapis.openapi.models.operations.ComputeRoutersPatchResponse;
import org.openapis.openapi.models.operations.ComputeRoutersPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Router;
import org.openapis.openapi.models.shared.RouterAdvertisedIpRange;
import org.openapis.openapi.models.shared.RouterBgp;
import org.openapis.openapi.models.shared.RouterBgpAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeer;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfd;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdPacketModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdSessionInitializationModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange;
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
import org.openapis.openapi.models.shared.RouterNatAutoNetworkTierEnum;
import org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum;
import org.openapis.openapi.models.shared.RouterNatLogConfig;
import org.openapis.openapi.models.shared.RouterNatLogConfigFilterEnum;
import org.openapis.openapi.models.shared.RouterNatNatIpAllocateOptionEnum;
import org.openapis.openapi.models.shared.RouterNatRule;
import org.openapis.openapi.models.shared.RouterNatRuleAction;
import org.openapis.openapi.models.shared.RouterNatSourceSubnetworkIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNat;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersPatchRequest req = new ComputeRoutersPatchRequest("laudantium", "beatae", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "doloribus";
                                range = "enim";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "inventore";
                                range = "atque";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "deserunt";
                                range = "incidunt";
                            }}),
                        }};
                        asn = 196675L;
                        keepaliveInterval = 483758L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "exercitationem";
                                    range = "iure";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "libero";
                                    range = "unde";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "qui";
                                    range = "reprehenderit";
                                }}),
                            }};
                            advertisedRoutePriority = 524189L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 975627L;
                                minTransmitInterval = 203278L;
                                mode = RouterBgpPeerBfdModeEnum.DISABLED;
                                multiplier = 260384L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                                slowTimerInterval = 309116L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "eum";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quidem";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "tenetur";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "aperiam";
                                }}),
                            }};
                            customLearnedRoutePriority = 562715;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "officiis";
                            ipAddress = "vel";
                            ipv6NexthopAddress = "aspernatur";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "deserunt";
                            name = "Cecilia Kemmer III";
                            peerAsn = 3588L;
                            peerIpAddress = "debitis";
                            peerIpv6NexthopAddress = "laudantium";
                            routerApplianceInstance = "voluptatibus";
                        }}),
                    }};
                    creationTimestamp = "excepturi";
                    description = "praesentium";
                    encryptedInterconnectRouter = false;
                    id = "excepturi";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "voluptatem";
                            linkedInterconnectAttachment = "praesentium";
                            linkedVpnTunnel = "maxime";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Gwen Nikolaus";
                            privateIpAddress = "fugiat";
                            redundantInterface = "ratione";
                            subnetwork = "inventore";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "dolore";
                            linkedInterconnectAttachment = "veniam";
                            linkedVpnTunnel = "natus";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Sabrina Ledner";
                            privateIpAddress = "dolorem";
                            redundantInterface = "occaecati";
                            subnetwork = "nulla";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "dolor";
                            linkedInterconnectAttachment = "maiores";
                            linkedVpnTunnel = "expedita";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Donnie Schmitt";
                            privateIpAddress = "reiciendis";
                            redundantInterface = "nobis";
                            subnetwork = "impedit";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "recusandae";
                            linkedInterconnectAttachment = "a";
                            linkedVpnTunnel = "vitae";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Juanita Von";
                            privateIpAddress = "quibusdam";
                            redundantInterface = "sint";
                            subnetwork = "reiciendis";
                        }}),
                    }};
                    kind = "quasi";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "tempora";
                            name = "Vernon Emard";
                        }}),
                    }};
                    name = "Clark Krajcik";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("harum"),
                                add("ex"),
                                add("ex"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 270564;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 96349;
                            minPortsPerVm = 1099;
                            name = "Sadie Gleason";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("est"),
                                add("optio"),
                                add("voluptate"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("porro"),
                                            add("cupiditate"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("ex"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("deleniti"),
                                            add("tempora"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("deleniti"),
                                        }};
                                    }};
                                    description = "laborum";
                                    match = "maxime";
                                    ruleNumber = 206329L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quo"),
                                            add("doloribus"),
                                            add("possimus"),
                                            add("itaque"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("ea"),
                                            add("blanditiis"),
                                            add("sint"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("beatae"),
                                            add("nisi"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("et"),
                                        }};
                                    }};
                                    description = "ullam";
                                    match = "impedit";
                                    ruleNumber = 486397L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quaerat"),
                                            add("pariatur"),
                                            add("distinctio"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("optio"),
                                            add("vero"),
                                            add("sapiente"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ipsam"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("ea"),
                                            add("ipsam"),
                                            add("pariatur"),
                                            add("ex"),
                                        }};
                                    }};
                                    description = "placeat";
                                    match = "nihil";
                                    ruleNumber = 966200L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("tempora"),
                                            add("porro"),
                                            add("culpa"),
                                            add("occaecati"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("esse"),
                                            add("quisquam"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("facilis"),
                                            add("dignissimos"),
                                            add("dolorem"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("quaerat"),
                                        }};
                                    }};
                                    description = "facilis";
                                    match = "aliquid";
                                    ruleNumber = 536297L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Alyssa Graham DVM";
                                    secondaryIpRangeNames = new String[]{{
                                        add("impedit"),
                                        add("explicabo"),
                                        add("necessitatibus"),
                                        add("ullam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Annie Koelpin";
                                    secondaryIpRangeNames = new String[]{{
                                        add("aliquam"),
                                        add("quae"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Barry Feeney";
                                    secondaryIpRangeNames = new String[]{{
                                        add("possimus"),
                                        add("alias"),
                                        add("temporibus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Eddie Conroy";
                                    secondaryIpRangeNames = new String[]{{
                                        add("inventore"),
                                        add("tempora"),
                                        add("aliquid"),
                                        add("itaque"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 656663;
                            tcpTimeWaitTimeoutSec = 932140;
                            tcpTransitoryIdleTimeoutSec = 487968;
                            type = RouterNatTypeEnum.PUBLIC_;
                            udpIdleTimeoutSec = 300568;
                        }}),
                    }};
                    network = "fugiat";
                    region = "eos";
                    selfLink = "distinctio";
                    selfLinkWithId = "consequatur";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "quaerat";
                key = "incidunt";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "deleniti";
                uploadType = "ab";
                uploadProtocol = "et";
                userIp = "corrupti";
            }};            

            ComputeRoutersPatchResponse res = sdk.routers.computeRoutersPatch(req, new ComputeRoutersPatchSecurity() {{
                option1 = new ComputeRoutersPatchSecurityOption1("facere", "unde") {{
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

## computeRoutersPreview

Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersPreviewRequest;
import org.openapis.openapi.models.operations.ComputeRoutersPreviewResponse;
import org.openapis.openapi.models.operations.ComputeRoutersPreviewSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersPreviewSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersPreviewSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersPreviewSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Router;
import org.openapis.openapi.models.shared.RouterAdvertisedIpRange;
import org.openapis.openapi.models.shared.RouterBgp;
import org.openapis.openapi.models.shared.RouterBgpAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeer;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfd;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdPacketModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdSessionInitializationModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange;
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
import org.openapis.openapi.models.shared.RouterNatAutoNetworkTierEnum;
import org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum;
import org.openapis.openapi.models.shared.RouterNatLogConfig;
import org.openapis.openapi.models.shared.RouterNatLogConfigFilterEnum;
import org.openapis.openapi.models.shared.RouterNatNatIpAllocateOptionEnum;
import org.openapis.openapi.models.shared.RouterNatRule;
import org.openapis.openapi.models.shared.RouterNatRuleAction;
import org.openapis.openapi.models.shared.RouterNatSourceSubnetworkIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNat;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersPreviewRequest req = new ComputeRoutersPreviewRequest("velit", "magni", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "pariatur";
                                range = "consequuntur";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "rerum";
                                range = "corrupti";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "sequi";
                                range = "ipsa";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "molestiae";
                                range = "hic";
                            }}),
                        }};
                        asn = 557512L;
                        keepaliveInterval = 162401L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "explicabo";
                                    range = "nihil";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "nesciunt";
                                    range = "provident";
                                }}),
                            }};
                            advertisedRoutePriority = 178626L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 462222L;
                                minTransmitInterval = 977929L;
                                mode = RouterBgpPeerBfdModeEnum.DISABLED;
                                multiplier = 469842L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                                slowTimerInterval = 397517L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "totam";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "nam";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quia";
                                }}),
                            }};
                            customLearnedRoutePriority = 883523;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "illo";
                            ipAddress = "ipsum";
                            ipv6NexthopAddress = "est";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "magnam";
                            name = "Benny Turcotte";
                            peerAsn = 459223L;
                            peerIpAddress = "excepturi";
                            peerIpv6NexthopAddress = "maiores";
                            routerApplianceInstance = "reprehenderit";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "beatae";
                                    range = "mollitia";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "nostrum";
                                    range = "magni";
                                }}),
                            }};
                            advertisedRoutePriority = 991985L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 303409L;
                                minTransmitInterval = 702404L;
                                mode = RouterBgpPeerBfdModeEnum.ACTIVE;
                                multiplier = 155896L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                                slowTimerInterval = 903807L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quos";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "commodi";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "ea";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "cumque";
                                }}),
                            }};
                            customLearnedRoutePriority = 416035;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "tempore";
                            ipAddress = "reiciendis";
                            ipv6NexthopAddress = "et";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "dolorem";
                            name = "Rhonda Koch";
                            peerAsn = 374860L;
                            peerIpAddress = "sed";
                            peerIpv6NexthopAddress = "sed";
                            routerApplianceInstance = "tempora";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "quasi";
                                    range = "dolorum";
                                }}),
                            }};
                            advertisedRoutePriority = 50427L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 196389L;
                                minTransmitInterval = 222238L;
                                mode = RouterBgpPeerBfdModeEnum.DISABLED;
                                multiplier = 784642L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                                slowTimerInterval = 795169L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "delectus";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "beatae";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "sit";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "eum";
                                }}),
                            }};
                            customLearnedRoutePriority = 927544;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "autem";
                            ipAddress = "libero";
                            ipv6NexthopAddress = "perspiciatis";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "error";
                            name = "Darrell Schinner";
                            peerAsn = 812927L;
                            peerIpAddress = "nam";
                            peerIpv6NexthopAddress = "ipsa";
                            routerApplianceInstance = "nam";
                        }}),
                    }};
                    creationTimestamp = "consectetur";
                    description = "quod";
                    encryptedInterconnectRouter = false;
                    id = "enim";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "asperiores";
                            linkedInterconnectAttachment = "ut";
                            linkedVpnTunnel = "dolorem";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Constance Marvin";
                            privateIpAddress = "numquam";
                            redundantInterface = "rem";
                            subnetwork = "odio";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "delectus";
                            linkedInterconnectAttachment = "corporis";
                            linkedVpnTunnel = "ad";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Carole Crooks";
                            privateIpAddress = "unde";
                            redundantInterface = "perferendis";
                            subnetwork = "ipsum";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "maxime";
                            linkedInterconnectAttachment = "quis";
                            linkedVpnTunnel = "laborum";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Muriel Wiza";
                            privateIpAddress = "qui";
                            redundantInterface = "quod";
                            subnetwork = "quam";
                        }}),
                    }};
                    kind = "pariatur";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "sapiente";
                            name = "Mr. Darrin Gibson";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "eum";
                            name = "Sue Braun";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "minus";
                            name = "Lewis Kerluke";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "voluptatibus";
                            name = "Cory Vandervort";
                        }}),
                    }};
                    name = "Ms. Jody Lakin";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("provident"),
                                add("excepturi"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_MANAGED_PROXY_LB),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 311413;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 878692;
                            minPortsPerVm = 793240;
                            name = "Albert Stoltenberg";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("distinctio"),
                                add("sequi"),
                                add("nostrum"),
                                add("nisi"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("tempore"),
                                            add("a"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("molestias"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("cupiditate"),
                                            add("voluptatem"),
                                            add("aliquam"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("voluptatem"),
                                            add("accusantium"),
                                            add("fuga"),
                                        }};
                                    }};
                                    description = "ut";
                                    match = "cumque";
                                    ruleNumber = 549309L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Leigh Leuschke";
                                    secondaryIpRangeNames = new String[]{{
                                        add("facilis"),
                                        add("quas"),
                                        add("sint"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Alyssa Feeney";
                                    secondaryIpRangeNames = new String[]{{
                                        add("dolores"),
                                        add("non"),
                                        add("dolorem"),
                                        add("doloremque"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Mario Jast";
                                    secondaryIpRangeNames = new String[]{{
                                        add("ut"),
                                        add("earum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Hope Hermiston";
                                    secondaryIpRangeNames = new String[]{{
                                        add("vel"),
                                        add("aperiam"),
                                        add("possimus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 253625;
                            tcpTimeWaitTimeoutSec = 371525;
                            tcpTransitoryIdleTimeoutSec = 156526;
                            type = RouterNatTypeEnum.PUBLIC_;
                            udpIdleTimeoutSec = 961973;
                        }}),
                    }};
                    network = "minus";
                    region = "esse";
                    selfLink = "modi";
                    selfLinkWithId = "perspiciatis";
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "ad";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "totam";
                uploadProtocol = "hic";
                userIp = "officia";
            }};            

            ComputeRoutersPreviewResponse res = sdk.routers.computeRoutersPreview(req, new ComputeRoutersPreviewSecurity() {{
                option1 = new ComputeRoutersPreviewSecurityOption1("laudantium", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.routersPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRoutersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRoutersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRoutersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRoutersTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersTestIamPermissionsRequest req = new ComputeRoutersTestIamPermissionsRequest("molestiae", "quisquam", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("inventore"),
                        add("blanditiis"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "qui";
                key = "et";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "eligendi";
                uploadProtocol = "qui";
                userIp = "voluptatum";
            }};            

            ComputeRoutersTestIamPermissionsResponse res = sdk.routers.computeRoutersTestIamPermissions(req, new ComputeRoutersTestIamPermissionsSecurity() {{
                option1 = new ComputeRoutersTestIamPermissionsSecurityOption1("mollitia", "autem") {{
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

## computeRoutersUpdate

Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRoutersUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRoutersUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRoutersUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRoutersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRoutersUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Router;
import org.openapis.openapi.models.shared.RouterAdvertisedIpRange;
import org.openapis.openapi.models.shared.RouterBgp;
import org.openapis.openapi.models.shared.RouterBgpAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeer;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertiseModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfd;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdPacketModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerBfdSessionInitializationModeEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange;
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
import org.openapis.openapi.models.shared.RouterNatAutoNetworkTierEnum;
import org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum;
import org.openapis.openapi.models.shared.RouterNatLogConfig;
import org.openapis.openapi.models.shared.RouterNatLogConfigFilterEnum;
import org.openapis.openapi.models.shared.RouterNatNatIpAllocateOptionEnum;
import org.openapis.openapi.models.shared.RouterNatRule;
import org.openapis.openapi.models.shared.RouterNatRuleAction;
import org.openapis.openapi.models.shared.RouterNatSourceSubnetworkIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNat;
import org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
import org.openapis.openapi.models.shared.RouterNatTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersUpdateRequest req = new ComputeRoutersUpdateRequest("deleniti", "dicta", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "illum";
                                range = "dolorum";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "beatae";
                                range = "quibusdam";
                            }}),
                        }};
                        asn = 722311L;
                        keepaliveInterval = 817597L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "deleniti";
                                    range = "facilis";
                                }}),
                            }};
                            advertisedRoutePriority = 383790L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 860575L;
                                minTransmitInterval = 250765L;
                                mode = RouterBgpPeerBfdModeEnum.ACTIVE;
                                multiplier = 531584L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                                slowTimerInterval = 314694L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "at";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "placeat";
                                }}),
                            }};
                            customLearnedRoutePriority = 966061;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "inventore";
                            ipAddress = "eligendi";
                            ipv6NexthopAddress = "unde";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "omnis";
                            name = "Marco Hegmann PhD";
                            peerAsn = 337983L;
                            peerIpAddress = "minus";
                            peerIpv6NexthopAddress = "eveniet";
                            routerApplianceInstance = "modi";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "dolorem";
                                    range = "ipsum";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "ullam";
                                    range = "doloribus";
                                }}),
                            }};
                            advertisedRoutePriority = 433694L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 302103L;
                                minTransmitInterval = 26576L;
                                mode = RouterBgpPeerBfdModeEnum.ACTIVE;
                                multiplier = 257978L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_ONLY;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                                slowTimerInterval = 217844L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "sit";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "cupiditate";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quia";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "quo";
                                }}),
                            }};
                            customLearnedRoutePriority = 182219;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "deleniti";
                            ipAddress = "a";
                            ipv6NexthopAddress = "aspernatur";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "nostrum";
                            name = "Jared Hansen III";
                            peerAsn = 868497L;
                            peerIpAddress = "asperiores";
                            peerIpv6NexthopAddress = "numquam";
                            routerApplianceInstance = "accusamus";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "maiores";
                                    range = "quidem";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "reiciendis";
                                    range = "porro";
                                }}),
                            }};
                            advertisedRoutePriority = 639572L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 824973L;
                                minTransmitInterval = 281762L;
                                mode = RouterBgpPeerBfdModeEnum.ACTIVE;
                                multiplier = 155113L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_AND_ECHO;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                                slowTimerInterval = 538306L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "explicabo";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "adipisci";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "dolore";
                                }}),
                            }};
                            customLearnedRoutePriority = 834844;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "debitis";
                            ipAddress = "excepturi";
                            ipv6NexthopAddress = "animi";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "dolorum";
                            name = "Hilda Bartoletti PhD";
                            peerAsn = 178470L;
                            peerIpAddress = "libero";
                            peerIpv6NexthopAddress = "pariatur";
                            routerApplianceInstance = "doloremque";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_PEER_VPC_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "reprehenderit";
                                    range = "quisquam";
                                }}),
                            }};
                            advertisedRoutePriority = 843296L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 19572L;
                                minTransmitInterval = 527685L;
                                mode = RouterBgpPeerBfdModeEnum.DISABLED;
                                multiplier = 264866L;
                                packetMode = RouterBgpPeerBfdPacketModeEnum.CONTROL_ONLY;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                                slowTimerInterval = 916301L;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "omnis";
                                }}),
                            }};
                            customLearnedRoutePriority = 623541;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "quaerat";
                            ipAddress = "nam";
                            ipv6NexthopAddress = "numquam";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "tempora";
                            name = "Josh Huel";
                            peerAsn = 559126L;
                            peerIpAddress = "aliquid";
                            peerIpv6NexthopAddress = "similique";
                            routerApplianceInstance = "autem";
                        }}),
                    }};
                    creationTimestamp = "reprehenderit";
                    description = "praesentium";
                    encryptedInterconnectRouter = false;
                    id = "suscipit";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "deleniti";
                            linkedInterconnectAttachment = "esse";
                            linkedVpnTunnel = "est";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Brandi Ward";
                            privateIpAddress = "laborum";
                            redundantInterface = "tempora";
                            subnetwork = "asperiores";
                        }}),
                    }};
                    kind = "inventore";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "sint";
                            name = "Alonzo King";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "quo";
                            name = "Dr. Justin Nitzsche";
                        }}),
                    }};
                    name = "Sherri Homenick";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("magni"),
                                add("eligendi"),
                                add("labore"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 748619;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 521058;
                            minPortsPerVm = 382471;
                            name = "Sylvia Rogahn";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("consequatur"),
                                add("labore"),
                                add("earum"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("delectus"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("eaque"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("quae"),
                                            add("odit"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("sed"),
                                            add("aut"),
                                        }};
                                    }};
                                    description = "tempore";
                                    match = "alias";
                                    ruleNumber = 181386L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Raquel Blick";
                                    secondaryIpRangeNames = new String[]{{
                                        add("ex"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 846024;
                            tcpTimeWaitTimeoutSec = 759769;
                            tcpTransitoryIdleTimeoutSec = 512852;
                            type = RouterNatTypeEnum.PRIVATE_;
                            udpIdleTimeoutSec = 471523;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("quas"),
                                add("enim"),
                                add("dolores"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_MANAGED_PROXY_LB),
                            }};
                            icmpIdleTimeoutSec = 413878;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 246893;
                            minPortsPerVm = 989325;
                            name = "Angela Ledner";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("alias"),
                                add("consequatur"),
                                add("reiciendis"),
                                add("dicta"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("rerum"),
                                            add("quod"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("exercitationem"),
                                            add("accusamus"),
                                            add("perspiciatis"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ex"),
                                            add("eligendi"),
                                            add("aperiam"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("totam"),
                                        }};
                                    }};
                                    description = "necessitatibus";
                                    match = "doloremque";
                                    ruleNumber = 930620L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("exercitationem"),
                                            add("illum"),
                                            add("nostrum"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("cupiditate"),
                                            add("voluptas"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("atque"),
                                            add("iusto"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("alias"),
                                            add("atque"),
                                            add("exercitationem"),
                                        }};
                                    }};
                                    description = "alias";
                                    match = "veritatis";
                                    ruleNumber = 304824L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("molestias"),
                                            add("error"),
                                            add("nostrum"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("omnis"),
                                            add("consectetur"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("cumque"),
                                            add("dignissimos"),
                                            add("nihil"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("maxime"),
                                        }};
                                    }};
                                    description = "nam";
                                    match = "rem";
                                    ruleNumber = 194525L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("repudiandae"),
                                            add("velit"),
                                            add("vero"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("nisi"),
                                            add("vitae"),
                                            add("modi"),
                                            add("quis"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("perspiciatis"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("minus"),
                                            add("odit"),
                                            add("laudantium"),
                                        }};
                                    }};
                                    description = "dolores";
                                    match = "et";
                                    ruleNumber = 746825L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Elizabeth Hyatt";
                                    secondaryIpRangeNames = new String[]{{
                                        add("sequi"),
                                        add("corporis"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Patti Powlowski";
                                    secondaryIpRangeNames = new String[]{{
                                        add("incidunt"),
                                        add("ipsam"),
                                        add("ipsa"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 735565;
                            tcpTimeWaitTimeoutSec = 221490;
                            tcpTransitoryIdleTimeoutSec = 110737;
                            type = RouterNatTypeEnum.PRIVATE_;
                            udpIdleTimeoutSec = 251423;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.SELECT;
                            drainNatIps = new String[]{{
                                add("iusto"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_MANAGED_PROXY_LB),
                            }};
                            icmpIdleTimeoutSec = 466561;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 909544;
                            minPortsPerVm = 70120;
                            name = "Connie Nitzsche";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("non"),
                                add("quisquam"),
                                add("voluptatibus"),
                                add("blanditiis"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("nisi"),
                                            add("cum"),
                                            add("vero"),
                                            add("officia"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("totam"),
                                            add("tenetur"),
                                            add("quidem"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ducimus"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("iusto"),
                                            add("reiciendis"),
                                        }};
                                    }};
                                    description = "reiciendis";
                                    match = "distinctio";
                                    ruleNumber = 82669L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Maxine Mraz";
                                    secondaryIpRangeNames = new String[]{{
                                        add("repudiandae"),
                                        add("voluptatum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Eleanor Runolfsdottir";
                                    secondaryIpRangeNames = new String[]{{
                                        add("consequatur"),
                                        add("voluptatibus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 909258;
                            tcpTimeWaitTimeoutSec = 221531;
                            tcpTransitoryIdleTimeoutSec = 333776;
                            type = RouterNatTypeEnum.PUBLIC_;
                            udpIdleTimeoutSec = 331391;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("eveniet"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 178182;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 764474;
                            minPortsPerVm = 969549;
                            name = "Jaime Dooley";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("odit"),
                                add("rerum"),
                                add("ipsum"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quos"),
                                            add("eos"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("animi"),
                                            add("laboriosam"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("rerum"),
                                            add("quos"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("dolor"),
                                            add("eveniet"),
                                            add("odio"),
                                        }};
                                    }};
                                    description = "facilis";
                                    match = "aperiam";
                                    ruleNumber = 794964L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("dolores"),
                                            add("odit"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("quos"),
                                            add("eum"),
                                            add("nihil"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("quidem"),
                                            add("repudiandae"),
                                            add("a"),
                                            add("recusandae"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("officia"),
                                            add("doloribus"),
                                            add("adipisci"),
                                            add("porro"),
                                        }};
                                    }};
                                    description = "mollitia";
                                    match = "reprehenderit";
                                    ruleNumber = 774969L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("fugit"),
                                            add("veritatis"),
                                        }};
                                        sourceNatActiveRanges = new String[]{{
                                            add("officiis"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("quos"),
                                            add("nesciunt"),
                                            add("porro"),
                                        }};
                                        sourceNatDrainRanges = new String[]{{
                                            add("blanditiis"),
                                            add("quasi"),
                                        }};
                                    }};
                                    description = "architecto";
                                    match = "omnis";
                                    ruleNumber = 368060L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Kristopher Rosenbaum";
                                    secondaryIpRangeNames = new String[]{{
                                        add("quidem"),
                                        add("doloremque"),
                                        add("dignissimos"),
                                        add("quisquam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 417749;
                            tcpTimeWaitTimeoutSec = 213464;
                            tcpTransitoryIdleTimeoutSec = 514886;
                            type = RouterNatTypeEnum.PRIVATE_;
                            udpIdleTimeoutSec = 973493;
                        }}),
                    }};
                    network = "maxime";
                    region = "eum";
                    selfLink = "recusandae";
                    selfLinkWithId = "laudantium";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "sequi";
                key = "quo";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "tempore";
                uploadType = "cumque";
                uploadProtocol = "ipsa";
                userIp = "nam";
            }};            

            ComputeRoutersUpdateResponse res = sdk.routers.computeRoutersUpdate(req, new ComputeRoutersUpdateSecurity() {{
                option1 = new ComputeRoutersUpdateSecurityOption1("incidunt", "eius") {{
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
