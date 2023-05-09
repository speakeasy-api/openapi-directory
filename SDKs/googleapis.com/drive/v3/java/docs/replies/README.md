# replies

### Available Operations

* [driveRepliesCreate](#driverepliescreate) - Creates a reply to a comment.
* [driveRepliesDelete](#driverepliesdelete) - Deletes a reply.
* [driveRepliesGet](#driverepliesget) - Gets a reply by ID.
* [driveRepliesList](#drivereplieslist) - Lists a comment's replies.
* [driveRepliesUpdate](#driverepliesupdate) - Updates a reply with patch semantics.

## driveRepliesCreate

Creates a reply to a comment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveRepliesCreateRequest;
import org.openapis.openapi.models.operations.DriveRepliesCreateResponse;
import org.openapis.openapi.models.operations.DriveRepliesCreateSecurity;
import org.openapis.openapi.models.operations.DriveRepliesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DriveRepliesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Reply;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesCreateRequest req = new DriveRepliesCreateRequest("dolores", "assumenda") {{
                reply = new Reply() {{
                    action = "beatae";
                    author = new User() {{
                        displayName = "est";
                        emailAddress = "facere";
                        kind = "corrupti";
                        me = false;
                        permissionId = "molestiae";
                        photoLink = "provident";
                    }};;
                    content = "accusamus";
                    createdTime = OffsetDateTime.parse("2020-10-20T01:09:41.345Z");
                    deleted = false;
                    htmlContent = "sint";
                    id = "665b85ef-bd02-4bae-8be2-d782259e3ea4";
                    kind = "quidem";
                    modifiedTime = OffsetDateTime.parse("2022-11-23T05:12:24.210Z");
                }};;
                alt = AltEnum.JSON;
                fields = "unde";
                key = "molestiae";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "cupiditate";
                userIp = "fugit";
            }};            

            DriveRepliesCreateResponse res = sdk.replies.driveRepliesCreate(req, new DriveRepliesCreateSecurity() {{
                option1 = new DriveRepliesCreateSecurityOption1("numquam", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            DriveRepliesDeleteRequest req = new DriveRepliesDeleteRequest("nesciunt", "at", "officia") {{
                alt = AltEnum.JSON;
                fields = "dignissimos";
                key = "optio";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "corporis";
                userIp = "qui";
            }};            

            DriveRepliesDeleteResponse res = sdk.replies.driveRepliesDelete(req, new DriveRepliesDeleteSecurity() {{
                option1 = new DriveRepliesDeleteSecurityOption1("expedita", "voluptatum") {{
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

Gets a reply by ID.

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

            DriveRepliesGetRequest req = new DriveRepliesGetRequest("cupiditate", "minima", "placeat") {{
                alt = AltEnum.JSON;
                fields = "enim";
                includeDeleted = false;
                key = "neque";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "minus";
                userIp = "eum";
            }};            

            DriveRepliesGetResponse res = sdk.replies.driveRepliesGet(req, new DriveRepliesGetSecurity() {{
                option1 = new DriveRepliesGetSecurityOption1("modi", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRepliesList

Lists a comment's replies.

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

            DriveRepliesListRequest req = new DriveRepliesListRequest("magnam", "voluptates") {{
                alt = AltEnum.JSON;
                fields = "maiores";
                includeDeleted = false;
                key = "tempore";
                oauthToken = "aperiam";
                pageSize = 727547L;
                pageToken = "ratione";
                prettyPrint = false;
                quotaUser = "labore";
                userIp = "totam";
            }};            

            DriveRepliesListResponse res = sdk.replies.driveRepliesList(req, new DriveRepliesListSecurity() {{
                option1 = new DriveRepliesListSecurityOption1("occaecati", "voluptas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.replyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driveRepliesUpdate

Updates a reply with patch semantics.

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
import org.openapis.openapi.models.shared.Reply;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveRepliesUpdateRequest req = new DriveRepliesUpdateRequest("quo", "velit", "minus") {{
                reply = new Reply() {{
                    action = "fuga";
                    author = new User() {{
                        displayName = "nostrum";
                        emailAddress = "est";
                        kind = "impedit";
                        me = false;
                        permissionId = "delectus";
                        photoLink = "tempore";
                    }};;
                    content = "vero";
                    createdTime = OffsetDateTime.parse("2022-01-01T22:27:34.342Z");
                    deleted = false;
                    htmlContent = "pariatur";
                    id = "57075779-2917-47de-ac64-6ecb573409e3";
                    kind = "repudiandae";
                    modifiedTime = OffsetDateTime.parse("2022-10-05T07:29:39.358Z");
                }};;
                alt = AltEnum.JSON;
                fields = "earum";
                key = "veniam";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "dolores";
                userIp = "nam";
            }};            

            DriveRepliesUpdateResponse res = sdk.replies.driveRepliesUpdate(req, new DriveRepliesUpdateSecurity() {{
                option1 = new DriveRepliesUpdateSecurityOption1("dicta", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
