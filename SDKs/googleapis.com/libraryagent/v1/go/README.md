# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/libraryagent/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.LibraryagentShelvesBooksBorrowRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Name: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Shelves.LibraryagentShelvesBooksBorrow(ctx, req, operations.LibraryagentShelvesBooksBorrowSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleExampleLibraryagentV1Book != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Shelves

* `LibraryagentShelvesBooksBorrow` - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
* `LibraryagentShelvesBooksGet` - Gets a book. Returns NOT_FOUND if the book does not exist.
* `LibraryagentShelvesBooksList` - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
* `LibraryagentShelvesBooksReturn` - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
* `LibraryagentShelvesList` - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
