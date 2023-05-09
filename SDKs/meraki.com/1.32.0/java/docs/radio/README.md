# radio

### Available Operations

* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device

## getDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessRadioSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessRadioSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessRadioSettingsRequest req = new GetDeviceWirelessRadioSettingsRequest("iusto");            

            GetDeviceWirelessRadioSettingsResponse res = sdk.radio.getDeviceWirelessRadioSettings(req);

            if (res.getDeviceWirelessRadioSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessRadioSettingsRequest req = new UpdateDeviceWirelessRadioSettingsRequest("beatae") {{
                requestBody = new UpdateDeviceWirelessRadioSettingsRequestBody() {{
                    fiveGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings() {{
                        channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum.ONE_HUNDRED_AND_TWELVE;
                        channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum.EIGHTY;
                        targetPower = 142145L;
                    }};;
                    rfProfileId = "porro";
                    twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings() {{
                        channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum.SEVEN;
                        targetPower = 922377L;
                    }};;
                }};;
            }};            

            UpdateDeviceWirelessRadioSettingsResponse res = sdk.radio.updateDeviceWirelessRadioSettings(req);

            if (res.updateDeviceWirelessRadioSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
