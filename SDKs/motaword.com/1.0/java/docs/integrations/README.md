# integrations

### Available Operations

* [getIntegrationsToken](#getintegrationstoken) - Generate a new access token for MotaWord's integrations service

## getIntegrationsToken

Generate a new access token for MotaWord's integrations service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationsTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetIntegrationsTokenResponse res = sdk.integrations.getIntegrationsToken();

            if (res.integrationsToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
