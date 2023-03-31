<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BloggerBlogsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    blog_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.blogs.blogger_blogs_get(req, operations.BloggerBlogsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.blog is not None:
    # handle response
```
<!-- End SDK Example Usage -->