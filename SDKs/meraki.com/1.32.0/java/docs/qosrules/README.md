# qosRules

### Available Operations

* [createNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [deleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [getNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [updateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

## createNetworkSwitchQosRule

Add a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchQosRuleRequest req = new CreateNetworkSwitchQosRuleRequest(                new CreateNetworkSwitchQosRuleRequestBody(630954L) {{
                                dscp = 500157L;
                                dstPort = 40951L;
                                dstPortRange = "alias";
                                protocol = CreateNetworkSwitchQosRuleRequestBodyProtocolEnum.ANY;
                                srcPort = 834282L;
                                srcPortRange = "et";
                            }};, "veritatis");            

            CreateNetworkSwitchQosRuleResponse res = sdk.qosRules.createNetworkSwitchQosRule(req);

            if (res.createNetworkSwitchQosRule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchQosRule

Delete a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchQosRuleRequest req = new DeleteNetworkSwitchQosRuleRequest("consectetur", "velit");            

            DeleteNetworkSwitchQosRuleResponse res = sdk.qosRules.deleteNetworkSwitchQosRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchQosRule

Return a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRuleRequest req = new GetNetworkSwitchQosRuleRequest("consectetur", "quis");            

            GetNetworkSwitchQosRuleResponse res = sdk.qosRules.getNetworkSwitchQosRule(req);

            if (res.getNetworkSwitchQosRule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchQosRules

List quality of service rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRulesRequest req = new GetNetworkSwitchQosRulesRequest("nam");            

            GetNetworkSwitchQosRulesResponse res = sdk.qosRules.getNetworkSwitchQosRules(req);

            if (res.getNetworkSwitchQosRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesOrderRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRulesOrderRequest req = new GetNetworkSwitchQosRulesOrderRequest("odit");            

            GetNetworkSwitchQosRulesOrderResponse res = sdk.qosRules.getNetworkSwitchQosRulesOrder(req);

            if (res.getNetworkSwitchQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchQosRule

Update a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchQosRuleRequest req = new UpdateNetworkSwitchQosRuleRequest("necessitatibus", "aut") {{
                requestBody = new UpdateNetworkSwitchQosRuleRequestBody() {{
                    dscp = 155031L;
                    dstPort = 548111L;
                    dstPortRange = "dolorum";
                    protocol = UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum.UDP;
                    srcPort = 981791L;
                    srcPortRange = "magni";
                    vlan = 739136L;
                }};;
            }};            

            UpdateNetworkSwitchQosRuleResponse res = sdk.qosRules.updateNetworkSwitchQosRule(req);

            if (res.updateNetworkSwitchQosRule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchQosRulesOrderRequest req = new UpdateNetworkSwitchQosRulesOrderRequest(                new UpdateNetworkSwitchQosRulesOrderRequestBody(                new String[]{{
                                                add("voluptatum"),
                                                add("minima"),
                                                add("assumenda"),
                                                add("perspiciatis"),
                                            }});, "voluptate");            

            UpdateNetworkSwitchQosRulesOrderResponse res = sdk.qosRules.updateNetworkSwitchQosRulesOrder(req);

            if (res.updateNetworkSwitchQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
