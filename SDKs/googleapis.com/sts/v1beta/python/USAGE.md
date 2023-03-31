<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.StsTokenRequest(
    dollar_xgafv="2",
    google_identity_sts_v1beta_exchange_token_request=shared.GoogleIdentityStsV1betaExchangeTokenRequest(
        audience="provident",
        grant_type="distinctio",
        options="quibusdam",
        requested_token_type="unde",
        scope="nulla",
        subject_token="corrupti",
        subject_token_type="illum",
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.v1beta.sts_token(req)

if res.google_identity_sts_v1beta_exchange_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->