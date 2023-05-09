# rules

### Available Operations

* [getNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [updateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

## getNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingRulesRequest req = new GetNetworkApplianceTrafficShapingRulesRequest("neque");            

            GetNetworkApplianceTrafficShapingRulesResponse res = sdk.rules.getNetworkApplianceTrafficShapingRules(req);

            if (res.getNetworkApplianceTrafficShapingRules200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidTrafficShapingRulesRequest req = new GetNetworkWirelessSsidTrafficShapingRulesRequest("amet", "earum");            

            GetNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.rules.getNetworkWirelessSsidTrafficShapingRules(req);

            if (res.getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingRulesRequest req = new UpdateNetworkApplianceTrafficShapingRulesRequest("corporis") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "aliquid") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                                value = "accusamus";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "autem") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                    value = "laboriosam";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "saepe") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "atque";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "id") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                    value = "enim";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "animi") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "ex";
                                }}),
                            }};
                            dscpTagValue = 121348L;
                            perClientBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 833596L;
                                    limitUp = 892350L;
                                }};
                                settings = "minima";
                            }};
                            priority = "atque";
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "ipsa") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "similique";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "quidem") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                value = "aliquid";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "vitae") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "culpa";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "sit") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "reiciendis";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "quisquam") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "asperiores";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "earum") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                    value = "aut";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "nisi") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "pariatur";
                                }}),
                            }};
                            dscpTagValue = 322948L;
                            perClientBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 562646L;
                                    limitUp = 719545L;
                                }};
                                settings = "tempora";
                            }};
                            priority = "quisquam";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingRulesResponse res = sdk.rules.updateNetworkApplianceTrafficShapingRules(req);

            if (res.updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidTrafficShapingRulesRequest req = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest("sunt", "laborum") {{
                requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "unde") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                value = "non";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "consequatur") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                                value = "neque";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "nobis") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                    value = "veritatis";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "ad") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "iure";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "nesciunt") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "iure";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "enim") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "sequi";
                                }}),
                            }};
                            dscpTagValue = 470857L;
                            pcpTagValue = 897469L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 570147L;
                                    limitUp = 54574L;
                                }};
                                settings = "rem";
                            }};
                        }}),
                    }};
                    trafficShapingEnabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.rules.updateNetworkWirelessSsidTrafficShapingRules(req);

            if (res.updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
