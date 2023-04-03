<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest req = new AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                languageCode = "corrupti";
                name = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse res = sdk.organizations.advisorynotificationsOrganizationsLocationsNotificationsGet(req, new AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAdvisorynotificationsV1Notification.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->