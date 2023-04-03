<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ReportsActivitiesListSecurity;
import org.openapis.openapi.models.operations.ReportsActivitiesListApplicationNameEnum;
import org.openapis.openapi.models.operations.ReportsActivitiesListRequest;
import org.openapis.openapi.models.operations.ReportsActivitiesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsActivitiesListRequest req = new ReportsActivitiesListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                actorIpAddress = "distinctio";
                alt = "proto";
                applicationName = "mobile";
                callback = "nulla";
                customerId = "corrupti";
                endTime = "illum";
                eventName = "vel";
                fields = "error";
                filters = "deserunt";
                groupIdFilter = "suscipit";
                key = "iure";
                maxResults = 297534;
                oauthToken = "debitis";
                orgUnitID = "ipsa";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                startTime = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
                userKey = "placeat";
            }}            

            ReportsActivitiesListResponse res = sdk.activities.reportsActivitiesList(req, new ReportsActivitiesListSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.activities.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->