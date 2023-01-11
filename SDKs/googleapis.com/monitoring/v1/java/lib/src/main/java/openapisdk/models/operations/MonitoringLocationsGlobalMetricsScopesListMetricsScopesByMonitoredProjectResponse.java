package openapisdk.models.operations;



public class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse {
    public String contentType;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMetricsScopesByMonitoredProjectResponse listMetricsScopesByMonitoredProjectResponse;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse withListMetricsScopesByMonitoredProjectResponse(openapisdk.models.shared.ListMetricsScopesByMonitoredProjectResponse listMetricsScopesByMonitoredProjectResponse) {
        this.listMetricsScopesByMonitoredProjectResponse = listMetricsScopesByMonitoredProjectResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}