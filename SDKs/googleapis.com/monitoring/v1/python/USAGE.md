<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest(
    security=operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity(
        option1=operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams(
        dollar_xgafv="2",
        access_token="voluptatum",
        alt="proto",
        callback="odit",
        fields="ipsa",
        key="aspernatur",
        monitored_resource_container="deserunt",
        oauth_token="vitae",
        pretty_print=True,
        quota_user="atque",
        upload_type="possimus",
        upload_protocol="ex",
    ),
)
    
res = s.locations.monitoring_locations_global_metrics_scopes_list_metrics_scopes_by_monitored_project(req)

if res.list_metrics_scopes_by_monitored_project_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->