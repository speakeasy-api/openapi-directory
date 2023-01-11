<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PagespeedonlinePagespeedapiRunpagespeedRequest(
    query_params=operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams(
        alt="json",
        fields="nisi",
        filter_third_party_resources=True,
        key="facere",
        locale="pariatur",
        oauth_token="voluptate",
        pretty_print=False,
        quota_user="voluptatum",
        rule=[
            "quis",
            "ab",
        ],
        screenshot=True,
        strategy="mobile",
        url="doloremque",
        user_ip="voluptas",
    ),
)
    
res = s.pagespeedapi.pagespeedonline_pagespeedapi_runpagespeed(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->