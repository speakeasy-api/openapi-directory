# comments

### Available Operations

* [youtubeCommentsDelete](#youtubecommentsdelete) - Deletes a resource.
* [youtubeCommentsInsert](#youtubecommentsinsert) - Inserts a new resource into this collection.
* [youtubeCommentsList](#youtubecommentslist) - Retrieves a list of resources, possibly filtered.
* [youtubeCommentsMarkAsSpam](#youtubecommentsmarkasspam) - Expresses the caller's opinion that one or more comments should be flagged as spam.
* [youtubeCommentsSetModerationStatus](#youtubecommentssetmoderationstatus) - Sets the moderation status of one or more comments.
* [youtubeCommentsUpdate](#youtubecommentsupdate) - Updates an existing resource.

## youtubeCommentsDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeCommentsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeCommentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentsDeleteRequest req = new YoutubeCommentsDeleteRequest("vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "odio";
                key = "tempora";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "consectetur";
                uploadProtocol = "aliquid";
            }};            

            YoutubeCommentsDeleteResponse res = sdk.comments.youtubeCommentsDelete(req, new YoutubeCommentsDeleteSecurity("ipsa", "laborum") {{
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

## youtubeCommentsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeCommentsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeCommentsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentSnippet;
import org.openapis.openapi.models.shared.CommentSnippetAuthorChannelId;
import org.openapis.openapi.models.shared.CommentSnippetModerationStatusEnum;
import org.openapis.openapi.models.shared.CommentSnippetViewerRatingEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentsInsertRequest req = new YoutubeCommentsInsertRequest(                new String[]{{
                                add("nostrum"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                comment = new Comment() {{
                    etag = "expedita";
                    id = "6a660659-a1ad-4eaa-b585-1d6c645b08b6";
                    kind = "beatae";
                    snippet = new CommentSnippet() {{
                        authorChannelId = new CommentSnippetAuthorChannelId() {{
                            value = "voluptatum";
                        }};;
                        authorChannelUrl = "omnis";
                        authorDisplayName = "veritatis";
                        authorProfileImageUrl = "rerum";
                        canRate = false;
                        channelId = "est";
                        likeCount = 634786L;
                        moderationStatus = CommentSnippetModerationStatusEnum.PUBLISHED;
                        parentId = "sapiente";
                        publishedAt = OffsetDateTime.parse("2022-09-09T21:19:27.244Z");
                        textDisplay = "fuga";
                        textOriginal = "pariatur";
                        updatedAt = OffsetDateTime.parse("2022-11-30T00:52:48.741Z");
                        videoId = "alias";
                        viewerRating = CommentSnippetViewerRatingEnum.LIKE;
                    }};;
                }};;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "rem";
                key = "minus";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "ratione";
                uploadProtocol = "ullam";
            }};            

            YoutubeCommentsInsertResponse res = sdk.comments.youtubeCommentsInsert(req, new YoutubeCommentsInsertSecurity("perferendis", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## youtubeCommentsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentsListRequest;
import org.openapis.openapi.models.operations.YoutubeCommentsListResponse;
import org.openapis.openapi.models.operations.YoutubeCommentsListSecurity;
import org.openapis.openapi.models.operations.YoutubeCommentsListTextFormatEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentsListRequest req = new YoutubeCommentsListRequest(                new String[]{{
                                add("impedit"),
                                add("quibusdam"),
                                add("nam"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "inventore";
                id = new String[]{{
                    add("veritatis"),
                    add("tempora"),
                    add("dolor"),
                }};
                key = "consequatur";
                maxResults = 100014L;
                oauthToken = "sit";
                pageToken = "modi";
                parentId = "fugit";
                prettyPrint = false;
                quotaUser = "ab";
                textFormat = YoutubeCommentsListTextFormatEnum.HTML;
                uploadType = "quae";
                uploadProtocol = "dolor";
            }};            

            YoutubeCommentsListResponse res = sdk.comments.youtubeCommentsList(req, new YoutubeCommentsListSecurity("fugiat", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.commentListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeCommentsMarkAsSpam

Expresses the caller's opinion that one or more comments should be flagged as spam.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentsMarkAsSpamRequest;
import org.openapis.openapi.models.operations.YoutubeCommentsMarkAsSpamResponse;
import org.openapis.openapi.models.operations.YoutubeCommentsMarkAsSpamSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentsMarkAsSpamRequest req = new YoutubeCommentsMarkAsSpamRequest(                new String[]{{
                                add("ipsa"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "esse";
                key = "necessitatibus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "nesciunt";
                uploadProtocol = "expedita";
            }};            

            YoutubeCommentsMarkAsSpamResponse res = sdk.comments.youtubeCommentsMarkAsSpam(req, new YoutubeCommentsMarkAsSpamSecurity("eum", "vel") {{
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

## youtubeCommentsSetModerationStatus

Sets the moderation status of one or more comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentsSetModerationStatusModerationStatusEnum;
import org.openapis.openapi.models.operations.YoutubeCommentsSetModerationStatusRequest;
import org.openapis.openapi.models.operations.YoutubeCommentsSetModerationStatusResponse;
import org.openapis.openapi.models.operations.YoutubeCommentsSetModerationStatusSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentsSetModerationStatusRequest req = new YoutubeCommentsSetModerationStatusRequest(                new String[]{{
                                add("magnam"),
                                add("exercitationem"),
                                add("ab"),
                            }}, YoutubeCommentsSetModerationStatusModerationStatusEnum.REJECTED) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                banAuthor = false;
                callback = "recusandae";
                fields = "consequuntur";
                key = "voluptatem";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "quasi";
                uploadProtocol = "nisi";
            }};            

            YoutubeCommentsSetModerationStatusResponse res = sdk.comments.youtubeCommentsSetModerationStatus(req, new YoutubeCommentsSetModerationStatusSecurity("at", "vero") {{
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

## youtubeCommentsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeCommentsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeCommentsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentSnippet;
import org.openapis.openapi.models.shared.CommentSnippetAuthorChannelId;
import org.openapis.openapi.models.shared.CommentSnippetModerationStatusEnum;
import org.openapis.openapi.models.shared.CommentSnippetViewerRatingEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentsUpdateRequest req = new YoutubeCommentsUpdateRequest(                new String[]{{
                                add("harum"),
                                add("sequi"),
                                add("doloribus"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                comment = new Comment() {{
                    etag = "optio";
                    id = "9578a645-8427-43a8-818d-162309fb0929";
                    kind = "iste";
                    snippet = new CommentSnippet() {{
                        authorChannelId = new CommentSnippetAuthorChannelId() {{
                            value = "magni";
                        }};;
                        authorChannelUrl = "inventore";
                        authorDisplayName = "fuga";
                        authorProfileImageUrl = "accusamus";
                        canRate = false;
                        channelId = "voluptatibus";
                        likeCount = 719620L;
                        moderationStatus = CommentSnippetModerationStatusEnum.LIKELY_SPAM;
                        parentId = "delectus";
                        publishedAt = OffsetDateTime.parse("2022-06-29T17:06:44.946Z");
                        textDisplay = "maxime";
                        textOriginal = "magnam";
                        updatedAt = OffsetDateTime.parse("2021-05-09T07:07:29.255Z");
                        videoId = "commodi";
                        viewerRating = CommentSnippetViewerRatingEnum.DISLIKE;
                    }};;
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "modi";
                key = "nam";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "ipsam";
                uploadProtocol = "vel";
            }};            

            YoutubeCommentsUpdateResponse res = sdk.comments.youtubeCommentsUpdate(req, new YoutubeCommentsUpdateSecurity("alias", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
