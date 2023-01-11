package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsDashboardsPatchRequest {
    public MonitoringProjectsDashboardsPatchPathParams pathParams;
    public MonitoringProjectsDashboardsPatchRequest withPathParams(MonitoringProjectsDashboardsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsDashboardsPatchQueryParams queryParams;
    public MonitoringProjectsDashboardsPatchRequest withQueryParams(MonitoringProjectsDashboardsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Dashboard request;
    public MonitoringProjectsDashboardsPatchRequest withRequest(openapisdk.models.shared.Dashboard request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsDashboardsPatchSecurity security;
    public MonitoringProjectsDashboardsPatchRequest withSecurity(MonitoringProjectsDashboardsPatchSecurity security) {
        this.security = security;
        return this;
    }
}