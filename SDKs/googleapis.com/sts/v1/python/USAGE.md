<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.StsIntrospectRequest(
    dollar_xgafv="2",
    google_identity_sts_v1_introspect_token_request=shared.GoogleIdentityStsV1IntrospectTokenRequest(
        token="provident",
        token_type_hint="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.v1.sts_introspect(req)

if res.google_identity_sts_v1_introspect_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->