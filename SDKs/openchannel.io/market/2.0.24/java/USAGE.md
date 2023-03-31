<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteAppsAppIdPathParams;
import org.openapis.openapi.models.operations.DeleteAppsAppIdQueryParams;
import org.openapis.openapi.models.operations.DeleteAppsAppIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteAppsAppIdRequest req = new DeleteAppsAppIdRequest() {{
                pathParams = new DeleteAppsAppIdPathParams() {{
                    appId = "corrupti";
                }};
                queryParams = new DeleteAppsAppIdQueryParams() {{
                    developerId = "provident";
                }};
            }};            

            DeleteAppsAppIdResponse res = sdk.appsFindAndModifyApps.deleteAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->