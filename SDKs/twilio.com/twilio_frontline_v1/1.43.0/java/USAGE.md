<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserRequest;
import org.openapis.openapi.models.operations.FetchUserResponse;
import org.openapis.openapi.models.operations.FetchUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserRequest req = new FetchUserRequest("corrupti");            

            FetchUserResponse res = sdk.fetchUser(req, new FetchUserSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.frontlineV1User != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->