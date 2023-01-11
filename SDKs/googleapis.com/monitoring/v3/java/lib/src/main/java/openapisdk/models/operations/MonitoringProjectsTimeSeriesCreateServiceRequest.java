package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsTimeSeriesCreateServiceRequest {
    public MonitoringProjectsTimeSeriesCreateServicePathParams pathParams;
    public MonitoringProjectsTimeSeriesCreateServiceRequest withPathParams(MonitoringProjectsTimeSeriesCreateServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsTimeSeriesCreateServiceQueryParams queryParams;
    public MonitoringProjectsTimeSeriesCreateServiceRequest withQueryParams(MonitoringProjectsTimeSeriesCreateServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTimeSeriesRequest request;
    public MonitoringProjectsTimeSeriesCreateServiceRequest withRequest(openapisdk.models.shared.CreateTimeSeriesRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsTimeSeriesCreateServiceSecurity security;
    public MonitoringProjectsTimeSeriesCreateServiceRequest withSecurity(MonitoringProjectsTimeSeriesCreateServiceSecurity security) {
        this.security = security;
        return this;
    }
}