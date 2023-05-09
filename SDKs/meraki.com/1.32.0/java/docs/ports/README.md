# ports

### Available Operations

* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [getDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [updateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [updateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequest;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequestBody;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CycleDeviceSwitchPortsRequest req = new CycleDeviceSwitchPortsRequest(                new CycleDeviceSwitchPortsRequestBody(                new String[]{{
                                                add("eaque"),
                                                add("iure"),
                                            }});, "beatae");            

            CycleDeviceSwitchPortsResponse res = sdk.ports.cycleDeviceSwitchPorts(req);

            if (res.cycleDeviceSwitchPorts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPort

Return a switch port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortRequest req = new GetDeviceSwitchPortRequest("ullam", "maiores");            

            GetDeviceSwitchPortResponse res = sdk.ports.getDeviceSwitchPort(req);

            if (res.getDeviceSwitchPort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPorts

List the switch ports for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsRequest req = new GetDeviceSwitchPortsRequest("eveniet");            

            GetDeviceSwitchPortsResponse res = sdk.ports.getDeviceSwitchPorts(req);

            if (res.getDeviceSwitchPorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesRequest req = new GetDeviceSwitchPortsStatusesRequest("iure") {{
                t0 = "vero";
                timespan = 6388.41;
            }};            

            GetDeviceSwitchPortsStatusesResponse res = sdk.ports.getDeviceSwitchPortsStatuses(req);

            if (res.getDeviceSwitchPortsStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesPacketsRequest req = new GetDeviceSwitchPortsStatusesPacketsRequest("molestiae") {{
                t0 = "sit";
                timespan = 1841.02;
            }};            

            GetDeviceSwitchPortsStatusesPacketsResponse res = sdk.ports.getDeviceSwitchPortsStatusesPackets(req);

            if (res.getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePortRequest req = new GetNetworkAppliancePortRequest("et", "quidem");            

            GetNetworkAppliancePortResponse res = sdk.ports.getNetworkAppliancePort(req);

            if (res.getNetworkAppliancePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortsRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePortsRequest req = new GetNetworkAppliancePortsRequest("rem");            

            GetNetworkAppliancePortsResponse res = sdk.ports.getNetworkAppliancePorts(req);

            if (res.getNetworkAppliancePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortRequest req = new GetOrganizationConfigTemplateSwitchProfilePortRequest("nobis", "molestias", "ut", "eos");            

            GetOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.ports.getOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortsRequest req = new GetOrganizationConfigTemplateSwitchProfilePortsRequest("excepturi", "tempora", "laboriosam");            

            GetOrganizationConfigTemplateSwitchProfilePortsResponse res = sdk.ports.getOrganizationConfigTemplateSwitchProfilePorts(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSwitchPortsBySwitchRequest;
import org.openapis.openapi.models.operations.GetOrganizationSwitchPortsBySwitchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSwitchPortsBySwitchRequest req = new GetOrganizationSwitchPortsBySwitchRequest("omnis") {{
                configurationUpdatedAfter = "expedita";
                endingBefore = "occaecati";
                mac = "nesciunt";
                macs = new String[]{{
                    add("aspernatur"),
                }};
                name = "Debra Yost";
                networkIds = new String[]{{
                    add("dicta"),
                    add("quibusdam"),
                    add("inventore"),
                    add("voluptatum"),
                }};
                perPage = 338249L;
                portProfileIds = new String[]{{
                    add("laudantium"),
                }};
                serial = "modi";
                serials = new String[]{{
                    add("odit"),
                    add("qui"),
                    add("magni"),
                    add("quia"),
                }};
                startingAfter = "hic";
            }};            

            GetOrganizationSwitchPortsBySwitchResponse res = sdk.ports.getOrganizationSwitchPortsBySwitch(req);

            if (res.getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchPort

Update a switch port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyProfile;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortRequestBodyUdldEnum;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchPortRequest req = new UpdateDeviceSwitchPortRequest("minus", "sed") {{
                requestBody = new UpdateDeviceSwitchPortRequestBody() {{
                    accessPolicyNumber = 368602L;
                    accessPolicyType = UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum.OPEN;
                    adaptivePolicyGroupId = "nesciunt";
                    allowedVlans = "odit";
                    daiTrusted = false;
                    enabled = false;
                    flexibleStackingEnabled = false;
                    isolationEnabled = false;
                    linkNegotiation = "recusandae";
                    macAllowList = new String[]{{
                        add("omnis"),
                        add("hic"),
                        add("voluptates"),
                    }};
                    name = "Lula Christiansen";
                    peerSgtCapable = false;
                    poeEnabled = false;
                    portScheduleId = "modi";
                    profile = new UpdateDeviceSwitchPortRequestBodyProfile() {{
                        enabled = false;
                        id = "84a7d2b2-7183-4857-bb97-63b43d52847b";
                        iname = "porro";
                    }};;
                    rstpEnabled = false;
                    stickyMacAllowList = new String[]{{
                        add("amet"),
                    }};
                    stickyMacAllowListLimit = 800599L;
                    stormControlEnabled = false;
                    stpGuard = UpdateDeviceSwitchPortRequestBodyStpGuardEnum.ROOT_GUARD;
                    tags = new String[]{{
                        add("facere"),
                        add("numquam"),
                        add("aliquid"),
                    }};
                    type = UpdateDeviceSwitchPortRequestBodyTypeEnum.ACCESS;
                    udld = UpdateDeviceSwitchPortRequestBodyUdldEnum.ENFORCE;
                    vlan = 585681L;
                    voiceVlan = 635515L;
                }};;
            }};            

            UpdateDeviceSwitchPortResponse res = sdk.ports.updateDeviceSwitchPort(req);

            if (res.updateDeviceSwitchPort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePortRequest req = new UpdateNetworkAppliancePortRequest("quos", "repudiandae") {{
                requestBody = new UpdateNetworkAppliancePortRequestBody() {{
                    accessPolicy = "cupiditate";
                    allowedVlans = "a";
                    dropUntaggedTraffic = false;
                    enabled = false;
                    type = "laudantium";
                    vlan = 283235L;
                }};;
            }};            

            UpdateNetworkAppliancePortResponse res = sdk.ports.updateNetworkAppliancePort(req);

            if (res.updateNetworkAppliancePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigTemplateSwitchProfilePortRequest req = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest("ipsa", "iure", "neque", "voluptate") {{
                requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody() {{
                    accessPolicyNumber = 83475L;
                    accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum.CUSTOM_ACCESS_POLICY;
                    allowedVlans = "minima";
                    daiTrusted = false;
                    enabled = false;
                    flexibleStackingEnabled = false;
                    isolationEnabled = false;
                    linkNegotiation = "laudantium";
                    macAllowList = new String[]{{
                        add("aliquam"),
                        add("fugiat"),
                        add("ullam"),
                    }};
                    name = "Juan Lueilwitz";
                    poeEnabled = false;
                    portScheduleId = "maiores";
                    profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile() {{
                        enabled = false;
                        id = "a43e80b6-7d94-4f20-a9f7-af15bf0f8ada";
                        iname = "eum";
                    }};;
                    rstpEnabled = false;
                    stickyMacAllowList = new String[]{{
                        add("ipsum"),
                        add("necessitatibus"),
                        add("vero"),
                    }};
                    stickyMacAllowListLimit = 892838L;
                    stormControlEnabled = false;
                    stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum.BPDU_GUARD;
                    tags = new String[]{{
                        add("aliquid"),
                        add("saepe"),
                        add("esse"),
                    }};
                    type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum.TRUNK;
                    udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum.ALERT_ONLY;
                    vlan = 713488L;
                    voiceVlan = 525097L;
                }};;
            }};            

            UpdateOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.ports.updateOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
