package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesChannelsCreateRequest {
    public FirebasehostingSitesChannelsCreatePathParams pathParams;
    public FirebasehostingSitesChannelsCreateRequest withPathParams(FirebasehostingSitesChannelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesChannelsCreateQueryParams queryParams;
    public FirebasehostingSitesChannelsCreateRequest withQueryParams(FirebasehostingSitesChannelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelInput request;
    public FirebasehostingSitesChannelsCreateRequest withRequest(openapisdk.models.shared.ChannelInput request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesChannelsCreateSecurity security;
    public FirebasehostingSitesChannelsCreateRequest withSecurity(FirebasehostingSitesChannelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}