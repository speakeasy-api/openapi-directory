<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GmailpostmastertoolsDomainsListRequest(
    security=operations.GmailpostmastertoolsDomainsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GmailpostmastertoolsDomainsListQueryParams(
        dollar_xgafv="1",
        access_token="est",
        alt="proto",
        callback="consectetur",
        fields="id",
        key="ab",
        oauth_token="ab",
        page_size=1046194056430361934,
        page_token="eum",
        pretty_print=True,
        quota_user="ut",
        upload_type="aut",
        upload_protocol="tempore",
    ),
)
    
res = s.domains.gmailpostmastertools_domains_list(req)

if res.list_domains_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->