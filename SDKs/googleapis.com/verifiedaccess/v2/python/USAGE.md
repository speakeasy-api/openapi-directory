<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VerifiedaccessChallengeGenerateRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
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
    
res = s.challenge.verifiedaccess_challenge_generate(req, operations.VerifiedaccessChallengeGenerateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.challenge is not None:
    # handle response
```
<!-- End SDK Example Usage -->