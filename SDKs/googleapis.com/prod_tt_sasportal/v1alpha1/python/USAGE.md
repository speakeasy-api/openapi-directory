<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ProdTtSasportalCustomersListRequest(
    security=operations.ProdTtSasportalCustomersListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.ProdTtSasportalCustomersListQueryParams(
        dollar_xgafv="2",
        access_token="voluptatem",
        alt="proto",
        callback="sunt",
        fields="quo",
        key="voluptatum",
        oauth_token="doloremque",
        page_size=1362199492306722394,
        page_token="qui",
        pretty_print=True,
        quota_user="reiciendis",
        upload_type="eveniet",
        upload_protocol="et",
    ),
)
    
res = s.customers.prod_tt_sasportal_customers_list(req)

if res.sas_portal_list_customers_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->