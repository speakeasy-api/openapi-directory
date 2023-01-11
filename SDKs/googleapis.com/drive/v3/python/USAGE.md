<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DriveAboutGetRequest(
    security=operations.DriveAboutGetSecurity(
        option1=operations.DriveAboutGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.DriveAboutGetQueryParams(
        alt="json",
        fields="dolores",
        key="voluptates",
        oauth_token="illo",
        pretty_print=True,
        quota_user="eveniet",
        user_ip="molestiae",
    ),
)
    
res = s.about.drive_about_get(req)

if res.about is not None:
    # handle response
```
<!-- End SDK Example Usage -->