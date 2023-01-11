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
        fields="architecto",
        include_subscribed=True,
        key="quaerat",
        max_change_id_count="in",
        oauth_token="quae",
        pretty_print=False,
        quota_user="omnis",
        start_change_id="incidunt",
        user_ip="eius",
    ),
)
    
res = s.about.drive_about_get(req)

if res.about is not None:
    # handle response
```
<!-- End SDK Example Usage -->