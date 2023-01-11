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

            ReportsActivitiesListRequest req = new ReportsActivitiesListRequest() {{
                security = new ReportsActivitiesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ReportsActivitiesListPathParams() {{
                    applicationName = "mobile";
                    userKey = "voluptas";
                }};
                queryParams = new ReportsActivitiesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "expedita";
                    actorIpAddress = "consequuntur";
                    alt = "media";
                    callback = "expedita";
                    customerId = "voluptas";
                    endTime = "fugit";
                    eventName = "et";
                    fields = "nihil";
                    filters = "rerum";
                    groupIdFilter = "dicta";
                    key = "debitis";
                    maxResults = 5617773211005988520;
                    oauthToken = "et";
                    orgUnitID = "ut";
                    pageToken = "dolorem";
                    prettyPrint = false;
                    quotaUser = "voluptate";
                    startTime = "iste";
                    uploadType = "vitae";
                    uploadProtocol = "totam";
                }};
            }};

            ReportsActivitiesListResponse res = sdk.activities.reportsActivitiesList(req);

            if (res.activities.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->