# replies

### Available Operations

* [driveRepliesDelete](#driverepliesdelete) - Deletes a reply.
* [driveRepliesGet](#driverepliesget) - Gets a reply.
* [driveRepliesInsert](#driverepliesinsert) - Creates a new reply to the given comment.
* [driveRepliesList](#drivereplieslist) - Lists all of the replies to a comment.
* [driveRepliesPatch](#driverepliespatch) - Updates an existing reply.
* [driveRepliesUpdate](#driverepliesupdate) - Updates an existing reply.

## driveRepliesDelete

Deletes a reply.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesDeleteRequest;
import org.openapis.openapi.models.operations.DriveRepliesDeleteResponse;
import org.openapis.openapi.models.operations.DriveRepliesDeleteSecurity;
import org.openapis.openapi.models.operations.DriveRepliesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesDeleteRequest req = new DriveRepliesDeleteRequest("commodi", "fugit", "suscipit") {{
                alt = AltEnum.JSON;
                fields = "voluptate";
                key = "nisi";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                userIp = "laboriosam";
            }};            

            DriveRepliesDeleteResponse res = sdk.replies.driveRepliesDelete(req, new DriveRepliesDeleteSecurity() {{
                option1 = new DriveRepliesDeleteSecurityOption1("accusamus", "ab") {{
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

## driveRepliesGet

Gets a reply.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesGetRequest;
import org.openapis.openapi.models.operations.DriveRepliesGetResponse;
import org.openapis.openapi.models.operations.DriveRepliesGetSecurity;
import org.openapis.openapi.models.operations.DriveRepliesGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveRepliesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesGetRequest req = new DriveRepliesGetRequest("itaque", "quisquam", "eaque") {{
                alt = AltEnum.JSON;
                fields = "alias";
                includeDeleted = false;
                key = "qui";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "vitae";
                userIp = "quidem";
            }};            

            DriveRepliesGetResponse res = sdk.replies.driveRepliesGet(req, new DriveRepliesGetSecurity() {{
                option1 = new DriveRepliesGetSecurityOption1("sequi", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentReply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRepliesInsert

Creates a new reply to the given comment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesInsertRequest;
import org.openapis.openapi.models.operations.DriveRepliesInsertResponse;
import org.openapis.openapi.models.operations.DriveRepliesInsertSecurity;
import org.openapis.openapi.models.operations.DriveRepliesInsertSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommentReply;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesInsertRequest req = new DriveRepliesInsertRequest("exercitationem", "illum") {{
                commentReply = new CommentReply() {{
                    author = new User() {{
                        displayName = "praesentium";
                        emailAddress = "unde";
                        isAuthenticatedUser = false;
                        kind = "similique";
                        permissionId = "eligendi";
                        picture = new UserPicture() {{
                            url = "tempore";
                        }};;
                    }};;
                    content = "amet";
                    createdDate = OffsetDateTime.parse("2020-09-30T05:42:26.055Z");
                    deleted = false;
                    htmlContent = "asperiores";
                    kind = "temporibus";
                    modifiedDate = OffsetDateTime.parse("2021-12-01T07:51:21.127Z");
                    replyId = "quibusdam";
                    verb = "sit";
                }};;
                alt = AltEnum.JSON;
                fields = "quo";
                key = "veniam";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "provident";
                userIp = "vero";
            }};            

            DriveRepliesInsertResponse res = sdk.replies.driveRepliesInsert(req, new DriveRepliesInsertSecurity() {{
                option1 = new DriveRepliesInsertSecurityOption1("earum", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentReply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRepliesList

Lists all of the replies to a comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesListRequest;
import org.openapis.openapi.models.operations.DriveRepliesListResponse;
import org.openapis.openapi.models.operations.DriveRepliesListSecurity;
import org.openapis.openapi.models.operations.DriveRepliesListSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesListSecurityOption2;
import org.openapis.openapi.models.operations.DriveRepliesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesListRequest req = new DriveRepliesListRequest("ipsum", "alias") {{
                alt = AltEnum.JSON;
                fields = "doloremque";
                includeDeleted = false;
                key = "tempora";
                maxResults = 595986L;
                oauthToken = "quam";
                pageToken = "atque";
                prettyPrint = false;
                quotaUser = "officia";
                userIp = "ex";
            }};            

            DriveRepliesListResponse res = sdk.replies.driveRepliesList(req, new DriveRepliesListSecurity() {{
                option1 = new DriveRepliesListSecurityOption1("architecto", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentReplyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRepliesPatch

Updates an existing reply.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesPatchRequest;
import org.openapis.openapi.models.operations.DriveRepliesPatchResponse;
import org.openapis.openapi.models.operations.DriveRepliesPatchSecurity;
import org.openapis.openapi.models.operations.DriveRepliesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommentReply;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesPatchRequest req = new DriveRepliesPatchRequest("laborum", "veritatis", "quod") {{
                commentReply = new CommentReply() {{
                    author = new User() {{
                        displayName = "a";
                        emailAddress = "qui";
                        isAuthenticatedUser = false;
                        kind = "accusantium";
                        permissionId = "commodi";
                        picture = new UserPicture() {{
                            url = "atque";
                        }};;
                    }};;
                    content = "totam";
                    createdDate = OffsetDateTime.parse("2021-08-24T06:30:41.014Z");
                    deleted = false;
                    htmlContent = "quam";
                    kind = "quod";
                    modifiedDate = OffsetDateTime.parse("2022-01-15T09:49:25.804Z");
                    replyId = "reiciendis";
                    verb = "quod";
                }};;
                alt = AltEnum.JSON;
                fields = "voluptate";
                key = "inventore";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "maxime";
                userIp = "fuga";
            }};            

            DriveRepliesPatchResponse res = sdk.replies.driveRepliesPatch(req, new DriveRepliesPatchSecurity() {{
                option1 = new DriveRepliesPatchSecurityOption1("ab", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentReply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRepliesUpdate

Updates an existing reply.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesUpdateRequest;
import org.openapis.openapi.models.operations.DriveRepliesUpdateResponse;
import org.openapis.openapi.models.operations.DriveRepliesUpdateSecurity;
import org.openapis.openapi.models.operations.DriveRepliesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommentReply;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesUpdateRequest req = new DriveRepliesUpdateRequest("consectetur", "maiores", "sed") {{
                commentReply = new CommentReply() {{
                    author = new User() {{
                        displayName = "animi";
                        emailAddress = "sequi";
                        isAuthenticatedUser = false;
                        kind = "eligendi";
                        permissionId = "voluptatum";
                        picture = new UserPicture() {{
                            url = "perferendis";
                        }};;
                    }};;
                    content = "laborum";
                    createdDate = OffsetDateTime.parse("2022-01-22T15:58:15.848Z");
                    deleted = false;
                    htmlContent = "tenetur";
                    kind = "sapiente";
                    modifiedDate = OffsetDateTime.parse("2022-10-05T07:02:20.526Z");
                    replyId = "non";
                    verb = "optio";
                }};;
                alt = AltEnum.JSON;
                fields = "illum";
                key = "at";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "molestias";
                userIp = "ipsam";
            }};            

            DriveRepliesUpdateResponse res = sdk.replies.driveRepliesUpdate(req, new DriveRepliesUpdateSecurity() {{
                option1 = new DriveRepliesUpdateSecurityOption1("esse", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentReply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
