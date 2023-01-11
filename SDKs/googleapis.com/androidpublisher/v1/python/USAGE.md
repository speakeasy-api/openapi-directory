<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AndroidpublisherPurchasesCancelRequest(
    security=operations.AndroidpublisherPurchasesCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AndroidpublisherPurchasesCancelPathParams(
        package_name="eius",
        subscription_id="aut",
        token="itaque",
    ),
    query_params=operations.AndroidpublisherPurchasesCancelQueryParams(
        alt="json",
        fields="qui",
        key="earum",
        oauth_token="temporibus",
        pretty_print=False,
        quota_user="ullam",
        user_ip="et",
    ),
)
    
res = s.purchases.androidpublisher_purchases_cancel(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->