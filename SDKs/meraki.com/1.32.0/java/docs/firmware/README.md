# firmware

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
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationFirmwareUpgradesRequest req = new GetOrganizationFirmwareUpgradesRequest("similique") {{
                productType = new String[]{{
                    add("necessitatibus"),
                    add("iure"),
                }};
                status = new String[]{{
                    add("nulla"),
                    add("eum"),
                    add("reiciendis"),
                    add("dignissimos"),
                }};
            }};            

            GetOrganizationFirmwareUpgradesResponse res = sdk.firmware.getOrganizationFirmwareUpgrades(req);

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
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationFirmwareUpgradesByDeviceRequest req = new GetOrganizationFirmwareUpgradesByDeviceRequest("asperiores") {{
                endingBefore = "eaque";
                firmwareUpgradeBatchIds = new String[]{{
                    add("asperiores"),
                    add("pariatur"),
                }};
                firmwareUpgradeIds = new String[]{{
                    add("perferendis"),
                    add("non"),
                    add("commodi"),
                }};
                macs = new String[]{{
                    add("cupiditate"),
                    add("officiis"),
                }};
                networkIds = new String[]{{
                    add("voluptates"),
                    add("quas"),
                    add("sunt"),
                }};
                perPage = 533953L;
                serials = new String[]{{
                    add("tempora"),
                }};
                startingAfter = "aperiam";
            }};            

            GetOrganizationFirmwareUpgradesByDeviceResponse res = sdk.firmware.getOrganizationFirmwareUpgradesByDevice(req);

            if (res.getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
