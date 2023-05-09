# getZippedScreenshots

### Available Operations

* [zippedScreenshots](#zippedscreenshots) - Fetch Zipped Screenshots

## zippedScreenshots

Fetch Zipped Screenshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ZippedScreenshotsRequest;
import org.openapis.openapi.models.operations.ZippedScreenshotsResponse;
import org.openapis.openapi.models.operations.ZippedScreenshotsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ZippedScreenshotsRequest req = new ZippedScreenshotsRequest("suscipit");            

            ZippedScreenshotsResponse res = sdk.getZippedScreenshots.zippedScreenshots(req, new ZippedScreenshotsSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.zippedScreenshotsSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
