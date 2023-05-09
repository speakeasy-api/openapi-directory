# Reviews

### Available Operations

* [AndroidpublisherReviewsGet](#androidpublisherreviewsget) - Returns a single review.
* [AndroidpublisherReviewsList](#androidpublisherreviewslist) - Returns a list of reviews. Only reviews from last week will be returned.
* [AndroidpublisherReviewsReply](#androidpublisherreviewsreply) - Reply to a single review, or update an existing reply.

## AndroidpublisherReviewsGet

Returns a single review.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("odio"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("esse"),
        PackageName: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        ReviewID: "fuga",
        TranslationLanguage: sdk.String("reprehenderit"),
        UserIP: sdk.String("quidem"),
    }, operations.AndroidpublisherReviewsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherReviewsList

Returns a list of reviews. Only reviews from last week will be returned.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ut"),
        MaxResults: sdk.Int64(433439),
        OauthToken: sdk.String("suscipit"),
        PackageName: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        StartIndex: sdk.Int64(509342),
        Token: sdk.String("quisquam"),
        TranslationLanguage: sdk.String("veritatis"),
        UserIP: sdk.String("ipsa"),
    }, operations.AndroidpublisherReviewsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherReviewsReply

Reply to a single review, or update an existing reply.

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
        ReviewsReplyRequest: &shared.ReviewsReplyRequest{
            ReplyText: sdk.String("id"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quidem"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("quo"),
        PackageName: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        ReviewID: "fuga",
        UserIP: sdk.String("eius"),
    }, operations.AndroidpublisherReviewsReplySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
