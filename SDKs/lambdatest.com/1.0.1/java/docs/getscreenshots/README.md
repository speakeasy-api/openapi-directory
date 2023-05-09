# getScreenshots

### Available Operations

* [screenshots](#screenshots) - Fetch specified screenshot details

## screenshots

To fetch specified screenshot details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScreenshotsRequest;
import org.openapis.openapi.models.operations.ScreenshotsResponse;
import org.openapis.openapi.models.operations.ScreenshotsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScreenshotsRequest req = new ScreenshotsRequest("ipsa");            

            ScreenshotsResponse res = sdk.getScreenshots.screenshots(req, new ScreenshotsSecurity("delectus", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.screenshotDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
