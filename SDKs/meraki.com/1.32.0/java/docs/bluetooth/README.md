# bluetooth

### Available Operations

* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network

## getDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessBluetoothSettingsRequest req = new GetDeviceWirelessBluetoothSettingsRequest("deleniti");            

            GetDeviceWirelessBluetoothSettingsResponse res = sdk.bluetooth.getDeviceWirelessBluetoothSettings(req);

            if (res.getDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessBluetoothSettingsRequest req = new GetNetworkWirelessBluetoothSettingsRequest("sit");            

            GetNetworkWirelessBluetoothSettingsResponse res = sdk.bluetooth.getNetworkWirelessBluetoothSettings(req);

            if (res.getNetworkWirelessBluetoothSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessBluetoothSettingsRequest req = new UpdateDeviceWirelessBluetoothSettingsRequest("natus") {{
                requestBody = new UpdateDeviceWirelessBluetoothSettingsRequestBody() {{
                    major = 29346L;
                    minor = 271216L;
                    uuid = "91160820-7888-4ec6-a183-bfe9659eb40e";
                }};;
            }};            

            UpdateDeviceWirelessBluetoothSettingsResponse res = sdk.bluetooth.updateDeviceWirelessBluetoothSettings(req);

            if (res.updateDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessBluetoothSettingsRequest req = new UpdateNetworkWirelessBluetoothSettingsRequest("sunt") {{
                requestBody = new UpdateNetworkWirelessBluetoothSettingsRequestBody() {{
                    advertisingEnabled = false;
                    major = 377430L;
                    majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum.UNIQUE;
                    minor = 670239L;
                    scanningEnabled = false;
                    uuid = "f75b0b53-2a4d-4a37-8baa-f4452c4842c9";
                }};;
            }};            

            UpdateNetworkWirelessBluetoothSettingsResponse res = sdk.bluetooth.updateNetworkWirelessBluetoothSettings(req);

            if (res.updateNetworkWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
