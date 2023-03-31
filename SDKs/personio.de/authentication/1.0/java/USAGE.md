<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostAuthQueryParams;
import org.openapis.openapi.models.operations.PostAuthRequest;
import org.openapis.openapi.models.operations.PostAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthRequest req = new PostAuthRequest() {{
                queryParams = new PostAuthQueryParams() {{
                    clientId = "corrupti";
                    clientSecret = "provident";
                }};
            }};            

            PostAuthResponse res = sdk.postAuth(req);

            if (res.authenticationTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->