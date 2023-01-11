package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsTimeSeriesCreateRequest {
    public MonitoringProjectsTimeSeriesCreatePathParams pathParams;
    public MonitoringProjectsTimeSeriesCreateRequest withPathParams(MonitoringProjectsTimeSeriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsTimeSeriesCreateQueryParams queryParams;
    public MonitoringProjectsTimeSeriesCreateRequest withQueryParams(MonitoringProjectsTimeSeriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTimeSeriesRequest request;
    public MonitoringProjectsTimeSeriesCreateRequest withRequest(openapisdk.models.shared.CreateTimeSeriesRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsTimeSeriesCreateSecurity security;
    public MonitoringProjectsTimeSeriesCreateRequest withSecurity(MonitoringProjectsTimeSeriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}