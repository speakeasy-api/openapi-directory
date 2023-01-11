package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersPatchRequest {
    public DisplayvideoUsersPatchPathParams pathParams;
    public DisplayvideoUsersPatchRequest withPathParams(DisplayvideoUsersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoUsersPatchQueryParams queryParams;
    public DisplayvideoUsersPatchRequest withQueryParams(DisplayvideoUsersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public DisplayvideoUsersPatchRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoUsersPatchSecurity security;
    public DisplayvideoUsersPatchRequest withSecurity(DisplayvideoUsersPatchSecurity security) {
        this.security = security;
        return this;
    }
}