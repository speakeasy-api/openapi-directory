# getOSBrowsers

### Available Operations

* [osBrowsers](#osbrowsers) - Fetch all available os-browser combinations.

## osBrowsers

Fetch all os browsers combinations available on lambdatest platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsBrowsersRequest;
import org.openapis.openapi.models.operations.OsBrowsersResponse;
import org.openapis.openapi.models.operations.OsBrowsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsBrowsersRequest req = new OsBrowsersRequest() {{
                os = "vel";
            }};            

            OsBrowsersResponse res = sdk.getOSBrowsers.osBrowsers(req, new OsBrowsersSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.osBrowsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
