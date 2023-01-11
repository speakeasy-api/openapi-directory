package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsMetricDescriptorsCreateRequest {
    public MonitoringProjectsMetricDescriptorsCreatePathParams pathParams;
    public MonitoringProjectsMetricDescriptorsCreateRequest withPathParams(MonitoringProjectsMetricDescriptorsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsMetricDescriptorsCreateQueryParams queryParams;
    public MonitoringProjectsMetricDescriptorsCreateRequest withQueryParams(MonitoringProjectsMetricDescriptorsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MetricDescriptor request;
    public MonitoringProjectsMetricDescriptorsCreateRequest withRequest(openapisdk.models.shared.MetricDescriptor request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsMetricDescriptorsCreateSecurity security;
    public MonitoringProjectsMetricDescriptorsCreateRequest withSecurity(MonitoringProjectsMetricDescriptorsCreateSecurity security) {
        this.security = security;
        return this;
    }
}