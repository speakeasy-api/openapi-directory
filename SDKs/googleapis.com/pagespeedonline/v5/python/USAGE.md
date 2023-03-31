<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PagespeedonlinePagespeedapiRunpagespeedRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    captcha_token="unde",
    category=[
        "PERFORMANCE",
        "SEO",
        "BEST_PRACTICES",
        "PERFORMANCE",
    ],
    fields_="deserunt",
    key="suscipit",
    locale="iure",
    oauth_token="magnam",
    pretty_print=False,
    quota_user="debitis",
    strategy="STRATEGY_UNSPECIFIED",
    upload_type="delectus",
    upload_protocol="tempora",
    url="suscipit",
    utm_campaign="molestiae",
    utm_source="minus",
)
    
res = s.pagespeedapi.pagespeedonline_pagespeedapi_runpagespeed(req, operations.PagespeedonlinePagespeedapiRunpagespeedSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.pagespeed_api_pagespeed_response_v5 is not None:
    # handle response
```
<!-- End SDK Example Usage -->