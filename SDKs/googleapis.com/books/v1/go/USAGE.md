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
            Shelf: "corrupti",
            UserID: "provident",
        },
        QueryParams: operations.BooksBookshelvesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "media",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            Source: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
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