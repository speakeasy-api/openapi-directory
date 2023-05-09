# commentThreads

### Available Operations

* [youtubeCommentThreadsInsert](#youtubecommentthreadsinsert) - Inserts a new resource into this collection.
* [youtubeCommentThreadsList](#youtubecommentthreadslist) - Retrieves a list of resources, possibly filtered.

## youtubeCommentThreadsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentSnippet;
import org.openapis.openapi.models.shared.CommentSnippetAuthorChannelId;
import org.openapis.openapi.models.shared.CommentSnippetModerationStatusEnum;
import org.openapis.openapi.models.shared.CommentSnippetViewerRatingEnum;
import org.openapis.openapi.models.shared.CommentThread;
import org.openapis.openapi.models.shared.CommentThreadReplies;
import org.openapis.openapi.models.shared.CommentThreadSnippet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentThreadsInsertRequest req = new YoutubeCommentThreadsInsertRequest(                new String[]{{
                                add("non"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                commentThread = new CommentThread() {{
                    etag = "praesentium";
                    id = "b445e80c-a55e-4fd2-8e45-7e1858b6a89f";
                    kind = "expedita";
                    replies = new CommentThreadReplies() {{
                        comments = new org.openapis.openapi.models.shared.Comment[]{{
                            add(new Comment() {{
                                etag = "neque";
                                id = "a5aa8e48-24d0-4ab4-8750-88e51862065e";
                                kind = "error";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "consequatur";
                                    }};
                                    authorChannelUrl = "incidunt";
                                    authorDisplayName = "reiciendis";
                                    authorProfileImageUrl = "dolorem";
                                    canRate = false;
                                    channelId = "harum";
                                    likeCount = 115703L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.PUBLISHED;
                                    parentId = "occaecati";
                                    publishedAt = OffsetDateTime.parse("2022-04-22T05:26:04.783Z");
                                    textDisplay = "atque";
                                    textOriginal = "laborum";
                                    updatedAt = OffsetDateTime.parse("2021-02-07T07:57:17.421Z");
                                    videoId = "laboriosam";
                                    viewerRating = CommentSnippetViewerRatingEnum.NONE;
                                }};
                            }}),
                            add(new Comment() {{
                                etag = "amet";
                                id = "a79f9dfe-0ab7-4da8-a50c-e187f86bc173";
                                kind = "assumenda";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "ea";
                                    }};
                                    authorChannelUrl = "atque";
                                    authorDisplayName = "error";
                                    authorProfileImageUrl = "officiis";
                                    canRate = false;
                                    channelId = "officiis";
                                    likeCount = 880107L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.LIKELY_SPAM;
                                    parentId = "minima";
                                    publishedAt = OffsetDateTime.parse("2022-08-06T09:14:14.585Z");
                                    textDisplay = "maiores";
                                    textOriginal = "corrupti";
                                    updatedAt = OffsetDateTime.parse("2021-02-19T05:54:38.127Z");
                                    videoId = "blanditiis";
                                    viewerRating = CommentSnippetViewerRatingEnum.LIKE;
                                }};
                            }}),
                            add(new Comment() {{
                                etag = "repudiandae";
                                id = "881ead4f-0e10-4125-a3f9-4e29e973e922";
                                kind = "id";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "quis";
                                    }};
                                    authorChannelUrl = "reprehenderit";
                                    authorDisplayName = "error";
                                    authorProfileImageUrl = "illo";
                                    canRate = false;
                                    channelId = "corporis";
                                    likeCount = 696463L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.REJECTED;
                                    parentId = "non";
                                    publishedAt = OffsetDateTime.parse("2022-11-18T14:54:13.655Z");
                                    textDisplay = "iure";
                                    textOriginal = "ipsa";
                                    updatedAt = OffsetDateTime.parse("2022-11-17T09:54:13.457Z");
                                    videoId = "molestiae";
                                    viewerRating = CommentSnippetViewerRatingEnum.DISLIKE;
                                }};
                            }}),
                            add(new Comment() {{
                                etag = "qui";
                                id = "b6e3ab88-45f0-4597-a60f-f2a54a31e947";
                                kind = "ex";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "ut";
                                    }};
                                    authorChannelUrl = "culpa";
                                    authorDisplayName = "adipisci";
                                    authorProfileImageUrl = "debitis";
                                    canRate = false;
                                    channelId = "laudantium";
                                    likeCount = 432606L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.HELD_FOR_REVIEW;
                                    parentId = "recusandae";
                                    publishedAt = OffsetDateTime.parse("2022-05-29T21:22:23.687Z");
                                    textDisplay = "quis";
                                    textOriginal = "eum";
                                    updatedAt = OffsetDateTime.parse("2021-03-22T21:44:03.640Z");
                                    videoId = "aspernatur";
                                    viewerRating = CommentSnippetViewerRatingEnum.LIKE;
                                }};
                            }}),
                        }};
                    }};;
                    snippet = new CommentThreadSnippet() {{
                        canReply = false;
                        channelId = "quasi";
                        isPublic = false;
                        topLevelComment = new Comment() {{
                            etag = "animi";
                            id = "5a9da660-ff57-4bfa-ad4f-9efc1b4512c1";
                            kind = "perferendis";
                            snippet = new CommentSnippet() {{
                                authorChannelId = new CommentSnippetAuthorChannelId() {{
                                    value = "velit";
                                }};;
                                authorChannelUrl = "aspernatur";
                                authorDisplayName = "eum";
                                authorProfileImageUrl = "eius";
                                canRate = false;
                                channelId = "rem";
                                likeCount = 871083L;
                                moderationStatus = CommentSnippetModerationStatusEnum.REJECTED;
                                parentId = "eos";
                                publishedAt = OffsetDateTime.parse("2021-09-13T13:26:04.826Z");
                                textDisplay = "dicta";
                                textOriginal = "minima";
                                updatedAt = OffsetDateTime.parse("2022-06-02T01:22:45.175Z");
                                videoId = "provident";
                                viewerRating = CommentSnippetViewerRatingEnum.DISLIKE;
                            }};;
                        }};;
                        totalReplyCount = 745398L;
                        videoId = "hic";
                    }};;
                }};;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "perspiciatis";
                key = "maiores";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "porro";
                uploadProtocol = "suscipit";
            }};            

            YoutubeCommentThreadsInsertResponse res = sdk.commentThreads.youtubeCommentThreadsInsert(req, new YoutubeCommentThreadsInsertSecurity("dolorem", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.commentThread != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeCommentThreadsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsListModerationStatusEnum;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsListOrderEnum;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsListRequest;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsListResponse;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsListSecurity;
import org.openapis.openapi.models.operations.YoutubeCommentThreadsListTextFormatEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCommentThreadsListRequest req = new YoutubeCommentThreadsListRequest(                new String[]{{
                                add("fuga"),
                                add("ratione"),
                                add("animi"),
                                add("necessitatibus"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                allThreadsRelatedToChannelId = "quasi";
                alt = AltEnum.JSON;
                callback = "ducimus";
                channelId = "natus";
                fields = "occaecati";
                id = new String[]{{
                    add("adipisci"),
                    add("quasi"),
                }};
                key = "magni";
                maxResults = 984934L;
                moderationStatus = YoutubeCommentThreadsListModerationStatusEnum.REJECTED;
                oauthToken = "necessitatibus";
                order = YoutubeCommentThreadsListOrderEnum.ORDER_UNSPECIFIED;
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "nihil";
                searchTerms = "molestiae";
                textFormat = YoutubeCommentThreadsListTextFormatEnum.TEXT_FORMAT_UNSPECIFIED;
                uploadType = "iusto";
                uploadProtocol = "esse";
                videoId = "praesentium";
            }};            

            YoutubeCommentThreadsListResponse res = sdk.commentThreads.youtubeCommentThreadsList(req, new YoutubeCommentThreadsListSecurity("maiores", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.commentThreadListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
