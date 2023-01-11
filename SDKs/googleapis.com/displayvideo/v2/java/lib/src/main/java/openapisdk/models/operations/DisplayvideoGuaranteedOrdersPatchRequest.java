package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoGuaranteedOrdersPatchRequest {
    public DisplayvideoGuaranteedOrdersPatchPathParams pathParams;
    public DisplayvideoGuaranteedOrdersPatchRequest withPathParams(DisplayvideoGuaranteedOrdersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoGuaranteedOrdersPatchQueryParams queryParams;
    public DisplayvideoGuaranteedOrdersPatchRequest withQueryParams(DisplayvideoGuaranteedOrdersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GuaranteedOrderInput request;
    public DisplayvideoGuaranteedOrdersPatchRequest withRequest(openapisdk.models.shared.GuaranteedOrderInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoGuaranteedOrdersPatchSecurity security;
    public DisplayvideoGuaranteedOrdersPatchRequest withSecurity(DisplayvideoGuaranteedOrdersPatchSecurity security) {
        this.security = security;
        return this;
    }
}