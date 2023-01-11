<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ManufacturersAccountsProductsDeleteRequest(
    security=operations.ManufacturersAccountsProductsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ManufacturersAccountsProductsDeletePathParams(
        name="et",
        parent="officia",
    ),
    query_params=operations.ManufacturersAccountsProductsDeleteQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="json",
        callback="commodi",
        fields="modi",
        key="temporibus",
        oauth_token="aut",
        pretty_print=True,
        quota_user="aut",
        upload_type="tempora",
        upload_protocol="pariatur",
    ),
)
    
res = s.accounts.manufacturers_accounts_products_delete(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->