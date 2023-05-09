# Comments

### Available Operations

* [BloggerCommentsGet](#bloggercommentsget) - Gets a comment by blog id, post id and comment id.
* [BloggerCommentsList](#bloggercommentslist) - Lists comments.

## BloggerCommentsGet

Gets a comment by blog id, post id and comment id.

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
    res, err := s.Comments.BloggerCommentsGet(ctx, operations.BloggerCommentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "quo",
        Callback: sdk.String("odit"),
        CommentID: "at",
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("molestiae"),
        PostID: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.BloggerCommentsGetSecurity{
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

## BloggerCommentsList

Lists comments.

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
    res, err := s.Comments.BloggerCommentsList(ctx, operations.BloggerCommentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "nam",
        Callback: sdk.String("officia"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        MaxResults: sdk.Int64(537373),
        OauthToken: sdk.String("hic"),
        PageToken: sdk.String("optio"),
        PostID: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        StartDate: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.BloggerCommentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentList != nil {
        // handle response
    }
}
```
