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
                    driveAncestorId = "cumque";
                    driveFileId = "odit";
                    fields = "tempore";
                    groupingStrategy = "driveUi";
                    key = "dignissimos";
                    oauthToken = "eaque";
                    pageSize = 6459970098233138989;
                    pageToken = "neque";
                    prettyPrint = false;
                    quotaUser = "quas";
                    source = "autem";
                    userId = "qui";
                    userIp = "est";
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