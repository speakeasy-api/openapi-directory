# statuses

### Available Operations

* [getDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [updateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

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
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesRequest req = new GetDeviceSwitchPortsStatusesRequest("ex") {{
                t0 = "cum";
                timespan = 4400.23;
            }};            

            GetDeviceSwitchPortsStatusesResponse res = sdk.statuses.getDeviceSwitchPortsStatuses(req);

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
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesPacketsRequest req = new GetDeviceSwitchPortsStatusesPacketsRequest("qui") {{
                t0 = "accusamus";
                timespan = 3627.1;
            }};            

            GetDeviceSwitchPortsStatusesPacketsResponse res = sdk.statuses.getDeviceSwitchPortsStatusesPackets(req);

            if (res.getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceUplinkStatusesRequest req = new GetOrganizationApplianceUplinkStatusesRequest("qui") {{
                endingBefore = "saepe";
                iccids = new String[]{{
                    add("omnis"),
                }};
                networkIds = new String[]{{
                    add("eum"),
                    add("repudiandae"),
                    add("accusantium"),
                }};
                perPage = 187085L;
                serials = new String[]{{
                    add("fugiat"),
                    add("numquam"),
                }};
                startingAfter = "sed";
            }};            

            GetOrganizationApplianceUplinkStatusesResponse res = sdk.statuses.getOrganizationApplianceUplinkStatuses(req);

            if (res.getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatusesRequest req = new GetOrganizationApplianceVpnStatusesRequest("nam") {{
                endingBefore = "minima";
                networkIds = new String[]{{
                    add("reiciendis"),
                }};
                perPage = 565732L;
                startingAfter = "sunt";
            }};            

            GetOrganizationApplianceVpnStatusesResponse res = sdk.statuses.getOrganizationApplianceVpnStatuses(req);

            if (res.getOrganizationApplianceVpnStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraOnboardingStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraOnboardingStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraOnboardingStatusesRequest req = new GetOrganizationCameraOnboardingStatusesRequest("nam") {{
                networkIds = new String[]{{
                    add("autem"),
                    add("unde"),
                    add("iusto"),
                    add("dolorum"),
                }};
                serials = new String[]{{
                    add("temporibus"),
                }};
            }};            

            GetOrganizationCameraOnboardingStatusesResponse res = sdk.statuses.getOrganizationCameraOnboardingStatuses(req);

            if (res.getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCellularGatewayUplinkStatusesRequest req = new GetOrganizationCellularGatewayUplinkStatusesRequest("ullam") {{
                endingBefore = "nemo";
                iccids = new String[]{{
                    add("illum"),
                }};
                networkIds = new String[]{{
                    add("quae"),
                    add("exercitationem"),
                    add("aspernatur"),
                    add("suscipit"),
                }};
                perPage = 346749L;
                serials = new String[]{{
                    add("id"),
                }};
                startingAfter = "voluptate";
            }};            

            GetOrganizationCellularGatewayUplinkStatusesResponse res = sdk.statuses.getOrganizationCellularGatewayUplinkStatuses(req);

            if (res.getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesPowerModulesStatusesByDeviceRequest req = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest("quisquam") {{
                endingBefore = "illo";
                networkIds = new String[]{{
                    add("minima"),
                }};
                perPage = 445133L;
                productTypes = new String[]{{
                    add("officia"),
                    add("laboriosam"),
                }};
                serials = new String[]{{
                    add("quo"),
                    add("libero"),
                    add("qui"),
                    add("ullam"),
                }};
                startingAfter = "earum";
                tags = new String[]{{
                    add("voluptate"),
                }};
                tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesPowerModulesStatusesByDeviceResponse res = sdk.statuses.getOrganizationDevicesPowerModulesStatusesByDevice(req);

            if (res.getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatuses

List the status of every Meraki device in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesStatusesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesRequest req = new GetOrganizationDevicesStatusesRequest("hic") {{
                endingBefore = "aliquid";
                models = new String[]{{
                    add("molestias"),
                    add("nisi"),
                    add("accusantium"),
                    add("culpa"),
                }};
                networkIds = new String[]{{
                    add("dolores"),
                    add("sit"),
                    add("et"),
                    add("vero"),
                }};
                perPage = 326837L;
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesProductTypesEnum.SYSTEMS_MANAGER),
                    add(GetOrganizationDevicesStatusesProductTypesEnum.APPLIANCE),
                }};
                serials = new String[]{{
                    add("perspiciatis"),
                    add("beatae"),
                }};
                startingAfter = "repellendus";
                statuses = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesStatusesEnum[]{{
                    add(GetOrganizationDevicesStatusesStatusesEnum.ONLINE),
                    add(GetOrganizationDevicesStatusesStatusesEnum.DORMANT),
                    add(GetOrganizationDevicesStatusesStatusesEnum.ONLINE),
                }};
                tags = new String[]{{
                    add("quae"),
                }};
                tagsFilterType = GetOrganizationDevicesStatusesTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesStatusesResponse res = sdk.statuses.getOrganizationDevicesStatuses(req);

            if (res.getOrganizationDevicesStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesOverviewRequest req = new GetOrganizationDevicesStatusesOverviewRequest("quisquam") {{
                networkIds = new String[]{{
                    add("recusandae"),
                    add("quod"),
                    add("ipsum"),
                    add("velit"),
                }};
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.SWITCH_),
                }};
            }};            

            GetOrganizationDevicesStatusesOverviewResponse res = sdk.statuses.getOrganizationDevicesStatusesOverview(req);

            if (res.getOrganizationDevicesStatusesOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationUplinksStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationUplinksStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationUplinksStatusesRequest req = new GetOrganizationUplinksStatusesRequest("eveniet") {{
                endingBefore = "porro";
                iccids = new String[]{{
                    add("in"),
                    add("aspernatur"),
                }};
                networkIds = new String[]{{
                    add("veritatis"),
                    add("voluptatum"),
                    add("id"),
                }};
                perPage = 257455L;
                serials = new String[]{{
                    add("dignissimos"),
                    add("corrupti"),
                    add("cum"),
                }};
                startingAfter = "blanditiis";
            }};            

            GetOrganizationUplinksStatusesResponse res = sdk.statuses.getOrganizationUplinksStatuses(req);

            if (res.getOrganizationUplinksStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWirelessDevicesEthernetStatusesRequest req = new GetOrganizationWirelessDevicesEthernetStatusesRequest("quod") {{
                endingBefore = "quis";
                networkIds = new String[]{{
                    add("magni"),
                }};
                perPage = 121740L;
                startingAfter = "nisi";
            }};            

            GetOrganizationWirelessDevicesEthernetStatusesResponse res = sdk.statuses.getOrganizationWirelessDevicesEthernetStatuses(req);

            if (res.getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationCameraOnboardingStatusesRequest req = new UpdateOrganizationCameraOnboardingStatusesRequest("dicta") {{
                requestBody = new UpdateOrganizationCameraOnboardingStatusesRequestBody() {{
                    serial = "officia";
                    wirelessCredentialsSent = false;
                }};;
            }};            

            UpdateOrganizationCameraOnboardingStatusesResponse res = sdk.statuses.updateOrganizationCameraOnboardingStatuses(req);

            if (res.updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
