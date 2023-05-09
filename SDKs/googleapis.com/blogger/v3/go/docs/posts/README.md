# Posts

### Available Operations

* [BloggerPostsDelete](#bloggerpostsdelete) - Deletes a post by blog id and post id.
* [BloggerPostsGet](#bloggerpostsget) - Gets a post by blog id and post id
* [BloggerPostsGetByPath](#bloggerpostsgetbypath) - Gets a post by path.
* [BloggerPostsInsert](#bloggerpostsinsert) - Inserts a post.
* [BloggerPostsList](#bloggerpostslist) - Lists posts.
* [BloggerPostsPatch](#bloggerpostspatch) - Patches a post.
* [BloggerPostsPublish](#bloggerpostspublish) - Publishes a post.
* [BloggerPostsRevert](#bloggerpostsrevert) - Reverts a published or scheduled post to draft state.
* [BloggerPostsSearch](#bloggerpostssearch) - Searches for posts matching given query terms in the specified blog.
* [BloggerPostsUpdate](#bloggerpostsupdate) - Updates a post by blog id and post id.

## BloggerPostsDelete

Deletes a post by blog id and post id.

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
    res, err := s.Posts.BloggerPostsDelete(ctx, operations.BloggerPostsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "eius",
        Callback: sdk.String("esse"),
        Fields: sdk.String("esse"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("fuga"),
        PostID: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ut"),
        UseTrash: sdk.Bool(false),
    }, operations.BloggerPostsDeleteSecurity{
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

## BloggerPostsGet

Gets a post by blog id and post id

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
    res, err := s.Posts.BloggerPostsGet(ctx, operations.BloggerPostsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "eos",
        Callback: sdk.String("praesentium"),
        FetchBody: sdk.Bool(false),
        FetchImages: sdk.Bool(false),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("veritatis"),
        MaxComments: sdk.Int64(56848),
        OauthToken: sdk.String("id"),
        PostID: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
        View: operations.BloggerPostsGetViewEnumAdmin.ToPointer(),
    }, operations.BloggerPostsGetSecurity{
        Option1: &operations.BloggerPostsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsGetByPath

Gets a post by path.

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
    res, err := s.Posts.BloggerPostsGetByPath(ctx, operations.BloggerPostsGetByPathRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "voluptas",
        Callback: sdk.String("ab"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("consequatur"),
        MaxComments: sdk.Int64(272822),
        OauthToken: sdk.String("debitis"),
        Path: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("quo"),
        View: operations.BloggerPostsGetByPathViewEnumReader.ToPointer(),
    }, operations.BloggerPostsGetByPathSecurity{
        Option1: &operations.BloggerPostsGetByPathSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsInsert

Inserts a post.

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
    res, err := s.Posts.BloggerPostsInsert(ctx, operations.BloggerPostsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Post: &shared.Post{
            Author: &shared.PostAuthor{
                DisplayName: sdk.String("aperiam"),
                ID: sdk.String("bc7178e4-796f-42a7-8c68-8282aa482562"),
                Image: &shared.PostAuthorImage{
                    URL: sdk.String("sapiente"),
                },
                URL: sdk.String("consequuntur"),
            },
            Blog: &shared.PostBlog{
                ID: sdk.String("22e9817e-e17c-4be6-9e6b-7b95bc0ab3c2"),
            },
            Content: sdk.String("consequatur"),
            CustomMetaData: sdk.String("minus"),
            Etag: sdk.String("quaerat"),
            ID: sdk.String("f3789fd8-71f9-49dd-aefd-121aa6f1e674"),
            Images: []shared.PostImages{
                shared.PostImages{
                    URL: sdk.String("illum"),
                },
                shared.PostImages{
                    URL: sdk.String("soluta"),
                },
                shared.PostImages{
                    URL: sdk.String("accusantium"),
                },
            },
            Kind: sdk.String("aliquam"),
            Labels: []string{
                "dicta",
                "ullam",
                "reprehenderit",
                "ullam",
            },
            Location: &shared.PostLocation{
                Lat: sdk.Float64(3917.74),
                Lng: sdk.Float64(163.28),
                Name: sdk.String("Clarence Sporer"),
                Span: sdk.String("itaque"),
            },
            Published: sdk.String("dolorum"),
            ReaderComments: shared.PostReaderCommentsEnumAllow.ToPointer(),
            Replies: &shared.PostReplies{
                Items: []shared.Comment{
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("tenetur"),
                            ID: sdk.String("1d170513-39d0-4808-aa18-40394c26071f"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("natus"),
                            },
                            URL: sdk.String("velit"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6"),
                        },
                        Content: sdk.String("ducimus"),
                        ID: sdk.String("864dbb67-5fd5-4e60-b375-ed4f6fbee41f"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("33317fe3-5b60-4eb1-aa42-6555ba3c2874"),
                        },
                        Kind: sdk.String("aliquam"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("ed53b88f-3a8d-48f5-80b2-f2fb7b194a27"),
                        },
                        Published: sdk.String("commodi"),
                        SelfLink: sdk.String("quidem"),
                        Status: shared.CommentStatusEnumLive.ToPointer(),
                        Updated: sdk.String("voluptas"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("unde"),
                            ID: sdk.String("16fe1f08-f429-44e3-a98f-447f603e8b44"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("ipsam"),
                            },
                            URL: sdk.String("debitis"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("80ca55ef-d20e-4457-a185-8b6a89fbe3a5"),
                        },
                        Content: sdk.String("officia"),
                        ID: sdk.String("a8e4824d-0ab4-4075-888e-51862065e904"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("f3b1194b-8abf-4603-a79f-9dfe0ab7da8a"),
                        },
                        Kind: sdk.String("veniam"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("0ce187f8-6bc1-473d-a89e-ee9526f8d986"),
                        },
                        Published: sdk.String("repudiandae"),
                        SelfLink: sdk.String("atque"),
                        Status: shared.CommentStatusEnumPending.ToPointer(),
                        Updated: sdk.String("sunt"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("recusandae"),
                            ID: sdk.String("ad4f0e10-1256-43f9-8e29-e973e922a57a"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("illo"),
                            },
                            URL: sdk.String("corporis"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("be3e0608-07e2-4b6e-bab8-845f0597a60f"),
                        },
                        Content: sdk.String("reiciendis"),
                        ID: sdk.String("2a54a31e-9476-44a3-a865-e7956f9251a5"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("a9da660f-f57b-4faa-94f9-efc1b4512c10"),
                        },
                        Kind: sdk.String("velit"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("2648dc2f-6151-499e-bfd0-e9fe6c632ca3"),
                        },
                        Published: sdk.String("animi"),
                        SelfLink: sdk.String("necessitatibus"),
                        Status: shared.CommentStatusEnumSpam.ToPointer(),
                        Updated: sdk.String("consequatur"),
                    },
                },
                SelfLink: sdk.String("quasi"),
                TotalItems: sdk.String("et"),
            },
            SelfLink: sdk.String("ducimus"),
            Status: shared.PostStatusEnumScheduled.ToPointer(),
            Title: sdk.String("Ms."),
            TitleLink: sdk.String("suscipit"),
            Trashed: sdk.String("adipisci"),
            Updated: sdk.String("quasi"),
            URL: sdk.String("magni"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "necessitatibus",
        Callback: sdk.String("ipsa"),
        FetchBody: sdk.Bool(false),
        FetchImages: sdk.Bool(false),
        Fields: sdk.String("tempora"),
        IsDraft: sdk.Bool(false),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("esse"),
    }, operations.BloggerPostsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsList

Lists posts.

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
    res, err := s.Posts.BloggerPostsList(ctx, operations.BloggerPostsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "vel",
        Callback: sdk.String("architecto"),
        EndDate: sdk.String("fugiat"),
        FetchBodies: sdk.Bool(false),
        FetchImages: sdk.Bool(false),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("dicta"),
        Labels: sdk.String("odio"),
        MaxResults: sdk.Int64(271252),
        OauthToken: sdk.String("esse"),
        OrderBy: operations.BloggerPostsListOrderByEnumPublished.ToPointer(),
        PageToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        SortOption: operations.BloggerPostsListSortOptionEnumSortOptionUnspecified.ToPointer(),
        StartDate: sdk.String("laborum"),
        Status: []BloggerPostsListStatusEnum{
            operations.BloggerPostsListStatusEnumDraft,
        },
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("expedita"),
        View: operations.BloggerPostsListViewEnumReader.ToPointer(),
    }, operations.BloggerPostsListSecurity{
        Option1: &operations.BloggerPostsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostList != nil {
        // handle response
    }
}
```

## BloggerPostsPatch

Patches a post.

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
    res, err := s.Posts.BloggerPostsPatch(ctx, operations.BloggerPostsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Post: &shared.Post{
            Author: &shared.PostAuthor{
                DisplayName: sdk.String("suscipit"),
                ID: sdk.String("60659a1a-deaa-4b58-91d6-c645b08b6189"),
                Image: &shared.PostAuthorImage{
                    URL: sdk.String("veritatis"),
                },
                URL: sdk.String("rerum"),
            },
            Blog: &shared.PostBlog{
                ID: sdk.String("aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34"),
            },
            Content: sdk.String("inventore"),
            CustomMetaData: sdk.String("deleniti"),
            Etag: sdk.String("veritatis"),
            ID: sdk.String("43010421-813d-4520-8ece-7e253b668451"),
            Images: []shared.PostImages{
                shared.PostImages{
                    URL: sdk.String("autem"),
                },
                shared.PostImages{
                    URL: sdk.String("nobis"),
                },
                shared.PostImages{
                    URL: sdk.String("laboriosam"),
                },
                shared.PostImages{
                    URL: sdk.String("recusandae"),
                },
            },
            Kind: sdk.String("consequuntur"),
            Labels: []string{
                "exercitationem",
            },
            Location: &shared.PostLocation{
                Lat: sdk.Float64(8956.92),
                Lng: sdk.Float64(956.19),
                Name: sdk.String("Teri Thiel"),
                Span: sdk.String("sequi"),
            },
            Published: sdk.String("doloribus"),
            ReaderComments: shared.PostReaderCommentsEnumDontAllowHideExisting.ToPointer(),
            Replies: &shared.PostReplies{
                Items: []shared.Comment{
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("occaecati"),
                            ID: sdk.String("578a6458-4273-4a84-98d1-62309fb09299"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("magni"),
                            },
                            URL: sdk.String("inventore"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("aefb9f58-c4d8-46e6-8e4b-e056013f59da"),
                        },
                        Content: sdk.String("esse"),
                        ID: sdk.String("57a59ecf-ef66-4ef1-8aa3-383c2beb4773"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("73c8d72f-64d1-4db1-b2c4-310661e96349"),
                        },
                        Kind: sdk.String("earum"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("1cf9e06e-3a43-4700-8ae6-b6bc9b8f759e"),
                        },
                        Published: sdk.String("animi"),
                        SelfLink: sdk.String("impedit"),
                        Status: shared.CommentStatusEnumEmptied.ToPointer(),
                        Updated: sdk.String("corporis"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("est"),
                            ID: sdk.String("9741d311-3529-465b-b8a7-202611435e13"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("unde"),
                            },
                            URL: sdk.String("nulla"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("bc2259b1-abda-48c0-b0e1-084cb0672d1a"),
                        },
                        Content: sdk.String("facere"),
                        ID: sdk.String("879eeb96-65b8-45ef-bd02-bae0be2d7822"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("59e3ea4b-5197-4f92-843d-a7ce52b895c5"),
                        },
                        Kind: sdk.String("neque"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("7c6454ef-b0b3-4489-ac3c-a5acfbe2fd57"),
                        },
                        Published: sdk.String("aperiam"),
                        SelfLink: sdk.String("odio"),
                        Status: shared.CommentStatusEnumEmptied.ToPointer(),
                        Updated: sdk.String("in"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("ducimus"),
                            ID: sdk.String("929177de-ac64-46ec-b573-409e3eb1e5a2"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("nam"),
                            },
                            URL: sdk.String("dicta"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("2eb07f11-6db9-4954-9fc9-5fa88970e189"),
                        },
                        Content: sdk.String("assumenda"),
                        ID: sdk.String("bb30fcb3-3ea0-455b-997c-d44e2f52d82d"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("3513bb6f-48b6-456b-8db3-5ff2e4b27537"),
                        },
                        Kind: sdk.String("est"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("8cd9e731-9c17-47d5-a5f7-7b114eeb52ff"),
                        },
                        Published: sdk.String("reprehenderit"),
                        SelfLink: sdk.String("praesentium"),
                        Status: shared.CommentStatusEnumEmptied.ToPointer(),
                        Updated: sdk.String("repellat"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("quisquam"),
                            ID: sdk.String("37814d4c-98e0-4c2b-b89e-b75dad636c60"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("voluptatem"),
                            },
                            URL: sdk.String("ad"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("03d8bb31-180f-4739-ae9e-057eb809e281"),
                        },
                        Content: sdk.String("voluptatem"),
                        ID: sdk.String("331f3981-d4c7-400b-a07f-3c93c73b9da3"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("f2ceda7e-23f2-4257-811f-af4b7544e472"),
                        },
                        Kind: sdk.String("accusamus"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("802857a5-b404-463a-bd57-5f1400e764ad"),
                        },
                        Published: sdk.String("voluptate"),
                        SelfLink: sdk.String("consectetur"),
                        Status: shared.CommentStatusEnumLive.ToPointer(),
                        Updated: sdk.String("quaerat"),
                    },
                },
                SelfLink: sdk.String("itaque"),
                TotalItems: sdk.String("minus"),
            },
            SelfLink: sdk.String("sunt"),
            Status: shared.PostStatusEnumScheduled.ToPointer(),
            Title: sdk.String("Ms."),
            TitleLink: sdk.String("quas"),
            Trashed: sdk.String("et"),
            Updated: sdk.String("facilis"),
            URL: sdk.String("amet"),
        },
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "alias",
        Callback: sdk.String("rem"),
        FetchBody: sdk.Bool(false),
        FetchImages: sdk.Bool(false),
        Fields: sdk.String("aut"),
        Key: sdk.String("quos"),
        MaxComments: sdk.Int64(511222),
        OauthToken: sdk.String("repellendus"),
        PostID: "veritatis",
        PrettyPrint: sdk.Bool(false),
        Publish: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        Revert: sdk.Bool(false),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.BloggerPostsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsPublish

Publishes a post.

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
    res, err := s.Posts.BloggerPostsPublish(ctx, operations.BloggerPostsPublishRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "officia",
        Callback: sdk.String("sed"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("eveniet"),
        PostID: "hic",
        PrettyPrint: sdk.Bool(false),
        PublishDate: sdk.String("voluptatem"),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("qui"),
    }, operations.BloggerPostsPublishSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsRevert

Reverts a published or scheduled post to draft state.

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
    res, err := s.Posts.BloggerPostsRevert(ctx, operations.BloggerPostsRevertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "beatae",
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("modi"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("voluptatibus"),
        PostID: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("totam"),
    }, operations.BloggerPostsRevertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsSearch

Searches for posts matching given query terms in the specified blog.

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
    res, err := s.Posts.BloggerPostsSearch(ctx, operations.BloggerPostsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "impedit",
        Callback: sdk.String("ducimus"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("odit"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("reiciendis"),
        OrderBy: operations.BloggerPostsSearchOrderByEnumUpdated.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Q: "nulla",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.BloggerPostsSearchSecurity{
        Option1: &operations.BloggerPostsSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostList != nil {
        // handle response
    }
}
```

## BloggerPostsUpdate

Updates a post by blog id and post id.

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
    res, err := s.Posts.BloggerPostsUpdate(ctx, operations.BloggerPostsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Post: &shared.Post{
            Author: &shared.PostAuthor{
                DisplayName: sdk.String("nisi"),
                ID: sdk.String("bee4825c-1fc0-4e11-9c80-bff918544ec4"),
                Image: &shared.PostAuthorImage{
                    URL: sdk.String("consequuntur"),
                },
                URL: sdk.String("assumenda"),
            },
            Blog: &shared.PostBlog{
                ID: sdk.String("efcce8f1-9777-473e-a356-2a7b408f05e3"),
            },
            Content: sdk.String("facere"),
            CustomMetaData: sdk.String("aliquam"),
            Etag: sdk.String("quos"),
            ID: sdk.String("fdaf313a-1f5f-4d94-a59c-0b36f25ea944"),
            Images: []shared.PostImages{
                shared.PostImages{
                    URL: sdk.String("adipisci"),
                },
                shared.PostImages{
                    URL: sdk.String("libero"),
                },
                shared.PostImages{
                    URL: sdk.String("in"),
                },
                shared.PostImages{
                    URL: sdk.String("minima"),
                },
            },
            Kind: sdk.String("ex"),
            Labels: []string{
                "ab",
                "beatae",
                "hic",
                "nisi",
            },
            Location: &shared.PostLocation{
                Lat: sdk.Float64(7869.54),
                Lng: sdk.Float64(2212.18),
                Name: sdk.String("Mr. Kristine Hansen"),
                Span: sdk.String("magni"),
            },
            Published: sdk.String("incidunt"),
            ReaderComments: shared.PostReaderCommentsEnumAllow.ToPointer(),
            Replies: &shared.PostReplies{
                Items: []shared.Comment{
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("dolor"),
                            ID: sdk.String("5bbc05a2-3a45-4cef-85fd-e10a0ce2169e"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("ullam"),
                            },
                            URL: sdk.String("architecto"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("0019c6dc-5e34-4762-b99b-fbbe6949fb2b"),
                        },
                        Content: sdk.String("nam"),
                        ID: sdk.String("4ecae6c3-d5db-43ad-abd5-daea4c506a8a"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("a94c0264-4cf5-4e9d-9a45-78adc1ac600d"),
                        },
                        Kind: sdk.String("necessitatibus"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("c001ac80-2e2e-4c09-bf8f-0f816ff3477c"),
                        },
                        Published: sdk.String("quasi"),
                        SelfLink: sdk.String("neque"),
                        Status: shared.CommentStatusEnumSpam.ToPointer(),
                        Updated: sdk.String("excepturi"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("accusantium"),
                            ID: sdk.String("2c14125b-0960-4a66-8151-a472af923c59"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("aliquam"),
                            },
                            URL: sdk.String("excepturi"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("f83f350c-f876-4ffb-901c-6ecbb4e243cf"),
                        },
                        Content: sdk.String("esse"),
                        ID: sdk.String("89ffafed-a53e-45ae-ae0a-c184c2b9c247"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("c88373a4-0e19-442f-b2e5-5055756f5d56"),
                        },
                        Kind: sdk.String("pariatur"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("0bd0af2d-fe13-4db4-b62c-ba3f8941aebc"),
                        },
                        Published: sdk.String("doloremque"),
                        SelfLink: sdk.String("expedita"),
                        Status: shared.CommentStatusEnumPending.ToPointer(),
                        Updated: sdk.String("eaque"),
                    },
                    shared.Comment{
                        Author: &shared.CommentAuthor{
                            DisplayName: sdk.String("deserunt"),
                            ID: sdk.String("6924d3b2-ecfc-4c8f-8950-10f5dd3d6fa1"),
                            Image: &shared.CommentAuthorImage{
                                URL: sdk.String("quos"),
                            },
                            URL: sdk.String("aperiam"),
                        },
                        Blog: &shared.CommentBlog{
                            ID: sdk.String("4e54c82f-168a-4363-8887-3e484380b1f6"),
                        },
                        Content: sdk.String("quidem"),
                        ID: sdk.String("8ca275a6-0a04-4c49-9cc6-99171b51c1bd"),
                        InReplyTo: &shared.CommentInReplyTo{
                            ID: sdk.String("b1cf4b88-8ebd-4fc4-8cca-99bc7fc0b2dc"),
                        },
                        Kind: sdk.String("recusandae"),
                        Post: &shared.CommentPost{
                            ID: sdk.String("10873e42-b006-4d67-8878-ba8581a58208"),
                        },
                        Published: sdk.String("placeat"),
                        SelfLink: sdk.String("enim"),
                        Status: shared.CommentStatusEnumEmptied.ToPointer(),
                        Updated: sdk.String("sapiente"),
                    },
                },
                SelfLink: sdk.String("saepe"),
                TotalItems: sdk.String("delectus"),
            },
            SelfLink: sdk.String("officia"),
            Status: shared.PostStatusEnumScheduled.ToPointer(),
            Title: sdk.String("Miss"),
            TitleLink: sdk.String("natus"),
            Trashed: sdk.String("quaerat"),
            Updated: sdk.String("doloribus"),
            URL: sdk.String("quia"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "cumque",
        Callback: sdk.String("quis"),
        FetchBody: sdk.Bool(false),
        FetchImages: sdk.Bool(false),
        Fields: sdk.String("enim"),
        Key: sdk.String("eum"),
        MaxComments: sdk.Int64(365539),
        OauthToken: sdk.String("illum"),
        PostID: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        Publish: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        Revert: sdk.Bool(false),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("minus"),
    }, operations.BloggerPostsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```
