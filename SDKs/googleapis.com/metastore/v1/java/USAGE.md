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

            MetastoreOperationsCancelRequest req = new MetastoreOperationsCancelRequest() {{
                security = new MetastoreOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MetastoreOperationsCancelPathParams() {{
                    name = "earum";
                }};
                queryParams = new MetastoreOperationsCancelQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolor";
                    alt = "media";
                    callback = "modi";
                    fields = "voluptas";
                    key = "quam";
                    oauthToken = "commodi";
                    prettyPrint = false;
                    quotaUser = "ratione";
                    uploadType = "repudiandae";
                    uploadProtocol = "velit";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("enim", "dignissimos");
                }};
            }};

            MetastoreOperationsCancelResponse res = sdk.operations.metastoreOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->