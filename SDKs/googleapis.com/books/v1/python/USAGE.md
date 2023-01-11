<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BooksBookshelvesGetRequest(
    security=operations.BooksBookshelvesGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BooksBookshelvesGetPathParams(
        shelf="expedita",
        user_id="reiciendis",
    ),
    query_params=operations.BooksBookshelvesGetQueryParams(
        dollar_xgafv="1",
        access_token="excepturi",
        alt="proto",
        callback="sint",
        fields="consequatur",
        key="nihil",
        oauth_token="assumenda",
        pretty_print=False,
        quota_user="sint",
        source="dolorem",
        upload_type="ut",
        upload_protocol="quo",
    ),
)
    
res = s.bookshelves.books_bookshelves_get(req)

if res.bookshelf is not None:
    # handle response
```
<!-- End SDK Example Usage -->