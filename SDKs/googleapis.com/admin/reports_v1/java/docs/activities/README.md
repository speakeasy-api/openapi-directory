# activities

### Available Operations

* [reportsActivitiesList](#reportsactivitieslist) - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* [reportsActivitiesWatch](#reportsactivitieswatch) - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

## reportsActivitiesList

Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 

### Example Usage

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

            ReportsActivitiesListRequest req = new ReportsActivitiesListRequest(ReportsActivitiesListApplicationNameEnum.MEET, "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                actorIpAddress = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                customerId = "deserunt";
                endTime = "perferendis";
                eventName = "ipsam";
                fields = "repellendus";
                filters = "sapiente";
                groupIdFilter = "quo";
                key = "odit";
                maxResults = 870013L;
                oauthToken = "at";
                orgUnitID = "maiores";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                startTime = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            ReportsActivitiesListResponse res = sdk.activities.reportsActivitiesList(req, new ReportsActivitiesListSecurity("porro", "dolorum") {{
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

## reportsActivitiesWatch

Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsActivitiesWatchApplicationNameEnum;
import org.openapis.openapi.models.operations.ReportsActivitiesWatchRequest;
import org.openapis.openapi.models.operations.ReportsActivitiesWatchResponse;
import org.openapis.openapi.models.operations.ReportsActivitiesWatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsActivitiesWatchRequest req = new ReportsActivitiesWatchRequest(ReportsActivitiesWatchApplicationNameEnum.CALENDAR, "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                channel = new Channel() {{
                    address = "1597 Breitenberg Isle";
                    expiration = "molestiae";
                    id = "42cb7392-0592-4939-afea-7596eb10faaa";
                    kind = "dolores";
                    params = new java.util.HashMap<String, String>() {{
                        put("corporis", "explicabo");
                    }};
                    payload = false;
                    resourceId = "nobis";
                    resourceUri = "enim";
                    token = "omnis";
                    type = "nemo";
                }};;
                accessToken = "minima";
                actorIpAddress = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                customerId = "culpa";
                endTime = "doloribus";
                eventName = "sapiente";
                fields = "architecto";
                filters = "mollitia";
                groupIdFilter = "dolorem";
                key = "culpa";
                maxResults = 161309L;
                oauthToken = "repellat";
                orgUnitID = "mollitia";
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                startTime = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            ReportsActivitiesWatchResponse res = sdk.activities.reportsActivitiesWatch(req, new ReportsActivitiesWatchSecurity("velit", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
