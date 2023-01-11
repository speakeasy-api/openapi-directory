package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCreativesPatchRequest {
    public DisplayvideoAdvertisersCreativesPatchPathParams pathParams;
    public DisplayvideoAdvertisersCreativesPatchRequest withPathParams(DisplayvideoAdvertisersCreativesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersCreativesPatchQueryParams queryParams;
    public DisplayvideoAdvertisersCreativesPatchRequest withQueryParams(DisplayvideoAdvertisersCreativesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeInput request;
    public DisplayvideoAdvertisersCreativesPatchRequest withRequest(openapisdk.models.shared.CreativeInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersCreativesPatchSecurity security;
    public DisplayvideoAdvertisersCreativesPatchRequest withSecurity(DisplayvideoAdvertisersCreativesPatchSecurity security) {
        this.security = security;
        return this;
    }
}