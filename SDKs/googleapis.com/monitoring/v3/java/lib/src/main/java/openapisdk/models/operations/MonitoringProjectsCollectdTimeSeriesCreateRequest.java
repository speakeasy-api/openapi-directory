package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsCollectdTimeSeriesCreateRequest {
    public MonitoringProjectsCollectdTimeSeriesCreatePathParams pathParams;
    public MonitoringProjectsCollectdTimeSeriesCreateRequest withPathParams(MonitoringProjectsCollectdTimeSeriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsCollectdTimeSeriesCreateQueryParams queryParams;
    public MonitoringProjectsCollectdTimeSeriesCreateRequest withQueryParams(MonitoringProjectsCollectdTimeSeriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCollectdTimeSeriesRequest request;
    public MonitoringProjectsCollectdTimeSeriesCreateRequest withRequest(openapisdk.models.shared.CreateCollectdTimeSeriesRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsCollectdTimeSeriesCreateSecurity security;
    public MonitoringProjectsCollectdTimeSeriesCreateRequest withSecurity(MonitoringProjectsCollectdTimeSeriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}