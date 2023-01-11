<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostAuthRequest req = new PostAuthRequest() {{
                queryParams = new PostAuthQueryParams() {{
                    clientId = "velit";
                    clientSecret = "qui";
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