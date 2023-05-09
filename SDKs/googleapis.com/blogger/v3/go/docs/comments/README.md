# Comments

### Available Operations

* [BloggerCommentsApprove](#bloggercommentsapprove) - Marks a comment as not spam by blog id, post id and comment id.
* [BloggerCommentsDelete](#bloggercommentsdelete) - Deletes a comment by blog id, post id and comment id.
* [BloggerCommentsGet](#bloggercommentsget) - Gets a comment by id.
* [BloggerCommentsList](#bloggercommentslist) - Lists comments.
* [BloggerCommentsListByBlog](#bloggercommentslistbyblog) - Lists comments by blog.
* [BloggerCommentsMarkAsSpam](#bloggercommentsmarkasspam) - Marks a comment as spam by blog id, post id and comment id.
* [BloggerCommentsRemoveContent](#bloggercommentsremovecontent) - Removes the content of a comment by blog id, post id and comment id.

## BloggerCommentsApprove

Marks a comment as not spam by blog id, post id and comment id.

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
    res, err := s.Comments.BloggerCommentsApprove(ctx, operations.BloggerCommentsApproveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "natus",
        Callback: sdk.String("laboriosam"),
        CommentID: "hic",
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PostID: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.BloggerCommentsApproveSecurity{
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

## BloggerCommentsDelete

Deletes a comment by blog id, post id and comment id.

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
    res, err := s.Comments.BloggerCommentsDelete(ctx, operations.BloggerCommentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "reiciendis",
        Callback: sdk.String("est"),
        CommentID: "mollitia",
        Fields: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("dolorem"),
        PostID: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BloggerCommentsDeleteSecurity{
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

## BloggerCommentsGet

Gets a comment by id.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "excepturi",
        Callback: sdk.String("accusantium"),
        CommentID: "iure",
        Fields: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        PostID: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
        View: operations.BloggerCommentsGetViewEnumViewTypeUnspecified.ToPointer(),
    }, operations.BloggerCommentsGetSecurity{
        Option1: &operations.BloggerCommentsGetSecurityOption1{
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
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "numquam",
        Callback: sdk.String("commodi"),
        EndDate: sdk.String("quam"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        MaxResults: sdk.Int64(623510),
        OauthToken: sdk.String("quia"),
        PageToken: sdk.String("quis"),
        PostID: "vitae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        StartDate: sdk.String("animi"),
        Status: operations.BloggerCommentsListStatusEnumEmptied.ToPointer(),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
        View: operations.BloggerCommentsListViewEnumViewTypeUnspecified.ToPointer(),
    }, operations.BloggerCommentsListSecurity{
        Option1: &operations.BloggerCommentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentList != nil {
        // handle response
    }
}
```

## BloggerCommentsListByBlog

Lists comments by blog.

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
    res, err := s.Comments.BloggerCommentsListByBlog(ctx, operations.BloggerCommentsListByBlogRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "possimus",
        Callback: sdk.String("aut"),
        EndDate: sdk.String("quasi"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("error"),
        Key: sdk.String("temporibus"),
        MaxResults: sdk.Int64(673660),
        OauthToken: sdk.String("quasi"),
        PageToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        StartDate: sdk.String("vero"),
        Status: []BloggerCommentsListByBlogStatusEnum{
            operations.BloggerCommentsListByBlogStatusEnumPending,
            operations.BloggerCommentsListByBlogStatusEnumSpam,
        },
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.BloggerCommentsListByBlogSecurity{
        Option1: &operations.BloggerCommentsListByBlogSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentList != nil {
        // handle response
    }
}
```

## BloggerCommentsMarkAsSpam

Marks a comment as spam by blog id, post id and comment id.

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
    res, err := s.Comments.BloggerCommentsMarkAsSpam(ctx, operations.BloggerCommentsMarkAsSpamRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "doloremque",
        Callback: sdk.String("reprehenderit"),
        CommentID: "ut",
        Fields: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PostID: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.BloggerCommentsMarkAsSpamSecurity{
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

## BloggerCommentsRemoveContent

Removes the content of a comment by blog id, post id and comment id.

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
    res, err := s.Comments.BloggerCommentsRemoveContent(ctx, operations.BloggerCommentsRemoveContentRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "repudiandae",
        Callback: sdk.String("quae"),
        CommentID: "ipsum",
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PostID: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
    }, operations.BloggerCommentsRemoveContentSecurity{
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
