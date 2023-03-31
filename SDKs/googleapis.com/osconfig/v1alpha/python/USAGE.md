<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest(
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
    
res = s.projects.osconfig_projects_locations_instance_os_policies_compliances_list(req, operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_instance_os_policies_compliances_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->