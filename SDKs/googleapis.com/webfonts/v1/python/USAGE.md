<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WebfontsWebfontsListRequest(
    query_params=operations.WebfontsWebfontsListQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="json",
        callback="at",
        fields="omnis",
        key="dolores",
        oauth_token="perferendis",
        pretty_print=False,
        quota_user="debitis",
        sort="STYLE",
        upload_type="doloribus",
        upload_protocol="fugiat",
    ),
)
    
res = s.webfonts.webfonts_webfonts_list(req)

if res.webfont_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->