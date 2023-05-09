# videoLink

### Available Operations

* [getDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera

## getDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoLinkRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraVideoLinkRequest req = new GetDeviceCameraVideoLinkRequest("quas") {{
                timestamp = OffsetDateTime.parse("2021-07-18T18:52:18.575Z");
            }};            

            GetDeviceCameraVideoLinkResponse res = sdk.videoLink.getDeviceCameraVideoLink(req);

            if (res.getDeviceCameraVideoLink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
