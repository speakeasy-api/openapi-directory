<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsActivitiesListApplicationNameEnum;
import org.openapis.openapi.models.operations.ReportsActivitiesListRequest;
import org.openapis.openapi.models.operations.ReportsActivitiesListResponse;
import org.openapis.openapi.models.operations.ReportsActivitiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsActivitiesListRequest req = new ReportsActivitiesListRequest(ReportsActivitiesListApplicationNameEnum.MEET, "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                actorIpAddress = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                customerId = "illum";
                endTime = "vel";
                eventName = "error";
                fields = "deserunt";
                filters = "suscipit";
                groupIdFilter = "iure";
                key = "magnam";
                maxResults = 891773L;
                oauthToken = "ipsa";
                orgUnitID = "delectus";
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                startTime = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            ReportsActivitiesListResponse res = sdk.activities.reportsActivitiesList(req, new ReportsActivitiesListSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->