<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AppsactivityActivitiesListRequest(
    alt="json",
    drive_ancestor_id="corrupti",
    drive_file_id="provident",
    fields_="distinctio",
    grouping_strategy="none",
    key="unde",
    oauth_token="nulla",
    page_size=544883,
    page_token="illum",
    pretty_print=False,
    quota_user="vel",
    source="error",
    user_id="deserunt",
    user_ip="suscipit",
)
    
res = s.activities.appsactivity_activities_list(req, operations.AppsactivityActivitiesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_activities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->