# apiInfo

### Available Operations

* [get](#get) - List supported endpoints URLs

## get

Responds with all supported endpoints URLs for v2 version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResponse res = sdk.apiInfo.get();

            if (res.get200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
