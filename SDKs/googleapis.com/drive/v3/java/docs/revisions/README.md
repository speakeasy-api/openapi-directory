# revisions

### Available Operations

* [driveRevisionsDelete](#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [driveRevisionsGet](#driverevisionsget) - Gets a revision's metadata or content by ID.
* [driveRevisionsList](#driverevisionslist) - Lists a file's revisions.
* [driveRevisionsUpdate](#driverevisionsupdate) - Updates a revision with patch semantics.

## driveRevisionsDelete

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRevisionsDeleteRequest;
import org.openapis.openapi.models.operations.DriveRevisionsDeleteResponse;
import org.openapis.openapi.models.operations.DriveRevisionsDeleteSecurity;
import org.openapis.openapi.models.operations.DriveRevisionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DriveRevisionsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DriveRevisionsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRevisionsDeleteRequest req = new DriveRevisionsDeleteRequest("necessitatibus", "nobis") {{
                alt = AltEnum.JSON;
                fields = "ipsa";
                key = "ducimus";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "veritatis";
                userIp = "quasi";
            }};            

            DriveRevisionsDeleteResponse res = sdk.revisions.driveRevisionsDelete(req, new DriveRevisionsDeleteSecurity() {{
                option1 = new DriveRevisionsDeleteSecurityOption1("laboriosam", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## driveRevisionsGet

Gets a revision's metadata or content by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRevisionsGetRequest;
import org.openapis.openapi.models.operations.DriveRevisionsGetResponse;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurity;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveRevisionsGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRevisionsGetRequest req = new DriveRevisionsGetRequest("libero", "excepturi") {{
                acknowledgeAbuse = false;
                alt = AltEnum.JSON;
                fields = "occaecati";
                key = "nemo";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "nostrum";
                userIp = "doloribus";
            }};            

            DriveRevisionsGetResponse res = sdk.revisions.driveRevisionsGet(req, new DriveRevisionsGetSecurity() {{
                option1 = new DriveRevisionsGetSecurityOption1("eligendi", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.revision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRevisionsList

Lists a file's revisions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRevisionsListRequest;
import org.openapis.openapi.models.operations.DriveRevisionsListResponse;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurity;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption1;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption2;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption3;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption4;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption5;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption6;
import org.openapis.openapi.models.operations.DriveRevisionsListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRevisionsListRequest req = new DriveRevisionsListRequest("enim") {{
                alt = AltEnum.JSON;
                fields = "hic";
                key = "animi";
                oauthToken = "quas";
                pageSize = 517326L;
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "odio";
                userIp = "eaque";
            }};            

            DriveRevisionsListResponse res = sdk.revisions.driveRevisionsList(req, new DriveRevisionsListSecurity() {{
                option1 = new DriveRevisionsListSecurityOption1("saepe", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.revisionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRevisionsUpdate

Updates a revision with patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRevisionsUpdateRequest;
import org.openapis.openapi.models.operations.DriveRevisionsUpdateResponse;
import org.openapis.openapi.models.operations.DriveRevisionsUpdateSecurity;
import org.openapis.openapi.models.operations.DriveRevisionsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DriveRevisionsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.DriveRevisionsUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Revision;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRevisionsUpdateRequest req = new DriveRevisionsUpdateRequest("quos", "iste") {{
                revision = new Revision() {{
                    exportLinks = new java.util.HashMap<String, String>() {{
                        put("tempore", "libero");
                        put("velit", "doloremque");
                        put("delectus", "impedit");
                        put("cum", "ipsum");
                    }};
                    id = "3ea055b1-97cd-444e-af52-d82d3513bb6f";
                    keepForever = false;
                    kind = "quaerat";
                    lastModifyingUser = new User() {{
                        displayName = "blanditiis";
                        emailAddress = "distinctio";
                        kind = "nisi";
                        me = false;
                        permissionId = "quis";
                        photoLink = "nisi";
                    }};;
                    md5Checksum = "libero";
                    mimeType = "minus";
                    modifiedTime = OffsetDateTime.parse("2020-11-18T20:43:00.067Z");
                    originalFilename = "ipsum";
                    publishAuto = false;
                    published = false;
                    publishedLink = "ad";
                    publishedOutsideDomain = false;
                    size = "voluptatibus";
                }};;
                alt = AltEnum.JSON;
                fields = "voluptatibus";
                key = "consequuntur";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "labore";
                userIp = "rerum";
            }};            

            DriveRevisionsUpdateResponse res = sdk.revisions.driveRevisionsUpdate(req, new DriveRevisionsUpdateSecurity() {{
                option1 = new DriveRevisionsUpdateSecurityOption1("eos", "reprehenderit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.revision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
