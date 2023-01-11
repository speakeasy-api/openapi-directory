package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesCreateRequest {
    public MonitoringServicesCreatePathParams pathParams;
    public MonitoringServicesCreateRequest withPathParams(MonitoringServicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringServicesCreateQueryParams queryParams;
    public MonitoringServicesCreateRequest withQueryParams(MonitoringServicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInput request;
    public MonitoringServicesCreateRequest withRequest(openapisdk.models.shared.ServiceInput request) {
        this.request = request;
        return this;
    }
    public MonitoringServicesCreateSecurity security;
    public MonitoringServicesCreateRequest withSecurity(MonitoringServicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}