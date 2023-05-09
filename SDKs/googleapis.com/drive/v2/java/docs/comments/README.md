# comments

### Available Operations

* [driveCommentsDelete](#drivecommentsdelete) - Deletes a comment.
* [driveCommentsGet](#drivecommentsget) - Gets a comment by ID.
* [driveCommentsInsert](#drivecommentsinsert) - Creates a new comment on the given file.
* [driveCommentsList](#drivecommentslist) - Lists a file's comments.
* [driveCommentsPatch](#drivecommentspatch) - Updates an existing comment.
* [driveCommentsUpdate](#drivecommentsupdate) - Updates an existing comment.

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

            DriveCommentsDeleteRequest req = new DriveCommentsDeleteRequest("et", "excepturi") {{
                alt = AltEnum.JSON;
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                userIp = "accusantium";
            }};            

            DriveCommentsDeleteResponse res = sdk.comments.driveCommentsDelete(req, new DriveCommentsDeleteSecurity() {{
                option1 = new DriveCommentsDeleteSecurityOption1("mollitia", "reiciendis") {{
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

            DriveCommentsGetRequest req = new DriveCommentsGetRequest("mollitia", "ad") {{
                alt = AltEnum.JSON;
                fields = "eum";
                includeDeleted = false;
                key = "dolor";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "odit";
                userIp = "nemo";
            }};            

            DriveCommentsGetResponse res = sdk.comments.driveCommentsGet(req, new DriveCommentsGetSecurity() {{
                option1 = new DriveCommentsGetSecurityOption1("quasi", "iure") {{
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

## driveCommentsInsert

Creates a new comment on the given file.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsInsertRequest;
import org.openapis.openapi.models.operations.DriveCommentsInsertResponse;
import org.openapis.openapi.models.operations.DriveCommentsInsertSecurity;
import org.openapis.openapi.models.operations.DriveCommentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentContext;
import org.openapis.openapi.models.shared.CommentReply;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsInsertRequest req = new DriveCommentsInsertRequest("doloribus") {{
                comment = new Comment() {{
                    anchor = "debitis";
                    author = new User() {{
                        displayName = "eius";
                        emailAddress = "maxime";
                        isAuthenticatedUser = false;
                        kind = "deleniti";
                        permissionId = "facilis";
                        picture = new UserPicture() {{
                            url = "in";
                        }};;
                    }};;
                    commentId = "architecto";
                    content = "architecto";
                    context = new CommentContext() {{
                        type = "repudiandae";
                        value = "ullam";
                    }};;
                    createdDate = OffsetDateTime.parse("2022-01-23T10:45:15.714Z");
                    deleted = false;
                    fileId = "repellat";
                    fileTitle = "quibusdam";
                    htmlContent = "sed";
                    kind = "saepe";
                    modifiedDate = OffsetDateTime.parse("2022-11-20T20:56:20.791Z");
                    replies = new org.openapis.openapi.models.shared.CommentReply[]{{
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "praesentium";
                                emailAddress = "natus";
                                isAuthenticatedUser = false;
                                kind = "magni";
                                permissionId = "sunt";
                                picture = new UserPicture() {{
                                    url = "quo";
                                }};
                            }};
                            content = "illum";
                            createdDate = OffsetDateTime.parse("2020-07-30T23:39:27.609Z");
                            deleted = false;
                            htmlContent = "ea";
                            kind = "excepturi";
                            modifiedDate = OffsetDateTime.parse("2022-08-05T09:04:26.932Z");
                            replyId = "accusantium";
                            verb = "ab";
                        }}),
                    }};
                    selfLink = "maiores";
                    status = "quidem";
                }};;
                alt = AltEnum.JSON;
                fields = "ipsam";
                key = "voluptate";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "eaque";
            }};            

            DriveCommentsInsertResponse res = sdk.comments.driveCommentsInsert(req, new DriveCommentsInsertSecurity() {{
                option1 = new DriveCommentsInsertSecurityOption1("pariatur", "nemo") {{
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

            DriveCommentsListRequest req = new DriveCommentsListRequest("voluptatibus") {{
                alt = AltEnum.JSON;
                fields = "perferendis";
                includeDeleted = false;
                key = "fugiat";
                maxResults = 230742L;
                oauthToken = "aut";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                updatedMin = "hic";
                userIp = "libero";
            }};            

            DriveCommentsListResponse res = sdk.comments.driveCommentsList(req, new DriveCommentsListSecurity() {{
                option1 = new DriveCommentsListSecurityOption1("nobis", "dolores") {{
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

## driveCommentsPatch

Updates an existing comment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveCommentsPatchRequest;
import org.openapis.openapi.models.operations.DriveCommentsPatchResponse;
import org.openapis.openapi.models.operations.DriveCommentsPatchSecurity;
import org.openapis.openapi.models.operations.DriveCommentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DriveCommentsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentContext;
import org.openapis.openapi.models.shared.CommentReply;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsPatchRequest req = new DriveCommentsPatchRequest("quis", "totam") {{
                comment = new Comment() {{
                    anchor = "dignissimos";
                    author = new User() {{
                        displayName = "eaque";
                        emailAddress = "quis";
                        isAuthenticatedUser = false;
                        kind = "nesciunt";
                        permissionId = "eos";
                        picture = new UserPicture() {{
                            url = "perferendis";
                        }};;
                    }};;
                    commentId = "dolores";
                    content = "minus";
                    context = new CommentContext() {{
                        type = "quam";
                        value = "dolor";
                    }};;
                    createdDate = OffsetDateTime.parse("2021-12-18T20:09:27.741Z");
                    deleted = false;
                    fileId = "hic";
                    fileTitle = "recusandae";
                    htmlContent = "omnis";
                    kind = "facilis";
                    modifiedDate = OffsetDateTime.parse("2022-12-08T18:10:54.422Z");
                    replies = new org.openapis.openapi.models.shared.CommentReply[]{{
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "consequuntur";
                                emailAddress = "blanditiis";
                                isAuthenticatedUser = false;
                                kind = "error";
                                permissionId = "eaque";
                                picture = new UserPicture() {{
                                    url = "occaecati";
                                }};
                            }};
                            content = "rerum";
                            createdDate = OffsetDateTime.parse("2022-01-03T18:36:27.259Z");
                            deleted = false;
                            htmlContent = "earum";
                            kind = "modi";
                            modifiedDate = OffsetDateTime.parse("2021-08-23T06:19:56.211Z");
                            replyId = "deleniti";
                            verb = "pariatur";
                        }}),
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "provident";
                                emailAddress = "nobis";
                                isAuthenticatedUser = false;
                                kind = "libero";
                                permissionId = "delectus";
                                picture = new UserPicture() {{
                                    url = "quaerat";
                                }};
                            }};
                            content = "quos";
                            createdDate = OffsetDateTime.parse("2022-10-15T11:27:32.342Z");
                            deleted = false;
                            htmlContent = "dolorem";
                            kind = "dolor";
                            modifiedDate = OffsetDateTime.parse("2022-10-13T03:45:19.154Z");
                            replyId = "hic";
                            verb = "excepturi";
                        }}),
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "cum";
                                emailAddress = "voluptate";
                                isAuthenticatedUser = false;
                                kind = "dignissimos";
                                permissionId = "reiciendis";
                                picture = new UserPicture() {{
                                    url = "amet";
                                }};
                            }};
                            content = "dolorum";
                            createdDate = OffsetDateTime.parse("2022-11-30T20:48:38.083Z");
                            deleted = false;
                            htmlContent = "ipsa";
                            kind = "ipsa";
                            modifiedDate = OffsetDateTime.parse("2022-07-06T22:32:29.592Z");
                            replyId = "quaerat";
                            verb = "accusamus";
                        }}),
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "quidem";
                                emailAddress = "voluptatibus";
                                isAuthenticatedUser = false;
                                kind = "voluptas";
                                permissionId = "natus";
                                picture = new UserPicture() {{
                                    url = "eos";
                                }};
                            }};
                            content = "atque";
                            createdDate = OffsetDateTime.parse("2022-02-23T01:35:05.899Z");
                            deleted = false;
                            htmlContent = "ab";
                            kind = "soluta";
                            modifiedDate = OffsetDateTime.parse("2022-01-16T14:59:31.978Z");
                            replyId = "voluptate";
                            verb = "dolorum";
                        }}),
                    }};
                    selfLink = "deleniti";
                    status = "omnis";
                }};;
                alt = AltEnum.JSON;
                fields = "necessitatibus";
                key = "distinctio";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nihil";
                userIp = "ipsum";
            }};            

            DriveCommentsPatchResponse res = sdk.comments.driveCommentsPatch(req, new DriveCommentsPatchSecurity() {{
                option1 = new DriveCommentsPatchSecurityOption1("voluptate", "id") {{
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

## driveCommentsUpdate

Updates an existing comment.

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
import org.openapis.openapi.models.shared.CommentContext;
import org.openapis.openapi.models.shared.CommentReply;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserPicture;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveCommentsUpdateRequest req = new DriveCommentsUpdateRequest("saepe", "eius") {{
                comment = new Comment() {{
                    anchor = "aspernatur";
                    author = new User() {{
                        displayName = "perferendis";
                        emailAddress = "amet";
                        isAuthenticatedUser = false;
                        kind = "optio";
                        permissionId = "accusamus";
                        picture = new UserPicture() {{
                            url = "ad";
                        }};;
                    }};;
                    commentId = "saepe";
                    content = "suscipit";
                    context = new CommentContext() {{
                        type = "deserunt";
                        value = "provident";
                    }};;
                    createdDate = OffsetDateTime.parse("2022-03-03T16:00:55.670Z");
                    deleted = false;
                    fileId = "totam";
                    fileTitle = "similique";
                    htmlContent = "alias";
                    kind = "at";
                    modifiedDate = OffsetDateTime.parse("2022-09-23T03:46:17.712Z");
                    replies = new org.openapis.openapi.models.shared.CommentReply[]{{
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "quod";
                                emailAddress = "officiis";
                                isAuthenticatedUser = false;
                                kind = "qui";
                                permissionId = "dolorum";
                                picture = new UserPicture() {{
                                    url = "a";
                                }};
                            }};
                            content = "esse";
                            createdDate = OffsetDateTime.parse("2022-01-13T02:40:51.157Z");
                            deleted = false;
                            htmlContent = "ipsum";
                            kind = "quisquam";
                            modifiedDate = OffsetDateTime.parse("2022-04-24T18:16:06.669Z");
                            replyId = "tempore";
                            verb = "accusamus";
                        }}),
                        add(new CommentReply() {{
                            author = new User() {{
                                displayName = "numquam";
                                emailAddress = "enim";
                                isAuthenticatedUser = false;
                                kind = "dolorem";
                                permissionId = "sapiente";
                                picture = new UserPicture() {{
                                    url = "totam";
                                }};
                            }};
                            content = "nihil";
                            createdDate = OffsetDateTime.parse("2022-04-16T06:31:32.314Z");
                            deleted = false;
                            htmlContent = "neque";
                            kind = "sed";
                            modifiedDate = OffsetDateTime.parse("2022-04-09T09:19:35.125Z");
                            replyId = "voluptas";
                            verb = "deserunt";
                        }}),
                    }};
                    selfLink = "quam";
                    status = "ipsum";
                }};;
                alt = AltEnum.JSON;
                fields = "incidunt";
                key = "qui";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "maxime";
                userIp = "pariatur";
            }};            

            DriveCommentsUpdateResponse res = sdk.comments.driveCommentsUpdate(req, new DriveCommentsUpdateSecurity() {{
                option1 = new DriveCommentsUpdateSecurityOption1("soluta", "dicta") {{
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
