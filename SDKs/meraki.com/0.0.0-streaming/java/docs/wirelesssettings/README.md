# wirelessSettings

### Available Operations

* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network

## getNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSettingsRequest req = new GetNetworkWirelessSettingsRequest("saepe");            

            GetNetworkWirelessSettingsResponse res = sdk.wirelessSettings.getNetworkWirelessSettings(req);

            if (res.getNetworkWirelessSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSettingsRequest req = new UpdateNetworkWirelessSettingsRequest("officia") {{
                requestBody = new UpdateNetworkWirelessSettingsRequestBody() {{
                    ipv6BridgeEnabled = false;
                    ledLightsOn = false;
                    locationAnalyticsEnabled = false;
                    meshingEnabled = false;
                    upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum.MINIMIZE_UPGRADE_TIME;
                }};;
            }};            

            UpdateNetworkWirelessSettingsResponse res = sdk.wirelessSettings.updateNetworkWirelessSettings(req);

            if (res.updateNetworkWirelessSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
