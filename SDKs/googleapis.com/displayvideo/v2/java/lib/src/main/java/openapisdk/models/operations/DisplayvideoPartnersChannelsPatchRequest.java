package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsPatchRequest {
    public DisplayvideoPartnersChannelsPatchPathParams pathParams;
    public DisplayvideoPartnersChannelsPatchRequest withPathParams(DisplayvideoPartnersChannelsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoPartnersChannelsPatchQueryParams queryParams;
    public DisplayvideoPartnersChannelsPatchRequest withQueryParams(DisplayvideoPartnersChannelsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelInput request;
    public DisplayvideoPartnersChannelsPatchRequest withRequest(openapisdk.models.shared.ChannelInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoPartnersChannelsPatchSecurity security;
    public DisplayvideoPartnersChannelsPatchRequest withSecurity(DisplayvideoPartnersChannelsPatchSecurity security) {
        this.security = security;
        return this;
    }
}