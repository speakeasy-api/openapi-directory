<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AuthTokenRequest;
import org.openapis.openapi.models.operations.AuthTokenResponse;
import org.openapis.openapi.models.shared.TokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthTokenRequest req = new AuthTokenRequest() {{
                request = new TokenRequest() {{
                    clientId = "00000000-0000-0000-0000-00000000000";
                    clientSecret = "00000000-0000-0000-0000-00000000000";
                    grantType = "client_credentials";
                }};
            }};            

            AuthTokenResponse res = sdk.authentication.authToken(req);

            if (res.tokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->