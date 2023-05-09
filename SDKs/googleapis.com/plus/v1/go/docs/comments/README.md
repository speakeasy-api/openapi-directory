# Comments

### Available Operations

* [PlusCommentsGet](#pluscommentsget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusCommentsList](#pluscommentslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## PlusCommentsGet

Shut down. See https://developers.google.com/+/api-shutdown for more details.

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
    res, err := s.Comments.PlusCommentsGet(ctx, operations.PlusCommentsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "veritatis",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UserIP: sdk.String("sapiente"),
    }, operations.PlusCommentsGetSecurity{
        Option1: &operations.PlusCommentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## PlusCommentsList

Shut down. See https://developers.google.com/+/api-shutdown for more details.

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
    res, err := s.Comments.PlusCommentsList(ctx, operations.PlusCommentsListRequest{
        ActivityID: "quo",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        MaxResults: sdk.Int64(870088),
        OauthToken: sdk.String("maiores"),
        PageToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        SortOrder: operations.PlusCommentsListSortOrderEnumDescending.ToPointer(),
        UserIP: sdk.String("esse"),
    }, operations.PlusCommentsListSecurity{
        Option1: &operations.PlusCommentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentFeed != nil {
        // handle response
    }
}
```
