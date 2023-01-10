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
            Name: "illum",
        },
        QueryParams: operations.LibraryagentShelvesBooksBorrowQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolor",
            Alt: "json",
            Callback: "in",
            Fields: "facere",
            Key: "tempore",
            OauthToken: "non",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UploadType: "quidem",
            UploadProtocol: "totam",
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