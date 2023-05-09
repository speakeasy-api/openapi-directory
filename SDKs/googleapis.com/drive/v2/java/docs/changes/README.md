# changes

### Available Operations

* [driveChangesGet](#drivechangesget) - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* [driveChangesGetStartPageToken](#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [driveChangesList](#drivechangeslist) - Lists the changes for a user or shared drive.
* [driveChangesWatch](#drivechangeswatch) - Subscribe to changes for a user.

## driveChangesGet

Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveChangesGetRequest;
import org.openapis.openapi.models.operations.DriveChangesGetResponse;
import org.openapis.openapi.models.operations.DriveChangesGetSecurity;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption7;
import org.openapis.openapi.models.operations.DriveChangesGetSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesGetRequest req = new DriveChangesGetRequest("quo") {{
                alt = AltEnum.JSON;
                driveId = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "quod";
                userIp = "quod";
            }};            

            DriveChangesGetResponse res = sdk.changes.driveChangesGet(req, new DriveChangesGetSecurity() {{
                option1 = new DriveChangesGetSecurityOption1("esse", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.change != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
import org.openapis.openapi.models.operations.DriveChangesGetStartPageTokenSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesGetStartPageTokenRequest req = new DriveChangesGetStartPageTokenRequest() {{
                alt = AltEnum.JSON;
                driveId = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "occaecati";
                userIp = "fugit";
            }};            

            DriveChangesGetStartPageTokenResponse res = sdk.changes.driveChangesGetStartPageToken(req, new DriveChangesGetStartPageTokenSecurity() {{
                option1 = new DriveChangesGetStartPageTokenSecurityOption1("deleniti", "hic") {{
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
import org.openapis.openapi.models.operations.DriveChangesListSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesListRequest req = new DriveChangesListRequest() {{
                alt = AltEnum.JSON;
                driveId = "optio";
                fields = "totam";
                includeCorpusRemovals = false;
                includeDeleted = false;
                includeItemsFromAllDrives = false;
                includeLabels = "beatae";
                includePermissionsForView = "commodi";
                includeSubscribed = false;
                includeTeamDriveItems = false;
                key = "molestiae";
                maxResults = 264555L;
                oauthToken = "qui";
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                spaces = "esse";
                startChangeId = "ipsum";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "excepturi";
                userIp = "aspernatur";
            }};            

            DriveChangesListResponse res = sdk.changes.driveChangesList(req, new DriveChangesListSecurity() {{
                option1 = new DriveChangesListSecurityOption1("perferendis", "ad") {{
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

Subscribe to changes for a user.

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
import org.openapis.openapi.models.operations.DriveChangesWatchSecurityOption8;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveChangesWatchRequest req = new DriveChangesWatchRequest() {{
                channel = new Channel() {{
                    address = "1626 Tyra Union";
                    expiration = "fuga";
                    id = "7596eb10-faaa-4235-ac59-55907aff1a3a";
                    kind = "consequuntur";
                    params = new java.util.HashMap<String, String>() {{
                        put("mollitia", "occaecati");
                        put("numquam", "commodi");
                        put("quam", "molestiae");
                        put("velit", "error");
                    }};
                    payload = false;
                    resourceId = "quia";
                    resourceUri = "quis";
                    token = "vitae";
                    type = "laborum";
                }};;
                alt = AltEnum.JSON;
                driveId = "animi";
                fields = "enim";
                includeCorpusRemovals = false;
                includeDeleted = false;
                includeItemsFromAllDrives = false;
                includeLabels = "odit";
                includePermissionsForView = "quo";
                includeSubscribed = false;
                includeTeamDriveItems = false;
                key = "sequi";
                maxResults = 949572L;
                oauthToken = "ipsam";
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                spaces = "aut";
                startChangeId = "quasi";
                supportsAllDrives = false;
                supportsTeamDrives = false;
                teamDriveId = "error";
                userIp = "temporibus";
            }};            

            DriveChangesWatchResponse res = sdk.changes.driveChangesWatch(req, new DriveChangesWatchSecurity() {{
                option1 = new DriveChangesWatchSecurityOption1("laborum", "quasi") {{
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
