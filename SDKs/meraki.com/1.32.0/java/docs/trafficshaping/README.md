# trafficShaping

### Available Operations

* [createNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [getNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [updateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest(                new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody("dolor") {{
                                maxJitter = 573344L;
                                maxLatency = 588937L;
                                maxLossPercentage = 968169L;
                            }};, "consectetur");            

            CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.trafficShaping.createNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest("atque", "culpa");            

            DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.trafficShaping.deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingRequest req = new GetNetworkApplianceTrafficShapingRequest("vel");            

            GetNetworkApplianceTrafficShapingResponse res = sdk.trafficShaping.getNetworkApplianceTrafficShaping(req);

            if (res.getNetworkApplianceTrafficShaping200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest("repudiandae", "alias");            

            GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.trafficShaping.getNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest req = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest("et");            

            GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse res = sdk.trafficShaping.getNetworkApplianceTrafficShapingCustomPerformanceClasses(req);

            if (res.getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingRulesRequest req = new GetNetworkApplianceTrafficShapingRulesRequest("tenetur");            

            GetNetworkApplianceTrafficShapingRulesResponse res = sdk.trafficShaping.getNetworkApplianceTrafficShapingRules(req);

            if (res.getNetworkApplianceTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingUplinkBandwidthRequest req = new GetNetworkApplianceTrafficShapingUplinkBandwidthRequest("fugiat");            

            GetNetworkApplianceTrafficShapingUplinkBandwidthResponse res = sdk.trafficShaping.getNetworkApplianceTrafficShapingUplinkBandwidth(req);

            if (res.getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingUplinkSelectionRequest req = new GetNetworkApplianceTrafficShapingUplinkSelectionRequest("deleniti");            

            GetNetworkApplianceTrafficShapingUplinkSelectionResponse res = sdk.trafficShaping.getNetworkApplianceTrafficShapingUplinkSelection(req);

            if (res.getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficShapingApplicationCategoriesRequest req = new GetNetworkTrafficShapingApplicationCategoriesRequest("similique");            

            GetNetworkTrafficShapingApplicationCategoriesResponse res = sdk.trafficShaping.getNetworkTrafficShapingApplicationCategories(req);

            if (res.getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficShapingDscpTaggingOptionsRequest req = new GetNetworkTrafficShapingDscpTaggingOptionsRequest("repudiandae");            

            GetNetworkTrafficShapingDscpTaggingOptionsResponse res = sdk.trafficShaping.getNetworkTrafficShapingDscpTaggingOptions(req);

            if (res.getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidTrafficShapingRulesRequest req = new GetNetworkWirelessSsidTrafficShapingRulesRequest("assumenda", "in");            

            GetNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.trafficShaping.getNetworkWirelessSsidTrafficShapingRules(req);

            if (res.getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingRequest req = new UpdateNetworkApplianceTrafficShapingRequest("enim") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingRequestBody() {{
                    globalBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits() {{
                        limitDown = 107319L;
                        limitUp = 763898L;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingResponse res = sdk.trafficShaping.updateNetworkApplianceTrafficShaping(req);

            if (res.updateNetworkApplianceTrafficShaping200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest req = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest("explicabo", "dicta") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody() {{
                    maxJitter = 920868L;
                    maxLatency = 162843L;
                    maxLossPercentage = 213940L;
                    name = "Charlotte Adams";
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = sdk.trafficShaping.updateNetworkApplianceTrafficShapingCustomPerformanceClass(req);

            if (res.updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingRulesRequest req = new UpdateNetworkApplianceTrafficShapingRulesRequest("quia") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "distinctio") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                                value = "at";
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "magni") {{
                                                type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "magnam";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "numquam") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "corrupti";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "placeat") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "explicabo";
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "adipisci") {{
                                    type = UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                    value = "suscipit";
                                }}),
                            }};
                            dscpTagValue = 24938L;
                            perClientBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 656101L;
                                    limitUp = 885376L;
                                }};
                                settings = "molestias";
                            }};
                            priority = "explicabo";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingRulesResponse res = sdk.trafficShaping.updateNetworkApplianceTrafficShapingRules(req);

            if (res.updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest req = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest("occaecati") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody() {{
                    bandwidthLimits = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits() {{
                        cellular = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular() {{
                            limitDown = 915834L;
                            limitUp = 424735L;
                        }};;
                        wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1() {{
                            limitDown = 251908L;
                            limitUp = 915320L;
                        }};;
                        wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2() {{
                            limitDown = 622982L;
                            limitUp = 756185L;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse res = sdk.trafficShaping.updateNetworkApplianceTrafficShapingUplinkBandwidth(req);

            if (res.updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest req = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest("asperiores") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody() {{
                    activeActiveAutoVpnEnabled = false;
                    defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum.WAN2;
                    failoverAndFailback = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback() {{
                        immediate = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate(false);;
                    }};;
                    loadBalancingEnabled = false;
                    vpnTrafficUplinkPreferences = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[]{{
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "culpa";
                                                                    fqdn = "voluptate";
                                                                    host = 818227L;
                                                                    network = "soluta";
                                                                    port = "dolorem";
                                                                    vlan = 375462L;
                                                                }};;
                                                                id = "b65c4f9c-d54a-45dd-a185-2f65c34f6354";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "est";
                                                                    host = 405235L;
                                                                    network = "explicabo";
                                                                    port = "earum";
                                                                    vlan = 482446L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "sint";
                                                        fqdn = "dicta";
                                                        host = 266495L;
                                                        network = "fugit";
                                                        port = "nam";
                                                        vlan = 833105L;
                                                    }};
                                                    id = "ef4c9791-9eb0-4032-a754-3b42c7e903dc";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "earum";
                                                        host = 478413L;
                                                        network = "optio";
                                                        port = "omnis";
                                                        vlan = 466254L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nulla";
                                                                    fqdn = "maxime";
                                                                    host = 887720L;
                                                                    network = "dignissimos";
                                                                    port = "dolor";
                                                                    vlan = 657637L;
                                                                }};;
                                                                id = "369fbf3c-033b-4fb7-9edf-1a101205fcd7";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "aperiam";
                                                                    host = 267627L;
                                                                    network = "rem";
                                                                    port = "veniam";
                                                                    vlan = 12755L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "odit";
                                                        fqdn = "dolorum";
                                                        host = 615406L;
                                                        network = "sed";
                                                        port = "eligendi";
                                                        vlan = 110635L;
                                                    }};
                                                    id = "77d55a91-7540-4504-92ff-158f09d3516b";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "nam";
                                                        host = 950404L;
                                                        network = "aliquid";
                                                        port = "vero";
                                                        vlan = 598137L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "blanditiis";
                                                                    fqdn = "repellendus";
                                                                    host = 371370L;
                                                                    network = "dignissimos";
                                                                    port = "nemo";
                                                                    vlan = 861769L;
                                                                }};;
                                                                id = "167d3889-4521-4c1a-8e79-52c73d8f6b82";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "quidem";
                                                                    host = 396872L;
                                                                    network = "doloribus";
                                                                    port = "corrupti";
                                                                    vlan = 679631L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "voluptates";
                                                        fqdn = "eaque";
                                                        host = 674840L;
                                                        network = "occaecati";
                                                        port = "earum";
                                                        vlan = 587551L;
                                                    }};
                                                    id = "876acf69-e2b0-41dc-ac70-0092ec1f1dab";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "iure";
                                                        host = 636727L;
                                                        network = "id";
                                                        port = "modi";
                                                        vlan = 292472L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "fugit";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.BEST_FOR_VO_IP;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "error";
                                                        fqdn = "illo";
                                                        host = 540411L;
                                                        network = "natus";
                                                        port = "quibusdam";
                                                        vlan = 526343L;
                                                    }};;
                                                    id = "82029221-2fae-42b2-99a3-81fea804706d";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "accusamus";
                                                        host = 873082L;
                                                        network = "similique";
                                                        port = "aliquid";
                                                        vlan = 368114L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "occaecati";
                                            fqdn = "minima";
                                            host = 579854L;
                                            network = "laborum";
                                            port = "sed";
                                            vlan = 625135L;
                                        }};
                                        id = "c9d7fb46-9e61-4efd-a839-031657c2c257";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "delectus";
                                            host = 445791L;
                                            network = "ullam";
                                            port = "dolores";
                                            vlan = 986208L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "voluptates";
                                                        fqdn = "nemo";
                                                        host = 532824L;
                                                        network = "molestiae";
                                                        port = "sapiente";
                                                        vlan = 841045L;
                                                    }};;
                                                    id = "77faef48-1834-4626-8aa6-c592cea5d248";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "amet";
                                                        host = 929322L;
                                                        network = "sapiente";
                                                        port = "velit";
                                                        vlan = 104799L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "atque";
                                            fqdn = "laboriosam";
                                            host = 137860L;
                                            network = "eum";
                                            port = "rem";
                                            vlan = 922857L;
                                        }};
                                        id = "140e9378-39e8-471a-a044-91e4c9b81e3e";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "ratione";
                                            host = 241969L;
                                            network = "autem";
                                            port = "voluptatibus";
                                            vlan = 895798L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "incidunt";
                                                                    fqdn = "iure";
                                                                    host = 529946L;
                                                                    network = "asperiores";
                                                                    port = "esse";
                                                                    vlan = 943661L;
                                                                }};;
                                                                id = "79d5fa17-0fa8-42a0-9bbc-49e790b8aaee";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "iure";
                                                                    host = 849536L;
                                                                    network = "consectetur";
                                                                    port = "rem";
                                                                    vlan = 27076L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "et";
                                                        fqdn = "labore";
                                                        host = 931844L;
                                                        network = "rem";
                                                        port = "quaerat";
                                                        vlan = 734681L;
                                                    }};
                                                    id = "321f9313-d0b0-419f-9e6f-d1937719429f";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptatibus";
                                                        host = 546165L;
                                                        network = "ratione";
                                                        port = "temporibus";
                                                        vlan = 481370L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "autem";
                                                                    fqdn = "eos";
                                                                    host = 661855L;
                                                                    network = "minus";
                                                                    port = "cupiditate";
                                                                    vlan = 655337L;
                                                                }};;
                                                                id = "c403b344-93d6-480a-8c20-18f6cccf9634";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "similique";
                                                                    host = 113967L;
                                                                    network = "voluptatum";
                                                                    port = "adipisci";
                                                                    vlan = 458037L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "fuga";
                                                        fqdn = "fugit";
                                                        host = 832704L;
                                                        network = "consequuntur";
                                                        port = "aliquam";
                                                        vlan = 513436L;
                                                    }};
                                                    id = "9ca70b3e-bcf4-443e-b791-5755fa10cb6c";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ea";
                                                        host = 998770L;
                                                        network = "soluta";
                                                        port = "facilis";
                                                        vlan = 842343L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "repellendus";
                                                                    fqdn = "quam";
                                                                    host = 598162L;
                                                                    network = "dignissimos";
                                                                    port = "quibusdam";
                                                                    vlan = 714276L;
                                                                }};;
                                                                id = "e0fbcbc2-10bd-4987-a86c-d59c814e7308";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "commodi";
                                                                    host = 871702L;
                                                                    network = "inventore";
                                                                    port = "nesciunt";
                                                                    vlan = 828545L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quae";
                                                        fqdn = "consectetur";
                                                        host = 395435L;
                                                        network = "nesciunt";
                                                        port = "sint";
                                                        vlan = 291762L;
                                                    }};
                                                    id = "31a6704c-fb6c-491e-a95a-a791e4c7260b";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptas";
                                                        host = 875534L;
                                                        network = "temporibus";
                                                        port = "ratione";
                                                        vlan = 338866L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "mollitia";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.DEFAULT_UPLINK;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "voluptatem";
                                                        fqdn = "ab";
                                                        host = 63675L;
                                                        network = "rerum";
                                                        port = "ut";
                                                        vlan = 120196L;
                                                    }};;
                                                    id = "d87c45b1-a509-4104-bd3f-c82359601935";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptatum";
                                                        host = 457439L;
                                                        network = "cum";
                                                        port = "voluptatum";
                                                        vlan = 196412L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "impedit";
                                            fqdn = "quasi";
                                            host = 817851L;
                                            network = "veritatis";
                                            port = "et";
                                            vlan = 982500L;
                                        }};
                                        id = "b5dfd929-5a81-4443-8cdc-5e98d77dbde5";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "molestias";
                                            host = 39897L;
                                            network = "earum";
                                            port = "nostrum";
                                            vlan = 60775L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "eos";
                                                        fqdn = "cumque";
                                                        host = 18095L;
                                                        network = "facilis";
                                                        port = "earum";
                                                        vlan = 218101L;
                                                    }};;
                                                    id = "5d9222cc-62ad-49bc-a259-ae72496f4190";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ratione";
                                                        host = 916500L;
                                                        network = "perferendis";
                                                        port = "quos";
                                                        vlan = 570004L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "itaque";
                                            fqdn = "veritatis";
                                            host = 278596L;
                                            network = "culpa";
                                            port = "omnis";
                                            vlan = 749141L;
                                        }};
                                        id = "964611a0-ed51-4943-b9b4-0f21e50466f8";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "autem";
                                            host = 597616L;
                                            network = "animi";
                                            port = "fuga";
                                            vlan = 789100L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quibusdam";
                                                        fqdn = "vitae";
                                                        host = 440618L;
                                                        network = "eligendi";
                                                        port = "accusamus";
                                                        vlan = 827357L;
                                                    }};;
                                                    id = "2468ec3f-c96b-4c74-97c1-285333c31c57";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "aspernatur";
                                                        host = 98626L;
                                                        network = "iusto";
                                                        port = "architecto";
                                                        vlan = 934824L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "fuga";
                                            fqdn = "modi";
                                            host = 5524L;
                                            network = "quia";
                                            port = "in";
                                            vlan = 581997L;
                                        }};
                                        id = "5dc6ceb7-033d-406f-be58-e37953e60df8";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "fugiat";
                                            host = 625838L;
                                            network = "at";
                                            port = "illo";
                                            vlan = 550357L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "hic";
                                                        fqdn = "nesciunt";
                                                        host = 368326L;
                                                        network = "nobis";
                                                        port = "distinctio";
                                                        vlan = 56709L;
                                                    }};;
                                                    id = "0920c2d9-d5ce-4c90-a2e6-8b7d6b023fc3";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "est";
                                                        host = 121548L;
                                                        network = "ipsa";
                                                        port = "porro";
                                                        vlan = 432160L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "saepe";
                                            fqdn = "libero";
                                            host = 139688L;
                                            network = "vel";
                                            port = "dignissimos";
                                            vlan = 664744L;
                                        }};
                                        id = "7dcc8810-f6ef-4885-957b-21b1bd07f368";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "doloremque";
                                            host = 158110L;
                                            network = "unde";
                                            port = "natus";
                                            vlan = 621852L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.DEFAULT_UPLINK,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "architecto";
                                                                    fqdn = "ducimus";
                                                                    host = 969486L;
                                                                    network = "accusantium";
                                                                    port = "tempora";
                                                                    vlan = 481606L;
                                                                }};;
                                                                id = "f8c49791-3fd0-4de3-9816-523511d7460f";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "ipsam";
                                                                    host = 524728L;
                                                                    network = "molestias";
                                                                    port = "maiores";
                                                                    vlan = 877962L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "pariatur";
                                                        fqdn = "consequuntur";
                                                        host = 544974L;
                                                        network = "doloremque";
                                                        port = "id";
                                                        vlan = 127219L;
                                                    }};
                                                    id = "e4676be0-a7ba-456b-b1f3-4b0be62d549f";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "quasi";
                                                        host = 32473L;
                                                        network = "debitis";
                                                        port = "officiis";
                                                        vlan = 330004L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "explicabo";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "maxime";
                                                        fqdn = "quasi";
                                                        host = 576104L;
                                                        network = "beatae";
                                                        port = "natus";
                                                        vlan = 847327L;
                                                    }};;
                                                    id = "90a60989-dc35-41f6-8866-2b908632c110";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "dolor";
                                                        host = 806352L;
                                                        network = "commodi";
                                                        port = "accusamus";
                                                        vlan = 908162L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "reiciendis";
                                            fqdn = "assumenda";
                                            host = 645098L;
                                            network = "aliquam";
                                            port = "numquam";
                                            vlan = 165644L;
                                        }};
                                        id = "d20f479a-33cb-4d48-9c1e-20482e90dc50";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "perspiciatis";
                                            host = 206575L;
                                            network = "doloribus";
                                            port = "expedita";
                                            vlan = 422155L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    wanTrafficUplinkPreferences = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[]{{
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "delectus";
                                                                                port = "distinctio";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "voluptas";
                                                                                host = 66058L;
                                                                                port = "ullam";
                                                                                vlan = 24670L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nemo";
                                                                    port = "nostrum";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "culpa";
                                                                    host = 421931L;
                                                                    port = "reiciendis";
                                                                    vlan = 574230L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "esse";
                                                        port = "tenetur";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "nemo";
                                                        host = 551191L;
                                                        port = "temporibus";
                                                        vlan = 611245L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "fugiat";
                                                                                port = "sint";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "fuga";
                                                                                host = 492847L;
                                                                                port = "tenetur";
                                                                                vlan = 179341L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "aut";
                                                                    port = "sint";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "quisquam";
                                                                    host = 997693L;
                                                                    port = "aliquam";
                                                                    vlan = 891027L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "labore";
                                                        port = "inventore";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "autem";
                                                        host = 13159L;
                                                        port = "qui";
                                                        vlan = 886923L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "soluta";
                                                                    port = "mollitia";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "maiores";
                                                                    host = 288540L;
                                                                    port = "debitis";
                                                                    vlan = 569867L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "eligendi";
                                                        port = "impedit";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ratione";
                                                        host = 399224L;
                                                        port = "ex";
                                                        vlan = 551979L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "adipisci";
                                            port = "deleniti";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "asperiores";
                                            host = 775019L;
                                            port = "vero";
                                            vlan = 369630L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "alias";
                                                                    port = "quos";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "aut";
                                                                    host = 279283L;
                                                                    port = "sit";
                                                                    vlan = 896525L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ut";
                                                        port = "a";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ab";
                                                        host = 159300L;
                                                        port = "sapiente";
                                                        vlan = 490269L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "eaque";
                                            port = "voluptatem";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "vel";
                                            host = 919279L;
                                            port = "culpa";
                                            vlan = 436204L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse res = sdk.trafficShaping.updateNetworkApplianceTrafficShapingUplinkSelection(req);

            if (res.updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidTrafficShapingRulesRequest req = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest("eligendi", "quae") {{
                requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "consequuntur") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                                value = "quis";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "doloribus") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                                value = "reprehenderit";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "voluptatum") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                                value = "aliquid";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "dolor") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                                value = "rem";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "repellendus") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                    value = "assumenda";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "inventore") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "iusto";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "maiores") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                    value = "quae";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "nulla") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                    value = "dolorum";
                                }}),
                            }};
                            dscpTagValue = 355162L;
                            pcpTagValue = 849004L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 303779L;
                                    limitUp = 271046L;
                                }};
                                settings = "fugit";
                            }};
                        }}),
                    }};
                    trafficShapingEnabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.trafficShaping.updateNetworkWirelessSsidTrafficShapingRules(req);

            if (res.updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
