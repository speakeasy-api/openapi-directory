package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersPatchRequest {
    public EventarcProjectsLocationsTriggersPatchPathParams pathParams;
    public EventarcProjectsLocationsTriggersPatchRequest withPathParams(EventarcProjectsLocationsTriggersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsTriggersPatchQueryParams queryParams;
    public EventarcProjectsLocationsTriggersPatchRequest withQueryParams(EventarcProjectsLocationsTriggersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TriggerInput request;
    public EventarcProjectsLocationsTriggersPatchRequest withRequest(openapisdk.models.shared.TriggerInput request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsTriggersPatchSecurity security;
    public EventarcProjectsLocationsTriggersPatchRequest withSecurity(EventarcProjectsLocationsTriggersPatchSecurity security) {
        this.security = security;
        return this;
    }
}