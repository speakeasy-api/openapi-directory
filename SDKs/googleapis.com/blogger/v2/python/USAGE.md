<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BloggerBlogsGetRequest(
    security=operations.BloggerBlogsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BloggerBlogsGetPathParams(
        blog_id="qui",
    ),
    query_params=operations.BloggerBlogsGetQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="proto",
        callback="consequuntur",
        fields="vitae",
        key="cupiditate",
        oauth_token="non",
        pretty_print=False,
        quota_user="deserunt",
        upload_type="nihil",
        upload_protocol="rerum",
    ),
)
    
res = s.blogs.blogger_blogs_get(req)

if res.blog is not None:
    # handle response
```
<!-- End SDK Example Usage -->