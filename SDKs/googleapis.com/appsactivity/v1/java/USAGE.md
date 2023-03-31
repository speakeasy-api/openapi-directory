<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AppsactivityActivitiesListSecurity;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListGroupingStrategyEnum;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListQueryParams;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListRequest;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsactivityActivitiesListRequest req = new AppsactivityActivitiesListRequest() {{
                security = new AppsactivityActivitiesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AppsactivityActivitiesListQueryParams() {{
                    alt = "json";
                    driveAncestorId = "corrupti";
                    driveFileId = "provident";
                    fields = "distinctio";
                    groupingStrategy = "none";
                    key = "unde";
                    oauthToken = "nulla";
                    pageSize = 544883;
                    pageToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    source = "error";
                    userId = "deserunt";
                    userIp = "suscipit";
                }};
            }};            

            AppsactivityActivitiesListResponse res = sdk.activities.appsactivityActivitiesList(req);

            if (res.listActivitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->