# Pages

### Available Operations

* [BloggerPagesDelete](#bloggerpagesdelete) - Deletes a page by blog id and page id.
* [BloggerPagesGet](#bloggerpagesget) - Gets a page by blog id and page id.
* [BloggerPagesInsert](#bloggerpagesinsert) - Inserts a page.
* [BloggerPagesList](#bloggerpageslist) - Lists pages.
* [BloggerPagesPatch](#bloggerpagespatch) - Patches a page.
* [BloggerPagesPublish](#bloggerpagespublish) - Publishes a page.
* [BloggerPagesRevert](#bloggerpagesrevert) - Reverts a published or scheduled page to draft state.
* [BloggerPagesUpdate](#bloggerpagesupdate) - Updates a page by blog id and page id.

## BloggerPagesDelete

Deletes a page by blog id and page id.

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
    res, err := s.Pages.BloggerPagesDelete(ctx, operations.BloggerPagesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "aliquid",
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        PageID: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
        UseTrash: sdk.Bool(false),
    }, operations.BloggerPagesDeleteSecurity{
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

## BloggerPagesGet

Gets a page by blog id and page id.

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
    res, err := s.Pages.BloggerPagesGet(ctx, operations.BloggerPagesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "facilis",
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("eum"),
        PageID: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aliquid"),
        View: operations.BloggerPagesGetViewEnumAuthor.ToPointer(),
    }, operations.BloggerPagesGetSecurity{
        Option1: &operations.BloggerPagesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## BloggerPagesInsert

Inserts a page.

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
    res, err := s.Pages.BloggerPagesInsert(ctx, operations.BloggerPagesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Page: &shared.Page{
            Author: &shared.PageAuthor{
                DisplayName: sdk.String("sint"),
                ID: sdk.String("a3efa77d-fb14-4cd6-aae3-95efb9ba88f3"),
                Image: &shared.PageAuthorImage{
                    URL: sdk.String("deserunt"),
                },
                URL: sdk.String("nisi"),
            },
            Blog: &shared.PageBlog{
                ID: sdk.String("6997074b-a446-49b6-a214-1959890afa56"),
            },
            Content: sdk.String("dolor"),
            Etag: sdk.String("necessitatibus"),
            ID: sdk.String("2516fe4c-8b71-41e5-b7fd-2ed028921cdd"),
            Kind: sdk.String("maxime"),
            Published: sdk.String("ea"),
            SelfLink: sdk.String("excepturi"),
            Status: shared.PageStatusEnumLive.ToPointer(),
            Title: sdk.String("Ms."),
            Trashed: sdk.String("accusantium"),
            Updated: sdk.String("ab"),
            URL: sdk.String("maiores"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "voluptate",
        Callback: sdk.String("autem"),
        Fields: sdk.String("nam"),
        IsDraft: sdk.Bool(false),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.BloggerPagesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## BloggerPagesList

Lists pages.

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
    res, err := s.Pages.BloggerPagesList(ctx, operations.BloggerPagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "cumque",
        Callback: sdk.String("corporis"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        MaxResults: sdk.Int64(749999),
        OauthToken: sdk.String("dolores"),
        PageToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        Status: []BloggerPagesListStatusEnum{
            operations.BloggerPagesListStatusEnumLive,
            operations.BloggerPagesListStatusEnumDraft,
        },
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
        View: operations.BloggerPagesListViewEnumViewTypeUnspecified.ToPointer(),
    }, operations.BloggerPagesListSecurity{
        Option1: &operations.BloggerPagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageList != nil {
        // handle response
    }
}
```

## BloggerPagesPatch

Patches a page.

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
    res, err := s.Pages.BloggerPagesPatch(ctx, operations.BloggerPagesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Page: &shared.Page{
            Author: &shared.PageAuthor{
                DisplayName: sdk.String("minus"),
                ID: sdk.String("73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48"),
                Image: &shared.PageAuthorImage{
                    URL: sdk.String("aliquid"),
                },
                URL: sdk.String("dolorem"),
            },
            Blog: &shared.PageBlog{
                ID: sdk.String("3323f9b7-7f3a-4410-8674-ebf69280d1ba"),
            },
            Content: sdk.String("iusto"),
            Etag: sdk.String("voluptate"),
            ID: sdk.String("a89ebf73-7ae4-4203-8e5e-6a95d8a0d446"),
            Kind: sdk.String("quod"),
            Published: sdk.String("officiis"),
            SelfLink: sdk.String("qui"),
            Status: shared.PageStatusEnumSoftTrashed.ToPointer(),
            Title: sdk.String("Dr."),
            Trashed: sdk.String("esse"),
            Updated: sdk.String("harum"),
            URL: sdk.String("iusto"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "tenetur",
        Callback: sdk.String("amet"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("numquam"),
        PageID: "enim",
        PrettyPrint: sdk.Bool(false),
        Publish: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        Revert: sdk.Bool(false),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("totam"),
    }, operations.BloggerPagesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## BloggerPagesPublish

Publishes a page.

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
    res, err := s.Pages.BloggerPagesPublish(ctx, operations.BloggerPagesPublishRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "neque",
        Callback: sdk.String("sed"),
        Fields: sdk.String("vel"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("voluptas"),
        PageID: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.BloggerPagesPublishSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## BloggerPagesRevert

Reverts a published or scheduled page to draft state.

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
    res, err := s.Pages.BloggerPagesRevert(ctx, operations.BloggerPagesRevertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "pariatur",
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("totam"),
        PageID: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.BloggerPagesRevertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## BloggerPagesUpdate

Updates a page by blog id and page id.

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
    res, err := s.Pages.BloggerPagesUpdate(ctx, operations.BloggerPagesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Page: &shared.Page{
            Author: &shared.PageAuthor{
                DisplayName: sdk.String("aliquid"),
                ID: sdk.String("79d23227-15bf-40cb-b1e3-1b8b90f3443a"),
                Image: &shared.PageAuthorImage{
                    URL: sdk.String("architecto"),
                },
                URL: sdk.String("quae"),
            },
            Blog: &shared.PageBlog{
                ID: sdk.String("08e0adcf-4b92-4187-9fce-953f73ef7fbc"),
            },
            Content: sdk.String("odio"),
            Etag: sdk.String("similique"),
            ID: sdk.String("bd74dd39-c0f5-4d2c-bf7c-70a45626d436"),
            Kind: sdk.String("laudantium"),
            Published: sdk.String("dicta"),
            SelfLink: sdk.String("dolor"),
            Status: shared.PageStatusEnumSoftTrashed.ToPointer(),
            Title: sdk.String("Mr."),
            Trashed: sdk.String("ex"),
            Updated: sdk.String("nulla"),
            URL: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "sapiente",
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("impedit"),
        PageID: "corporis",
        PrettyPrint: sdk.Bool(false),
        Publish: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        Revert: sdk.Bool(false),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.BloggerPagesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```
