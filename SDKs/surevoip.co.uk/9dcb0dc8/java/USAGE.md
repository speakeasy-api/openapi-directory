<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteCustomersAccountAnnouncementsAnnouncementIdRequest req = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest() {{
                pathParams = new DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams() {{
                    account = 29372123613087746;
                    announcementId = "amet";
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