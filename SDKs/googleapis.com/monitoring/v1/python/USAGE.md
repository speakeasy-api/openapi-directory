<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    monitored_resource_container="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.locations.monitoring_locations_global_metrics_scopes_list_metrics_scopes_by_monitored_project(req, operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity(
    option1=operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.list_metrics_scopes_by_monitored_project_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->