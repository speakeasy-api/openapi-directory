<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BooksBookshelvesGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    shelf="vel",
    source="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
    user_id="iure",
)
    
res = s.bookshelves.books_bookshelves_get(req, operations.BooksBookshelvesGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.bookshelf is not None:
    # handle response
```
<!-- End SDK Example Usage -->