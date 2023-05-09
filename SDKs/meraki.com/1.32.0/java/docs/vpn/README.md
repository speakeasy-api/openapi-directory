# vpn

### Available Operations

* [getNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## getNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnBgpRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnBgpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVpnBgpRequest req = new GetNetworkApplianceVpnBgpRequest("pariatur");            

            GetNetworkApplianceVpnBgpResponse res = sdk.vpn.getNetworkApplianceVpnBgp(req);

            if (res.getNetworkApplianceVpnBgp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVpnSiteToSiteVpnRequest req = new GetNetworkApplianceVpnSiteToSiteVpnRequest("necessitatibus");            

            GetNetworkApplianceVpnSiteToSiteVpnResponse res = sdk.vpn.getNetworkApplianceVpnSiteToSiteVpn(req);

            if (res.getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidVpnRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidVpnRequest req = new GetNetworkWirelessSsidVpnRequest("placeat", "laboriosam");            

            GetNetworkWirelessSsidVpnResponse res = sdk.vpn.getNetworkWirelessSsidVpn(req);

            if (res.getNetworkWirelessSsidVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatsRequest req = new GetOrganizationApplianceVpnStatsRequest("fuga") {{
                endingBefore = "explicabo";
                networkIds = new String[]{{
                    add("repellat"),
                    add("maiores"),
                    add("officiis"),
                    add("sunt"),
                }};
                perPage = 683737L;
                startingAfter = "id";
                t0 = "tempore";
                t1 = "minima";
                timespan = 2655.83;
            }};            

            GetOrganizationApplianceVpnStatsResponse res = sdk.vpn.getOrganizationApplianceVpnStats(req);

            if (res.getOrganizationApplianceVpnStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatusesRequest req = new GetOrganizationApplianceVpnStatusesRequest("quas") {{
                endingBefore = "alias";
                networkIds = new String[]{{
                    add("sint"),
                }};
                perPage = 747970L;
                startingAfter = "eum";
            }};            

            GetOrganizationApplianceVpnStatusesResponse res = sdk.vpn.getOrganizationApplianceVpnStatuses(req);

            if (res.getOrganizationApplianceVpnStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVPNThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVPNThirdPartyVPNPeersRequest req = new GetOrganizationApplianceVPNThirdPartyVPNPeersRequest("magni");            

            GetOrganizationApplianceVPNThirdPartyVPNPeersResponse res = sdk.vpn.getOrganizationApplianceVPNThirdPartyVPNPeers(req);

            if (res.getOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnVpnFirewallRulesRequest req = new GetOrganizationApplianceVpnVpnFirewallRulesRequest("molestiae");            

            GetOrganizationApplianceVpnVpnFirewallRulesResponse res = sdk.vpn.getOrganizationApplianceVpnVpnFirewallRules(req);

            if (res.getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVpnBgpRequest req = new UpdateNetworkApplianceVpnBgpRequest(                new UpdateNetworkApplianceVpnBgpRequestBody(false) {{
                                asNumber = 401948L;
                                ibgpHoldTimer = 536488L;
                                neighbors = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[]{{
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(280362L, 192116L, 221313L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 660476L;
                                        ebgpMultihop = 217540L;
                                        ip = "assumenda";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("possimus") {{
                                            address = "66712 Franco Fall";
                                        }};
                                        receiveLimit = 273241L;
                                        remoteAsNumber = 667507L;
                                    }}),
                                }};
                            }};, "itaque");            

            UpdateNetworkApplianceVpnBgpResponse res = sdk.vpn.updateNetworkApplianceVpnBgp(req);

            if (res.updateNetworkApplianceVpnBgp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVpnSiteToSiteVpnRequest req = new UpdateNetworkApplianceVpnSiteToSiteVpnRequest(                new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum.SPOKE) {{
                                hubs = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[]{{
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("rerum") {{
                                        hubId = "quas";
                                        useDefaultRoute = false;
                                    }}),
                                }};
                                subnets = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[]{{
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("a") {{
                                        localSubnet = "repellat";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("cum") {{
                                        localSubnet = "velit";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("natus") {{
                                        localSubnet = "facere";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("consectetur") {{
                                        localSubnet = "hic";
                                        useVpn = false;
                                    }}),
                                }};
                            }};, "quam");            

            UpdateNetworkApplianceVpnSiteToSiteVpnResponse res = sdk.vpn.updateNetworkApplianceVpnSiteToSiteVpn(req);

            if (res.updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodyFailover;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidVpnRequest req = new UpdateNetworkWirelessSsidVpnRequest("temporibus", "non") {{
                requestBody = new UpdateNetworkWirelessSsidVpnRequestBody() {{
                    concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator() {{
                        networkId = "inventore";
                        vlanId = 522849L;
                    }};;
                    failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover() {{
                        heartbeatInterval = 713249L;
                        idleTimeout = 533503L;
                        requestIp = "assumenda";
                    }};;
                    splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel() {{
                        enabled = false;
                        rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[]{{
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("debitis", "iste") {{
                                comment = "sint";
                                destCidr = "quisquam";
                                destPort = "cumque";
                                policy = "aliquam";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.UDP;
                            }}),
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("vero", "amet") {{
                                comment = "minus";
                                destCidr = "iste";
                                destPort = "tempora";
                                policy = "numquam";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.UDP;
                            }}),
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("qui", "quia") {{
                                comment = "saepe";
                                destCidr = "impedit";
                                destPort = "unde";
                                policy = "amet";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.ANY;
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessSsidVpnResponse res = sdk.vpn.updateNetworkWirelessSsidVpn(req);

            if (res.updateNetworkWirelessSsidVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest req = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest(                new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers[]{{
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("odit",                 new String[]{{
                                                                    add("velit"),
                                                                    add("molestias"),
                                                                    add("animi"),
                                                                }}, "sed") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.TWO;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES128),
                                                        }};
                                                        childLifetime = 559099L;
                                                        childPfsGroup = new String[]{{
                                                            add("cum"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.MD5),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES256),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("quis"),
                                                        }};
                                                        ikeLifetime = 64313L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFMD5),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "mollitia";
                                                    localId = "ipsum";
                                                    name = "Lee Wunsch";
                                                    networkTags = new String[]{{
                                                        add("atque"),
                                                        add("nesciunt"),
                                                        add("accusantium"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("accusamus"),
                                                        add("repudiandae"),
                                                        add("molestias"),
                                                        add("fugiat"),
                                                    }};
                                                    publicIp = "neque";
                                                    remoteId = "alias";
                                                    secret = "quia";
                                                }}),
                                                add(new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers("at",                 new String[]{{
                                                                    add("saepe"),
                                                                    add("cum"),
                                                                    add("cumque"),
                                                                }}, "fugiat") {{
                                                    ikeVersion = UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.TWO;
                                                    ipsecPolicies = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum.MD5),
                                                        }};
                                                        childCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum.AES256),
                                                        }};
                                                        childLifetime = 702598L;
                                                        childPfsGroup = new String[]{{
                                                            add("accusamus"),
                                                            add("in"),
                                                            add("tempore"),
                                                            add("aperiam"),
                                                        }};
                                                        ikeAuthAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA256),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum.SHA1),
                                                        }};
                                                        ikeCipherAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES128),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum.AES256),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("praesentium"),
                                                            add("hic"),
                                                        }};
                                                        ikeLifetime = 600071L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                            add(UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.DEFAULT_),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "voluptatum";
                                                    localId = "sequi";
                                                    name = "Arlene Daniel";
                                                    networkTags = new String[]{{
                                                        add("sint"),
                                                        add("voluptas"),
                                                        add("optio"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("nesciunt"),
                                                        add("omnis"),
                                                    }};
                                                    publicIp = "rem";
                                                    remoteId = "iste";
                                                    secret = "dolor";
                                                }}),
                                            }});, "modi");            

            UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse res = sdk.vpn.updateOrganizationApplianceVPNThirdPartyVPNPeers(req);

            if (res.updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceVpnVpnFirewallRulesRequest req = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequest("vitae") {{
                requestBody = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[]{{
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("suscipit", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "mollitia") {{
                            comment = "dolore";
                            destCidr = "illum";
                            destPort = "quos";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "vero";
                            srcPort = "dolorem";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("eos", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "doloremque") {{
                            comment = "eum";
                            destCidr = "rem";
                            destPort = "nemo";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "dolorem";
                            srcPort = "nesciunt";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("laudantium", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ANY, "inventore") {{
                            comment = "perferendis";
                            destCidr = "qui";
                            destPort = "aliquid";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "doloremque";
                            srcPort = "deleniti";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateOrganizationApplianceVpnVpnFirewallRulesResponse res = sdk.vpn.updateOrganizationApplianceVpnVpnFirewallRules(req);

            if (res.updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
