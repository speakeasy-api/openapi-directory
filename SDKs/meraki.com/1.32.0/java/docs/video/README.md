# video

### Available Operations

* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraVideoSettingsRequest req = new GetDeviceCameraVideoSettingsRequest("commodi");            

            GetDeviceCameraVideoSettingsResponse res = sdk.video.getDeviceCameraVideoSettings(req);

            if (res.getDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraVideoSettingsRequest req = new UpdateDeviceCameraVideoSettingsRequest("quas") {{
                requestBody = new UpdateDeviceCameraVideoSettingsRequestBody() {{
                    externalRtspEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraVideoSettingsResponse res = sdk.video.updateDeviceCameraVideoSettings(req);

            if (res.updateDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
