package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsCreateRequest {
    public DisplayvideoPartnersChannelsCreatePathParams pathParams;
    public DisplayvideoPartnersChannelsCreateRequest withPathParams(DisplayvideoPartnersChannelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoPartnersChannelsCreateQueryParams queryParams;
    public DisplayvideoPartnersChannelsCreateRequest withQueryParams(DisplayvideoPartnersChannelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelInput request;
    public DisplayvideoPartnersChannelsCreateRequest withRequest(openapisdk.models.shared.ChannelInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoPartnersChannelsCreateSecurity security;
    public DisplayvideoPartnersChannelsCreateRequest withSecurity(DisplayvideoPartnersChannelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}