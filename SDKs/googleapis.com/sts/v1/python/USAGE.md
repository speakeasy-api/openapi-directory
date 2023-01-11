<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.StsIntrospectRequest(
    query_params=operations.StsIntrospectQueryParams(
        dollar_xgafv="2",
        access_token="est",
        alt="json",
        callback="nostrum",
        fields="ea",
        key="omnis",
        oauth_token="quia",
        pretty_print=True,
        quota_user="omnis",
        upload_type="soluta",
        upload_protocol="sequi",
    ),
    request=shared.GoogleIdentityStsV1IntrospectTokenRequest(
        token="neque",
        token_type_hint="et",
    ),
)
    
res = s.v1.sts_introspect(req)

if res.google_identity_sts_v1_introspect_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->