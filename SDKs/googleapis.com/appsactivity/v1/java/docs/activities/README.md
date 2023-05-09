# activities

### Available Operations

* [appsactivityActivitiesList](#appsactivityactivitieslist) - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

## appsactivityActivitiesList

Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

### Example Usage

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
                driveAncestorId = "debitis";
                driveFileId = "ipsa";
                fields = "delectus";
                groupingStrategy = AppsactivityActivitiesListGroupingStrategyEnum.DRIVE_UI;
                key = "suscipit";
                oauthToken = "molestiae";
                pageSize = 791725L;
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                source = "iusto";
                userId = "excepturi";
                userIp = "nisi";
            }};            

            AppsactivityActivitiesListResponse res = sdk.activities.appsactivityActivitiesList(req, new AppsactivityActivitiesListSecurity("recusandae", "temporibus") {{
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
