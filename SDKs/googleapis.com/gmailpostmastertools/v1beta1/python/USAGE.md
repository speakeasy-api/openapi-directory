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
        access_token="modi",
        alt="media",
        callback="et",
        fields="officia",
        key="aperiam",
        oauth_token="inventore",
        page_size=1881660267005961452,
        page_token="quia",
        pretty_print=True,
        quota_user="vel",
        upload_type="repellat",
        upload_protocol="eum",
    ),
)
    
res = s.domains.gmailpostmastertools_domains_list(req)

if res.list_domains_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->