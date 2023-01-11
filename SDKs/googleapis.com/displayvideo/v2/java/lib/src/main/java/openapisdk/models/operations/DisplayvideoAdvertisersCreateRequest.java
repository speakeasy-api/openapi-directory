package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCreateRequest {
    public DisplayvideoAdvertisersCreateQueryParams queryParams;
    public DisplayvideoAdvertisersCreateRequest withQueryParams(DisplayvideoAdvertisersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdvertiserInput request;
    public DisplayvideoAdvertisersCreateRequest withRequest(openapisdk.models.shared.AdvertiserInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersCreateSecurity security;
    public DisplayvideoAdvertisersCreateRequest withSecurity(DisplayvideoAdvertisersCreateSecurity security) {
        this.security = security;
        return this;
    }
}