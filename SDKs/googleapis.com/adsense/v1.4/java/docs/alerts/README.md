# alerts

### Available Operations

* [adsenseAlertsDelete](#adsensealertsdelete) - Dismiss (delete) the specified alert from the publisher's AdSense account.
* [adsenseAlertsList](#adsensealertslist) - List the alerts for this AdSense account.

## adsenseAlertsDelete

Dismiss (delete) the specified alert from the publisher's AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAlertsDeleteRequest;
import org.openapis.openapi.models.operations.AdsenseAlertsDeleteResponse;
import org.openapis.openapi.models.operations.AdsenseAlertsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAlertsDeleteRequest req = new AdsenseAlertsDeleteRequest("natus") {{
                alt = AltEnum.CSV;
                fields = "sunt";
                key = "quo";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                userIp = "maxime";
            }};            

            AdsenseAlertsDeleteResponse res = sdk.alerts.adsenseAlertsDelete(req, new AdsenseAlertsDeleteSecurity("ea", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAlertsList

List the alerts for this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAlertsListRequest;
import org.openapis.openapi.models.operations.AdsenseAlertsListResponse;
import org.openapis.openapi.models.operations.AdsenseAlertsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAlertsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAlertsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAlertsListRequest req = new AdsenseAlertsListRequest() {{
                alt = AltEnum.CSV;
                fields = "ea";
                key = "accusantium";
                locale = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quidem";
                userIp = "ipsam";
            }};            

            AdsenseAlertsListResponse res = sdk.alerts.adsenseAlertsList(req, new AdsenseAlertsListSecurity() {{
                option1 = new AdsenseAlertsListSecurityOption1("voluptate", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.alerts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
