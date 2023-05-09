# qualityAndRetention

### Available Operations

* [getDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [updateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera

## getDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraQualityAndRetentionRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraQualityAndRetentionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraQualityAndRetentionRequest req = new GetDeviceCameraQualityAndRetentionRequest("dolorem");            

            GetDeviceCameraQualityAndRetentionResponse res = sdk.qualityAndRetention.getDeviceCameraQualityAndRetention(req);

            if (res.getDeviceCameraQualityAndRetention200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCameraQualityAndRetentionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraQualityAndRetentionRequest req = new UpdateDeviceCameraQualityAndRetentionRequest("ea") {{
                requestBody = new UpdateDeviceCameraQualityAndRetentionRequestBody() {{
                    audioRecordingEnabled = false;
                    motionBasedRetentionEnabled = false;
                    motionDetectorVersion = UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum.TWO;
                    profileId = "laboriosam";
                    quality = UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum.HIGH;
                    resolution = UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum.TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
                    restrictedBandwidthModeEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraQualityAndRetentionResponse res = sdk.qualityAndRetention.updateDeviceCameraQualityAndRetention(req);

            if (res.updateDeviceCameraQualityAndRetention200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
