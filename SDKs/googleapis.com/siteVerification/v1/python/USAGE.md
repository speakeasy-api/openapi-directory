<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SiteVerificationWebResourceDeleteRequest(
    security=operations.SiteVerificationWebResourceDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SiteVerificationWebResourceDeletePathParams(
        id="rerum",
    ),
    query_params=operations.SiteVerificationWebResourceDeleteQueryParams(
        alt="json",
        fields="quasi",
        key="mollitia",
        oauth_token="ipsa",
        pretty_print=True,
        quota_user="vitae",
        user_ip="omnis",
    ),
)
    
res = s.web_resource.site_verification_web_resource_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->