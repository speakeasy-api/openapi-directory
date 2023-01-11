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
                    driveAncestorId = "voluptas";
                    driveFileId = "culpa";
                    fields = "expedita";
                    groupingStrategy = "none";
                    key = "dolor";
                    oauthToken = "expedita";
                    pageSize = 6044372234677422456;
                    pageToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    source = "rerum";
                    userId = "dicta";
                    userIp = "debitis";
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