<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ReportsActivitiesListSecurity;
import org.openapis.openapi.models.operations.ReportsActivitiesListApplicationNameEnum;
import org.openapis.openapi.models.operations.ReportsActivitiesListPathParams;
import org.openapis.openapi.models.operations.ReportsActivitiesListQueryParams;
import org.openapis.openapi.models.operations.ReportsActivitiesListRequest;
import org.openapis.openapi.models.operations.ReportsActivitiesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    applicationName = "meet";
                    userKey = "provident";
                }};
                queryParams = new ReportsActivitiesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    actorIpAddress = "unde";
                    alt = "proto";
                    callback = "corrupti";
                    customerId = "illum";
                    endTime = "vel";
                    eventName = "error";
                    fields = "deserunt";
                    filters = "suscipit";
                    groupIdFilter = "iure";
                    key = "magnam";
                    maxResults = 891773;
                    oauthToken = "ipsa";
                    orgUnitID = "delectus";
                    pageToken = "tempora";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    startTime = "molestiae";
                    uploadType = "minus";
                    uploadProtocol = "placeat";
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