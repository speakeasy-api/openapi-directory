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
    
    req := operations.LibraryagentShelvesBooksBorrowRequest{
        Security: operations.LibraryagentShelvesBooksBorrowSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.LibraryagentShelvesBooksBorrowPathParams{
            Name: "provident",
        },
        QueryParams: operations.LibraryagentShelvesBooksBorrowQueryParams{
            DollarXgafv: "2",
            AccessToken: "saepe",
            Alt: "media",
            Callback: "voluptas",
            Fields: "ad",
            Key: "voluptatem",
            OauthToken: "assumenda",
            PrettyPrint: true,
            QuotaUser: "necessitatibus",
            UploadType: "ipsam",
            UploadProtocol: "dolorem",
        },
    }
    
    res, err := s.Shelves.LibraryagentShelvesBooksBorrow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleExampleLibraryagentV1Book != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->