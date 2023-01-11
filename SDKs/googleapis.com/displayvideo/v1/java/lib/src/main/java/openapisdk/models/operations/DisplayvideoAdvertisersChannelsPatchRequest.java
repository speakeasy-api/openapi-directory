package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersChannelsPatchRequest {
    public DisplayvideoAdvertisersChannelsPatchPathParams pathParams;
    public DisplayvideoAdvertisersChannelsPatchRequest withPathParams(DisplayvideoAdvertisersChannelsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersChannelsPatchQueryParams queryParams;
    public DisplayvideoAdvertisersChannelsPatchRequest withQueryParams(DisplayvideoAdvertisersChannelsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelInput request;
    public DisplayvideoAdvertisersChannelsPatchRequest withRequest(openapisdk.models.shared.ChannelInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersChannelsPatchSecurity security;
    public DisplayvideoAdvertisersChannelsPatchRequest withSecurity(DisplayvideoAdvertisersChannelsPatchSecurity security) {
        this.security = security;
        return this;
    }
}