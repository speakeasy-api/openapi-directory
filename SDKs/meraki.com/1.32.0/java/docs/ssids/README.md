# ssids

### Available Operations

* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [updateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWirelessSsidIdentityPskRequest req = new CreateNetworkWirelessSsidIdentityPskRequest(                new CreateNetworkWirelessSsidIdentityPskRequestBody("pariatur", "reprehenderit") {{
                                passphrase = "officiis";
                            }};, "nulla", "quo");            

            CreateNetworkWirelessSsidIdentityPskResponse res = sdk.ssids.createNetworkWirelessSsidIdentityPsk(req);

            if (res.createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWirelessSsidIdentityPskRequest req = new DeleteNetworkWirelessSsidIdentityPskRequest("odit", "occaecati", "illum");            

            DeleteNetworkWirelessSsidIdentityPskResponse res = sdk.ssids.deleteNetworkWirelessSsidIdentityPsk(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSsid

Return a single MX SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSsidRequest req = new GetNetworkApplianceSsidRequest("velit", "molestias");            

            GetNetworkApplianceSsidResponse res = sdk.ssids.getNetworkApplianceSsid(req);

            if (res.getNetworkApplianceSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSsidsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSsidsRequest req = new GetNetworkApplianceSsidsRequest("suscipit");            

            GetNetworkApplianceSsidsResponse res = sdk.ssids.getNetworkApplianceSsids(req);

            if (res.getNetworkApplianceSsids200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsid

Return a single MR SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidRequest req = new GetNetworkWirelessSsidRequest("labore", "eveniet");            

            GetNetworkWirelessSsidResponse res = sdk.ssids.getNetworkWirelessSsid(req);

            if (res.getNetworkWirelessSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidBonjourForwardingRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidBonjourForwardingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidBonjourForwardingRequest req = new GetNetworkWirelessSsidBonjourForwardingRequest("corporis", "dolorem");            

            GetNetworkWirelessSsidBonjourForwardingResponse res = sdk.ssids.getNetworkWirelessSsidBonjourForwarding(req);

            if (res.getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest req = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest("dicta", "amet");            

            GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = sdk.ssids.getNetworkWirelessSsidDeviceTypeGroupPolicies(req);

            if (res.getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidEapOverrideRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidEapOverrideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidEapOverrideRequest req = new GetNetworkWirelessSsidEapOverrideRequest("distinctio", "eaque");            

            GetNetworkWirelessSsidEapOverrideResponse res = sdk.ssids.getNetworkWirelessSsidEapOverride(req);

            if (res.getNetworkWirelessSsidEapOverride200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest("veritatis", "quo");            

            GetNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.ssids.getNetworkWirelessSsidFirewallL3FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest("natus", "repellat");            

            GetNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.ssids.getNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidHotspot20Request;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidHotspot20Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidHotspot20Request req = new GetNetworkWirelessSsidHotspot20Request("beatae", "ipsam");            

            GetNetworkWirelessSsidHotspot20Response res = sdk.ssids.getNetworkWirelessSsidHotspot20(req);

            if (res.getNetworkWirelessSsidHotspot20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidIdentityPskRequest req = new GetNetworkWirelessSsidIdentityPskRequest("a", "quasi", "illo");            

            GetNetworkWirelessSsidIdentityPskResponse res = sdk.ssids.getNetworkWirelessSsidIdentityPsk(req);

            if (res.getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPsksRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPsksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidIdentityPsksRequest req = new GetNetworkWirelessSsidIdentityPsksRequest("sapiente", "nostrum");            

            GetNetworkWirelessSsidIdentityPsksResponse res = sdk.ssids.getNetworkWirelessSsidIdentityPsks(req);

            if (res.getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSchedulesRequest req = new GetNetworkWirelessSsidSchedulesRequest("similique", "dolorum");            

            GetNetworkWirelessSsidSchedulesResponse res = sdk.ssids.getNetworkWirelessSsidSchedules(req);

            if (res.getNetworkWirelessSsidSchedules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSplashSettingsRequest req = new GetNetworkWirelessSsidSplashSettingsRequest("id", "sequi");            

            GetNetworkWirelessSsidSplashSettingsResponse res = sdk.ssids.getNetworkWirelessSsidSplashSettings(req);

            if (res.getNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidTrafficShapingRulesRequest req = new GetNetworkWirelessSsidTrafficShapingRulesRequest("dolorum", "culpa");            

            GetNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.ssids.getNetworkWirelessSsidTrafficShapingRules(req);

            if (res.getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidVpnRequest req = new GetNetworkWirelessSsidVpnRequest("reprehenderit", "quod");            

            GetNetworkWirelessSsidVpnResponse res = sdk.ssids.getNetworkWirelessSsidVpn(req);

            if (res.getNetworkWirelessSsidVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsids

List the MR SSIDs in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidsRequest req = new GetNetworkWirelessSsidsRequest("pariatur");            

            GetNetworkWirelessSsidsResponse res = sdk.ssids.getNetworkWirelessSsids(req);

            if (res.getNetworkWirelessSsids200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSsidsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSsidsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSsidsByUsageRequest req = new GetOrganizationSummaryTopSsidsByUsageRequest("autem") {{
                t0 = "expedita";
                t1 = "voluptatibus";
                timespan = 7262.02;
            }};            

            GetOrganizationSummaryTopSsidsByUsageResponse res = sdk.ssids.getOrganizationSummaryTopSsidsByUsage(req);

            if (res.getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSsidRequest req = new UpdateNetworkApplianceSsidRequest("tempore", "eos") {{
                requestBody = new UpdateNetworkApplianceSsidRequestBody() {{
                    authMode = UpdateNetworkApplianceSsidRequestBodyAuthModeEnum.EIGHT_THOUSAND_AND_TWENTY_ONEX_MERAKI;
                    defaultVlanId = 938051L;
                    dhcpEnforcedDeauthentication = new UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication() {{
                        enabled = false;
                    }};;
                    enabled = false;
                    encryptionMode = UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum.WPA;
                    name = "Ada Larson";
                    psk = "nobis";
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "optio";
                            port = 165085L;
                            secret = "voluptates";
                        }}),
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "quo";
                            port = 362718L;
                            secret = "numquam";
                        }}),
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "magnam";
                            port = 373013L;
                            secret = "id";
                        }}),
                        add(new UpdateNetworkApplianceSsidRequestBodyRadiusServers() {{
                            host = "quos";
                            port = 180703L;
                            secret = "architecto";
                        }}),
                    }};
                    visible = false;
                    wpaEncryptionMode = UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum.WPA3_ONLY;
                }};;
            }};            

            UpdateNetworkApplianceSsidResponse res = sdk.ssids.updateNetworkApplianceSsid(req);

            if (res.updateNetworkApplianceSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsid

Update the attributes of an MR SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyDot11r;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyDot11w;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyGre;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyGreConcentrator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdap;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadius;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyOauth;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodySpeedBurst;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidRequest req = new UpdateNetworkWirelessSsidRequest("maiores", "molestiae") {{
                requestBody = new UpdateNetworkWirelessSsidRequestBody() {{
                    activeDirectory = new UpdateNetworkWirelessSsidRequestBodyActiveDirectory() {{
                        credentials = new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials() {{
                            logonName = "distinctio";
                            password = "nihil";
                        }};;
                        servers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[]{{
                            add(new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers("veritatis") {{
                                host = "nihil";
                                port = 181653L;
                            }}),
                        }};
                    }};;
                    adultContentFilteringEnabled = false;
                    apTagsAndVlanIds = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[]{{
                        add(new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {{
                            tags = new String[]{{
                                add("in"),
                            }};
                            vlanId = 278577L;
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {{
                            tags = new String[]{{
                                add("cupiditate"),
                            }};
                            vlanId = 362444L;
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {{
                            tags = new String[]{{
                                add("porro"),
                                add("nemo"),
                                add("cumque"),
                                add("illum"),
                            }};
                            vlanId = 885546L;
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {{
                            tags = new String[]{{
                                add("officiis"),
                            }};
                            vlanId = 773083L;
                        }}),
                    }};
                    authMode = UpdateNetworkWirelessSsidRequestBodyAuthModeEnum.IPSK_WITHOUT_RADIUS;
                    availabilityTags = new String[]{{
                        add("harum"),
                        add("est"),
                    }};
                    availableOnAllAps = false;
                    bandSelection = "dicta";
                    concentratorNetworkId = "reprehenderit";
                    defaultVlanId = 865718L;
                    disassociateClientsOnVpnFailover = false;
                    dnsRewrite = new UpdateNetworkWirelessSsidRequestBodyDnsRewrite() {{
                        dnsCustomNameservers = new String[]{{
                            add("ullam"),
                            add("necessitatibus"),
                        }};
                        enabled = false;
                    }};;
                    dot11r = new UpdateNetworkWirelessSsidRequestBodyDot11r() {{
                        adaptive = false;
                        enabled = false;
                    }};;
                    dot11w = new UpdateNetworkWirelessSsidRequestBodyDot11w() {{
                        enabled = false;
                        required = false;
                    }};;
                    enabled = false;
                    encryptionMode = UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum.WEP;
                    enterpriseAdminAccess = UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum.ACCESS_ENABLED;
                    gre = new UpdateNetworkWirelessSsidRequestBodyGre() {{
                        concentrator = new UpdateNetworkWirelessSsidRequestBodyGreConcentrator("amet");;
                        key = 107150L;
                    }};;
                    ipAssignmentMode = "consectetur";
                    lanIsolationEnabled = false;
                    ldap = new UpdateNetworkWirelessSsidRequestBodyLdap() {{
                        baseDistinguishedName = "ipsa";
                        credentials = new UpdateNetworkWirelessSsidRequestBodyLdapCredentials() {{
                            distinguishedName = "dolores";
                            password = "dicta";
                        }};;
                        serverCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate() {{
                            contents = "occaecati";
                        }};;
                        servers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapServers[]{{
                            add(new UpdateNetworkWirelessSsidRequestBodyLdapServers("minus", 957576L) {{
                                host = "optio";
                                port = 203412L;
                            }}),
                        }};
                    }};;
                    localRadius = new UpdateNetworkWirelessSsidRequestBodyLocalRadius() {{
                        cacheTimeout = 871532L;
                        certificateAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication() {{
                            clientRootCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate() {{
                                contents = "explicabo";
                            }};;
                            enabled = false;
                            ocspResponderUrl = "dolores";
                            useLdap = false;
                            useOcsp = false;
                        }};;
                        passwordAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication() {{
                            enabled = false;
                        }};;
                    }};;
                    mandatoryDhcpEnabled = false;
                    minBitrate = 7141.65;
                    name = "Alyssa Turner";
                    oauth = new UpdateNetworkWirelessSsidRequestBodyOauth() {{
                        allowedDomains = new String[]{{
                            add("ipsam"),
                            add("placeat"),
                            add("quibusdam"),
                            add("voluptate"),
                        }};
                    }};;
                    perClientBandwidthLimitDown = 65204L;
                    perClientBandwidthLimitUp = 764432L;
                    perSsidBandwidthLimitDown = 837761L;
                    perSsidBandwidthLimitUp = 14786L;
                    psk = "temporibus";
                    radiusAccountingEnabled = false;
                    radiusAccountingInterimInterval = 160984L;
                    radiusAccountingServers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[]{{
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers("labore") {{
                            caCertificate = "similique";
                            host = "nisi";
                            port = 296325L;
                            radsecEnabled = false;
                            secret = "inventore";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers("magni") {{
                            caCertificate = "vel";
                            host = "nisi";
                            port = 542950L;
                            radsecEnabled = false;
                            secret = "nostrum";
                        }}),
                    }};
                    radiusAttributeForGroupPolicies = UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum.ARUBA_USER_ROLE;
                    radiusAuthenticationNasId = "velit";
                    radiusCalledStationId = "eum";
                    radiusCoaEnabled = false;
                    radiusFailoverPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum.ALLOW_ACCESS;
                    radiusFallbackEnabled = false;
                    radiusGuestVlanEnabled = false;
                    radiusGuestVlanId = 464500L;
                    radiusLoadBalancingPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum.STRICT_PRIORITY_ORDER;
                    radiusOverride = false;
                    radiusProxyEnabled = false;
                    radiusServerAttemptsLimit = 642677L;
                    radiusServerTimeout = 364L;
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusServers("reiciendis") {{
                            caCertificate = "sapiente";
                            host = "consequuntur";
                            openRoamingCertificateId = 788981L;
                            port = 785626L;
                            radsecEnabled = false;
                            secret = "voluptates";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusServers("officia") {{
                            caCertificate = "eos";
                            host = "aliquam";
                            openRoamingCertificateId = 712824L;
                            port = 882253L;
                            radsecEnabled = false;
                            secret = "temporibus";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusServers("pariatur") {{
                            caCertificate = "odit";
                            host = "voluptas";
                            openRoamingCertificateId = 752195L;
                            port = 859132L;
                            radsecEnabled = false;
                            secret = "omnis";
                        }}),
                    }};
                    radiusTestingEnabled = false;
                    secondaryConcentratorNetworkId = "eum";
                    speedBurst = new UpdateNetworkWirelessSsidRequestBodySpeedBurst() {{
                        enabled = false;
                    }};;
                    splashGuestSponsorDomains = new String[]{{
                        add("numquam"),
                        add("porro"),
                    }};
                    splashPage = UpdateNetworkWirelessSsidRequestBodySplashPageEnum.GOOGLE_APPS_DOMAIN;
                    useVlanTagging = false;
                    visible = false;
                    vlanId = 579861L;
                    walledGardenEnabled = false;
                    walledGardenRanges = new String[]{{
                        add("quia"),
                        add("fugiat"),
                    }};
                    wpaEncryptionMode = UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum.WPA3192_BIT_SECURITY;
                }};;
            }};            

            UpdateNetworkWirelessSsidResponse res = sdk.ssids.updateNetworkWirelessSsid(req);

            if (res.updateNetworkWirelessSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidBonjourForwardingRequest req = new UpdateNetworkWirelessSsidBonjourForwardingRequest("nisi", "veniam") {{
                requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody() {{
                    enabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.PRINTERS),
                                        }}, "ullam") {{
                            description = "sequi";
                            services = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.FTP),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.SAMBA),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.PRINTERS),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.BIT_TORRENT),
                            }};
                            vlanId = "et";
                        }}),
                        add(new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.AFP),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.SCANNERS),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.SSH),
                                        }}, "labore") {{
                            description = "natus";
                            services = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.BIT_TORRENT),
                            }};
                            vlanId = "soluta";
                        }}),
                        add(new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.ALL_SERVICES),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.AFP),
                                        }}, "voluptates") {{
                            description = "ab";
                            services = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.ALL_SERVICES),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.PRINTERS),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.FTP),
                            }};
                            vlanId = "eligendi";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidBonjourForwardingResponse res = sdk.ssids.updateNetworkWirelessSsidBonjourForwarding(req);

            if (res.updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest req = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest("inventore", "cum") {{
                requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody() {{
                    deviceTypePolicies = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[]{{
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.BLOCKED, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.OTHER_OS) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.WINDOWS_PHONE;
                            groupPolicyId = 533709L;
                        }}),
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.GROUP_POLICY, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.ANDROID) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.BLOCKED;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.OTHER_OS;
                            groupPolicyId = 260853L;
                        }}),
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.GROUP_POLICY, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.B_AND_N_NOOK) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.BLOCKED;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.ANDROID;
                            groupPolicyId = 508056L;
                        }}),
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.GROUP_POLICY, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.MAC_OSX) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.BLOCKED;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.BLACK_BERRY;
                            groupPolicyId = 860999L;
                        }}),
                    }};
                    enabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = sdk.ssids.updateNetworkWirelessSsidDeviceTypeGroupPolicies(req);

            if (res.updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidEapOverrideRequest req = new UpdateNetworkWirelessSsidEapOverrideRequest("tenetur", "neque") {{
                requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody() {{
                    eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey() {{
                        retries = 573991L;
                        timeoutInMs = 185769L;
                    }};;
                    identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity() {{
                        retries = 462126L;
                        timeout = 508398L;
                    }};;
                    maxRetries = 39727L;
                    timeout = 797929L;
                }};;
            }};            

            UpdateNetworkWirelessSsidEapOverrideResponse res = sdk.ssids.updateNetworkWirelessSsidEapOverride(req);

            if (res.updateNetworkWirelessSsidEapOverride200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest("cum", "perspiciatis") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody() {{
                    allowLanAccess = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("sint", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ANY) {{
                            comment = "numquam";
                            destCidr = "dicta";
                            destPort = "perferendis";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.ssids.updateNetworkWirelessSsidFirewallL3FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest("impedit", "iusto") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.APPLICATION;
                            value = "enim";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.HOST;
                            value = "ratione";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.IP_RANGE;
                            value = "nulla";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.ssids.updateNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20Request;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidHotspot20Request req = new UpdateNetworkWirelessSsidHotspot20Request("porro", "quod") {{
                requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody() {{
                    domains = new String[]{{
                        add("voluptatem"),
                        add("aliquam"),
                        add("labore"),
                    }};
                    enabled = false;
                    mccMncs = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[]{{
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs() {{
                            mcc = "facere";
                            mnc = "inventore";
                        }}),
                    }};
                    naiRealms = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[]{{
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ONE;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("facere", "voluptas");
                                    }};
                                    id = "31be5b1e-7051-4f45-802b-4832ae673181";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("dolor", "provident");
                                        put("architecto", "iusto");
                                    }};
                                    id = "31768204-f889-47b3-aa7c-c804f633b640";
                                }}),
                            }};
                            realm = "harum";
                        }}),
                    }};
                    networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum.PRIVATE_NETWORK_WITH_GUEST_ACCESS;
                    operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator() {{
                        name = "Leah Fritsch";
                    }};;
                    roamConsortOis = new String[]{{
                        add("consectetur"),
                        add("est"),
                        add("inventore"),
                        add("consequatur"),
                    }};
                    venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue() {{
                        name = "Alyssa Halvorson";
                        type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum.ZOO_OR_AQUARIUM;
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessSsidHotspot20Response res = sdk.ssids.updateNetworkWirelessSsidHotspot20(req);

            if (res.updateNetworkWirelessSsidHotspot20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidIdentityPskRequest req = new UpdateNetworkWirelessSsidIdentityPskRequest("occaecati", "asperiores", "enim") {{
                requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody() {{
                    groupPolicyId = "iusto";
                    name = "Brandi Sipes";
                    passphrase = "sit";
                }};;
            }};            

            UpdateNetworkWirelessSsidIdentityPskResponse res = sdk.ssids.updateNetworkWirelessSsidIdentityPsk(req);

            if (res.updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSchedulesRequest req = new UpdateNetworkWirelessSsidSchedulesRequest("in", "odit") {{
                requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody() {{
                    enabled = false;
                    ranges = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[]{{
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("odio", "ipsam", "molestiae", "ipsum") {{
                            endDay = "ipsam";
                            endTime = "accusamus";
                            startDay = "impedit";
                            startTime = "illum";
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("ea", "qui", "explicabo", "inventore") {{
                            endDay = "rem";
                            endTime = "quo";
                            startDay = "alias";
                            startTime = "eius";
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("voluptas", "dolore", "aliquid", "cumque") {{
                            endDay = "pariatur";
                            endTime = "praesentium";
                            startDay = "quam";
                            startTime = "recusandae";
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("ducimus", "quaerat", "officia", "incidunt") {{
                            endDay = "perspiciatis";
                            endTime = "et";
                            startDay = "debitis";
                            startTime = "magni";
                        }}),
                    }};
                    rangesInSeconds = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[]{{
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(65294L, 230536L) {{
                            end = 540184L;
                            start = 92669L;
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(466608L, 124394L) {{
                            end = 824572L;
                            start = 923334L;
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(344201L, 183292L) {{
                            end = 580595L;
                            start = 304086L;
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(220855L, 781165L) {{
                            end = 109119L;
                            start = 73355L;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidSchedulesResponse res = sdk.ssids.updateNetworkWirelessSsidSchedules(req);

            if (res.updateNetworkWirelessSsidSchedules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSplashSettingsRequest req = new UpdateNetworkWirelessSsidSplashSettingsRequest("consequatur", "incidunt") {{
                requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody() {{
                    allowSimultaneousLogins = false;
                    billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling() {{
                        freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess() {{
                            durationInMinutes = 713483L;
                            enabled = false;
                        }};;
                        prepaidAccessFastLoginEnabled = false;
                        replyToEmailAddress = "itaque";
                    }};;
                    blockAllTrafficBeforeSignOn = false;
                    controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum.DEFAULT_;
                    guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship() {{
                        durationInMinutes = 245465L;
                        guestCanRequestTimeframe = false;
                    }};;
                    redirectUrl = "et";
                    sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment() {{
                        enforcedSystems = new String[]{{
                            add("nobis"),
                            add("corrupti"),
                        }};
                        strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum.FOCUSED;
                        systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork("beatae");;
                    }};;
                    splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage() {{
                        extension = "provident";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage() {{
                            contents = "nesciunt";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum.JPG;
                        }};;
                        md5 = "voluptatum";
                    }};;
                    splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo() {{
                        extension = "consequatur";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage() {{
                            contents = "illo";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum.PNG;
                        }};;
                        md5 = "quae";
                    }};;
                    splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront() {{
                        extension = "similique";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage() {{
                            contents = "nisi";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum.GIF;
                        }};;
                        md5 = "dignissimos";
                    }};;
                    splashTimeout = 787250L;
                    splashUrl = "sed";
                    useRedirectUrl = false;
                    useSplashUrl = false;
                    welcomeMessage = "sunt";
                }};;
            }};            

            UpdateNetworkWirelessSsidSplashSettingsResponse res = sdk.ssids.updateNetworkWirelessSsidSplashSettings(req);

            if (res.updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidTrafficShapingRulesRequest req = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest("eligendi", "officia") {{
                requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "voluptatum") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                value = "ullam";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "totam") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                value = "inventore";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "velit") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "dolore";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "assumenda") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "laboriosam";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "sit") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "voluptatem";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "quam") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "veritatis";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "eveniet") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "quos";
                                }}),
                            }};
                            dscpTagValue = 942249L;
                            pcpTagValue = 841158L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 951850L;
                                    limitUp = 449761L;
                                }};
                                settings = "nobis";
                            }};
                        }}),
                    }};
                    trafficShapingEnabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.ssids.updateNetworkWirelessSsidTrafficShapingRules(req);

            if (res.updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidVpnRequest req = new UpdateNetworkWirelessSsidVpnRequest("veniam", "ad") {{
                requestBody = new UpdateNetworkWirelessSsidVpnRequestBody() {{
                    concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator() {{
                        networkId = "nemo";
                        vlanId = 946191L;
                    }};;
                    failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover() {{
                        heartbeatInterval = 635944L;
                        idleTimeout = 918297L;
                        requestIp = "assumenda";
                    }};;
                    splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel() {{
                        enabled = false;
                        rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[]{{
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("nobis", "nam") {{
                                comment = "qui";
                                destCidr = "consectetur";
                                destPort = "ipsum";
                                policy = "reiciendis";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.TCP;
                            }}),
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("voluptate", "sequi") {{
                                comment = "nesciunt";
                                destCidr = "in";
                                destPort = "aut";
                                policy = "quidem";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.TCP;
                            }}),
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("vero", "ipsam") {{
                                comment = "debitis";
                                destCidr = "culpa";
                                destPort = "tempore";
                                policy = "ea";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.TCP;
                            }}),
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("aliquam", "cumque") {{
                                comment = "modi";
                                destCidr = "aliquid";
                                destPort = "dicta";
                                policy = "quod";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.UDP;
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessSsidVpnResponse res = sdk.ssids.updateNetworkWirelessSsidVpn(req);

            if (res.updateNetworkWirelessSsidVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
