# byDevice

### Available Operations

* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest("ex") {{
                endingBefore = "amet";
                perPage = 454386L;
                startingAfter = "molestias";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse res = sdk.byDevice.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesPowerModulesStatusesByDeviceRequest req = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest("ipsum") {{
                endingBefore = "hic";
                networkIds = new String[]{{
                    add("odit"),
                    add("molestiae"),
                    add("accusamus"),
                }};
                perPage = 159009L;
                productTypes = new String[]{{
                    add("doloribus"),
                }};
                serials = new String[]{{
                    add("aliquid"),
                    add("consequuntur"),
                    add("laboriosam"),
                }};
                startingAfter = "nemo";
                tags = new String[]{{
                    add("soluta"),
                    add("ipsum"),
                }};
                tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum.WITH_ALL_TAGS;
            }};            

            GetOrganizationDevicesPowerModulesStatusesByDeviceResponse res = sdk.byDevice.getOrganizationDevicesPowerModulesStatusesByDevice(req);

            if (res.getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksAddressesByDeviceRequest req = new GetOrganizationDevicesUplinksAddressesByDeviceRequest("maxime") {{
                endingBefore = "vel";
                networkIds = new String[]{{
                    add("cupiditate"),
                    add("hic"),
                    add("quis"),
                }};
                perPage = 534156L;
                productTypes = new String[]{{
                    add("quod"),
                    add("saepe"),
                }};
                serials = new String[]{{
                    add("magni"),
                    add("nostrum"),
                }};
                startingAfter = "minus";
                tags = new String[]{{
                    add("quam"),
                    add("ea"),
                }};
                tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum.WITH_ALL_TAGS;
            }};            

            GetOrganizationDevicesUplinksAddressesByDeviceResponse res = sdk.byDevice.getOrganizationDevicesUplinksAddressesByDevice(req);

            if (res.getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationFirmwareUpgradesByDevice

Get firmware upgrade status for the filtered devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationFirmwareUpgradesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationFirmwareUpgradesByDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationFirmwareUpgradesByDeviceRequest req = new GetOrganizationFirmwareUpgradesByDeviceRequest("fuga") {{
                endingBefore = "totam";
                firmwareUpgradeBatchIds = new String[]{{
                    add("quasi"),
                }};
                firmwareUpgradeIds = new String[]{{
                    add("officiis"),
                }};
                macs = new String[]{{
                    add("quae"),
                    add("dolore"),
                }};
                networkIds = new String[]{{
                    add("libero"),
                    add("ut"),
                }};
                perPage = 766005L;
                serials = new String[]{{
                    add("beatae"),
                }};
                startingAfter = "porro";
            }};            

            GetOrganizationFirmwareUpgradesByDeviceResponse res = sdk.byDevice.getOrganizationFirmwareUpgradesByDevice(req);

            if (res.getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
