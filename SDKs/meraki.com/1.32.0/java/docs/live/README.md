# live

### Available Operations

* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsLiveRequest req = new GetDeviceCameraAnalyticsLiveRequest("libero");            

            GetDeviceCameraAnalyticsLiveResponse res = sdk.live.getDeviceCameraAnalyticsLive(req);

            if (res.getDeviceCameraAnalyticsLive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
