package openapisdk.models.operations;



public class MonitoringProjectsTimeSeriesListRequest {
    public MonitoringProjectsTimeSeriesListPathParams pathParams;
    public MonitoringProjectsTimeSeriesListRequest withPathParams(MonitoringProjectsTimeSeriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsTimeSeriesListQueryParams queryParams;
    public MonitoringProjectsTimeSeriesListRequest withQueryParams(MonitoringProjectsTimeSeriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsTimeSeriesListSecurity security;
    public MonitoringProjectsTimeSeriesListRequest withSecurity(MonitoringProjectsTimeSeriesListSecurity security) {
        this.security = security;
        return this;
    }
}