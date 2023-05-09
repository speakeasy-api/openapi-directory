# stopScreenshotTest

### Available Operations

* [stopScreenshotsTest](#stopscreenshotstest) - Stop specified screenshot test

## stopScreenshotsTest

Stop specified screenshot test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopScreenshotsTestRequest;
import org.openapis.openapi.models.operations.StopScreenshotsTestResponse;
import org.openapis.openapi.models.operations.StopScreenshotsTestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopScreenshotsTestRequest req = new StopScreenshotsTestRequest("occaecati");            

            StopScreenshotsTestResponse res = sdk.stopScreenshotTest.stopScreenshotsTest(req, new StopScreenshotsTestSecurity("fugit", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.stopScreenshotSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
