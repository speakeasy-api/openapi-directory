# accessControlLists

### Available Operations

* [getNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [updateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network

## getNetworkSwitchAccessControlLists

Return the access control lists for a MS network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessControlListsRequest req = new GetNetworkSwitchAccessControlListsRequest("quibusdam");            

            GetNetworkSwitchAccessControlListsResponse res = sdk.accessControlLists.getNetworkSwitchAccessControlLists(req);

            if (res.getNetworkSwitchAccessControlLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchAccessControlListsRequest req = new UpdateNetworkSwitchAccessControlListsRequest(                new UpdateNetworkSwitchAccessControlListsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules[]{{
                                                add(new UpdateNetworkSwitchAccessControlListsRequestBodyRules("ipsa", UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY, UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.ANY, "suscipit") {{
                                                    comment = "corrupti";
                                                    dstCidr = "illum";
                                                    dstPort = "vel";
                                                    ipVersion = UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum.IPV4;
                                                    policy = UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY;
                                                    protocol = UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.TCP;
                                                    srcCidr = "iure";
                                                    srcPort = "magnam";
                                                    vlan = "debitis";
                                                }}),
                                                add(new UpdateNetworkSwitchAccessControlListsRequestBodyRules("ab", UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.ANY, "deserunt") {{
                                                    comment = "molestiae";
                                                    dstCidr = "minus";
                                                    dstPort = "placeat";
                                                    ipVersion = UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum.IPV4;
                                                    policy = UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.ALLOW;
                                                    protocol = UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.TCP;
                                                    srcCidr = "nisi";
                                                    srcPort = "recusandae";
                                                    vlan = "temporibus";
                                                }}),
                                                add(new UpdateNetworkSwitchAccessControlListsRequestBodyRules("molestiae", UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY, UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.UDP, "esse") {{
                                                    comment = "perferendis";
                                                    dstCidr = "ipsam";
                                                    dstPort = "repellendus";
                                                    ipVersion = UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum.IPV6;
                                                    policy = UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY;
                                                    protocol = UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.ANY;
                                                    srcCidr = "at";
                                                    srcPort = "at";
                                                    vlan = "maiores";
                                                }}),
                                                add(new UpdateNetworkSwitchAccessControlListsRequestBodyRules("hic", UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY, UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.TCP, "beatae") {{
                                                    comment = "totam";
                                                    dstCidr = "porro";
                                                    dstPort = "dolorum";
                                                    ipVersion = UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum.ANY;
                                                    policy = UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum.DENY;
                                                    protocol = UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum.TCP;
                                                    srcCidr = "occaecati";
                                                    srcPort = "fugit";
                                                    vlan = "deleniti";
                                                }}),
                                            }});, "commodi");            

            UpdateNetworkSwitchAccessControlListsResponse res = sdk.accessControlLists.updateNetworkSwitchAccessControlLists(req);

            if (res.updateNetworkSwitchAccessControlLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
