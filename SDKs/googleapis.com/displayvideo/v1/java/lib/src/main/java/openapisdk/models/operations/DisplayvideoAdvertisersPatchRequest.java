package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersPatchRequest {
    public DisplayvideoAdvertisersPatchPathParams pathParams;
    public DisplayvideoAdvertisersPatchRequest withPathParams(DisplayvideoAdvertisersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersPatchQueryParams queryParams;
    public DisplayvideoAdvertisersPatchRequest withQueryParams(DisplayvideoAdvertisersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdvertiserInput request;
    public DisplayvideoAdvertisersPatchRequest withRequest(openapisdk.models.shared.AdvertiserInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersPatchSecurity security;
    public DisplayvideoAdvertisersPatchRequest withSecurity(DisplayvideoAdvertisersPatchSecurity security) {
        this.security = security;
        return this;
    }
}