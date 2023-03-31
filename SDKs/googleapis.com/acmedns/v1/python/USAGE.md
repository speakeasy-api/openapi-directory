<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AcmednsAcmeChallengeSetsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    root_domain="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.acme_challenge_sets.acmedns_acme_challenge_sets_get(req)

if res.acme_challenge_set is not None:
    # handle response
```
<!-- End SDK Example Usage -->