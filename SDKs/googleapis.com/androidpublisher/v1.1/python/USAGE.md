<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AndroidpublisherInapppurchasesGetRequest(
    security=operations.AndroidpublisherInapppurchasesGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AndroidpublisherInapppurchasesGetPathParams(
        package_name="molestiae",
        product_id="quas",
        token="assumenda",
    ),
    query_params=operations.AndroidpublisherInapppurchasesGetQueryParams(
        alt="json",
        fields="eos",
        key="ut",
        oauth_token="nulla",
        pretty_print=False,
        quota_user="cupiditate",
        user_ip="dolores",
    ),
)
    
res = s.inapppurchases.androidpublisher_inapppurchases_get(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->