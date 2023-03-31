<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetPathParams;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetQueryParams;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest req = new AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest() {{
                security = new AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdvisorynotificationsOrganizationsLocationsNotificationsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new AdvisorynotificationsOrganizationsLocationsNotificationsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    languageCode = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
            }};            

            AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse res = sdk.organizations.advisorynotificationsOrganizationsLocationsNotificationsGet(req);

            if (res.googleCloudAdvisorynotificationsV1Notification.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->