<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LibraryagentShelvesBooksBorrowRequest(
    security=operations.LibraryagentShelvesBooksBorrowSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.LibraryagentShelvesBooksBorrowPathParams(
        name="illum",
    ),
    query_params=operations.LibraryagentShelvesBooksBorrowQueryParams(
        dollar_xgafv="2",
        access_token="dolor",
        alt="json",
        callback="in",
        fields="facere",
        key="tempore",
        oauth_token="non",
        pretty_print=True,
        quota_user="voluptas",
        upload_type="quidem",
        upload_protocol="totam",
    ),
)
    
res = s.shelves.libraryagent_shelves_books_borrow(req)

if res.google_example_libraryagent_v1_book is not None:
    # handle response
```
<!-- End SDK Example Usage -->