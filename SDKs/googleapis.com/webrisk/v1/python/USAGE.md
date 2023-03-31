<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebriskHashesSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    hash_prefix="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    threat_types=[
        "UNWANTED_SOFTWARE",
        "MALWARE",
        "SOCIAL_ENGINEERING",
    ],
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.hashes.webrisk_hashes_search(req, operations.WebriskHashesSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_webrisk_v1_search_hashes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->