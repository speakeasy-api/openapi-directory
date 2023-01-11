package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsChannelConnectionsCreateRequest {
    public EventarcProjectsLocationsChannelConnectionsCreatePathParams pathParams;
    public EventarcProjectsLocationsChannelConnectionsCreateRequest withPathParams(EventarcProjectsLocationsChannelConnectionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsChannelConnectionsCreateQueryParams queryParams;
    public EventarcProjectsLocationsChannelConnectionsCreateRequest withQueryParams(EventarcProjectsLocationsChannelConnectionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelConnectionInput request;
    public EventarcProjectsLocationsChannelConnectionsCreateRequest withRequest(openapisdk.models.shared.ChannelConnectionInput request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsChannelConnectionsCreateSecurity security;
    public EventarcProjectsLocationsChannelConnectionsCreateRequest withSecurity(EventarcProjectsLocationsChannelConnectionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}