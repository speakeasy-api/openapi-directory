<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption1;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption2;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurity;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryRequest;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryDriveActivityRequest;
import org.openapis.openapi.models.shared.ConsolidationStrategy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveactivityActivityQueryRequest req = new DriveactivityActivityQueryRequest() {{
                dollarXgafv = "2";
                queryDriveActivityRequest = new QueryDriveActivityRequest() {{
                    ancestorName = "provident";
                    consolidationStrategy = new ConsolidationStrategy() {{
                        legacy = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                            put("illum", "vel");
                        }};
                        none = new java.util.HashMap<String, Object>() {{
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                    }};
                    filter = "delectus";
                    itemName = "tempora";
                    pageSize = 383441;
                    pageToken = "molestiae";
                }};
                accessToken = "minus";
                alt = "proto";
                callback = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
            }}            

            DriveactivityActivityQueryResponse res = sdk.activity.driveactivityActivityQuery(req, new DriveactivityActivityQuerySecurity() {{
                option1 = new DriveactivityActivityQuerySecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queryDriveActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->