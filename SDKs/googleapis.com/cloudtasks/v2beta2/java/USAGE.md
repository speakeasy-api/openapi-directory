<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateSecurity;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateQueryParams;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateRequest;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateResponse;
import org.openapis.openapi.models.shared.HttpBody;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    appId = "quibusdam";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new HttpBody() {{
                    contentType = "suscipit";
                    data = "iure";
                    extensions = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("ipsa", "delectus");
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
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