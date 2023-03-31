<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ReportsActivitiesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    actor_ip_address="distinctio",
    alt="proto",
    application_name="mobile",
    callback="nulla",
    customer_id="corrupti",
    end_time="illum",
    event_name="vel",
    fields_="error",
    filters="deserunt",
    group_id_filter="suscipit",
    key="iure",
    max_results=297534,
    oauth_token="debitis",
    org_unit_id="ipsa",
    page_token="delectus",
    pretty_print=False,
    quota_user="tempora",
    start_time="suscipit",
    upload_type="molestiae",
    upload_protocol="minus",
    user_key="placeat",
)
    
res = s.activities.reports_activities_list(req, operations.ReportsActivitiesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.activities is not None:
    # handle response
```
<!-- End SDK Example Usage -->