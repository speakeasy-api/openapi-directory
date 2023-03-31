<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchUserSecurity;
import org.openapis.openapi.models.operations.FetchUserPathParams;
import org.openapis.openapi.models.operations.FetchUserRequest;
import org.openapis.openapi.models.operations.FetchUserResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserRequest req = new FetchUserRequest() {{
                security = new FetchUserSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new FetchUserPathParams() {{
                    sid = "corrupti";
                }};
            }};            

            FetchUserResponse res = sdk.fetchUser(req);

            if (res.frontlineV1User.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->