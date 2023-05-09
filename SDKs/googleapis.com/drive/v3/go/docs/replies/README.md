# Replies

### Available Operations

* [DriveRepliesCreate](#driverepliescreate) - Creates a reply to a comment.
* [DriveRepliesDelete](#driverepliesdelete) - Deletes a reply.
* [DriveRepliesGet](#driverepliesget) - Gets a reply by ID.
* [DriveRepliesList](#drivereplieslist) - Lists a comment's replies.
* [DriveRepliesUpdate](#driverepliesupdate) - Updates a reply with patch semantics.

## DriveRepliesCreate

Creates a reply to a comment.

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
    res, err := s.Replies.DriveRepliesCreate(ctx, operations.DriveRepliesCreateRequest{
        Reply: &shared.Reply{
            Action: sdk.String("vero"),
            Author: &shared.User{
                DisplayName: sdk.String("odit"),
                EmailAddress: sdk.String("repellat"),
                Kind: sdk.String("pariatur"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("nemo"),
                PhotoLink: sdk.String("reprehenderit"),
            },
            Content: sdk.String("aperiam"),
            CreatedTime: types.MustTimeFromString("2022-09-04T06:23:59.261Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("in"),
            ID: sdk.String("7929177d-eac6-446e-8b57-3409e3eb1e5a"),
            Kind: sdk.String("dolores"),
            ModifiedTime: types.MustTimeFromString("2022-10-08T09:27:30.689Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "consequuntur",
        Fields: sdk.String("necessitatibus"),
        FileID: "nobis",
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UserIP: sdk.String("veritatis"),
    }, operations.DriveRepliesCreateSecurity{
        Option1: &operations.DriveRepliesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reply != nil {
        // handle response
    }
}
```

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
        CommentID: "quasi",
        Fields: sdk.String("laboriosam"),
        FileID: "pariatur",
        Key: sdk.String("libero"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        ReplyID: "nemo",
        UserIP: sdk.String("aliquam"),
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

Gets a reply by ID.

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
        CommentID: "nostrum",
        Fields: sdk.String("doloribus"),
        FileID: "eligendi",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        ReplyID: "animi",
        UserIP: sdk.String("quas"),
    }, operations.DriveRepliesGetSecurity{
        Option1: &operations.DriveRepliesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reply != nil {
        // handle response
    }
}
```

## DriveRepliesList

Lists a comment's replies.

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
        CommentID: "totam",
        Fields: sdk.String("molestias"),
        FileID: "odio",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(104078),
        PageToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UserIP: sdk.String("assumenda"),
    }, operations.DriveRepliesListSecurity{
        Option1: &operations.DriveRepliesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplyList != nil {
        // handle response
    }
}
```

## DriveRepliesUpdate

Updates a reply with patch semantics.

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
        Reply: &shared.Reply{
            Action: sdk.String("tempore"),
            Author: &shared.User{
                DisplayName: sdk.String("libero"),
                EmailAddress: sdk.String("velit"),
                Kind: sdk.String("doloremque"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("delectus"),
                PhotoLink: sdk.String("impedit"),
            },
            Content: sdk.String("cum"),
            CreatedTime: types.MustTimeFromString("2022-10-06T03:01:15.693Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("saepe"),
            ID: sdk.String("a055b197-cd44-4e2f-92d8-2d3513bb6f48"),
            Kind: sdk.String("distinctio"),
            ModifiedTime: types.MustTimeFromString("2022-08-31T08:50:11.469Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "nisi",
        Fields: sdk.String("libero"),
        FileID: "minus",
        Key: sdk.String("facere"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        ReplyID: "ad",
        UserIP: sdk.String("voluptatibus"),
    }, operations.DriveRepliesUpdateSecurity{
        Option1: &operations.DriveRepliesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reply != nil {
        // handle response
    }
}
```
