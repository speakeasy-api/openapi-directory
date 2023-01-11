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
                    applicationName = "token";
                    userKey = "dolor";
                }};
                queryParams = new ReportsActivitiesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "animi";
                    actorIpAddress = "ut";
                    alt = "media";
                    callback = "maiores";
                    customerId = "in";
                    endTime = "est";
                    eventName = "id";
                    fields = "ea";
                    filters = "omnis";
                    groupIdFilter = "pariatur";
                    key = "id";
                    maxResults = 7472755522613843569;
                    oauthToken = "esse";
                    orgUnitID = "in";
                    pageToken = "amet";
                    prettyPrint = false;
                    quotaUser = "et";
                    startTime = "nesciunt";
                    uploadType = "ab";
                    uploadProtocol = "aut";
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