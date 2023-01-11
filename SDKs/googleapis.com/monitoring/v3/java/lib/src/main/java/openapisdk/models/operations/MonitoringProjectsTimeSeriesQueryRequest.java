package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsTimeSeriesQueryRequest {
    public MonitoringProjectsTimeSeriesQueryPathParams pathParams;
    public MonitoringProjectsTimeSeriesQueryRequest withPathParams(MonitoringProjectsTimeSeriesQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsTimeSeriesQueryQueryParams queryParams;
    public MonitoringProjectsTimeSeriesQueryRequest withQueryParams(MonitoringProjectsTimeSeriesQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryTimeSeriesRequest request;
    public MonitoringProjectsTimeSeriesQueryRequest withRequest(openapisdk.models.shared.QueryTimeSeriesRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsTimeSeriesQuerySecurity security;
    public MonitoringProjectsTimeSeriesQueryRequest withSecurity(MonitoringProjectsTimeSeriesQuerySecurity security) {
        this.security = security;
        return this;
    }
}