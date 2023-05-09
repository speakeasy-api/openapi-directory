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

            ComputeRoutersAggregatedListRequest req = new ComputeRoutersAggregatedListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "eos";
                filter = "numquam";
                includeAllScopes = false;
                key = "fugiat";
                maxResults = 886612L;
                oauthToken = "modi";
                orderBy = "suscipit";
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "accusantium";
                returnPartialSuccess = false;
                uploadType = "aliquam";
                uploadProtocol = "dolorem";
                userIp = "dolorum";
            }};            

            ComputeRoutersAggregatedListResponse res = sdk.routers.computeRoutersAggregatedList(req, new ComputeRoutersAggregatedListSecurity() {{
                option1 = new ComputeRoutersAggregatedListSecurityOption1("rerum", "nisi") {{
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

            ComputeRoutersDeleteRequest req = new ComputeRoutersDeleteRequest("eaque", "maxime", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "fuga";
                key = "alias";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "repellendus";
                requestId = "veritatis";
                uploadType = "sunt";
                uploadProtocol = "commodi";
                userIp = "amet";
            }};            

            ComputeRoutersDeleteResponse res = sdk.routers.computeRoutersDelete(req, new ComputeRoutersDeleteSecurity() {{
                option1 = new ComputeRoutersDeleteSecurityOption1("sapiente", "accusamus") {{
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

            ComputeRoutersGetRequest req = new ComputeRoutersGetRequest("ut", "reiciendis", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "impedit";
                key = "vero";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "magnam";
                uploadProtocol = "laborum";
                userIp = "sit";
            }};            

            ComputeRoutersGetResponse res = sdk.routers.computeRoutersGet(req, new ComputeRoutersGetSecurity() {{
                option1 = new ComputeRoutersGetSecurityOption1("nihil", "aut") {{
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

            ComputeRoutersGetNatMappingInfoRequest req = new ComputeRoutersGetNatMappingInfoRequest("accusamus", "dicta", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "a";
                filter = "placeat";
                key = "odio";
                maxResults = 383191L;
                natName = "dignissimos";
                oauthToken = "facere";
                orderBy = "accusantium";
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "sit";
                returnPartialSuccess = false;
                uploadType = "tenetur";
                uploadProtocol = "explicabo";
                userIp = "similique";
            }};            

            ComputeRoutersGetNatMappingInfoResponse res = sdk.routers.computeRoutersGetNatMappingInfo(req, new ComputeRoutersGetNatMappingInfoSecurity() {{
                option1 = new ComputeRoutersGetNatMappingInfoSecurityOption1("architecto", "aliquam") {{
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

            ComputeRoutersGetRouterStatusRequest req = new ComputeRoutersGetRouterStatusRequest("quos", "sed", "iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "rem";
                key = "quo";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "ab";
                uploadProtocol = "alias";
                userIp = "tempore";
            }};            

            ComputeRoutersGetRouterStatusResponse res = sdk.routers.computeRoutersGetRouterStatus(req, new ComputeRoutersGetRouterStatusSecurity() {{
                option1 = new ComputeRoutersGetRouterStatusSecurityOption1("deserunt", "officia") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersInsertRequest req = new ComputeRoutersInsertRequest("reiciendis", "cum") {{
                dollarXgafv = XgafvEnum.TWO;
                router = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "delectus";
                                range = "amet";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "minus";
                                range = "asperiores";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "corporis";
                                range = "debitis";
                            }}),
                        }};
                        asn = 985648L;
                        keepaliveInterval = 751515L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "nesciunt";
                                    range = "voluptas";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "deleniti";
                                    range = "culpa";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "ut";
                                    range = "assumenda";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "tempora";
                                    range = "ex";
                                }}),
                            }};
                            advertisedRoutePriority = 860306L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 407624L;
                                minTransmitInterval = 955921L;
                                multiplier = 695667L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "laboriosam";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "occaecati";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "aliquam";
                                }}),
                            }};
                            customLearnedRoutePriority = 219470;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "libero";
                            ipAddress = "harum";
                            ipv6NexthopAddress = "sapiente";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "provident";
                            name = "Wendy Mayer";
                            peerAsn = 392555L;
                            peerIpAddress = "nesciunt";
                            peerIpv6NexthopAddress = "dolorum";
                            routerApplianceInstance = "enim";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "dolorum";
                                    range = "similique";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "enim";
                                    range = "molestias";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "quae";
                                    range = "suscipit";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "esse";
                                    range = "tempora";
                                }}),
                            }};
                            advertisedRoutePriority = 792489L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 351910L;
                                minTransmitInterval = 351024L;
                                multiplier = 410411L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "debitis";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "doloribus";
                                }}),
                            }};
                            customLearnedRoutePriority = 35652;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "ipsum";
                            ipAddress = "dolorem";
                            ipv6NexthopAddress = "aut";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "fuga";
                            name = "Darrin Medhurst";
                            peerAsn = 548912L;
                            peerIpAddress = "odio";
                            peerIpv6NexthopAddress = "repellendus";
                            routerApplianceInstance = "distinctio";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "explicabo";
                                    range = "totam";
                                }}),
                            }};
                            advertisedRoutePriority = 499684L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 284520L;
                                minTransmitInterval = 444393L;
                                multiplier = 773528L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "excepturi";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "incidunt";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "praesentium";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "at";
                                }}),
                            }};
                            customLearnedRoutePriority = 80485;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "provident";
                            ipAddress = "odit";
                            ipv6NexthopAddress = "at";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "iure";
                            name = "Monique Smitham";
                            peerAsn = 156125L;
                            peerIpAddress = "porro";
                            peerIpv6NexthopAddress = "vitae";
                            routerApplianceInstance = "quidem";
                        }}),
                    }};
                    creationTimestamp = "quo";
                    description = "nulla";
                    encryptedInterconnectRouter = false;
                    id = "nemo";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "odio";
                            linkedInterconnectAttachment = "doloribus";
                            linkedVpnTunnel = "magni";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Billie Adams";
                            privateIpAddress = "hic";
                            redundantInterface = "ab";
                            subnetwork = "delectus";
                        }}),
                    }};
                    kind = "eaque";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "placeat";
                            name = "Jeffery Ziemann II";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "accusantium";
                            name = "Kara Stamm";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "nemo";
                            name = "Stephen Wunsch";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "odit";
                            name = "Dwayne Simonis";
                        }}),
                    }};
                    name = "Joshua Lehner";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("ullam"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 774661;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 883695;
                            minPortsPerVm = 802475;
                            name = "Cedric Kovacek";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("nisi"),
                                add("aliquid"),
                                add("doloremque"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("delectus"),
                                            add("placeat"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("maiores"),
                                            add("error"),
                                            add("explicabo"),
                                        }};
                                    }};
                                    description = "eveniet";
                                    match = "ducimus";
                                    ruleNumber = 557013L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("odio"),
                                            add("nesciunt"),
                                            add("at"),
                                            add("laboriosam"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("excepturi"),
                                            add("suscipit"),
                                            add("assumenda"),
                                            add("voluptatibus"),
                                        }};
                                    }};
                                    description = "fugiat";
                                    match = "aliquam";
                                    ruleNumber = 219045L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("excepturi"),
                                            add("illum"),
                                            add("porro"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ut"),
                                            add("perspiciatis"),
                                            add("quibusdam"),
                                        }};
                                    }};
                                    description = "quasi";
                                    match = "ad";
                                    ruleNumber = 318939L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("commodi"),
                                            add("molestiae"),
                                            add("ipsam"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("aliquam"),
                                            add("sit"),
                                            add("perferendis"),
                                            add("accusamus"),
                                        }};
                                    }};
                                    description = "ad";
                                    match = "at";
                                    ruleNumber = 858580L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Miss Jack Hagenes";
                                    secondaryIpRangeNames = new String[]{{
                                        add("perspiciatis"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Rose Mayert";
                                    secondaryIpRangeNames = new String[]{{
                                        add("a"),
                                        add("quidem"),
                                        add("vero"),
                                        add("fuga"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Delores Cormier";
                                    secondaryIpRangeNames = new String[]{{
                                        add("iure"),
                                        add("dolorem"),
                                        add("veniam"),
                                        add("nam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 587214;
                            tcpTimeWaitTimeoutSec = 77306;
                            tcpTransitoryIdleTimeoutSec = 115755;
                            udpIdleTimeoutSec = 340498;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("quam"),
                                add("quod"),
                                add("deserunt"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 52671;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 295142;
                            minPortsPerVm = 51344;
                            name = "Lindsey Kovacek";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("laboriosam"),
                                add("accusamus"),
                                add("corrupti"),
                                add("sint"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("saepe"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("illo"),
                                            add("modi"),
                                        }};
                                    }};
                                    description = "velit";
                                    match = "quis";
                                    ruleNumber = 40669L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("hic"),
                                            add("iste"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ea"),
                                            add("enim"),
                                        }};
                                    }};
                                    description = "vel";
                                    match = "repellendus";
                                    ruleNumber = 31044L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Steven Stoltenberg";
                                    secondaryIpRangeNames = new String[]{{
                                        add("eum"),
                                        add("esse"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Mark Nader";
                                    secondaryIpRangeNames = new String[]{{
                                        add("voluptas"),
                                        add("quaerat"),
                                        add("voluptatibus"),
                                        add("qui"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Leon Bayer";
                                    secondaryIpRangeNames = new String[]{{
                                        add("earum"),
                                        add("cumque"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 639319;
                            tcpTimeWaitTimeoutSec = 245160;
                            tcpTransitoryIdleTimeoutSec = 382623;
                            udpIdleTimeoutSec = 292313;
                        }}),
                    }};
                    network = "possimus";
                    region = "ullam";
                    selfLink = "dolor";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "quod";
                key = "repudiandae";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "ipsum";
                uploadType = "dicta";
                uploadProtocol = "illum";
                userIp = "commodi";
            }};            

            ComputeRoutersInsertResponse res = sdk.routers.computeRoutersInsert(req, new ComputeRoutersInsertSecurity() {{
                option1 = new ComputeRoutersInsertSecurityOption1("consectetur", "ipsa") {{
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

            ComputeRoutersListRequest req = new ComputeRoutersListRequest("maiores", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "harum";
                filter = "voluptates";
                key = "nisi";
                maxResults = 672935L;
                oauthToken = "unde";
                orderBy = "cumque";
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "aspernatur";
                returnPartialSuccess = false;
                uploadType = "laboriosam";
                uploadProtocol = "quos";
                userIp = "assumenda";
            }};            

            ComputeRoutersListResponse res = sdk.routers.computeRoutersList(req, new ComputeRoutersListSecurity() {{
                option1 = new ComputeRoutersListSecurityOption1("corporis", "quo") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersPatchRequest req = new ComputeRoutersPatchRequest("sapiente", "delectus", "dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "impedit";
                                range = "officia";
                            }}),
                        }};
                        asn = 415881L;
                        keepaliveInterval = 881090L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "dignissimos";
                                    range = "harum";
                                }}),
                            }};
                            advertisedRoutePriority = 633141L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 923275L;
                                minTransmitInterval = 898413L;
                                multiplier = 83757L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "voluptatem";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "vel";
                                }}),
                            }};
                            customLearnedRoutePriority = 86545;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "eum";
                            ipAddress = "excepturi";
                            ipv6NexthopAddress = "qui";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "provident";
                            name = "Erma Paucek";
                            peerAsn = 354230L;
                            peerIpAddress = "deleniti";
                            peerIpv6NexthopAddress = "vel";
                            routerApplianceInstance = "alias";
                        }}),
                    }};
                    creationTimestamp = "beatae";
                    description = "velit";
                    encryptedInterconnectRouter = false;
                    id = "pariatur";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "placeat";
                            linkedInterconnectAttachment = "deleniti";
                            linkedVpnTunnel = "molestiae";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Renee Douglas";
                            privateIpAddress = "et";
                            redundantInterface = "veritatis";
                            subnetwork = "ex";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "asperiores";
                            linkedInterconnectAttachment = "voluptas";
                            linkedVpnTunnel = "ab";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Ronald Sporer";
                            privateIpAddress = "consectetur";
                            redundantInterface = "possimus";
                            subnetwork = "reiciendis";
                        }}),
                    }};
                    kind = "dolorum";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "aut";
                            name = "Ms. Seth Schuster";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "qui";
                            name = "Kathryn King";
                        }}),
                    }};
                    name = "Gail Parker";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD;
                            drainNatIps = new String[]{{
                                add("saepe"),
                                add("consequuntur"),
                                add("pariatur"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 46156;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 5842;
                            minPortsPerVm = 525500;
                            name = "Mr. Colleen Pfeffer";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("culpa"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("error"),
                                            add("sit"),
                                            add("ab"),
                                            add("dolorum"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("doloribus"),
                                            add("earum"),
                                            add("voluptas"),
                                            add("necessitatibus"),
                                        }};
                                    }};
                                    description = "vel";
                                    match = "eligendi";
                                    ruleNumber = 813292L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("suscipit"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("repellendus"),
                                            add("nihil"),
                                            add("unde"),
                                            add("rem"),
                                        }};
                                    }};
                                    description = "ex";
                                    match = "a";
                                    ruleNumber = 145964L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Elaine Reilly";
                                    secondaryIpRangeNames = new String[]{{
                                        add("odit"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Kate Orn";
                                    secondaryIpRangeNames = new String[]{{
                                        add("sunt"),
                                        add("maxime"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Jean McCullough Jr.";
                                    secondaryIpRangeNames = new String[]{{
                                        add("accusamus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Bruce Davis";
                                    secondaryIpRangeNames = new String[]{{
                                        add("omnis"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 393756;
                            tcpTimeWaitTimeoutSec = 593129;
                            tcpTransitoryIdleTimeoutSec = 179449;
                            udpIdleTimeoutSec = 782539;
                        }}),
                    }};
                    network = "repellat";
                    region = "et";
                    selfLink = "repellendus";
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "ut";
                fields = "praesentium";
                key = "perferendis";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "aliquam";
                requestId = "amet";
                uploadType = "harum";
                uploadProtocol = "magnam";
                userIp = "consequatur";
            }};            

            ComputeRoutersPatchResponse res = sdk.routers.computeRoutersPatch(req, new ComputeRoutersPatchSecurity() {{
                option1 = new ComputeRoutersPatchSecurityOption1("eveniet", "pariatur") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersPreviewRequest req = new ComputeRoutersPreviewRequest("ea", "magnam", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.DEFAULT_;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "amet";
                                range = "beatae";
                            }}),
                        }};
                        asn = 104880L;
                        keepaliveInterval = 636485L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "eum";
                                    range = "aliquid";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "rem";
                                    range = "quod";
                                }}),
                            }};
                            advertisedRoutePriority = 626274L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 606471L;
                                minTransmitInterval = 544163L;
                                multiplier = 52554L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "beatae";
                                }}),
                            }};
                            customLearnedRoutePriority = 808108;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "eaque";
                            ipAddress = "beatae";
                            ipv6NexthopAddress = "praesentium";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "maxime";
                            name = "Ebony Ritchie";
                            peerAsn = 992272L;
                            peerIpAddress = "eius";
                            peerIpv6NexthopAddress = "rerum";
                            routerApplianceInstance = "deserunt";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "sequi";
                                    range = "quibusdam";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "aliquam";
                                    range = "dolorum";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "esse";
                                    range = "accusamus";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "aut";
                                    range = "debitis";
                                }}),
                            }};
                            advertisedRoutePriority = 868411L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 429405L;
                                minTransmitInterval = 440429L;
                                multiplier = 321154L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "natus";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "molestiae";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "eum";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "itaque";
                                }}),
                            }};
                            customLearnedRoutePriority = 743246;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "eveniet";
                            ipAddress = "quibusdam";
                            ipv6NexthopAddress = "error";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "odit";
                            name = "Mr. Nettie Greenholt";
                            peerAsn = 984097L;
                            peerIpAddress = "facere";
                            peerIpv6NexthopAddress = "voluptate";
                            routerApplianceInstance = "ipsum";
                        }}),
                    }};
                    creationTimestamp = "molestiae";
                    description = "eligendi";
                    encryptedInterconnectRouter = false;
                    id = "aliquam";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "voluptas";
                            linkedInterconnectAttachment = "quidem";
                            linkedVpnTunnel = "velit";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Sylvia Kovacek";
                            privateIpAddress = "animi";
                            redundantInterface = "facere";
                            subnetwork = "blanditiis";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "ullam";
                            linkedInterconnectAttachment = "repudiandae";
                            linkedVpnTunnel = "dolore";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Dwight Sanford";
                            privateIpAddress = "incidunt";
                            redundantInterface = "nisi";
                            subnetwork = "et";
                        }}),
                    }};
                    kind = "minima";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "ipsum";
                            name = "Ben Boehm";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "quam";
                            name = "Brad Kunze DVM";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "officiis";
                            name = "Noah Durgan";
                        }}),
                    }};
                    name = "Mr. Ivan Reynolds";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.PREMIUM;
                            drainNatIps = new String[]{{
                                add("unde"),
                                add("eaque"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 33838;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 213272;
                            minPortsPerVm = 765110;
                            name = "Christine Zieme";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("odio"),
                                add("nobis"),
                                add("est"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("atque"),
                                            add("saepe"),
                                            add("labore"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("optio"),
                                            add("eaque"),
                                        }};
                                    }};
                                    description = "commodi";
                                    match = "consequuntur";
                                    ruleNumber = 854853L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("voluptatibus"),
                                            add("natus"),
                                            add("aspernatur"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("quae"),
                                            add("quae"),
                                            add("itaque"),
                                            add("amet"),
                                        }};
                                    }};
                                    description = "ipsa";
                                    match = "magnam";
                                    ruleNumber = 991653L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Cecelia Lakin";
                                    secondaryIpRangeNames = new String[]{{
                                        add("sint"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Kent Kautzer";
                                    secondaryIpRangeNames = new String[]{{
                                        add("harum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 672051;
                            tcpTimeWaitTimeoutSec = 724919;
                            tcpTransitoryIdleTimeoutSec = 754700;
                            udpIdleTimeoutSec = 898582;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD;
                            drainNatIps = new String[]{{
                                add("rerum"),
                                add("praesentium"),
                                add("doloremque"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 575565;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 656998;
                            minPortsPerVm = 832143;
                            name = "Miriam O'Conner MD";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("doloremque"),
                                add("placeat"),
                                add("fugiat"),
                                add("nesciunt"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("repellat"),
                                            add("accusamus"),
                                            add("nulla"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("dignissimos"),
                                        }};
                                    }};
                                    description = "eligendi";
                                    match = "accusamus";
                                    ruleNumber = 369898L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("doloribus"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("itaque"),
                                            add("id"),
                                            add("perspiciatis"),
                                            add("corrupti"),
                                        }};
                                    }};
                                    description = "quas";
                                    match = "similique";
                                    ruleNumber = 51920L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("veritatis"),
                                            add("neque"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ut"),
                                            add("deserunt"),
                                            add("suscipit"),
                                            add("voluptatum"),
                                        }};
                                    }};
                                    description = "repellendus";
                                    match = "qui";
                                    ruleNumber = 399972L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Bobbie Rutherford";
                                    secondaryIpRangeNames = new String[]{{
                                        add("illo"),
                                        add("cum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 566720;
                            tcpTimeWaitTimeoutSec = 850084;
                            tcpTransitoryIdleTimeoutSec = 742038;
                            udpIdleTimeoutSec = 482611;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("doloremque"),
                                add("ipsam"),
                                add("placeat"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 303220;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 740191;
                            minPortsPerVm = 159481;
                            name = "Loretta Williamson";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("itaque"),
                                add("vel"),
                                add("possimus"),
                                add("aspernatur"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("iure"),
                                            add("voluptatibus"),
                                            add("praesentium"),
                                            add("dolorem"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("fugiat"),
                                            add("modi"),
                                            add("aliquid"),
                                        }};
                                    }};
                                    description = "laborum";
                                    match = "excepturi";
                                    ruleNumber = 717908L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("numquam"),
                                            add("itaque"),
                                            add("quis"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("iste"),
                                            add("in"),
                                        }};
                                    }};
                                    description = "est";
                                    match = "itaque";
                                    ruleNumber = 950252L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Sophia Kozey";
                                    secondaryIpRangeNames = new String[]{{
                                        add("eaque"),
                                        add("quo"),
                                        add("ratione"),
                                        add("reiciendis"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 932103;
                            tcpTimeWaitTimeoutSec = 169275;
                            tcpTransitoryIdleTimeoutSec = 482316;
                            udpIdleTimeoutSec = 579964;
                        }}),
                    }};
                    network = "molestias";
                    region = "voluptatem";
                    selfLink = "sapiente";
                }};;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "beatae";
                key = "odit";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "ratione";
                uploadProtocol = "nemo";
                userIp = "voluptatem";
            }};            

            ComputeRoutersPreviewResponse res = sdk.routers.computeRoutersPreview(req, new ComputeRoutersPreviewSecurity() {{
                option1 = new ComputeRoutersPreviewSecurityOption1("quasi", "reprehenderit") {{
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

            ComputeRoutersTestIamPermissionsRequest req = new ComputeRoutersTestIamPermissionsRequest("alias", "earum", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("animi"),
                        add("molestiae"),
                        add("consectetur"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "veniam";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "consequatur";
                key = "praesentium";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "fugit";
                uploadProtocol = "voluptatem";
                userIp = "dolore";
            }};            

            ComputeRoutersTestIamPermissionsResponse res = sdk.routers.computeRoutersTestIamPermissions(req, new ComputeRoutersTestIamPermissionsSecurity() {{
                option1 = new ComputeRoutersTestIamPermissionsSecurityOption1("officia", "iste") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRoutersUpdateRequest req = new ComputeRoutersUpdateRequest("autem", "maxime", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "ea";
                                range = "quia";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "numquam";
                                range = "modi";
                            }}),
                        }};
                        asn = 393741L;
                        keepaliveInterval = 412061L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "deleniti";
                                    range = "sit";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "quibusdam";
                                    range = "earum";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "magni";
                                    range = "cum";
                                }}),
                            }};
                            advertisedRoutePriority = 837596L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 507536L;
                                minTransmitInterval = 310902L;
                                multiplier = 629210L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "ducimus";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "amet";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "perspiciatis";
                                }}),
                            }};
                            customLearnedRoutePriority = 314316;
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "id";
                            ipAddress = "officia";
                            ipv6NexthopAddress = "deleniti";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "omnis";
                            name = "Emilio Mayer";
                            peerAsn = 170181L;
                            peerIpAddress = "repellendus";
                            peerIpv6NexthopAddress = "quia";
                            routerApplianceInstance = "dolore";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "laboriosam";
                                    range = "quo";
                                }}),
                            }};
                            advertisedRoutePriority = 517235L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 144747L;
                                minTransmitInterval = 968519L;
                                multiplier = 237228L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            customLearnedIpRanges = new org.openapis.openapi.models.shared.RouterBgpPeerCustomLearnedIpRange[]{{
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "rem";
                                }}),
                                add(new RouterBgpPeerCustomLearnedIpRange() {{
                                    range = "perspiciatis";
                                }}),
                            }};
                            customLearnedRoutePriority = 204927;
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "explicabo";
                            ipAddress = "dolores";
                            ipv6NexthopAddress = "blanditiis";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "deleniti";
                            name = "Jean Brekke";
                            peerAsn = 14195L;
                            peerIpAddress = "sed";
                            peerIpv6NexthopAddress = "vel";
                            routerApplianceInstance = "voluptates";
                        }}),
                    }};
                    creationTimestamp = "magnam";
                    description = "ipsa";
                    encryptedInterconnectRouter = false;
                    id = "tenetur";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "in";
                            linkedInterconnectAttachment = "eveniet";
                            linkedVpnTunnel = "maxime";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Miss Ricardo Bernier";
                            privateIpAddress = "possimus";
                            redundantInterface = "tenetur";
                            subnetwork = "consequatur";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "molestias";
                            linkedInterconnectAttachment = "veritatis";
                            linkedVpnTunnel = "doloremque";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Dr. Billie Hackett";
                            privateIpAddress = "aliquam";
                            redundantInterface = "ut";
                            subnetwork = "ducimus";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "vero";
                            linkedInterconnectAttachment = "saepe";
                            linkedVpnTunnel = "facilis";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Ben Miller";
                            privateIpAddress = "quidem";
                            redundantInterface = "rerum";
                            subnetwork = "cum";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "esse";
                            linkedInterconnectAttachment = "totam";
                            linkedVpnTunnel = "amet";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Darren Schmidt";
                            privateIpAddress = "neque";
                            redundantInterface = "velit";
                            subnetwork = "aliquid";
                        }}),
                    }};
                    kind = "sequi";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "corporis";
                            name = "Gertrude Okuneva";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "odit";
                            name = "Byron Huels";
                        }}),
                    }};
                    name = "Jill Boyle";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            drainNatIps = new String[]{{
                                add("et"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 353278;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 944186;
                            minPortsPerVm = 440070;
                            name = "Jamie Farrell";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("soluta"),
                                add("est"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("veniam"),
                                            add("alias"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("eaque"),
                                            add("omnis"),
                                        }};
                                    }};
                                    description = "corrupti";
                                    match = "sit";
                                    ruleNumber = 80910L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("temporibus"),
                                            add("esse"),
                                            add("repellendus"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("similique"),
                                            add("cupiditate"),
                                            add("voluptatem"),
                                        }};
                                    }};
                                    description = "esse";
                                    match = "cupiditate";
                                    ruleNumber = 532787L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("earum"),
                                            add("ipsa"),
                                            add("labore"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("in"),
                                        }};
                                    }};
                                    description = "alias";
                                    match = "in";
                                    ruleNumber = 2010L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Mr. Daryl Baumbach";
                                    secondaryIpRangeNames = new String[]{{
                                        add("porro"),
                                        add("veritatis"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 737186;
                            tcpTimeWaitTimeoutSec = 493538;
                            tcpTransitoryIdleTimeoutSec = 257165;
                            udpIdleTimeoutSec = 525964;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.STANDARD;
                            drainNatIps = new String[]{{
                                add("totam"),
                                add("accusamus"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 263537;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 939053;
                            minPortsPerVm = 374049;
                            name = "Miriam Adams";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("tempora"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("eius"),
                                            add("harum"),
                                            add("minima"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("cum"),
                                            add("odit"),
                                            add("necessitatibus"),
                                        }};
                                    }};
                                    description = "soluta";
                                    match = "amet";
                                    ruleNumber = 203120L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quisquam"),
                                            add("porro"),
                                            add("ratione"),
                                            add("architecto"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("soluta"),
                                            add("exercitationem"),
                                        }};
                                    }};
                                    description = "inventore";
                                    match = "id";
                                    ruleNumber = 205949L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("vero"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("ut"),
                                            add("doloribus"),
                                        }};
                                    }};
                                    description = "magnam";
                                    match = "illum";
                                    ruleNumber = 319649L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Veronica Ryan";
                                    secondaryIpRangeNames = new String[]{{
                                        add("laboriosam"),
                                        add("dolor"),
                                        add("quaerat"),
                                        add("illum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Dr. Jesse Mayert";
                                    secondaryIpRangeNames = new String[]{{
                                        add("deserunt"),
                                        add("odit"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Louise O'Reilly";
                                    secondaryIpRangeNames = new String[]{{
                                        add("voluptatem"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Christie Lakin III";
                                    secondaryIpRangeNames = new String[]{{
                                        add("expedita"),
                                        add("sint"),
                                        add("quam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 560190;
                            tcpTimeWaitTimeoutSec = 659860;
                            tcpTransitoryIdleTimeoutSec = 672140;
                            udpIdleTimeoutSec = 747677;
                        }}),
                        add(new RouterNat() {{
                            autoNetworkTier = RouterNatAutoNetworkTierEnum.PREMIUM;
                            drainNatIps = new String[]{{
                                add("blanditiis"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 949838;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 435289;
                            minPortsPerVm = 964489;
                            name = "Mrs. Eunice Konopelski";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("necessitatibus"),
                                add("enim"),
                                add("nulla"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("fuga"),
                                            add("ab"),
                                            add("sit"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("nostrum"),
                                            add("velit"),
                                        }};
                                    }};
                                    description = "ipsum";
                                    match = "consequuntur";
                                    ruleNumber = 675067L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("facilis"),
                                            add("eaque"),
                                            add("explicabo"),
                                            add("at"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("soluta"),
                                            add("ea"),
                                            add("exercitationem"),
                                        }};
                                    }};
                                    description = "dolor";
                                    match = "error";
                                    ruleNumber = 638608L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("facere"),
                                            add("impedit"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("placeat"),
                                            add("optio"),
                                            add("molestias"),
                                        }};
                                    }};
                                    description = "maxime";
                                    match = "nostrum";
                                    ruleNumber = 555780L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("accusantium"),
                                            add("officia"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("veritatis"),
                                        }};
                                    }};
                                    description = "perspiciatis";
                                    match = "officiis";
                                    ruleNumber = 395315L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Glenn Gottlieb";
                                    secondaryIpRangeNames = new String[]{{
                                        add("ex"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 321194;
                            tcpTimeWaitTimeoutSec = 636003;
                            tcpTransitoryIdleTimeoutSec = 568757;
                            udpIdleTimeoutSec = 679238;
                        }}),
                    }};
                    network = "vitae";
                    region = "consequuntur";
                    selfLink = "nostrum";
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "fugit";
                key = "qui";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "deleniti";
                requestId = "reprehenderit";
                uploadType = "vitae";
                uploadProtocol = "quod";
                userIp = "mollitia";
            }};            

            ComputeRoutersUpdateResponse res = sdk.routers.computeRoutersUpdate(req, new ComputeRoutersUpdateSecurity() {{
                option1 = new ComputeRoutersUpdateSecurityOption1("reprehenderit", "odio") {{
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
