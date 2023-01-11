package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersChannelsCreateRequest {
    public DisplayvideoAdvertisersChannelsCreatePathParams pathParams;
    public DisplayvideoAdvertisersChannelsCreateRequest withPathParams(DisplayvideoAdvertisersChannelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersChannelsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersChannelsCreateRequest withQueryParams(DisplayvideoAdvertisersChannelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelInput request;
    public DisplayvideoAdvertisersChannelsCreateRequest withRequest(openapisdk.models.shared.ChannelInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersChannelsCreateSecurity security;
    public DisplayvideoAdvertisersChannelsCreateRequest withSecurity(DisplayvideoAdvertisersChannelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}