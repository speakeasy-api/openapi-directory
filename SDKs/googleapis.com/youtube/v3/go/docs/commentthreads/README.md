# CommentThreads

### Available Operations

* [YoutubeCommentThreadsInsert](#youtubecommentthreadsinsert) - Inserts a new resource into this collection.
* [YoutubeCommentThreadsList](#youtubecommentthreadslist) - Retrieves a list of resources, possibly filtered.

## YoutubeCommentThreadsInsert

Inserts a new resource into this collection.

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
    res, err := s.CommentThreads.YoutubeCommentThreadsInsert(ctx, operations.YoutubeCommentThreadsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CommentThread: &shared.CommentThread{
            Etag: sdk.String("ea"),
            ID: sdk.String("89eee952-6f8d-4986-a881-ead4f0e10125"),
            Kind: sdk.String("laboriosam"),
            Replies: &shared.CommentThreadReplies{
                Comments: []shared.Comment{
                    shared.Comment{
                        Etag: sdk.String("a"),
                        ID: sdk.String("94e29e97-3e92-42a5-ba15-be3e060807e2"),
                        Kind: sdk.String("cum"),
                        Snippet: &shared.CommentSnippet{
                            AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                                Value: sdk.String("iure"),
                            },
                            AuthorChannelURL: sdk.String("necessitatibus"),
                            AuthorDisplayName: sdk.String("ratione"),
                            AuthorProfileImageURL: sdk.String("laborum"),
                            CanRate: sdk.Bool(false),
                            ChannelID: sdk.String("distinctio"),
                            LikeCount: sdk.Int64(528940),
                            ModerationStatus: shared.CommentSnippetModerationStatusEnumLikelySpam.ToPointer(),
                            ParentID: sdk.String("aliquam"),
                            PublishedAt: types.MustTimeFromString("2022-01-01T17:51:02.411Z"),
                            TextDisplay: sdk.String("alias"),
                            TextOriginal: sdk.String("corporis"),
                            UpdatedAt: types.MustTimeFromString("2022-01-22T10:13:48.972Z"),
                            VideoID: sdk.String("mollitia"),
                            ViewerRating: shared.CommentSnippetViewerRatingEnumLike.ToPointer(),
                        },
                    },
                },
            },
            Snippet: &shared.CommentThreadSnippet{
                CanReply: sdk.Bool(false),
                ChannelID: sdk.String("alias"),
                IsPublic: sdk.Bool(false),
                TopLevelComment: &shared.Comment{
                    Etag: sdk.String("maiores"),
                    ID: sdk.String("f2a54a31-e947-464a-be86-5e7956f9251a"),
                    Kind: sdk.String("nostrum"),
                    Snippet: &shared.CommentSnippet{
                        AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                            Value: sdk.String("mollitia"),
                        },
                        AuthorChannelURL: sdk.String("provident"),
                        AuthorDisplayName: sdk.String("possimus"),
                        AuthorProfileImageURL: sdk.String("animi"),
                        CanRate: sdk.Bool(false),
                        ChannelID: sdk.String("ex"),
                        LikeCount: sdk.Int64(397257),
                        ModerationStatus: shared.CommentSnippetModerationStatusEnumPublished.ToPointer(),
                        ParentID: sdk.String("repellat"),
                        PublishedAt: types.MustTimeFromString("2021-12-11T16:15:06.555Z"),
                        TextDisplay: sdk.String("in"),
                        TextOriginal: sdk.String("nam"),
                        UpdatedAt: types.MustTimeFromString("2021-02-01T20:19:35.908Z"),
                        VideoID: sdk.String("laborum"),
                        ViewerRating: shared.CommentSnippetViewerRatingEnumDislike.ToPointer(),
                    },
                },
                TotalReplyCount: sdk.Int64(266697),
                VideoID: sdk.String("voluptatibus"),
            },
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("rerum"),
        Part: []string{
            "quis",
            "inventore",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("quae"),
    }, operations.YoutubeCommentThreadsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentThread != nil {
        // handle response
    }
}
```

## YoutubeCommentThreadsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CommentThreads.YoutubeCommentThreadsList(ctx, operations.YoutubeCommentThreadsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        AllThreadsRelatedToChannelID: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        ChannelID: sdk.String("rem"),
        Fields: sdk.String("at"),
        ID: []string{
            "eos",
            "sapiente",
            "eum",
            "dicta",
        },
        Key: sdk.String("minima"),
        MaxResults: sdk.Int64(107004),
        ModerationStatus: operations.YoutubeCommentThreadsListModerationStatusEnumLikelySpam.ToPointer(),
        OauthToken: sdk.String("provident"),
        Order: operations.YoutubeCommentThreadsListOrderEnumRelevance.ToPointer(),
        PageToken: sdk.String("soluta"),
        Part: []string{
            "illum",
            "eaque",
            "earum",
            "perspiciatis",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        SearchTerms: sdk.String("debitis"),
        TextFormat: operations.YoutubeCommentThreadsListTextFormatEnumHTML.ToPointer(),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("suscipit"),
        VideoID: sdk.String("dolorem"),
    }, operations.YoutubeCommentThreadsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentThreadListResponse != nil {
        // handle response
    }
}
```
