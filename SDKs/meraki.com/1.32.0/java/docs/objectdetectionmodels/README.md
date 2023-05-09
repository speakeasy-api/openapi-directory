# objectDetectionModels

### Available Operations

* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera

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
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraSenseObjectDetectionModelsRequest req = new GetDeviceCameraSenseObjectDetectionModelsRequest("similique");            

            GetDeviceCameraSenseObjectDetectionModelsResponse res = sdk.objectDetectionModels.getDeviceCameraSenseObjectDetectionModels(req);

            if (res.getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
