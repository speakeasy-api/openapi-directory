# Comments

### Available Operations

* [YoutubeCommentsDelete](#youtubecommentsdelete) - Deletes a resource.
* [YoutubeCommentsInsert](#youtubecommentsinsert) - Inserts a new resource into this collection.
* [YoutubeCommentsList](#youtubecommentslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeCommentsMarkAsSpam](#youtubecommentsmarkasspam) - Expresses the caller's opinion that one or more comments should be flagged as spam.
* [YoutubeCommentsSetModerationStatus](#youtubecommentssetmoderationstatus) - Sets the moderation status of one or more comments.
* [YoutubeCommentsUpdate](#youtubecommentsupdate) - Updates an existing resource.

## YoutubeCommentsDelete

Deletes a resource.

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
    res, err := s.Comments.YoutubeCommentsDelete(ctx, operations.YoutubeCommentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("animi"),
        ID: "ed011799-6312-4fde-8477-1778ff61d017",
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.YoutubeCommentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeCommentsInsert

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
    res, err := s.Comments.YoutubeCommentsInsert(ctx, operations.YoutubeCommentsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Comment: &shared.Comment{
            Etag: sdk.String("laborum"),
            ID: sdk.String("15db6a66-0659-4a1a-9eaa-b5851d6c645b"),
            Kind: sdk.String("voluptatem"),
            Snippet: &shared.CommentSnippet{
                AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                    Value: sdk.String("molestias"),
                },
                AuthorChannelURL: sdk.String("cum"),
                AuthorDisplayName: sdk.String("aliquid"),
                AuthorProfileImageURL: sdk.String("beatae"),
                CanRate: sdk.Bool(false),
                ChannelID: sdk.String("voluptatum"),
                LikeCount: sdk.Int64(606308),
                ModerationStatus: shared.CommentSnippetModerationStatusEnumPublished.ToPointer(),
                ParentID: sdk.String("rerum"),
                PublishedAt: types.MustTimeFromString("2021-09-24T14:32:36.483Z"),
                TextDisplay: sdk.String("voluptatem"),
                TextOriginal: sdk.String("sapiente"),
                UpdatedAt: types.MustTimeFromString("2022-09-09T21:19:27.244Z"),
                VideoID: sdk.String("fuga"),
                ViewerRating: shared.CommentSnippetViewerRatingEnumDislike.ToPointer(),
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("ex"),
        Part: []string{
            "rem",
            "minus",
            "nemo",
            "asperiores",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.YoutubeCommentsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## YoutubeCommentsList

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
    res, err := s.Comments.YoutubeCommentsList(ctx, operations.YoutubeCommentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("nam"),
        ID: []string{
            "culpa",
            "dolor",
        },
        Key: sdk.String("aliquam"),
        MaxResults: sdk.Int64(80532),
        OauthToken: sdk.String("deleniti"),
        PageToken: sdk.String("veritatis"),
        ParentID: sdk.String("tempora"),
        Part: []string{
            "consequatur",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        TextFormat: operations.YoutubeCommentsListTextFormatEnumTextFormatUnspecified.ToPointer(),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.YoutubeCommentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentListResponse != nil {
        // handle response
    }
}
```

## YoutubeCommentsMarkAsSpam

Expresses the caller's opinion that one or more comments should be flagged as spam.

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
    res, err := s.Comments.YoutubeCommentsMarkAsSpam(ctx, operations.YoutubeCommentsMarkAsSpamRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("fugiat"),
        ID: []string{
            "consequuntur",
            "ipsa",
        },
        Key: sdk.String("quas"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("esse"),
    }, operations.YoutubeCommentsMarkAsSpamSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeCommentsSetModerationStatus

Sets the moderation status of one or more comments.

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
    res, err := s.Comments.YoutubeCommentsSetModerationStatus(ctx, operations.YoutubeCommentsSetModerationStatusRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BanAuthor: sdk.Bool(false),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("expedita"),
        ID: []string{
            "vel",
            "voluptatum",
        },
        Key: sdk.String("magnam"),
        ModerationStatus: operations.YoutubeCommentsSetModerationStatusModerationStatusEnumHeldForReview,
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.YoutubeCommentsSetModerationStatusSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeCommentsUpdate

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
    res, err := s.Comments.YoutubeCommentsUpdate(ctx, operations.YoutubeCommentsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Comment: &shared.Comment{
            Etag: sdk.String("recusandae"),
            ID: sdk.String("205e16de-ab3f-4ec9-978a-64584273a841"),
            Kind: sdk.String("rem"),
            Snippet: &shared.CommentSnippet{
                AuthorChannelID: &shared.CommentSnippetAuthorChannelID{
                    Value: sdk.String("fugiat"),
                },
                AuthorChannelURL: sdk.String("dicta"),
                AuthorDisplayName: sdk.String("nisi"),
                AuthorProfileImageURL: sdk.String("consequuntur"),
                CanRate: sdk.Bool(false),
                ChannelID: sdk.String("consectetur"),
                LikeCount: sdk.Int64(46806),
                ModerationStatus: shared.CommentSnippetModerationStatusEnumLikelySpam.ToPointer(),
                ParentID: sdk.String("reiciendis"),
                PublishedAt: types.MustTimeFromString("2022-12-29T04:21:58.833Z"),
                TextDisplay: sdk.String("omnis"),
                TextOriginal: sdk.String("eos"),
                UpdatedAt: types.MustTimeFromString("2021-10-10T14:34:27.546Z"),
                VideoID: sdk.String("magni"),
                ViewerRating: shared.CommentSnippetViewerRatingEnumNone.ToPointer(),
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("delectus"),
        Part: []string{
            "praesentium",
            "maxime",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("quos"),
    }, operations.YoutubeCommentsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```
