# Comments

### Available Operations

* [DriveCommentsDelete](#drivecommentsdelete) - Deletes a comment.
* [DriveCommentsGet](#drivecommentsget) - Gets a comment by ID.
* [DriveCommentsInsert](#drivecommentsinsert) - Creates a new comment on the given file.
* [DriveCommentsList](#drivecommentslist) - Lists a file's comments.
* [DriveCommentsPatch](#drivecommentspatch) - Updates an existing comment.
* [DriveCommentsUpdate](#drivecommentsupdate) - Updates an existing comment.

## DriveCommentsDelete

Deletes a comment.

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
    res, err := s.Comments.DriveCommentsDelete(ctx, operations.DriveCommentsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "nam",
        Fields: sdk.String("id"),
        FileID: "blanditiis",
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UserIP: sdk.String("deserunt"),
    }, operations.DriveCommentsDeleteSecurity{
        Option1: &operations.DriveCommentsDeleteSecurityOption1{
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

## DriveCommentsGet

Gets a comment by ID.

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
    res, err := s.Comments.DriveCommentsGet(ctx, operations.DriveCommentsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "nisi",
        Fields: sdk.String("vel"),
        FileID: "natus",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("nihil"),
    }, operations.DriveCommentsGetSecurity{
        Option1: &operations.DriveCommentsGetSecurityOption1{
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

## DriveCommentsInsert

Creates a new comment on the given file.

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
    res, err := s.Comments.DriveCommentsInsert(ctx, operations.DriveCommentsInsertRequest{
        Comment: &shared.Comment{
            Anchor: sdk.String("magnam"),
            Author: &shared.User{
                DisplayName: sdk.String("distinctio"),
                EmailAddress: sdk.String("id"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("labore"),
                PermissionID: sdk.String("labore"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("suscipit"),
                },
            },
            CommentID: sdk.String("natus"),
            Content: sdk.String("nobis"),
            Context: &shared.CommentContext{
                Type: sdk.String("eum"),
                Value: sdk.String("vero"),
            },
            CreatedDate: types.MustTimeFromString("2022-11-24T10:55:00.183Z"),
            Deleted: sdk.Bool(false),
            FileID: sdk.String("magnam"),
            FileTitle: sdk.String("et"),
            HTMLContent: sdk.String("excepturi"),
            Kind: sdk.String("ullam"),
            ModifiedDate: types.MustTimeFromString("2021-11-24T04:10:44.711Z"),
            Replies: []shared.CommentReply{
                shared.CommentReply{
                    Author: &shared.User{
                        DisplayName: sdk.String("accusantium"),
                        EmailAddress: sdk.String("mollitia"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("reiciendis"),
                        PermissionID: sdk.String("mollitia"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("ad"),
                        },
                    },
                    Content: sdk.String("eum"),
                    CreatedDate: types.MustTimeFromString("2022-02-07T18:15:06.372Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("odit"),
                    Kind: sdk.String("nemo"),
                    ModifiedDate: types.MustTimeFromString("2022-07-25T21:49:23.340Z"),
                    ReplyID: sdk.String("doloribus"),
                    Verb: sdk.String("debitis"),
                },
                shared.CommentReply{
                    Author: &shared.User{
                        DisplayName: sdk.String("eius"),
                        EmailAddress: sdk.String("maxime"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("deleniti"),
                        PermissionID: sdk.String("facilis"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("in"),
                        },
                    },
                    Content: sdk.String("architecto"),
                    CreatedDate: types.MustTimeFromString("2022-01-30T09:19:56.236Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("ullam"),
                    Kind: sdk.String("expedita"),
                    ModifiedDate: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
                    ReplyID: sdk.String("quibusdam"),
                    Verb: sdk.String("sed"),
                },
                shared.CommentReply{
                    Author: &shared.User{
                        DisplayName: sdk.String("saepe"),
                        EmailAddress: sdk.String("pariatur"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("accusantium"),
                        PermissionID: sdk.String("consequuntur"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("praesentium"),
                        },
                    },
                    Content: sdk.String("natus"),
                    CreatedDate: types.MustTimeFromString("2022-11-16T19:20:12.159Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("quo"),
                    Kind: sdk.String("illum"),
                    ModifiedDate: types.MustTimeFromString("2020-07-30T23:39:27.609Z"),
                    ReplyID: sdk.String("ea"),
                    Verb: sdk.String("excepturi"),
                },
            },
            SelfLink: sdk.String("odit"),
            Status: sdk.String("ea"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusantium"),
        FileID: "ab",
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UserIP: sdk.String("voluptate"),
    }, operations.DriveCommentsInsertSecurity{
        Option1: &operations.DriveCommentsInsertSecurityOption1{
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

## DriveCommentsList

Lists a file's comments.

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
    res, err := s.Comments.DriveCommentsList(ctx, operations.DriveCommentsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("autem"),
        FileID: "nam",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("eaque"),
        MaxResults: sdk.Int64(866383),
        OauthToken: sdk.String("nemo"),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UpdatedMin: sdk.String("fugiat"),
        UserIP: sdk.String("amet"),
    }, operations.DriveCommentsListSecurity{
        Option1: &operations.DriveCommentsListSecurityOption1{
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

## DriveCommentsPatch

Updates an existing comment.

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
    res, err := s.Comments.DriveCommentsPatch(ctx, operations.DriveCommentsPatchRequest{
        Comment: &shared.Comment{
            Anchor: sdk.String("aut"),
            Author: &shared.User{
                DisplayName: sdk.String("cumque"),
                EmailAddress: sdk.String("corporis"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("hic"),
                PermissionID: sdk.String("libero"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("nobis"),
                },
            },
            CommentID: sdk.String("dolores"),
            Content: sdk.String("quis"),
            Context: &shared.CommentContext{
                Type: sdk.String("totam"),
                Value: sdk.String("dignissimos"),
            },
            CreatedDate: types.MustTimeFromString("2022-08-30T06:29:24.707Z"),
            Deleted: sdk.Bool(false),
            FileID: sdk.String("nesciunt"),
            FileTitle: sdk.String("eos"),
            HTMLContent: sdk.String("perferendis"),
            Kind: sdk.String("dolores"),
            ModifiedDate: types.MustTimeFromString("2021-08-11T12:30:29.509Z"),
            Replies: []shared.CommentReply{
                shared.CommentReply{
                    Author: &shared.User{
                        DisplayName: sdk.String("vero"),
                        EmailAddress: sdk.String("nostrum"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("hic"),
                        PermissionID: sdk.String("recusandae"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("omnis"),
                        },
                    },
                    Content: sdk.String("facilis"),
                    CreatedDate: types.MustTimeFromString("2022-12-08T18:10:54.422Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("porro"),
                    Kind: sdk.String("consequuntur"),
                    ModifiedDate: types.MustTimeFromString("2021-10-04T07:41:53.553Z"),
                    ReplyID: sdk.String("eaque"),
                    Verb: sdk.String("occaecati"),
                },
            },
            SelfLink: sdk.String("rerum"),
            Status: sdk.String("adipisci"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "asperiores",
        Fields: sdk.String("earum"),
        FileID: "modi",
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UserIP: sdk.String("pariatur"),
    }, operations.DriveCommentsPatchSecurity{
        Option1: &operations.DriveCommentsPatchSecurityOption1{
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

## DriveCommentsUpdate

Updates an existing comment.

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
    res, err := s.Comments.DriveCommentsUpdate(ctx, operations.DriveCommentsUpdateRequest{
        Comment: &shared.Comment{
            Anchor: sdk.String("provident"),
            Author: &shared.User{
                DisplayName: sdk.String("nobis"),
                EmailAddress: sdk.String("libero"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("delectus"),
                PermissionID: sdk.String("quaerat"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("quos"),
                },
            },
            CommentID: sdk.String("aliquid"),
            Content: sdk.String("dolorem"),
            Context: &shared.CommentContext{
                Type: sdk.String("dolorem"),
                Value: sdk.String("dolor"),
            },
            CreatedDate: types.MustTimeFromString("2022-10-13T03:45:19.154Z"),
            Deleted: sdk.Bool(false),
            FileID: sdk.String("hic"),
            FileTitle: sdk.String("excepturi"),
            HTMLContent: sdk.String("cum"),
            Kind: sdk.String("voluptate"),
            ModifiedDate: types.MustTimeFromString("2022-01-11T20:43:35.875Z"),
            Replies: []shared.CommentReply{
                shared.CommentReply{
                    Author: &shared.User{
                        DisplayName: sdk.String("dolorum"),
                        EmailAddress: sdk.String("numquam"),
                        IsAuthenticatedUser: sdk.Bool(false),
                        Kind: sdk.String("veritatis"),
                        PermissionID: sdk.String("ipsa"),
                        Picture: &shared.UserPicture{
                            URL: sdk.String("ipsa"),
                        },
                    },
                    Content: sdk.String("iure"),
                    CreatedDate: types.MustTimeFromString("2022-09-09T04:40:04.540Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("accusamus"),
                    Kind: sdk.String("quidem"),
                    ModifiedDate: types.MustTimeFromString("2021-11-13T08:40:53.559Z"),
                    ReplyID: sdk.String("natus"),
                    Verb: sdk.String("eos"),
                },
            },
            SelfLink: sdk.String("atque"),
            Status: sdk.String("sit"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "fugiat",
        Fields: sdk.String("ab"),
        FileID: "soluta",
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UserIP: sdk.String("dolorum"),
    }, operations.DriveCommentsUpdateSecurity{
        Option1: &operations.DriveCommentsUpdateSecurityOption1{
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
