# l7FirewallRules

### Available Operations

* [getNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

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
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesRequest("facilis");            

            GetNetworkApplianceFirewallL7FirewallRulesResponse res = sdk.l7FirewallRules.getNetworkApplianceFirewallL7FirewallRules(req);

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
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest("tempora");            

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse res = sdk.l7FirewallRules.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req);

            if (res.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest("impedit", "perferendis");            

            GetNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.l7FirewallRules.getNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallL7FirewallRulesRequest req = new UpdateNetworkApplianceFirewallL7FirewallRulesRequest("laborum") {{
                requestBody = new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum.HOST;
                            value = "nobis";
                        }}),
                        add(new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum.APPLICATION;
                            value = "consequuntur";
                        }}),
                        add(new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum.IP_RANGE;
                            value = "unde";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallL7FirewallRulesResponse res = sdk.l7FirewallRules.updateNetworkApplianceFirewallL7FirewallRules(req);

            if (res.updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest("totam", "quia") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.HOST;
                            value = "libero";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.APPLICATION;
                            value = "iure";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.l7FirewallRules.updateNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
