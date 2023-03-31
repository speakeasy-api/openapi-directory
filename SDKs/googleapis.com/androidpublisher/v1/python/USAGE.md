<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AndroidpublisherPurchasesCancelRequest(
    alt="json",
    fields_="corrupti",
    key="provident",
    oauth_token="distinctio",
    package_name="quibusdam",
    pretty_print=False,
    quota_user="unde",
    subscription_id="nulla",
    token="corrupti",
    user_ip="illum",
)
    
res = s.purchases.androidpublisher_purchases_cancel(req, operations.AndroidpublisherPurchasesCancelSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->