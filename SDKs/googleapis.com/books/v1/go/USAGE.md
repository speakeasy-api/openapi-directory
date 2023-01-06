<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Shelf: "nihil",
            UserID: "totam",
        },
        QueryParams: operations.BooksBookshelvesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "laudantium",
            Alt: "proto",
            Callback: "aut",
            Fields: "quod",
            Key: "cupiditate",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "dolores",
            Source: "ipsum",
            UploadType: "officiis",
            UploadProtocol: "cumque",
        },
    }
    
    res, err := s.Bookshelves.BooksBookshelvesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelf != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->