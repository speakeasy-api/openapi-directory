package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1QueryRequest {
    public MonitoringProjectsLocationPrometheusApiV1QueryPathParams pathParams;
    public MonitoringProjectsLocationPrometheusApiV1QueryRequest withPathParams(MonitoringProjectsLocationPrometheusApiV1QueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1QueryQueryParams queryParams;
    public MonitoringProjectsLocationPrometheusApiV1QueryRequest withQueryParams(MonitoringProjectsLocationPrometheusApiV1QueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryInstantRequest request;
    public MonitoringProjectsLocationPrometheusApiV1QueryRequest withRequest(openapisdk.models.shared.QueryInstantRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1QuerySecurity security;
    public MonitoringProjectsLocationPrometheusApiV1QueryRequest withSecurity(MonitoringProjectsLocationPrometheusApiV1QuerySecurity security) {
        this.security = security;
        return this;
    }
}