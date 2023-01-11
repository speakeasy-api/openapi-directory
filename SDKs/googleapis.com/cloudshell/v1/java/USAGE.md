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

            CloudshellOperationsCancelRequest req = new CloudshellOperationsCancelRequest() {{
                security = new CloudshellOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudshellOperationsCancelPathParams() {{
                    name = "similique";
                }};
                queryParams = new CloudshellOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "alias";
                    alt = "proto";
                    callback = "fugiat";
                    fields = "nihil";
                    key = "nulla";
                    oauthToken = "consequatur";
                    prettyPrint = true;
                    quotaUser = "voluptatibus";
                    uploadType = "provident";
                    uploadProtocol = "nostrum";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("laudantium", "et");
                    put("omnis", "et");
                    put("eius", "earum");
                }};
            }};

            CloudshellOperationsCancelResponse res = sdk.operations.cloudshellOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->