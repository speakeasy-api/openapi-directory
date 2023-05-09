# Youtube

### Available Operations

* [YoutubeYoutubeV3UpdateCommentThreads](#youtubeyoutubev3updatecommentthreads) - Updates an existing resource.

## YoutubeYoutubeV3UpdateCommentThreads

Updates an existing resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Youtube.YoutubeYoutubeV3UpdateCommentThreads(ctx, operations.YoutubeYoutubeV3UpdateCommentThreadsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CommentThread: &shared.CommentThread{
            Etag: sdk.String("ratione"),
            ID: sdk.String("0e9af725-b291-4220-b0d8-3f5aeb7799d2"),
            Kind: sdk.String("odit"),
            Replies: &shared.CommentThreadReplies{
                Comments: []shared.Comment{
                    shared.Comment{
                        Etag: sdk.String("deleniti"),
                        ID: sdk.String("c1f84938-25fd-4c42-8876-c2c2dfb4cfc1"),
                        Kind: sdk.String("nobis"),
                        Snippet: &shared.CommentSnippet{
                            AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                                Value: sdk.String("esse"),
                            },
                            AuthorChannelURL: sdk.String("nisi"),
                            AuthorDisplayName: sdk.String("explicabo"),
                            AuthorProfileImageURL: sdk.String("sequi"),
                            CanRate: sdk.Bool(false),
                            ChannelID: sdk.String("alias"),
                            LikeCount: sdk.Int64(970131),
                            ModerationStatus: shared.CommentSnippetModerationStatusEnumLikelySpam.ToPointer(),
                            ParentID: sdk.String("numquam"),
                            PublishedAt: types.MustTimeFromString("2022-01-08T03:54:51.622Z"),
                            TextDisplay: sdk.String("nam"),
                            TextOriginal: sdk.String("architecto"),
                            UpdatedAt: types.MustTimeFromString("2021-05-07T07:24:27.219Z"),
                            VideoID: sdk.String("eos"),
                            ViewerRating: shared.CommentSnippetViewerRatingEnumNone.ToPointer(),
                        },
                    },
                    shared.Comment{
                        Etag: sdk.String("hic"),
                        ID: sdk.String("db14db6b-e5a6-4859-98e2-2ae20da16fc2"),
                        Kind: sdk.String("nam"),
                        Snippet: &shared.CommentSnippet{
                            AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                                Value: sdk.String("quia"),
                            },
                            AuthorChannelURL: sdk.String("iusto"),
                            AuthorDisplayName: sdk.String("ab"),
                            AuthorProfileImageURL: sdk.String("deserunt"),
                            CanRate: sdk.Bool(false),
                            ChannelID: sdk.String("sed"),
                            LikeCount: sdk.Int64(501773),
                            ModerationStatus: shared.CommentSnippetModerationStatusEnumLikelySpam.ToPointer(),
                            ParentID: sdk.String("placeat"),
                            PublishedAt: types.MustTimeFromString("2022-07-11T05:30:15.004Z"),
                            TextDisplay: sdk.String("itaque"),
                            TextOriginal: sdk.String("rem"),
                            UpdatedAt: types.MustTimeFromString("2022-10-01T13:26:22.130Z"),
                            VideoID: sdk.String("recusandae"),
                            ViewerRating: shared.CommentSnippetViewerRatingEnumLike.ToPointer(),
                        },
                    },
                    shared.Comment{
                        Etag: sdk.String("ipsa"),
                        ID: sdk.String("439d2224-6569-4462-8070-84f7ab37cef0"),
                        Kind: sdk.String("sed"),
                        Snippet: &shared.CommentSnippet{
                            AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                                Value: sdk.String("eos"),
                            },
                            AuthorChannelURL: sdk.String("consequuntur"),
                            AuthorDisplayName: sdk.String("quis"),
                            AuthorProfileImageURL: sdk.String("vitae"),
                            CanRate: sdk.Bool(false),
                            ChannelID: sdk.String("occaecati"),
                            LikeCount: sdk.Int64(290761),
                            ModerationStatus: shared.CommentSnippetModerationStatusEnumRejected.ToPointer(),
                            ParentID: sdk.String("quidem"),
                            PublishedAt: types.MustTimeFromString("2022-09-01T12:52:28.728Z"),
                            TextDisplay: sdk.String("modi"),
                            TextOriginal: sdk.String("quasi"),
                            UpdatedAt: types.MustTimeFromString("2022-05-16T02:03:34.304Z"),
                            VideoID: sdk.String("possimus"),
                            ViewerRating: shared.CommentSnippetViewerRatingEnumDislike.ToPointer(),
                        },
                    },
                    shared.Comment{
                        Etag: sdk.String("suscipit"),
                        ID: sdk.String("69af90a2-6c7c-4dc9-81f0-68981d6bb33c"),
                        Kind: sdk.String("hic"),
                        Snippet: &shared.CommentSnippet{
                            AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                                Value: sdk.String("similique"),
                            },
                            AuthorChannelURL: sdk.String("fuga"),
                            AuthorDisplayName: sdk.String("consectetur"),
                            AuthorProfileImageURL: sdk.String("labore"),
                            CanRate: sdk.Bool(false),
                            ChannelID: sdk.String("laudantium"),
                            LikeCount: sdk.Int64(768999),
                            ModerationStatus: shared.CommentSnippetModerationStatusEnumPublished.ToPointer(),
                            ParentID: sdk.String("veritatis"),
                            PublishedAt: types.MustTimeFromString("2021-01-19T09:57:07.431Z"),
                            TextDisplay: sdk.String("magnam"),
                            TextOriginal: sdk.String("aperiam"),
                            UpdatedAt: types.MustTimeFromString("2022-01-25T06:55:35.087Z"),
                            VideoID: sdk.String("necessitatibus"),
                            ViewerRating: shared.CommentSnippetViewerRatingEnumNone.ToPointer(),
                        },
                    },
                },
            },
            Snippet: &shared.CommentThreadSnippet{
                CanReply: sdk.Bool(false),
                ChannelID: sdk.String("doloribus"),
                IsPublic: sdk.Bool(false),
                TopLevelComment: &shared.Comment{
                    Etag: sdk.String("eligendi"),
                    ID: sdk.String("f0c42b78-f156-4263-98a0-dc766324ccb0"),
                    Kind: sdk.String("ea"),
                    Snippet: &shared.CommentSnippet{
                        AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                            Value: sdk.String("impedit"),
                        },
                        AuthorChannelURL: sdk.String("totam"),
                        AuthorDisplayName: sdk.String("optio"),
                        AuthorProfileImageURL: sdk.String("est"),
                        CanRate: sdk.Bool(false),
                        ChannelID: sdk.String("inventore"),
                        LikeCount: sdk.Int64(164805),
                        ModerationStatus: shared.CommentSnippetModerationStatusEnumRejected.ToPointer(),
                        ParentID: sdk.String("sit"),
                        PublishedAt: types.MustTimeFromString("2022-09-07T02:40:02.575Z"),
                        TextDisplay: sdk.String("aspernatur"),
                        TextOriginal: sdk.String("perspiciatis"),
                        UpdatedAt: types.MustTimeFromString("2022-07-07T09:19:49.741Z"),
                        VideoID: sdk.String("alias"),
                        ViewerRating: shared.CommentSnippetViewerRatingEnumDislike.ToPointer(),
                    },
                },
                TotalReplyCount: sdk.Int64(533457),
                VideoID: sdk.String("possimus"),
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("illum"),
        Part: []string{
            "sint",
            "exercitationem",
            "cum",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentThread != nil {
        // handle response
    }
}
```
