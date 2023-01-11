package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1LabelsRequest {
    public MonitoringProjectsLocationPrometheusApiV1LabelsPathParams pathParams;
    public MonitoringProjectsLocationPrometheusApiV1LabelsRequest withPathParams(MonitoringProjectsLocationPrometheusApiV1LabelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams queryParams;
    public MonitoringProjectsLocationPrometheusApiV1LabelsRequest withQueryParams(MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLabelsRequest request;
    public MonitoringProjectsLocationPrometheusApiV1LabelsRequest withRequest(openapisdk.models.shared.ListLabelsRequest request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsLocationPrometheusApiV1LabelsSecurity security;
    public MonitoringProjectsLocationPrometheusApiV1LabelsRequest withSecurity(MonitoringProjectsLocationPrometheusApiV1LabelsSecurity security) {
        this.security = security;
        return this;
    }
}