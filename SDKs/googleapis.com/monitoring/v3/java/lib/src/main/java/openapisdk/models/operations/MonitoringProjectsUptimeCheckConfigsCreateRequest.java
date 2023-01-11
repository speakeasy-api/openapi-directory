package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsUptimeCheckConfigsCreateRequest {
    public MonitoringProjectsUptimeCheckConfigsCreatePathParams pathParams;
    public MonitoringProjectsUptimeCheckConfigsCreateRequest withPathParams(MonitoringProjectsUptimeCheckConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsUptimeCheckConfigsCreateQueryParams queryParams;
    public MonitoringProjectsUptimeCheckConfigsCreateRequest withQueryParams(MonitoringProjectsUptimeCheckConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UptimeCheckConfig request;
    public MonitoringProjectsUptimeCheckConfigsCreateRequest withRequest(openapisdk.models.shared.UptimeCheckConfig request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsUptimeCheckConfigsCreateSecurity security;
    public MonitoringProjectsUptimeCheckConfigsCreateRequest withSecurity(MonitoringProjectsUptimeCheckConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}