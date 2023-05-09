# users

### Available Operations

* [getUser](#getuser) - Get info about the current user

## getUser

Get info about the current user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.operations.GetUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserResponse res = sdk.users.getUser(new GetUserSecurity("eaque") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
