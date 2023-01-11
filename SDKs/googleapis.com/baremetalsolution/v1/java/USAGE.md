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

            BaremetalsolutionOperationsCancelRequest req = new BaremetalsolutionOperationsCancelRequest() {{
                security = new BaremetalsolutionOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaremetalsolutionOperationsCancelPathParams() {{
                    name = "dolores";
                }};
                queryParams = new BaremetalsolutionOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aperiam";
                    alt = "proto";
                    callback = "rerum";
                    fields = "animi";
                    key = "nesciunt";
                    oauthToken = "ut";
                    prettyPrint = false;
                    quotaUser = "ut";
                    uploadType = "velit";
                    uploadProtocol = "velit";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("doloribus", "praesentium");
                    put("et", "voluptatem");
                    put("quae", "soluta");
                }};
            }};

            BaremetalsolutionOperationsCancelResponse res = sdk.operations.baremetalsolutionOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->