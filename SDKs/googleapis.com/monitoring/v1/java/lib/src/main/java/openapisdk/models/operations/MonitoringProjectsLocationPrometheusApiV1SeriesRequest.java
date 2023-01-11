package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1SeriesRequest {
    public MonitoringProjectsLocationPrometheusApiV1SeriesPathParams pathParams;
    public MonitoringProjectsLocationPrometheusApiV1SeriesRequest withPathParams(MonitoringProjectsLocationPrometheusApiV1SeriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams queryParams;
    public MonitoringProjectsLocationPrometheusApiV1SeriesRequest withQueryParams(MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QuerySeriesRequest request;
    public MonitoringProjectsLocationPrometheusApiV1SeriesRequest withRequest(openapisdk.models.shared.QuerySeriesRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1SeriesSecurity security;
    public MonitoringProjectsLocationPrometheusApiV1SeriesRequest withSecurity(MonitoringProjectsLocationPrometheusApiV1SeriesSecurity security) {
        this.security = security;
        return this;
    }
}