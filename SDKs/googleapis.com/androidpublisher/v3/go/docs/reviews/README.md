# Reviews

### Available Operations

* [AndroidpublisherReviewsGet](#androidpublisherreviewsget) - Gets a single review.
* [AndroidpublisherReviewsList](#androidpublisherreviewslist) - Lists all reviews.
* [AndroidpublisherReviewsReply](#androidpublisherreviewsreply) - Replies to a single review, or updates an existing reply.

## AndroidpublisherReviewsGet

Gets a single review.

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
    res, err := s.Reviews.AndroidpublisherReviewsGet(ctx, operations.AndroidpublisherReviewsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("minus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("id"),
        PackageName: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        ReviewID: "libero",
        TranslationLanguage: sdk.String("quo"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AndroidpublisherReviewsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Review != nil {
        // handle response
    }
}
```

## AndroidpublisherReviewsList

Lists all reviews.

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
    res, err := s.Reviews.AndroidpublisherReviewsList(ctx, operations.AndroidpublisherReviewsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("eligendi"),
        MaxResults: sdk.Int64(927490),
        OauthToken: sdk.String("veritatis"),
        PackageName: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        StartIndex: sdk.Int64(480421),
        Token: sdk.String("dolor"),
        TranslationLanguage: sdk.String("voluptates"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("magni"),
    }, operations.AndroidpublisherReviewsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReviewsListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherReviewsReply

Replies to a single review, or updates an existing reply.

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
    res, err := s.Reviews.AndroidpublisherReviewsReply(ctx, operations.AndroidpublisherReviewsReplyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReviewsReplyRequest: &shared.ReviewsReplyRequest{
            ReplyText: sdk.String("doloremque"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("eum"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("voluptatum"),
        PackageName: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        ReviewID: "atque",
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AndroidpublisherReviewsReplySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReviewsReplyResponse != nil {
        // handle response
    }
}
```
