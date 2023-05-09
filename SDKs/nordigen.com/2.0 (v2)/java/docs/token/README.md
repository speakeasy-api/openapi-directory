# token

### Available Operations

* [jwtObtain](#jwtobtain) - Obtain JWT pair
* [jwtRefresh](#jwtrefresh) - Refresh access token

## jwtObtain

Obtain JWT pair

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JWTObtainResponse;
import org.openapis.openapi.models.shared.JWTObtainPairRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.JWTObtainPairRequest req = new JWTObtainPairRequest("cum", "iure");            

            JWTObtainResponse res = sdk.token.jwtObtain(req);

            if (res.spectacularJWTObtain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jwtRefresh

Refresh access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JWTRefreshResponse;
import org.openapis.openapi.models.shared.JWTRefreshRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.JWTRefreshRequest req = new JWTRefreshRequest("ratione");            

            JWTRefreshResponse res = sdk.token.jwtRefresh(req);

            if (res.spectacularJWTRefresh != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
