# changes

### Available Operations

* [driveChangesGetStartPageToken](#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [driveChangesList](#drivechangeslist) - Lists the changes for a user or shared drive.
* [driveChangesWatch](#drivechangeswatch) - Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

## driveChangesGetStartPageToken

Gets the starting pageToken for listing future changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenRequest;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenResponse;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurity;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption1;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption2;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption3;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption4;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption5;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption6;
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesGetStartPageTokenRequest req = new DriveChangesGetStartPageTokenRequest() {{
                alt = AltEnum.JSON;
                driveId = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "molestiae";
                userIp = "minus";
            }};            

            DriveChangesGetStartPageTokenResponse res = sdk.changes.driveChangesGetStartPageToken(req, new DriveChangesGetStartPageTokenSecurity() {{
                option1 = new DriveChangesGetStartPageTokenSecurityOption1("placeat", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.startPageToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveChangesList

Lists the changes for a user or shared drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChangesListRequest;
import org.openapis.openapi.models.operations.DriveChangesListResponse;
import org.openapis.openapi.models.operations.DriveChangesListSecurity;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption1;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption2;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption3;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption4;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption5;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption6;
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesListRequest req = new DriveChangesListRequest("iusto") {{
                alt = AltEnum.JSON;
                driveId = "excepturi";
                fields = "nisi";
                includeCorpusRemovals = false;
                includeItemsFromAllDrives = false;
                includeLabels = "recusandae";
                includePermissionsForView = "temporibus";
                includeRemoved = false;
                includeTeamDriveItems = false;
                key = "ab";
                oauthToken = "quis";
                pageSize = 87129L;
                prettyPrint = false;
                quotaUser = "deserunt";
                restrictToMyDrive = false;
                spaces = "perferendis";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "ipsam";
                userIp = "repellendus";
            }};            

            DriveChangesListResponse res = sdk.changes.driveChangesList(req, new DriveChangesListSecurity() {{
                option1 = new DriveChangesListSecurityOption1("sapiente", "quo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.changeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveChangesWatch

Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChangesWatchRequest;
import org.openapis.openapi.models.operations.DriveChangesWatchResponse;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurity;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption1;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption2;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption3;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption4;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption5;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption6;
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesWatchRequest req = new DriveChangesWatchRequest("odit") {{
                channel = new Channel() {{
                    address = "894 Schmidt Land";
                    expiration = "totam";
                    id = "ca1ba928-fc81-4674-acb7-39205929396f";
                    kind = "saepe";
                    params = new java.util.HashMap<String, String>() {{
                        put("in", "corporis");
                        put("iste", "iure");
                        put("saepe", "quidem");
                    }};
                    payload = false;
                    resourceId = "architecto";
                    resourceUri = "ipsa";
                    token = "reiciendis";
                    type = "est";
                }};;
                alt = AltEnum.JSON;
                driveId = "mollitia";
                fields = "laborum";
                includeCorpusRemovals = false;
                includeItemsFromAllDrives = false;
                includeLabels = "dolores";
                includePermissionsForView = "dolorem";
                includeRemoved = false;
                includeTeamDriveItems = false;
                key = "corporis";
                oauthToken = "explicabo";
                pageSize = 750686L;
                prettyPrint = false;
                quotaUser = "enim";
                restrictToMyDrive = false;
                spaces = "omnis";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "nemo";
                userIp = "minima";
            }};            

            DriveChangesWatchResponse res = sdk.changes.driveChangesWatch(req, new DriveChangesWatchSecurity() {{
                option1 = new DriveChangesWatchSecurityOption1("excepturi", "accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
