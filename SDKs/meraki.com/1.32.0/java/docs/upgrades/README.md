# upgrades

### Available Operations

* [getOrganizationFirmwareUpgrades](#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

## getOrganizationFirmwareUpgrades

Get firmware upgrade information for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationFirmwareUpgradesRequest;
import org.openapis.openapi.models.operations.GetOrganizationFirmwareUpgradesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationFirmwareUpgradesRequest req = new GetOrganizationFirmwareUpgradesRequest("rem") {{
                productType = new String[]{{
                    add("ipsa"),
                    add("repellat"),
                    add("ea"),
                }};
                status = new String[]{{
                    add("eligendi"),
                }};
            }};            

            GetOrganizationFirmwareUpgradesResponse res = sdk.upgrades.getOrganizationFirmwareUpgrades(req);

            if (res.getOrganizationFirmwareUpgrades200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationFirmwareUpgradesByDeviceRequest req = new GetOrganizationFirmwareUpgradesByDeviceRequest("illo") {{
                endingBefore = "nulla";
                firmwareUpgradeBatchIds = new String[]{{
                    add("commodi"),
                }};
                firmwareUpgradeIds = new String[]{{
                    add("accusantium"),
                    add("eveniet"),
                }};
                macs = new String[]{{
                    add("dicta"),
                    add("mollitia"),
                    add("id"),
                }};
                networkIds = new String[]{{
                    add("officiis"),
                    add("laborum"),
                    add("aliquid"),
                }};
                perPage = 121320L;
                serials = new String[]{{
                    add("deserunt"),
                    add("aliquid"),
                    add("in"),
                }};
                startingAfter = "delectus";
            }};            

            GetOrganizationFirmwareUpgradesByDeviceResponse res = sdk.upgrades.getOrganizationFirmwareUpgradesByDevice(req);

            if (res.getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
