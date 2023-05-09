# Replies

### Available Operations

* [DriveRepliesDelete](#driverepliesdelete) - Deletes a reply.
* [DriveRepliesGet](#driverepliesget) - Gets a reply.
* [DriveRepliesInsert](#driverepliesinsert) - Creates a new reply to the given comment.
* [DriveRepliesList](#drivereplieslist) - Lists all of the replies to a comment.
* [DriveRepliesPatch](#driverepliespatch) - Updates an existing reply.
* [DriveRepliesUpdate](#driverepliesupdate) - Updates an existing reply.

## DriveRepliesDelete

Deletes a reply.

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
    res, err := s.Replies.DriveRepliesDelete(ctx, operations.DriveRepliesDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "quisquam",
        Fields: sdk.String("quasi"),
        FileID: "fugit",
        Key: sdk.String("quo"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        ReplyID: "id",
        UserIP: sdk.String("quibusdam"),
    }, operations.DriveRepliesDeleteSecurity{
        Option1: &operations.DriveRepliesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DriveRepliesGet

Gets a reply.

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
    res, err := s.Replies.DriveRepliesGet(ctx, operations.DriveRepliesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "ipsa",
        Fields: sdk.String("accusamus"),
        FileID: "placeat",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        ReplyID: "saepe",
        UserIP: sdk.String("facere"),
    }, operations.DriveRepliesGetSecurity{
        Option1: &operations.DriveRepliesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentReply != nil {
        // handle response
    }
}
```

## DriveRepliesInsert

Creates a new reply to the given comment.

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
    res, err := s.Replies.DriveRepliesInsert(ctx, operations.DriveRepliesInsertRequest{
        CommentReply: &shared.CommentReply{
            Author: &shared.User{
                DisplayName: sdk.String("nobis"),
                EmailAddress: sdk.String("at"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("molestias"),
                PermissionID: sdk.String("aut"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("temporibus"),
                },
            },
            Content: sdk.String("tenetur"),
            CreatedDate: types.MustTimeFromString("2022-09-30T01:16:40.579Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("corrupti"),
            Kind: sdk.String("similique"),
            ModifiedDate: types.MustTimeFromString("2022-07-18T08:11:29.386Z"),
            ReplyID: sdk.String("reiciendis"),
            Verb: sdk.String("iste"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "amet",
        Fields: sdk.String("occaecati"),
        FileID: "aut",
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UserIP: sdk.String("blanditiis"),
    }, operations.DriveRepliesInsertSecurity{
        Option1: &operations.DriveRepliesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentReply != nil {
        // handle response
    }
}
```

## DriveRepliesList

Lists all of the replies to a comment.

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
    res, err := s.Replies.DriveRepliesList(ctx, operations.DriveRepliesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "quas",
        Fields: sdk.String("voluptatem"),
        FileID: "provident",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("quas"),
        MaxResults: sdk.Int64(218413),
        OauthToken: sdk.String("vero"),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UserIP: sdk.String("maiores"),
    }, operations.DriveRepliesListSecurity{
        Option1: &operations.DriveRepliesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentReplyList != nil {
        // handle response
    }
}
```

## DriveRepliesPatch

Updates an existing reply.

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
    res, err := s.Replies.DriveRepliesPatch(ctx, operations.DriveRepliesPatchRequest{
        CommentReply: &shared.CommentReply{
            Author: &shared.User{
                DisplayName: sdk.String("error"),
                EmailAddress: sdk.String("recusandae"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("a"),
                PermissionID: sdk.String("consectetur"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("sapiente"),
                },
            },
            Content: sdk.String("voluptatibus"),
            CreatedDate: types.MustTimeFromString("2020-07-05T23:42:20.771Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("omnis"),
            Kind: sdk.String("delectus"),
            ModifiedDate: types.MustTimeFromString("2022-01-10T05:36:05.456Z"),
            ReplyID: sdk.String("aut"),
            Verb: sdk.String("quam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "omnis",
        Fields: sdk.String("similique"),
        FileID: "asperiores",
        Key: sdk.String("modi"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        ReplyID: "quis",
        UserIP: sdk.String("in"),
    }, operations.DriveRepliesPatchSecurity{
        Option1: &operations.DriveRepliesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentReply != nil {
        // handle response
    }
}
```

## DriveRepliesUpdate

Updates an existing reply.

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
    res, err := s.Replies.DriveRepliesUpdate(ctx, operations.DriveRepliesUpdateRequest{
        CommentReply: &shared.CommentReply{
            Author: &shared.User{
                DisplayName: sdk.String("sed"),
                EmailAddress: sdk.String("non"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("porro"),
                PermissionID: sdk.String("fugiat"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("soluta"),
                },
            },
            Content: sdk.String("ipsa"),
            CreatedDate: types.MustTimeFromString("2022-02-18T09:02:57.099Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("vero"),
            Kind: sdk.String("eos"),
            ModifiedDate: types.MustTimeFromString("2022-10-21T00:54:53.153Z"),
            ReplyID: sdk.String("architecto"),
            Verb: sdk.String("praesentium"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "iusto",
        Fields: sdk.String("fugiat"),
        FileID: "enim",
        Key: sdk.String("iure"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        ReplyID: "magnam",
        UserIP: sdk.String("accusamus"),
    }, operations.DriveRepliesUpdateSecurity{
        Option1: &operations.DriveRepliesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentReply != nil {
        // handle response
    }
}
```
