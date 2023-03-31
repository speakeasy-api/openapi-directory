<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AndroidpublisherInapppurchasesGetRequest(
    alt="json",
    fields_="corrupti",
    key="provident",
    oauth_token="distinctio",
    package_name="quibusdam",
    pretty_print=False,
    product_id="unde",
    quota_user="nulla",
    token="corrupti",
    user_ip="illum",
)
    
res = s.inapppurchases.androidpublisher_inapppurchases_get(req, operations.AndroidpublisherInapppurchasesGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->