<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DialogflowProjectsLocationsAgentsChangelogsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    oauth_token="illum",
    page_size=423655,
    page_token="error",
    parent="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.projects.dialogflow_projects_locations_agents_changelogs_list(req, operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity(
    option1=operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_cloud_dialogflow_cx_v3beta1_list_changelogs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->