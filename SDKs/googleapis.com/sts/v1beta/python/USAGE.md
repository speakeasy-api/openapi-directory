<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.StsTokenRequest(
    query_params=operations.StsTokenQueryParams(
        dollar_xgafv="2",
        access_token="quas",
        alt="proto",
        callback="aut",
        fields="at",
        key="sint",
        oauth_token="at",
        pretty_print=True,
        quota_user="enim",
        upload_type="vel",
        upload_protocol="temporibus",
    ),
    request=shared.GoogleIdentityStsV1betaExchangeTokenRequest(
        audience="nihil",
        grant_type="repellendus",
        options="blanditiis",
        requested_token_type="possimus",
        scope="animi",
        subject_token="quo",
        subject_token_type="est",
    ),
)
    
res = s.v1beta.sts_token(req)

if res.google_identity_sts_v1beta_exchange_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->