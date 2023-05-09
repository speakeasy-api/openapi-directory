<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListGroupingStrategyEnum;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListRequest;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListResponse;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsactivityActivitiesListRequest req = new AppsactivityActivitiesListRequest() {{
                alt = AltEnum.JSON;
                driveAncestorId = "corrupti";
                driveFileId = "provident";
                fields = "distinctio";
                groupingStrategy = AppsactivityActivitiesListGroupingStrategyEnum.NONE;
                key = "unde";
                oauthToken = "nulla";
                pageSize = 544883L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                source = "error";
                userId = "deserunt";
                userIp = "suscipit";
            }};            

            AppsactivityActivitiesListResponse res = sdk.activities.appsactivityActivitiesList(req, new AppsactivityActivitiesListSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listActivitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->