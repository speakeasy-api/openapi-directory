<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption1;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption2;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurity;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryQueryParams;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryRequest;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryResponse;
import org.openapis.openapi.models.shared.QueryDriveActivityRequest;
import org.openapis.openapi.models.shared.ConsolidationStrategy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveactivityActivityQueryRequest req = new DriveactivityActivityQueryRequest() {{
                security = new DriveactivityActivityQuerySecurity() {{
                    option1 = new DriveactivityActivityQuerySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new DriveactivityActivityQueryQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new QueryDriveActivityRequest() {{
                    ancestorName = "deserunt";
                    consolidationStrategy = new ConsolidationStrategy() {{
                        legacy = new java.util.HashMap<String, Object>() {{
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                        none = new java.util.HashMap<String, Object>() {{
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                            put("iusto", "excepturi");
                        }};
                    }};
                    filter = "nisi";
                    itemName = "recusandae";
                    pageSize = 836079;
                    pageToken = "ab";
                }};
            }};            

            DriveactivityActivityQueryResponse res = sdk.activity.driveactivityActivityQuery(req);

            if (res.queryDriveActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->