# recent

### Available Operations

* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsRecentRequest req = new GetDeviceCameraAnalyticsRecentRequest("tempora") {{
                objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum.PERSON;
            }};            

            GetDeviceCameraAnalyticsRecentResponse res = sdk.recent.getDeviceCameraAnalyticsRecent(req);

            if (res.getDeviceCameraAnalyticsRecent200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
