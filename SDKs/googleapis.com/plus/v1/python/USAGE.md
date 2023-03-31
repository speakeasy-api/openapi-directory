<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PlusActivitiesGetRequest(
    activity_id="corrupti",
    alt="json",
    fields_="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
)
    
res = s.activities.plus_activities_get(req, operations.PlusActivitiesGetSecurity(
    option1=operations.PlusActivitiesGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->