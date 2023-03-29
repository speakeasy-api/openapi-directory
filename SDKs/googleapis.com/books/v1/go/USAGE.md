<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BooksBookshelvesGetRequest{
        Security: operations.BooksBookshelvesGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BooksBookshelvesGetPathParams{
            Shelf: "unde",
            UserID: "deserunt",
        },
        QueryParams: operations.BooksBookshelvesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "nulla",
            Alt: "media",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            Source: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Bookshelves.BooksBookshelvesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->