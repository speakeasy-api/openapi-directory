# apps

### Available Operations

* [driveAppsGet](#driveappsget) - Gets a specific app.
* [driveAppsList](#driveappslist) - Lists a user's installed apps.

## driveAppsGet

Gets a specific app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveAppsGetRequest;
import org.openapis.openapi.models.operations.DriveAppsGetResponse;
import org.openapis.openapi.models.operations.DriveAppsGetSecurity;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveAppsGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveAppsGetRequest req = new DriveAppsGetRequest("suscipit") {{
                alt = AltEnum.JSON;
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                userIp = "iusto";
            }};            

            DriveAppsGetResponse res = sdk.apps.driveAppsGet(req, new DriveAppsGetSecurity() {{
                option1 = new DriveAppsGetSecurityOption1("excepturi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.app != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveAppsList

Lists a user's installed apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveAppsListRequest;
import org.openapis.openapi.models.operations.DriveAppsListResponse;
import org.openapis.openapi.models.operations.DriveAppsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveAppsListRequest req = new DriveAppsListRequest() {{
                alt = AltEnum.JSON;
                appFilterExtensions = "recusandae";
                appFilterMimeTypes = "temporibus";
                fields = "ab";
                key = "quis";
                languageCode = "veritatis";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "perferendis";
                userIp = "ipsam";
            }};            

            DriveAppsListResponse res = sdk.apps.driveAppsList(req, new DriveAppsListSecurity("repellendus", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
