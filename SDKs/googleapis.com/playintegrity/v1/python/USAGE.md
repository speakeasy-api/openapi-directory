<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PlayintegrityDecodeIntegrityTokenRequest(
    dollar_xgafv="2",
    decode_integrity_token_request=shared.DecodeIntegrityTokenRequest(
        integrity_token="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    package_name="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.v1.playintegrity_decode_integrity_token(req, operations.PlayintegrityDecodeIntegrityTokenSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.decode_integrity_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->