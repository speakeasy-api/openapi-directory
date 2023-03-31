<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    pretty_print=False,
    project="debitis",
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.gkehub_projects_locations_global_memberships_initialize_hub(req, operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.initialize_hub_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->