<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WebriskHashesSearchRequest(
    security=operations.WebriskHashesSearchSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.WebriskHashesSearchQueryParams(
        dollar_xgafv="2",
        access_token="doloremque",
        alt="proto",
        callback="iure",
        fields="libero",
        hash_prefix="libero",
        key="aut",
        oauth_token="qui",
        pretty_print=True,
        quota_user="nihil",
        threat_types=[
            "THREAT_TYPE_UNSPECIFIED",
            "MALWARE",
        ],
        upload_type="numquam",
        upload_protocol="recusandae",
    ),
)
    
res = s.hashes.webrisk_hashes_search(req)

if res.google_cloud_webrisk_v1_search_hashes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->