# revisions

### Available Operations

* [driveRevisionsDelete](#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [driveRevisionsGet](#driverevisionsget) - Gets a specific revision.
* [driveRevisionsList](#driverevisionslist) - Lists a file's revisions.
* [driveRevisionsPatch](#driverevisionspatch) - Updates a revision.
* [driveRevisionsUpdate](#driverevisionsupdate) - Updates a revision.

## driveRevisionsDelete

Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

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

            DriveRevisionsDeleteRequest req = new DriveRevisionsDeleteRequest("perspiciatis", "voluptates") {{
                alt = AltEnum.JSON;
                fields = "eum";
                key = "quasi";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "odio";
                userIp = "commodi";
            }};            

            DriveRevisionsDeleteResponse res = sdk.revisions.driveRevisionsDelete(req, new DriveRevisionsDeleteSecurity() {{
                option1 = new DriveRevisionsDeleteSecurityOption1("porro", "aliquid") {{
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

Gets a specific revision.

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

            DriveRevisionsGetRequest req = new DriveRevisionsGetRequest("mollitia", "quidem") {{
                alt = AltEnum.JSON;
                fields = "explicabo";
                key = "et";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "magni";
                userIp = "natus";
            }};            

            DriveRevisionsGetResponse res = sdk.revisions.driveRevisionsGet(req, new DriveRevisionsGetSecurity() {{
                option1 = new DriveRevisionsGetSecurityOption1("illum", "a") {{
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

            DriveRevisionsListRequest req = new DriveRevisionsListRequest("impedit") {{
                alt = AltEnum.JSON;
                fields = "unde";
                key = "ut";
                maxResults = 814585L;
                oauthToken = "voluptas";
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "recusandae";
                userIp = "quisquam";
            }};            

            DriveRevisionsListResponse res = sdk.revisions.driveRevisionsList(req, new DriveRevisionsListSecurity() {{
                option1 = new DriveRevisionsListSecurityOption1("facere", "dignissimos") {{
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

## driveRevisionsPatch

Updates a revision.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRevisionsPatchRequest;
import org.openapis.openapi.models.operations.DriveRevisionsPatchResponse;
import org.openapis.openapi.models.operations.DriveRevisionsPatchSecurity;
import org.openapis.openapi.models.operations.DriveRevisionsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DriveRevisionsPatchSecurityOption2;
import org.openapis.openapi.models.operations.DriveRevisionsPatchSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Revision;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRevisionsPatchRequest req = new DriveRevisionsPatchRequest("iste", "provident") {{
                revision = new Revision() {{
                    downloadUrl = "dolor";
                    etag = "sint";
                    exportLinks = new java.util.HashMap<String, String>() {{
                        put("eaque", "eum");
                    }};
                    fileSize = "laboriosam";
                    id = "a6d2d000-3553-438c-ac08-6fa21e9152cb";
                    kind = "non";
                    lastModifyingUser = new User() {{
                        displayName = "beatae";
                        emailAddress = "sunt";
                        isAuthenticatedUser = false;
                        kind = "molestias";
                        permissionId = "beatae";
                        picture = new UserPicture() {{
                            url = "autem";
                        }};;
                    }};;
                    lastModifyingUserName = "ducimus";
                    md5Checksum = "libero";
                    mimeType = "molestias";
                    modifiedDate = OffsetDateTime.parse("2022-05-06T10:22:27.901Z");
                    originalFilename = "impedit";
                    pinned = false;
                    publishAuto = false;
                    published = false;
                    publishedLink = "quos";
                    publishedOutsideDomain = false;
                    selfLink = "illum";
                }};;
                alt = AltEnum.JSON;
                fields = "distinctio";
                key = "voluptatem";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "quaerat";
                userIp = "consequatur";
            }};            

            DriveRevisionsPatchResponse res = sdk.revisions.driveRevisionsPatch(req, new DriveRevisionsPatchSecurity() {{
                option1 = new DriveRevisionsPatchSecurityOption1("laudantium", "repellendus") {{
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

## driveRevisionsUpdate

Updates a revision.

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
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRevisionsUpdateRequest req = new DriveRevisionsUpdateRequest("commodi", "quibusdam") {{
                revision = new Revision() {{
                    downloadUrl = "consectetur";
                    etag = "voluptas";
                    exportLinks = new java.util.HashMap<String, String>() {{
                        put("earum", "tenetur");
                        put("assumenda", "dolore");
                    }};
                    fileSize = "enim";
                    id = "5906d126-3d48-4e93-9c2c-9e81f30be3e4";
                    kind = "adipisci";
                    lastModifyingUser = new User() {{
                        displayName = "magni";
                        emailAddress = "aperiam";
                        isAuthenticatedUser = false;
                        kind = "dolores";
                        permissionId = "illum";
                        picture = new UserPicture() {{
                            url = "iusto";
                        }};;
                    }};;
                    lastModifyingUserName = "magni";
                    md5Checksum = "beatae";
                    mimeType = "aliquid";
                    modifiedDate = OffsetDateTime.parse("2022-07-19T13:59:00.061Z");
                    originalFilename = "vel";
                    pinned = false;
                    publishAuto = false;
                    published = false;
                    publishedLink = "minima";
                    publishedOutsideDomain = false;
                    selfLink = "sit";
                }};;
                alt = AltEnum.JSON;
                fields = "vel";
                key = "laboriosam";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "quasi";
                userIp = "rem";
            }};            

            DriveRevisionsUpdateResponse res = sdk.revisions.driveRevisionsUpdate(req, new DriveRevisionsUpdateSecurity() {{
                option1 = new DriveRevisionsUpdateSecurityOption1("dignissimos", "doloremque") {{
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
