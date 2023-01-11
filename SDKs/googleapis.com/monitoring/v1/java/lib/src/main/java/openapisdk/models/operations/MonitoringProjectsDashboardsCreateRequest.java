package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsDashboardsCreateRequest {
    public MonitoringProjectsDashboardsCreatePathParams pathParams;
    public MonitoringProjectsDashboardsCreateRequest withPathParams(MonitoringProjectsDashboardsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsDashboardsCreateQueryParams queryParams;
    public MonitoringProjectsDashboardsCreateRequest withQueryParams(MonitoringProjectsDashboardsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Dashboard request;
    public MonitoringProjectsDashboardsCreateRequest withRequest(openapisdk.models.shared.Dashboard request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsDashboardsCreateSecurity security;
    public MonitoringProjectsDashboardsCreateRequest withSecurity(MonitoringProjectsDashboardsCreateSecurity security) {
        this.security = security;
        return this;
    }
}