<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AppsactivityActivitiesListRequest(
    security=operations.AppsactivityActivitiesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.AppsactivityActivitiesListQueryParams(
        alt="json",
        drive_ancestor_id="et",
        drive_file_id="eveniet",
        fields="corrupti",
        grouping_strategy="none",
        key="itaque",
        oauth_token="fugiat",
        page_size=9061303465946652355,
        page_token="quod",
        pretty_print=False,
        quota_user="pariatur",
        source="aut",
        user_id="et",
        user_ip="eum",
    ),
)
    
res = s.activities.appsactivity_activities_list(req)

if res.list_activities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->