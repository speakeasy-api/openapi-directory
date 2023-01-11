<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ResellerCustomersGetRequest(
    security=operations.ResellerCustomersGetSecurity(
        option1=operations.ResellerCustomersGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.ResellerCustomersGetPathParams(
        customer_id="quidem",
    ),
    query_params=operations.ResellerCustomersGetQueryParams(
        dollar_xgafv="2",
        access_token="deleniti",
        alt="json",
        callback="enim",
        fields="dolorum",
        key="corporis",
        oauth_token="consequuntur",
        pretty_print=False,
        quota_user="aliquam",
        upload_type="reprehenderit",
        upload_protocol="unde",
    ),
)
    
res = s.customers.reseller_customers_get(req)

if res.customer is not None:
    # handle response
```
<!-- End SDK Example Usage -->