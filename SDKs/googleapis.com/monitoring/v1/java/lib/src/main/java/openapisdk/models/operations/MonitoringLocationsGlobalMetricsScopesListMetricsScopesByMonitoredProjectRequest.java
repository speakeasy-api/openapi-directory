package openapisdk.models.operations;



public class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest {
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams queryParams;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest withQueryParams(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity security;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest withSecurity(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity security) {
        this.security = security;
        return this;
    }
}