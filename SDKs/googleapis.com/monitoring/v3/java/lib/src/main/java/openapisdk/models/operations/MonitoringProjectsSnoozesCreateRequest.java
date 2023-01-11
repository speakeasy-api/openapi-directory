package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsSnoozesCreateRequest {
    public MonitoringProjectsSnoozesCreatePathParams pathParams;
    public MonitoringProjectsSnoozesCreateRequest withPathParams(MonitoringProjectsSnoozesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitoringProjectsSnoozesCreateQueryParams queryParams;
    public MonitoringProjectsSnoozesCreateRequest withQueryParams(MonitoringProjectsSnoozesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Snooze request;
    public MonitoringProjectsSnoozesCreateRequest withRequest(openapisdk.models.shared.Snooze request) {
        this.request = request;
        return this;
    }
    public MonitoringProjectsSnoozesCreateSecurity security;
    public MonitoringProjectsSnoozesCreateRequest withSecurity(MonitoringProjectsSnoozesCreateSecurity security) {
        this.security = security;
        return this;
    }
}