# organizations

### Available Operations

* [advisorynotificationsOrganizationsLocationsNotificationsGet](#advisorynotificationsorganizationslocationsnotificationsget) - Gets a notification.
* [advisorynotificationsOrganizationsLocationsNotificationsList](#advisorynotificationsorganizationslocationsnotificationslist) - Lists notifications under a given parent.

## advisorynotificationsOrganizationsLocationsNotificationsGet

Gets a notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest req = new AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                languageCode = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse res = sdk.organizations.advisorynotificationsOrganizationsLocationsNotificationsGet(req, new AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAdvisorynotificationsV1Notification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## advisorynotificationsOrganizationsLocationsNotificationsList

Lists notifications under a given parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsListRequest;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsListResponse;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdvisorynotificationsOrganizationsLocationsNotificationsListRequest req = new AdvisorynotificationsOrganizationsLocationsNotificationsListRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                languageCode = "sapiente";
                oauthToken = "quo";
                pageSize = 140350L;
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
                view = AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnum.FULL;
            }};            

            AdvisorynotificationsOrganizationsLocationsNotificationsListResponse res = sdk.organizations.advisorynotificationsOrganizationsLocationsNotificationsList(req, new AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAdvisorynotificationsV1ListNotificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
