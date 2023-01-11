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

            FirebasemlOperationsCancelRequest req = new FirebasemlOperationsCancelRequest() {{
                security = new FirebasemlOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new FirebasemlOperationsCancelPathParams() {{
                    name = "magnam";
                }};
                queryParams = new FirebasemlOperationsCancelQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptatem";
                    alt = "media";
                    callback = "non";
                    fields = "mollitia";
                    key = "qui";
                    oauthToken = "est";
                    prettyPrint = true;
                    quotaUser = "officiis";
                    uploadType = "molestiae";
                    uploadProtocol = "soluta";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("aut", "autem");
                    put("sed", "quas");
                }};
            }};

            FirebasemlOperationsCancelResponse res = sdk.operations.firebasemlOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->