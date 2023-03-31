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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        Shelf: "vel",
        Source: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
        UserID: "iure",
    }

    ctx := context.Background()
    res, err := s.Bookshelves.BooksBookshelvesGet(ctx, req, operations.BooksBookshelvesGetSecurity{
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
<!-- End SDK Example Usage -->