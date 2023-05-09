# bluetoothSettings

### Available Operations

* [getNetworkBluetoothSettings](#getnetworkbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateNetworkBluetoothSettings](#updatenetworkbluetoothsettings) - Update the Bluetooth settings for a network

## getNetworkBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothSettingsRequest req = new GetNetworkBluetoothSettingsRequest("excepturi");            

            GetNetworkBluetoothSettingsResponse res = sdk.bluetoothSettings.getNetworkBluetoothSettings(req);

            if (res.getNetworkBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessBluetoothSettingsRequest req = new UpdateDeviceWirelessBluetoothSettingsRequest("ea") {{
                requestBody = new UpdateDeviceWirelessBluetoothSettingsRequestBody() {{
                    major = 33222L;
                    minor = 69167L;
                    uuid = "fb576b0d-5f0d-430c-9fbb-2587053202c7";
                }};;
            }};            

            UpdateDeviceWirelessBluetoothSettingsResponse res = sdk.bluetoothSettings.updateDeviceWirelessBluetoothSettings(req);

            if (res.updateDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkBluetoothSettingsRequest req = new UpdateNetworkBluetoothSettingsRequest("vero") {{
                requestBody = new UpdateNetworkBluetoothSettingsRequestBody() {{
                    advertisingEnabled = false;
                    major = 345352L;
                    majorMinorAssignmentMode = UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum.UNIQUE;
                    minor = 928082L;
                    scanningEnabled = false;
                    uuid = "9b90c289-09b3-4fe4-9a8d-9cbf48633323";
                }};;
            }};            

            UpdateNetworkBluetoothSettingsResponse res = sdk.bluetoothSettings.updateNetworkBluetoothSettings(req);

            if (res.updateNetworkBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
