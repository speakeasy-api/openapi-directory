<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DomainsrdapAutnumGetRequest(
    path_params=operations.DomainsrdapAutnumGetPathParams(
        autnum_id="asperiores",
    ),
    query_params=operations.DomainsrdapAutnumGetQueryParams(
        dollar_xgafv="1",
        access_token="debitis",
        alt="json",
        callback="esse",
        fields="ad",
        key="ea",
        oauth_token="sint",
        pretty_print=False,
        quota_user="consequatur",
        upload_type="et",
        upload_protocol="ipsa",
    ),
)
    
res = s.autnum.domainsrdap_autnum_get(req)

if res.rdap_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->