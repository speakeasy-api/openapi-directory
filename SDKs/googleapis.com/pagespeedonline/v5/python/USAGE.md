<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PagespeedonlinePagespeedapiRunpagespeedRequest(
    security=operations.PagespeedonlinePagespeedapiRunpagespeedSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams(
        dollar_xgafv="2",
        access_token="dolore",
        alt="json",
        callback="corporis",
        captcha_token="quis",
        category=[
            "BEST_PRACTICES",
            "PWA",
        ],
        fields="et",
        key="ut",
        locale="ducimus",
        oauth_token="porro",
        pretty_print=True,
        quota_user="fugiat",
        strategy="STRATEGY_UNSPECIFIED",
        upload_type="vero",
        upload_protocol="accusantium",
        url="pariatur",
        utm_campaign="itaque",
        utm_source="ipsum",
    ),
)
    
res = s.pagespeedapi.pagespeedonline_pagespeedapi_runpagespeed(req)

if res.pagespeed_api_pagespeed_response_v5 is not None:
    # handle response
```
<!-- End SDK Example Usage -->