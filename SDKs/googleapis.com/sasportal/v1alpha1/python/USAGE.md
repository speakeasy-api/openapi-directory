<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SasportalCustomersListRequest(
    security=operations.SasportalCustomersListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.SasportalCustomersListQueryParams(
        dollar_xgafv="1",
        access_token="tempore",
        alt="proto",
        callback="dolorem",
        fields="voluptas",
        key="omnis",
        oauth_token="nulla",
        page_size=6149356500451182273,
        page_token="ab",
        pretty_print=True,
        quota_user="natus",
        upload_type="ipsum",
        upload_protocol="sed",
    ),
)
    
res = s.customers.sasportal_customers_list(req)

if res.sas_portal_list_customers_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->