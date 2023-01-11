<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PagespeedonlinePagespeedapiRunpagespeedRequest(
    query_params=operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams(
        alt="json",
        fields="consequatur",
        filter_third_party_resources=True,
        key="maiores",
        locale="fuga",
        oauth_token="ab",
        pretty_print=True,
        quota_user="fugiat",
        rule=[
            "consequuntur",
        ],
        screenshot=False,
        strategy="mobile",
        url="rerum",
        user_ip="cupiditate",
    ),
)
    
res = s.pagespeedapi.pagespeedonline_pagespeedapi_runpagespeed(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->