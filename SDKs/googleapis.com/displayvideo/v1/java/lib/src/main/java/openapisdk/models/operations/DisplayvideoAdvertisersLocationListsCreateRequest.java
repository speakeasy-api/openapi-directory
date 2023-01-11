package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsCreateRequest {
    public DisplayvideoAdvertisersLocationListsCreatePathParams pathParams;
    public DisplayvideoAdvertisersLocationListsCreateRequest withPathParams(DisplayvideoAdvertisersLocationListsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersLocationListsCreateRequest withQueryParams(DisplayvideoAdvertisersLocationListsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationListInput request;
    public DisplayvideoAdvertisersLocationListsCreateRequest withRequest(openapisdk.models.shared.LocationListInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsCreateSecurity security;
    public DisplayvideoAdvertisersLocationListsCreateRequest withSecurity(DisplayvideoAdvertisersLocationListsCreateSecurity security) {
        this.security = security;
        return this;
    }
}