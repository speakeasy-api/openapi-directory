<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest(
    security=operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams(
        parent="quae",
    ),
    query_params=operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams(
        dollar_xgafv="2",
        access_token="recusandae",
        alt="json",
        callback="maxime",
        fields="et",
        key="sunt",
        oauth_token="assumenda",
        page_size=6827229980722297647,
        page_token="similique",
        pretty_print=False,
        quota_user="est",
        upload_type="harum",
        upload_protocol="consequatur",
    ),
)
    
res = s.buyers.authorizedbuyersmarketplace_buyers_auction_packages_list(req)

if res.list_auction_packages_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->