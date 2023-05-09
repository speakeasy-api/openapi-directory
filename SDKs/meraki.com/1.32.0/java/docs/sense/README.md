# sense

### Available Operations

* [getDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [updateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera

## getDeviceCameraSense

Returns sense settings for a given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraSenseRequest req = new GetDeviceCameraSenseRequest("veniam");            

            GetDeviceCameraSenseResponse res = sdk.sense.getDeviceCameraSense(req);

            if (res.getDeviceCameraSense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseObjectDetectionModelsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraSenseObjectDetectionModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraSenseObjectDetectionModelsRequest req = new GetDeviceCameraSenseObjectDetectionModelsRequest("recusandae");            

            GetDeviceCameraSenseObjectDetectionModelsResponse res = sdk.sense.getDeviceCameraSenseObjectDetectionModels(req);

            if (res.getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraSense

Update sense settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseRequestBodyAudioDetection;
import org.openapis.openapi.models.operations.UpdateDeviceCameraSenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraSenseRequest req = new UpdateDeviceCameraSenseRequest("aspernatur") {{
                requestBody = new UpdateDeviceCameraSenseRequestBody() {{
                    audioDetection = new UpdateDeviceCameraSenseRequestBodyAudioDetection() {{
                        enabled = false;
                    }};;
                    detectionModelId = "ratione";
                    mqttBrokerId = "quisquam";
                    senseEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraSenseResponse res = sdk.sense.updateDeviceCameraSense(req);

            if (res.updateDeviceCameraSense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
