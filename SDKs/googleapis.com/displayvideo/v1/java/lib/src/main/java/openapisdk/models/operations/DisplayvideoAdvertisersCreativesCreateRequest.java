package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCreativesCreateRequest {
    public DisplayvideoAdvertisersCreativesCreatePathParams pathParams;
    public DisplayvideoAdvertisersCreativesCreateRequest withPathParams(DisplayvideoAdvertisersCreativesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersCreativesCreateQueryParams queryParams;
    public DisplayvideoAdvertisersCreativesCreateRequest withQueryParams(DisplayvideoAdvertisersCreativesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeInput request;
    public DisplayvideoAdvertisersCreativesCreateRequest withRequest(openapisdk.models.shared.CreativeInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersCreativesCreateSecurity security;
    public DisplayvideoAdvertisersCreativesCreateRequest withSecurity(DisplayvideoAdvertisersCreativesCreateSecurity security) {
        this.security = security;
        return this;
    }
}