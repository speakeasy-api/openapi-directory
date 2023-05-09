# youtube

### Available Operations

* [youtubeYoutubeV3UpdateCommentThreads](#youtubeyoutubev3updatecommentthreads) - Updates an existing resource.

## youtubeYoutubeV3UpdateCommentThreads

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeYoutubeV3UpdateCommentThreadsRequest;
import org.openapis.openapi.models.operations.YoutubeYoutubeV3UpdateCommentThreadsResponse;
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

            YoutubeYoutubeV3UpdateCommentThreadsRequest req = new YoutubeYoutubeV3UpdateCommentThreadsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                commentThread = new CommentThread() {{
                    etag = "in";
                    id = "24cdb0f4-d281-4187-9568-44eded85a906";
                    kind = "nostrum";
                    replies = new CommentThreadReplies() {{
                        comments = new org.openapis.openapi.models.shared.Comment[]{{
                            add(new Comment() {{
                                etag = "laboriosam";
                                id = "28bdfc20-32b6-4c87-9923-b7e13584f7ae";
                                kind = "et";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "eos";
                                    }};
                                    authorChannelUrl = "impedit";
                                    authorDisplayName = "ex";
                                    authorProfileImageUrl = "praesentium";
                                    canRate = false;
                                    channelId = "natus";
                                    likeCount = 112014L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.REJECTED;
                                    parentId = "laudantium";
                                    publishedAt = OffsetDateTime.parse("2022-03-31T08:06:02.567Z");
                                    textDisplay = "repudiandae";
                                    textOriginal = "dicta";
                                    updatedAt = OffsetDateTime.parse("2022-08-23T23:11:51.264Z");
                                    videoId = "iusto";
                                    viewerRating = CommentSnippetViewerRatingEnum.NONE;
                                }};
                            }}),
                            add(new Comment() {{
                                etag = "voluptate";
                                id = "2305377d-cfa8-49df-975e-356686092e9c";
                                kind = "dolor";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "repellendus";
                                    }};
                                    authorChannelUrl = "temporibus";
                                    authorDisplayName = "minus";
                                    authorProfileImageUrl = "minima";
                                    canRate = false;
                                    channelId = "a";
                                    likeCount = 104834L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.PUBLISHED;
                                    parentId = "veritatis";
                                    publishedAt = OffsetDateTime.parse("2020-03-10T20:24:25.574Z");
                                    textDisplay = "laborum";
                                    textOriginal = "dicta";
                                    updatedAt = OffsetDateTime.parse("2022-11-10T13:37:48.824Z");
                                    videoId = "aliquid";
                                    viewerRating = CommentSnippetViewerRatingEnum.DISLIKE;
                                }};
                            }}),
                            add(new Comment() {{
                                etag = "enim";
                                id = "41a4d190-feb2-4178-8bcc-c0dbbddb4847";
                                kind = "doloremque";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "corrupti";
                                    }};
                                    authorChannelUrl = "reiciendis";
                                    authorDisplayName = "facilis";
                                    authorProfileImageUrl = "aliquam";
                                    canRate = false;
                                    channelId = "repudiandae";
                                    likeCount = 227424L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.LIKELY_SPAM;
                                    parentId = "ab";
                                    publishedAt = OffsetDateTime.parse("2021-09-17T08:14:24.561Z");
                                    textDisplay = "rerum";
                                    textOriginal = "placeat";
                                    updatedAt = OffsetDateTime.parse("2022-09-06T08:22:07.307Z");
                                    videoId = "blanditiis";
                                    viewerRating = CommentSnippetViewerRatingEnum.DISLIKE;
                                }};
                            }}),
                            add(new Comment() {{
                                etag = "labore";
                                id = "c4e54599-ea34-4226-8e9b-200ce78a1bd8";
                                kind = "maiores";
                                snippet = new CommentSnippet() {{
                                    authorChannelId = new CommentSnippetAuthorChannelId() {{
                                        value = "quidem";
                                    }};
                                    authorChannelUrl = "in";
                                    authorDisplayName = "culpa";
                                    authorProfileImageUrl = "doloremque";
                                    canRate = false;
                                    channelId = "fuga";
                                    likeCount = 117546L;
                                    moderationStatus = CommentSnippetModerationStatusEnum.PUBLISHED;
                                    parentId = "suscipit";
                                    publishedAt = OffsetDateTime.parse("2020-05-06T08:27:54.041Z");
                                    textDisplay = "dignissimos";
                                    textOriginal = "fugit";
                                    updatedAt = OffsetDateTime.parse("2022-03-06T05:50:48.234Z");
                                    videoId = "quaerat";
                                    viewerRating = CommentSnippetViewerRatingEnum.NONE;
                                }};
                            }}),
                        }};
                    }};;
                    snippet = new CommentThreadSnippet() {{
                        canReply = false;
                        channelId = "natus";
                        isPublic = false;
                        topLevelComment = new Comment() {{
                            etag = "esse";
                            id = "fa30e9af-725b-4291-a203-0d83f5aeb779";
                            kind = "occaecati";
                            snippet = new CommentSnippet() {{
                                authorChannelId = new CommentSnippetAuthorChannelId() {{
                                    value = "assumenda";
                                }};;
                                authorChannelUrl = "sunt";
                                authorDisplayName = "odit";
                                authorProfileImageUrl = "vero";
                                canRate = false;
                                channelId = "deleniti";
                                likeCount = 760793L;
                                moderationStatus = CommentSnippetModerationStatusEnum.PUBLISHED;
                                parentId = "repellat";
                                publishedAt = OffsetDateTime.parse("2022-05-28T15:53:37.829Z");
                                textDisplay = "perspiciatis";
                                textOriginal = "amet";
                                updatedAt = OffsetDateTime.parse("2022-10-01T15:10:03.132Z");
                                videoId = "nemo";
                                viewerRating = CommentSnippetViewerRatingEnum.DISLIKE;
                            }};;
                        }};;
                        totalReplyCount = 848439L;
                        videoId = "porro";
                    }};;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "quos";
                key = "in";
                oauthToken = "commodi";
                part = new String[]{{
                    add("sed"),
                    add("minus"),
                    add("consequuntur"),
                    add("possimus"),
                }};
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "harum";
                uploadProtocol = "aliquam";
            }};            

            YoutubeYoutubeV3UpdateCommentThreadsResponse res = sdk.youtube.youtubeYoutubeV3UpdateCommentThreads(req);

            if (res.commentThread != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
