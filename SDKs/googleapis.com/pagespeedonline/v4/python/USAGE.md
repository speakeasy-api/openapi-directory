<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PagespeedonlinePagespeedapiRunpagespeedRequest(
    query_params=operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams(
        alt="json",
        fields="dicta",
        filter_third_party_resources=True,
        key="velit",
        locale="et",
        oauth_token="nemo",
        pretty_print=False,
        quota_user="ipsam",
        rule=[
            "ipsam",
            "iure",
            "tempora",
        ],
        screenshot=False,
        snapshots=True,
        strategy="desktop",
        url="cum",
        user_ip="quod",
        utm_campaign="ullam",
        utm_source="expedita",
    ),
)
    
res = s.pagespeedapi.pagespeedonline_pagespeedapi_runpagespeed(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->