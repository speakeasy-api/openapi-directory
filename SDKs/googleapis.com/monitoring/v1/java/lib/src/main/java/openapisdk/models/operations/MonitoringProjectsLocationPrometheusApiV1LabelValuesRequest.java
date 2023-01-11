package openapisdk.models.operations;



public class MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest {
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams pathParams;
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest withPathParams(MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams queryParams;
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest withQueryParams(MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity security;
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest withSecurity(MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity security) {
        this.security = security;
        return this;
    }
}