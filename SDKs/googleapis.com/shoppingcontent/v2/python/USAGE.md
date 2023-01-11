<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ContentAccountsAuthinfoRequest(
    security=operations.ContentAccountsAuthinfoSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.ContentAccountsAuthinfoQueryParams(
        dollar_xgafv="1",
        access_token="fugiat",
        alt="json",
        callback="culpa",
        fields="non",
        key="labore",
        oauth_token="sit",
        pretty_print=False,
        quota_user="aut",
        upload_type="nemo",
        upload_protocol="dolorum",
    ),
)
    
res = s.accounts.content_accounts_authinfo(req)

if res.accounts_auth_info_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->