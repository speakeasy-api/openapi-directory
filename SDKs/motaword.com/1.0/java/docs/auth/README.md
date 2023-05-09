# auth

### Available Operations

* [getAccessToken](#getaccesstoken) - Retrieve an access token

## getAccessToken

MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessTokenResponse;
import org.openapis.openapi.models.operations.GetAccessTokenSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TokenRequest req = new TokenRequest("totam", "porro") {{
                password = "dolorum";
                refreshToken = "dicta";
                userId = 720633L;
                username = "Lucie53";
            }};            

            GetAccessTokenResponse res = sdk.auth.getAccessToken(req, new GetAccessTokenSecurity("hic", "optio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
