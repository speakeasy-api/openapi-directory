<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateSecurity;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateRequest;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpBody;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksApiQueueUpdateRequest req = new CloudtasksApiQueueUpdateRequest() {{
                dollarXgafv = "2";
                httpBody = new HttpBody() {{
                    contentType = "provident";
                    data = "distinctio";
                    extensions = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("nulla", "corrupti");
                            put("illum", "vel");
                            put("error", "deserunt");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                            put("iusto", "excepturi");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("recusandae", "temporibus");
                            put("ab", "quis");
                        }}),
                    }};
                }};
                accessToken = "veritatis";
                alt = "media";
                appId = "perferendis";
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }}            

            CloudtasksApiQueueUpdateResponse res = sdk.api.cloudtasksApiQueueUpdate(req, new CloudtasksApiQueueUpdateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->