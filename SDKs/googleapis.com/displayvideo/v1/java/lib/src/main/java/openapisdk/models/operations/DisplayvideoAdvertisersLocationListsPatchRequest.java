package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsPatchRequest {
    public DisplayvideoAdvertisersLocationListsPatchPathParams pathParams;
    public DisplayvideoAdvertisersLocationListsPatchRequest withPathParams(DisplayvideoAdvertisersLocationListsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsPatchQueryParams queryParams;
    public DisplayvideoAdvertisersLocationListsPatchRequest withQueryParams(DisplayvideoAdvertisersLocationListsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationListInput request;
    public DisplayvideoAdvertisersLocationListsPatchRequest withRequest(openapisdk.models.shared.LocationListInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsPatchSecurity security;
    public DisplayvideoAdvertisersLocationListsPatchRequest withSecurity(DisplayvideoAdvertisersLocationListsPatchSecurity security) {
        this.security = security;
        return this;
    }
}