package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest {
    public MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams pathParams;
    public MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest withPathParams(MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams queryParams;
    public MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest withQueryParams(MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryRangeRequest request;
    public MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest withRequest(openapisdk.models.shared.QueryRangeRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity security;
    public MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest withSecurity(MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity security) {
        this.security = security;
        return this;
    }
}