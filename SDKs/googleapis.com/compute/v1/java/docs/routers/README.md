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

            ComputeRoutersAggregatedListRequest req = new ComputeRoutersAggregatedListRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "minima";
                filter = "architecto";
                includeAllScopes = false;
                key = "beatae";
                maxResults = 791634L;
                oauthToken = "fugit";
                orderBy = "facere";
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "ex";
                returnPartialSuccess = false;
                uploadType = "ratione";
                uploadProtocol = "magnam";
                userIp = "temporibus";
            }};            

            ComputeRoutersAggregatedListResponse res = sdk.routers.computeRoutersAggregatedList(req, new ComputeRoutersAggregatedListSecurity() {{
                option1 = new ComputeRoutersAggregatedListSecurityOption1("ad", "libero") {{
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

            ComputeRoutersDeleteRequest req = new ComputeRoutersDeleteRequest("sunt", "soluta", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "vitae";
                fields = "non";
                key = "vero";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "assumenda";
                uploadType = "tempore";
                uploadProtocol = "sequi";
                userIp = "vel";
            }};            

            ComputeRoutersDeleteResponse res = sdk.routers.computeRoutersDelete(req, new ComputeRoutersDeleteSecurity() {{
                option1 = new ComputeRoutersDeleteSecurityOption1("veritatis", "ratione") {{
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

            ComputeRoutersGetRequest req = new ComputeRoutersGetRequest("ab", "neque", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "nobis";
                key = "ratione";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "eos";
                uploadProtocol = "saepe";
                userIp = "deserunt";
            }};            

            ComputeRoutersGetResponse res = sdk.routers.computeRoutersGet(req, new ComputeRoutersGetSecurity() {{
                option1 = new ComputeRoutersGetSecurityOption1("officia", "asperiores") {{
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

            ComputeRoutersGetNatMappingInfoRequest req = new ComputeRoutersGetNatMappingInfoRequest("occaecati", "ipsa", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "officia";
                filter = "ut";
                key = "incidunt";
                maxResults = 932928L;
                natName = "non";
                oauthToken = "exercitationem";
                orderBy = "labore";
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "doloremque";
                returnPartialSuccess = false;
                uploadType = "ratione";
                uploadProtocol = "et";
                userIp = "iusto";
            }};            

            ComputeRoutersGetNatMappingInfoResponse res = sdk.routers.computeRoutersGetNatMappingInfo(req, new ComputeRoutersGetNatMappingInfoSecurity() {{
                option1 = new ComputeRoutersGetNatMappingInfoSecurityOption1("a", "rerum") {{
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

            ComputeRoutersGetRouterStatusRequest req = new ComputeRoutersGetRouterStatusRequest("rem", "sunt", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "enim";
                key = "minus";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quaerat";
                uploadProtocol = "suscipit";
                userIp = "maiores";
            }};            

            ComputeRoutersGetRouterStatusResponse res = sdk.routers.computeRoutersGetRouterStatus(req, new ComputeRoutersGetRouterStatusSecurity() {{
                option1 = new ComputeRoutersGetRouterStatusSecurityOption1("animi", "nemo") {{
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
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
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

            ComputeRoutersInsertRequest req = new ComputeRoutersInsertRequest("ea", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                router = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.DEFAULT_;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "quos";
                                range = "voluptatum";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "consequuntur";
                                range = "quam";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "exercitationem";
                                range = "libero";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "cumque";
                                range = "expedita";
                            }}),
                        }};
                        asn = 74863L;
                        keepaliveInterval = 695117L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "nisi";
                                    range = "aliquid";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "nihil";
                                    range = "perspiciatis";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "neque";
                                    range = "reprehenderit";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "voluptates";
                                    range = "necessitatibus";
                                }}),
                            }};
                            advertisedRoutePriority = 688435L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 525719L;
                                minTransmitInterval = 1312L;
                                multiplier = 586087L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "sequi";
                            ipAddress = "doloremque";
                            ipv6NexthopAddress = "ea";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "assumenda";
                            name = "Grady Hudson";
                            peerAsn = 594074L;
                            peerIpAddress = "ipsum";
                            peerIpv6NexthopAddress = "ad";
                            routerApplianceInstance = "totam";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "dolore";
                                    range = "itaque";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "minima";
                                    range = "quas";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "reprehenderit";
                                    range = "ipsum";
                                }}),
                            }};
                            advertisedRoutePriority = 441230L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 616175L;
                                minTransmitInterval = 272073L;
                                multiplier = 530721L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "fugit";
                            ipAddress = "eum";
                            ipv6NexthopAddress = "alias";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "praesentium";
                            name = "Miss Hope Balistreri IV";
                            peerAsn = 351046L;
                            peerIpAddress = "cum";
                            peerIpv6NexthopAddress = "voluptates";
                            routerApplianceInstance = "dolorem";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.DEFAULT_;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "vitae";
                                    range = "voluptate";
                                }}),
                            }};
                            advertisedRoutePriority = 453852L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 946228L;
                                minTransmitInterval = 36519L;
                                multiplier = 68528L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                            }};
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "occaecati";
                            ipAddress = "doloremque";
                            ipv6NexthopAddress = "sint";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "esse";
                            name = "Hannah Kozey";
                            peerAsn = 704062L;
                            peerIpAddress = "consectetur";
                            peerIpv6NexthopAddress = "beatae";
                            routerApplianceInstance = "ipsam";
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
                                    description = "qui";
                                    range = "ullam";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "libero";
                                    range = "repellat";
                                }}),
                            }};
                            advertisedRoutePriority = 721368L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 872097L;
                                minTransmitInterval = 111547L;
                                multiplier = 204122L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "quia";
                            ipAddress = "laborum";
                            ipv6NexthopAddress = "non";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "nobis";
                            name = "Miss Jeremiah Anderson";
                            peerAsn = 825979L;
                            peerIpAddress = "corrupti";
                            peerIpv6NexthopAddress = "perferendis";
                            routerApplianceInstance = "labore";
                        }}),
                    }};
                    creationTimestamp = "voluptatum";
                    description = "est";
                    encryptedInterconnectRouter = false;
                    id = "pariatur";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "itaque";
                            linkedInterconnectAttachment = "quo";
                            linkedVpnTunnel = "eos";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Cynthia Flatley";
                            privateIpAddress = "animi";
                            redundantInterface = "nam";
                            subnetwork = "voluptates";
                        }}),
                    }};
                    kind = "iusto";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "similique";
                            name = "Brian Schneider DDS";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "amet";
                            name = "Bernadette Gulgowski";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "repudiandae";
                            name = "Gustavo Pouros";
                        }}),
                    }};
                    name = "Jane Carroll";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("labore"),
                                add("natus"),
                                add("tenetur"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 94351;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 551998;
                            minPortsPerVm = 452310;
                            name = "Dr. Desiree Abernathy";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("voluptatum"),
                                add("ex"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quae"),
                                            add("ad"),
                                            add("dolores"),
                                            add("quisquam"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("possimus"),
                                        }};
                                    }};
                                    description = "aliquid";
                                    match = "est";
                                    ruleNumber = 404859L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Mr. Kelvin Schroeder";
                                    secondaryIpRangeNames = new String[]{{
                                        add("iusto"),
                                        add("error"),
                                        add("consequatur"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Curtis Heller Sr.";
                                    secondaryIpRangeNames = new String[]{{
                                        add("rerum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Shelley Stoltenberg";
                                    secondaryIpRangeNames = new String[]{{
                                        add("natus"),
                                        add("dolores"),
                                        add("eos"),
                                        add("labore"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Rolando Bosco";
                                    secondaryIpRangeNames = new String[]{{
                                        add("atque"),
                                        add("a"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 762217;
                            tcpTimeWaitTimeoutSec = 569045;
                            tcpTransitoryIdleTimeoutSec = 730847;
                            udpIdleTimeoutSec = 715074;
                        }}),
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("debitis"),
                                add("assumenda"),
                                add("atque"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 143632;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 746699;
                            minPortsPerVm = 525539;
                            name = "Joseph Dare";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("a"),
                                add("sed"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("rem"),
                                            add("reprehenderit"),
                                            add("perferendis"),
                                            add("modi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("soluta"),
                                        }};
                                    }};
                                    description = "minima";
                                    match = "quos";
                                    ruleNumber = 477259L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("debitis"),
                                            add("accusantium"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("iure"),
                                            add("quod"),
                                        }};
                                    }};
                                    description = "accusamus";
                                    match = "voluptatem";
                                    ruleNumber = 938358L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("laboriosam"),
                                            add("beatae"),
                                            add("fugiat"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("molestiae"),
                                            add("sint"),
                                            add("facilis"),
                                            add("dolorem"),
                                        }};
                                    }};
                                    description = "quidem";
                                    match = "corrupti";
                                    ruleNumber = 461819L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("sunt"),
                                            add("labore"),
                                            add("quasi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("illum"),
                                            add("ab"),
                                        }};
                                    }};
                                    description = "sapiente";
                                    match = "nobis";
                                    ruleNumber = 504623L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Kurt Ward";
                                    secondaryIpRangeNames = new String[]{{
                                        add("est"),
                                        add("sed"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 983239;
                            tcpTimeWaitTimeoutSec = 479511;
                            tcpTransitoryIdleTimeoutSec = 914601;
                            udpIdleTimeoutSec = 135008;
                        }}),
                    }};
                    network = "eaque";
                    region = "pariatur";
                    selfLink = "deserunt";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "nisi";
                key = "excepturi";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "incidunt";
                requestId = "temporibus";
                uploadType = "eveniet";
                uploadProtocol = "laboriosam";
                userIp = "voluptatibus";
            }};            

            ComputeRoutersInsertResponse res = sdk.routers.computeRoutersInsert(req, new ComputeRoutersInsertSecurity() {{
                option1 = new ComputeRoutersInsertSecurityOption1("quia", "aspernatur") {{
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

            ComputeRoutersListRequest req = new ComputeRoutersListRequest("occaecati", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "sequi";
                filter = "molestiae";
                key = "ea";
                maxResults = 342930L;
                oauthToken = "unde";
                orderBy = "soluta";
                pageToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "quam";
                returnPartialSuccess = false;
                uploadType = "unde";
                uploadProtocol = "error";
                userIp = "saepe";
            }};            

            ComputeRoutersListResponse res = sdk.routers.computeRoutersList(req, new ComputeRoutersListSecurity() {{
                option1 = new ComputeRoutersListSecurityOption1("id", "error") {{
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
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
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

            ComputeRoutersPatchRequest req = new ComputeRoutersPatchRequest("quas", "laboriosam", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.CUSTOM;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "fugiat";
                                range = "cupiditate";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "neque";
                                range = "ipsum";
                            }}),
                        }};
                        asn = 967185L;
                        keepaliveInterval = 960587L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "maxime";
                                    range = "facilis";
                                }}),
                            }};
                            advertisedRoutePriority = 8353L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 29110L;
                                minTransmitInterval = 788349L;
                                multiplier = 83786L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "id";
                            ipAddress = "blanditiis";
                            ipv6NexthopAddress = "in";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "tenetur";
                            name = "Lee Borer";
                            peerAsn = 269801L;
                            peerIpAddress = "iste";
                            peerIpv6NexthopAddress = "hic";
                            routerApplianceInstance = "delectus";
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
                                    description = "ad";
                                    range = "occaecati";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "consequatur";
                                    range = "ab";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "laboriosam";
                                    range = "illo";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "earum";
                                    range = "repudiandae";
                                }}),
                            }};
                            advertisedRoutePriority = 669785L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 438601L;
                                minTransmitInterval = 305474L;
                                multiplier = 353461L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "aut";
                            ipAddress = "eum";
                            ipv6NexthopAddress = "optio";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "libero";
                            name = "Jimmy Jacobi Sr.";
                            peerAsn = 171400L;
                            peerIpAddress = "earum";
                            peerIpv6NexthopAddress = "exercitationem";
                            routerApplianceInstance = "nobis";
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
                                    description = "saepe";
                                    range = "error";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "maiores";
                                    range = "explicabo";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "animi";
                                    range = "nulla";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "excepturi";
                                    range = "hic";
                                }}),
                            }};
                            advertisedRoutePriority = 534313L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 372165L;
                                minTransmitInterval = 164414L;
                                multiplier = 873132L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "consectetur";
                            ipAddress = "quod";
                            ipv6NexthopAddress = "deserunt";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "quo";
                            name = "Velma Grady";
                            peerAsn = 155890L;
                            peerIpAddress = "recusandae";
                            peerIpv6NexthopAddress = "beatae";
                            routerApplianceInstance = "voluptas";
                        }}),
                    }};
                    creationTimestamp = "illo";
                    description = "ipsum";
                    encryptedInterconnectRouter = false;
                    id = "debitis";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "ullam";
                            linkedInterconnectAttachment = "eius";
                            linkedVpnTunnel = "ab";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Francisco Metz";
                            privateIpAddress = "distinctio";
                            redundantInterface = "ratione";
                            subnetwork = "corporis";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "voluptatem";
                            linkedInterconnectAttachment = "quaerat";
                            linkedVpnTunnel = "tenetur";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Dustin Adams";
                            privateIpAddress = "cupiditate";
                            redundantInterface = "voluptatem";
                            subnetwork = "et";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "quod";
                            linkedInterconnectAttachment = "deserunt";
                            linkedVpnTunnel = "natus";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Estelle Cummings III";
                            privateIpAddress = "perspiciatis";
                            redundantInterface = "quas";
                            subnetwork = "aperiam";
                        }}),
                    }};
                    kind = "quas";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "odio";
                            name = "Vicki Sanford";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "eos";
                            name = "Ora Von";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "quas";
                            name = "Maurice Nolan";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "distinctio";
                            name = "Wesley Kreiger";
                        }}),
                    }};
                    name = "Brett Gorczany";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("adipisci"),
                                add("reiciendis"),
                                add("necessitatibus"),
                                add("nam"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 15202;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 474109;
                            minPortsPerVm = 584803;
                            name = "Ms. Gary Wisoky IV";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("ipsam"),
                                add("expedita"),
                                add("minus"),
                                add("porro"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("iste"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("sit"),
                                            add("atque"),
                                            add("possimus"),
                                        }};
                                    }};
                                    description = "excepturi";
                                    match = "expedita";
                                    ruleNumber = 797393L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("nisi"),
                                            add("ut"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("nobis"),
                                        }};
                                    }};
                                    description = "odio";
                                    match = "officiis";
                                    ruleNumber = 177872L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "James Rempel";
                                    secondaryIpRangeNames = new String[]{{
                                        add("quia"),
                                        add("ipsum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 431673;
                            tcpTimeWaitTimeoutSec = 681466;
                            tcpTransitoryIdleTimeoutSec = 989866;
                            udpIdleTimeoutSec = 669630;
                        }}),
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("natus"),
                                add("soluta"),
                                add("suscipit"),
                                add("dolorem"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 468691;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 225685;
                            minPortsPerVm = 583096;
                            name = "Andre Beahan";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("voluptates"),
                                add("ipsa"),
                                add("repellat"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("et"),
                                            add("rerum"),
                                            add("sapiente"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("occaecati"),
                                            add("velit"),
                                            add("dolor"),
                                            add("autem"),
                                        }};
                                    }};
                                    description = "suscipit";
                                    match = "odit";
                                    ruleNumber = 636003L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Gloria Macejkovic";
                                    secondaryIpRangeNames = new String[]{{
                                        add("aperiam"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Kristin Fay";
                                    secondaryIpRangeNames = new String[]{{
                                        add("fuga"),
                                        add("architecto"),
                                        add("voluptate"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Leland Langworth";
                                    secondaryIpRangeNames = new String[]{{
                                        add("perferendis"),
                                        add("placeat"),
                                        add("laboriosam"),
                                        add("reiciendis"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 983273;
                            tcpTimeWaitTimeoutSec = 885730;
                            tcpTransitoryIdleTimeoutSec = 126299;
                            udpIdleTimeoutSec = 683737;
                        }}),
                    }};
                    network = "id";
                    region = "tempore";
                    selfLink = "minima";
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "alias";
                key = "sequi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "eum";
                uploadType = "illum";
                uploadProtocol = "magni";
                userIp = "aspernatur";
            }};            

            ComputeRoutersPatchResponse res = sdk.routers.computeRoutersPatch(req, new ComputeRoutersPatchSecurity() {{
                option1 = new ComputeRoutersPatchSecurityOption1("molestiae", "aspernatur") {{
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
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
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

            ComputeRoutersPreviewRequest req = new ComputeRoutersPreviewRequest("ex", "deleniti", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                router1 = new Router() {{
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
                                description = "iste";
                                range = "animi";
                            }}),
                        }};
                        asn = 764595L;
                        keepaliveInterval = 140729L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "possimus";
                                    range = "tempora";
                                }}),
                            }};
                            advertisedRoutePriority = 667507L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 280362L;
                                minTransmitInterval = 192116L;
                                multiplier = 221313L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "asperiores";
                            ipAddress = "amet";
                            ipv6NexthopAddress = "quas";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "porro";
                            name = "Randal Frami";
                            peerAsn = 615572L;
                            peerIpAddress = "hic";
                            peerIpv6NexthopAddress = "consectetur";
                            routerApplianceInstance = "quam";
                        }}),
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
                                    description = "inventore";
                                    range = "rem";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "expedita";
                                    range = "deleniti";
                                }}),
                            }};
                            advertisedRoutePriority = 828405L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 576570L;
                                minTransmitInterval = 573896L;
                                multiplier = 790171L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "officiis";
                            ipAddress = "debitis";
                            ipv6NexthopAddress = "iste";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "iste";
                            name = "Marjorie Schultz";
                            peerAsn = 906090L;
                            peerIpAddress = "impedit";
                            peerIpv6NexthopAddress = "unde";
                            routerApplianceInstance = "amet";
                        }}),
                    }};
                    creationTimestamp = "accusantium";
                    description = "qui";
                    encryptedInterconnectRouter = false;
                    id = "quia";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "vel";
                            linkedInterconnectAttachment = "maiores";
                            linkedVpnTunnel = "iste";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            name = "Mr. Zachary Kris";
                            privateIpAddress = "quia";
                            redundantInterface = "cum";
                            subnetwork = "optio";
                        }}),
                        add(new RouterInterface() {{
                            ipRange = "aut";
                            linkedInterconnectAttachment = "quae";
                            linkedVpnTunnel = "velit";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Jenny Daniel DVM";
                            privateIpAddress = "occaecati";
                            redundantInterface = "velit";
                            subnetwork = "quia";
                        }}),
                    }};
                    kind = "molestiae";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "ipsum";
                            name = "Lee Wunsch";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "occaecati";
                            name = "Antonio Batz";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "repudiandae";
                            name = "Mr. Laurence Doyle";
                        }}),
                    }};
                    name = "Lee MacGyver";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("in"),
                                add("incidunt"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 702598;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 882437;
                            minPortsPerVm = 449745;
                            name = "Matthew Ledner";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("doloremque"),
                                add("aspernatur"),
                                add("blanditiis"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("hic"),
                                            add("unde"),
                                            add("modi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("alias"),
                                        }};
                                    }};
                                    description = "voluptatum";
                                    match = "sequi";
                                    ruleNumber = 360143L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("dolores"),
                                            add("laudantium"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("nam"),
                                            add("sint"),
                                            add("voluptas"),
                                            add("optio"),
                                        }};
                                    }};
                                    description = "in";
                                    match = "nesciunt";
                                    ruleNumber = 609698L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Cristina Paucek";
                                    secondaryIpRangeNames = new String[]{{
                                        add("fugiat"),
                                        add("modi"),
                                        add("magnam"),
                                        add("vitae"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Drew Swift";
                                    secondaryIpRangeNames = new String[]{{
                                        add("rem"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Melissa Effertz";
                                    secondaryIpRangeNames = new String[]{{
                                        add("praesentium"),
                                        add("doloremque"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 398861;
                            tcpTimeWaitTimeoutSec = 599797;
                            tcpTransitoryIdleTimeoutSec = 299812;
                            udpIdleTimeoutSec = 40214;
                        }}),
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("laudantium"),
                                add("nulla"),
                                add("sunt"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 797279;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.TRANSLATIONS_ONLY;
                            }};
                            maxPortsPerVm = 438548;
                            minPortsPerVm = 555946;
                            name = "Miss Derrick Littel";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("occaecati"),
                                add("modi"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("eligendi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("officia"),
                                            add("perspiciatis"),
                                            add("ad"),
                                        }};
                                    }};
                                    description = "excepturi";
                                    match = "voluptatem";
                                    ruleNumber = 678969L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quod"),
                                            add("sint"),
                                            add("perferendis"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("maxime"),
                                        }};
                                    }};
                                    description = "maiores";
                                    match = "explicabo";
                                    ruleNumber = 249086L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("tenetur"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("pariatur"),
                                        }};
                                    }};
                                    description = "aperiam";
                                    match = "laboriosam";
                                    ruleNumber = 390818L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("veniam"),
                                            add("totam"),
                                            add("vel"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("rerum"),
                                            add("odit"),
                                        }};
                                    }};
                                    description = "consequuntur";
                                    match = "dicta";
                                    ruleNumber = 145570L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Marcella Mertz";
                                    secondaryIpRangeNames = new String[]{{
                                        add("dolor"),
                                        add("debitis"),
                                        add("dolorum"),
                                        add("deserunt"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Dan Bogisich";
                                    secondaryIpRangeNames = new String[]{{
                                        add("atque"),
                                        add("est"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Leah Fahey II";
                                    secondaryIpRangeNames = new String[]{{
                                        add("eveniet"),
                                        add("nemo"),
                                        add("aliquid"),
                                        add("occaecati"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "James Nienow MD";
                                    secondaryIpRangeNames = new String[]{{
                                        add("distinctio"),
                                        add("delectus"),
                                        add("minus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 109855;
                            tcpTimeWaitTimeoutSec = 355824;
                            tcpTransitoryIdleTimeoutSec = 945820;
                            udpIdleTimeoutSec = 266620;
                        }}),
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("quo"),
                                add("temporibus"),
                                add("tempore"),
                                add("veritatis"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 739899;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 927803;
                            minPortsPerVm = 278910;
                            name = "Jack Bartoletti";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("porro"),
                                add("delectus"),
                                add("optio"),
                                add("quas"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("ab"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("provident"),
                                        }};
                                    }};
                                    description = "dignissimos";
                                    match = "enim";
                                    ruleNumber = 544576L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("vitae"),
                                            add("sint"),
                                            add("aut"),
                                            add("illum"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("eaque"),
                                        }};
                                    }};
                                    description = "eum";
                                    match = "tenetur";
                                    ruleNumber = 401869L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("odit"),
                                            add("eligendi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("sed"),
                                            add("error"),
                                        }};
                                    }};
                                    description = "voluptas";
                                    match = "enim";
                                    ruleNumber = 978891L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("in"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("odit"),
                                            add("laboriosam"),
                                        }};
                                    }};
                                    description = "cupiditate";
                                    match = "quo";
                                    ruleNumber = 485402L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Shelia Willms";
                                    secondaryIpRangeNames = new String[]{{
                                        add("tempore"),
                                        add("eos"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Latoya Nader";
                                    secondaryIpRangeNames = new String[]{{
                                        add("reprehenderit"),
                                        add("voluptatum"),
                                        add("soluta"),
                                        add("adipisci"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Luther Roberts DVM";
                                    secondaryIpRangeNames = new String[]{{
                                        add("cumque"),
                                        add("magni"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 997925;
                            tcpTimeWaitTimeoutSec = 825171;
                            tcpTransitoryIdleTimeoutSec = 804833;
                            udpIdleTimeoutSec = 534378;
                        }}),
                    }};
                    network = "numquam";
                    region = "saepe";
                    selfLink = "incidunt";
                }};;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "unde";
                key = "voluptas";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "deleniti";
                uploadProtocol = "iusto";
                userIp = "tempore";
            }};            

            ComputeRoutersPreviewResponse res = sdk.routers.computeRoutersPreview(req, new ComputeRoutersPreviewSecurity() {{
                option1 = new ComputeRoutersPreviewSecurityOption1("temporibus", "assumenda") {{
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
import org.openapis.openapi.models.shared.RouterBgpPeerEnableEnum;
import org.openapis.openapi.models.shared.RouterBgpPeerManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterInterface;
import org.openapis.openapi.models.shared.RouterInterfaceManagementTypeEnum;
import org.openapis.openapi.models.shared.RouterMd5AuthenticationKey;
import org.openapis.openapi.models.shared.RouterNat;
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

            ComputeRoutersUpdateRequest req = new ComputeRoutersUpdateRequest("laboriosam", "veniam", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                router1 = new Router() {{
                    bgp = new RouterBgp() {{
                        advertiseMode = RouterBgpAdvertiseModeEnum.DEFAULT_;
                        advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpAdvertisedGroupsEnum[]{{
                            add(RouterBgpAdvertisedGroupsEnum.ALL_SUBNETS),
                        }};
                        advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                            add(new RouterAdvertisedIpRange() {{
                                description = "eaque";
                                range = "velit";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "voluptatum";
                                range = "esse";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "ad";
                                range = "nostrum";
                            }}),
                            add(new RouterAdvertisedIpRange() {{
                                description = "expedita";
                                range = "occaecati";
                            }}),
                        }};
                        asn = 937366L;
                        keepaliveInterval = 788484L;
                    }};;
                    bgpPeers = new org.openapis.openapi.models.shared.RouterBgpPeer[]{{
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "quasi";
                                    range = "quisquam";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "quasi";
                                    range = "aut";
                                }}),
                            }};
                            advertisedRoutePriority = 512151L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 639920L;
                                minTransmitInterval = 411589L;
                                multiplier = 709480L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "quos";
                            ipAddress = "autem";
                            ipv6NexthopAddress = "minus";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "blanditiis";
                            name = "Margaret Beahan MD";
                            peerAsn = 272917L;
                            peerIpAddress = "ea";
                            peerIpv6NexthopAddress = "illum";
                            routerApplianceInstance = "totam";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "earum";
                                    range = "ex";
                                }}),
                            }};
                            advertisedRoutePriority = 587505L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 289939L;
                                minTransmitInterval = 472217L;
                                multiplier = 468600L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.PASSIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "neque";
                            ipAddress = "rem";
                            ipv6NexthopAddress = "at";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_ATTACHMENT;
                            md5AuthenticationKeyName = "numquam";
                            name = "Willie Haley";
                            peerAsn = 611357L;
                            peerIpAddress = "est";
                            peerIpv6NexthopAddress = "illum";
                            routerApplianceInstance = "perspiciatis";
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
                                    description = "consequatur";
                                    range = "iusto";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "rem";
                                    range = "temporibus";
                                }}),
                            }};
                            advertisedRoutePriority = 204522L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 465437L;
                                minTransmitInterval = 303434L;
                                multiplier = 503059L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.ACTIVE;
                            }};
                            enable = RouterBgpPeerEnableEnum.TRUE;
                            enableIpv6 = false;
                            interfaceName = "nesciunt";
                            ipAddress = "a";
                            ipv6NexthopAddress = "ad";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "qui";
                            name = "Dr. Fredrick Medhurst";
                            peerAsn = 181881L;
                            peerIpAddress = "odio";
                            peerIpv6NexthopAddress = "illo";
                            routerApplianceInstance = "culpa";
                        }}),
                        add(new RouterBgpPeer() {{
                            advertiseMode = RouterBgpPeerAdvertiseModeEnum.CUSTOM;
                            advertisedGroups = new org.openapis.openapi.models.shared.RouterBgpPeerAdvertisedGroupsEnum[]{{
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                                add(RouterBgpPeerAdvertisedGroupsEnum.ALL_SUBNETS),
                            }};
                            advertisedIpRanges = new org.openapis.openapi.models.shared.RouterAdvertisedIpRange[]{{
                                add(new RouterAdvertisedIpRange() {{
                                    description = "placeat";
                                    range = "consequuntur";
                                }}),
                                add(new RouterAdvertisedIpRange() {{
                                    description = "accusantium";
                                    range = "neque";
                                }}),
                            }};
                            advertisedRoutePriority = 912553L;
                            bfd = new RouterBgpPeerBfd() {{
                                minReceiveInterval = 54801L;
                                minTransmitInterval = 893021L;
                                multiplier = 319980L;
                                sessionInitializationMode = RouterBgpPeerBfdSessionInitializationModeEnum.DISABLED;
                            }};
                            enable = RouterBgpPeerEnableEnum.FALSE;
                            enableIpv6 = false;
                            interfaceName = "iure";
                            ipAddress = "recusandae";
                            ipv6NexthopAddress = "dolorem";
                            managementType = RouterBgpPeerManagementTypeEnum.MANAGED_BY_USER;
                            md5AuthenticationKeyName = "harum";
                            name = "Marty O'Conner";
                            peerAsn = 971166L;
                            peerIpAddress = "cupiditate";
                            peerIpv6NexthopAddress = "sit";
                            routerApplianceInstance = "eius";
                        }}),
                    }};
                    creationTimestamp = "aliquam";
                    description = "earum";
                    encryptedInterconnectRouter = false;
                    id = "fuga";
                    interfaces = new org.openapis.openapi.models.shared.RouterInterface[]{{
                        add(new RouterInterface() {{
                            ipRange = "tenetur";
                            linkedInterconnectAttachment = "repellendus";
                            linkedVpnTunnel = "veniam";
                            managementType = RouterInterfaceManagementTypeEnum.MANAGED_BY_USER;
                            name = "Elias Smitham";
                            privateIpAddress = "debitis";
                            redundantInterface = "neque";
                            subnetwork = "beatae";
                        }}),
                    }};
                    kind = "nobis";
                    md5AuthenticationKeys = new org.openapis.openapi.models.shared.RouterMd5AuthenticationKey[]{{
                        add(new RouterMd5AuthenticationKey() {{
                            key = "ab";
                            name = "Brett Robel";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "et";
                            name = "Mr. Moses Towne Jr.";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "odit";
                            name = "Gerardo Schimmel";
                        }}),
                        add(new RouterMd5AuthenticationKey() {{
                            key = "quos";
                            name = "Ramona Jaskolski PhD";
                        }}),
                    }};
                    name = "Rodney Tremblay";
                    nats = new org.openapis.openapi.models.shared.RouterNat[]{{
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("enim"),
                                add("corrupti"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_SWG),
                            }};
                            icmpIdleTimeoutSec = 588088;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ALL;
                            }};
                            maxPortsPerVm = 462253;
                            minPortsPerVm = 910567;
                            name = "Arturo Carter";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.AUTO_ONLY;
                            natIps = new String[]{{
                                add("explicabo"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("aliquid"),
                                            add("dolore"),
                                            add("nesciunt"),
                                            add("ut"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("veniam"),
                                            add("eum"),
                                        }};
                                    }};
                                    description = "excepturi";
                                    match = "molestias";
                                    ruleNumber = 982473L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("amet"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("dolor"),
                                            add("quibusdam"),
                                            add("recusandae"),
                                        }};
                                    }};
                                    description = "quidem";
                                    match = "eius";
                                    ruleNumber = 856982L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("ducimus"),
                                            add("ducimus"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("delectus"),
                                        }};
                                    }};
                                    description = "provident";
                                    match = "ipsa";
                                    ruleNumber = 986473L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.ALL_SUBNETWORKS_ALL_IP_RANGES;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Jaime Boyle";
                                    secondaryIpRangeNames = new String[]{{
                                        add("quidem"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Milton DuBuque";
                                    secondaryIpRangeNames = new String[]{{
                                        add("aliquid"),
                                        add("repellendus"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 15494;
                            tcpTimeWaitTimeoutSec = 666630;
                            tcpTransitoryIdleTimeoutSec = 843253;
                            udpIdleTimeoutSec = 373388;
                        }}),
                        add(new RouterNat() {{
                            drainNatIps = new String[]{{
                                add("neque"),
                            }};
                            enableDynamicPortAllocation = false;
                            enableEndpointIndependentMapping = false;
                            endpointTypes = new org.openapis.openapi.models.shared.RouterNatEndpointTypesEnum[]{{
                                add(RouterNatEndpointTypesEnum.ENDPOINT_TYPE_VM),
                            }};
                            icmpIdleTimeoutSec = 466075;
                            logConfig = new RouterNatLogConfig() {{
                                enable = false;
                                filter = RouterNatLogConfigFilterEnum.ERRORS_ONLY;
                            }};
                            maxPortsPerVm = 484184;
                            minPortsPerVm = 257900;
                            name = "Benny McGlynn";
                            natIpAllocateOption = RouterNatNatIpAllocateOptionEnum.MANUAL_ONLY;
                            natIps = new String[]{{
                                add("cum"),
                                add("impedit"),
                                add("perferendis"),
                            }};
                            rules = new org.openapis.openapi.models.shared.RouterNatRule[]{{
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("officia"),
                                            add("neque"),
                                            add("animi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("iusto"),
                                            add("ad"),
                                            add("nemo"),
                                        }};
                                    }};
                                    description = "voluptatum";
                                    match = "repudiandae";
                                    ruleNumber = 545552L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("quibusdam"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("reprehenderit"),
                                            add("ipsam"),
                                            add("consequatur"),
                                        }};
                                    }};
                                    description = "illo";
                                    match = "soluta";
                                    ruleNumber = 630260L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("veritatis"),
                                            add("porro"),
                                            add("pariatur"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("magni"),
                                            add("fugiat"),
                                        }};
                                    }};
                                    description = "quae";
                                    match = "reiciendis";
                                    ruleNumber = 671842L;
                                }}),
                                add(new RouterNatRule() {{
                                    action = new RouterNatRuleAction() {{
                                        sourceNatActiveIps = new String[]{{
                                            add("excepturi"),
                                        }};
                                        sourceNatDrainIps = new String[]{{
                                            add("dolorum"),
                                            add("voluptate"),
                                            add("autem"),
                                            add("optio"),
                                        }};
                                    }};
                                    description = "dolores";
                                    match = "aut";
                                    ruleNumber = 909187L;
                                }}),
                            }};
                            sourceSubnetworkIpRangesToNat = RouterNatSourceSubnetworkIpRangesToNatEnum.LIST_OF_SUBNETWORKS;
                            subnetworks = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNat[]{{
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Faith Rath";
                                    secondaryIpRangeNames = new String[]{{
                                        add("maxime"),
                                        add("molestias"),
                                        add("dolor"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Carol Sipes";
                                    secondaryIpRangeNames = new String[]{{
                                        add("laborum"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.LIST_OF_SECONDARY_IP_RANGES),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Latoya Dickinson";
                                    secondaryIpRangeNames = new String[]{{
                                        add("illo"),
                                        add("quo"),
                                        add("sapiente"),
                                        add("assumenda"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.ALL_IP_RANGES),
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                                add(new RouterNatSubnetworkToNat() {{
                                    name = "Rex Kuhic";
                                    secondaryIpRangeNames = new String[]{{
                                        add("iste"),
                                        add("esse"),
                                    }};
                                    sourceIpRangesToNat = new org.openapis.openapi.models.shared.RouterNatSubnetworkToNatSourceIpRangesToNatEnum[]{{
                                        add(RouterNatSubnetworkToNatSourceIpRangesToNatEnum.PRIMARY_IP_RANGE),
                                    }};
                                }}),
                            }};
                            tcpEstablishedIdleTimeoutSec = 883906;
                            tcpTimeWaitTimeoutSec = 90939;
                            tcpTransitoryIdleTimeoutSec = 959918;
                            udpIdleTimeoutSec = 889890;
                        }}),
                    }};
                    network = "expedita";
                    region = "facilis";
                    selfLink = "alias";
                }};;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "expedita";
                key = "necessitatibus";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "quidem";
                uploadType = "sapiente";
                uploadProtocol = "corporis";
                userIp = "ut";
            }};            

            ComputeRoutersUpdateResponse res = sdk.routers.computeRoutersUpdate(req, new ComputeRoutersUpdateSecurity() {{
                option1 = new ComputeRoutersUpdateSecurityOption1("labore", "ipsum") {{
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
