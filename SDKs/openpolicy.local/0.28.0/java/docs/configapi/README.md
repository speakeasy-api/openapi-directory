# configAPI

### Available Operations

* [getConfig](#getconfig) - Get configurations

## getConfig

This API endpoint responds with active configuration (result response)

---
**Note**
The `credentials` field in the `services` configuration and

The `private_key` and `key` fields in the `keys` configuration will be omitted from the API response

---

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigRequest;
import org.openapis.openapi.models.operations.GetConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfigRequest req = new GetConfigRequest() {{
                pretty = false;
            }};            

            GetConfigResponse res = sdk.configAPI.getConfig(req);

            if (res.twoHundredSingleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
