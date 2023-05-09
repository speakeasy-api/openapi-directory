# switchSettings

### Available Operations

* [createNetworkSwitchSettingsQosRule](#createnetworkswitchsettingsqosrule) - Add a quality of service rule
* [deleteNetworkSwitchSettingsQosRule](#deletenetworkswitchsettingsqosrule) - Delete a quality of service rule
* [getNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchSettingsMtu](#getnetworkswitchsettingsmtu) - Return the MTU configuration
* [getNetworkSwitchSettingsMulticast](#getnetworkswitchsettingsmulticast) - Return multicast settings for a network
* [getNetworkSwitchSettingsQosRule](#getnetworkswitchsettingsqosrule) - Return a quality of service rule
* [getNetworkSwitchSettingsQosRules](#getnetworkswitchsettingsqosrules) - List quality of service rules
* [getNetworkSwitchSettingsQosRulesOrder](#getnetworkswitchsettingsqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchSettingsStormControl](#getnetworkswitchsettingsstormcontrol) - Return the storm control configuration for a switch network
* [updateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchSettingsMulticast](#updatenetworkswitchsettingsmulticast) - Update multicast settings for a network
* [updateNetworkSwitchSettingsQosRule](#updatenetworkswitchsettingsqosrule) - Update a quality of service rule
* [updateNetworkSwitchSettingsQosRulesOrder](#updatenetworkswitchsettingsqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchSettingsStormControl](#updatenetworkswitchsettingsstormcontrol) - Update the storm control configuration for a switch network

## createNetworkSwitchSettingsQosRule

Add a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchSettingsQosRuleRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchSettingsQosRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchSettingsQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchSettingsQosRuleRequest req = new CreateNetworkSwitchSettingsQosRuleRequest(                new CreateNetworkSwitchSettingsQosRuleRequestBody(514462L) {{
                                dscp = 982248L;
                                dstPort = 691L;
                                dstPortRange = "asperiores";
                                protocol = CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum.TCP;
                                srcPort = 118615L;
                                srcPortRange = "suscipit";
                            }};, "earum");            

            CreateNetworkSwitchSettingsQosRuleResponse res = sdk.switchSettings.createNetworkSwitchSettingsQosRule(req);

            if (res.createNetworkSwitchSettingsQosRule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchSettingsQosRule

Delete a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchSettingsQosRuleRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchSettingsQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchSettingsQosRuleRequest req = new DeleteNetworkSwitchSettingsQosRuleRequest("velit", "eius");            

            DeleteNetworkSwitchSettingsQosRuleResponse res = sdk.switchSettings.deleteNetworkSwitchSettingsQosRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsRequest req = new GetNetworkSwitchSettingsRequest("in");            

            GetNetworkSwitchSettingsResponse res = sdk.switchSettings.getNetworkSwitchSettings(req);

            if (res.getNetworkSwitchSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettingsMtu

Return the MTU configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsMtuRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsMtuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsMtuRequest req = new GetNetworkSwitchSettingsMtuRequest("quasi");            

            GetNetworkSwitchSettingsMtuResponse res = sdk.switchSettings.getNetworkSwitchSettingsMtu(req);

            if (res.getNetworkSwitchSettingsMtu200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettingsMulticast

Return multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsMulticastRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsMulticastRequest req = new GetNetworkSwitchSettingsMulticastRequest("vero");            

            GetNetworkSwitchSettingsMulticastResponse res = sdk.switchSettings.getNetworkSwitchSettingsMulticast(req);

            if (res.getNetworkSwitchSettingsMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettingsQosRule

Return a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsQosRuleRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsQosRuleRequest req = new GetNetworkSwitchSettingsQosRuleRequest("accusantium", "qui");            

            GetNetworkSwitchSettingsQosRuleResponse res = sdk.switchSettings.getNetworkSwitchSettingsQosRule(req);

            if (res.getNetworkSwitchSettingsQosRule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettingsQosRules

List quality of service rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsQosRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsQosRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsQosRulesRequest req = new GetNetworkSwitchSettingsQosRulesRequest("beatae");            

            GetNetworkSwitchSettingsQosRulesResponse res = sdk.switchSettings.getNetworkSwitchSettingsQosRules(req);

            if (res.getNetworkSwitchSettingsQosRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettingsQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsQosRulesOrderRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsQosRulesOrderRequest req = new GetNetworkSwitchSettingsQosRulesOrderRequest("dicta");            

            GetNetworkSwitchSettingsQosRulesOrderResponse res = sdk.switchSettings.getNetworkSwitchSettingsQosRulesOrder(req);

            if (res.getNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettingsStormControl

Return the storm control configuration for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsStormControlRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsStormControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsStormControlRequest req = new GetNetworkSwitchSettingsStormControlRequest("corporis");            

            GetNetworkSwitchSettingsStormControlResponse res = sdk.switchSettings.getNetworkSwitchSettingsStormControl(req);

            if (res.getNetworkSwitchSettingsStormControl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsRequest req = new UpdateNetworkSwitchSettingsRequest("alias") {{
                requestBody = new UpdateNetworkSwitchSettingsRequestBody() {{
                    powerExceptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[]{{
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.REDUNDANT, "laboriosam") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.REDUNDANT;
                            serial = "accusantium";
                        }}),
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED, "ullam") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.REDUNDANT;
                            serial = "quas";
                        }}),
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED, "quam") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.COMBINED;
                            serial = "similique";
                        }}),
                    }};
                    useCombinedPower = false;
                    vlan = 169312L;
                }};;
            }};            

            UpdateNetworkSwitchSettingsResponse res = sdk.switchSettings.updateNetworkSwitchSettings(req);

            if (res.updateNetworkSwitchSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettingsMulticast

Update multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsMulticastRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsMulticastRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsMulticastRequest req = new UpdateNetworkSwitchSettingsMulticastRequest("delectus") {{
                requestBody = new UpdateNetworkSwitchSettingsMulticastRequestBody() {{
                    defaultSettings = new UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings() {{
                        floodUnknownMulticastTrafficEnabled = false;
                        igmpSnoopingEnabled = false;
                    }};;
                    overrides = new org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides[]{{
                        add(new UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("nesciunt"),
                            }};
                            switchProfiles = new String[]{{
                                add("quis"),
                                add("cupiditate"),
                                add("aliquam"),
                                add("excepturi"),
                            }};
                            switches = new String[]{{
                                add("laudantium"),
                                add("velit"),
                                add("reiciendis"),
                                add("amet"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("ipsa"),
                                add("quisquam"),
                            }};
                            switchProfiles = new String[]{{
                                add("quas"),
                                add("molestiae"),
                                add("aliquid"),
                                add("asperiores"),
                            }};
                            switches = new String[]{{
                                add("nobis"),
                                add("perspiciatis"),
                                add("accusantium"),
                                add("dicta"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("commodi"),
                                add("eveniet"),
                                add("porro"),
                                add("tempore"),
                            }};
                            switchProfiles = new String[]{{
                                add("modi"),
                                add("voluptates"),
                                add("fugit"),
                            }};
                            switches = new String[]{{
                                add("sequi"),
                                add("eligendi"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchSettingsMulticastResponse res = sdk.switchSettings.updateNetworkSwitchSettingsMulticast(req);

            if (res.updateNetworkSwitchSettingsMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettingsQosRule

Update a quality of service rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRuleRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsQosRuleRequest req = new UpdateNetworkSwitchSettingsQosRuleRequest("esse", "blanditiis") {{
                requestBody = new UpdateNetworkSwitchSettingsQosRuleRequestBody() {{
                    dscp = 573610L;
                    dstPort = 996541L;
                    dstPortRange = "a";
                    protocol = UpdateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum.TCP;
                    srcPort = 979287L;
                    srcPortRange = "itaque";
                    vlan = 861591L;
                }};;
            }};            

            UpdateNetworkSwitchSettingsQosRuleResponse res = sdk.switchSettings.updateNetworkSwitchSettingsQosRule(req);

            if (res.updateNetworkSwitchSettingsQosRule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettingsQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRulesOrderRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRulesOrderRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsQosRulesOrderRequest req = new UpdateNetworkSwitchSettingsQosRulesOrderRequest(                new UpdateNetworkSwitchSettingsQosRulesOrderRequestBody(                new String[]{{
                                                add("velit"),
                                                add("officiis"),
                                            }});, "enim");            

            UpdateNetworkSwitchSettingsQosRulesOrderResponse res = sdk.switchSettings.updateNetworkSwitchSettingsQosRulesOrder(req);

            if (res.updateNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettingsStormControl

Update the storm control configuration for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsStormControlRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsStormControlRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsStormControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsStormControlRequest req = new UpdateNetworkSwitchSettingsStormControlRequest("saepe") {{
                requestBody = new UpdateNetworkSwitchSettingsStormControlRequestBody() {{
                    broadcastThreshold = 429997L;
                    multicastThreshold = 922094L;
                    unknownUnicastThreshold = 35742L;
                }};;
            }};            

            UpdateNetworkSwitchSettingsStormControlResponse res = sdk.switchSettings.updateNetworkSwitchSettingsStormControl(req);

            if (res.updateNetworkSwitchSettingsStormControl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
