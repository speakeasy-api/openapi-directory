# auth

### Available Operations

* [authLogin](#authlogin) - Authenticate and provide token for autherizations.
            

## authLogin

Authenticate and provide token for autherizations.
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthLoginResponse;
import org.openapis.openapi.models.shared.LoginDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LoginDTO req = new LoginDTO() {{
                password = "eum";
                remember = false;
                username = "Delores.Roob";
            }};            

            AuthLoginResponse res = sdk.auth.authLogin(req);

            if (res.authLogin200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
