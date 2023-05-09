# Bookshelves

### Available Operations

* [BooksBookshelvesGet](#booksbookshelvesget) - Retrieves metadata for a specific bookshelf for the specified user.
* [BooksBookshelvesList](#booksbookshelveslist) - Retrieves a list of public bookshelves for the specified user.
* [BooksBookshelvesVolumesList](#booksbookshelvesvolumeslist) - Retrieves volumes in a specific bookshelf for the specified user.

## BooksBookshelvesGet

Retrieves metadata for a specific bookshelf for the specified user.

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
    res, err := s.Bookshelves.BooksBookshelvesGet(ctx, operations.BooksBookshelvesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        Shelf: "placeat",
        Source: sdk.String("voluptatum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
        UserID: "nisi",
    }, operations.BooksBookshelvesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelf != nil {
        // handle response
    }
}
```

## BooksBookshelvesList

Retrieves a list of public bookshelves for the specified user.

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
    res, err := s.Bookshelves.BooksBookshelvesList(ctx, operations.BooksBookshelvesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        Source: sdk.String("repellendus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quo"),
        UserID: "odit",
    }, operations.BooksBookshelvesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelves != nil {
        // handle response
    }
}
```

## BooksBookshelvesVolumesList

Retrieves volumes in a specific bookshelf for the specified user.

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
    res, err := s.Bookshelves.BooksBookshelvesVolumesList(ctx, operations.BooksBookshelvesVolumesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        MaxResults: sdk.Int64(461479),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        Shelf: "dolorum",
        ShowPreorders: sdk.Bool(false),
        Source: sdk.String("dicta"),
        StartIndex: sdk.Int64(720633),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
        UserID: "fugit",
    }, operations.BooksBookshelvesVolumesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```
