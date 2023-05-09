# Comments

### Available Operations

* [DriveCommentsCreate](#drivecommentscreate) - Creates a comment on a file.
* [DriveCommentsDelete](#drivecommentsdelete) - Deletes a comment.
* [DriveCommentsGet](#drivecommentsget) - Gets a comment by ID.
* [DriveCommentsList](#drivecommentslist) - Lists a file's comments.
* [DriveCommentsUpdate](#drivecommentsupdate) - Updates a comment with patch semantics.

## DriveCommentsCreate

Creates a comment on a file.

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
    res, err := s.Comments.DriveCommentsCreate(ctx, operations.DriveCommentsCreateRequest{
        Comment: &shared.Comment{
            Anchor: sdk.String("omnis"),
            Author: &shared.User{
                DisplayName: sdk.String("voluptate"),
                EmailAddress: sdk.String("cum"),
                Kind: sdk.String("perferendis"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("doloremque"),
                PhotoLink: sdk.String("reprehenderit"),
            },
            Content: sdk.String("ut"),
            CreatedTime: types.MustTimeFromString("2022-08-22T09:14:02.538Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("corporis"),
            ID: sdk.String("471b5e6e-13b9-49d4-88e1-e91e450ad2ab"),
            Kind: sdk.String("quibusdam"),
            ModifiedTime: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
            QuotedFileContent: &shared.CommentQuotedFileContent{
                MimeType: sdk.String("qui"),
                Value: sdk.String("aliquid"),
            },
            Replies: []shared.Reply{
                shared.Reply{
                    Action: sdk.String("quos"),
                    Author: &shared.User{
                        DisplayName: sdk.String("perferendis"),
                        EmailAddress: sdk.String("magni"),
                        Kind: sdk.String("assumenda"),
                        Me: sdk.Bool(false),
                        PermissionID: sdk.String("ipsam"),
                        PhotoLink: sdk.String("alias"),
                    },
                    Content: sdk.String("fugit"),
                    CreatedTime: types.MustTimeFromString("2021-11-11T04:17:07.569Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("tempora"),
                    ID: sdk.String("bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3"),
                    Kind: sdk.String("occaecati"),
                    ModifiedTime: types.MustTimeFromString("2022-02-13T03:59:53.583Z"),
                },
                shared.Reply{
                    Action: sdk.String("delectus"),
                    Author: &shared.User{
                        DisplayName: sdk.String("quidem"),
                        EmailAddress: sdk.String("provident"),
                        Kind: sdk.String("nam"),
                        Me: sdk.Bool(false),
                        PermissionID: sdk.String("id"),
                        PhotoLink: sdk.String("blanditiis"),
                    },
                    Content: sdk.String("deleniti"),
                    CreatedTime: types.MustTimeFromString("2022-04-23T13:35:30.978Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("deserunt"),
                    ID: sdk.String("66997074-ba44-469b-ae21-41959890afa5"),
                    Kind: sdk.String("eum"),
                    ModifiedTime: types.MustTimeFromString("2022-02-07T18:15:06.372Z"),
                },
                shared.Reply{
                    Action: sdk.String("odit"),
                    Author: &shared.User{
                        DisplayName: sdk.String("nemo"),
                        EmailAddress: sdk.String("quasi"),
                        Kind: sdk.String("iure"),
                        Me: sdk.Bool(false),
                        PermissionID: sdk.String("doloribus"),
                        PhotoLink: sdk.String("debitis"),
                    },
                    Content: sdk.String("eius"),
                    CreatedTime: types.MustTimeFromString("2021-05-22T23:02:53.221Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("facilis"),
                    ID: sdk.String("711e5b7f-d2ed-4028-921c-ddc692601fb5"),
                    Kind: sdk.String("voluptate"),
                    ModifiedTime: types.MustTimeFromString("2022-04-12T10:47:34.158Z"),
                },
            },
            Resolved: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eaque"),
        FileID: "pariatur",
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("fugiat"),
    }, operations.DriveCommentsCreateSecurity{
        Option1: &operations.DriveCommentsCreateSecurityOption1{
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
        CommentID: "amet",
        Fields: sdk.String("aut"),
        FileID: "cumque",
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UserIP: sdk.String("nobis"),
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
        CommentID: "dolores",
        Fields: sdk.String("quis"),
        FileID: "totam",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UserIP: sdk.String("nesciunt"),
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
        Fields: sdk.String("eos"),
        FileID: "perferendis",
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("minus"),
        PageSize: sdk.Int64(463451),
        PageToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        StartModifiedTime: sdk.String("nostrum"),
        UserIP: sdk.String("hic"),
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

## DriveCommentsUpdate

Updates a comment with patch semantics.

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
            Anchor: sdk.String("recusandae"),
            Author: &shared.User{
                DisplayName: sdk.String("omnis"),
                EmailAddress: sdk.String("facilis"),
                Kind: sdk.String("perspiciatis"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("voluptatem"),
                PhotoLink: sdk.String("porro"),
            },
            Content: sdk.String("consequuntur"),
            CreatedTime: types.MustTimeFromString("2021-10-04T07:41:53.553Z"),
            Deleted: sdk.Bool(false),
            HTMLContent: sdk.String("eaque"),
            ID: sdk.String("9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4"),
            Kind: sdk.String("veritatis"),
            ModifiedTime: types.MustTimeFromString("2022-12-11T09:46:30.457Z"),
            QuotedFileContent: &shared.CommentQuotedFileContent{
                MimeType: sdk.String("iure"),
                Value: sdk.String("odio"),
            },
            Replies: []shared.Reply{
                shared.Reply{
                    Action: sdk.String("accusamus"),
                    Author: &shared.User{
                        DisplayName: sdk.String("quidem"),
                        EmailAddress: sdk.String("voluptatibus"),
                        Kind: sdk.String("voluptas"),
                        Me: sdk.Bool(false),
                        PermissionID: sdk.String("natus"),
                        PhotoLink: sdk.String("eos"),
                    },
                    Content: sdk.String("atque"),
                    CreatedTime: types.MustTimeFromString("2022-02-23T01:35:05.899Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("ab"),
                    ID: sdk.String("ba77a89e-bf73-47ae-8203-ce5e6a95d8a0"),
                    Kind: sdk.String("at"),
                    ModifiedTime: types.MustTimeFromString("2022-09-23T03:46:17.712Z"),
                },
                shared.Reply{
                    Action: sdk.String("vel"),
                    Author: &shared.User{
                        DisplayName: sdk.String("quod"),
                        EmailAddress: sdk.String("officiis"),
                        Kind: sdk.String("qui"),
                        Me: sdk.Bool(false),
                        PermissionID: sdk.String("dolorum"),
                        PhotoLink: sdk.String("a"),
                    },
                    Content: sdk.String("esse"),
                    CreatedTime: types.MustTimeFromString("2022-01-13T02:40:51.157Z"),
                    Deleted: sdk.Bool(false),
                    HTMLContent: sdk.String("ipsum"),
                    ID: sdk.String("cf3be453-f870-4b32-ab5a-73429cdb1a84"),
                    Kind: sdk.String("aspernatur"),
                    ModifiedTime: types.MustTimeFromString("2022-04-14T08:18:32.851Z"),
                },
            },
            Resolved: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CommentID: "facilis",
        Fields: sdk.String("aliquid"),
        FileID: "quam",
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UserIP: sdk.String("neque"),
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
