<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BloggerBlogUserInfosGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    blog_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    max_posts=847252,
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
    user_id="iure",
)
    
res = s.blog_user_infos.blogger_blog_user_infos_get(req, operations.BloggerBlogUserInfosGetSecurity(
    option1=operations.BloggerBlogUserInfosGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.blog_user_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->