# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/libraryagent/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LibraryagentShelvesBooksBorrowRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.shelves.libraryagent_shelves_books_borrow(req, operations.LibraryagentShelvesBooksBorrowSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_example_libraryagent_v1_book is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### shelves

* `libraryagent_shelves_books_borrow` - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
* `libraryagent_shelves_books_get` - Gets a book. Returns NOT_FOUND if the book does not exist.
* `libraryagent_shelves_books_list` - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
* `libraryagent_shelves_books_return` - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
* `libraryagent_shelves_list` - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
