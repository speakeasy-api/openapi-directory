package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsChannelsCreateRequest {
    public EventarcProjectsLocationsChannelsCreatePathParams pathParams;
    public EventarcProjectsLocationsChannelsCreateRequest withPathParams(EventarcProjectsLocationsChannelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsChannelsCreateQueryParams queryParams;
    public EventarcProjectsLocationsChannelsCreateRequest withQueryParams(EventarcProjectsLocationsChannelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelInput request;
    public EventarcProjectsLocationsChannelsCreateRequest withRequest(openapisdk.models.shared.ChannelInput request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsChannelsCreateSecurity security;
    public EventarcProjectsLocationsChannelsCreateRequest withSecurity(EventarcProjectsLocationsChannelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}