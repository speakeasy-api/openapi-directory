# welcomeAndHealthCheck

### Available Operations

* [get](#get) - /

## get

### Welcome & Health Check

Welcome to Herald! You can use the root endpoint to confirm HeraldAPI is available and you are able to successfully connect.

This endpoint does not require authentication.

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
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetResponse res = sdk.welcomeAndHealthCheck.get();

            if (res.get200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
