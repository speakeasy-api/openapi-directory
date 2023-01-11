<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BloggerBlogUserInfosGetRequest(
    security=operations.BloggerBlogUserInfosGetSecurity(
        option1=operations.BloggerBlogUserInfosGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.BloggerBlogUserInfosGetPathParams(
        blog_id="ut",
        user_id="et",
    ),
    query_params=operations.BloggerBlogUserInfosGetQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="media",
        callback="et",
        fields="sint",
        key="reiciendis",
        max_posts=7414068409150291056,
        oauth_token="nihil",
        pretty_print=True,
        quota_user="dolore",
        upload_type="placeat",
        upload_protocol="ut",
    ),
)
    
res = s.blog_user_infos.blogger_blog_user_infos_get(req)

if res.blog_user_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->