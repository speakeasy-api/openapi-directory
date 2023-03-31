<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse;

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

            DeleteCustomersAccountAnnouncementsAnnouncementIdRequest req = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest() {{
                pathParams = new DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams() {{
                    account = 548814;
                    announcementId = "provident";
                }};
            }};            

            DeleteCustomersAccountAnnouncementsAnnouncementIdResponse res = sdk.announcements.deleteCustomersAccountAnnouncementsAnnouncementId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->