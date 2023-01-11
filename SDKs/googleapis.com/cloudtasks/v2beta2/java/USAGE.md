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

            CloudtasksApiQueueUpdateRequest req = new CloudtasksApiQueueUpdateRequest() {{
                security = new CloudtasksApiQueueUpdateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new CloudtasksApiQueueUpdateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quo";
                    alt = "proto";
                    appId = "id";
                    callback = "deleniti";
                    fields = "enim";
                    key = "eum";
                    oauthToken = "nam";
                    prettyPrint = false;
                    quotaUser = "quia";
                    uploadType = "eum";
                    uploadProtocol = "qui";
                }};
                request = new HttpBody() {{
                    contentType = "et";
                    data = "velit";
                    extensions = new java.util.HashMap<String, Object>[]() {{
                        add(new java.util.HashMap<String, Object>() {{
                            put("qui", "quia");
                            put("voluptatum", "dolorum");
                        }}),
                    }};
                }};
            }};

            CloudtasksApiQueueUpdateResponse res = sdk.api.cloudtasksApiQueueUpdate(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->