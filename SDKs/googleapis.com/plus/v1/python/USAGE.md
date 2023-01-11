<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PlusActivitiesGetRequest(
    security=operations.PlusActivitiesGetSecurity(
        option1=operations.PlusActivitiesGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.PlusActivitiesGetPathParams(
        activity_id="aut",
    ),
    query_params=operations.PlusActivitiesGetQueryParams(
        alt="json",
        fields="eligendi",
        key="officiis",
        oauth_token="dolor",
        pretty_print=True,
        quota_user="corrupti",
        user_ip="qui",
    ),
)
    
res = s.activities.plus_activities_get(req)

if res.activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->