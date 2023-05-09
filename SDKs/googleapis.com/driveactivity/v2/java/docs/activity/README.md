# activity

### Available Operations

* [driveactivityActivityQuery](#driveactivityactivityquery) - Query past activity in Google Drive.

## driveactivityActivityQuery

Query past activity in Google Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryRequest;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryResponse;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurity;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption1;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConsolidationStrategy;
import org.openapis.openapi.models.shared.QueryDriveActivityRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveactivityActivityQueryRequest req = new DriveactivityActivityQueryRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                queryDriveActivityRequest = new QueryDriveActivityRequest() {{
                    ancestorName = "perferendis";
                    consolidationStrategy = new ConsolidationStrategy() {{
                        legacy = new java.util.HashMap<String, Object>() {{
                            put("repellendus", "sapiente");
                            put("quo", "odit");
                        }};
                        none = new java.util.HashMap<String, Object>() {{
                            put("at", "maiores");
                            put("molestiae", "quod");
                            put("quod", "esse");
                            put("totam", "porro");
                        }};
                    }};;
                    filter = "dolorum";
                    itemName = "dicta";
                    pageSize = 720633;
                    pageToken = "officia";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "hic";
                key = "optio";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            DriveactivityActivityQueryResponse res = sdk.activity.driveactivityActivityQuery(req, new DriveactivityActivityQuerySecurity() {{
                option1 = new DriveactivityActivityQuerySecurityOption1("modi", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queryDriveActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
