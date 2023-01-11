<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SafebrowsingEncodedFullHashesGetRequest(
    path_params=operations.SafebrowsingEncodedFullHashesGetPathParams(
        encoded_request="libero",
    ),
    query_params=operations.SafebrowsingEncodedFullHashesGetQueryParams(
        dollar_xgafv="1",
        access_token="quo",
        alt="proto",
        callback="deserunt",
        client_id="amet",
        client_version="numquam",
        fields="tenetur",
        key="sit",
        oauth_token="reiciendis",
        pretty_print=False,
        quota_user="et",
        upload_type="unde",
        upload_protocol="aut",
    ),
)
    
res = s.encoded_full_hashes.safebrowsing_encoded_full_hashes_get(req)

if res.google_security_safebrowsing_v4_find_full_hashes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->