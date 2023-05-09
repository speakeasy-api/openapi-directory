# Blogs

### Available Operations

* [BloggerBlogsGet](#bloggerblogsget) - Gets a blog by id.
* [BloggerBlogsGetByURL](#bloggerblogsgetbyurl) - Gets a blog by url.
* [BloggerBlogsListByUser](#bloggerblogslistbyuser) - Lists blogs by user.

## BloggerBlogsGet

Gets a blog by id.

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
    res, err := s.Blogs.BloggerBlogsGet(ctx, operations.BloggerBlogsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "quis",
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        MaxPosts: sdk.Int64(368241),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
        View: operations.BloggerBlogsGetViewEnumAdmin.ToPointer(),
    }, operations.BloggerBlogsGetSecurity{
        Option1: &operations.BloggerBlogsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Blog != nil {
        // handle response
    }
}
```

## BloggerBlogsGetByURL

Gets a blog by url.

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
    res, err := s.Blogs.BloggerBlogsGetByURL(ctx, operations.BloggerBlogsGetByURLRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
        URL: "nam",
        View: operations.BloggerBlogsGetByURLViewEnumAuthor.ToPointer(),
    }, operations.BloggerBlogsGetByURLSecurity{
        Option1: &operations.BloggerBlogsGetByURLSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Blog != nil {
        // handle response
    }
}
```

## BloggerBlogsListByUser

Lists blogs by user.

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
    res, err := s.Blogs.BloggerBlogsListByUser(ctx, operations.BloggerBlogsListByUserRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        FetchUserInfo: sdk.Bool(false),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        Role: []BloggerBlogsListByUserRoleEnum{
            operations.BloggerBlogsListByUserRoleEnumReader,
            operations.BloggerBlogsListByUserRoleEnumViewTypeUnspecified,
        },
        Status: []BloggerBlogsListByUserStatusEnum{
            operations.BloggerBlogsListByUserStatusEnumDeleted,
            operations.BloggerBlogsListByUserStatusEnumLive,
            operations.BloggerBlogsListByUserStatusEnumLive,
            operations.BloggerBlogsListByUserStatusEnumDeleted,
        },
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
        UserID: "ad",
        View: operations.BloggerBlogsListByUserViewEnumAuthor.ToPointer(),
    }, operations.BloggerBlogsListByUserSecurity{
        Option1: &operations.BloggerBlogsListByUserSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BlogList != nil {
        // handle response
    }
}
```
