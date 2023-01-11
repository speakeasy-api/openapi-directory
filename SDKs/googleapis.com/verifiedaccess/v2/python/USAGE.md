<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VerifiedaccessChallengeGenerateRequest(
    security=operations.VerifiedaccessChallengeGenerateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.VerifiedaccessChallengeGenerateQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="json",
        callback="voluptatem",
        fields="atque",
        key="ut",
        oauth_token="voluptate",
        pretty_print=True,
        quota_user="facilis",
        upload_type="nulla",
        upload_protocol="eius",
    ),
    request={
        "aliquam": "eum",
        "mollitia": "accusamus",
    },
)
    
res = s.challenge.verifiedaccess_challenge_generate(req)

if res.challenge is not None:
    # handle response
```
<!-- End SDK Example Usage -->