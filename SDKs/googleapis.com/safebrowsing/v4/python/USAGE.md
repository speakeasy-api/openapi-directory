<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SafebrowsingEncodedFullHashesGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    client_id="unde",
    client_version="nulla",
    encoded_request="corrupti",
    fields_="illum",
    key="vel",
    oauth_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.encoded_full_hashes.safebrowsing_encoded_full_hashes_get(req)

if res.google_security_safebrowsing_v4_find_full_hashes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->