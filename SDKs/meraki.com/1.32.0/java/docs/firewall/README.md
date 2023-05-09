# firewall

### Available Operations

* [getNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [getNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [getNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [getNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [getNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [getNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [getNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [getNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [updateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [updateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

## getNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallCellularFirewallRulesRequest req = new GetNetworkApplianceFirewallCellularFirewallRulesRequest("laudantium");            

            GetNetworkApplianceFirewallCellularFirewallRulesResponse res = sdk.firewall.getNetworkApplianceFirewallCellularFirewallRules(req);

            if (res.getNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServiceRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallFirewalledServiceRequest req = new GetNetworkApplianceFirewallFirewalledServiceRequest("odio", "inventore");            

            GetNetworkApplianceFirewallFirewalledServiceResponse res = sdk.firewall.getNetworkApplianceFirewallFirewalledService(req);

            if (res.getNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServicesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallFirewalledServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallFirewalledServicesRequest req = new GetNetworkApplianceFirewallFirewalledServicesRequest("neque");            

            GetNetworkApplianceFirewallFirewalledServicesResponse res = sdk.firewall.getNetworkApplianceFirewallFirewalledServices(req);

            if (res.getNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest("magni");            

            GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse res = sdk.firewall.getNetworkApplianceFirewallInboundCellularFirewallRules(req);

            if (res.getNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundFirewallRulesRequest("fugiat");            

            GetNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.firewall.getNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.getNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL3FirewallRulesRequest req = new GetNetworkApplianceFirewallL3FirewallRulesRequest("facilis");            

            GetNetworkApplianceFirewallL3FirewallRulesResponse res = sdk.firewall.getNetworkApplianceFirewallL3FirewallRules(req);

            if (res.getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesRequest("amet");            

            GetNetworkApplianceFirewallL7FirewallRulesResponse res = sdk.firewall.getNetworkApplianceFirewallL7FirewallRules(req);

            if (res.getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest("quisquam");            

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse res = sdk.firewall.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req);

            if (res.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallOneToManyNatRulesRequest req = new GetNetworkApplianceFirewallOneToManyNatRulesRequest("dignissimos");            

            GetNetworkApplianceFirewallOneToManyNatRulesResponse res = sdk.firewall.getNetworkApplianceFirewallOneToManyNatRules(req);

            if (res.getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallOneToOneNatRulesRequest req = new GetNetworkApplianceFirewallOneToOneNatRulesRequest("aperiam");            

            GetNetworkApplianceFirewallOneToOneNatRulesResponse res = sdk.firewall.getNetworkApplianceFirewallOneToOneNatRules(req);

            if (res.getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallPortForwardingRulesRequest req = new GetNetworkApplianceFirewallPortForwardingRulesRequest("corrupti");            

            GetNetworkApplianceFirewallPortForwardingRulesResponse res = sdk.firewall.getNetworkApplianceFirewallPortForwardingRules(req);

            if (res.getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallSettingsRequest req = new GetNetworkApplianceFirewallSettingsRequest("voluptate");            

            GetNetworkApplianceFirewallSettingsResponse res = sdk.firewall.getNetworkApplianceFirewallSettings(req);

            if (res.getNetworkApplianceFirewallSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest("officia", "rerum");            

            GetNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.firewall.getNetworkWirelessSsidFirewallL3FirewallRules(req);

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
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest("hic", "tenetur");            

            GetNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.firewall.getNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallCellularFirewallRulesRequest req = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequest("animi") {{
                requestBody = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules("at", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "quisquam") {{
                            comment = "magni";
                            destCidr = "doloribus";
                            destPort = "rerum";
                            policy = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "ut";
                            srcPort = "quod";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallCellularFirewallRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallCellularFirewallRules(req);

            if (res.updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallFirewalledServiceRequest req = new UpdateNetworkApplianceFirewallFirewalledServiceRequest(                new UpdateNetworkApplianceFirewallFirewalledServiceRequestBody(UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum.BLOCKED) {{
                                allowedIps = new String[]{{
                                    add("perferendis"),
                                    add("libero"),
                                    add("sunt"),
                                    add("beatae"),
                                }};
                            }};, "ratione", "blanditiis");            

            UpdateNetworkApplianceFirewallFirewalledServiceResponse res = sdk.firewall.updateNetworkApplianceFirewallFirewalledService(req);

            if (res.updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest("debitis") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("quisquam", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.UDP, "autem") {{
                            comment = "vel";
                            destCidr = "atque";
                            destPort = "dolor";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "iste";
                            srcPort = "amet";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("hic", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "harum") {{
                            comment = "quas";
                            destCidr = "odio";
                            destPort = "harum";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "corporis";
                            srcPort = "dolorem";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("expedita", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY, "placeat") {{
                            comment = "delectus";
                            destCidr = "tempora";
                            destPort = "laboriosam";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "ducimus";
                            srcPort = "placeat";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("debitis", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY, "amet") {{
                            comment = "dignissimos";
                            destCidr = "provident";
                            destPort = "accusamus";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "odit";
                            srcPort = "quibusdam";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallInboundCellularFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequest("reprehenderit") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("quibusdam", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "nobis") {{
                            comment = "laborum";
                            destCidr = "labore";
                            destPort = "animi";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "corrupti";
                            srcPort = "voluptate";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("molestiae", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ANY, "necessitatibus") {{
                            comment = "corporis";
                            destCidr = "vitae";
                            destPort = "recusandae";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "voluptates";
                            srcPort = "iusto";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallL3FirewallRulesRequest req = new UpdateNetworkApplianceFirewallL3FirewallRulesRequest("recusandae") {{
                requestBody = new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules("laboriosam", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP, "ipsam") {{
                            comment = "vitae";
                            destCidr = "porro";
                            destPort = "atque";
                            policy = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "ratione";
                            srcPort = "eos";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallL3FirewallRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallL3FirewallRules(req);

            if (res.updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallL7FirewallRulesRequest req = new UpdateNetworkApplianceFirewallL7FirewallRulesRequest("beatae") {{
                requestBody = new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum.APPLICATION_CATEGORY;
                            value = "voluptatem";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallL7FirewallRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallL7FirewallRules(req);

            if (res.updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallOneToManyNatRulesRequest req = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequest(                new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("saepe"),
                                                                            add("ad"),
                                                                        }};
                                                                        localIp = "consequatur";
                                                                        localPort = "recusandae";
                                                                        name = "Mr. Edwin Grant Sr.";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "ab";
                                                                    }}),
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("quos"),
                                                                        }};
                                                                        localIp = "tempore";
                                                                        localPort = "aliquam";
                                                                        name = "Sara Mraz";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "minima";
                                                                    }}),
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("doloribus"),
                                                                        }};
                                                                        localIp = "ducimus";
                                                                        localPort = "nemo";
                                                                        name = "Beulah Corkery";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "neque";
                                                                    }}),
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("culpa"),
                                                                        }};
                                                                        localIp = "corrupti";
                                                                        localPort = "voluptas";
                                                                        name = "Sherman Dibbert";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "quos";
                                                                    }}),
                                                                }}, "ullam", UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET1) {{
                                                    portRules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("error"),
                                                                add("excepturi"),
                                                                add("recusandae"),
                                                            }};
                                                            localIp = "aspernatur";
                                                            localPort = "enim";
                                                            name = "Gilbert Pagac";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                            publicPort = "non";
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("maiores"),
                                                                add("quasi"),
                                                                add("molestias"),
                                                                add("molestiae"),
                                                            }};
                                                            localIp = "tempora";
                                                            localPort = "excepturi";
                                                            name = "Susie Brakus IV";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                            publicPort = "laboriosam";
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("quasi"),
                                                            }};
                                                            localIp = "fuga";
                                                            localPort = "dicta";
                                                            name = "Ms. Carla Barrows DDS";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                            publicPort = "soluta";
                                                        }}),
                                                    }};
                                                    publicIp = "cumque";
                                                    uplink = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("eaque"),
                                                                            add("officiis"),
                                                                            add("tempora"),
                                                                            add("voluptas"),
                                                                        }};
                                                                        localIp = "delectus";
                                                                        localPort = "qui";
                                                                        name = "June Trantow";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "reprehenderit";
                                                                    }}),
                                                                }}, "excepturi", UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2) {{
                                                    portRules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("est"),
                                                            }};
                                                            localIp = "consequatur";
                                                            localPort = "autem";
                                                            name = "Mr. Sylvia Marks";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "pariatur";
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("provident"),
                                                            }};
                                                            localIp = "assumenda";
                                                            localPort = "alias";
                                                            name = "Dr. Wilson Jerde";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "laudantium";
                                                        }}),
                                                    }};
                                                    publicIp = "hic";
                                                    uplink = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                            }});, "non");            

            UpdateNetworkApplianceFirewallOneToManyNatRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallOneToManyNatRules(req);

            if (res.updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallOneToOneNatRulesRequest req = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequest(                new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("possimus") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("omnis"),
                                                                add("consequatur"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("sed"),
                                                                add("voluptates"),
                                                                add("autem"),
                                                                add("eaque"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("deserunt"),
                                                                add("consectetur"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("pariatur"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.TCP;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("consequatur"),
                                                                add("rerum"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("libero"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ICMP_PING;
                                                        }}),
                                                    }};
                                                    lanIp = "ipsum";
                                                    name = "Olivia Wyman";
                                                    publicIp = "doloremque";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("atque") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("sapiente"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("eveniet"),
                                                                add("veniam"),
                                                                add("vero"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("explicabo"),
                                                                add("delectus"),
                                                                add("fugit"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("dolorum"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ICMP_PING;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("porro"),
                                                                add("rerum"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("deserunt"),
                                                                add("asperiores"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                    }};
                                                    lanIp = "tempore";
                                                    name = "Rita Upton";
                                                    publicIp = "officiis";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("ipsam") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("rerum"),
                                                                add("deleniti"),
                                                                add("consequatur"),
                                                                add("impedit"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("ad"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ICMP_PING;
                                                        }}),
                                                    }};
                                                    lanIp = "adipisci";
                                                    name = "Robyn Herzog";
                                                    publicIp = "ut";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("fugiat") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("exercitationem"),
                                                                add("nostrum"),
                                                                add("minus"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("maxime"),
                                                                add("reprehenderit"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("vel"),
                                                                add("perferendis"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("enim"),
                                                                add("provident"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ICMP_PING;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("consectetur"),
                                                                add("odio"),
                                                                add("molestiae"),
                                                                add("quasi"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("temporibus"),
                                                                add("temporibus"),
                                                                add("blanditiis"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.UDP;
                                                        }}),
                                                    }};
                                                    lanIp = "corrupti";
                                                    name = "Carole Champlin Sr.";
                                                    publicIp = "aliquid";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                            }});, "sint");            

            UpdateNetworkApplianceFirewallOneToOneNatRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallOneToOneNatRules(req);

            if (res.updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallPortForwardingRulesRequest req = new UpdateNetworkApplianceFirewallPortForwardingRulesRequest(                new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("illum"),
                                                                    add("aspernatur"),
                                                                }}, "officia", "cumque", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP, "libero") {{
                                                    allowedIps = new String[]{{
                                                        add("nobis"),
                                                        add("atque"),
                                                    }};
                                                    lanIp = "eligendi";
                                                    localPort = "perspiciatis";
                                                    name = "Miss Sidney Murphy";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP;
                                                    publicPort = "necessitatibus";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.BOTH;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("quos"),
                                                                }}, "culpa", "excepturi", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP, "consequatur") {{
                                                    allowedIps = new String[]{{
                                                        add("minus"),
                                                    }};
                                                    lanIp = "temporibus";
                                                    localPort = "repudiandae";
                                                    name = "Sarah Waters";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP;
                                                    publicPort = "delectus";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("consequatur"),
                                                                    add("nisi"),
                                                                    add("nulla"),
                                                                    add("modi"),
                                                                }}, "temporibus", "architecto", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP, "deleniti") {{
                                                    allowedIps = new String[]{{
                                                        add("saepe"),
                                                    }};
                                                    lanIp = "sint";
                                                    localPort = "dolorem";
                                                    name = "Paul Bauch V";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP;
                                                    publicPort = "explicabo";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.BOTH;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("error"),
                                                                    add("sunt"),
                                                                }}, "iste", "doloribus", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP, "consectetur") {{
                                                    allowedIps = new String[]{{
                                                        add("consequuntur"),
                                                        add("assumenda"),
                                                    }};
                                                    lanIp = "fugit";
                                                    localPort = "praesentium";
                                                    name = "Pat Bergstrom";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP;
                                                    publicPort = "ab";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                            }});, "vitae");            

            UpdateNetworkApplianceFirewallPortForwardingRulesResponse res = sdk.firewall.updateNetworkApplianceFirewallPortForwardingRules(req);

            if (res.updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallSettingsRequest req = new UpdateNetworkApplianceFirewallSettingsRequest("cupiditate") {{
                requestBody = new UpdateNetworkApplianceFirewallSettingsRequestBody() {{
                    spoofingProtection = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection() {{
                        ipSourceGuard = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard() {{
                            mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum.BLOCK;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceFirewallSettingsResponse res = sdk.firewall.updateNetworkApplianceFirewallSettings(req);

            if (res.updateNetworkApplianceFirewallSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest("atque", "dolore") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody() {{
                    allowLanAccess = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("ullam", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP) {{
                            comment = "similique";
                            destCidr = "iusto";
                            destPort = "pariatur";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ANY;
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("voluptas", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP) {{
                            comment = "cumque";
                            destCidr = "quasi";
                            destPort = "nostrum";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP;
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("esse", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP) {{
                            comment = "perferendis";
                            destCidr = "natus";
                            destPort = "dignissimos";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("voluptates", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP6) {{
                            comment = "occaecati";
                            destCidr = "molestiae";
                            destPort = "accusamus";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.firewall.updateNetworkWirelessSsidFirewallL3FirewallRules(req);

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
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest("voluptatum", "explicabo") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.IP_RANGE;
                            value = "sapiente";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.HOST;
                            value = "animi";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.HOST;
                            value = "illum";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.firewall.updateNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
