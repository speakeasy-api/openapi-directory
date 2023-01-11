<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CalendarACLDeleteRequest(
    security=operations.CalendarACLDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CalendarACLDeletePathParams(
        calendar_id="perferendis",
        rule_id="ut",
    ),
    query_params=operations.CalendarACLDeleteQueryParams(
        alt="json",
        fields="voluptate",
        key="in",
        oauth_token="dolorem",
        pretty_print=False,
        quota_user="mollitia",
        user_ip="quasi",
    ),
)
    
res = s.acl.calendar_acl_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->