# comments

### Available Operations

* [driveCommentsCreate](#drivecommentscreate) - Creates a comment on a file.
* [driveCommentsDelete](#drivecommentsdelete) - Deletes a comment.
* [driveCommentsGet](#drivecommentsget) - Gets a comment by ID.
* [driveCommentsList](#drivecommentslist) - Lists a file's comments.
* [driveCommentsUpdate](#drivecommentsupdate) - Updates a comment with patch semantics.

## driveCommentsCreate

Creates a comment on a file.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsCreateRequest;
import org.openapis.openapi.models.operations.DriveCommentsCreateResponse;
import org.openapis.openapi.models.operations.DriveCommentsCreateSecurity;
import org.openapis.openapi.models.operations.DriveCommentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentQuotedFileContent;
import org.openapis.openapi.models.shared.Reply;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsCreateRequest req = new DriveCommentsCreateRequest("accusamus") {{
                comment = new Comment() {{
                    anchor = "commodi";
                    author = new User() {{
                        displayName = "repudiandae";
                        emailAddress = "quae";
                        kind = "ipsum";
                        me = false;
                        permissionId = "quidem";
                        photoLink = "molestias";
                    }};;
                    content = "excepturi";
                    createdTime = OffsetDateTime.parse("2022-03-16T09:33:50.291Z");
                    deleted = false;
                    htmlContent = "praesentium";
                    id = "8e1e91e4-50ad-42ab-9442-69802d502a94";
                    kind = "facilis";
                    modifiedTime = OffsetDateTime.parse("2022-06-04T09:53:33.742Z");
                    quotedFileContent = new CommentQuotedFileContent() {{
                        mimeType = "delectus";
                        value = "eum";
                    }};;
                    replies = new org.openapis.openapi.models.shared.Reply[]{{
                        add(new Reply() {{
                            action = "eligendi";
                            author = new User() {{
                                displayName = "sint";
                                emailAddress = "aliquid";
                                kind = "provident";
                                me = false;
                                permissionId = "necessitatibus";
                                photoLink = "sint";
                            }};
                            content = "officia";
                            createdTime = OffsetDateTime.parse("2022-02-09T13:58:59.361Z");
                            deleted = false;
                            htmlContent = "a";
                            id = "a77dfb14-cd66-4ae3-95ef-b9ba88f3a669";
                            kind = "omnis";
                            modifiedTime = OffsetDateTime.parse("2022-12-24T23:52:02.245Z");
                        }}),
                    }};
                    resolved = false;
                }};;
                alt = AltEnum.JSON;
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                userIp = "labore";
            }};            

            DriveCommentsCreateResponse res = sdk.comments.driveCommentsCreate(req, new DriveCommentsCreateSecurity() {{
                option1 = new DriveCommentsCreateSecurityOption1("labore", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveCommentsDelete

Deletes a comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsDeleteRequest;
import org.openapis.openapi.models.operations.DriveCommentsDeleteResponse;
import org.openapis.openapi.models.operations.DriveCommentsDeleteSecurity;
import org.openapis.openapi.models.operations.DriveCommentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsDeleteRequest req = new DriveCommentsDeleteRequest("natus", "nobis") {{
                alt = AltEnum.JSON;
                fields = "eum";
                key = "vero";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "architecto";
                userIp = "magnam";
            }};            

            DriveCommentsDeleteResponse res = sdk.comments.driveCommentsDelete(req, new DriveCommentsDeleteSecurity() {{
                option1 = new DriveCommentsDeleteSecurityOption1("et", "excepturi") {{
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

## driveCommentsGet

Gets a comment by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsGetRequest;
import org.openapis.openapi.models.operations.DriveCommentsGetResponse;
import org.openapis.openapi.models.operations.DriveCommentsGetSecurity;
import org.openapis.openapi.models.operations.DriveCommentsGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveCommentsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsGetRequest req = new DriveCommentsGetRequest("ullam", "provident") {{
                alt = AltEnum.JSON;
                fields = "quos";
                includeDeleted = false;
                key = "sint";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "mollitia";
                userIp = "reiciendis";
            }};            

            DriveCommentsGetResponse res = sdk.comments.driveCommentsGet(req, new DriveCommentsGetSecurity() {{
                option1 = new DriveCommentsGetSecurityOption1("mollitia", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveCommentsList

Lists a file's comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsListRequest;
import org.openapis.openapi.models.operations.DriveCommentsListResponse;
import org.openapis.openapi.models.operations.DriveCommentsListSecurity;
import org.openapis.openapi.models.operations.DriveCommentsListSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsListSecurityOption2;
import org.openapis.openapi.models.operations.DriveCommentsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsListRequest req = new DriveCommentsListRequest("eum") {{
                alt = AltEnum.JSON;
                fields = "dolor";
                includeDeleted = false;
                key = "necessitatibus";
                oauthToken = "odit";
                pageSize = 367562L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "iure";
                startModifiedTime = "doloribus";
                userIp = "debitis";
            }};            

            DriveCommentsListResponse res = sdk.comments.driveCommentsList(req, new DriveCommentsListSecurity() {{
                option1 = new DriveCommentsListSecurityOption1("eius", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveCommentsUpdate

Updates a comment with patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsUpdateRequest;
import org.openapis.openapi.models.operations.DriveCommentsUpdateResponse;
import org.openapis.openapi.models.operations.DriveCommentsUpdateSecurity;
import org.openapis.openapi.models.operations.DriveCommentsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentQuotedFileContent;
import org.openapis.openapi.models.shared.Reply;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsUpdateRequest req = new DriveCommentsUpdateRequest("deleniti", "facilis") {{
                comment = new Comment() {{
                    anchor = "in";
                    author = new User() {{
                        displayName = "architecto";
                        emailAddress = "architecto";
                        kind = "repudiandae";
                        me = false;
                        permissionId = "ullam";
                        photoLink = "expedita";
                    }};;
                    content = "nihil";
                    createdTime = OffsetDateTime.parse("2020-06-23T22:50:14.437Z");
                    deleted = false;
                    htmlContent = "sed";
                    id = "ed028921-cddc-4692-a01f-b576b0d5f0d3";
                    kind = "aut";
                    modifiedTime = OffsetDateTime.parse("2021-12-02T19:46:35.147Z");
                    quotedFileContent = new CommentQuotedFileContent() {{
                        mimeType = "hic";
                        value = "libero";
                    }};;
                    replies = new org.openapis.openapi.models.shared.Reply[]{{
                        add(new Reply() {{
                            action = "dolores";
                            author = new User() {{
                                displayName = "quis";
                                emailAddress = "totam";
                                kind = "dignissimos";
                                me = false;
                                permissionId = "eaque";
                                photoLink = "quis";
                            }};
                            content = "nesciunt";
                            createdTime = OffsetDateTime.parse("2022-12-25T05:44:55.720Z");
                            deleted = false;
                            htmlContent = "dolores";
                            id = "c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4";
                            kind = "quos";
                            modifiedTime = OffsetDateTime.parse("2022-10-15T11:27:32.342Z");
                        }}),
                        add(new Reply() {{
                            action = "dolorem";
                            author = new User() {{
                                displayName = "dolor";
                                emailAddress = "qui";
                                kind = "ipsum";
                                me = false;
                                permissionId = "hic";
                                photoLink = "excepturi";
                            }};
                            content = "cum";
                            createdTime = OffsetDateTime.parse("2022-07-05T23:34:50.715Z");
                            deleted = false;
                            htmlContent = "reiciendis";
                            id = "3a410067-4ebf-4692-80d1-ba77a89ebf73";
                            kind = "voluptate";
                            modifiedTime = OffsetDateTime.parse("2021-03-10T07:33:18.208Z");
                        }}),
                        add(new Reply() {{
                            action = "eius";
                            author = new User() {{
                                displayName = "aspernatur";
                                emailAddress = "perferendis";
                                kind = "amet";
                                me = false;
                                permissionId = "optio";
                                photoLink = "accusamus";
                            }};
                            content = "ad";
                            createdTime = OffsetDateTime.parse("2021-11-07T02:34:07.563Z");
                            deleted = false;
                            htmlContent = "deserunt";
                            id = "95d8a0d4-46ce-42af-ba73-cf3be453f870";
                            kind = "expedita";
                            modifiedTime = OffsetDateTime.parse("2022-11-05T21:38:15.600Z");
                        }}),
                    }};
                    resolved = false;
                }};;
                alt = AltEnum.JSON;
                fields = "vel";
                key = "libero";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "deserunt";
                userIp = "quam";
            }};            

            DriveCommentsUpdateResponse res = sdk.comments.driveCommentsUpdate(req, new DriveCommentsUpdateSecurity() {{
                option1 = new DriveCommentsUpdateSecurityOption1("ipsum", "incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
