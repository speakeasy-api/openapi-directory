package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersCreateRequest {
    public EventarcProjectsLocationsTriggersCreatePathParams pathParams;
    public EventarcProjectsLocationsTriggersCreateRequest withPathParams(EventarcProjectsLocationsTriggersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsTriggersCreateQueryParams queryParams;
    public EventarcProjectsLocationsTriggersCreateRequest withQueryParams(EventarcProjectsLocationsTriggersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TriggerInput request;
    public EventarcProjectsLocationsTriggersCreateRequest withRequest(openapisdk.models.shared.TriggerInput request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsTriggersCreateSecurity security;
    public EventarcProjectsLocationsTriggersCreateRequest withSecurity(EventarcProjectsLocationsTriggersCreateSecurity security) {
        this.security = security;
        return this;
    }
}